import fitz
import re
import json

doc_path = 'ba-academy/docs/Sách 100 ngày viết về nghề BA - A5 (3) (1) (1).pdf'
doc = fitz.open(doc_path)
print(f"Total pages: {len(doc)}")

days = {}
for pno in range(len(doc)):
    txt = doc[pno].get_text()
    m = re.search(r'D\s*A\s*Y\s*(\d+)\s*/\s*1\s*0\s*0', txt, re.IGNORECASE)
    if m:
        d = int(m.group(1))
        if d not in days:
            lines = [l.strip() for l in txt.split('\n') if l.strip()]
            idx = 0
            for i, l in enumerate(lines):
                if re.search(r'D\s*A\s*Y', l, re.IGNORECASE):
                    idx = i
                    break
            title_parts = lines[idx+1:idx+4]
            title = ' '.join(title_parts)
            days[d] = {
                'day': d,
                'page': pno + 1,
                'title': title
            }

print(f"Days found: {len(days)}")
missing = [d for d in range(1, 101) if d not in days]
print(f"Missing days: {missing}")

for d in sorted(days.keys())[:15]:
    item = days[d]
    print(f"DAY {item['day']} (Page {item['page']}): {item['title'][:80]}")

print("...")
for d in sorted(days.keys())[-10:]:
    item = days[d]
    print(f"DAY {item['day']} (Page {item['page']}): {item['title'][:80]}")

with open('ba-academy/scripts/days_extracted.json', 'w', encoding='utf-8') as f:
    json.dump(days, f, ensure_ascii=False, indent=2)
print("Saved to ba-academy/scripts/days_extracted.json")
