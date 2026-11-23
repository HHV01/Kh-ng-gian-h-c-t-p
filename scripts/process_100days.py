import fitz
import re
import json

doc_path = 'ba-academy/docs/Sách 100 ngày viết về nghề BA - A5 (3) (1) (1).pdf'
doc = fitz.open(doc_path)
total_pages = len(doc)

# Step 1: Find start page for each Day
day_pages = {}
for pno in range(total_pages):
    txt = doc[pno].get_text()
    m = re.search(r'D\s*A\s*Y\s*([\d\s]+?)\s*/\s*1\s*0\s*0', txt, re.IGNORECASE)
    if m:
        num_str = re.sub(r'\s+', '', m.group(1))
        if num_str.isdigit():
            d = int(num_str)
            if d not in day_pages:
                day_pages[d] = pno

sorted_days = sorted(day_pages.keys())
print(f"Found {len(sorted_days)} days.")

# Topic keywords mapping
topic_keywords = {
    'Testing & UAT': ['test', 'uat', 'bug', 'lỗi', 'nghiệm thu', 'qa', 'qc', 'kiểm thử', 'regression', 'release'],
    'Dữ liệu & SQL': ['dữ liệu', 'data', 'sql', 'database', 'bảng', 'trường dữ liệu', 'migration', 'sync', 'entity'],
    'Mô hình hóa quy trình': ['quy trình', 'flow', 'sơ đồ', 'bpmn', 'flowchart', 'luồng', 'state machine', 'trạng thái'],
    'Agile & Scrum': ['sprint', 'scrum', 'agile', 'po', 'product owner', 'backlog', 'story', 'invest', 'jira'],
    'UX & Product Thinking': ['ux', 'ui', 'giao diện', 'trải nghiệm', 'người dùng', 'user journey', 'persona', 'onboarding'],
    'Khai thác yêu cầu': ['khai thác', 'elicit', 'phỏng vấn', 'workshop', 'stakeholder', 'hỏi', 'lắng nghe', 'khách hàng'],
    'Đặc tả & Quản lý yêu cầu': ['đặc tả', 'srs', 'brd', 'acceptance criteria', 'ac', 'truy vết', 'traceability', 'scope', 'phạm vi', 'change request', 'cr'],
    'Phân tích & thiết kế giải pháp': ['giải pháp', 'solution', 'kiến trúc', 'architecture', 'tích hợp', 'api', 'hệ thống', 'system'],
    'Kỹ năng & Phỏng vấn BA': ['kỹ năng', 'phỏng vấn', 'tư duy', 'sự nghiệp', 'junior', 'senior', 'mentor', 'giao tiếp', 'tranh luận', 'conflict', 'đàm phán'],
    'Nền tảng BA': ['nền tảng', 'vai trò', 'bản chất', 'nghề ba', 'babok', 'core', 'khái niệm']
}

def detect_topic(title, content):
    comb = (title + ' ' + content).lower()
    scores = {}
    for top, kws in topic_keywords.items():
        score = sum(1 for kw in kws if kw in comb)
        scores[top] = score
    best_topic = max(scores, key=scores.get)
    if scores[best_topic] == 0:
        return 'Nền tảng BA'
    return best_topic

extracted_days = []
for idx, d in enumerate(sorted_days):
    start_p = day_pages[d]
    end_p = day_pages[sorted_days[idx + 1]] if idx + 1 < len(sorted_days) else total_pages
    
    # Collect full text for this day
    day_text = ""
    for p in range(start_p, end_p):
        day_text += doc[p].get_text() + "\n"
        
    lines = [l.strip() for l in day_text.split('\n') if l.strip()]
    
    # Find day header line
    header_idx = 0
    for i, l in enumerate(lines):
        if re.search(r'D\s*A\s*Y\s*[\d\s]+/\s*1\s*0\s*0', l, re.IGNORECASE):
            header_idx = i
            break
            
    title_candidates = lines[header_idx + 1 : header_idx + 4]
    raw_title = " - ".join(title_candidates[:2]).strip()
    # Clean up title
    raw_title = re.sub(r'^[0-9\.\-\:\s]+', '', raw_title)
    if len(raw_title) > 90:
        raw_title = raw_title[:87] + '...'
    if not raw_title:
        raw_title = f"Bài học thực chiến ngày {d}"
        
    topic = detect_topic(raw_title, day_text[:500])
    
    # Extract key takeaway and project reflection question
    # We create synthesized high-value takeaway & application question reflecting author's notes
    takeaway = f"Kinh nghiệm thực chiến DAY {d}: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp."
    
    # Check if there are specific sections in text
    if "BABOK" in day_text:
        takeaway += " Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu."
    elif "stakeholder" in day_text.lower() or "khách" in day_text.lower():
        takeaway += " Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh."
    elif "logic" in day_text.lower() or "lỗi" in day_text.lower() or "case" in day_text.lower():
        takeaway += " Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic."
        
    project_question = f"Trong dự án hiện tại của bạn, tình huống tương tự DAY {d} ({raw_title}) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?"

    extracted_days.append({
        'day': d,
        'page': start_p + 1,
        'endPage': end_p,
        'title': raw_title,
        'topic': topic,
        'takeaway': takeaway,
        'projectQuestion': project_question,
        'snippet': day_text[:400].replace('\n', ' ')
    })

print(f"Successfully processed {len(extracted_days)} days.")
with open('ba-academy/scripts/extracted_days_final.json', 'w', encoding='utf-8') as f:
    json.dump(extracted_days, f, ensure_ascii=False, indent=2)
print("Saved to ba-academy/scripts/extracted_days_final.json")
