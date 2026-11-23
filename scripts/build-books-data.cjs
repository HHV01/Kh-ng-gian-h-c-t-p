const fs = require('fs');
const path = require('path');

console.log('Generating complete dist/books-data.js...');

const topicLessons = require('./topics-definitions.cjs');
const daysData = require('./extracted_days_final.json');

// Map days to topicLessonIds
const dayToLessonMap = {
  1: 'TOPIC-UAT-VERIFICATION',
  2: 'TOPIC-TRACEABILITY',
  3: 'TOPIC-STAKEHOLDER-MGMT',
  4: 'TOPIC-BA-PLANNING-GOVERNANCE',
  5: 'TOPIC-AC-GHERKIN',
  6: 'TOPIC-BACCM',
  7: 'TOPIC-BEHAVIORAL-INTERVIEW',
  8: 'TOPIC-BEHAVIORAL-INTERVIEW',
  9: 'TOPIC-IMPACT-ANALYSIS',
  10: 'TOPIC-AGILE-USER-STORY',
  11: 'TOPIC-STAKEHOLDER-MGMT',
  12: 'TOPIC-SOLUTION-ARCHITECTURE',
  13: 'TOPIC-DATA-SQL-RECON',
  14: 'TOPIC-ELICITATION-TECH',
  15: 'TOPIC-BPMN-PROCESS',
  16: 'TOPIC-UAT-VERIFICATION',
  17: 'TOPIC-TRACEABILITY',
  18: 'TOPIC-BA-PLANNING-GOVERNANCE',
  19: 'TOPIC-BACCM',
  20: 'TOPIC-BEHAVIORAL-INTERVIEW',
  21: 'TOPIC-ELICITATION-TECH',
  22: 'TOPIC-AC-GHERKIN',
  23: 'TOPIC-IMPACT-ANALYSIS',
  24: 'TOPIC-SOLUTION-ARCHITECTURE',
  25: 'TOPIC-BPMN-PROCESS',
  26: 'TOPIC-AGILE-USER-STORY',
  27: 'TOPIC-DATA-SQL-RECON',
  28: 'TOPIC-STAKEHOLDER-MGMT',
  29: 'TOPIC-AC-GHERKIN',
  30: 'TOPIC-BEHAVIORAL-INTERVIEW',
  31: 'TOPIC-DATA-SQL-RECON',
  32: 'TOPIC-BA-PLANNING-GOVERNANCE',
  33: 'TOPIC-BPMN-PROCESS',
  34: 'TOPIC-BACCM',
  35: 'TOPIC-ELICITATION-TECH',
  36: 'TOPIC-BEHAVIORAL-INTERVIEW',
  37: 'TOPIC-AC-GHERKIN',
  38: 'TOPIC-SOLUTION-ARCHITECTURE',
  39: 'TOPIC-TRACEABILITY',
  40: 'TOPIC-UAT-VERIFICATION',
  41: 'TOPIC-STATE-MACHINE',
  42: 'TOPIC-ELICITATION-TECH',
  43: 'TOPIC-BACCM',
  44: 'TOPIC-UAT-VERIFICATION',
  45: 'TOPIC-BPMN-PROCESS',
  46: 'TOPIC-STAKEHOLDER-MGMT',
  47: 'TOPIC-IMPACT-ANALYSIS',
  48: 'TOPIC-AGILE-USER-STORY',
  49: 'TOPIC-DATA-SQL-RECON',
  50: 'TOPIC-UX-PRODUCT-DISCOVERY',
  51: 'TOPIC-AC-GHERKIN',
  52: 'TOPIC-BEHAVIORAL-INTERVIEW',
  53: 'TOPIC-AC-GHERKIN',
  54: 'TOPIC-SOLUTION-ARCHITECTURE',
  55: 'TOPIC-BPMN-PROCESS',
  56: 'TOPIC-STATE-MACHINE',
  57: 'TOPIC-DATA-SQL-RECON',
  58: 'TOPIC-BPMN-PROCESS',
  59: 'TOPIC-BACCM',
  60: 'TOPIC-BA-PLANNING-GOVERNANCE',
  61: 'TOPIC-ELICITATION-TECH',
  62: 'TOPIC-SOLUTION-ARCHITECTURE',
  63: 'TOPIC-TRACEABILITY',
  64: 'TOPIC-STAKEHOLDER-MGMT',
  65: 'TOPIC-UAT-VERIFICATION',
  66: 'TOPIC-IMPACT-ANALYSIS',
  67: 'TOPIC-AC-GHERKIN',
  68: 'TOPIC-UX-PRODUCT-DISCOVERY',
  69: 'TOPIC-STATE-MACHINE',
  70: 'TOPIC-UAT-VERIFICATION',
  71: 'TOPIC-DATA-SQL-RECON',
  72: 'TOPIC-AGILE-USER-STORY',
  73: 'TOPIC-BPMN-PROCESS',
  74: 'TOPIC-ELICITATION-TECH',
  75: 'TOPIC-TRACEABILITY',
  76: 'TOPIC-SOLUTION-ARCHITECTURE',
  77: 'TOPIC-AC-GHERKIN',
  78: 'TOPIC-BACCM',
  79: 'TOPIC-BEHAVIORAL-INTERVIEW',
  80: 'TOPIC-STAKEHOLDER-MGMT',
  81: 'TOPIC-IMPACT-ANALYSIS',
  82: 'TOPIC-UX-PRODUCT-DISCOVERY',
  83: 'TOPIC-BA-PLANNING-GOVERNANCE',
  84: 'TOPIC-STATE-MACHINE',
  85: 'TOPIC-DATA-SQL-RECON',
  86: 'TOPIC-BPMN-PROCESS',
  87: 'TOPIC-ELICITATION-TECH',
  88: 'TOPIC-SOLUTION-ARCHITECTURE',
  89: 'TOPIC-TRACEABILITY',
  90: 'TOPIC-AC-GHERKIN',
  91: 'TOPIC-BACCM',
  92: 'TOPIC-UAT-VERIFICATION',
  93: 'TOPIC-AGILE-USER-STORY',
  94: 'TOPIC-STAKEHOLDER-MGMT',
  95: 'TOPIC-DATA-SQL-RECON',
  96: 'TOPIC-IMPACT-ANALYSIS',
  97: 'TOPIC-STATE-MACHINE',
  98: 'TOPIC-SOLUTION-ARCHITECTURE',
  99: 'TOPIC-UX-PRODUCT-DISCOVERY',
  100: 'TOPIC-BEHAVIORAL-INTERVIEW'
};

const processedDays = daysData.map(d => {
  const lessonId = dayToLessonMap[d.day] || 'TOPIC-BACCM';
  return {
    ...d,
    topicLessonId: lessonId,
    authorNote: 'Kinh nghiệm nghề thực chiến của tác giả Nguyễn Bá Phú đúc kết qua hơn 10 năm làm việc trong các dự án phần mềm.'
  };
});

// Books metadata
const booksMeta = [
  {
    id: 'babok-v3',
    title: 'A Guide to the Business Analysis Body of Knowledge (BABOK® Guide v3)',
    author: 'International Institute of Business Analysis (IIBA)',
    year: '2015',
    totalPages: 514,
    status: 'Full (Đầy đủ 11 chương & 50 kỹ thuật)',
    description: 'Tiêu chuẩn quốc tế chuẩn mực và toàn diện nhất thế giới về nghề Business Analysis. Bao phủ 6 Vùng tri thức (30 Tasks), Mô hình BACCM, 50 Kỹ thuật, Năng lực nền tảng và 5 Góc nhìn chuyên môn.',
    color: '#6056d9',
    icon: '📘'
  },
  {
    id: 'bcs-ba-3rd',
    title: 'Business Analysis (3rd Edition)',
    author: 'Debra Paul, Donald Yeates, James Cadle (BCS - The Chartered Institute for IT)',
    year: '2014',
    totalPages: 235,
    status: 'Split 1 (Có đầy đủ Chương 1 đến Chương 8; Chương 9 đến 14 thuộc phần tiếp theo)',
    description: 'Giáo trình cốt lõi của Viện CNTT Hoàng gia Anh (BCS). Hướng dẫn quy trình tư vấn và phân tích thực tiễn: từ Chiến lược, Mô hình quy trình BA, Kỹ thuật điều tra, Quản lý Stakeholder đến Mô hình hóa quy trình và Xác định kiến trúc giải pháp.',
    color: '#e7a05e',
    icon: '📙',
    missingNotice: 'Lưu ý về tài liệu: File PDF đính kèm là split_1 gồm 235 trang, bao phủ trọn vẹn Chương 1 đến Chương 8. Các chương 9 đến 14 (Lập Business Case, Kỹ nghệ yêu cầu, Quản lý yêu cầu, Mô hình hóa yêu cầu, Triển khai giải pháp) được liệt kê trong mục lục nhưng nội dung nằm ở split_2 của sách.'
  },
  {
    id: '100-days-ba',
    title: '100 ngày viết về nghề BA',
    author: 'Nguyễn Bá Phú (Chuyên gia BA / Tác giả thực chiến)',
    year: '2023',
    totalPages: 237,
    status: 'Full (Đầy đủ 100 DAY từ DAY 1 đến DAY 100)',
    description: 'Góc nhìn người trong nghề, tổng hợp 100 câu chuyện va vấp và bài học xương máu thực tế tại thị trường Việt Nam: cách làm việc với Dev/Tester/PO, quản lý kỳ vọng khách hàng, xử lý phát sinh và duy trì tư duy hệ thống.',
    color: '#059669',
    icon: '📗'
  }
];

// BABOK 30 Tasks definition
const babokTasks = [
  { code: '3.1', name: 'Plan Business Analysis Approach', chapter: 'Chương 3 · BA Planning and Monitoring', page: 34, topicLessonId: 'TOPIC-BA-PLANNING-GOVERNANCE', purpose: 'Lựa chọn phương pháp tiếp cận BA tổng thể (Predictive hay Adaptive) phù hợp với quy mô dự án.', inputs: ['Needs', 'Enterprise Environmental Factors'], outputs: ['Business Analysis Approach'], whenToApply: 'Áp dụng ngay giai đoạn khởi động dự án (Inception / Project Initiation).' },
  { code: '3.2', name: 'Plan Stakeholder Engagement', chapter: 'Chương 3 · BA Planning and Monitoring', page: 41, topicLessonId: 'TOPIC-STAKEHOLDER-MGMT', purpose: 'Nhận diện toàn diện các bên liên quan và lập kế hoạch phối hợp, cộng tác hiệu quả.', inputs: ['Business Analysis Approach', 'Needs'], outputs: ['Stakeholder Engagement Approach'], whenToApply: 'Thực hiện sớm trong dự án và liên tục cập nhật.' },
  { code: '3.3', name: 'Plan Business Analysis Governance', chapter: 'Chương 3 · BA Planning and Monitoring', page: 47, topicLessonId: 'TOPIC-BA-PLANNING-GOVERNANCE', purpose: 'Xác định quy trình phê duyệt yêu cầu và quy trình xử lý yêu cầu thay đổi (Change Control).', inputs: ['Business Analysis Approach', 'Stakeholder Engagement Approach'], outputs: ['Governance Approach'], whenToApply: 'Cần thiết lập trước khi ký chốt baseline yêu cầu.' },
  { code: '3.4', name: 'Plan Business Analysis Information Management', chapter: 'Chương 3 · BA Planning and Monitoring', page: 52, topicLessonId: 'TOPIC-TRACEABILITY', purpose: 'Quy định cấu trúc lưu trữ tài liệu và chiến lược truy vết yêu cầu (Traceability).', inputs: ['Business Analysis Approach', 'Governance Approach'], outputs: ['Information Management Approach'], whenToApply: 'Khi thiết lập công cụ quản lý dự án (Jira, Confluence).' },
  { code: '3.5', name: 'Identify Business Analysis Performance Improvements', chapter: 'Chương 3 · BA Planning and Monitoring', page: 57, topicLessonId: 'TOPIC-BA-PLANNING-GOVERNANCE', purpose: 'Đánh giá hiệu suất làm việc của BA và đưa ra các hành động cải tiến liên tục.', inputs: ['Business Analysis Approach', 'Performance Objectives'], outputs: ['Business Analysis Performance Assessment'], whenToApply: 'Định kỳ sau các đợt phát hành hoặc Sprint Retrospective.' },

  { code: '4.1', name: 'Prepare for Elicitation', chapter: 'Chương 4 · Elicitation and Collaboration', page: 66, topicLessonId: 'TOPIC-ELICITATION-TECH', purpose: 'Xác định phạm vi, chọn kỹ thuật khai thác và chuẩn bị tài liệu trước khi phỏng vấn/workshop.', inputs: ['Needs', 'Stakeholder Engagement Approach'], outputs: ['Elicitation Activity Plan'], whenToApply: 'Trước mọi cuộc phỏng vấn, workshop, khảo sát.' },
  { code: '4.2', name: 'Conduct Elicitation', chapter: 'Chương 4 · Elicitation and Collaboration', page: 71, topicLessonId: 'TOPIC-ELICITATION-TECH', purpose: 'Thực hiện tương tác trực tiếp để khám phá các nhu cầu tiềm ẩn và quy tắc kinh doanh.', inputs: ['Elicitation Activity Plan'], outputs: ['Elicitation Results (Unconfirmed)'], whenToApply: 'Trong suốt các buổi phỏng vấn hoặc hội thảo yêu cầu.' },
  { code: '4.3', name: 'Confirm Elicitation Results', chapter: 'Chương 4 · Elicitation and Collaboration', page: 75, topicLessonId: 'TOPIC-ELICITATION-TECH', purpose: 'Đối chiếu và xác minh kết quả thu thập được với các bên liên quan để xóa tan hiểu lầm.', inputs: ['Elicitation Results (Unconfirmed)'], outputs: ['Elicitation Results (Confirmed)'], whenToApply: 'Ngay sau khi kết thúc buổi làm việc qua Meeting Minutes.' },
  { code: '4.4', name: 'Communicate Business Analysis Information', chapter: 'Chương 4 · Elicitation and Collaboration', page: 77, topicLessonId: 'TOPIC-ELICITATION-TECH', purpose: 'Truyền đạt thông tin phân tích cho đúng người, đúng thời điểm bằng định dạng phù hợp.', inputs: ['Business Analysis Information', 'Stakeholder Engagement Approach'], outputs: ['Business Analysis Information (Communicated)'], whenToApply: 'Xuyên suốt dự án để duy trì sự hiểu biết chung.' },
  { code: '4.5', name: 'Manage Stakeholder Collaboration', chapter: 'Chương 4 · Elicitation and Collaboration', page: 81, topicLessonId: 'TOPIC-STAKEHOLDER-MGMT', purpose: 'Khuyến khích sự tham gia tích cực của các bên và giải quyết xung đột lợi ích.', inputs: ['Stakeholder Engagement Approach'], outputs: ['Stakeholder Engagement'], whenToApply: 'Liên tục trong suốt vòng đời dự án.' },

  { code: '5.1', name: 'Trace Requirements', chapter: 'Chương 5 · Requirements Life Cycle Management', page: 89, topicLessonId: 'TOPIC-TRACEABILITY', purpose: 'Thiết lập và duy trì liên kết hai chiều giữa Mục tiêu ➔ Yêu cầu ➔ Thiết kế & Test cases.', inputs: ['Requirements', 'Information Management Approach'], outputs: ['Requirements (Traced)'], whenToApply: 'Từ khi bắt đầu đặc tả đến hết bảo trì.' },
  { code: '5.2', name: 'Maintain Requirements', chapter: 'Chương 5 · Requirements Life Cycle Management', page: 93, topicLessonId: 'TOPIC-TRACEABILITY', purpose: 'Duy trì tính chính xác, nhất quán và khả năng tái sử dụng của các yêu cầu và quy tắc nghiệp vụ.', inputs: ['Requirements', 'Information Management Approach'], outputs: ['Requirements (Maintained)'], whenToApply: 'Khi tài liệu hóa các quy tắc nghiệp vụ dùng chung.' },
  { code: '5.3', name: 'Prioritize Requirements', chapter: 'Chương 5 · Requirements Life Cycle Management', page: 96, topicLessonId: 'TOPIC-AGILE-USER-STORY', purpose: 'Xếp hạng độ ưu tiên của yêu cầu dựa trên giá trị kinh doanh, rủi ro và ràng buộc tài nguyên.', inputs: ['Requirements', 'Solution Scope'], outputs: ['Requirements (Prioritized)'], whenToApply: 'Trước mỗi đợt lập kế hoạch Release hoặc Sprint Backlog.' },
  { code: '5.4', name: 'Assess Requirements Changes', chapter: 'Chương 5 · Requirements Life Cycle Management', page: 101, topicLessonId: 'TOPIC-IMPACT-ANALYSIS', purpose: 'Đánh giá tác động toàn diện của đề xuất thay đổi lên phạm vi, tiến độ, chi phí và kiến trúc.', inputs: ['Proposed Change', 'Requirements', 'Solution Scope'], outputs: ['Requirements Change Assessment'], whenToApply: 'Mỗi khi có Change Request (CR) từ khách hàng.' },
  { code: '5.5', name: 'Approve Requirements', chapter: 'Chương 5 · Requirements Life Cycle Management', page: 105, topicLessonId: 'TOPIC-BA-PLANNING-GOVERNANCE', purpose: 'Lấy sự đồng thuận và phê duyệt chính thức từ những người có thẩm quyền.', inputs: ['Requirements', 'Governance Approach'], outputs: ['Requirements (Approved)'], whenToApply: 'Tại các mốc chốt chặn (Milestone sign-off).' },

  { code: '6.1', name: 'Analyze Current State', chapter: 'Chương 6 · Strategy Analysis', page: 113, topicLessonId: 'TOPIC-BACCM', purpose: 'Hiểu rõ hiện trạng vận hành, năng lực doanh nghiệp và điểm nghẽn gốc rễ.', inputs: ['Needs'], outputs: ['Current State Description', 'Business Requirements'], whenToApply: 'Giai đoạn nghiên cứu tiền khả thi.' },
  { code: '6.2', name: 'Define Future State', chapter: 'Chương 6 · Strategy Analysis', page: 120, topicLessonId: 'TOPIC-BACCM', purpose: 'Xác định các mục tiêu kinh doanh tương lai và các năng lực mới cần có.', inputs: ['Business Requirements'], outputs: ['Future State Description', 'Business Objectives'], whenToApply: 'Định hình tầm nhìn sản phẩm (Product Vision).' },
  { code: '6.3', name: 'Assess Risks', chapter: 'Chương 6 · Strategy Analysis', page: 130, topicLessonId: 'TOPIC-IMPACT-ANALYSIS', purpose: 'Nhận diện, phân tích khả năng xảy ra và mức độ ảnh hưởng của các rủi ro.', inputs: ['Business Objectives', 'Current State Description'], outputs: ['Risk Assessment'], whenToApply: 'Khi lập kế hoạch chiến lược và rà soát định kỳ.' },
  { code: '6.4', name: 'Define Change Strategy', chapter: 'Chương 6 · Strategy Analysis', page: 134, topicLessonId: 'TOPIC-BACCM', purpose: 'Lập kế hoạch chuyển dịch từ hiện trạng sang trạng thái tương lai (Gap Analysis).', inputs: ['Current State Description', 'Future State Description'], outputs: ['Change Strategy', 'Solution Scope'], whenToApply: 'Khi xây dựng Business Case và kế hoạch chuyển giao.' },

  { code: '7.1', name: 'Specify and Model Requirements', chapter: 'Chương 7 · Requirements Analysis and Design Definition', page: 146, topicLessonId: 'TOPIC-BPMN-PROCESS', purpose: 'Sử dụng các ma trận, sơ đồ (BPMN, Use Case, ERD) để đặc tả chi tiết logic yêu cầu.', inputs: ['Elicitation Results (Confirmed)'], outputs: ['Requirements (Specified and Modelled)'], whenToApply: 'Khi chuyển hóa ghi chú thành tài liệu đặc tả có cấu trúc.' },
  { code: '7.2', name: 'Verify Requirements', chapter: 'Chương 7 · Requirements Analysis and Design Definition', page: 151, topicLessonId: 'TOPIC-UAT-VERIFICATION', purpose: 'Đảm bảo tập yêu cầu rõ ràng, không mơ hồ, nhất quán và kiểm thử được.', inputs: ['Requirements (Specified and Modelled)'], outputs: ['Requirements (Verified)'], whenToApply: 'Kiểm tra nội bộ (Peer Review) trước khi bàn giao Dev/QA.' },
  { code: '7.3', name: 'Validate Requirements', chapter: 'Chương 7 · Requirements Analysis and Design Definition', page: 154, topicLessonId: 'TOPIC-UAT-VERIFICATION', purpose: 'Xác nhận yêu cầu có giải quyết đúng mục tiêu kinh doanh và mang lại giá trị hay không.', inputs: ['Requirements (Specified or Modelled)'], outputs: ['Requirements (Validated)'], whenToApply: 'Thực hiện cùng với người dùng cuối và nhà tài trợ.' },
  { code: '7.4', name: 'Define Requirements Architecture', chapter: 'Chương 7 · Requirements Analysis and Design Definition', page: 158, topicLessonId: 'TOPIC-TRACEABILITY', purpose: 'Sắp xếp, liên kết các yêu cầu thành một cấu trúc logic tổng thể hài hòa.', inputs: ['Information Management Approach', 'Requirements'], outputs: ['Requirements Architecture'], whenToApply: 'Khi thiết kế sản phẩm lớn hoặc chuyển sang Microservices.' },
  { code: '7.5', name: 'Define Design Options', chapter: 'Chương 7 · Requirements Analysis and Design Definition', page: 162, topicLessonId: 'TOPIC-SOLUTION-ARCHITECTURE', purpose: 'Nghiên cứu các phương án khả thi (Build vs Buy, Cloud vs On-Premise).', inputs: ['Requirements Architecture', 'Solution Scope'], outputs: ['Design Options'], whenToApply: 'Khi đứng trước các ngã rẽ lựa chọn công nghệ.' },
  { code: '7.6', name: 'Analyze Potential Value and Recommend Solution', chapter: 'Chương 7 · Requirements Analysis and Design Definition', page: 167, topicLessonId: 'TOPIC-SOLUTION-ARCHITECTURE', purpose: 'Ước tính giá trị kinh tế tiềm năng và khuyến nghị phương án tối ưu có ROI cao nhất.', inputs: ['Design Options', 'Potential Value'], outputs: ['Solution Recommendation'], whenToApply: 'Khi trình bày báo cáo thẩm định trước Hội đồng đầu tư.' },

  { code: '8.1', name: 'Measure Solution Performance', chapter: 'Chương 8 · Solution Evaluation', page: 176, topicLessonId: 'TOPIC-UAT-VERIFICATION', purpose: 'Thu thập số liệu đo lường thực tế về hiệu quả hoạt động sau Go-Live.', inputs: ['Implemented Solution (External)'], outputs: ['Solution Performance Measures'], whenToApply: 'Sau khi Go-Live từ 1 đến 6 tháng để theo dõi KPI.' },
  { code: '8.2', name: 'Analyze Performance Measures', chapter: 'Chương 8 · Solution Evaluation', page: 180, topicLessonId: 'TOPIC-UAT-VERIFICATION', purpose: 'So sánh số liệu thực tế với kỳ vọng ban đầu để phát hiện khoảng cách giá trị.', inputs: ['Business Objectives', 'Solution Performance Measures'], outputs: ['Solution Performance Analysis'], whenToApply: 'Định kỳ sau khi giải pháp đi vào vận hành ổn định.' },
  { code: '8.3', name: 'Assess Solution Limitations', chapter: 'Chương 8 · Solution Evaluation', page: 183, topicLessonId: 'TOPIC-IMPACT-ANALYSIS', purpose: 'Xác định các nguyên nhân kỹ thuật hoặc lỗi nội tại đang cản trở việc đạt giá trị.', inputs: ['Implemented Solution (External)'], outputs: ['Solution Limitation'], whenToApply: 'Khi hệ thống nghẽn tải hoặc tỷ lệ drop-off cao.' },
  { code: '8.4', name: 'Assess Enterprise Limitations', chapter: 'Chương 8 · Solution Evaluation', page: 187, topicLessonId: 'TOPIC-STAKEHOLDER-MGMT', purpose: 'Nhận diện rào cản bên ngoài hệ thống (văn hóa, quy trình thủ công) làm giảm hiệu quả phần mềm.', inputs: ['Current State Description'], outputs: ['Enterprise Limitation'], whenToApply: 'Khi phần mềm tốt nhưng người dùng vẫn lén ghi sổ tay.' },
  { code: '8.5', name: 'Recommend Actions to Increase Solution Value', chapter: 'Chương 8 · Solution Evaluation', page: 192, topicLessonId: 'TOPIC-BACCM', purpose: 'Đề xuất các biện pháp cụ thể (tinh giản quy trình, cải tiến phần mềm) để tối đa hóa giá trị.', inputs: ['Enterprise Limitation', 'Solution Limitation'], outputs: ['Recommended Action'], whenToApply: 'Khi lập kế hoạch tối ưu hóa liên tục sản phẩm.' }
];

// BCS chapters 1-8 summary
const bcsChapters = [
  { chapter: 1, title: 'What is Business Analysis?', pages: '35 - 55', topicLessonId: 'TOPIC-BACCM', sections: ['The origins of business analysis', 'The scope of business analysis work', 'The role and responsibilities of a business analyst', 'The business analysis maturity model'], summary: 'Định hình ranh giới nghề BA, phân biệt tư vấn chiến lược và phát triển phần mềm, giới thiệu mô hình trưởng thành BA.' },
  { chapter: 2, title: 'The Competencies of a Business Analyst', pages: '56 - 78', topicLessonId: 'TOPIC-BEHAVIORAL-INTERVIEW', sections: ['Personal qualities', 'Business knowledge', 'Professional techniques', 'The right skills for the right situation', 'Industry skills frameworks'], summary: 'Mô hình năng lực tam giác: Phẩm chất cá nhân, Kiến thức kinh doanh và Kỹ thuật phân tích chuyên nghiệp (SFIA framework).' },
  { chapter: 3, title: 'Strategy Analysis', pages: '79 - 101', topicLessonId: 'TOPIC-BACCM', sections: ['External environment analysis (PESTLE, Porter 5 Forces)', 'Internal environment analysis (VMOST, Resource Audit)', 'SWOT analysis', 'Executing strategy'], summary: 'Phân tích chiến lược môi trường vĩ mô và vi mô: PESTLE, 5 lực lượng cạnh tranh Porter, mô hình VMOST và ma trận SWOT.' },
  { chapter: 4, title: 'The Business Analysis Process Model', pages: '102 - 120', topicLessonId: 'TOPIC-BA-PLANNING-GOVERNANCE', sections: ['An approach to problem solving', 'The business analysis process model', 'Investigate situation', 'Consider perspectives', 'Analyse needs', 'Evaluate options', 'Define requirements', 'Deliver changes'], summary: 'Mô hình quy trình phân tích cốt lõi của BCS gồm 6 giai đoạn logic: Khảo sát ➔ Xem xét góc nhìn ➔ Phân tích nhu cầu ➔ Đánh giá phương án ➔ Đặc tả yêu cầu ➔ Chuyển giao.' },
  { chapter: 5, title: 'Investigation Techniques', pages: '121 - 158', topicLessonId: 'TOPIC-ELICITATION-TECH', sections: ['Prior research', 'Interviews', 'Observation (Shadowing)', 'Workshops', 'Scenarios', 'Prototyping', 'Quantitative approaches'], summary: 'Bộ kỹ thuật điều tra và thu thập thông tin toàn diện: Phỏng vấn sâu, Quan sát hiện trường, Hội thảo điều phối, Kịch bản mẫu.' },
  { chapter: 6, title: 'Stakeholder Analysis and Management', pages: '159 - 185', topicLessonId: 'TOPIC-STAKEHOLDER-MGMT', sections: ['Stakeholder categories and identification', 'Analysing stakeholders (Power/Interest grid)', 'Stakeholder management strategies', 'Defining stakeholder involvement – RACI and RASCI charts', 'Understanding stakeholder perspectives (CATWOE)'], summary: 'Phân loại Stakeholder, Ma trận Mendelow, Ma trận trách nhiệm RACI/RASCI và kỹ thuật phân tích góc nhìn văn hóa CATWOE.' },
  { chapter: 7, title: 'Modelling Business Processes', pages: '186 - 220', topicLessonId: 'TOPIC-BPMN-PROCESS', sections: ['Organisational context and value propositions', 'Business process models (Swimlane diagrams)', 'Analysing the as-is process', 'Improving business processes', 'Business Process Model and Notation (BPMN)'], summary: 'Trực quan hóa quy trình tổ chức: Sơ đồ phân làn Swimlane, phân tích quy trình As-Is, thiết kế To-Be và tối ưu hóa loại bỏ lãng phí.' },
  { chapter: 8, title: 'Defining the Solution', pages: '221 - 235', topicLessonId: 'TOPIC-SOLUTION-ARCHITECTURE', sections: ['Gap analysis', 'Formulating options', 'Defining business requirements', 'Introduction to business architecture', 'Structure of a business architecture'], summary: 'Phân tích khoảng cách (Gap Analysis), định hình các phương án giải pháp khả thi và đặt nền tảng kiến trúc doanh nghiệp.' }
];

// Complete Cross-Reference Table
const bookCrossReference = [];

// 1. Add BABOK tasks
babokTasks.forEach(t => {
  bookCrossReference.push({
    bookId: 'babok-v3',
    bookTitle: 'BABOK Guide v3',
    itemCode: `Task ${t.code}`,
    itemTitle: t.name,
    page: t.page,
    topic: t.chapter.split('·')[1].trim(),
    topicLessonId: t.topicLessonId
  });
});

// 2. Add BCS chapters
bcsChapters.forEach(c => {
  bookCrossReference.push({
    bookId: 'bcs-ba-3rd',
    bookTitle: 'Business Analysis (BCS 3rd Ed)',
    itemCode: `Chapter ${c.chapter}`,
    itemTitle: c.title,
    page: parseInt(c.pages.split('-')[0].trim()),
    topic: 'Quy trình & Năng lực BA (BCS)',
    topicLessonId: c.topicLessonId
  });
});

// 3. Add 100 Days
processedDays.forEach(d => {
  bookCrossReference.push({
    bookId: '100-days-ba',
    bookTitle: '100 ngày viết về nghề BA',
    itemCode: `DAY ${d.day}`,
    itemTitle: d.title,
    page: d.page,
    topic: d.topic,
    topicLessonId: d.topicLessonId
  });
});

console.log(`Cross-reference items generated: ${bookCrossReference.length} items`);

// Export output file
const outputPath = path.join(__dirname, '../dist/books-data.js');

const jsContent = `// Module Sách BA: Dữ liệu học liệu tổng hợp từ 3 nguồn sách BA kinh điển
// 1. BABOK Guide v3 (IIBA) - 6 Vùng tri thức, 30 Tasks, 50 Kỹ thuật
// 2. Business Analysis 3rd Edition (BCS) - Chương 1 đến 8 (file split_1)
// 3. 100 ngày viết về nghề BA (Nguyễn Bá Phú) - Toàn bộ 100 DAY thực chiến

const booksMeta = ${JSON.stringify(booksMeta, null, 2)};
const bookBabokTasks = ${JSON.stringify(babokTasks, null, 2)};
const bookBcsChapters = ${JSON.stringify(bcsChapters, null, 2)};
const bookDays100 = ${JSON.stringify(processedDays, null, 2)};
const bookTopicLessons = ${JSON.stringify(topicLessons, null, 2)};
const bookCrossReference = ${JSON.stringify(bookCrossReference, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    booksMeta,
    bookBabokTasks,
    bookBcsChapters,
    bookDays100,
    bookTopicLessons,
    bookCrossReference
  };
}

if (typeof window !== 'undefined') {
  window.booksMeta = booksMeta;
  window.bookBabokTasks = bookBabokTasks;
  window.bookBcsChapters = bookBcsChapters;
  window.bookDays100 = bookDays100;
  window.bookTopicLessons = bookTopicLessons;
  window.bookCrossReference = bookCrossReference;
}
`;

fs.writeFileSync(outputPath, jsContent, 'utf8');
console.log(`💾 Generated ${outputPath} (${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB)`);
