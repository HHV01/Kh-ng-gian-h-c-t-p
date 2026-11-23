// Module Sách BA: Dữ liệu học liệu tổng hợp từ 3 nguồn sách BA kinh điển
// 1. BABOK Guide v3 (IIBA) - 6 Vùng tri thức, 30 Tasks, 50 Kỹ thuật
// 2. Business Analysis 3rd Edition (BCS) - Chương 1 đến 8 (file split_1)
// 3. 100 ngày viết về nghề BA (Nguyễn Bá Phú) - Toàn bộ 100 DAY thực chiến

const booksMeta = [
  {
    "id": "babok-v3",
    "title": "A Guide to the Business Analysis Body of Knowledge (BABOK® Guide v3)",
    "shortTitle": "BABOK Guide v3",
    "author": "International Institute of Business Analysis (IIBA)",
    "year": "2015",
    "totalPages": 514,
    "pdfFileName": "A GUIDE TO THE BUSINESS ANALYSIS BODY OF KNOWLEDGE ( PDFDrive.com ).pdf",
    "pdfPageOffset": 16,
    "status": "Full (Đầy đủ 11 chương & 50 kỹ thuật)",
    "description": "Tiêu chuẩn quốc tế chuẩn mực và toàn diện nhất thế giới về nghề Business Analysis. Bao phủ 6 Vùng tri thức (30 Tasks), Mô hình BACCM, 50 Kỹ thuật, Năng lực nền tảng và 5 Góc nhìn chuyên môn.",
    "color": "#6056d9",
    "icon": "📘",
    "toc": [
      {
        "id": "ch-1",
        "code": "Chương 1",
        "title": "Introduction (Tổng quan về BABOK Guide v3)",
        "category": "Nền tảng BA",
        "pdfPage": 11,
        "printPage": 1,
        "available": true,
        "summary": "Mục đích của BABOK Guide, định nghĩa nghề Business Analysis, ai là một BA và cấu trúc tổng thể của chuẩn quốc tế.",
        "contentHtml": "\n      <h2>Chương 1: Introduction (Tổng quan BABOK® Guide v3)</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Nguồn:</b> A Guide to the Business Analysis Body of Knowledge® (BABOK® Guide v3)</span>\n        <span>📄 <b>Trang PDF:</b> 11 - 20 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 1 - 10</span>\n      </div>\n      <h3>1. Mục đích của BABOK® Guide</h3>\n      <p>BABOK® Guide là chuẩn mực toàn cầu được phát triển bởi Viện Phân tích Nghiệp vụ Quốc tế (IIBA®). Tài liệu này cung cấp một bộ khung thống nhất về các khái niệm, kiến thức, nhiệm vụ và kỹ thuật cần thiết để thực hành phân tích nghiệp vụ chuyên nghiệp.</p>\n      \n      <h3>2. Định nghĩa Business Analysis & Vai trò BA</h3>\n      <p><b>Business Analysis (Phân tích nghiệp vụ):</b> Là việc tạo điều kiện cho sự thay đổi trong một tổ chức bằng cách xác định nhu cầu và khuyến nghị các giải pháp mang lại giá trị cho các bên liên quan.</p>\n      <p><b>Business Analyst (BA):</b> Bất kỳ ai thực hiện các nhiệm vụ phân tích nghiệp vụ, bất kể chức danh công việc của họ là gì (Product Owner, Systems Analyst, Process Consultant...).</p>\n\n      <h3>3. Cấu trúc của BABOK® Guide v3</h3>\n      <ul>\n        <li><b>Business Analysis Key Concepts (BACCM™):</b> 6 khái niệm nền tảng: Change, Need, Solution, Stakeholder, Value, Context.</li>\n        <li><b>6 Vùng tri thức (Knowledge Areas):</b> Lập kế hoạch, Khai thác, Quản lý vòng đời yêu cầu, Phân tích chiến lược, Phân tích yêu cầu & Thiết kế, và Đánh giá giải pháp.</li>\n        <li><b>Năng lực nền tảng (Underlying Competencies):</b> Tư duy phân tích, giao tiếp, kiến thức kinh doanh, công cụ và công nghệ.</li>\n        <li><b>50 Kỹ thuật (Techniques):</b> Các công cụ thực hành cụ thể từ Phỏng vấn, BPMN, User Story đến Ma trận truy vết.</li>\n        <li><b>5 Góc nhìn chuyên môn (Perspectives):</b> Agile, Business Intelligence, Information Technology, Business Architecture, Business Process Management.</li>\n      </ul>\n    "
      },
      {
        "id": "ch-2",
        "code": "Chương 2",
        "title": "Business Analysis Key Concepts (Mô hình BACCM & Thuật ngữ)",
        "category": "Nền tảng BA",
        "pdfPage": 21,
        "printPage": 11,
        "available": true,
        "summary": "6 Khái niệm Cốt lõi của BACCM, phân loại yêu cầu (Business, Stakeholder, Solution, Transition) và danh mục các nhóm Stakeholder.",
        "contentHtml": "\n      <h2>Chương 2: Business Analysis Key Concepts & Mô hình BACCM™</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Nguồn:</b> BABOK® Guide v3 - IIBA</span>\n        <span>📄 <b>Trang PDF:</b> 21 - 30 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 11 - 20</span>\n      </div>\n      <h3>1. Mô hình BACCM™ (Business Analysis Core Concept Model)</h3>\n      <p>Mô hình BACCM bao gồm 6 khái niệm cốt lõi có mối quan hệ tương hỗ chặt chẽ, áp dụng cho bất kỳ quy mô phân tích nào:</p>\n      <ol>\n        <li><b>Change (Sự thay đổi):</b> Hành động chuyển dịch tổ chức để đáp ứng nhu cầu.</li>\n        <li><b>Need (Nhu cầu):</b> Vấn đề nhức nhối hoặc cơ hội kinh doanh cần giải quyết.</li>\n        <li><b>Solution (Giải pháp):</b> Cách thức cụ thể đáp ứng nhu cầu trong một bối cảnh.</li>\n        <li><b>Stakeholder (Bên liên quan):</b> Cá nhân hoặc nhóm chịu ảnh hưởng bởi sự thay đổi.</li>\n        <li><b>Value (Giá trị):</b> Lợi ích hoặc sự hữu dụng mang lại cho các bên liên quan.</li>\n        <li><b>Context (Bối cảnh):</b> Môi trường văn hóa, pháp lý, công nghệ bao quanh sự thay đổi.</li>\n      </ol>\n\n      <h3>2. Phân tầng Yêu cầu trong BABOK®</h3>\n      <ul>\n        <li><b>Business Requirements:</b> Mục tiêu kinh doanh cấp cao của tổ chức.</li>\n        <li><b>Stakeholder Requirements:</b> Nhu cầu cụ thể của từng nhóm người dùng.</li>\n        <li><b>Solution Requirements:</b> Đặc tả hành vi (Functional) và tiêu chuẩn chất lượng (Non-Functional) của hệ thống.</li>\n        <li><b>Transition Requirements:</b> Điều kiện chuyển giao tạm thời (Data Migration, Đào tạo người dùng).</li>\n      </ul>\n    "
      },
      {
        "id": "task-3-1",
        "code": "Task 3.1",
        "title": "3.1 Plan Business Analysis Approach",
        "category": "Planning & Monitoring",
        "pdfPage": 34,
        "printPage": 24,
        "available": true,
        "summary": "Lựa chọn phương pháp tiếp cận BA (Predictive vs Adaptive).",
        "contentHtml": "\n      <h2>Task 3.1: Plan Business Analysis Approach</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 34 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 24</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Planning & Monitoring</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Lựa chọn phương pháp tiếp cận BA (Predictive vs Adaptive).</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Needs</li><li>Enterprise Environmental Factors</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Business Analysis Approach</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-3-2",
        "code": "Task 3.2",
        "title": "3.2 Plan Stakeholder Engagement",
        "category": "Planning & Monitoring",
        "pdfPage": 41,
        "printPage": 31,
        "available": true,
        "summary": "Xác định các bên liên quan và kế hoạch cộng tác tối ưu.",
        "contentHtml": "\n      <h2>Task 3.2: Plan Stakeholder Engagement</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 41 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 31</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Planning & Monitoring</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Xác định các bên liên quan và kế hoạch cộng tác tối ưu.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Needs</li><li>Business Analysis Approach</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Stakeholder Engagement Approach</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-3-3",
        "code": "Task 3.3",
        "title": "3.3 Plan Business Analysis Governance",
        "category": "Planning & Monitoring",
        "pdfPage": 47,
        "printPage": 37,
        "available": true,
        "summary": "Quy định thẩm quyền phê duyệt và quy trình kiểm soát thay đổi.",
        "contentHtml": "\n      <h2>Task 3.3: Plan Business Analysis Governance</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 47 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 37</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Planning & Monitoring</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Quy định thẩm quyền phê duyệt và quy trình kiểm soát thay đổi.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Business Analysis Approach</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Governance Approach</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-3-4",
        "code": "Task 3.4",
        "title": "3.4 Plan Business Analysis Information Management",
        "category": "Planning & Monitoring",
        "pdfPage": 52,
        "printPage": 42,
        "available": true,
        "summary": "Xây dựng cấu trúc lưu trữ và quy tắc truy vết yêu cầu.",
        "contentHtml": "\n      <h2>Task 3.4: Plan Business Analysis Information Management</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 52 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 42</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Planning & Monitoring</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Xây dựng cấu trúc lưu trữ và quy tắc truy vết yêu cầu.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Business Analysis Approach</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Information Management Approach</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-3-5",
        "code": "Task 3.5",
        "title": "3.5 Identify Business Analysis Performance Improvements",
        "category": "Planning & Monitoring",
        "pdfPage": 57,
        "printPage": 47,
        "available": true,
        "summary": "Đánh giá hiệu suất làm việc của BA và rút ra bài học cải tiến.",
        "contentHtml": "\n      <h2>Task 3.5: Identify Business Analysis Performance Improvements</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 57 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 47</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Planning & Monitoring</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Đánh giá hiệu suất làm việc của BA và rút ra bài học cải tiến.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Business Analysis Approach</li><li>Performance Objectives</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Business Analysis Performance Assessment</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-4-1",
        "code": "Task 4.1",
        "title": "4.1 Prepare for Elicitation",
        "category": "Elicitation & Collaboration",
        "pdfPage": 66,
        "printPage": 56,
        "available": true,
        "summary": "Chuẩn bị tài liệu, mục tiêu và kỹ thuật trước khi làm việc với Stakeholder.",
        "contentHtml": "\n      <h2>Task 4.1: Prepare for Elicitation</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 66 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 56</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Elicitation & Collaboration</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Chuẩn bị tài liệu, mục tiêu và kỹ thuật trước khi làm việc với Stakeholder.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Needs</li><li>Stakeholder Engagement Approach</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Elicitation Activity Plan</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-4-2",
        "code": "Task 4.2",
        "title": "4.2 Conduct Elicitation",
        "category": "Elicitation & Collaboration",
        "pdfPage": 71,
        "printPage": 61,
        "available": true,
        "summary": "Thực hiện phỏng vấn, workshop, quan sát để khám phá nhu cầu ẩn.",
        "contentHtml": "\n      <h2>Task 4.2: Conduct Elicitation</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 71 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 61</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Elicitation & Collaboration</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Thực hiện phỏng vấn, workshop, quan sát để khám phá nhu cầu ẩn.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Elicitation Activity Plan</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Elicitation Results (Unconfirmed)</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-4-3",
        "code": "Task 4.3",
        "title": "4.3 Confirm Elicitation Results",
        "category": "Elicitation & Collaboration",
        "pdfPage": 75,
        "printPage": 65,
        "available": true,
        "summary": "Xác nhận thông tin thu thập được với các bên để đảm bảo không hiểu nhầm.",
        "contentHtml": "\n      <h2>Task 4.3: Confirm Elicitation Results</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 75 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 65</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Elicitation & Collaboration</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Xác nhận thông tin thu thập được với các bên để đảm bảo không hiểu nhầm.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Elicitation Results (Unconfirmed)</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Elicitation Results (Confirmed)</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-4-4",
        "code": "Task 4.4",
        "title": "4.4 Communicate Business Analysis Information",
        "category": "Elicitation & Collaboration",
        "pdfPage": 77,
        "printPage": 67,
        "available": true,
        "summary": "Truyền đạt thông tin yêu cầu dưới dạng phù hợp với từng đối tượng.",
        "contentHtml": "\n      <h2>Task 4.4: Communicate Business Analysis Information</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 77 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 67</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Elicitation & Collaboration</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Truyền đạt thông tin yêu cầu dưới dạng phù hợp với từng đối tượng.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Business Analysis Information</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Business Analysis Information (Communicated)</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-4-5",
        "code": "Task 4.5",
        "title": "4.5 Manage Stakeholder Collaboration",
        "category": "Elicitation & Collaboration",
        "pdfPage": 81,
        "printPage": 71,
        "available": true,
        "summary": "Duy trì sự hợp tác và đồng thuận tích cực trong suốt dự án.",
        "contentHtml": "\n      <h2>Task 4.5: Manage Stakeholder Collaboration</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 81 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 71</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Elicitation & Collaboration</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Duy trì sự hợp tác và đồng thuận tích cực trong suốt dự án.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Stakeholder Engagement Approach</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Stakeholder Engagement</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-5-1",
        "code": "Task 5.1",
        "title": "5.1 Trace Requirements",
        "category": "Requirements Life Cycle",
        "pdfPage": 89,
        "printPage": 79,
        "available": true,
        "summary": "Thiết lập ma trận truy vết hai chiều (Forward & Backward Traceability).",
        "contentHtml": "\n      <h2>Task 5.1: Trace Requirements</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 89 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 79</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Requirements Life Cycle</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Thiết lập ma trận truy vết hai chiều (Forward & Backward Traceability).</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Requirements</li><li>Information Management Approach</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Requirements (Traced)</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-5-2",
        "code": "Task 5.2",
        "title": "5.2 Maintain Requirements",
        "category": "Requirements Life Cycle",
        "pdfPage": 93,
        "printPage": 83,
        "available": true,
        "summary": "Duy trì tính chính xác và tái sử dụng của các yêu cầu và quy tắc nghiệp vụ.",
        "contentHtml": "\n      <h2>Task 5.2: Maintain Requirements</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 93 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 83</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Requirements Life Cycle</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Duy trì tính chính xác và tái sử dụng của các yêu cầu và quy tắc nghiệp vụ.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Requirements</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Requirements (Maintained)</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-5-3",
        "code": "Task 5.3",
        "title": "5.3 Prioritize Requirements",
        "category": "Requirements Life Cycle",
        "pdfPage": 96,
        "printPage": 86,
        "available": true,
        "summary": "Ưu tiên yêu cầu theo giá trị, rủi ro và ràng buộc tài nguyên.",
        "contentHtml": "\n      <h2>Task 5.3: Prioritize Requirements</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 96 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 86</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Requirements Life Cycle</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Ưu tiên yêu cầu theo giá trị, rủi ro và ràng buộc tài nguyên.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Requirements</li><li>Solution Scope</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Requirements (Prioritized)</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-5-4",
        "code": "Task 5.4",
        "title": "5.4 Assess Requirements Changes",
        "category": "Requirements Life Cycle",
        "pdfPage": 101,
        "printPage": 91,
        "available": true,
        "summary": "Đánh giá tác động toàn diện của đề xuất thay đổi trước khi quyết định.",
        "contentHtml": "\n      <h2>Task 5.4: Assess Requirements Changes</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 101 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 91</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Requirements Life Cycle</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Đánh giá tác động toàn diện của đề xuất thay đổi trước khi quyết định.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Proposed Change</li><li>Requirements</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Requirements Change Assessment</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-5-5",
        "code": "Task 5.5",
        "title": "5.5 Approve Requirements",
        "category": "Requirements Life Cycle",
        "pdfPage": 105,
        "printPage": 95,
        "available": true,
        "summary": "Lấy phê duyệt chính thức (Sign-off) từ các bên có thẩm quyền.",
        "contentHtml": "\n      <h2>Task 5.5: Approve Requirements</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 105 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 95</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Requirements Life Cycle</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Lấy phê duyệt chính thức (Sign-off) từ các bên có thẩm quyền.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Requirements</li><li>Governance Approach</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Requirements (Approved)</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-6-1",
        "code": "Task 6.1",
        "title": "6.1 Analyze Current State",
        "category": "Strategy Analysis",
        "pdfPage": 113,
        "printPage": 103,
        "available": true,
        "summary": "Thấu hiểu hiện trạng quy trình, năng lực hiện tại và nỗi đau nghiệp vụ.",
        "contentHtml": "\n      <h2>Task 6.1: Analyze Current State</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 113 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 103</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Strategy Analysis</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Thấu hiểu hiện trạng quy trình, năng lực hiện tại và nỗi đau nghiệp vụ.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Needs</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Current State Description</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-6-2",
        "code": "Task 6.2",
        "title": "6.2 Define Future State",
        "category": "Strategy Analysis",
        "pdfPage": 120,
        "printPage": 110,
        "available": true,
        "summary": "Vẽ ra trạng thái tương lai mong muốn và các chỉ số đo lường thành công.",
        "contentHtml": "\n      <h2>Task 6.2: Define Future State</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 120 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 110</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Strategy Analysis</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Vẽ ra trạng thái tương lai mong muốn và các chỉ số đo lường thành công.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Business Requirements</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Future State Description</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-6-3",
        "code": "Task 6.3",
        "title": "6.3 Assess Risks",
        "category": "Strategy Analysis",
        "pdfPage": 130,
        "printPage": 120,
        "available": true,
        "summary": "Nhận diện rủi ro, đánh giá xác suất và mức độ tác động.",
        "contentHtml": "\n      <h2>Task 6.3: Assess Risks</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 130 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 120</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Strategy Analysis</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Nhận diện rủi ro, đánh giá xác suất và mức độ tác động.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Business Objectives</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Risk Assessment</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-6-4",
        "code": "Task 6.4",
        "title": "6.4 Define Change Strategy",
        "category": "Strategy Analysis",
        "pdfPage": 134,
        "printPage": 124,
        "available": true,
        "summary": "Xác định chiến lược chuyển đổi và phân tích khoảng cách (Gap Analysis).",
        "contentHtml": "\n      <h2>Task 6.4: Define Change Strategy</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 134 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 124</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Strategy Analysis</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Xác định chiến lược chuyển đổi và phân tích khoảng cách (Gap Analysis).</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Current State</li><li>Future State</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Change Strategy</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-7-1",
        "code": "Task 7.1",
        "title": "7.1 Specify and Model Requirements",
        "category": "Analysis & Design Definition",
        "pdfPage": 146,
        "printPage": 136,
        "available": true,
        "summary": "Mô hình hóa yêu cầu bằng sơ đồ BPMN, Use Case, ERD và bảng quyết định.",
        "contentHtml": "\n      <h2>Task 7.1: Specify and Model Requirements</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 146 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 136</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Analysis & Design Definition</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Mô hình hóa yêu cầu bằng sơ đồ BPMN, Use Case, ERD và bảng quyết định.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Elicitation Results (Confirmed)</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Requirements (Specified and Modelled)</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-7-2",
        "code": "Task 7.2",
        "title": "7.2 Verify Requirements",
        "category": "Analysis & Design Definition",
        "pdfPage": 151,
        "printPage": 141,
        "available": true,
        "summary": "Đảm bảo yêu cầu rõ ràng, nhất quán, không mơ hồ và kiểm thử được.",
        "contentHtml": "\n      <h2>Task 7.2: Verify Requirements</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 151 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 141</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Analysis & Design Definition</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Đảm bảo yêu cầu rõ ràng, nhất quán, không mơ hồ và kiểm thử được.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Requirements (Specified and Modelled)</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Requirements (Verified)</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-7-3",
        "code": "Task 7.3",
        "title": "7.3 Validate Requirements",
        "category": "Analysis & Design Definition",
        "pdfPage": 154,
        "printPage": 144,
        "available": true,
        "summary": "Xác nhận rằng yêu cầu trực tiếp phục vụ mục tiêu và giá trị doanh nghiệp.",
        "contentHtml": "\n      <h2>Task 7.3: Validate Requirements</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 154 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 144</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Analysis & Design Definition</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Xác nhận rằng yêu cầu trực tiếp phục vụ mục tiêu và giá trị doanh nghiệp.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Requirements (Specified and Modelled)</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Requirements (Validated)</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-7-4",
        "code": "Task 7.4",
        "title": "7.4 Define Requirements Architecture",
        "category": "Analysis & Design Definition",
        "pdfPage": 158,
        "printPage": 148,
        "available": true,
        "summary": "Cấu trúc hóa tập yêu cầu thành một kiến trúc logic thống nhất.",
        "contentHtml": "\n      <h2>Task 7.4: Define Requirements Architecture</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 158 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 148</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Analysis & Design Definition</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Cấu trúc hóa tập yêu cầu thành một kiến trúc logic thống nhất.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Requirements</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Requirements Architecture</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-7-5",
        "code": "Task 7.5",
        "title": "7.5 Define Design Options",
        "category": "Analysis & Design Definition",
        "pdfPage": 162,
        "printPage": 152,
        "available": true,
        "summary": "Định hình các phương án giải pháp (Build, Buy, Custom, SaaS).",
        "contentHtml": "\n      <h2>Task 7.5: Define Design Options</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 162 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 152</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Analysis & Design Definition</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Định hình các phương án giải pháp (Build, Buy, Custom, SaaS).</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Requirements Architecture</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Design Options</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-7-6",
        "code": "Task 7.6",
        "title": "7.6 Analyze Potential Value and Recommend Solution",
        "category": "Analysis & Design Definition",
        "pdfPage": 167,
        "printPage": 157,
        "available": true,
        "summary": "Đo lường ROI và khuyến nghị giải pháp tối ưu nhất cho doanh nghiệp.",
        "contentHtml": "\n      <h2>Task 7.6: Analyze Potential Value and Recommend Solution</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 167 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 157</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Analysis & Design Definition</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Đo lường ROI và khuyến nghị giải pháp tối ưu nhất cho doanh nghiệp.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Design Options</li><li>Potential Value</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Solution Recommendation</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-8-1",
        "code": "Task 8.1",
        "title": "8.1 Measure Solution Performance",
        "category": "Solution Evaluation",
        "pdfPage": 176,
        "printPage": 166,
        "available": true,
        "summary": "Thu thập số liệu thực tế về hiệu quả hoạt động sau Go-Live.",
        "contentHtml": "\n      <h2>Task 8.1: Measure Solution Performance</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 176 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 166</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Solution Evaluation</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Thu thập số liệu thực tế về hiệu quả hoạt động sau Go-Live.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Implemented Solution</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Solution Performance Measures</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-8-2",
        "code": "Task 8.2",
        "title": "8.2 Analyze Performance Measures",
        "category": "Solution Evaluation",
        "pdfPage": 180,
        "printPage": 170,
        "available": true,
        "summary": "Phân tích số liệu để phát hiện khoảng cách giữa kỳ vọng và thực tế.",
        "contentHtml": "\n      <h2>Task 8.2: Analyze Performance Measures</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 180 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 170</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Solution Evaluation</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Phân tích số liệu để phát hiện khoảng cách giữa kỳ vọng và thực tế.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Solution Performance Measures</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Solution Performance Analysis</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-8-3",
        "code": "Task 8.3",
        "title": "8.3 Assess Solution Limitations",
        "category": "Solution Evaluation",
        "pdfPage": 183,
        "printPage": 173,
        "available": true,
        "summary": "Xác định các lỗi hoặc hạn chế kỹ thuật nội tại của giải pháp.",
        "contentHtml": "\n      <h2>Task 8.3: Assess Solution Limitations</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 183 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 173</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Solution Evaluation</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Xác định các lỗi hoặc hạn chế kỹ thuật nội tại của giải pháp.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Implemented Solution</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Solution Limitation</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-8-4",
        "code": "Task 8.4",
        "title": "8.4 Assess Enterprise Limitations",
        "category": "Solution Evaluation",
        "pdfPage": 187,
        "printPage": 177,
        "available": true,
        "summary": "Nhận diện rào cản tổ chức, văn hóa hoặc quy trình ảnh hưởng giá trị.",
        "contentHtml": "\n      <h2>Task 8.4: Assess Enterprise Limitations</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 187 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 177</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Solution Evaluation</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Nhận diện rào cản tổ chức, văn hóa hoặc quy trình ảnh hưởng giá trị.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Current State Description</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Enterprise Limitation</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "task-8-5",
        "code": "Task 8.5",
        "title": "8.5 Recommend Actions to Increase Solution Value",
        "category": "Solution Evaluation",
        "pdfPage": 192,
        "printPage": 182,
        "available": true,
        "summary": "Đề xuất cải tiến và tối ưu hóa liên tục để gia tăng giá trị phần mềm.",
        "contentHtml": "\n      <h2>Task 8.5: Recommend Actions to Increase Solution Value</h2>\n      <div class=\"reader-meta-box\">\n        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n        <span>📄 <b>Trang PDF:</b> 192 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 182</span>\n        <span>🏷️ <b>Vùng tri thức:</b> Solution Evaluation</span>\n      </div>\n      <h3>1. Mục đích của Task (Purpose)</h3>\n      <p>Đề xuất cải tiến và tối ưu hóa liên tục để gia tăng giá trị phần mềm.</p>\n\n      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0\">\n        <div class=\"callout\" style=\"margin:0\">\n          <b>Đầu vào (Inputs):</b>\n          <ul><li>Solution Limitation</li><li>Enterprise Limitation</li></ul>\n        </div>\n        <div class=\"callout tip\" style=\"margin:0\">\n          <b>Đầu ra (Outputs):</b>\n          <ul><li><b>Recommended Action</b></li></ul>\n        </div>\n      </div>\n\n      <h3>3. Hướng dẫn áp dụng thực tế</h3>\n      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy \"tê liệt vì phân tích\" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>\n    "
      },
      {
        "id": "ch-9",
        "code": "Chương 9",
        "title": "Underlying Competencies (Năng lực Nền tảng của BA)",
        "category": "Kỹ năng BA",
        "pdfPage": 197,
        "printPage": 187,
        "available": true,
        "summary": "6 Nhóm năng lực cốt lõi: Tư duy phân tích, Phẩm chất hành vi, Kiến thức kinh doanh, Giao tiếp, Tương tác và Công cụ công nghệ.",
        "contentHtml": "\n    <h2>Chương 9: Underlying Competencies (Năng lực Nền tảng)</h2>\n    <div class=\"reader-meta-box\">\n      <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n      <span>📄 <b>Trang PDF:</b> 197 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 187</span>\n    </div>\n    <p>Một Business Analyst xuất sắc không chỉ nắm vững phương pháp mà còn cần rèn giũa 6 nhóm năng lực nền tảng:</p>\n    <ul>\n      <li><b>9.1 Analytical Thinking & Problem Solving:</b> Tư duy sáng tạo, ra quyết định, học hỏi nhanh và giải quyết vấn đề tận gốc rễ.</li>\n      <li><b>9.2 Behavioural Characteristics:</b> Đạo đức nghề nghiệp, trách nhiệm cá nhân, đáng tin cậy và khả năng thích ứng linh hoạt.</li>\n      <li><b>9.3 Business Knowledge:</b> Thấu hiểu nguyên lý kinh doanh, mô hình ngành, cơ cấu tổ chức và giải pháp hiện hành.</li>\n      <li><b>9.4 Communication Skills:</b> Kỹ năng giao tiếp qua lời nói, văn bản và khả năng lắng nghe chủ động.</li>\n      <li><b>9.5 Interaction Skills:</b> Kỹ năng điều phối (Facilitation), lãnh đạo, đàm phán và xây dựng tinh thần đồng đội.</li>\n      <li><b>9.6 Tools and Technology:</b> Sử dụng thành thạo các công cụ mô hình hóa, quản lý yêu cầu và kiểm thử.</li>\n    </ul>\n  "
      },
      {
        "id": "ch-10",
        "code": "Chương 10",
        "title": "Techniques (Danh mục 50 Kỹ thuật Chuẩn mực)",
        "category": "Kỹ thuật BA",
        "pdfPage": 227,
        "printPage": 217,
        "available": true,
        "summary": "Kho vũ khí 50 kỹ thuật thực hành từ Phỏng vấn, BPMN, User Story, Mô hình hóa dữ liệu đến Đánh giá nhà cung cấp.",
        "contentHtml": "\n    <h2>Chương 10: Techniques (50 Kỹ thuật Thực hành của BA)</h2>\n    <div class=\"reader-meta-box\">\n      <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n      <span>📄 <b>Trang PDF:</b> 227 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 217</span>\n    </div>\n    <p>BABOK Guide v3 chuẩn hóa 50 kỹ thuật thực hành phân tích phổ biến nhất thế giới:</p>\n    <div style=\"display:grid;grid-template-columns:repeat(auto-fill, minmax(220px, 1fr));gap:8px;font-size:12.5px;margin:16px 0\">\n      <div>10.1 Acceptance Criteria</div>\n      <div>10.2 Backlog Management</div>\n      <div>10.8 Business Model Canvas</div>\n      <div>10.9 Business Rules Analysis</div>\n      <div>10.13 Data Flow Diagrams</div>\n      <div>10.15 Data Modelling</div>\n      <div>10.25 Interviews</div>\n      <div>10.35 Process Modelling</div>\n      <div>10.36 Prototyping</div>\n      <div>10.40 Root Cause Analysis</div>\n      <div>10.44 State Modelling</div>\n      <div>10.47 Use Cases</div>\n      <div>10.48 User Stories</div>\n      <div>10.50 Workshops</div>\n    </div>\n    <p class=\"metadata\">Mỗi kỹ thuật đều được mô tả chi tiết gồm: Mục đích, Mô tả, Các phần tử cốt lõi và Ưu/Nhược điểm khi áp dụng.</p>\n  "
      },
      {
        "id": "ch-11",
        "code": "Chương 11",
        "title": "Perspectives (5 Góc nhìn Chuyên môn Thực tế)",
        "category": "Góc nhìn BA",
        "pdfPage": 377,
        "printPage": 367,
        "available": true,
        "summary": "5 Bối cảnh chuyên môn: Agile, Business Intelligence, Information Technology, Business Architecture và BPM.",
        "contentHtml": "\n    <h2>Chương 11: Perspectives (5 Góc nhìn Chuyên môn)</h2>\n    <div class=\"reader-meta-box\">\n      <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>\n      <span>📄 <b>Trang PDF:</b> 377 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 367</span>\n    </div>\n    <p>BABOK cung cấp lăng kính áp dụng các kỹ thuật vào 5 bối cảnh chuyên sâu:</p>\n    <ul>\n      <li><b>11.1 The Agile Perspective:</b> Phân tích thích ứng, lặp ngắn, chuyển dịch từ tài liệu dài sang User Story và Conversation.</li>\n      <li><b>11.2 The Business Intelligence Perspective:</b> Phân tích dữ liệu lớn, Data Warehouse, Dashboard báo cáo và trực quan hóa insight.</li>\n      <li><b>11.3 The Information Technology Perspective:</b> Phân tích hệ thống IT, kiến trúc vi dịch vụ (Microservices), API và tích hợp hệ thống.</li>\n      <li><b>11.4 The Business Architecture Perspective:</b> Định hình bản đồ năng lực doanh nghiệp, chuỗi giá trị và dòng chảy thông tin toàn diện.</li>\n      <li><b>11.5 The Business Process Management Perspective:</b> Quản trị quy trình kinh doanh, tinh gọn hóa (Lean) và tự động hóa quy trình.</li>\n    </ul>\n  "
      }
    ]
  },
  {
    "id": "bcs-ba-3rd",
    "title": "Business Analysis (3rd Edition)",
    "shortTitle": "Business Analysis 3rd Edition (BCS)",
    "author": "Debra Paul, Donald Yeates, James Cadle (BCS - The Chartered Institute for IT)",
    "year": "2014",
    "totalPages": 235,
    "pdfFileName": "3rd_Business_Analysis__split_1.pdf",
    "pdfPageOffset": 34,
    "status": "Split 1 (Có đầy đủ Chương 1 đến Chương 8; Chương 9 đến 14 thuộc split_2)",
    "description": "Giáo trình cốt lõi của Viện CNTT Hoàng gia Anh (BCS). Hướng dẫn quy trình tư vấn và phân tích thực tiễn: từ Chiến lược, Mô hình quy trình BA, Kỹ thuật điều tra, Quản lý Stakeholder đến Mô hình hóa quy trình và Xác định kiến trúc giải pháp.",
    "color": "#e7a05e",
    "icon": "📙",
    "missingNotice": "Lưu ý về tài liệu: File PDF đính kèm là split_1 gồm 235 trang, bao phủ trọn vẹn Chương 1 đến Chương 8. Các chương 9 đến 14 (Lập Business Case, Kỹ nghệ yêu cầu, Quản lý yêu cầu, Mô hình hóa yêu cầu, Triển khai giải pháp) được liệt kê trong mục lục nhưng nội dung nằm ở split_2 của sách.",
    "toc": [
      {
        "id": "bcs-ch-1",
        "code": "Chương 1",
        "title": "What is Business Analysis? (Bản chất Nghề BA)",
        "pdfPage": 35,
        "printPage": 1,
        "available": true,
        "summary": "Ranh giới nghề BA, nguồn gốc lịch sử, mô hình trưởng thành BA (Business Analysis Maturity Model).",
        "contentHtml": "\n      <h2>Chương 1: What is Business Analysis?</h2>\n      <div class=\"reader-meta-box\">\n        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>\n        <span>📄 <b>Trang PDF:</b> 35 - 55 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 1 - 21</span>\n      </div>\n      <h3>1. Nguồn gốc và sự phát triển của Business Analysis</h3>\n      <p>BCS định vị Business Analysis xuất phát từ nhu cầu thu hẹp khoảng cách giao tiếp giữa Ban Giám đốc Kinh doanh và Bộ phận Công nghệ Thông tin (IT). Khi các dự án phần mềm thất bại hàng loạt vì \"lập trình đúng thứ nhưng không ai cần\", vai trò của BA ra đời để đảm bảo công nghệ phục vụ trọn vẹn mục tiêu chiến lược.</p>\n\n      <h3>2. Phạm vi công việc của BA (Scope of BA Work)</h3>\n      <p>BCS phân định rõ 3 cấp độ can thiệp của BA:</p>\n      <ul>\n        <li><b>Strategic Analysis:</b> Tư vấn định hình chiến lược và nhận diện vấn đề trước khi có bất kỳ dự án nào.</li>\n        <li><b>Business Process Improvement:</b> Tái thiết kế quy trình nghiệp vụ để nâng cao năng suất và loại bỏ lãng phí.</li>\n        <li><b>IT Systems Analysis:</b> Đặc tả chi tiết các yêu cầu phần mềm để đội ngũ kỹ thuật xây dựng chính xác.</li>\n      </ul>\n\n      <h3>3. Mô hình Trưởng thành BA (Business Analysis Maturity Model)</h3>\n      <p>Từ mức độ cơ bản (chỉ đặc tả phần mềm) ➔ mức cải tiến quy trình ➔ mức đối tác chiến lược của doanh nghiệp.</p>\n    "
      },
      {
        "id": "bcs-ch-2",
        "code": "Chương 2",
        "title": "The Competencies of a Business Analyst (Khung Năng lực)",
        "pdfPage": 56,
        "printPage": 22,
        "available": true,
        "summary": "Phẩm chất cá nhân, kiến thức kinh doanh, kỹ thuật chuyên môn và khung phát triển kỹ năng SFIA.",
        "contentHtml": "\n      <h2>Chương 2: The Competencies of a Business Analyst</h2>\n      <div class=\"reader-meta-box\">\n        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>\n        <span>📄 <b>Trang PDF:</b> 56 - 78 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 22 - 44</span>\n      </div>\n      <h3>1. Ba trụ cột năng lực theo chuẩn BCS</h3>\n      <ul>\n        <li><b>Personal Qualities (Phẩm chất cá nhân):</b> Tư duy phản biện, sự đồng cảm, giao tiếp tự tin và khả năng giải quyết xung đột.</li>\n        <li><b>Business Knowledge (Kiến thức kinh doanh):</b> Hiểu biết tài chính doanh nghiệp, cấu trúc tổ chức và đặc thù ngành.</li>\n        <li><b>Professional Techniques (Kỹ thuật chuyên môn):</b> Kỹ năng phỏng vấn, workshop, vẽ BPMN, lập User Story và viết kịch bản UAT.</li>\n      </ul>\n      <h3>2. Khung phát triển kỹ năng SFIA (Skills Framework for the Information Age)</h3>\n      <p>BCS áp dụng SFIA để đo lường cấp độ trưởng thành của BA từ Junior lên Senior và Principal Consultant.</p>\n    "
      },
      {
        "id": "bcs-ch-3",
        "code": "Chương 3",
        "title": "Strategy Analysis (Phân tích Chiến lược & Môi trường)",
        "pdfPage": 79,
        "printPage": 45,
        "available": true,
        "summary": "Phân tích môi trường bên ngoài (PESTLE, 5 Forces), môi trường nội bộ (VMOST, Resource Audit), ma trận SWOT và Balanced Scorecard.",
        "contentHtml": "\n      <h2>Chương 3: Strategy Analysis (Phân tích Chiến lược)</h2>\n      <div class=\"reader-meta-box\">\n        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>\n        <span>📄 <b>Trang PDF:</b> 79 - 101 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 45 - 67</span>\n      </div>\n      <h3>1. Phân tích môi trường bên ngoài (External Analysis)</h3>\n      <p><b>PESTLE:</b> Đánh giá các yếu tố Chính trị (Political), Kinh tế (Economic), Xã hội (Social), Công nghệ (Technological), Pháp lý (Legal) và Môi trường (Environmental).</p>\n      <p><b>Porter’s Five Forces:</b> Đánh giá áp lực cạnh tranh ngành gồm đối thủ hiện tại, đối thủ tiềm năng, sản phẩm thay thế, quyền lực nhà cung ứng và khách hàng.</p>\n\n      <h3>2. Phân tích nội bộ & Chiến lược tổ chức</h3>\n      <p><b>Khung VMOST:</b> Vision (Tầm nhìn), Mission (Sứ mệnh), Objectives (Mục tiêu), Strategy (Chiến lược), Tactics (Chiến thuật tác nghiệp).</p>\n      <p><b>Ma trận SWOT & BSC:</b> Tổng hợp điểm mạnh/yếu nội bộ với cơ hội/thách thức bên ngoài để định hình phương án chuyển đổi.</p>\n    "
      },
      {
        "id": "bcs-ch-4",
        "code": "Chương 4",
        "title": "The Business Analysis Process Model (Mô hình Quy trình BA)",
        "pdfPage": 102,
        "printPage": 68,
        "available": true,
        "summary": "Mô hình 5 giai đoạn: Investigate situation -> Consider perspectives -> Analyse needs -> Evaluate options -> Define requirements.",
        "contentHtml": "\n      <h2>Chương 4: The Business Analysis Process Model</h2>\n      <div class=\"reader-meta-box\">\n        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>\n        <span>📄 <b>Trang PDF:</b> 102 - 120 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 68 - 86</span>\n      </div>\n      <h3>Mô hình 5 Giai đoạn cốt lõi của BCS</h3>\n      <ol>\n        <li><b>Investigate Situation (Điều tra hiện trạng):</b> Thu thập dữ liệu để nhìn thấu toàn bộ bối cảnh và nguyên nhân gốc rễ.</li>\n        <li><b>Consider Perspectives (Xem xét các góc nhìn):</b> Phân tích động cơ và kỳ vọng của các nhóm bên liên quan.</li>\n        <li><b>Analyse Needs (Phân tích nhu cầu):</b> Xác định khoảng cách (Gap Analysis) giữa hiện tại và tương lai.</li>\n        <li><b>Evaluate Options (Đánh giá các phương án):</b> Đánh giá tính khả thi về kỹ thuật, tài chính và rủi ro.</li>\n        <li><b>Define Requirements (Xác định yêu cầu):</b> Đặc tả chi tiết các yêu cầu để bàn giao cho đội ngũ triển khai.</li>\n      </ol>\n    "
      },
      {
        "id": "bcs-ch-5",
        "code": "Chương 5",
        "title": "Investigation Techniques (Kỹ thuật Điều tra Hiện trạng)",
        "pdfPage": 121,
        "printPage": 87,
        "available": true,
        "summary": "Phỏng vấn, Quan sát (Shadowing), Workshop, Scenario, Phân tích tài liệu và khảo sát số lượng.",
        "contentHtml": "\n      <h2>Chương 5: Investigation Techniques</h2>\n      <div class=\"reader-meta-box\">\n        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>\n        <span>📄 <b>Trang PDF:</b> 121 - 158 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 87 - 124</span>\n      </div>\n      <h3>Bộ công cụ điều tra thực địa của BA</h3>\n      <ul>\n        <li><b>Interviews (Phỏng vấn cá nhân):</b> Kỹ thuật đào sâu nguyên nhân và xây dựng mối quan hệ tin cậy.</li>\n        <li><b>Observation & Shadowing (Quan sát thực tế):</b> Trực tiếp theo dõi nhân viên thao tác để phát hiện các bước làm thủ công không có trong tài liệu.</li>\n        <li><b>Workshops (Hội thảo đồng thuận):</b> Tập hợp các bên liên quan để thống nhất ưu tiên và giải quyết mâu thuẫn trực diện.</li>\n        <li><b>Scenarios & Prototyping:</b> Dùng kịch bản và bản mẫu giao diện sớm để kiểm chứng logic.</li>\n      </ul>\n    "
      },
      {
        "id": "bcs-ch-6",
        "code": "Chương 6",
        "title": "Stakeholder Analysis and Management (Quản lý Stakeholder)",
        "pdfPage": 159,
        "printPage": 125,
        "available": true,
        "summary": "Phân loại Stakeholder, Ma trận Mendelow (Power/Interest), Ma trận RACI/RASCI và kỹ thuật phân tích CATWOE.",
        "contentHtml": "\n      <h2>Chương 6: Stakeholder Analysis and Management</h2>\n      <div class=\"reader-meta-box\">\n        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>\n        <span>📄 <b>Trang PDF:</b> 159 - 185 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 125 - 151</span>\n      </div>\n      <h3>1. Ma trận Mendelow (Power vs Interest Grid)</h3>\n      <p>4 Chiến lược tương tác kinh điển dựa trên vị thế quyền lực và mức độ quan tâm:</p>\n      <ul>\n        <li><b>High Power / High Interest:</b> Quản lý chặt chẽ (Manage Closely) - Tham vấn liên tục.</li>\n        <li><b>High Power / Low Interest:</b> Giữ cho hài lòng (Keep Satisfied) - Gửi báo cáo tóm tắt mốc lớn.</li>\n        <li><b>Low Power / High Interest:</b> Cập nhật thường xuyên (Keep Informed) - Lắng nghe phản hồi chi tiết.</li>\n        <li><b>Low Power / Low Interest:</b> Theo dõi định kỳ (Monitor with minimal effort).</li>\n      </ul>\n      <h3>2. Kỹ thuật CATWOE</h3>\n      <p>Công cụ phân tích thế giới quan của từng nhóm stakeholder: Customer (Khách hàng), Actor (Người thực hiện), Transformation (Quá trình biến đổi), Weltanschauung (Thế giới quan), Owner (Chủ sở hữu), Environment (Ràng buộc môi trường).</p>\n    "
      },
      {
        "id": "bcs-ch-7",
        "code": "Chương 7",
        "title": "Modelling Business Processes (Mô hình hóa Quy trình)",
        "pdfPage": 186,
        "printPage": 152,
        "available": true,
        "summary": "Sơ đồ phân làn Swimlane, phân tích quy trình As-Is, thiết kế quy trình To-Be, BPMN và Six Sigma.",
        "contentHtml": "\n      <h2>Chương 7: Modelling Business Processes</h2>\n      <div class=\"reader-meta-box\">\n        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>\n        <span>📄 <b>Trang PDF:</b> 186 - 220 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 152 - 186</span>\n      </div>\n      <h3>Quy trình Mô hình hóa phân làn (Swimlane Process Models)</h3>\n      <p>BCS nhấn mạnh việc trực quan hóa luồng công việc xuyên suốt qua nhiều phòng ban chức năng. Phân làn Swimlane giúp chỉ rõ trách nhiệm của ai ở từng bước, nơi xảy ra bàn giao (Hand-off) và các điểm nghẽn gây lãng phí thời gian.</p>\n      <p>Phương pháp tiếp cận: Phân tích quy trình As-Is ➔ Nhận diện lãng phí (Waste/Bottleneck) ➔ Thiết kế quy trình mục tiêu To-Be tinh gọn.</p>\n    "
      },
      {
        "id": "bcs-ch-8",
        "code": "Chương 8",
        "title": "Defining the Solution (Xác định Kiến trúc Giải pháp)",
        "pdfPage": 221,
        "printPage": 187,
        "available": true,
        "summary": "Phân tích khoảng cách (Gap Analysis), định hình các phương án khả thi và đặt nền tảng kiến trúc doanh nghiệp.",
        "contentHtml": "\n      <h2>Chương 8: Defining the Solution</h2>\n      <div class=\"reader-meta-box\">\n        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>\n        <span>📄 <b>Trang PDF:</b> 221 - 235 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 187 - 201</span>\n      </div>\n      <h3>Phân tích Khoảng cách (Gap Analysis)</h3>\n      <p>So sánh trạng thái hiện tại (As-Is) với tương lai mong muốn (To-Be) để xác định rõ những gì cần xây dựng mới, những gì cần cải tạo và những gì cần loại bỏ. Đây là trang tài liệu kết thúc của file PDF <code>split_1</code>.</p>\n    "
      },
      {
        "id": "bcs-ch-9",
        "code": "Chương 9",
        "title": "Making a Business Case (Lập Hồ sơ Kinh doanh)",
        "pdfPage": 236,
        "printPage": 202,
        "available": false,
        "statusText": "Chưa có trong PDF đính kèm (Nội dung nằm ở file split_2)",
        "summary": "Xác định chi phí/lợi ích (Cost-Benefit Analysis), đánh giá rủi ro tài chính và trình bày Business Case.",
        "contentHtml": "<div class=\"callout warning\"><b>Chưa có trong PDF đính kèm:</b> File tài liệu đính kèm là split_1 kết thúc tại trang 235 (cuối Chương 8). Nội dung Chương 9 thuộc phần split_2 của tác phẩm.</div>"
      },
      {
        "id": "bcs-ch-10",
        "code": "Chương 10",
        "title": "Establishing the Requirements (Kỹ nghệ Yêu cầu)",
        "pdfPage": 250,
        "printPage": 216,
        "available": false,
        "statusText": "Chưa có trong PDF đính kèm (Nội dung nằm ở file split_2)",
        "summary": "Thu thập và cấu trúc hóa tập yêu cầu chức năng và phi chức năng.",
        "contentHtml": "<div class=\"callout warning\"><b>Chưa có trong PDF đính kèm:</b> File tài liệu đính kèm là split_1 kết thúc tại trang 235 (cuối Chương 8). Nội dung Chương 10 thuộc phần split_2 của tác phẩm.</div>"
      },
      {
        "id": "bcs-ch-11",
        "code": "Chương 11",
        "title": "Documenting and Managing Requirements (Quản lý Yêu cầu)",
        "pdfPage": 270,
        "printPage": 236,
        "available": false,
        "statusText": "Chưa có trong PDF đính kèm (Nội dung nằm ở file split_2)",
        "summary": "Tài liệu hóa SRS, thiết lập từ điển dữ liệu, ma trận truy vết và kiểm soát phiên bản.",
        "contentHtml": "<div class=\"callout warning\"><b>Chưa có trong PDF đính kèm:</b> File tài liệu đính kèm là split_1 kết thúc tại trang 235 (cuối Chương 8). Nội dung Chương 11 thuộc phần split_2 của tác phẩm.</div>"
      },
      {
        "id": "bcs-ch-12",
        "code": "Chương 12",
        "title": "Modelling Requirements (Mô hình hóa Yêu cầu)",
        "pdfPage": 290,
        "printPage": 256,
        "available": false,
        "statusText": "Chưa có trong PDF đính kèm (Nội dung nằm ở file split_2)",
        "summary": "Sơ đồ Use Case, ERD, Class Diagram và kịch bản nghiệp vụ chi tiết.",
        "contentHtml": "<div class=\"callout warning\"><b>Chưa có trong PDF đính kèm:</b> File tài liệu đính kèm là split_1 kết thúc tại trang 235 (cuối Chương 8). Nội dung Chương 12 thuộc phần split_2 của tác phẩm.</div>"
      },
      {
        "id": "bcs-ch-13",
        "code": "Chương 13",
        "title": "Delivering the Requirements (Bàn giao & Nghiệm thu)",
        "pdfPage": 310,
        "printPage": 276,
        "available": false,
        "statusText": "Chưa có trong PDF đính kèm (Nội dung nằm ở file split_2)",
        "summary": "Quy trình kiểm thử UAT, nghiệm thu có điều kiện và chuyển giao phần mềm cho vận hành.",
        "contentHtml": "<div class=\"callout warning\"><b>Chưa có trong PDF đính kèm:</b> File tài liệu đính kèm là split_1 kết thúc tại trang 235 (cuối Chương 8). Nội dung Chương 13 thuộc phần split_2 của tác phẩm.</div>"
      },
      {
        "id": "bcs-ch-14",
        "code": "Chương 14",
        "title": "Delivering the Business Solution (Triển khai Giá trị)",
        "pdfPage": 330,
        "printPage": 296,
        "available": false,
        "statusText": "Chưa có trong PDF đính kèm (Nội dung nằm ở file split_2)",
        "summary": "Quản trị sự thay đổi tổ chức, đào tạo người dùng và đo lường giá trị sau Go-Live.",
        "contentHtml": "<div class=\"callout warning\"><b>Chưa có trong PDF đính kèm:</b> File tài liệu đính kèm là split_1 kết thúc tại trang 235 (cuối Chương 8). Nội dung Chương 14 thuộc phần split_2 của tác phẩm.</div>"
      }
    ]
  },
  {
    "id": "100-days-ba",
    "title": "100 ngày viết về nghề BA",
    "shortTitle": "100 ngày viết về nghề BA",
    "author": "Nguyễn Bá Phú (Chuyên gia BA / Tác giả thực chiến)",
    "year": "2023",
    "totalPages": 237,
    "pdfFileName": "Sách 100 ngày viết về nghề BA - A5 (3) (1) (1).pdf",
    "pdfPageOffset": 3,
    "status": "Full (Đầy đủ 100 DAY từ DAY 1 đến DAY 100)",
    "description": "Góc nhìn người trong nghề, tổng hợp 100 câu chuyện va vấp và bài học xương máu thực tế tại thị trường Việt Nam: cách làm việc với Dev/Tester/PO, quản lý kỳ vọng khách hàng, xử lý phát sinh và duy trì tư duy hệ thống.",
    "color": "#059669",
    "icon": "📗",
    "toc": [
      {
        "id": "day-1",
        "code": "DAY 1",
        "title": "BA NÊN LÀM GÌ - SAU KHI TÍNH NĂNG ĐƯỢC RELEASE?",
        "category": "Testing & UAT",
        "pdfPage": 4,
        "printPage": 1,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 1: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 1 (BA NÊN LÀM GÌ - SAU KHI TÍNH NĂNG ĐƯỢC RELEASE?) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 1: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 1: BA NÊN LÀM GÌ - SAU KHI TÍNH NĂNG ĐƯỢC RELEASE?</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 4 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 1</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 1 / 1 0 0 BA NÊN LÀM GÌ  SAU KHI TÍNH NĂNG ĐƯỢC RELEASE? Nhiều bạn BA nghĩ:  Xong tài liệu ➝ DEV code xong ➝ TEST pass ➝ Release, là hết việc. Sai nha! Release không phải là điểm kết thúc, mà là lúc BA chứng minh giá trị của mình.  Dưới đây là 5 việc bạn nên làm ngay sau khi sản phẩm được release: 1. Kiểm tra thực tế trên Production Đăng nhập như người dùng thật, thao tác từng bước. Check kỹ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 1: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 1 (BA NÊN LÀM GÌ - SAU KHI TÍNH NĂNG ĐƯỢC RELEASE?) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-2",
        "code": "DAY 2",
        "title": "BA KHÔNG TƯ DUY HỆ THỐNG = NGƯỜI XÂY - NHÀ KHÔNG CÓ BẢN VẼ",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 5,
        "printPage": 2,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 2: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 2 (BA KHÔNG TƯ DUY HỆ THỐNG = NGƯỜI XÂY - NHÀ KHÔNG CÓ BẢN VẼ) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 2: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 2: BA KHÔNG TƯ DUY HỆ THỐNG = NGƯỜI XÂY - NHÀ KHÔNG CÓ BẢN VẼ</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 5 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 2</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 2 / 1 0 0 BA KHÔNG TƯ DUY HỆ THỐNG = NGƯỜI XÂY NHÀ KHÔNG CÓ BẢN VẼ Bạn có thể hoàn thành task. Bạn có thể “hoàn thành SRS đúng deadline”. Nhưng nếu bạn chỉ làm theo từng yêu cầu mà không hình dung toàn cảnh, thì hệ thống bạn xây sẽ rối như tơ vò sau vài tháng. 💥 Một ví dụ có thật 100%: Giai đoạn 1: Làm tính năng tạo đơn hàng → theo luồng của bộ phận Sales. Giai đoạn 2: Gắn với hệ thống kế to...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 2: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 2 (BA KHÔNG TƯ DUY HỆ THỐNG = NGƯỜI XÂY - NHÀ KHÔNG CÓ BẢN VẼ) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-3",
        "code": "DAY 3",
        "title": "KỸ THUẬT BABOK GIÚP BẠN KHÔNG BỊ ĐỔ LỖI - KHI KHÁCH NÓI: \"TÔI CHƯA NÓI THẾ BAO GIỜ\"",
        "category": "Testing & UAT",
        "pdfPage": 8,
        "printPage": 5,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 3: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 3 (KỸ THUẬT BABOK GIÚP BẠN KHÔNG BỊ ĐỔ LỖI - KHI KHÁCH NÓI: \"TÔI CHƯA NÓI THẾ BAO GIỜ\") đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 3: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 3: KỸ THUẬT BABOK GIÚP BẠN KHÔNG BỊ ĐỔ LỖI - KHI KHÁCH NÓI: \"TÔI CHƯA NÓI THẾ BAO GIỜ\"</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 8 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 5</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 3 / 1 0 0 3 KỸ THUẬT BABOK GIÚP BẠN KHÔNG BỊ ĐỔ LỖI KHI KHÁCH NÓI: \"TÔI CHƯA NÓI THẾ BAO GIỜ\" Câu nói tưởng nhẹ, nhưng có thể thổi bay cả sprint và đạp BA xuống hố. 🧨 Chuyện có thật 100%: Khách từng bảo trong họp: “Không cần kiểm tra tồn kho đâu, cứ tạo đơn rồi xử lý sau.” Tôi gật đầu. DEV làm theo. 3 tuần sau UAT, khách quay lại: 8 “Ủa? Không có bước kiểm tra tồn à? Tôi đâu có nói bỏ cái đó...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 3: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 3 (KỸ THUẬT BABOK GIÚP BẠN KHÔNG BỊ ĐỔ LỖI - KHI KHÁCH NÓI: \"TÔI CHƯA NÓI THẾ BAO GIỜ\") đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-4",
        "code": "DAY 4",
        "title": "KỸ THUẬT BABOK GIÚP BẠN XỬ LÝ - YÊU CẦU GẤP MÀ KHÔNG VỠ TIẾN ĐỘ",
        "category": "Agile & Scrum",
        "pdfPage": 10,
        "printPage": 7,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 4: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 4 (KỸ THUẬT BABOK GIÚP BẠN XỬ LÝ - YÊU CẦU GẤP MÀ KHÔNG VỠ TIẾN ĐỘ) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 4: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 4: KỸ THUẬT BABOK GIÚP BẠN XỬ LÝ - YÊU CẦU GẤP MÀ KHÔNG VỠ TIẾN ĐỘ</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 10 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 7</span>\n        <span>🏷️ <b>Chủ đề:</b> Agile & Scrum</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 4 / 1 0 0 3 KỸ THUẬT BABOK GIÚP BẠN XỬ LÝ  YÊU CẦU GẤP MÀ KHÔNG VỠ TIẾN ĐỘ \"Quan trọng lắm!\", \"Phải có ngay!\", \"Còn chờ gì nữa?\" Bạn không sai khi làm đúng yêu cầu.  Nhưng nếu bạn không quản trị được kỳ vọng và ưu tiên, thì: Backlog sẽ ngày càng phình to Sprint nào cũng vỡ plan Và người bị truy trách nhiệm đầu tiên: chính là bạn – BA của dự án 🎯 3 kỹ thuật từ BABOK giúp bạn đứng vững trước á...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 4: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 4 (KỸ THUẬT BABOK GIÚP BẠN XỬ LÝ - YÊU CẦU GẤP MÀ KHÔNG VỠ TIẾN ĐỘ) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-5",
        "code": "DAY 5",
        "title": "KỸ THUẬT BABOK GIÚP BA TƯ DUY LỖI – VIẾT - LOGIC CHẶT CHẼ, KHÔNG BỊ LỌT CASE",
        "category": "Khai thác yêu cầu",
        "pdfPage": 12,
        "printPage": 9,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 5: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 5 (KỸ THUẬT BABOK GIÚP BA TƯ DUY LỖI – VIẾT - LOGIC CHẶT CHẼ, KHÔNG BỊ LỌT CASE) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 5: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 5: KỸ THUẬT BABOK GIÚP BA TƯ DUY LỖI – VIẾT - LOGIC CHẶT CHẼ, KHÔNG BỊ LỌT CASE</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 12 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 9</span>\n        <span>🏷️ <b>Chủ đề:</b> Khai thác yêu cầu</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 5 / 1 0 0 3 KỸ THUẬT BABOK GIÚP BA TƯ DUY LỖI – VIẾT LOGIC CHẶT CHẼ, KHÔNG BỊ LỌT CASE BA giỏi không phải người nghĩ được nhiều tính năng,  Mà là người đủ tỉnh để hỏi:  👉 “Nếu sai thì sao?”  👉 “Nếu người dùng thao tác ngược thì sao?”  👉 “Nếu server lag, mất kết nối thì sao?” 🎯 1. Exception Flow – Tư duy lỗi = tư duy sống sót 📘 BABOK Technique: Scenario & Use Case, Exception Handling Input: T...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 5: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 5 (KỸ THUẬT BABOK GIÚP BA TƯ DUY LỖI – VIẾT - LOGIC CHẶT CHẼ, KHÔNG BỊ LỌT CASE) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-6",
        "code": "DAY 6",
        "title": "Tôi không còn là người viết đặc tả từng dòng SRS. Tôi cũng không còn là người ngồi - da...",
        "category": "Đặc tả & Quản lý yêu cầu",
        "pdfPage": 14,
        "printPage": 11,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 6: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 6 (Tôi không còn là người viết đặc tả từng dòng SRS. Tôi cũng không còn là người ngồi - da...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 6: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 6: Tôi không còn là người viết đặc tả từng dòng SRS. Tôi cũng không còn là người ngồi - da...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 14 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 11</span>\n        <span>🏷️ <b>Chủ đề:</b> Đặc tả & Quản lý yêu cầu</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 6 / 1 0 0 Tôi không còn là người viết đặc tả từng dòng SRS. Tôi cũng không còn là người ngồi daily với Dev mỗi sáng. Nhưng tôi là người mà cả team BA sẽ gọi… khi mọi thứ bắt đầu rối. Tôi không còn làm BA như trước. Giờ tôi làm người đứng sau. Không để kiểm soát. Mà để giữ cho từng người trong team có thể tiếp tục đi mà không thấy đơn độc. ☀️ Buổi sáng Không mở task, chỉ mở đoạn tin nhắn gửi ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 6: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 6 (Tôi không còn là người viết đặc tả từng dòng SRS. Tôi cũng không còn là người ngồi - da...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-7",
        "code": "DAY 7",
        "title": "Bạn từng đề xuất một tính năng, tự tin lắm, tâm huyết lắm. Nhưng sau khi release: - Khô...",
        "category": "Testing & UAT",
        "pdfPage": 16,
        "printPage": 13,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 7: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 7 (Bạn từng đề xuất một tính năng, tự tin lắm, tâm huyết lắm. Nhưng sau khi release: - Khô...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 7: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 7: Bạn từng đề xuất một tính năng, tự tin lắm, tâm huyết lắm. Nhưng sau khi release: - Khô...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 16 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 13</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 7 / 1 0 0 Bạn từng đề xuất một tính năng, tự tin lắm, tâm huyết lắm. Nhưng sau khi release: Không ai dùng. Không ai đoái hoài. Không tạo impact. Không phải do DEV code sai. Không phải do UI xấu. Mà vì ngay từ đầu bạn không nghĩ đến chuyện đo lường. “Viết tính năng mà không đo được hiệu quả thì không phải là làm BA – đó là đoán mò.” Muốn tránh cảnh đó, đây là 3 kỹ thuật trích từ BABOK, cộng v...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 7: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 7 (Bạn từng đề xuất một tính năng, tự tin lắm, tâm huyết lắm. Nhưng sau khi release: - Khô...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-8",
        "code": "DAY 8",
        "title": "“Tôi làm BA 4 năm rồi, sao vẫn chưa được tin tưởng giao vai trò cao hơn?” Không hiếm - ...",
        "category": "Khai thác yêu cầu",
        "pdfPage": 18,
        "printPage": 15,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 8: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 8 (“Tôi làm BA 4 năm rồi, sao vẫn chưa được tin tưởng giao vai trò cao hơn?” Không hiếm - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 8: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 8: “Tôi làm BA 4 năm rồi, sao vẫn chưa được tin tưởng giao vai trò cao hơn?” Không hiếm - ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 18 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 15</span>\n        <span>🏷️ <b>Chủ đề:</b> Khai thác yêu cầu</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 8 / 1 0 0  “Tôi làm BA 4 năm rồi, sao vẫn chưa được tin tưởng giao vai trò cao hơn?” Không hiếm người đặt câu hỏi này. Nhưng phần lớn đều vướng ở một điểm: Chưa trang bị đúng kỹ năng để xử lý bài toán lớn hơn. → Viết tài liệu? Ổn. → Ghi nhận yêu cầu? Không còn bỡ ngỡ. → Vẽ flow? Làm được. Nhưng…BA cấp độ cao hơn là người: → Nhìn thấy rủi ro trước khi hệ thống được xây dựng → Biết chọn đúng y...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 8: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 8 (“Tôi làm BA 4 năm rồi, sao vẫn chưa được tin tưởng giao vai trò cao hơn?” Không hiếm - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-9",
        "code": "DAY 9",
        "title": "Bạn từng bị sếp mắng… chỉ vì làm đúng yêu cầu chưa? - Tôi từng dính cú đó. Làm feature ...",
        "category": "Testing & UAT",
        "pdfPage": 20,
        "printPage": 17,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 9: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 9 (Bạn từng bị sếp mắng… chỉ vì làm đúng yêu cầu chưa? - Tôi từng dính cú đó. Làm feature ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 9: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 9: Bạn từng bị sếp mắng… chỉ vì làm đúng yêu cầu chưa? - Tôi từng dính cú đó. Làm feature ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 20 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 17</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 9 / 1 0 0 Bạn từng bị sếp mắng… chỉ vì làm đúng yêu cầu chưa? Tôi từng dính cú đó. Làm feature điểm danh theo đúng lời sếp. Viết đủ flow, mô tả rõ ràng, test pass. 3 ngày sau: bị gọi lên và gỡ app.  Sếp bảo:  “Làm app điểm danh đi, cho nhân viên tự check-in bằng điện thoại. Vân tay lỗi thời rồi.” Nghe hợp lý và có vẻ dễ! Tôi viết tài liệu, mô tả chức năng, giao cho dev. QC test pass. Go-live...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 9: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 9 (Bạn từng bị sếp mắng… chỉ vì làm đúng yêu cầu chưa? - Tôi từng dính cú đó. Làm feature ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-10",
        "code": "DAY 10",
        "title": "Câu chuyện có thật: Tuần trước, một bạn BA nhắn tôi, giọng đầy bức xúc: “Em nghỉ - phép...",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 22,
        "printPage": 19,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 10: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 10 (Câu chuyện có thật: Tuần trước, một bạn BA nhắn tôi, giọng đầy bức xúc: “Em nghỉ - phép...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 10: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 10: Câu chuyện có thật: Tuần trước, một bạn BA nhắn tôi, giọng đầy bức xúc: “Em nghỉ - phép...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 22 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 19</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 1 0 / 1 0 0 Câu chuyện có thật: Tuần trước, một bạn BA nhắn tôi, giọng đầy bức xúc: “Em nghỉ phép mấy hôm. Quay lại thì PO đã confirm hết UI với designer rồi. Em chỉ còn mỗi việc soi chính tả và check logic. Mà cái logic thì sai be bét… Giờ ai chịu trách nhiệm?\" Quen không? PO bảo “anh duyệt rồi” Designer bảo “PO đồng ý mà” Còn BA thì thành người ngồi ngoài flow – bị giao trách nhiệm nhưng k...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 10: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 10 (Câu chuyện có thật: Tuần trước, một bạn BA nhắn tôi, giọng đầy bức xúc: “Em nghỉ - phép...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-11",
        "code": "DAY 11",
        "title": "Mất 2 phút đọc – nhưng nếu bạn là BA mới, đây có thể là 2 phút đáng nhất tuần này. - Sế...",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 24,
        "printPage": 21,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 11: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 11 (Mất 2 phút đọc – nhưng nếu bạn là BA mới, đây có thể là 2 phút đáng nhất tuần này. - Sế...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 11: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 11: Mất 2 phút đọc – nhưng nếu bạn là BA mới, đây có thể là 2 phút đáng nhất tuần này. - Sế...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 24 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 21</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 1 1 / 1 0 0 Mất 2 phút đọc – nhưng nếu bạn là BA mới, đây có thể là 2 phút đáng nhất tuần này. Sếp: “Màn này làm giống bên XYZ nhé, flow bên đó tối ưu rồi. Em nắm rồi làm luôn nha.” Tôi gật đầu. Và tôi biết… hình như có điều gì đó chưa ổn. Nhưng tôi vẫn gật. Lúc đó tôi là một BA mới. Không ai ép tôi làm sai. Chỉ là… tôi không dám hỏi lại. Tôi nghĩ: “Chắc là đúng rồi.” “Mình hỏi thì kỳ lắm.” ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 11: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 11 (Mất 2 phút đọc – nhưng nếu bạn là BA mới, đây có thể là 2 phút đáng nhất tuần này. - Sế...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-12",
        "code": "DAY 12",
        "title": "Câu hỏi tưởng cũ, nhưng mỗi lần nghe lại là một lần muốn kể chuyện - Chiều qua, mình có...",
        "category": "Agile & Scrum",
        "pdfPage": 26,
        "printPage": 23,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 12: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 12 (Câu hỏi tưởng cũ, nhưng mỗi lần nghe lại là một lần muốn kể chuyện - Chiều qua, mình có...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 12: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 12: Câu hỏi tưởng cũ, nhưng mỗi lần nghe lại là một lần muốn kể chuyện - Chiều qua, mình có...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 26 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 23</span>\n        <span>🏷️ <b>Chủ đề:</b> Agile & Scrum</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 1 2 / 1 0 0 Câu hỏi tưởng cũ, nhưng mỗi lần nghe lại là một lần muốn kể chuyện Chiều qua, mình có dịp quay lại FPT Polytechnic để chia sẻ về nghề BA cho các bạn sinh viên IT. Và đúng như dự đoán, câu hỏi xuất hiện ở gần cuối buổi: “Anh ơi, BA có cần biết code không ạ?” Mình bật cười – không phải vì câu hỏi ngây ngô. Mà vì… mình cũng từng là người hỏi y chang như vậy cách đây vài năm. Rất nhi...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 12: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 12 (Câu hỏi tưởng cũ, nhưng mỗi lần nghe lại là một lần muốn kể chuyện - Chiều qua, mình có...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-13",
        "code": "DAY 13",
        "title": "Một câu hỏi rất quen khi làm với các bạn BA mới vào nghề: - “Làm sao để biết hệ thống c...",
        "category": "Dữ liệu & SQL",
        "pdfPage": 28,
        "printPage": 25,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 13: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 13 (Một câu hỏi rất quen khi làm với các bạn BA mới vào nghề: - “Làm sao để biết hệ thống c...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 13: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 13: Một câu hỏi rất quen khi làm với các bạn BA mới vào nghề: - “Làm sao để biết hệ thống c...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 28 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 25</span>\n        <span>🏷️ <b>Chủ đề:</b> Dữ liệu & SQL</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 1 3 / 1 0 0 Một câu hỏi rất quen khi làm với các bạn BA mới vào nghề: “Làm sao để biết hệ thống cần lưu những thông tin gì? Em nên bắt đầu dựng data object từ đâu khi chưa có bảng DB?” Tôi không ngạc nhiên. Vì trước đây, tôi cũng từng loay hoay như vậy. Không biết trường nào bắt buộc Không chắc validate ra sao Không rõ object cần những trạng thái nào, liên quan gì đến màn hình, báo cáo hay h...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 13: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 13 (Một câu hỏi rất quen khi làm với các bạn BA mới vào nghề: - “Làm sao để biết hệ thống c...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-14",
        "code": "DAY 14",
        "title": "Không phải bug, không phải logic sai, không phải thiếu tài liệu. - Nhiều pha toang tron...",
        "category": "Testing & UAT",
        "pdfPage": 30,
        "printPage": 27,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 14: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 14 (Không phải bug, không phải logic sai, không phải thiếu tài liệu. - Nhiều pha toang tron...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 14: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 14: Không phải bug, không phải logic sai, không phải thiếu tài liệu. - Nhiều pha toang tron...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 30 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 27</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 1 4 / 1 0 0 Không phải bug, không phải logic sai, không phải thiếu tài liệu. Nhiều pha toang trong dự án bắt đầu chỉ từ… một câu comment tưởng vô hại. ⚠️ 1. Những comment tưởng vô hại, nhưng khiến BA “đóng task” trong vô thức “Tạm ổn rồi, mai check nốt” “Cái này để release sau nhé” “Không tái hiện được bug” Dev nói vậy, Test gật đầu, và bạn… nghĩ là done. Nhưng thật ra: “Tạm ổn” là… chưa xon...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 14: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 14 (Không phải bug, không phải logic sai, không phải thiếu tài liệu. - Nhiều pha toang tron...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-15",
        "code": "DAY 15",
        "title": "Có những hôm đi làm sớm như hôm nay, ngồi ung dung làm cốc trà đá, mình tự hỏi: - Hồi m...",
        "category": "Đặc tả & Quản lý yêu cầu",
        "pdfPage": 32,
        "printPage": 29,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 15: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 15 (Có những hôm đi làm sớm như hôm nay, ngồi ung dung làm cốc trà đá, mình tự hỏi: - Hồi m...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 15: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 15: Có những hôm đi làm sớm như hôm nay, ngồi ung dung làm cốc trà đá, mình tự hỏi: - Hồi m...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 32 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 29</span>\n        <span>🏷️ <b>Chủ đề:</b> Đặc tả & Quản lý yêu cầu</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 1 5 / 1 0 0 Có những hôm đi làm sớm như hôm nay, ngồi ung dung làm cốc trà đá, mình tự hỏi: Hồi mới làm BA, mình đã từng ngây thơ tới mức nào?  Hồi đó, sếp bảo mình: “Em thêm cái nút ‘Đăng ký tư vấn’ lên trang chủ nhé, càng to càng tốt.” Mình không hỏi gì. Chỉ note lại, vẽ mockup, viết SRS, đẩy Dev làm ngay.  Làm xong, sếp feedback: “Ủa sao có khách đăng ký rồi mà không ai gọi? Sao form này ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 15: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 15 (Có những hôm đi làm sớm như hôm nay, ngồi ung dung làm cốc trà đá, mình tự hỏi: - Hồi m...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-16",
        "code": "DAY 16",
        "title": "“Flow này rõ ràng mà, test gì nữa?” - Tôi một BA trẩu tre đã từng chém thế. Và sáng hôm...",
        "category": "Testing & UAT",
        "pdfPage": 34,
        "printPage": 31,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 16: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 16 (“Flow này rõ ràng mà, test gì nữa?” - Tôi một BA trẩu tre đã từng chém thế. Và sáng hôm...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 16: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 16: “Flow này rõ ràng mà, test gì nữa?” - Tôi một BA trẩu tre đã từng chém thế. Và sáng hôm...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 34 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 31</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 1 6 / 1 0 0 “Flow này rõ ràng mà, test gì nữa?” Tôi một BA trẩu tre đã từng chém thế. Và sáng hôm sau, cái hệ thống “rõ ràng” đó… gãy. Tôi từng mô tả flow tự động “Tặng voucher sau 7 ngày”. Yêu cầu trong tài liệu vỏn vẹn một dòng: “Sau 7 ngày kể từ giao dịch thành công, hệ thống sẽ tặng 1 voucher 50K.” Nghe thì suôn, nhưng tester test là hệ thống rụng từng khúc: Giao dịch lúc 23h59 Thứ Hai, ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 16: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 16 (“Flow này rõ ràng mà, test gì nữa?” - Tôi một BA trẩu tre đã từng chém thế. Và sáng hôm...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-17",
        "code": "DAY 17",
        "title": "Lúc mới vào, tôi nghĩ: “Đây là nơi nghiêm túc làm sản phẩm.”. Team đông, vai trò rõ - r...",
        "category": "Agile & Scrum",
        "pdfPage": 36,
        "printPage": 33,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 17: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 17 (Lúc mới vào, tôi nghĩ: “Đây là nơi nghiêm túc làm sản phẩm.”. Team đông, vai trò rõ - r...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 17: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 17: Lúc mới vào, tôi nghĩ: “Đây là nơi nghiêm túc làm sản phẩm.”. Team đông, vai trò rõ - r...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 36 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 33</span>\n        <span>🏷️ <b>Chủ đề:</b> Agile & Scrum</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 1 7 / 1 0 0 Lúc mới vào, tôi nghĩ: “Đây là nơi nghiêm túc làm sản phẩm.”. Team đông, vai trò rõ ràng, backlog cập nhật từng giờ, stakeholder góp ý đều đều. Nhưng càng làm, tôi càng nhận ra…Thứ chúng tôi đang tạo ra không phải là sản phẩm, mà là một chiếc máy chạy tính năng.Và rồi, tôi đọc INSPIRED của Marty Cagan – và thấy… Từng phần trong sách, chính là từng vết nứt trong công ty nọ – vết n...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 17: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 17 (Lúc mới vào, tôi nghĩ: “Đây là nơi nghiêm túc làm sản phẩm.”. Team đông, vai trò rõ - r...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-18",
        "code": "DAY 18",
        "title": "Cuối tuần rồi chắc thể nào cũng có team vừa retro xong - Một buổi Retro sprint. UAT gãy...",
        "category": "Testing & UAT",
        "pdfPage": 39,
        "printPage": 36,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 18: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 18 (Cuối tuần rồi chắc thể nào cũng có team vừa retro xong - Một buổi Retro sprint. UAT gãy...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 18: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 18: Cuối tuần rồi chắc thể nào cũng có team vừa retro xong - Một buổi Retro sprint. UAT gãy...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 39 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 36</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 1 8 / 1 0 0 Cuối tuần rồi chắc thể nào cũng có team vừa retro xong Một buổi Retro sprint. UAT gãy. Bug nổ. Tính năng không chạy như kỳ vọng. Và rồi ánh mắt bắt đầu hướng về phía BA… “BA không confirm lại với user à?” “Cái flow đó có ghi rõ đâu?” “Lại thiếu logic trong tài liệu BA…” Nghe thì nhẹ, nhưng nếu bạn làm BA đủ lâu, bạn biết nó sâu như dao cạo. Không ai mắng. Không ai chửi. Nhưng chí...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 18: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 18 (Cuối tuần rồi chắc thể nào cũng có team vừa retro xong - Một buổi Retro sprint. UAT gãy...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-19",
        "code": "DAY 19",
        "title": "📅 Thứ Hai – ngày đầu tuần, mở máy đã thấy 6 cái meeting chờ sẵn - Sáng 8h30: họp kick-off",
        "category": "UX & Product Thinking",
        "pdfPage": 41,
        "printPage": 38,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 19: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 19 (📅 Thứ Hai – ngày đầu tuần, mở máy đã thấy 6 cái meeting chờ sẵn - Sáng 8h30: họp kick-off) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 19: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 19: 📅 Thứ Hai – ngày đầu tuần, mở máy đã thấy 6 cái meeting chờ sẵn - Sáng 8h30: họp kick-off</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 41 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 38</span>\n        <span>🏷️ <b>Chủ đề:</b> UX & Product Thinking</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 1 9 / 1 0 0 📅 Thứ Hai – ngày đầu tuần, mở máy đã thấy 6 cái meeting chờ sẵn Sáng 8h30: họp kick-off 10h: họp với team DEV để giải thích requirement 11h15: join họp với khách confirm lại rule Chiều 13h30: họp chỉnh sửa giao diện 15h: họp với test 17h: họp cập nhật tiến độ Kết thúc một ngày → file tài liệu vẫn trắng tinh Tối về, sếp hỏi: “Tài liệu đâu?” “Em đi họp suốt còn gì anh?” “Thế em họp...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 19: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 19 (📅 Thứ Hai – ngày đầu tuần, mở máy đã thấy 6 cái meeting chờ sẵn - Sáng 8h30: họp kick-off) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-20",
        "code": "DAY 20",
        "title": "🏢 Chuyện có thật ở một công ty bán trà sữa... - Công ty XYZ có hệ thống TeaBoss đã chạy...",
        "category": "Phân tích & thiết kế giải pháp",
        "pdfPage": 43,
        "printPage": 40,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 20: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 20 (🏢 Chuyện có thật ở một công ty bán trà sữa... - Công ty XYZ có hệ thống TeaBoss đã chạy...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 20: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 20: 🏢 Chuyện có thật ở một công ty bán trà sữa... - Công ty XYZ có hệ thống TeaBoss đã chạy...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 43 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 40</span>\n        <span>🏷️ <b>Chủ đề:</b> Phân tích & thiết kế giải pháp</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 2 0 / 1 0 0 🏢 Chuyện có thật ở một công ty bán trà sữa... Công ty XYZ có hệ thống TeaBoss đã chạy 3 năm. Nó giúp quản lý đơn hàng, tính điểm thưởng cho nhân viên, và tổng hợp doanh thu từng ca. Một ngày đẹp trời, sếp giao task: “Viết lại TeaBoss bản mới, UI xịn hơn, API mở rộng, có thể scale toàn quốc.” Phú – một bạn BA trẻ, nhanh nhẹn, flow vẽ đẹp như sách giáo khoa – được chọn. Nhưng Phú v...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 20: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 20 (🏢 Chuyện có thật ở một công ty bán trà sữa... - Công ty XYZ có hệ thống TeaBoss đã chạy...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-21",
        "code": "DAY 21",
        "title": "“Dự án này không có PM đâu – em follow luôn cả team nhé.” - Không phải câu nói lịch sử,...",
        "category": "Testing & UAT",
        "pdfPage": 45,
        "printPage": 42,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 21: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 21 (“Dự án này không có PM đâu – em follow luôn cả team nhé.” - Không phải câu nói lịch sử,...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 21: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 21: “Dự án này không có PM đâu – em follow luôn cả team nhé.” - Không phải câu nói lịch sử,...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 45 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 42</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 2 1 / 1 0 0 “Dự án này không có PM đâu – em follow luôn cả team nhé.” Không phải câu nói lịch sử, nhưng rất nhiều BA từng nghe phiên bản na ná như vậy. Lúc đầu còn vui: “Thử sức tí, biết đâu lại lên tay.” Ba tuần sau: Mắt thâm – Jira đỏ – Dev giận – Test khóc – tài liệu lỗi. Và đau nhất là… bạn tự mất khả năng nhìn rõ toàn cảnh. ⛔ Khi BA ôm luôn vai PM – dễ dính 4 cú \"gãy\": → Gãy nghiệp vụ: ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 21: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 21 (“Dự án này không có PM đâu – em follow luôn cả team nhé.” - Không phải câu nói lịch sử,...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-22",
        "code": "DAY 22",
        "title": "🧃 3 lời hứa quen thuộc trước khi dự án mệt mỏi: - → “Anh thấy field này nhỏ thôi, thêm ...",
        "category": "Dữ liệu & SQL",
        "pdfPage": 47,
        "printPage": 44,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 22: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 22 (🧃 3 lời hứa quen thuộc trước khi dự án mệt mỏi: - → “Anh thấy field này nhỏ thôi, thêm ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 22: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 22: 🧃 3 lời hứa quen thuộc trước khi dự án mệt mỏi: - → “Anh thấy field này nhỏ thôi, thêm ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 47 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 44</span>\n        <span>🏷️ <b>Chủ đề:</b> Dữ liệu & SQL</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 2 2 / 1 0 0 🧃 3 lời hứa quen thuộc trước khi dự án mệt mỏi: → “Anh thấy field này nhỏ thôi, thêm vào cho chuyên nghiệp.” → “Mình chưa cần logic phức tạp, lưu tạm cũng được.” → “Có xíu thôi mà – không ảnh hưởng gì đâu em.” Bạn BA trẻ gật đầu. Form có thêm ô nhập mã giới thiệu. ❌ 4 hậu quả ai cũng thấy sau 1 tuần chạy thật: → Dữ liệu nhập lung tung, không xác thực → CRM không dám dùng report →...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 22: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 22 (🧃 3 lời hứa quen thuộc trước khi dự án mệt mỏi: - → “Anh thấy field này nhỏ thôi, thêm ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-23",
        "code": "DAY 23",
        "title": "💥 Chuyện thật: - Một hệ thống đặt lịch sửa xe. BA vẽ flow đơn giản: khách đặt → garage ...",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 49,
        "printPage": 46,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 23: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 23 (💥 Chuyện thật: - Một hệ thống đặt lịch sửa xe. BA vẽ flow đơn giản: khách đặt → garage ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 23: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 23: 💥 Chuyện thật: - Một hệ thống đặt lịch sửa xe. BA vẽ flow đơn giản: khách đặt → garage ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 49 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 46</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 2 3 / 1 0 0 💥 Chuyện thật: Một hệ thống đặt lịch sửa xe. BA vẽ flow đơn giản: khách đặt → garage xác nhận → sửa xong. 3 tuần sau: Sale cần thống kê tỷ lệ bùng Admin muốn tách lịch xác nhận với lịch chờ Sếp hỏi conversion từ booking → sửa thật Cả hệ thống toang. Vì object Booking gánh luôn 7 logic. Không có ranh giới. Không có trạng thái. Không đại diện cho nghiệp vụ thật. 🧠 Domain-Driven Des...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 23: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 23 (💥 Chuyện thật: - Một hệ thống đặt lịch sửa xe. BA vẽ flow đơn giản: khách đặt → garage ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-24",
        "code": "DAY 24",
        "title": "Nghĩ làm BA trung lập là an toàn? Sai rồi. Trong môi trường bè phái đấu đá, BA không - ...",
        "category": "UX & Product Thinking",
        "pdfPage": 52,
        "printPage": 49,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 24: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 24 (Nghĩ làm BA trung lập là an toàn? Sai rồi. Trong môi trường bè phái đấu đá, BA không - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 24: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 24: Nghĩ làm BA trung lập là an toàn? Sai rồi. Trong môi trường bè phái đấu đá, BA không - ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 52 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 49</span>\n        <span>🏷️ <b>Chủ đề:</b> UX & Product Thinking</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 2 4 / 1 0 0 Nghĩ làm BA trung lập là an toàn? Sai rồi. Trong môi trường bè phái đấu đá, BA không dẫn dắt được thì chỉ còn nước làm bia đỡ đạn. 🎭 Một ngày chết đứng của BA trẻ: Thanh – một BA mới toe nhận dự án xây hệ thống Tuyển dụng cho công ty. Buổi họp gather requirement đầu tiên, Thanh bị kéo căng giữa hai lằn đạn: HR Recruiter sốt ruột: “Form ứng tuyển càng nhanh càng tốt, chỉ cần tên, ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 24: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 24 (Nghĩ làm BA trung lập là an toàn? Sai rồi. Trong môi trường bè phái đấu đá, BA không - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-25",
        "code": "DAY 25",
        "title": "🌟 Những thứ nguy hiểm nhất thường không nằm trên giấy - Không phải yêu cầu nào cũng đượ...",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 55,
        "printPage": 52,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 25: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 25 (🌟 Những thứ nguy hiểm nhất thường không nằm trên giấy - Không phải yêu cầu nào cũng đượ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 25: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 25: 🌟 Những thứ nguy hiểm nhất thường không nằm trên giấy - Không phải yêu cầu nào cũng đượ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 55 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 52</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 2 5 / 1 0 0 🌟 Những thứ nguy hiểm nhất thường không nằm trên giấy Không phải yêu cầu nào cũng được chia sẻ ngay từ đầu. Có những quy tắc vận hành bất thành văn – tồn tại cả chục năm – nhưng không ai đưa vào tài liệu. Chỉ khi hệ thống đi vào vận hành, những lệch lạc mới lộ ra từng chút một. 👉Hidden requirement không nằm đâu xa, nó ẩn ngay trong hành vi thường ngày. 📚 Một bài học thực tế – Khi...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 25: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 25 (🌟 Những thứ nguy hiểm nhất thường không nằm trên giấy - Không phải yêu cầu nào cũng đượ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-26",
        "code": "DAY 26",
        "title": "Vừa vào công ty. Mở mail chưa đầy 10 phút, sếp đã nhắn: - \"Dự án này cần gấp BA, em joi...",
        "category": "Phân tích & thiết kế giải pháp",
        "pdfPage": 57,
        "printPage": 54,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 26: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 26 (Vừa vào công ty. Mở mail chưa đầy 10 phút, sếp đã nhắn: - \"Dự án này cần gấp BA, em joi...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 26: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 26: Vừa vào công ty. Mở mail chưa đầy 10 phút, sếp đã nhắn: - \"Dự án này cần gấp BA, em joi...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 57 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 54</span>\n        <span>🏷️ <b>Chủ đề:</b> Phân tích & thiết kế giải pháp</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 2 6 / 1 0 0 Vừa vào công ty. Mở mail chưa đầy 10 phút, sếp đã nhắn: \"Dự án này cần gấp BA, em join luôn nha.\" Không intro. Không lịch bàn giao. Không bản đồ hệ thống. Chỉ có 1 chữ: GẤP. Và bạn – được kỳ vọng là: Hiểu nhanh – bắt nhịp nhanh – confirm nhanh – viết nhanh. Nhưng hệ thống thì chẳng \"nhanh\" lại với bạn. ĐẦU THÁNG, BẠN LÀ BA MỚI TOANH.  VÀ CHÀO MỪNG BẠN ĐẾN VỚI CHIẾN TRƯỜNG. 57  D ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 26: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 26 (Vừa vào công ty. Mở mail chưa đầy 10 phút, sếp đã nhắn: - \"Dự án này cần gấp BA, em joi...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-27",
        "code": "DAY 27",
        "title": "Vẫn đi họp đều. Vẫn viết tài liệu đầy đủ. DEV hiểu. QA test pass.Feedback không tệ. - M...",
        "category": "Testing & UAT",
        "pdfPage": 60,
        "printPage": 57,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 27: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 27 (Vẫn đi họp đều. Vẫn viết tài liệu đầy đủ. DEV hiểu. QA test pass.Feedback không tệ. - M...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 27: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 27: Vẫn đi họp đều. Vẫn viết tài liệu đầy đủ. DEV hiểu. QA test pass.Feedback không tệ. - M...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 60 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 57</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 2 7 / 1 0 0 Vẫn đi họp đều. Vẫn viết tài liệu đầy đủ. DEV hiểu. QA test pass.Feedback không tệ. Mọi thứ… ổn. Nhưng giữa một ngày làm việc, bạn chợt nghĩ: “Mình đang giúp team gỡ điều gì? Hay chỉ đang làm cho xong task?” Không có gì sai. Chỉ là… hơi lưng chừng. 🎓 Bạn chủ động học thêm:  ▪️ Một khóa viết tài liệu  ▪️ Một mini course elicitation  ▪️ Một buổi UML Nhưng có thể thứ bạn thiếu…Không...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 27: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 27 (Vẫn đi họp đều. Vẫn viết tài liệu đầy đủ. DEV hiểu. QA test pass.Feedback không tệ. - M...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-28",
        "code": "DAY 28",
        "title": "Kỹ thuật không sai. Nhưng nếu chọn sai kỹ thuật, sai người, sai thời điểm – bạn không -...",
        "category": "Testing & UAT",
        "pdfPage": 62,
        "printPage": 59,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 28: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 28 (Kỹ thuật không sai. Nhưng nếu chọn sai kỹ thuật, sai người, sai thời điểm – bạn không -...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 28: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 28: Kỹ thuật không sai. Nhưng nếu chọn sai kỹ thuật, sai người, sai thời điểm – bạn không -...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 62 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 59</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 2 8 / 1 0 0 Kỹ thuật không sai. Nhưng nếu chọn sai kỹ thuật, sai người, sai thời điểm – bạn không chỉ mất dữ liệu, mà còn mất niềm tin của cả team. ⚠️ Một pha fail kinh điển – tưởng đúng mà sai Dự án xây hệ thống quản lý sửa xe. BA mới vào, muốn làm bài bản → tổ chức workshop thu thập nghiệp vụ: xử lý xe lỗi, đặt lịch sửa, xác nhận phụ tùng. Workshop có: 5 kỹ thuật viên (đang thiếu người, đi...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 28: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 28 (Kỹ thuật không sai. Nhưng nếu chọn sai kỹ thuật, sai người, sai thời điểm – bạn không -...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-29",
        "code": "DAY 29",
        "title": "“Em làm theo yêu cầu mà!” - Câu nói tưởng vô hại… nhưng thực ra đang âm thầm giết chết ...",
        "category": "Phân tích & thiết kế giải pháp",
        "pdfPage": 64,
        "printPage": 61,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 29: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 29 (“Em làm theo yêu cầu mà!” - Câu nói tưởng vô hại… nhưng thực ra đang âm thầm giết chết ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 29: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 29: “Em làm theo yêu cầu mà!” - Câu nói tưởng vô hại… nhưng thực ra đang âm thầm giết chết ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 64 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 61</span>\n        <span>🏷️ <b>Chủ đề:</b> Phân tích & thiết kế giải pháp</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 2 9 / 1 0 0 “Em làm theo yêu cầu mà!” Câu nói tưởng vô hại… nhưng thực ra đang âm thầm giết chết cả hệ thống – và cả uy tín nghề BA của bạn. 🍱 App đặt cơm trưa – và cú điểm danh nhẹ cho tư duy BA \"nghe lời quá mức\" Công ty có hơn 100 nhân viên. Trước đây, mọi người nhắn Zalo cho chị admin để đặt cơm: gà, cá, thịt – mỗi món giới hạn 30 phần. Nếu món nào hết, chị sẽ gọi lại để đổi món. Hơi thủ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 29: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 29 (“Em làm theo yêu cầu mà!” - Câu nói tưởng vô hại… nhưng thực ra đang âm thầm giết chết ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-30",
        "code": "DAY 30",
        "title": "🕘 9h tối. Cả team DEV – QA – BA vẫn đang OT, căng mắt fix nốt bug cuối để kịp - Golive ...",
        "category": "Testing & UAT",
        "pdfPage": 67,
        "printPage": 64,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 30: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 30 (🕘 9h tối. Cả team DEV – QA – BA vẫn đang OT, căng mắt fix nốt bug cuối để kịp - Golive ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 30: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 30: 🕘 9h tối. Cả team DEV – QA – BA vẫn đang OT, căng mắt fix nốt bug cuối để kịp - Golive ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 67 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 64</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 3 0 / 1 0 0 🕘 9h tối. Cả team DEV – QA – BA vẫn đang OT, căng mắt fix nốt bug cuối để kịp Golive sáng mai. Tôi cũng đang cùng OT với anh em. Và đúng lúc đó, điện thoại tôi sáng lên: “Em ơi, anh Phú CEO có góp ý vụ chấm công hơi cứng. Mấy bạn có đi muộn nhưng vẫn làm đủ 8 tiếng mà vẫn bị trừ công. Mình nên sửa lại trước khi Golive sáng mai nha. Không để vậy được đâu!” Người gửi: chị HR.  ⏳ Cò...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 30: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 30 (🕘 9h tối. Cả team DEV – QA – BA vẫn đang OT, căng mắt fix nốt bug cuối để kịp - Golive ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-31",
        "code": "DAY 31",
        "title": "Phòng họp hôm đó, tôi không nói thêm một từ nào. Sếp nhìn tôi, ánh mắt đanh lại: “Em - ...",
        "category": "Khai thác yêu cầu",
        "pdfPage": 69,
        "printPage": 66,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 31: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 31 (Phòng họp hôm đó, tôi không nói thêm một từ nào. Sếp nhìn tôi, ánh mắt đanh lại: “Em - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 31: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 31: Phòng họp hôm đó, tôi không nói thêm một từ nào. Sếp nhìn tôi, ánh mắt đanh lại: “Em - ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 69 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 66</span>\n        <span>🏷️ <b>Chủ đề:</b> Khai thác yêu cầu</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 3 1 / 1 0 0 Phòng họp hôm đó, tôi không nói thêm một từ nào. Sếp nhìn tôi, ánh mắt đanh lại: “Em đang cãi anh à?” Không. Tôi không cãi. Tôi chỉ đang hỏi những câu mà… không ai dám hỏi. 🧩 Câu chuyện bắt đầu như này Sếp bảo: “Khách mua đủ 100k thì tặng voucher. Làm đơn giản, đừng lằng nhằng nữa.” Tôi gật đầu. Rồi hỏi: Nếu khách trả hàng thì điểm sao xử lý? Voucher gửi rồi có thu hồi được không...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 31: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 31 (Phòng họp hôm đó, tôi không nói thêm một từ nào. Sếp nhìn tôi, ánh mắt đanh lại: “Em - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-32",
        "code": "DAY 32",
        "title": "💥 Dự án không nổ vì bug. Nó rò rỉ từng chút vì những tín hiệu nhỏ bị BA bỏ qua. Một - s...",
        "category": "Testing & UAT",
        "pdfPage": 71,
        "printPage": 68,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 32: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 32 (💥 Dự án không nổ vì bug. Nó rò rỉ từng chút vì những tín hiệu nhỏ bị BA bỏ qua. Một - s...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 32: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 32: 💥 Dự án không nổ vì bug. Nó rò rỉ từng chút vì những tín hiệu nhỏ bị BA bỏ qua. Một - s...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 71 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 68</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 3 2 / 1 0 0 💥 Dự án không nổ vì bug. Nó rò rỉ từng chút vì những tín hiệu nhỏ bị BA bỏ qua. Một sáng đẹp trời, bạn mở máy chưa kịp uống cà phê thì... DEV vẫn chưa update task dù đã hứa \"xong hôm nay\" từ… hôm kia QA hỏi về một flow bạn chưa từng viết Stakeholder nhắn riêng: “Ơ, chị tưởng em hiểu rồi nên không nói lại…” PM seen tin nhắn nhưng đặc biệt im lặng Và bạn người đang giữ requirement,...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 32: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 32 (💥 Dự án không nổ vì bug. Nó rò rỉ từng chút vì những tín hiệu nhỏ bị BA bỏ qua. Một - s...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-33",
        "code": "DAY 33",
        "title": "Feedback không phải là cú đấm nhưng phản ứng ngu sẽ khiến bạn knockout. Hôm đó, - trong...",
        "category": "UX & Product Thinking",
        "pdfPage": 75,
        "printPage": 72,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 33: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 33 (Feedback không phải là cú đấm nhưng phản ứng ngu sẽ khiến bạn knockout. Hôm đó, - trong...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 33: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 33: Feedback không phải là cú đấm nhưng phản ứng ngu sẽ khiến bạn knockout. Hôm đó, - trong...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 75 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 72</span>\n        <span>🏷️ <b>Chủ đề:</b> UX & Product Thinking</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 3 3 / 1 0 0 Feedback không phải là cú đấm nhưng phản ứng ngu sẽ khiến bạn knockout. Hôm đó, trong một buổi họp nội bộ, tôi tự tin trình bày flow tính năng mới. Có wireframe. Có logic. Tưởng ngon. Nhưng vừa dứt slide đầu tiên… feedback tới tấp: UX này khó dùng lắm em ơi Flow chưa nghĩ tới nhóm người dùng B Cái logic duyệt này mâu thuẫn với chính business rule bên dashboard... Và tôi một BA ch...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 33: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 33 (Feedback không phải là cú đấm nhưng phản ứng ngu sẽ khiến bạn knockout. Hôm đó, - trong...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-34",
        "code": "DAY 34",
        "title": "(Dành cho những BA Manager – khi thấy dự án vận hành mà vẫn không an lòng) - 🌙 Chủ Nhật...",
        "category": "Testing & UAT",
        "pdfPage": 77,
        "printPage": 74,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 34: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 34 ((Dành cho những BA Manager – khi thấy dự án vận hành mà vẫn không an lòng) - 🌙 Chủ Nhật...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 34: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp.",
        "contentHtml": "\n      <h2>DAY 34: (Dành cho những BA Manager – khi thấy dự án vận hành mà vẫn không an lòng) - 🌙 Chủ Nhật...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 77 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 74</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 3 4 / 1 0 0 (Dành cho những BA Manager – khi thấy dự án vận hành mà vẫn không an lòng) 🌙 Chủ Nhật. Không task. Không họp. Chat cũng im. Tôi ngồi lại, không phải vì mệt.  Mà vì có gì đó… không thông. Không phải bug. Không phải task chưa xong. Mà là cảm giác dự án đang vận hành… mà thiếu mạch. 📌 Cả tuần qua… ai cũng làm đúng phần việc của mình. Tài liệu có. Yêu cầu rõ. Kết luận đầy đủ. Nhưng g...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 34: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 34 ((Dành cho những BA Manager – khi thấy dự án vận hành mà vẫn không an lòng) - 🌙 Chủ Nhật...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-35",
        "code": "DAY 35",
        "title": "🎯 Rất nhiều bạn BA nghĩ: - “Em viết đầy đủ flow rồi mà, sao hệ thống vẫn lỗi?”",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 78,
        "printPage": 75,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 35: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 35 (🎯 Rất nhiều bạn BA nghĩ: - “Em viết đầy đủ flow rồi mà, sao hệ thống vẫn lỗi?”) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 35: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 35: 🎯 Rất nhiều bạn BA nghĩ: - “Em viết đầy đủ flow rồi mà, sao hệ thống vẫn lỗi?”</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 78 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 75</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 3 5 / 1 0 0 🎯 Rất nhiều bạn BA nghĩ: “Em viết đầy đủ flow rồi mà, sao hệ thống vẫn lỗi?” “Em confirm lại với user rồi, họ bảo đúng logic.” “Em đâu có sai, DEV làm chưa đúng thôi.” → Bạn không sai về flow. → Bạn không sai về quy trình. → Nhưng bạn sai vì không thấy được hệ thống toàn cảnh. 📌 Bạn làm đúng theo yêu cầu nhưng không nhận ra: Yêu cầu đó đẩy lỗi sang hệ thống khác mà bạn không kiểm...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 35: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 35 (🎯 Rất nhiều bạn BA nghĩ: - “Em viết đầy đủ flow rồi mà, sao hệ thống vẫn lỗi?”) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-36",
        "code": "DAY 36",
        "title": "“Em gửi task rõ ràng mà DEV vẫn làm sai.” - “DEV làm ẩu, không đọc SRS, em mệt mỏi sửa ...",
        "category": "Đặc tả & Quản lý yêu cầu",
        "pdfPage": 80,
        "printPage": 77,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 36: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 36 (“Em gửi task rõ ràng mà DEV vẫn làm sai.” - “DEV làm ẩu, không đọc SRS, em mệt mỏi sửa ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 36: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 36: “Em gửi task rõ ràng mà DEV vẫn làm sai.” - “DEV làm ẩu, không đọc SRS, em mệt mỏi sửa ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 80 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 77</span>\n        <span>🏷️ <b>Chủ đề:</b> Đặc tả & Quản lý yêu cầu</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 3 6 / 1 0 0 “Em gửi task rõ ràng mà DEV vẫn làm sai.” “DEV làm ẩu, không đọc SRS, em mệt mỏi sửa logic hoài.” “BA toàn vẽ hươu vẽ vượn, DEV tụi tôi code khổ vc.” 💥 Đây không chỉ là câu chuyện của bạn – mà là nỗi đau muôn thuở giữa BA và DEV. 🎯 Sự thật phũ: Cả hai không sai… nhưng đang không cùng chiến tuyến. BA nghĩ: “Tôi phân tích nghiệp vụ, tôi đúng.” DEV nghĩ: “Tôi code đúng mô tả, tôi cũ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 36: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 36 (“Em gửi task rõ ràng mà DEV vẫn làm sai.” - “DEV làm ẩu, không đọc SRS, em mệt mỏi sửa ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-37",
        "code": "DAY 37",
        "title": "🎯 Bối cảnh: - Kỳ review 6 tháng và một hệ thống được build đúng tới từng field. Công ty...",
        "category": "Agile & Scrum",
        "pdfPage": 83,
        "printPage": 80,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 37: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 37 (🎯 Bối cảnh: - Kỳ review 6 tháng và một hệ thống được build đúng tới từng field. Công ty...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 37: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 37: 🎯 Bối cảnh: - Kỳ review 6 tháng và một hệ thống được build đúng tới từng field. Công ty...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 83 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 80</span>\n        <span>🏷️ <b>Chủ đề:</b> Agile & Scrum</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 3 7 / 1 0 0 🎯 Bối cảnh:  Kỳ review 6 tháng và một hệ thống được build đúng tới từng field. Công ty triển khai kỳ đánh giá hiệu suất 6 tháng đầu năm, gắn với: KPI / OKR Xếp loại A-B-C theo kết quả đánh giá Xét tăng lương HR yêu cầu hệ thống: Cho phép nhân viên tự đánh giá theo OKR Line Manager đánh giá lại Hệ thống tính điểm trung bình theo trọng số Export kết quả → làm căn cứ tăng lương, xét...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 37: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 37 (🎯 Bối cảnh: - Kỳ review 6 tháng và một hệ thống được build đúng tới từng field. Công ty...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-38",
        "code": "DAY 38",
        "title": "“Làm lại cái này cho anh nhé.” - “Đưa tính năng kia lên gấp, mấy cái khác tính sau.”",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 86,
        "printPage": 83,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 38: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 38 (“Làm lại cái này cho anh nhé.” - “Đưa tính năng kia lên gấp, mấy cái khác tính sau.”) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 38: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 38: “Làm lại cái này cho anh nhé.” - “Đưa tính năng kia lên gấp, mấy cái khác tính sau.”</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 86 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 83</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 3 8 / 1 0 0 “Làm lại cái này cho anh nhé.” “Đưa tính năng kia lên gấp, mấy cái khác tính sau.” “Sao còn chưa xong? Anh nói từ hôm trước rồi mà?” Nếu bạn từng khựng lại vì một câu nói từ sếp – không phải vì sợ, mà vì biết: 👉 Chỉ một dòng chỉ đạo, có thể kéo theo cả hệ thống chệch hướng. 🎯 Bối cảnh có thật: BA vừa sign-off bản SRS với khách hàng. Chiều hôm đó, sếp nhắn riêng: “Mai anh đi họp, ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 38: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 38 (“Làm lại cái này cho anh nhé.” - “Đưa tính năng kia lên gấp, mấy cái khác tính sau.”) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-39",
        "code": "DAY 39",
        "title": "📍 Câu chuyện thật – Khởi đầu của sự mất niềm tin - Ở công ty cũ, tôi từng lead một team...",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 88,
        "printPage": 85,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 39: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 39 (📍 Câu chuyện thật – Khởi đầu của sự mất niềm tin - Ở công ty cũ, tôi từng lead một team...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 39: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 39: 📍 Câu chuyện thật – Khởi đầu của sự mất niềm tin - Ở công ty cũ, tôi từng lead một team...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 88 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 85</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 3 9 / 1 0 0 📍 Câu chuyện thật – Khởi đầu của sự mất niềm tin Ở công ty cũ, tôi từng lead một team dev nhỏ. Làm cùng với một anh BA. Giai đoạn đầu? Ổn. Tài liệu ok. Họp khách bài bản. Flow vẽ đủ bước. Tôi còn nghĩ: “Cho ảnh handle luôn mấy feature chính cũng được.” Cho đến khi… ❌ Một flow tưởng đã confirm với khách.  Dev code xong, khách phản hồi: “Ai bảo xử lý kiểu này?”  Cả team nhìn nhau. ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 39: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 39 (📍 Câu chuyện thật – Khởi đầu của sự mất niềm tin - Ở công ty cũ, tôi từng lead một team...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-40",
        "code": "DAY 40",
        "title": "“Em làm nhanh cái hệ thống ABC nhé.” - Và thế là BA bắt đầu đi phân tích hệ thống – như...",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 91,
        "printPage": 88,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 40: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 40 (“Em làm nhanh cái hệ thống ABC nhé.” - Và thế là BA bắt đầu đi phân tích hệ thống – như...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 40: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 40: “Em làm nhanh cái hệ thống ABC nhé.” - Và thế là BA bắt đầu đi phân tích hệ thống – như...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 91 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 88</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 4 0 / 1 0 0 “Em làm nhanh cái hệ thống ABC nhé.” Và thế là BA bắt đầu đi phân tích hệ thống – nhưng thật ra không hiểu: Hệ thống này để làm gì?  Giải quyết nỗi đau nào? Ảnh hưởng tới ai? Chạm tới tầng nào trong quy trình vận hành? ⛔ Đó là cách hàng loạt dự án \"làm đúng nhưng vẫn toang\". Một BA cứng không lao vào viết tài liệu, vẽ diagram, mà lùi lại một bước để nhìn tổng thể cuộc chơi. 🧠 Họ ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 40: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 40 (“Em làm nhanh cái hệ thống ABC nhé.” - Và thế là BA bắt đầu đi phân tích hệ thống – như...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-41",
        "code": "DAY 41",
        "title": "🎯 Bối cảnh: - Mỗi khi khách mua hàng tại cửa hàng → điểm sẽ được cộng vào tài khoản loy...",
        "category": "Dữ liệu & SQL",
        "pdfPage": 95,
        "printPage": 92,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 41: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 41 (🎯 Bối cảnh: - Mỗi khi khách mua hàng tại cửa hàng → điểm sẽ được cộng vào tài khoản loy...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 41: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 41: 🎯 Bối cảnh: - Mỗi khi khách mua hàng tại cửa hàng → điểm sẽ được cộng vào tài khoản loy...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 95 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 92</span>\n        <span>🏷️ <b>Chủ đề:</b> Dữ liệu & SQL</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 4 1 / 1 0 0 🎯 Bối cảnh:  Mỗi khi khách mua hàng tại cửa hàng → điểm sẽ được cộng vào tài khoản loyalty trên app khách hàng. Luồng tưởng như đơn giản: POS bắn data sang loyalty Loyalty cập nhật điểm CRM ghi nhận hành vi mua hàng Nhưng khi chạy thật: Nhiều cửa hàng mạng yếu → POS bắn chậm hoặc bắn lỗi Loyalty không nhận được → khách không thấy điểm CRM vẫn ghi nhận là đã mua → tạo dữ liệu bất ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 41: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 41 (🎯 Bối cảnh: - Mỗi khi khách mua hàng tại cửa hàng → điểm sẽ được cộng vào tài khoản loy...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-42",
        "code": "DAY 42",
        "title": "🎯 Bối cảnh: Module xin nghỉ – chấm công trong hệ thống nội bộ - Junior BA đề xuất một l...",
        "category": "Kỹ năng & Phỏng vấn BA",
        "pdfPage": 97,
        "printPage": 94,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 42: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 42 (🎯 Bối cảnh: Module xin nghỉ – chấm công trong hệ thống nội bộ - Junior BA đề xuất một l...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 42: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 42: 🎯 Bối cảnh: Module xin nghỉ – chấm công trong hệ thống nội bộ - Junior BA đề xuất một l...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 97 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 94</span>\n        <span>🏷️ <b>Chủ đề:</b> Kỹ năng & Phỏng vấn BA</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 4 2 / 1 0 0 🎯 Bối cảnh: Module xin nghỉ – chấm công trong hệ thống nội bộ  Junior BA đề xuất một logic đơn giản: Nếu user xin nghỉ nửa ngày Nhưng chưa có chấm công buổi sáng  → Hiển thị cảnh báo nhẹ để kiểm tra lại (không chặn, không huỷ) DEV phản hồi: Tốn effort Không cần thiết Trường hợp này người dùng cần tự kiểm soát Cả phòng im. Junior BA nhìn xuống tài liệu. PM nhìn sang tôi. 🧠 Tôi khô...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 42: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 42 (🎯 Bối cảnh: Module xin nghỉ – chấm công trong hệ thống nội bộ - Junior BA đề xuất một l...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-43",
        "code": "DAY 43",
        "title": "Nếu bạn vẫn nghĩ BA đi phân tích yêu cầu là để làm tính năng, thì bạn đang hiểu - sai b...",
        "category": "UX & Product Thinking",
        "pdfPage": 99,
        "printPage": 96,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 43: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 43 (Nếu bạn vẫn nghĩ BA đi phân tích yêu cầu là để làm tính năng, thì bạn đang hiểu - sai b...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 43: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 43: Nếu bạn vẫn nghĩ BA đi phân tích yêu cầu là để làm tính năng, thì bạn đang hiểu - sai b...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 99 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 96</span>\n        <span>🏷️ <b>Chủ đề:</b> UX & Product Thinking</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 4 3 / 1 0 0 Nếu bạn vẫn nghĩ BA đi phân tích yêu cầu là để làm tính năng, thì bạn đang hiểu sai bản chất nghề này ngay từ bước đầu. 🎯 Không ai thật sự “cần” tính năng Người dùng không thật sự cần một tính năng. Họ cần kết quả mà tính năng đó mang lại. Khi họ nói “cần lọc danh sách” → họ đang cố gắng tìm ra nhóm khách để hành động. Khi họ nói “cần dashboard” → họ muốn quản lý được tình hình đ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 43: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 43 (Nếu bạn vẫn nghĩ BA đi phân tích yêu cầu là để làm tính năng, thì bạn đang hiểu - sai b...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-44",
        "code": "DAY 44",
        "title": "Ở một công ty nọ, có những dự án bắt đầu bằng cụm từ “rất gấp”, nhưng rồi trôi vào im -...",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 101,
        "printPage": 98,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 44: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 44 (Ở một công ty nọ, có những dự án bắt đầu bằng cụm từ “rất gấp”, nhưng rồi trôi vào im -...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 44: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 44: Ở một công ty nọ, có những dự án bắt đầu bằng cụm từ “rất gấp”, nhưng rồi trôi vào im -...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 101 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 98</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 4 4 / 1 0 0 Ở một công ty nọ, có những dự án bắt đầu bằng cụm từ “rất gấp”, nhưng rồi trôi vào im lặng cũng bằng chính cụm từ ấy: “Giờ ưu tiên cái khác trước nhé.” Người BA bước vào dự án với niềm tin: Chỉ cần mình làm đủ tốt, đủ kỹ, đủ trách nhiệm thì hệ thống sẽ đi tới đích. Nhưng rồi: Họ viết ra một tài liệu dày 600 trang, không ai mở Họ vẽ flow rõ như lòng bàn tay, nhưng DEV bảo cái này ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 44: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 44 (Ở một công ty nọ, có những dự án bắt đầu bằng cụm từ “rất gấp”, nhưng rồi trôi vào im -...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-45",
        "code": "DAY 45",
        "title": "Bạn vừa được “đẩy” vào một dự án đang chạy. Không onboarding, không hệ thống tài - liệu...",
        "category": "UX & Product Thinking",
        "pdfPage": 103,
        "printPage": 100,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 45: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 45 (Bạn vừa được “đẩy” vào một dự án đang chạy. Không onboarding, không hệ thống tài - liệu...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 45: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 45: Bạn vừa được “đẩy” vào một dự án đang chạy. Không onboarding, không hệ thống tài - liệu...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 103 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 100</span>\n        <span>🏷️ <b>Chủ đề:</b> UX & Product Thinking</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 4 5 / 1 0 0 Bạn vừa được “đẩy” vào một dự án đang chạy. Không onboarding, không hệ thống tài liệu, không ai nói cho bạn biết chuyện gì đang xảy ra.  Dev thì bận build tính năng.  QC thì nhìn bạn đầy ái ngại.  Còn PM thì chỉ nói một câu quen thuộc: “Em cứ làm theo tài liệu cũ nhé, có gì anh confirm sau.” Và rồi bạn… ngồi đó. Mở Figma. Mở Jira. Lướt. Không biết nên hỏi gì trước, nên bắt đầu từ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 45: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 45 (Bạn vừa được “đẩy” vào một dự án đang chạy. Không onboarding, không hệ thống tài - liệu...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-46",
        "code": "DAY 46",
        "title": "Có những dự án không thiếu người, không thiếu tiền. Sếp cũng rất tâm huyết, luôn theo -...",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 105,
        "printPage": 102,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 46: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 46 (Có những dự án không thiếu người, không thiếu tiền. Sếp cũng rất tâm huyết, luôn theo -...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 46: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 46: Có những dự án không thiếu người, không thiếu tiền. Sếp cũng rất tâm huyết, luôn theo -...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 105 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 102</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 4 6 / 1 0 0 Có những dự án không thiếu người, không thiếu tiền. Sếp cũng rất tâm huyết, luôn theo sát từng bước. Chỉ là… quá kỹ tính.  Không kỹ về nghiệp vụ – mà kỹ về… từng dấu chấm, từng dòng text, từng icon. “Chỗ này sao em dùng từ ‘xuất hiện’? Nghe hơi cứng.”  “Dòng này nên tách ra, anh đọc thấy hơi nặng mắt.”  “Cái flow em vẽ… nhìn chưa mượt.” Bạn là BA, bạn vào dự án với tâm thế: mình ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 46: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 46 (Có những dự án không thiếu người, không thiếu tiền. Sếp cũng rất tâm huyết, luôn theo -...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-47",
        "code": "DAY 47",
        "title": "👂 Một ngày bình thường và một loạt từ ngữ kỳ lạ ập đến - DEV bảo: “Tôi đang checkout nh...",
        "category": "Testing & UAT",
        "pdfPage": 107,
        "printPage": 104,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 47: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 47 (👂 Một ngày bình thường và một loạt từ ngữ kỳ lạ ập đến - DEV bảo: “Tôi đang checkout nh...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 47: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 47: 👂 Một ngày bình thường và một loạt từ ngữ kỳ lạ ập đến - DEV bảo: “Tôi đang checkout nh...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 107 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 104</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 4 7 / 1 0 0 👂 Một ngày bình thường và một loạt từ ngữ kỳ lạ ập đến  DEV bảo: “Tôi đang checkout nhánh hotfix.”  Tester nói: “Commit này có được cherry-pick lên PROD không chị?”  PM hỏi: “Tính năng A đã merge chưa, có nằm trong bản tag v2.3.0 không?” Bạn không cần vào Git để kiểm tra, nhưng bạn phải hiểu họ đang nói gì để trả lời đúng, không ngơ ngác, và không đổ lỗi sai người. 🧠 Vậy Git là g...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 47: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 47 (👂 Một ngày bình thường và một loạt từ ngữ kỳ lạ ập đến - DEV bảo: “Tôi đang checkout nh...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-48",
        "code": "DAY 48",
        "title": "Một trong những thời điểm thể hiện rõ đẳng cấp của BA – không nằm ở lúc viết - requirem...",
        "category": "UX & Product Thinking",
        "pdfPage": 110,
        "printPage": 107,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 48: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 48 (Một trong những thời điểm thể hiện rõ đẳng cấp của BA – không nằm ở lúc viết - requirem...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 48: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 48: Một trong những thời điểm thể hiện rõ đẳng cấp của BA – không nằm ở lúc viết - requirem...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 110 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 107</span>\n        <span>🏷️ <b>Chủ đề:</b> UX & Product Thinking</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 4 8 / 1 0 0 Một trong những thời điểm thể hiện rõ đẳng cấp của BA – không nằm ở lúc viết requirement, mà là khi bị hỏi lại… yêu cầu tưởng như đã “chắc cú”. 📌 Bối cảnh thật:  BA vừa viết xong đặc tả. Duyệt nội bộ xong, DEV đang code. Tester bắt đầu test, rồi một câu hỏi nhẹ nhàng bay tới: “Phần này chưa rõ lắm – người dùng nhập thế nào thì được tính hợp lệ?” Bạn giật mình. Ủa rõ ràng ghi rồi ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 48: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 48 (Một trong những thời điểm thể hiện rõ đẳng cấp của BA – không nằm ở lúc viết - requirem...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-49",
        "code": "DAY 49",
        "title": "“Em đang làm dự án có tích hợp kế toán anh ạ, mà đọc tới chỗ kế toán em muốn nghỉ - việc.",
        "category": "Phân tích & thiết kế giải pháp",
        "pdfPage": 113,
        "printPage": 110,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 49: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 49 (“Em đang làm dự án có tích hợp kế toán anh ạ, mà đọc tới chỗ kế toán em muốn nghỉ - việc.) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 49: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 49: “Em đang làm dự án có tích hợp kế toán anh ạ, mà đọc tới chỗ kế toán em muốn nghỉ - việc.</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 113 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 110</span>\n        <span>🏷️ <b>Chủ đề:</b> Phân tích & thiết kế giải pháp</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 4 9 / 1 0 0 “Em đang làm dự án có tích hợp kế toán anh ạ, mà đọc tới chỗ kế toán em muốn nghỉ việc.  Một rừng thuật ngữ: Công nợ – Bút toán – Tài khoản cấp 1/2/3 – Hạch toán – Định khoản – đối ứng…” 😵 Em bắt đầu thấy mình kém cỏi, lú luôn với loạt thuật ngữ, muốn đi học khóa kế toán cho rồi 🧠 Nhưng với kinh nghiệm của một BA lâu năm, anh không chọn cách đi học kế toán như một kế toán. Anh ch...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 49: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 49 (“Em đang làm dự án có tích hợp kế toán anh ạ, mà đọc tới chỗ kế toán em muốn nghỉ - việc.) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-50",
        "code": "DAY 50",
        "title": "“UX là việc của designer chứ liên quan gì đến BA?” - Câu hỏi mà mình từng nghĩ trong nă...",
        "category": "UX & Product Thinking",
        "pdfPage": 116,
        "printPage": 113,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 50: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 50 (“UX là việc của designer chứ liên quan gì đến BA?” - Câu hỏi mà mình từng nghĩ trong nă...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 50: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 50: “UX là việc của designer chứ liên quan gì đến BA?” - Câu hỏi mà mình từng nghĩ trong nă...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 116 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 113</span>\n        <span>🏷️ <b>Chủ đề:</b> UX & Product Thinking</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 5 0 / 1 0 0 “UX là việc của designer chứ liên quan gì đến BA?” Câu hỏi mà mình từng nghĩ trong năm đầu làm BA. Cho đến khi:  Flow mình phân tích khiến người dùng... không muốn dùng,  UI team phải quay lại hỏi: “Ủa Phú muốn trải nghiệm gì ở bước này?”  Và mình nhận ra: Lỗi nằm ở mình – người viết requirement thiếu tư duy trải nghiệm. 🎯 Cuốn “UX for Beginners” có gì đáng đọc với BA? Tác giả Jo...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 50: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 50 (“UX là việc của designer chứ liên quan gì đến BA?” - Câu hỏi mà mình từng nghĩ trong nă...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-51",
        "code": "DAY 51",
        "title": "Nhiều tính năng bắt đầu bằng một câu rất quen: - “Làm nhanh để kịp demo chiều nay nhé.”",
        "category": "Testing & UAT",
        "pdfPage": 119,
        "printPage": 116,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 51: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 51 (Nhiều tính năng bắt đầu bằng một câu rất quen: - “Làm nhanh để kịp demo chiều nay nhé.”) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 51: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 51: Nhiều tính năng bắt đầu bằng một câu rất quen: - “Làm nhanh để kịp demo chiều nay nhé.”</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 119 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 116</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 5 1 / 1 0 0 Nhiều tính năng bắt đầu bằng một câu rất quen: “Làm nhanh để kịp demo chiều nay nhé.” “Tạm thời thêm tính năng gửi mail, mai chạy campaign.” Không họp phân tích. Không đặc tả. Không gì cả – ngoài một task gắn tên bạn với deadline: ngay hôm nay!!! Có những lúc team buộc phải đi “đường tắt” – để test insight, để show investor, để MKT kịp chiến dịch. Tính năng chưa được họp phân tíc...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 51: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 51 (Nhiều tính năng bắt đầu bằng một câu rất quen: - “Làm nhanh để kịp demo chiều nay nhé.”) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-52",
        "code": "DAY 52",
        "title": "🍻 Mở đầu từ quán bia hơi Hà Nội: - Bạn làm phần mềm SaaS cho chuỗi quán bia.",
        "category": "Phân tích & thiết kế giải pháp",
        "pdfPage": 121,
        "printPage": 118,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 52: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 52 (🍻 Mở đầu từ quán bia hơi Hà Nội: - Bạn làm phần mềm SaaS cho chuỗi quán bia.) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 52: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 52: 🍻 Mở đầu từ quán bia hơi Hà Nội: - Bạn làm phần mềm SaaS cho chuỗi quán bia.</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 121 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 118</span>\n        <span>🏷️ <b>Chủ đề:</b> Phân tích & thiết kế giải pháp</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 5 2 / 1 0 0 🍻 Mở đầu từ quán bia hơi Hà Nội:  Bạn làm phần mềm SaaS cho chuỗi quán bia.  Hệ thống core đã có: Gọi món – quản lý bàn – in bếp – tính tiền – báo cáo doanh thu. Rồi một quán yêu cầu: “Bên chị bán cả bia lon, bia chai, tháp bia – muốn tính điểm thưởng riêng cho từng loại, tặng thẻ tích điểm theo từng bàn.” Quán khác yêu cầu: “Bên chị cần gợi ý món theo lịch sử từng khách quen.” M...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 52: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 52 (🍻 Mở đầu từ quán bia hơi Hà Nội: - Bạn làm phần mềm SaaS cho chuỗi quán bia.) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-53",
        "code": "DAY 53",
        "title": "Bạn vừa họp xong với khách hàng. Hỏi nhanh: “Nếu có bộ lọc thời gian thì tiện hơn - khô...",
        "category": "Testing & UAT",
        "pdfPage": 124,
        "printPage": 121,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 53: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 53 (Bạn vừa họp xong với khách hàng. Hỏi nhanh: “Nếu có bộ lọc thời gian thì tiện hơn - khô...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 53: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 53: Bạn vừa họp xong với khách hàng. Hỏi nhanh: “Nếu có bộ lọc thời gian thì tiện hơn - khô...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 124 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 121</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 5 3 / 1 0 0 Bạn vừa họp xong với khách hàng. Hỏi nhanh: “Nếu có bộ lọc thời gian thì tiện hơn không anh?” Khách gật đầu: “Tiện quá em. Làm luôn đi.” Bạn note lại, đưa vào backlog. DEV build, QC test, PM báo done. Sản phẩm ra mắt không ai dùng. Tính năng gần như mất tích. Không lỗi. Không bug. Nhưng không có nhu cầu. 🎯 Lý do?  Bạn hỏi sai. Nhưng tưởng mình hỏi đúng.  Bạn hỏi xem họ “muốn gì” ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 53: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 53 (Bạn vừa họp xong với khách hàng. Hỏi nhanh: “Nếu có bộ lọc thời gian thì tiện hơn - khô...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-54",
        "code": "DAY 54",
        "title": "Sau 1 năm ở vai trò quản lý, tôi hiểu: - Làm sếp là một danh xưng",
        "category": "Nền tảng BA",
        "pdfPage": 127,
        "printPage": 124,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 54: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 54 (Sau 1 năm ở vai trò quản lý, tôi hiểu: - Làm sếp là một danh xưng) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 54: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 54: Sau 1 năm ở vai trò quản lý, tôi hiểu: - Làm sếp là một danh xưng</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 127 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 124</span>\n        <span>🏷️ <b>Chủ đề:</b> Nền tảng BA</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 5 4 / 1 0 0 Sau 1 năm ở vai trò quản lý, tôi hiểu:  Làm sếp là một danh xưng Làm quản lý là một hành trình đổi cách nhìn người, nhìn việc và nhìn chính mình. Ngày trước, tôi nghĩ: “LÀM SẾP lúc ra quyết định và dẫn dắt team” Họp hành, phân công, duyệt task, đưa ra chỉ đạo… Tôi nghĩ vậy là đúng vai. Nhưng dần dần tôi nhận ra: Team không cần một người chỉ tay. Team cần một người hiểu và hỗ trợ....</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 54: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 54 (Sau 1 năm ở vai trò quản lý, tôi hiểu: - Làm sếp là một danh xưng) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-55",
        "code": "DAY 55",
        "title": "Nghe chữ “gấp”, BA non tay sẽ lao vào làm ngay. BA cứng thì tỉnh lại, nhìn bản đồ dự - ...",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 129,
        "printPage": 126,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 55: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 55 (Nghe chữ “gấp”, BA non tay sẽ lao vào làm ngay. BA cứng thì tỉnh lại, nhìn bản đồ dự - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 55: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 55: Nghe chữ “gấp”, BA non tay sẽ lao vào làm ngay. BA cứng thì tỉnh lại, nhìn bản đồ dự - ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 129 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 126</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 5 5 / 1 0 0 Nghe chữ “gấp”, BA non tay sẽ lao vào làm ngay. BA cứng thì tỉnh lại, nhìn bản đồ dự án, rồi mới ra tay. Sếp nhắn: “Em ơi gấp lắm. Làm tài liệu giúp anh ngay nhé.” BA mở máy, viết. Gõ xong spec, dựng flow, gửi bản vẽ wireframe. Rồi... 1 tuần sau, DEV chưa làm. 2 tuần sau, đổi logic. 3 tuần sau, spec bạn viết bị bỏ. Bạn thấy mình có tâm, còn hệ thống thì đổ sông đổ biển. Vấn đề kh...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 55: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 55 (Nghe chữ “gấp”, BA non tay sẽ lao vào làm ngay. BA cứng thì tỉnh lại, nhìn bản đồ dự - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-56",
        "code": "DAY 56",
        "title": "h50 chiều, thứ Sáu. Tin nhắn hiện lên trên màn hình: “Sếp ơi, em mệt rồi. Em thấy - mìn...",
        "category": "UX & Product Thinking",
        "pdfPage": 131,
        "printPage": 128,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 56: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 56 (h50 chiều, thứ Sáu. Tin nhắn hiện lên trên màn hình: “Sếp ơi, em mệt rồi. Em thấy - mìn...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 56: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp.",
        "contentHtml": "\n      <h2>DAY 56: h50 chiều, thứ Sáu. Tin nhắn hiện lên trên màn hình: “Sếp ơi, em mệt rồi. Em thấy - mìn...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 131 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 128</span>\n        <span>🏷️ <b>Chủ đề:</b> UX & Product Thinking</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 5 6 / 1 0 0 4h50 chiều, thứ Sáu. Tin nhắn hiện lên trên màn hình: “Sếp ơi, em mệt rồi. Em thấy mình không còn vui khi làm việc nữa.” Tôi ngồi nhìn dòng đó. Không gõ trả lời. Không phản xạ gì. Chỉ thấy một cảm giác hơi trống, như vừa để rơi mất một thứ gì đó mà chính mình làm vỡ. Người gửi tin nhắn đó là 1 BA cứng team tôi. Bạn ấy không bao giờ than. Lúc người khác trễ deadline, bạn ấy làm th...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 56: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 56 (h50 chiều, thứ Sáu. Tin nhắn hiện lên trên màn hình: “Sếp ơi, em mệt rồi. Em thấy - mìn...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-57",
        "code": "DAY 57",
        "title": "“Cùng 4-5 năm kinh nghiệm, có người là senior, có người mãi là mid. Khác biệt không - n...",
        "category": "Kỹ năng & Phỏng vấn BA",
        "pdfPage": 133,
        "printPage": 130,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 57: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 57 (“Cùng 4-5 năm kinh nghiệm, có người là senior, có người mãi là mid. Khác biệt không - n...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 57: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 57: “Cùng 4-5 năm kinh nghiệm, có người là senior, có người mãi là mid. Khác biệt không - n...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 133 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 130</span>\n        <span>🏷️ <b>Chủ đề:</b> Kỹ năng & Phỏng vấn BA</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 5 7 / 1 0 0 “Cùng 4-5 năm kinh nghiệm, có người là senior, có người mãi là mid. Khác biệt không nằm ở độ dài CV. Mà nằm ở chiều sâu phản xạ trong từng câu trả lời.” 💬 Lưu ý: Bài viết là quan điểm tổng hợp từ góc nhìn người tuyển dụng thực chiến trong ngành. Không đại diện cho tất cả nhà tuyển dụng – hãy tham khảo có chọn lọc, không áp đặt như khuôn mẫu cứng nhắc. 👀 Nhà tuyển dụng đánh giá BA...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 57: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 57 (“Cùng 4-5 năm kinh nghiệm, có người là senior, có người mãi là mid. Khác biệt không - n...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-58",
        "code": "DAY 58",
        "title": "Trước khi đăng bài này, tôi đã sửa – rồi xoá – rồi viết lại… không dưới 5 lần. - Vì đây...",
        "category": "Nền tảng BA",
        "pdfPage": 137,
        "printPage": 134,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 58: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 58 (Trước khi đăng bài này, tôi đã sửa – rồi xoá – rồi viết lại… không dưới 5 lần. - Vì đây...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 58: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.",
        "contentHtml": "\n      <h2>DAY 58: Trước khi đăng bài này, tôi đã sửa – rồi xoá – rồi viết lại… không dưới 5 lần. - Vì đây...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 137 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 134</span>\n        <span>🏷️ <b>Chủ đề:</b> Nền tảng BA</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 5 8 / 1 0 0 Trước khi đăng bài này, tôi đã sửa – rồi xoá – rồi viết lại… không dưới 5 lần. Vì đây là chủ đề dễ chạm tới nhiều bạn đang là BA, và cũng ảnh hưởng đến cách các BA Lead – Manager – HR đánh giá và phân cấp đội ngũ. Bài viết không nhằm dạy ai – mà chia sẻ một góc nhìn thực chiến, từng bước một – khi tiếp quản lại một team BA cũ, giữa nhiều mâu thuẫn ngầm, nhãn mác cũ – và kỳ vọng m...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 58: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Áp dụng kỹ thuật BABOK để chuẩn hóa lập luận và chứng minh tính hợp lý của yêu cầu.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 58 (Trước khi đăng bài này, tôi đã sửa – rồi xoá – rồi viết lại… không dưới 5 lần. - Vì đây...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-59",
        "code": "DAY 59",
        "title": "Một người lãnh đạo không chết chìm vì dự án khó, mà chết vì không còn nổi một tiếng - đ...",
        "category": "Khai thác yêu cầu",
        "pdfPage": 140,
        "printPage": 137,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 59: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 59 (Một người lãnh đạo không chết chìm vì dự án khó, mà chết vì không còn nổi một tiếng - đ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 59: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 59: Một người lãnh đạo không chết chìm vì dự án khó, mà chết vì không còn nổi một tiếng - đ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 140 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 137</span>\n        <span>🏷️ <b>Chủ đề:</b> Khai thác yêu cầu</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 5 9 / 1 0 0 Một người lãnh đạo không chết chìm vì dự án khó, mà chết vì không còn nổi một tiếng để suy nghĩ cho ra trò.\" Có một kiểu mệt rất đặc biệt – chỉ những người đang làm BA Lead mới hiểu. Nó không phải kiểu “căng deadline”, không phải kiểu “bị khách hàng dí”…Mà là kiểu mệt lử vì ngày nào cũng đầy việc, nhưng tối về vẫn thấy bản thân… đang bị trôi. Không có một dòng nào để viết ra định...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 59: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 59 (Một người lãnh đạo không chết chìm vì dự án khó, mà chết vì không còn nổi một tiếng - đ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-60",
        "code": "DAY 60",
        "title": "⚠️ Lưu ý: Công thức trong bài không phải chuẩn tuyệt đối. Các hệ số như độ phức tạp, - ...",
        "category": "Kỹ năng & Phỏng vấn BA",
        "pdfPage": 142,
        "printPage": 139,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 60: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 60 (⚠️ Lưu ý: Công thức trong bài không phải chuẩn tuyệt đối. Các hệ số như độ phức tạp, - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 60: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 60: ⚠️ Lưu ý: Công thức trong bài không phải chuẩn tuyệt đối. Các hệ số như độ phức tạp, - ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 142 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 139</span>\n        <span>🏷️ <b>Chủ đề:</b> Kỹ năng & Phỏng vấn BA</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 6 0 / 1 0 0 ⚠️ Lưu ý: Công thức trong bài không phải chuẩn tuyệt đối. Các hệ số như độ phức tạp, thời gian confirm, khả năng reuse…thay đổi tùy dự án, tổ chức, và năng lực BA. Hãy dùng như một khung tư duy để bóc effort – đừng áp dụng máy móc.  Nhiều bạn BA kể cả đã làm vài năm, vẫn thường estimate effort dựa theo số lượng màn hình hoặc độ dài tài liệu. Ví dụ như task “Đổi điểm lấy voucher” ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 60: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 60 (⚠️ Lưu ý: Công thức trong bài không phải chuẩn tuyệt đối. Các hệ số như độ phức tạp, - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-61",
        "code": "DAY 61",
        "title": "🪄 Một tối Chủ Nhật, Hà Nội mưa rào… - Trời mưa. Giá đặt xe tăng vọt. Tôi không đi đâu c...",
        "category": "Phân tích & thiết kế giải pháp",
        "pdfPage": 145,
        "printPage": 142,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 61: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 61 (🪄 Một tối Chủ Nhật, Hà Nội mưa rào… - Trời mưa. Giá đặt xe tăng vọt. Tôi không đi đâu c...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 61: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 61: 🪄 Một tối Chủ Nhật, Hà Nội mưa rào… - Trời mưa. Giá đặt xe tăng vọt. Tôi không đi đâu c...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 145 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 142</span>\n        <span>🏷️ <b>Chủ đề:</b> Phân tích & thiết kế giải pháp</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 6 1 / 1 0 0 🪄 Một tối Chủ Nhật, Hà Nội mưa rào… Trời mưa. Giá đặt xe tăng vọt. Tôi không đi đâu cả. Nhưng lại nổi hứng… phân tích hệ thống dynamic pricing 🎯 Case study: Gọi xe Xanh SM  Bạn đặt xe đi 5km ở Ba Đình  Hôm qua: 50k  Hôm nay: trời mưa, giờ tan tầm → 90k  Vẫn cùng 1 tuyến đường, nhưng giá thay đổi. Không phải do hãng “chặt chém”.  Mà là vì hệ thống thấy: Nhu cầu tăng đột biến Ít xe...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 61: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 61 (🪄 Một tối Chủ Nhật, Hà Nội mưa rào… - Trời mưa. Giá đặt xe tăng vọt. Tôi không đi đâu c...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-62",
        "code": "DAY 62",
        "title": "“Làm cái hệ thống đặt bàn cho nhà hàng đi – cho chuyên nghiệp hơn, đỡ lộn xộn. Anh - cầ...",
        "category": "Testing & UAT",
        "pdfPage": 148,
        "printPage": 145,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 62: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 62 (“Làm cái hệ thống đặt bàn cho nhà hàng đi – cho chuyên nghiệp hơn, đỡ lộn xộn. Anh - cầ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 62: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 62: “Làm cái hệ thống đặt bàn cho nhà hàng đi – cho chuyên nghiệp hơn, đỡ lộn xộn. Anh - cầ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 148 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 145</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 6 2 / 1 0 0 “Làm cái hệ thống đặt bàn cho nhà hàng đi – cho chuyên nghiệp hơn, đỡ lộn xộn. Anh cần chạy demo trong 2 tuần nữa nhé.” Đó là tất cả những gì tôi nhận được khi bắt đầu dự án này. Không tài liệu. Không flow. Không ai mô tả được “chuyên nghiệp” là như thế nào. Chỉ có deadline và một câu nói mơ hồ đầy quyết đoán. BA mà không tỉnh – là dính ngay combo chết người: Làm sai bài toán gốc...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 62: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 62 (“Làm cái hệ thống đặt bàn cho nhà hàng đi – cho chuyên nghiệp hơn, đỡ lộn xộn. Anh - cầ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-63",
        "code": "DAY 63",
        "title": "Một đội ngũ kỹ thuật – sản phẩm – thiết kế đã ngồi cùng nhau suốt nhiều tuần. - Họ đi n...",
        "category": "UX & Product Thinking",
        "pdfPage": 153,
        "printPage": 150,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 63: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 63 (Một đội ngũ kỹ thuật – sản phẩm – thiết kế đã ngồi cùng nhau suốt nhiều tuần. - Họ đi n...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 63: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 63: Một đội ngũ kỹ thuật – sản phẩm – thiết kế đã ngồi cùng nhau suốt nhiều tuần. - Họ đi n...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 153 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 150</span>\n        <span>🏷️ <b>Chủ đề:</b> UX & Product Thinking</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 6 3 / 1 0 0 Một đội ngũ kỹ thuật – sản phẩm – thiết kế đã ngồi cùng nhau suốt nhiều tuần. Họ đi nghiên cứu người dùng. Họ test từ bản wireframe đến prototype. Họ biết “nỗi đau” thật sự nằm ở đâu. Nhưng đến buổi duyệt thứ 4 – có một người không ở trong hành trình ấy bước vào và nói: “Tôi thấy nên bỏ đoạn này, thêm phần kia. Sao UI nhìn vẫn thiếu chuyên nghiệp? Sao chức năng này chưa đủ?” Lúc ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 63: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 63 (Một đội ngũ kỹ thuật – sản phẩm – thiết kế đã ngồi cùng nhau suốt nhiều tuần. - Họ đi n...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-64",
        "code": "DAY 64",
        "title": "“Mỗi sprint phải đẩy 20 UC, chốt 4 SRS, tạo 5 ‘idea cải tiến’, tham dự 4 cuộc họp, xử l...",
        "category": "Agile & Scrum",
        "pdfPage": 155,
        "printPage": 152,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 64: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 64 (“Mỗi sprint phải đẩy 20 UC, chốt 4 SRS, tạo 5 ‘idea cải tiến’, tham dự 4 cuộc họp, xử l...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 64: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 64: “Mỗi sprint phải đẩy 20 UC, chốt 4 SRS, tạo 5 ‘idea cải tiến’, tham dự 4 cuộc họp, xử l...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 155 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 152</span>\n        <span>🏷️ <b>Chủ đề:</b> Agile & Scrum</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 6 4 / 1 0 0 “Mỗi sprint phải đẩy 20 UC, chốt 4 SRS, tạo 5 ‘idea cải tiến’, tham dự 4 cuộc họp, xử lý tối thiểu 30 comment trên Jira.” Nghe cứ như ép doanh số cho… tài liệu. Khi KPI biến BA thành “công nhân gõ chữ”, giá trị thật sự sẽ chết khô. 1️⃣⃣ Vì sao KPI “đếm file” giết chết tư duy BA? Khi chỉ tập trung vào output, người làm sẽ tối ưu số lượng chứ không còn đào sâu logic. Ví dụ: “Viết đ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 64: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 64 (“Mỗi sprint phải đẩy 20 UC, chốt 4 SRS, tạo 5 ‘idea cải tiến’, tham dự 4 cuộc họp, xử l...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-65",
        "code": "DAY 65",
        "title": "Hôm nay không viết chia sẻ kiến thức, mà chuyển sang chuyên mục “Anh ơi…” – nơi BA - gử...",
        "category": "Agile & Scrum",
        "pdfPage": 157,
        "printPage": 154,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 65: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 65 (Hôm nay không viết chia sẻ kiến thức, mà chuyển sang chuyên mục “Anh ơi…” – nơi BA - gử...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 65: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 65: Hôm nay không viết chia sẻ kiến thức, mà chuyển sang chuyên mục “Anh ơi…” – nơi BA - gử...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 157 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 154</span>\n        <span>🏷️ <b>Chủ đề:</b> Agile & Scrum</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 6 5 / 1 0 0 Hôm nay không viết chia sẻ kiến thức, mà chuyển sang chuyên mục “Anh ơi…” – nơi BA gửi những ca khó xử nhất trong dự án, và mình sẽ cùng gỡ. Chuyên mục bắt đầu! Câu hỏi Em chào anh, em đang có issue trong công việc chưa biết nên xử lý thế nào nhờ anh hỗ trợ góp ý. Hiện em qua công ty mới, ở đây làm product. PO dự án là người có ý tưởng phát triển sản phẩm, là người trực tiếp em t...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 65: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 65 (Hôm nay không viết chia sẻ kiến thức, mà chuyển sang chuyên mục “Anh ơi…” – nơi BA - gử...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-66",
        "code": "DAY 66",
        "title": "Trong giai đoạn pre-seed đến series A, có rất nhiều startup gọi được vốn. Điều đó - thư...",
        "category": "Phân tích & thiết kế giải pháp",
        "pdfPage": 160,
        "printPage": 157,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 66: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 66 (Trong giai đoạn pre-seed đến series A, có rất nhiều startup gọi được vốn. Điều đó - thư...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 66: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 66: Trong giai đoạn pre-seed đến series A, có rất nhiều startup gọi được vốn. Điều đó - thư...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 160 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 157</span>\n        <span>🏷️ <b>Chủ đề:</b> Phân tích & thiết kế giải pháp</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 6 6 / 1 0 0 Trong giai đoạn pre-seed đến series A, có rất nhiều startup gọi được vốn. Điều đó thường khiến người ta tin rằng: “Công ty này gọi được tiền → chắc là ổn → vào đó làm BA sẽ có đất dụng võ.” Sai. Rất sai. Là một BA, bạn cần nhìn vào startup không chỉ như một người đi làm. Bạn phải nhìn nó như một hệ thống sẽ phát triển – hoặc sẽ đổ sập. Và góc nhìn giúp bạn nhận ra điều đó chính l...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 66: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 66 (Trong giai đoạn pre-seed đến series A, có rất nhiều startup gọi được vốn. Điều đó - thư...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-67",
        "code": "DAY 67",
        "title": "🚀 CI/CD là gì? - CI (Continuous Integration – tích hợp liên tục): Mỗi lần Dev (develope...",
        "category": "Testing & UAT",
        "pdfPage": 162,
        "printPage": 159,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 67: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 67 (🚀 CI/CD là gì? - CI (Continuous Integration – tích hợp liên tục): Mỗi lần Dev (develope...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 67: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 67: 🚀 CI/CD là gì? - CI (Continuous Integration – tích hợp liên tục): Mỗi lần Dev (develope...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 162 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 159</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 6 7 / 1 0 0 🚀 CI/CD là gì? CI (Continuous Integration – tích hợp liên tục): Mỗi lần Dev (developer – lập trình viên) đẩy code lên hệ thống, hệ thống sẽ tự động build (biên dịch) và chạy kiểm thử ngay lập tức. CD (Continuous Delivery/Deployment – phân phối/triển khai liên tục): Khi code đã qua kiểm thử, hệ thống sẽ tự động đưa code mới lên môi trường staging hoặc production – không còn bước k...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 67: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 67 (🚀 CI/CD là gì? - CI (Continuous Integration – tích hợp liên tục): Mỗi lần Dev (develope...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-68",
        "code": "DAY 68",
        "title": "Mấy hôm nay inbox đổ về nhiều, đủ thể loại tình huống dở khóc dở cười. Và câu hỏi - đượ...",
        "category": "Testing & UAT",
        "pdfPage": 165,
        "printPage": 162,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 68: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 68 (Mấy hôm nay inbox đổ về nhiều, đủ thể loại tình huống dở khóc dở cười. Và câu hỏi - đượ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 68: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 68: Mấy hôm nay inbox đổ về nhiều, đủ thể loại tình huống dở khóc dở cười. Và câu hỏi - đượ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 165 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 162</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 6 8 / 1 0 0 Mấy hôm nay inbox đổ về nhiều, đủ thể loại tình huống dở khóc dở cười. Và câu hỏi được chọn hôm nay là một case rất kinh điển của anh em BA làm outsource, khi mà mình demo kỹ càng, báo cáo đầy đủ, nhưng khách… vẫn không công nhận là đã xong. ❓ Câu hỏi Anh ơi, em nhờ góp ý chút. Em là BA outsource, mỗi tuần em đều chuẩn bị slide tóm tắt update trước buổi demo, ghi rõ phần nào đã l...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 68: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 68 (Mấy hôm nay inbox đổ về nhiều, đủ thể loại tình huống dở khóc dở cười. Và câu hỏi - đượ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-69",
        "code": "DAY 69",
        "title": "Không phải lúc nào người dùng cũng rảnh rỗi, ngồi ngay ngắn, hai tay đặt đúng vị trí, -...",
        "category": "UX & Product Thinking",
        "pdfPage": 167,
        "printPage": 164,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 69: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 69 (Không phải lúc nào người dùng cũng rảnh rỗi, ngồi ngay ngắn, hai tay đặt đúng vị trí, -...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 69: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp.",
        "contentHtml": "\n      <h2>DAY 69: Không phải lúc nào người dùng cũng rảnh rỗi, ngồi ngay ngắn, hai tay đặt đúng vị trí, -...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 167 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 164</span>\n        <span>🏷️ <b>Chủ đề:</b> UX & Product Thinking</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 6 9 / 1 0 0 Không phải lúc nào người dùng cũng rảnh rỗi, ngồi ngay ngắn, hai tay đặt đúng vị trí, tinh thần ổn định, và ánh sáng hoàn hảo. Có những lúc vì lý do nào đó họ chỉ có một tay để thao tác. Tay còn lại đang làm gì – ta không rõ. Và cũng không cần biết. Nhưng nếu bạn làm sản phẩm, nếu bạn là BA, bạn cần quan tâm. Và đó là lúc Design Thinking thật sự được kích hoạt. 💡 Design Thinking ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 69: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 69 (Không phải lúc nào người dùng cũng rảnh rỗi, ngồi ngay ngắn, hai tay đặt đúng vị trí, -...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-70",
        "code": "DAY 70",
        "title": "❌ “Lỗi này hình như mình gặp hoài rồi mà?” - ❌ “Cái bug này từng fix mà?”",
        "category": "Testing & UAT",
        "pdfPage": 169,
        "printPage": 166,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 70: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 70 (❌ “Lỗi này hình như mình gặp hoài rồi mà?” - ❌ “Cái bug này từng fix mà?”) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 70: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 70: ❌ “Lỗi này hình như mình gặp hoài rồi mà?” - ❌ “Cái bug này từng fix mà?”</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 169 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 166</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 7 0 / 1 0 0 ❌ “Lỗi này hình như mình gặp hoài rồi mà?” ❌ “Cái bug này từng fix mà?” ❌ “Tại sao vẫn không ai rút ra được kinh nghiệm gì?” Một lần nọ, tôi hỏi cả team BA:  “Chúng ta từng vấp gì trong dự án cũ – và liệu có ai rút ra được quy chuẩn gì không?” Không ai trả lời. Không phải vì không nhớ, mà vì… chưa bao giờ ngồi lại để review nghiêm túc. ❌ Sai lầm phổ biến trong team BA Không ghi l...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 70: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 70 (❌ “Lỗi này hình như mình gặp hoài rồi mà?” - ❌ “Cái bug này từng fix mà?”) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-71",
        "code": "DAY 71",
        "title": "“Em không nghỉ vì lương. Em nghỉ vì mỗi sáng mở Jira ra, em không biết mình đang - làm ...",
        "category": "Agile & Scrum",
        "pdfPage": 171,
        "printPage": 168,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 71: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 71 (“Em không nghỉ vì lương. Em nghỉ vì mỗi sáng mở Jira ra, em không biết mình đang - làm ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 71: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 71: “Em không nghỉ vì lương. Em nghỉ vì mỗi sáng mở Jira ra, em không biết mình đang - làm ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 171 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 168</span>\n        <span>🏷️ <b>Chủ đề:</b> Agile & Scrum</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 7 1 / 1 0 0 “Em không nghỉ vì lương. Em nghỉ vì mỗi sáng mở Jira ra, em không biết mình đang làm điều này… cho ai nữa.” Có những sự rời đi không kèm theo giận dữ, không có va chạm. Chỉ là… họ không còn lý do để tiếp tục gắn bó. Không phải vì công ty tệ. Không phải vì sếp ép. Mà vì… họ không còn tin sản phẩm này có ý nghĩa. 🔋 Có những cái mệt không đến từ việc nhiều Mà đến từ việc… không còn ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 71: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 71 (“Em không nghỉ vì lương. Em nghỉ vì mỗi sáng mở Jira ra, em không biết mình đang - làm ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-72",
        "code": "DAY 72",
        "title": "Có những buổi họp mà bạn cảm nhận rõ ràng: - DEV thì lặng thinh.",
        "category": "Testing & UAT",
        "pdfPage": 173,
        "printPage": 170,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 72: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 72 (Có những buổi họp mà bạn cảm nhận rõ ràng: - DEV thì lặng thinh.) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 72: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 72: Có những buổi họp mà bạn cảm nhận rõ ràng: - DEV thì lặng thinh.</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 173 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 170</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 7 2 / 1 0 0 Có những buổi họp mà bạn cảm nhận rõ ràng: DEV thì lặng thinh. QC thì nhìn trần nhà. PM hỏi: “Tại sao lại delay sprint này?” Không ai trả lời thẳng. Chỉ có tiếng thở dài. Và rồi cái vòng lặp “im lặng – đổ lỗi – cố gắng làm cho xong” lại tiếp tục. Lúc đó, nếu bạn là BA mà chỉ hỏi: “Vướng gì thế mọi người?” thì không ai trả lời đâu. Nhưng nếu bạn vẽ ra một chiếc tàu cao tốc, đặt câ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 72: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 72 (Có những buổi họp mà bạn cảm nhận rõ ràng: - DEV thì lặng thinh.) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-73",
        "code": "DAY 73",
        "title": "Ở giải marathon, người ta không chạy bằng máu lửa. Họ chạy bằng pace và bằng tim. - Có ...",
        "category": "Testing & UAT",
        "pdfPage": 175,
        "printPage": 172,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 73: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 73 (Ở giải marathon, người ta không chạy bằng máu lửa. Họ chạy bằng pace và bằng tim. - Có ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 73: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 73: Ở giải marathon, người ta không chạy bằng máu lửa. Họ chạy bằng pace và bằng tim. - Có ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 175 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 172</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 7 3 / 1 0 0 Ở giải marathon, người ta không chạy bằng máu lửa. Họ chạy bằng pace và bằng tim. Có những runner pace 8, tim ổn, đều đặn dừng ở mọi trạm nước. Không cố bám nhóm sub 4, không gồng. Và tới km 38, họ vẫn còn chạy. Còn người mở đầu với pace 4, và rồi chườm đá ở trạm y tế. Chạy nhanh không khó. Chạy không gãy mới khó. Tôi đã thấy những team phần mềm giống y như vậy. Sprint đầu – chạy...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 73: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 73 (Ở giải marathon, người ta không chạy bằng máu lửa. Họ chạy bằng pace và bằng tim. - Có ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-74",
        "code": "DAY 74",
        "title": "Đã gần một tuần rồi tôi không viết. Không phải vì bí ý tưởng – mà vì viết rồi lại xoá. ...",
        "category": "Phân tích & thiết kế giải pháp",
        "pdfPage": 178,
        "printPage": 175,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 74: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 74 (Đã gần một tuần rồi tôi không viết. Không phải vì bí ý tưởng – mà vì viết rồi lại xoá. ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 74: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 74: Đã gần một tuần rồi tôi không viết. Không phải vì bí ý tưởng – mà vì viết rồi lại xoá. ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 178 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 175</span>\n        <span>🏷️ <b>Chủ đề:</b> Phân tích & thiết kế giải pháp</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 7 4 / 1 0 0 Đã gần một tuần rồi tôi không viết. Không phải vì bí ý tưởng – mà vì viết rồi lại xoá. Gõ được nửa bài, lại thấy không đủ sâu, không đủ chất, không đủ “đáng để đọc” – thế là tôi bỏ. Off luôn. Để series tạm lặng vài hôm. Vài ngày trước, vào lúc 2h sáng, tôi nhận được tin nhắn: “Em chào anh, em theo dõi series 100 ngày của anh và mong được anh tư vấn ạ. Hiện em bị dev trong team ng...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 74: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 74 (Đã gần một tuần rồi tôi không viết. Không phải vì bí ý tưởng – mà vì viết rồi lại xoá. ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-75",
        "code": "DAY 75",
        "title": "“Anh tưởng tài liệu xong là dev hiểu được hết chứ?” - “Chị thấy tính năng đơn giản thôi...",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 181,
        "printPage": 178,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 75: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 75 (“Anh tưởng tài liệu xong là dev hiểu được hết chứ?” - “Chị thấy tính năng đơn giản thôi...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 75: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 75: “Anh tưởng tài liệu xong là dev hiểu được hết chứ?” - “Chị thấy tính năng đơn giản thôi...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 181 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 178</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 7 5 / 1 0 0 “Anh tưởng tài liệu xong là dev hiểu được hết chứ?”  “Chị thấy tính năng đơn giản thôi, sao tài liệu tới 10 trang?” Team BA đó không phải lần đầu làm nghề. Họ có checklist, có mẫu chuẩn, có flow, có rule, có cả mapping API. Họ làm đủ. Nhưng vẫn… chưa đúng – theo định nghĩa của sếp. Mọi chuyện bắt đầu từ những cuộc họp lưng chừng. Sếp giao việc bằng miệng:  “Làm giống bên XYZ là đ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 75: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 75 (“Anh tưởng tài liệu xong là dev hiểu được hết chứ?” - “Chị thấy tính năng đơn giản thôi...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-76",
        "code": "DAY 76",
        "title": "Trong một hệ thống bất kỳ, dù nghiệp vụ có mượt đến đâu, chỉ cần một thông số kỹ - thuậ...",
        "category": "UX & Product Thinking",
        "pdfPage": 184,
        "printPage": 181,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 76: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 76 (Trong một hệ thống bất kỳ, dù nghiệp vụ có mượt đến đâu, chỉ cần một thông số kỹ - thuậ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 76: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 76: Trong một hệ thống bất kỳ, dù nghiệp vụ có mượt đến đâu, chỉ cần một thông số kỹ - thuậ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 184 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 181</span>\n        <span>🏷️ <b>Chủ đề:</b> UX & Product Thinking</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 7 6 / 1 0 0 Trong một hệ thống bất kỳ, dù nghiệp vụ có mượt đến đâu, chỉ cần một thông số kỹ thuật bị bỏ qua cũng đủ khiến trải nghiệm người dùng bị gãy. Non-Functional Requirements (NFR) không phải phần “dành cho dev lo sau”, mà là xương sống để hệ thống chịu được áp lực thật: khi người dùng đông, khi có lỗi mạng, khi xử lý chậm, hoặc khi cần bảo vệ dữ liệu. Dưới đây là 6 nhóm thông số mà B...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 76: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 76 (Trong một hệ thống bất kỳ, dù nghiệp vụ có mượt đến đâu, chỉ cần một thông số kỹ - thuậ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-77",
        "code": "DAY 77",
        "title": "App mobile thì cũng là hệ thống thôi mà – logic giống web, flow giống nhau, chỉ khác - ...",
        "category": "UX & Product Thinking",
        "pdfPage": 187,
        "printPage": 184,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 77: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 77 (App mobile thì cũng là hệ thống thôi mà – logic giống web, flow giống nhau, chỉ khác - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 77: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 77: App mobile thì cũng là hệ thống thôi mà – logic giống web, flow giống nhau, chỉ khác - ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 187 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 184</span>\n        <span>🏷️ <b>Chủ đề:</b> UX & Product Thinking</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 7 7 / 1 0 0 App mobile thì cũng là hệ thống thôi mà – logic giống web, flow giống nhau, chỉ khác giao diện chút xíu.” Một nhận định tưởng vô hại, nhưng đã khiến không ít dự án vỡ trận vì bug, bị từ chối duyệt app, và bị người dùng phản ánh liên tục ngay từ tuần đầu ra mắt. 🕯️ Câu chuyện thật: Bê tư duy web sang mobile – Và cái kết đắng Trong một dự án phát triển mobile app phục vụ việc đặt l...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 77: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 77 (App mobile thì cũng là hệ thống thôi mà – logic giống web, flow giống nhau, chỉ khác - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-78",
        "code": "DAY 78",
        "title": "Ở một công ty nọ, có một bạn nhân sự trẻ không giỏi xuất chúng, cũng chẳng phải key - m...",
        "category": "Testing & UAT",
        "pdfPage": 190,
        "printPage": 187,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 78: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 78 (Ở một công ty nọ, có một bạn nhân sự trẻ không giỏi xuất chúng, cũng chẳng phải key - m...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 78: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp.",
        "contentHtml": "\n      <h2>DAY 78: Ở một công ty nọ, có một bạn nhân sự trẻ không giỏi xuất chúng, cũng chẳng phải key - m...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 190 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 187</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 7 8 / 1 0 0 Ở một công ty nọ, có một bạn nhân sự trẻ không giỏi xuất chúng, cũng chẳng phải key member nổi bật. Nhưng là người lặng lẽ support mọi người, biết nhận phần việc không ai muốn, luôn đúng hẹn, và chưa bao giờ nói câu “không phải việc của em”. Bạn ấy làm BA – vai trò mà nếu làm tốt thì chẳng ai để ý, còn làm sai thì cả team dính bug. Hợp đồng lao động của bạn kéo dài 1 năm. Đến cuố...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 78: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 78 (Ở một công ty nọ, có một bạn nhân sự trẻ không giỏi xuất chúng, cũng chẳng phải key - m...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-79",
        "code": "DAY 79",
        "title": "📌 Nhiều BA viết flow cực kỳ đẹp, rule đầy đủ, bước rõ ràng, UX hợp lý. Nhưng khi lên - ...",
        "category": "Testing & UAT",
        "pdfPage": 192,
        "printPage": 189,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 79: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 79 (📌 Nhiều BA viết flow cực kỳ đẹp, rule đầy đủ, bước rõ ràng, UX hợp lý. Nhưng khi lên - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 79: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 79: 📌 Nhiều BA viết flow cực kỳ đẹp, rule đầy đủ, bước rõ ràng, UX hợp lý. Nhưng khi lên - ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 192 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 189</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 7 9 / 1 0 0 📌 Nhiều BA viết flow cực kỳ đẹp, rule đầy đủ, bước rõ ràng, UX hợp lý. Nhưng khi lên họp review, lại nhận về câu hỏi từ phía kinh doanh: 💬 “Flow thì ổn rồi. Nhưng không đúng hướng sản phẩm.” 💬 “Tính năng này viết kỹ đấy, nhưng không tạo ra giá trị thật.” 💬 “Cái này hợp lý về logic… nhưng không đúng với mô hình vận hành của bên anh.” Tại sao lại vậy? Vì bạn viết flow khi chưa nhìn...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 79: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 79 (📌 Nhiều BA viết flow cực kỳ đẹp, rule đầy đủ, bước rõ ràng, UX hợp lý. Nhưng khi lên - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-80",
        "code": "DAY 80",
        "title": "💥 “Sao lại báo lỗi? Em nhập đúng rồi mà!” - 💥 “Anh fix rồi mà vẫn lỗi. À, lần này lỗi k...",
        "category": "Testing & UAT",
        "pdfPage": 194,
        "printPage": 191,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 80: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 80 (💥 “Sao lại báo lỗi? Em nhập đúng rồi mà!” - 💥 “Anh fix rồi mà vẫn lỗi. À, lần này lỗi k...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 80: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 80: 💥 “Sao lại báo lỗi? Em nhập đúng rồi mà!” - 💥 “Anh fix rồi mà vẫn lỗi. À, lần này lỗi k...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 194 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 191</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 8 0 / 1 0 0 💥 “Sao lại báo lỗi? Em nhập đúng rồi mà!”  💥 “Anh fix rồi mà vẫn lỗi. À, lần này lỗi khác!”  💥 “Ủa BA ghi lỗi kiểu này là lỗi system hay do user vậy ạ?” Nếu bạn từng nghe DEV hỏi những câu này, thì có thể bạn đang viết lỗi… lộn xộn. 🪦 Một dự án toang vì viết lỗi không rõ ràng Trong một hệ thống chấm công, khi người dùng nhập giờ ra sớm hơn giờ vào, hệ thống báo lỗi: ❌ “Không thể ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 80: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 80 (💥 “Sao lại báo lỗi? Em nhập đúng rồi mà!” - 💥 “Anh fix rồi mà vẫn lỗi. À, lần này lỗi k...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-81",
        "code": "DAY 81",
        "title": "👨‍💻 Một buổi tối, sau giờ làm, một bạn BA 3 năm kinh nghiệm nhắn tin cho tôi: - “Anh Ph...",
        "category": "Agile & Scrum",
        "pdfPage": 196,
        "printPage": 193,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 81: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 81 (👨‍💻 Một buổi tối, sau giờ làm, một bạn BA 3 năm kinh nghiệm nhắn tin cho tôi: - “Anh Ph...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 81: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 81: 👨‍💻 Một buổi tối, sau giờ làm, một bạn BA 3 năm kinh nghiệm nhắn tin cho tôi: - “Anh Ph...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 196 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 193</span>\n        <span>🏷️ <b>Chủ đề:</b> Agile & Scrum</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 8 1 / 1 0 0 👨‍💻 Một buổi tối, sau giờ làm, một bạn BA 3 năm kinh nghiệm nhắn tin cho tôi: “Anh Phú ơi, công ty em chạy agile scrum cả năm nay rồi. Sprint nào cũng có planning, backlog groom đầy đủ. Mà sprint vẫn trễ. To-do thì nhiều mà done thì ít. Team thì bảo quá tải, quản lý thì bảo plan fail. Em không hiểu: tại sao vẫn trễ dù đã agile?” Tôi thở dài. Không phải lần đầu nghe chuyện này. Nh...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 81: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 81 (👨‍💻 Một buổi tối, sau giờ làm, một bạn BA 3 năm kinh nghiệm nhắn tin cho tôi: - “Anh Ph...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-82",
        "code": "DAY 82",
        "title": "Một buổi tối bình thường, tôi gọi một chuyến xe máy công nghệ. Khi vào app, tôi thấy - ...",
        "category": "Phân tích & thiết kế giải pháp",
        "pdfPage": 198,
        "printPage": 195,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 82: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 82 (Một buổi tối bình thường, tôi gọi một chuyến xe máy công nghệ. Khi vào app, tôi thấy - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 82: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 82: Một buổi tối bình thường, tôi gọi một chuyến xe máy công nghệ. Khi vào app, tôi thấy - ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 198 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 195</span>\n        <span>🏷️ <b>Chủ đề:</b> Phân tích & thiết kế giải pháp</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 8 2 / 1 0 0 Một buổi tối bình thường, tôi gọi một chuyến xe máy công nghệ. Khi vào app, tôi thấy một dòng chữ: “Tài xế đang trả khách…”.Chỉ một dòng đơn giản nhưng đằng sau đó là cả một cơ chế nối cuốc cực kỳ thông minh. 1. Nối cuốc là gì? Trong các app gọi xe như XanhSM, Grab, Be…, nối cuốc là cơ chế cho phép hệ thống gán trước cuốc tiếp theo cho tài xế khi họ đang thực hiện cuốc hiện tại. ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 82: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 82 (Một buổi tối bình thường, tôi gọi một chuyến xe máy công nghệ. Khi vào app, tôi thấy - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-83",
        "code": "DAY 83",
        "title": "Tôi xem lại Tây Du Ký lần thứ n, và lần này, tôi không còn thấy yêu quái. Tôi thấy… một...",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 200,
        "printPage": 197,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 83: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 83 (Tôi xem lại Tây Du Ký lần thứ n, và lần này, tôi không còn thấy yêu quái. Tôi thấy… một...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 83: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 83: Tôi xem lại Tây Du Ký lần thứ n, và lần này, tôi không còn thấy yêu quái. Tôi thấy… một...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 200 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 197</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 8 3 / 1 0 0 Tôi xem lại Tây Du Ký lần thứ n, và lần này, tôi không còn thấy yêu quái. Tôi thấy… một công ty, nơi có một sếp Đường Tăng, một dev tên Ngộ Không, một bạn nghiệp vụ kiểu Bát Giới, chị vận hành tên Sa Tăng, và một anh support lặng thầm như Bạch Long Mã. Và tôi thấy BA ở giữa phải hiểu tất cả họ, nếu không muốn flow mình viết ra bị nghiền nát trong họp review. 🧘 1. Sếp Đường Tăng –...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 83: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 83 (Tôi xem lại Tây Du Ký lần thứ n, và lần này, tôi không còn thấy yêu quái. Tôi thấy… một...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-84",
        "code": "DAY 84",
        "title": "🧨 “Em ơi, từ hôm nay anh Trung không phụ trách nữa nhé. Chị Hà sẽ làm việc với em. - Mì...",
        "category": "Nền tảng BA",
        "pdfPage": 204,
        "printPage": 201,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 84: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 84 (🧨 “Em ơi, từ hôm nay anh Trung không phụ trách nữa nhé. Chị Hà sẽ làm việc với em. - Mì...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 84: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 84: 🧨 “Em ơi, từ hôm nay anh Trung không phụ trách nữa nhé. Chị Hà sẽ làm việc với em. - Mì...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 204 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 201</span>\n        <span>🏷️ <b>Chủ đề:</b> Nền tảng BA</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 8 4 / 1 0 0 🧨 “Em ơi, từ hôm nay anh Trung không phụ trách nữa nhé. Chị Hà sẽ làm việc với em. Mình mong dự án vẫn chạy đúng tiến độ nha!” Nghe xong câu này, tôi toát mồ hôi. Vì chị Hà người đại diện mới chưa từng dự họp dự án, chưa đọc tài liệu nào, và… có vẻ chưa ưng hướng đi hiện tại. 🫠 Nếu bạn từng gặp trường hợp client đổi người đại diện giữa dòng, bạn sẽ hiểu:  👉 Mọi giả định trước đó ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 84: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 84 (🧨 “Em ơi, từ hôm nay anh Trung không phụ trách nữa nhé. Chị Hà sẽ làm việc với em. - Mì...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-85",
        "code": "DAY 85",
        "title": "“Cái này BA lo luôn nhé, chứ giờ ai làm?” - “Ơ, em là BA mà? Em hiểu nhất còn gì?”",
        "category": "Testing & UAT",
        "pdfPage": 206,
        "printPage": 203,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 85: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 85 (“Cái này BA lo luôn nhé, chứ giờ ai làm?” - “Ơ, em là BA mà? Em hiểu nhất còn gì?”) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 85: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 85: “Cái này BA lo luôn nhé, chứ giờ ai làm?” - “Ơ, em là BA mà? Em hiểu nhất còn gì?”</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 206 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 203</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 8 5 / 1 0 0 “Cái này BA lo luôn nhé, chứ giờ ai làm?” “Ơ, em là BA mà? Em hiểu nhất còn gì?” “Chỗ này cũng liên quan logic – BA confirm giúp rồi viết test case hộ luôn nhé.” Mỗi lần nghe những câu này, BA sẽ làm gì?  👉 Cắn răng làm, rồi tối về stress?  👉 Từ chối, rồi bị đánh giá thiếu hỗ trợ teamwork? 🎬 Bối cảnh thật tại một công ty “vừa vừa” Không phải startup nhỏ, cũng chẳng phải tập đoàn....</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 85: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 85 (“Cái này BA lo luôn nhé, chứ giờ ai làm?” - “Ơ, em là BA mà? Em hiểu nhất còn gì?”) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-86",
        "code": "DAY 86",
        "title": "Bạn được giao viết lại tài liệu cho một tính năng đã chạy 3 năm, không tài liệu gốc, de...",
        "category": "Testing & UAT",
        "pdfPage": 208,
        "printPage": 205,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 86: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 86 (Bạn được giao viết lại tài liệu cho một tính năng đã chạy 3 năm, không tài liệu gốc, de...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 86: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 86: Bạn được giao viết lại tài liệu cho một tính năng đã chạy 3 năm, không tài liệu gốc, de...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 208 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 205</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 8 6 / 1 0 0 Bạn được giao viết lại tài liệu cho một tính năng đã chạy 3 năm, không tài liệu gốc, dev cũ đã nghỉ, test thì nhớ nhớ quên quên? → Chào mừng đến thử thách reverse- engineering, kỹ năng sinh tồn của BA. 🧩 Bối cảnh ban đầu Bạn được giao viết lại tài liệu cho một tính năng đã hoạt động hơn 3 năm: “Khi xác nhận đơn giao hàng thì hệ thống sẽ tự động tạo phiếu xuất kho.” Nhưng…  ❌ Khôn...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 86: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 86 (Bạn được giao viết lại tài liệu cho một tính năng đã chạy 3 năm, không tài liệu gốc, de...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-87",
        "code": "DAY 87",
        "title": "Một leader giỏi không phải là người góp ý đúng mà là người khiến người khác vẫn muốn - ...",
        "category": "Khai thác yêu cầu",
        "pdfPage": 212,
        "printPage": 209,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 87: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 87 (Một leader giỏi không phải là người góp ý đúng mà là người khiến người khác vẫn muốn - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 87: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 87: Một leader giỏi không phải là người góp ý đúng mà là người khiến người khác vẫn muốn - ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 212 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 209</span>\n        <span>🏷️ <b>Chủ đề:</b> Khai thác yêu cầu</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 8 7 / 1 0 0 Một leader giỏi không phải là người góp ý đúng mà là người khiến người khác vẫn muốn làm việc cùng sau khi bị góp ý. 🧠 Phản hồi là con dao hai lưỡi – có thể giúp người ta tiến bộ, hoặc khiến họ gãy tinh thần. Dù bạn nói với thiện chí đến đâu, thì trong mắt người nhận, góp ý vẫn là một dạng từ chối, rằng thứ họ làm ra chưa đủ tốt, họ chưa đạt kỳ vọng. Và phản ứng phổ biến của họ k...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 87: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 87 (Một leader giỏi không phải là người góp ý đúng mà là người khiến người khác vẫn muốn - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-88",
        "code": "DAY 88",
        "title": "Một người “nói nhiều hơn làm” trong team không chỉ là chuyện cá nhân. - Nó là bài test ...",
        "category": "Đặc tả & Quản lý yêu cầu",
        "pdfPage": 214,
        "printPage": 211,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 88: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 88 (Một người “nói nhiều hơn làm” trong team không chỉ là chuyện cá nhân. - Nó là bài test ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 88: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.",
        "contentHtml": "\n      <h2>DAY 88: Một người “nói nhiều hơn làm” trong team không chỉ là chuyện cá nhân. - Nó là bài test ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 214 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 211</span>\n        <span>🏷️ <b>Chủ đề:</b> Đặc tả & Quản lý yêu cầu</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 8 8 / 1 0 0 Một người “nói nhiều hơn làm” trong team không chỉ là chuyện cá nhân. Nó là bài test dành cho người dẫn dắt: liệu bạn có dám bóc tách sự hào nhoáng để truy tới tận rễ hiệu suất thật? 👔 Câu chuyện thật Bạn B – profile đẹp, nói năng mạch lạc, phát biểu dõng dạc ở mọi buổi grooming. Câu nào cũng có thuật ngữ: “Em nghĩ nên trace requirement bằng traceability matrix”, “Em đề xuất dùng...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 88: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn rà soát biên giới hạn (Boundary) và kịch bản ngoại lệ (Edge cases) để không bỏ sót lỗ hổng logic.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 88 (Một người “nói nhiều hơn làm” trong team không chỉ là chuyện cá nhân. - Nó là bài test ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-89",
        "code": "DAY 89",
        "title": "Xem xong Mad Unicorn, tôi không nghĩ về startup. Tôi nghĩ về nghề BA. Nghĩ về những - l...",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 216,
        "printPage": 213,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 89: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 89 (Xem xong Mad Unicorn, tôi không nghĩ về startup. Tôi nghĩ về nghề BA. Nghĩ về những - l...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 89: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 89: Xem xong Mad Unicorn, tôi không nghĩ về startup. Tôi nghĩ về nghề BA. Nghĩ về những - l...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 216 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 213</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 8 9 / 1 0 0 Xem xong Mad Unicorn, tôi không nghĩ về startup. Tôi nghĩ về nghề BA. Nghĩ về những lúc mình hùng hổ vẽ flow, viết tài liệu chi chít use case… Nhưng lại chẳng biết người dùng thật sự bực mình ở đâu. 🎬 Một bộ phim startup nhưng không bắt đầu từ công nghệ Bối cảnh phim là hành trình khởi nghiệp trong ngành giao hàng. Không bắt đầu bằng gọi vốn. Không bắt đầu bằng viết app. Mà bắt đ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 89: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 89 (Xem xong Mad Unicorn, tôi không nghĩ về startup. Tôi nghĩ về nghề BA. Nghĩ về những - l...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-90",
        "code": "DAY 90",
        "title": "Bạn là BA Lead? Tức là bạn vừa làm nghề vừa phải giữ team, giữ chất lượng, giữ - deadli...",
        "category": "Phân tích & thiết kế giải pháp",
        "pdfPage": 218,
        "printPage": 215,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 90: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 90 (Bạn là BA Lead? Tức là bạn vừa làm nghề vừa phải giữ team, giữ chất lượng, giữ - deadli...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 90: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 90: Bạn là BA Lead? Tức là bạn vừa làm nghề vừa phải giữ team, giữ chất lượng, giữ - deadli...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 218 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 215</span>\n        <span>🏷️ <b>Chủ đề:</b> Phân tích & thiết kế giải pháp</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 9 0 / 1 0 0 Bạn là BA Lead? Tức là bạn vừa làm nghề vừa phải giữ team, giữ chất lượng, giữ deadline. Không còn là người “chạy việc BA”, bạn cần quản trị cả hệ thống tư duy và vận hành của đội ngũ BA. Và P.O.L.C không phải lý thuyết quản trị suông mà là framework sống còn để bạn không bị cuốn vào mớ deadline, họp loạn xạ. 1. 🧠 Planning: lập kế hoạch để giữ team không bị dạt BA Lead không thể ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 90: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 90 (Bạn là BA Lead? Tức là bạn vừa làm nghề vừa phải giữ team, giữ chất lượng, giữ - deadli...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-91",
        "code": "DAY 91",
        "title": "Phiên dịch tập 1] - 🎧 Nghe: “Tuỳ em”",
        "category": "Mô hình hóa quy trình",
        "pdfPage": 220,
        "printPage": 217,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 91: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 91 (Phiên dịch tập 1] - 🎧 Nghe: “Tuỳ em”) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 91: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 91: Phiên dịch tập 1] - 🎧 Nghe: “Tuỳ em”</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 220 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 217</span>\n        <span>🏷️ <b>Chủ đề:</b> Mô hình hóa quy trình</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 9 1 / 1 0 0 Phiên dịch tập 1] 🎧 Nghe: “Tuỳ em” 🧠 Dịch chuẩn:  “Tôi chưa nghĩ ra. Em cứ làm đi, nếu không đúng tôi sẽ bảo là không đúng.” ☠️ Cạm bẫy:  Không hề là “em toàn quyền quyết định”.  Mà là “cứ làm đi để tôi còn có quyền chê”. 🛡️ Cách BA sinh tồn:  “Vậy anh/chị có thể giúp em chọn một trong hai hướng sau không ạ?” (kèm prototype, flow, impact analysis nhẹ nhàng) 🎧 Nghe: “Có mỗi chức n...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 91: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 91 (Phiên dịch tập 1] - 🎧 Nghe: “Tuỳ em”) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-92",
        "code": "DAY 92",
        "title": "Ngày ngựa mất, cả làng đến chia buồn. Ông lão chỉ cười, không trách cũng không tiếc. - ...",
        "category": "UX & Product Thinking",
        "pdfPage": 221,
        "printPage": 218,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 92: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 92 (Ngày ngựa mất, cả làng đến chia buồn. Ông lão chỉ cười, không trách cũng không tiếc. - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 92: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 92: Ngày ngựa mất, cả làng đến chia buồn. Ông lão chỉ cười, không trách cũng không tiếc. - ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 221 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 218</span>\n        <span>🏷️ <b>Chủ đề:</b> UX & Product Thinking</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 9 2 / 1 0 0 Ngày ngựa mất, cả làng đến chia buồn. Ông lão chỉ cười, không trách cũng không tiếc. Ngày ngựa về, lại dắt thêm một con tốt hơn. Cả làng đến chúc mừng. Ông cũng cười. Nhưng vẫn không vui. Rồi con trai ông ngã gãy chân vì con ngựa mới. Người làng lại thương cảm. Cuối cùng, chiến tranh nổ ra, trai làng đều bị gọi đi lính, chỉ mình cậu con trai gãy chân được ở lại. Thoát chết. Nghe ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 92: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 92 (Ngày ngựa mất, cả làng đến chia buồn. Ông lão chỉ cười, không trách cũng không tiếc. - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-93",
        "code": "DAY 93",
        "title": "📌 Làm BA lâu năm, tưởng là sẽ vững hơn, nhiều kinh nghiệm hơn, nhưng thật ra lại dễ - c...",
        "category": "Testing & UAT",
        "pdfPage": 223,
        "printPage": 220,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 93: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 93 (📌 Làm BA lâu năm, tưởng là sẽ vững hơn, nhiều kinh nghiệm hơn, nhưng thật ra lại dễ - c...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 93: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 93: 📌 Làm BA lâu năm, tưởng là sẽ vững hơn, nhiều kinh nghiệm hơn, nhưng thật ra lại dễ - c...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 223 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 220</span>\n        <span>🏷️ <b>Chủ đề:</b> Testing & UAT</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 9 3 / 1 0 0 📌 Làm BA lâu năm, tưởng là sẽ vững hơn, nhiều kinh nghiệm hơn, nhưng thật ra lại dễ chủ quan hơn. Tôi từng nghĩ: “Cái này mình làm nhiều rồi”, cho đến khi team rơi vào đống issue. Dưới đây là 5 lỗi phổ biến mà rất nhiều Senior BA, Lead BA gặp phải. 👉 Đây là tổng hợp dựa trên quan sát và kinh nghiệm cá nhân, không đại diện cho bài nghiên cứu, một report chính thống nào đâu nhé, th...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 93: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 93 (📌 Làm BA lâu năm, tưởng là sẽ vững hơn, nhiều kinh nghiệm hơn, nhưng thật ra lại dễ - c...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-94",
        "code": "DAY 94",
        "title": "Định ém mấy bài hay hay để viết vào ebook nhưng hôm nay nhá hàng tí vì thấy nhiều - cas...",
        "category": "Đặc tả & Quản lý yêu cầu",
        "pdfPage": 225,
        "printPage": 222,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 94: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 94 (Định ém mấy bài hay hay để viết vào ebook nhưng hôm nay nhá hàng tí vì thấy nhiều - cas...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 94: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 94: Định ém mấy bài hay hay để viết vào ebook nhưng hôm nay nhá hàng tí vì thấy nhiều - cas...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 225 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 222</span>\n        <span>🏷️ <b>Chủ đề:</b> Đặc tả & Quản lý yêu cầu</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 9 4 / 1 0 0 Định ém mấy bài hay hay để viết vào ebook nhưng hôm nay nhá hàng tí vì thấy nhiều case gặp phải vấn đề này. Một trong những cái bẫy chết người của dự án là: hợp đồng ký thì tưởng đã chốt, nhưng khi BA phân tích chi tiết, scope cứ phình ra vô tận. Vậy đâu là cách để khóa scope ngay từ đầu đến cuối? Trước khi bắt đầu phân tích (ngay sau khi ký hợp đồng) ❌ Sai: Nghĩ rằng SOW chỉ là ...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 94: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 94 (Định ém mấy bài hay hay để viết vào ebook nhưng hôm nay nhá hàng tí vì thấy nhiều - cas...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-95",
        "code": "DAY 95",
        "title": "Trong một buổi khảo sát, khách nói: “Dữ liệu bao gồm nhưng không giới hạn ở…” - Hoặc: “...",
        "category": "Dữ liệu & SQL",
        "pdfPage": 227,
        "printPage": 224,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 95: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 95 (Trong một buổi khảo sát, khách nói: “Dữ liệu bao gồm nhưng không giới hạn ở…” - Hoặc: “...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 95: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 95: Trong một buổi khảo sát, khách nói: “Dữ liệu bao gồm nhưng không giới hạn ở…” - Hoặc: “...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 227 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 224</span>\n        <span>🏷️ <b>Chủ đề:</b> Dữ liệu & SQL</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 9 5 / 1 0 0 Trong một buổi khảo sát, khách nói: “Dữ liệu bao gồm nhưng không giới hạn ở…”  Hoặc: “Hệ thống có khả năng mở rộng, sau này thêm gì cũng được.” Nếu bạn ghi nguyên văn vào SRS, xin chúc mừng, bạn vừa ký một cái hợp đồng trắng cho khách hàng. Đến lúc đi triển khai, đội DEV và BA sẽ bị “truy” vì cái gì cũng được hiểu là “đã bao gồm”. Sai lầm thường gặp Ghi mơ hồ vào tài liệu, copy y...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 95: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 95 (Trong một buổi khảo sát, khách nói: “Dữ liệu bao gồm nhưng không giới hạn ở…” - Hoặc: “...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-96",
        "code": "DAY 96",
        "title": "Làm BA mà ôm nỗi sợ sai thì thua ngay từ vạch xuất phát. Fail Fast không phải triết lý ...",
        "category": "Khai thác yêu cầu",
        "pdfPage": 229,
        "printPage": 226,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 96: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 96 (Làm BA mà ôm nỗi sợ sai thì thua ngay từ vạch xuất phát. Fail Fast không phải triết lý ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 96: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 96: Làm BA mà ôm nỗi sợ sai thì thua ngay từ vạch xuất phát. Fail Fast không phải triết lý ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 229 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 226</span>\n        <span>🏷️ <b>Chủ đề:</b> Khai thác yêu cầu</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 9 6 / 1 0 0 Làm BA mà ôm nỗi sợ sai thì thua ngay từ vạch xuất phát. Fail Fast không phải triết lý màu mè, nó là cái phanh khẩn cấp cứu dự án khi còn nằm trên bàn phân tích. 1. Câu chuyện thực chiến Dự án triển khai hệ thống điểm danh cho chuỗi phòng gym. BA junior dành cả tháng để “thu thập đủ yêu cầu”, viết tài liệu 80 trang. Khi trình lên, khách hàng mới bảo:  “Anh ơi, bên em có phòng khô...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 96: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 96 (Làm BA mà ôm nỗi sợ sai thì thua ngay từ vạch xuất phát. Fail Fast không phải triết lý ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-97",
        "code": "DAY 97",
        "title": "Một BA Leader giỏi không chỉ viết requirement, mà còn biết giữ nhịp năng lượng cho cả -...",
        "category": "UX & Product Thinking",
        "pdfPage": 231,
        "printPage": 228,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 97: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 97 (Một BA Leader giỏi không chỉ viết requirement, mà còn biết giữ nhịp năng lượng cho cả -...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 97: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 97: Một BA Leader giỏi không chỉ viết requirement, mà còn biết giữ nhịp năng lượng cho cả -...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 231 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 228</span>\n        <span>🏷️ <b>Chủ đề:</b> UX & Product Thinking</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 9 7 / 1 0 0 Một BA Leader giỏi không chỉ viết requirement, mà còn biết giữ nhịp năng lượng cho cả team. Nếu bạn chỉ tập trung vào tài liệu mà quên cách dẫn dắt, sớm muộn gì đội ngũ cũng kiệt sức. 1. Biến mọi việc thành “cháy nhà” Sai lầm: ngày nào cũng có việc “gấp”, task nào cũng “khẩn”. Hệ quả: team chai lì, mất phân biệt thật giả, không còn phản ứng nhanh với sự cố thật sự. Cách đúng: thi...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 97: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 97 (Một BA Leader giỏi không chỉ viết requirement, mà còn biết giữ nhịp năng lượng cho cả -...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-98",
        "code": "DAY 98",
        "title": "“Em viết requirement: nhập chữ thì hệ thống gợi ý ra vài từ. Dev hỏi: gợi ý kiểu gì? - ...",
        "category": "UX & Product Thinking",
        "pdfPage": 233,
        "printPage": 230,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 98: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 98 (“Em viết requirement: nhập chữ thì hệ thống gợi ý ra vài từ. Dev hỏi: gợi ý kiểu gì? - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 98: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp.",
        "contentHtml": "\n      <h2>DAY 98: “Em viết requirement: nhập chữ thì hệ thống gợi ý ra vài từ. Dev hỏi: gợi ý kiểu gì? - ...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 233 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 230</span>\n        <span>🏷️ <b>Chủ đề:</b> UX & Product Thinking</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 9 8 / 1 0 0 “Em viết requirement: nhập chữ thì hệ thống gợi ý ra vài từ. Dev hỏi: gợi ý kiểu gì?  Em bảo: thì giống Google thôi ạ!”  👉 Vậy là xong. Dự án… đi đâu không biết. ❌ Khi BA viết “gợi ý” nhưng không phân biệt bản chất Ví dụ: “Hệ thống gợi ý từ phù hợp khi người dùng nhập liệu.”  Nhưng không nói rõ: gợi ý dựa vào đâu. Cơ chế là rule hay machine learning. Kết quả có sắp xếp không. Bao...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 98: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 98 (“Em viết requirement: nhập chữ thì hệ thống gợi ý ra vài từ. Dev hỏi: gợi ý kiểu gì? - ...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-99",
        "code": "DAY 99",
        "title": "Có một kiểu “ngụy biện” rất phổ biến trong nghề BA: - “Em làm xong 10 use case rồi.”",
        "category": "Agile & Scrum",
        "pdfPage": 235,
        "printPage": 232,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 99: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 99 (Có một kiểu “ngụy biện” rất phổ biến trong nghề BA: - “Em làm xong 10 use case rồi.”) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 99: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 99: Có một kiểu “ngụy biện” rất phổ biến trong nghề BA: - “Em làm xong 10 use case rồi.”</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 235 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 232</span>\n        <span>🏷️ <b>Chủ đề:</b> Agile & Scrum</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 9 9 / 1 0 0 Có một kiểu “ngụy biện” rất phổ biến trong nghề BA: “Em làm xong 10 use case rồi.” “Em refine đủ backlog cho sprint này rồi.” “Tuần vừa rồi em họp với khách hàng 8 buổi.” Nghe thì căng như dây đàn. Nhưng business hỏi ngược lại: “Thế sau từng ấy việc, chúng ta đạt được điều gì?” Và lúc đó, nhiều bạn… cứng họng. ❌ Sai lầm chết người Bạn nhầm Output với Outcome. Output = Thứ bạn sản...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 99: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 99 (Có một kiểu “ngụy biện” rất phổ biến trong nghề BA: - “Em làm xong 10 use case rồi.”) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      },
      {
        "id": "day-100",
        "code": "DAY 100",
        "title": "Sau 10 năm làm BA, tôi không giữ được nhiều… - Không giữ được hết những người từng đồng...",
        "category": "Khai thác yêu cầu",
        "pdfPage": 236,
        "printPage": 233,
        "available": true,
        "takeaway": "Kinh nghiệm thực chiến DAY 100: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "projectQuestion": "Trong dự án hiện tại của bạn, tình huống tương tự DAY 100 (Sau 10 năm làm BA, tôi không giữ được nhiều… - Không giữ được hết những người từng đồng...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?",
        "summary": "Kinh nghiệm thực chiến DAY 100: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.",
        "contentHtml": "\n      <h2>DAY 100: Sau 10 năm làm BA, tôi không giữ được nhiều… - Không giữ được hết những người từng đồng...</h2>\n      <div class=\"reader-meta-box\">\n        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>\n        <span>📄 <b>Trang PDF:</b> 236 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 233</span>\n        <span>🏷️ <b>Chủ đề:</b> Khai thác yêu cầu</span>\n      </div>\n      <div class=\"callout\" style=\"background:var(--tint);border-left:4px solid var(--primary);margin:16px 0\">\n        <b>💡 Bối cảnh nghề nghiệp:</b>\n        <p style=\"margin:4px 0 0 0;font-size:13.5px\">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>\n      </div>\n\n      <h3>1. Trích đoạn & Tình huống thực chiến</h3>\n      <div class=\"reader-story-quote\">\n        <p>D A Y 1 0 0 / 1 0 0 Sau 10 năm làm BA, tôi không giữ được nhiều…  Không giữ được hết những người từng đồng hành.  Không giữ được toàn bộ dự án từng làm.  Cũng không giữ được sức trẻ như ngày đầu bước vào nghề. Nhưng có 3 thứ tôi giữ rất chặt – vì nếu mất, tôi không thể đi tiếp với nghề này. Tôi từng nhận một dự án giữa chừng – BA trước nghỉ ngang, không tài liệu. Chỉ có một đống ticket dev đang là...</p>\n      </div>\n\n      <h3>2. Bài học rút ra (Key Takeaway)</h3>\n      <div class=\"callout tip\">\n        <p style=\"margin:0;font-weight:600\">Kinh nghiệm thực chiến DAY 100: Khi làm việc trong dự án, BA không chỉ ghi chép bề nổi mà cần đào sâu bối cảnh, xác thực logic hệ thống và chủ động đối thoại với các bên liên quan để bảo vệ giá trị giải pháp. Luôn phân tầng quyền lực và kỳ vọng của Stakeholders để tránh hiểu lầm phạm vi phát sinh.</p>\n      </div>\n\n      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>\n      <div class=\"callout\">\n        <p style=\"margin:0\"><b>❓ Tự vấn nghiệp vụ:</b> Trong dự án hiện tại của bạn, tình huống tương tự DAY 100 (Sau 10 năm làm BA, tôi không giữ được nhiều… - Không giữ được hết những người từng đồng...) đã từng xảy ra chưa? Bạn sẽ áp dụng checklist hoặc bước xác nhận nào để giải quyết dứt điểm?</p>\n      </div>\n    "
      }
    ]
  }
];
if (typeof window !== 'undefined') { window.booksMeta = booksMeta; } else if (typeof global !== 'undefined') { global.booksMeta = booksMeta; }
const bookBabokTasks = booksMeta[0].toc.filter(t => t.id.startsWith('task-')).map(t => ({
  code: t.code.replace('Task ', ''),
  name: t.title.replace(/^\d+\.\d+\s+/, ''),
  chapter: t.category,
  page: t.pdfPage,
  topicLessonId: 'TOPIC-TRACEABILITY',
  purpose: t.summary,
  inputs: ['Needs'],
  outputs: ['Requirements'],
  whenToApply: 'Áp dụng trong giai đoạn lập kế hoạch và đặc tả.'
}));
const bookBcsChapters = booksMeta[1].toc.filter(c => c.available).map((c, i) => ({
  chapter: i + 1,
  title: c.title,
  pages: c.pdfPage + ' - ' + (c.pdfPage + 20),
  topicLessonId: 'TOPIC-BACCM',
  sections: ['Introduction', 'Core concepts', 'Application'],
  summary: c.summary
}));
const bookDays100 = booksMeta[2].toc.map((d, i) => ({
  day: i + 1,
  page: d.pdfPage,
  title: d.title,
  topic: d.category,
  takeaway: d.takeaway,
  projectQuestion: d.projectQuestion,
  authorNote: 'Kinh nghiệm nghề thực chiến của tác giả Nguyễn Bá Phú',
  topicLessonId: 'TOPIC-TRACEABILITY'
}));
const bookTopicLessons = [
  {
    "id": "TOPIC-IMPACT-ANALYSIS",
    "title": "Phân tích Tác động khi Đổi Yêu cầu (Change Assessment & Impact Analysis)",
    "category": "Đặc tả & Quản lý yêu cầu",
    "summary": "Phương pháp nhận diện phạm vi ảnh hưởng đa chiều khi phát sinh thay đổi yêu cầu giữa chừng trong hệ thống phân tán phức tạp.",
    "keywords": [
      "phân tích tác động",
      "impact analysis",
      "change request",
      "cr",
      "thay đổi yêu cầu",
      "đổi quy tắc",
      "assess requirements changes",
      "wes",
      "wcs",
      "idempotency"
    ],
    "sources": [
      {
        "bookId": "babok-v3",
        "chapter": "Chương 5 · Task 5.4 Assess Requirements Changes",
        "page": 101,
        "notes": "Đánh giá tính khả thi, chi phí, giá trị và rủi ro của đề xuất thay đổi lên các yêu cầu hiện hành."
      },
      {
        "bookId": "bcs-ba-3rd",
        "chapter": "Chương 4 · The BA Process Model (Evaluate Options)",
        "page": 113,
        "notes": "Xem xét các phương án thay đổi và đánh đổi kỹ thuật - nghiệp vụ."
      },
      {
        "bookId": "100-days-ba",
        "chapter": "DAY 9 & DAY 23",
        "page": 20,
        "notes": "Kinh nghiệm xương máu khi nhận yêu cầu \"sửa tí xíu\": không vội gật đầu mà phải truy quét rủi ro dây chuyền."
      }
    ],
    "perspectiveComparison": "BABOK v3 tiếp cận mang tính hình thức quản trị chặt chẽ (Governance & formal sign-off); BCS tiếp cận theo góc nhìn tối ưu giá trị kinh doanh (Cost-Benefit & Feasibility); Nguyễn Bá Phú tiếp cận thực chiến trên dự án: tập trung vào việc bảo vệ team khỏi bẫy \"lời nói gió bay\" bằng cách viết rõ checklist tác động kỹ thuật và thống nhất với Tech Lead trước khi phản hồi khách hàng.",
    "coreKnowledge": "\n      <h4>1. Bản chất của Phân tích tác động (Impact Analysis)</h4>\n      <p>Khi có một yêu cầu thay đổi (Change Request - CR) phát sinh, BA không bao giờ được trả lời \"Được\" hay \"Không\" ngay lập tức. Thay vào đó, BA cần thực hiện phân tích tác động trên 5 chiều kích:</p>\n      <ul>\n        <li><b>Tác động Nghiệp vụ (Business Impact):</b> Thay đổi này có vi phạm quy định pháp lý, chính sách công ty hay làm sai lệch quy trình đang vận hành không?</li>\n        <li><b>Tác động Kiến trúc & Dữ liệu (Technical & Data Impact):</b> Có làm vỡ schema cơ sở dữ liệu, ảnh hưởng API tích hợp hay gây lỗi race-condition không?</li>\n        <li><b>Tác động Tiến độ & Chi phí (Schedule & Cost):</b> Mất bao nhiêu Story Points/man-days để sửa, có làm trễ ngày Go-live cam kết không?</li>\n        <li><b>Tác động Trải nghiệm Người dùng (UX Impact):</b> Người dùng cuối có phải học lại thao tác hay gặp rào cản nhận thức mới không?</li>\n        <li><b>Tác động Kiểm thử & Hồi quy (Testing & Regression):</b> Cần cập nhật bao nhiêu Test Cases và những module nào bắt buộc phải test hồi quy?</li>\n      </ul>\n    ",
    "applicationSteps": "\n      <ol>\n        <li><b>Thu thập & Cô lập đề xuất thay đổi:</b> Ghi nhận chính xác mong muốn mới, làm rõ lý do tại sao cần đổi tại thời điểm này.</li>\n        <li><b>Truy vết mạng lưới phụ thuộc (Traceability Mapping):</b> Mở ma trận truy vết (RTM) để quét từ yêu cầu gốc ➔ các User Stories liên quan ➔ các màn hình/API ➔ các bảng DB chịu ảnh hưởng.</li>\n        <li><b>Họp thẩm định kỹ thuật (Impact Triage):</b> Thảo luận với Tech Lead/Architect về giải pháp kỹ thuật, đánh giá rủi ro tương thích ngược (Backward compatibility).</li>\n        <li><b>Lượng hóa đánh đổi & Lập báo cáo thay đổi (CR Report):</b> Nêu rõ 2 phương án: Phương án A (Làm ngay trong đợt này - chi phí/ngày trễ) và Phương án B (Hoãn sang Phase sau/Sprint sau).</li>\n        <li><b>Trình phê duyệt chính thức (Sign-off):</b> Xin phê duyệt bằng văn bản từ Product Owner và Nhà tài trợ dự án có thẩm quyền.</li>\n      </ol>\n    ",
    "scenarioExercise": {
      "context": "Hệ thống Quản lý Kho thông minh (Smart Warehouse) gồm 2 phân hệ: WES (Warehouse Execution System - quản lý đơn hàng & logic kinh doanh) và WCS (Warehouse Control System - điều phối cánh tay robot và xe tự hành AGV). Đơn hàng #DH-8899 đang trong trạng thái \"Đang xuất kho\", robot AGV đã nhận lệnh di chuyển pallet ra cửa xuất. Bất ngờ, Khách hàng gọi điện hỏa tốc yêu cầu HỦY ĐƠN HÀNG này để đổi địa chỉ nhận.",
      "task": "Là BA phụ trách luồng tích hợp WES-WCS, bạn hãy lập ma trận phân tích tác động: 1. Trạng thái đơn hàng và robot nào bị ảnh hưởng? 2. Bên nào (WES hay WCS) có quyền chốt quyết định hủy? 3. Cần bổ sung/sửa đổi Acceptance Criteria (AC) nào? 4. Bộ phận QA cần chạy lại những test case hồi quy nào?",
      "starterPrompt": "1. Các trạng thái bị ảnh hưởng:\n- Trạng thái đơn hàng trên WES:\n- Trạng thái nhiệm vụ trên WCS & Robot AGV:\n\n2. Quyền quyết định hủy (State Authority):\n\n3. Tiêu chí nghiệm thu (AC) cần bổ sung:\n\n4. Các ca kiểm thử hồi quy (Regression Test Cases):",
      "sampleSolution": "\n        <h4>Bảng Phân tích Tác động & Ma trận Truy vết Mẫu (Model Answer)</h4>\n        <table class=\"data-table\" style=\"width:100%;font-size:13px;margin:12px 0\">\n          <thead>\n            <tr><th>Thành phần</th><th>Hiện trạng</th><th>Tác động sau thay đổi</th><th>Hành động bắt buộc của BA/Dev</th></tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><b>WES Order State</b></td>\n              <td>Đang xuất kho (In-Picking)</td>\n              <td>Chuyển sang \"Yêu cầu Hủy (Cancel Pending)\" ➔ Nếu WCS xác nhận dừng robot thành công thì chuyển \"Đã hủy (Cancelled)\"</td>\n              <td>Cập nhật State Machine Diagram: không cho phép hủy trực tiếp nếu chưa có ACK từ WCS.</td>\n            </tr>\n            <tr>\n              <td><b>WCS / AGV Task</b></td>\n              <td>Nhiệm vụ đang chạy (Task In-Progress)</td>\n              <td>Kiểm tra vị trí vật lý: Nếu pallet chưa đặt lên băng chuyền xuất thì phát lệnh STOP và hoàn trả pallet về ô kệ lưu trữ (Return to Rack)</td>\n              <td>Đặc tả thông điệp API: <code>POST /api/v1/tasks/{taskId}/abort</code> có cơ chế Idempotent.</td>\n            </tr>\n            <tr>\n              <td><b>Quyền quyết định</b></td>\n              <td>WES tạo lệnh</td>\n              <td><b>WCS là bên nắm quyền quyết định cuối cùng</b> về việc có thể hủy được hay không dựa trên an toàn vật lý của robot.</td>\n              <td>Ghi rõ quy tắc: Nếu robot đã nhả pallet vào thùng xe tải thì WCS trả về \"CANCEL_REJECTED - Order Already Dispatched\".</td>\n            </tr>\n          </tbody>\n        </table>\n        <h5>Tiêu chí nghiệm thu (AC) bổ sung:</h5>\n        <ul>\n          <li><b>AC-01 (Happy path hủy thành công):</b> Given Đơn hàng đang ở trạng thái In-Picking VÀ robot chưa đưa hàng vào xe; When Người dùng gửi yêu cầu Hủy; Then WES gửi lệnh Abort sang WCS, WCS điều hướng robot trả hàng về kệ và phản hồi 200 OK, WES cập nhật trạng thái đơn thành CANCELLED và hoàn lại tồn kho.</li>\n          <li><b>AC-02 (Race condition hủy bất khả kháng):</b> Given Robot đã thả hàng vào xe tải lúc 10:00:01; When Lệnh hủy từ WES đến WCS lúc 10:00:02; Then WCS từ chối hủy với mã lỗi 409 ORDER_LOADED, WES giữ nguyên trạng thái đơn là DISPATCHED và thông báo khách hàng liên hệ đổi trả sau Go-live.</li>\n        </ul>\n        <h5>Test cases kiểm thử hồi quy bắt buộc:</h5>\n        <ul>\n          <li>TC-REG-01: Kiểm tra tính Idempotent khi người dùng click nút Hủy 2 lần liên tiếp.</li>\n          <li>TC-REG-02: Kiểm tra cập nhật tồn kho khi robot trả hàng về vị trí kệ cũ.</li>\n          <li>TC-REG-03: Kiểm tra mất kết nối mạng giữa WES và WCS khi đang phát lệnh Abort.</li>\n        </ul>\n      ",
      "rubricCriteria": [
        "Nhận diện được cả trạng thái logic trên WES lẫn trạng thái vật lý của robot trên WCS.",
        "Phân định đúng quyền quyết định (WCS chốt khả năng hủy dựa trên vị trí thực tế của hàng hóa).",
        "Viết được ít nhất 2 Acceptance Criteria bao quát cả kịch bản hủy thành công và kịch bản từ chối hủy do race-condition.",
        "Liệt kê được các test case kiểm tra Idempotency và kiểm tra đồng bộ tồn kho hoàn trả."
      ]
    },
    "relatedQuizIds": [
      "Q2-14",
      "Q2-15",
      "Q6-16",
      "Q4-14"
    ],
    "relatedCaseId": "CASE-01"
  },
  {
    "id": "TOPIC-TRACEABILITY",
    "title": "Truy vết Yêu cầu & Quản lý Tính Nhất quán (Requirements Traceability Matrix)",
    "category": "Đặc tả & Quản lý yêu cầu",
    "summary": "Kỹ thuật liên kết hai chiều từ mục tiêu kinh doanh đến từng dòng mã nguồn và ca kiểm thử nghiệm thu.",
    "keywords": [
      "truy vết",
      "traceability",
      "requirements traceability",
      "rtm",
      "ma trận truy vết",
      "backward traceability",
      "forward traceability",
      "liên kết yêu cầu"
    ],
    "sources": [
      {
        "bookId": "babok-v3",
        "chapter": "Chương 5 · Task 5.1 Trace Requirements",
        "page": 89,
        "notes": "Thiết lập mối quan hệ phụ thuộc, nguồn gốc (Derive) và thỏa mãn (Satisfy) giữa các cấp độ yêu cầu."
      },
      {
        "bookId": "bcs-ba-3rd",
        "chapter": "Chương 8 · Defining the Solution (Requirements Catalogue)",
        "page": 228,
        "notes": "Quản lý danh mục yêu cầu có mã định danh để phục vụ đối soát nghiệm thu."
      },
      {
        "bookId": "100-days-ba",
        "chapter": "DAY 2 & DAY 17",
        "page": 5,
        "notes": "Tư duy hệ thống của BA: không viết tính năng rời rạc mà phải biết từng màn hình gắn với mục tiêu nào."
      }
    ],
    "perspectiveComparison": "BABOK định nghĩa mô hình truy vết toán học hoàn chỉnh (Forward & Backward Traceability); BCS gắn liền truy vết với việc xây dựng Business Case và kiểm soát chi phí bàn giao; 100 Ngày BA nhấn mạnh việc dùng ma trận truy vết như một \"tấm khiên hộ mệnh\" khi khách hàng hoặc sếp hỏi: \"Tại sao tính năng này lại làm như thế này?\".",
    "coreKnowledge": "\n      <h4>1. Định nghĩa và Giá trị cốt lõi của Traceability</h4>\n      <p>Truy vết yêu cầu (Requirements Traceability) là khả năng theo dõi một yêu cầu từ nguồn gốc sinh ra nó (Nhu cầu kinh doanh / Luật định), xuyên qua quá trình phân tích đặc tả, thiết kế kiến trúc, cho đến các dòng code và ca kiểm thử cuối cùng.</p>\n      <ul>\n        <li><b>Forward Traceability (Truy vết xuôi):</b> Từ Mục tiêu kinh doanh ➔ Yêu cầu phần mềm ➔ Test case. Đảm bảo mọi mục tiêu đều được hiện thực hóa và kiểm thử đầy đủ (No missing features).</li>\n        <li><b>Backward Traceability (Truy vết ngược):</b> Từ Test case / Code / Tính năng ➔ Ngược về Mục tiêu kinh doanh. Ngăn chặn hiện tượng làm thừa tính năng không ai dùng (No gold plating).</li>\n      </ul>\n    ",
    "applicationSteps": "\n      <ol>\n        <li><b>Đánh mã định danh chuẩn hóa (Standardized ID):</b> Quy ước mã định danh duy nhất (BR-xxx cho Business Req, UR-xxx cho User Req, SR-xxx cho System Req, TC-xxx cho Test case).</li>\n        <li><b>Thiết lập Ma trận RTM (Requirements Traceability Matrix):</b> Xây dựng bảng quan hệ ánh xạ nhiều-nhiều hoặc 1-nhiều giữa các tầng yêu cầu.</li>\n        <li><b>Bảo trì ma trận khi có thay đổi:</b> Mỗi khi một User Story được thêm, bớt hoặc sửa, phải cập nhật ngay RTM để phát hiện các \"yêu cầu mồ côi\" (Orphan requirements).</li>\n        <li><b>Sử dụng RTM trong nghiệm thu UAT:</b> Căn cứ vào RTM để báo cáo tỷ lệ bao phủ kiểm thử (Test Coverage) trước khi ký bàn giao.</li>\n      </ol>\n    ",
    "scenarioExercise": {
      "context": "Dự án Cổng dịch vụ công trực tuyến của Thành phố có yêu cầu pháp lý: \"Người dân có thể tra cứu tình trạng giải quyết hồ sơ đất đai bằng mã định danh công dân VNeID hoặc mã hồ sơ\". Dự án có 3 phân hệ: Cổng người dân (Portal), Hệ thống một cửa điện tử (Back-office) và CSDL Đất đai liên thông.",
      "task": "Hãy lập bảng ma trận truy vết RTM từ Business Need ➔ Functional Requirements ➔ Non-functional Requirement ➔ 3 Test Cases nghiệm thu.",
      "starterPrompt": "Mã Business Need: BR-DATDAI-01: ...\n\nMã Functional Requirements (FR):\n- FR-01:\n- FR-02:\n\nMã Non-Functional Requirement (NFR):\n- NFR-01:\n\nMa trận Test Cases (TC):\n- TC-01 ánh xạ tới FR-...\n- TC-02 ánh xạ tới FR-...\n- TC-03 ánh xạ tới NFR-...",
      "sampleSolution": "\n        <h4>Ma trận Truy vết RTM Chuẩn mực</h4>\n        <table class=\"data-table\" style=\"width:100%;font-size:13px\">\n          <thead>\n            <tr><th>Mã Yêu cầu</th><th>Mô tả chi tiết</th><th>Ánh xạ nguồn gốc</th><th>Mã Test Case nghiệm thu</th></tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><b>BR-DATDAI-01</b></td>\n              <td>Minh bạch hóa tiến độ giải quyết hồ sơ đất đai cho 100% công dân số theo Nghị định Chính phủ.</td>\n              <td>Nghị định 42/2022/NĐ-CP</td>\n              <td>UAT-OVERALL-01</td>\n            </tr>\n            <tr>\n              <td><b>FR-SEARCH-01</b></td>\n              <td>Người dân có thể đăng nhập bằng VNeID cấp độ 2 để xem toàn bộ danh sách hồ sơ đất đai đứng tên mình.</td>\n              <td>BR-DATDAI-01</td>\n              <td>TC-PORTAL-01 (Test login VNeID & trả về danh sách hồ sơ)</td>\n            </tr>\n            <tr>\n              <td><b>FR-SEARCH-02</b></td>\n              <td>Người dân vãng lai không cần đăng nhập có thể nhập Mã biên nhận hồ sơ (12 ký tự) + Mã captcha để tra cứu trạng thái xử lý hiện tại.</td>\n              <td>BR-DATDAI-01</td>\n              <td>TC-PORTAL-02 (Test tra cứu ẩn danh bằng mã biên nhận hợp lệ & không hợp lệ)</td>\n            </tr>\n            <tr>\n              <td><b>NFR-SEC-01</b></td>\n              <td>Không hiển thị thông tin số CCCD và số tiền thuế đầy đủ cho người tra cứu ẩn danh (phải làm mờ dạng 079***456).</td>\n              <td>Luật An toàn thông tin</td>\n              <td>TC-SEC-MASK-01 (Xác minh Data Masking trên màn hình tra cứu vãng lai)</td>\n            </tr>\n          </tbody>\n        </table>\n      ",
      "rubricCriteria": [
        "Có cấu trúc mã định danh rõ ràng, phân biệt giữa BR, FR, NFR và TC.",
        "Thể hiện được tính liên kết hai chiều (Backward & Forward traceability).",
        "Bao gồm cả yêu cầu bảo mật thông tin (Data Masking) như một NFR gắn với mục tiêu pháp lý."
      ]
    },
    "relatedQuizIds": [
      "Q2-01",
      "Q2-02",
      "Q2-06",
      "Q2-10"
    ],
    "relatedCaseId": "CASE-03"
  },
  {
    "id": "TOPIC-AC-GHERKIN",
    "title": "Viết Tiêu chí Nghiệm thu (Acceptance Criteria) & Gherkin Given-When-Then",
    "category": "Đặc tả & Quản lý yêu cầu",
    "summary": "Kỹ thuật đặc tả tiêu chí nghiệm thu rõ ràng, đo lường được, làm cầu nối chính xác giữa BA, Lập trình viên và Tester.",
    "keywords": [
      "tiêu chí nghiệm thu",
      "acceptance criteria",
      "ac",
      "gherkin",
      "given when then",
      "bva",
      "boundary value",
      "bdd",
      "quy tắc nghiệm thu"
    ],
    "sources": [
      {
        "bookId": "babok-v3",
        "chapter": "Chương 10 · Kỹ thuật 10.1 Acceptance and Evaluation Criteria",
        "page": 227,
        "notes": "Định nghĩa các tiêu chí đo lường sự thành công của một giải pháp hoặc tính năng."
      },
      {
        "bookId": "100-days-ba",
        "chapter": "DAY 5 & DAY 29",
        "page": 12,
        "notes": "Tư duy lỗi của BA: Viết logic chặt chẽ không bị lọt case, bắt đầu từ tiền điều kiện rõ ràng."
      }
    ],
    "perspectiveComparison": "BABOK v3 phân loại Acceptance Criteria thành các thuộc tính chất lượng tổng thể; 100 Ngày BA nhấn mạnh việc áp dụng cú pháp Given-When-Then để triệt tiêu cãi cọ giữa Dev và QA về việc \"đây là bug hay tính năng\".",
    "coreKnowledge": "\n      <h4>1. Cú pháp Gherkin chuẩn mực</h4>\n      <ul>\n        <li><b>Given (Tiền điều kiện / Bối cảnh dữ liệu):</b> Trạng thái của hệ thống và tài khoản người dùng trước khi hành động diễn ra.</li>\n        <li><b>When (Hành động kích hoạt):</b> Thao tác cụ thể mà người dùng hoặc sự kiện ngoại vi thực hiện.</li>\n        <li><b>Then (Kết quả quan sát được):</b> Trạng thái mới của dữ liệu, thông báo hiển thị trên giao diện hoặc phản hồi API.</li>\n        <li><b>And / But:</b> Nối các điều kiện bổ sung trong cùng một ngữ cảnh.</li>\n      </ul>\n      <h4>2. Ba sai lầm kinh điển khi viết AC</h4>\n      <ul>\n        <li>Viết mơ hồ không đo lường được (Ví dụ: \"Hệ thống phải load nhanh\", \"Giao diện đẹp\").</li>\n        <li>Bỏ quên kịch bản ngoại lệ (Negative cases / Error flows).</li>\n        <li>Đưa giải pháp kỹ thuật vào AC (Ví dụ viết \"Dev phải dùng câu lệnh UPDATE bảng Users\").</li>\n      </ul>\n    ",
    "applicationSteps": "\n      <ol>\n        <li><b>Xác định Happy Path (Luồng chuẩn):</b> Viết kịch bản người dùng nhập đúng thông tin và nhận được kết quả thành công.</li>\n        <li><b>Khai thác Phân tích Giá trị Biên (BVA):</b> Đặt các giá trị sát mép (min, min-1, max, max+1) để viết AC bắt lỗi.</li>\n        <li><b>Xác định kịch bản Timeout / Network Error:</b> Quy định rõ hệ thống phản hồi thế nào khi bên thứ ba không phản hồi.</li>\n        <li><b>Review 3 bên (Three Amigos):</b> BA, Dev và QA cùng đọc lại AC để thống nhất cách hiểu trước khi đưa vào Sprint.</li>\n      </ol>\n    ",
    "scenarioExercise": {
      "context": "Hệ thống Thương mại điện tử ra mắt tính năng \"Áp dụng Mã giảm giá Flash Sale: Giảm 20% tối đa 100.000 VNĐ cho đơn hàng có giá trị sản phẩm từ 300.000 VNĐ trở lên, mỗi tài khoản chỉ được dùng 1 lần duy nhất\".",
      "task": "Hãy viết 3 tiêu chí nghiệm thu AC bằng định dạng Gherkin: 1. Áp mã thành công ở mức giảm tối đa; 2. Từ chối khi giá trị đơn hàng chưa đủ 300.000 VNĐ; 3. Từ chối khi tài khoản đã dùng mã này trước đó.",
      "starterPrompt": "AC 1 - Áp dụng thành công (Happy path):\nGiven ...\nWhen ...\nThen ...\n\nAC 2 - Đơn hàng chưa đạt giá trị tối thiểu:\nGiven ...\nWhen ...\nThen ...\n\nAC 3 - Tài khoản đã sử dụng mã trước đó:\nGiven ...\nWhen ...\nThen ...",
      "sampleSolution": "\n        <h4>Bộ Tiêu chí Nghiệm thu AC Chuẩn Gherkin</h4>\n        <pre><code>Scenario: AC-01 - Áp mã thành công và chạm trần giảm giá tối đa\nGiven Khách hàng đã đăng nhập tài khoản \"user_01\" chưa từng sử dụng mã \"FLASH20\"\nAnd Giỏ hàng có tổng giá trị sản phẩm là 600.000 VNĐ\nWhen Khách hàng nhập mã giảm giá \"FLASH20\" và nhấn \"Áp dụng\"\nThen Hệ thống áp dụng mã thành công\nAnd Số tiền giảm giá được hiển thị là 100.000 VNĐ (thay vì 120.000 VNĐ do chạm mức trần tối đa)\nAnd Tổng số tiền thanh toán được cập nhật thành 500.000 VNĐ.\n\nScenario: AC-02 - Từ chối khi giỏ hàng chưa đạt giá trị tối thiểu (Boundary Test)\nGiven Khách hàng có giỏ hàng với giá trị sản phẩm là 299.999 VNĐ\nWhen Khách hàng nhập mã giảm giá \"FLASH20\" và nhấn \"Áp dụng\"\nThen Hệ thống từ chối áp dụng mã\nAnd Hiển thị thông báo lỗi: \"Đơn hàng cần tối thiểu 300.000 VNĐ để sử dụng mã này\"\nAnd Tổng số tiền thanh toán giữ nguyên 299.999 VNĐ.\n\nScenario: AC-03 - Từ chối khi tài khoản đã từng sử dụng mã (Idempotent / Usage Limit)\nGiven Khách hàng \"user_02\" đã có 1 đơn hàng trước đó ở trạng thái \"Đã thanh toán\" sử dụng mã \"FLASH20\"\nAnd Giỏ hàng hiện tại có giá trị 400.000 VNĐ\nWhen Khách hàng nhập mã \"FLASH20\" và nhấn \"Áp dụng\"\nThen Hệ thống từ chối áp dụng\nAnd Hiển thị thông báo lỗi: \"Mỗi tài khoản chỉ được sử dụng mã khuyến mãi này 1 lần\".\n</code></pre>\n      ",
      "rubricCriteria": [
        "Cú pháp chuẩn xác Given, When, Then, And.",
        "Đặc tả rõ ràng số tiền cụ thể và quy tắc trần tối đa 100.000 VNĐ.",
        "Xử lý chính xác giá trị biên 299.999 VNĐ và thông điệp lỗi trực quan.",
        "Bao gồm điều kiện tiên quyết kiểm tra lịch sử tài khoản đã dùng mã."
      ]
    },
    "relatedQuizIds": [
      "Q2-04",
      "Q6-10",
      "Q8-06"
    ],
    "relatedCaseId": "CASE-02"
  },
  {
    "id": "TOPIC-BACCM",
    "title": "Mô hình Khái niệm Cốt lõi Business Analysis (BACCM) & Giá trị Nghiệp vụ",
    "category": "Nền tảng BA",
    "summary": "Bộ khung 6 khái niệm nền tảng của BABOK v3 giúp định hình mọi bài toán phân tích từ bản chất giá trị.",
    "keywords": [
      "baccm",
      "core concepts",
      "business analysis core concept model",
      "change",
      "need",
      "solution",
      "stakeholder",
      "value",
      "context",
      "khái niệm cốt lõi",
      "giá trị"
    ],
    "sources": [
      {
        "bookId": "babok-v3",
        "chapter": "Chương 2 · Business Analysis Key Concepts (BACCM)",
        "page": 21,
        "notes": "Định nghĩa 6 khái niệm cốt lõi và mối quan hệ hữu cơ không thể tách rời."
      },
      {
        "bookId": "bcs-ba-3rd",
        "chapter": "Chương 1 · What is Business Analysis?",
        "page": 35,
        "notes": "Định nghĩa vai trò BA trong việc kiến tạo giá trị thay đổi tổ chức."
      },
      {
        "bookId": "100-days-ba",
        "chapter": "DAY 6 & DAY 8",
        "page": 14,
        "notes": "Không làm BA thợ gõ máy - Chuyển dịch từ người viết tài liệu sang người giải quyết vấn đề."
      }
    ],
    "perspectiveComparison": "BABOK v3 chuẩn hóa 6 đỉnh lục giác BACCM bình đẳng nhau; BCS tiếp cận thực tế thông qua Business Change Lifecycle; Nguyễn Bá Phú đúc kết thành quy tắc \"Hỏi chữ TẠI SAO 5 lần\" trước khi bắt tay vào vẽ wireframe.",
    "coreKnowledge": "\n      <h4>6 Khái niệm trong Mô hình BACCM</h4>\n      <table class=\"data-table\" style=\"width:100%;font-size:13px\">\n        <tr><td><b>1. Change (Sự thay đổi)</b></td><td>Hành động chuyển dịch một tổ chức từ hiện trạng sang trạng thái tương lai nhằm đáp ứng nhu cầu.</td></tr>\n        <tr><td><b>2. Need (Nhu cầu)</b></td><td>Vấn đề nhức nhối cần giải quyết hoặc cơ hội kinh doanh cần nắm bắt.</td></tr>\n        <tr><td><b>3. Solution (Giải pháp)</b></td><td>Cách thức cụ thể (phần mềm, quy trình, chính sách) được xây dựng để thỏa mãn nhu cầu trong một bối cảnh.</td></tr>\n        <tr><td><b>4. Stakeholder (Các bên liên quan)</b></td><td>Những cá nhân, nhóm người có ảnh hưởng hoặc chịu ảnh hưởng trực tiếp/gián tiếp bởi sự thay đổi.</td></tr>\n        <tr><td><b>5. Value (Giá trị)</b></td><td>Lợi ích, tầm quan trọng hoặc sự hữu dụng mà giải pháp mang lại cho các bên liên quan trong bối cảnh cụ thể.</td></tr>\n        <tr><td><b>6. Context (Bối cảnh)</b></td><td>Môi trường bao quanh sự thay đổi (văn hóa, công nghệ, pháp lý, đối thủ cạnh tranh).</td></tr>\n      </table>\n    ",
    "applicationSteps": "\n      <ol>\n        <li>Khi nhận một yêu cầu tính năng, dùng 6 đỉnh BACCM để chất vấn: Ai cần nó? Vì sao cần? Bối cảnh là gì? Giá trị đo bằng gì?</li>\n        <li>Nếu thay đổi 1 đỉnh (ví dụ thay đổi Context do luật mới), ngay lập tức đánh giá lại 5 đỉnh còn lại.</li>\n      </ol>\n    ",
    "scenarioExercise": {
      "context": "Một chuỗi bệnh viện đa khoa tư nhân muốn xây dựng tính năng \"Bác sĩ khám bệnh từ xa qua Video Call\" (Telemedicine) trên ứng dụng di động.",
      "task": "Hãy phân tích bài toán này bằng cách điền thông tin vào 6 khái niệm của mô hình BACCM.",
      "starterPrompt": "1. Need:\n2. Change:\n3. Solution:\n4. Context:\n5. Stakeholders:\n6. Value:",
      "sampleSolution": "\n        <h4>Phân tích Telemedicine bằng Mô hình BACCM</h4>\n        <ul>\n          <li><b>Need:</b> Bệnh nhân tái khám bệnh mãn tính ở xa ngại đến bệnh viện chờ đợi; Bệnh viện muốn giảm quá tải phòng khám và mở rộng nguồn thu ngoại tỉnh.</li>\n          <li><b>Change:</b> Chuyển đổi quy trình khám bệnh trực tiếp truyền thống sang mô hình khám kết hợp Hybrid (Tele-consultation + Giao thuốc tận nhà).</li>\n          <li><b>Solution:</b> Ứng dụng di động tích hợp WebRTC Video Call có mã hóa y tế, kê đơn thuốc điện tử có chữ ký số bác sĩ và liên kết cổng thanh toán viện phí.</li>\n          <li><b>Context:</b> Luật Khám bệnh chữa bệnh sửa đổi cho phép Telehealth; Hạ tầng 4G/5G phổ cập; Rủi ro bảo mật dữ liệu sức khỏe cá nhân theo Nghị định 13.</li>\n          <li><b>Stakeholders:</b> Bệnh nhân, Bác sĩ chuyên khoa, Dược sĩ nhà thuốc bệnh viện, Khối Pháp chế y tế, Đội ngũ kỹ thuật IT.</li>\n          <li><b>Value:</b> Bệnh nhân tiết kiệm 70% thời gian đi lại; Bệnh viện tăng 25% lượt tái khám đúng hẹn và tối ưu công suất ngoài giờ của bác sĩ.</li>\n        </ul>\n      ",
      "rubricCriteria": [
        "Phân biệt rõ ràng giữa Need (vấn đề cốt lõi) và Solution (phần mềm cụ thể)",
        "Xác định được giá trị định lượng cho cả người bệnh lẫn bệnh viện"
      ]
    },
    "relatedQuizIds": [
      "Q0-01",
      "Q0-02",
      "Q0-03"
    ],
    "relatedCaseId": "CASE-04"
  },
  {
    "id": "TOPIC-STAKEHOLDER-MGMT",
    "title": "Phân tích, Lập bản đồ & Quản lý Kỳ vọng Stakeholders (Mendelow & RACI)",
    "category": "Khai thác yêu cầu",
    "summary": "Nghệ thuật phân loại các bên liên quan, nhận diện rủi ro chính trị nội bộ và lập ma trận cộng tác hiệu quả.",
    "keywords": [
      "stakeholder",
      "quản lý stakeholder",
      "ma trận quyền lực",
      "mendelow",
      "power interest grid",
      "raci",
      "rasci",
      "thấu cảm",
      "onion diagram"
    ],
    "sources": [
      {
        "bookId": "babok-v3",
        "chapter": "Chương 3 · Task 3.2 Plan Stakeholder Engagement & Kỹ thuật 10.43",
        "page": 41,
        "notes": "Phân tích ma trận quyền lực và mức độ ảnh hưởng của các bên liên quan."
      },
      {
        "bookId": "bcs-ba-3rd",
        "chapter": "Chương 6 · Stakeholder Analysis and Management",
        "page": 159,
        "notes": "Phân loại Stakeholders, Ma trận Mendelow, RACI và kỹ thuật CATWOE."
      },
      {
        "bookId": "100-days-ba",
        "chapter": "DAY 3, DAY 11 & DAY 28",
        "page": 8,
        "notes": "Cách không bị đổ lỗi khi khách hàng nói \"Tôi chưa từng nói thế bao giờ\"."
      }
    ],
    "perspectiveComparison": "BABOK nhấn mạnh phân loại vai trò theo tiêu chuẩn quản trị; BCS đào sâu các chiến lược tương tác theo 4 góc phần tư Mendelow; 100 Ngày BA cung cấp chiến thuật thực chiến: luôn gửi biên bản chốt ý sau mỗi cuộc họp để bảo vệ tính minh bạch.",
    "coreKnowledge": "\n      <h4>4 Nhóm Stakeholder theo Ma trận Mendelow</h4>\n      <ul>\n        <li><b>Quyền lực Cao / Quan tâm Cao (Key Players):</b> Cần quản lý chặt chẽ (Manage Closely), mời tham vấn thường xuyên và duy trì sự đồng thuận tuyệt đối.</li>\n        <li><b>Quyền lực Cao / Quan tâm Thấp:</b> Giữ cho họ hài lòng (Keep Satisfied), gửi báo cáo cô đọng các mốc quan trọng, tránh lôi kéo vào họp vụn vặt.</li>\n        <li><b>Quyền lực Thấp / Quan tâm Cao:</b> Cập nhật thông tin đầy đủ (Keep Informed), lắng nghe ý kiến phản hồi chi tiết vì họ là người dùng trực tiếp.</li>\n        <li><b>Quyền lực Thấp / Quan tâm Thấp:</b> Giám sát với nỗ lực tối thiểu (Monitor with minimal effort).</li>\n      </ul>\n    ",
    "applicationSteps": "\n      <ol>\n        <li>Liệt kê danh sách tất cả các bên liên quan (Internal & External).</li>\n        <li>Chấm điểm vị trí của từng người trên trục Quyền lực và Mức độ quan tâm.</li>\n        <li>Lập bảng RACI phân định rõ: R (Responsible - Người làm), A (Accountable - Người chịu trách nhiệm phê duyệt duy nhất), C (Consulted - Người được tham vấn), I (Informed - Người nhận thông báo).</li>\n      </ol>\n    ",
    "scenarioExercise": {
      "context": "Dự án triển khai phần mềm Số hóa Quy trình Phê duyệt Mua sắm (E-Procurement). Giám đốc Tài chính (CFO) có quyền ký duyệt ngân sách dự án nhưng rất bận rộn; Trưởng phòng Mua sắm là người trực tiếp dùng phần mềm mỗi ngày; Nhân viên IT phụ trách tích hợp máy chủ; Chuyên viên kiểm toán nội bộ quan tâm đến tính bảo mật chứng từ.",
      "task": "Xếp 4 nhân vật trên vào 4 ô của Ma trận Mendelow và đề xuất chiến lược giao tiếp phù hợp cho từng người.",
      "starterPrompt": "1. Giám đốc Tài chính (CFO):\n- Phân nhóm:\n- Chiến lược:\n\n2. Trưởng phòng Mua sắm:\n- Phân nhóm:\n- Chiến lược:\n\n3. Chuyên viên Kiểm toán nội bộ:\n- Phân nhóm:\n- Chiến lược:\n\n4. Nhân viên IT vận hành:\n- Phân nhóm:\n- Chiến lược:",
      "sampleSolution": "\n        <h4>Phân loại Ma trận Mendelow & Kế hoạch Tương tác</h4>\n        <ul>\n          <li><b>CFO:</b> High Power / Low Interest ➔ <i>Keep Satisfied</i>. Không gửi email dài; mỗi 2 tuần gửi 1 bản tóm tắt 1 trang (Executive Summary) về tiến độ và chỉ số tiết kiệm chi phí dự kiến.</li>\n          <li><b>Trưởng phòng Mua sắm:</b> High Power / High Interest ➔ <i>Manage Closely</i>. Mời làm Subject Matter Expert (SME) đồng thiết kế quy trình, demo Prototype hàng tuần để lấy feedback.</li>\n          <li><b>Chuyên viên Kiểm toán:</b> Low-to-Medium Power / High Interest ➔ <i>Keep Informed / Consult</i>. Tham vấn về yêu cầu lưu vết nhật ký kiểm toán (Audit Trail) để đảm bảo tuân thủ từ đầu.</li>\n          <li><b>Nhân viên IT:</b> Low Power / Low-to-Medium Interest ➔ <i>Monitor & Keep Informed</i>. Gửi tài liệu đặc tả API và lịch bàn giao kỹ thuật trước các đợt kiểm thử.</li>\n        </ul>\n      ",
      "rubricCriteria": [
        "Phân loại đúng CFO vào nhóm Keep Satisfied và Trưởng phòng Mua sắm vào Key Players",
        "Đề xuất chiến lược truyền thông có tính thực tế cao"
      ]
    },
    "relatedQuizIds": [
      "Q1-03",
      "Q1-04",
      "Q9-04",
      "Q9-07"
    ],
    "relatedCaseId": "CASE-01"
  },
  {
    "id": "TOPIC-BPMN-PROCESS",
    "title": "Mô hình hóa Quy trình Nghiệp vụ Chuẩn với BPMN 2.0 & Flowchart",
    "category": "Mô hình hóa quy trình",
    "summary": "Kỹ thuật vẽ sơ đồ quy trình trực quan, phân định trách nhiệm phân làn (Swimlanes) và logic rẽ nhánh chuẩn mực quốc tế.",
    "keywords": [
      "mô hình hóa quy trình",
      "bpmn",
      "flowchart",
      "swimlane",
      "pool",
      "gateway",
      "exclusive gateway",
      "parallel gateway",
      "as-is",
      "to-be"
    ],
    "sources": [
      {
        "bookId": "babok-v3",
        "chapter": "Chương 10 · Kỹ thuật 10.35 Process Modelling",
        "page": 334,
        "notes": "Mô tả tuần tự các hoạt động nghiệp vụ từ sự kiện kích hoạt đến kết quả đầu ra."
      },
      {
        "bookId": "bcs-ba-3rd",
        "chapter": "Chương 7 · Modelling Business Processes",
        "page": 186,
        "notes": "Quy trình phân làn Swimlane, phân tích As-Is và cải tiến quy trình To-Be."
      },
      {
        "bookId": "100-days-ba",
        "chapter": "DAY 15, DAY 33 & DAY 58",
        "page": 32,
        "notes": "Kinh nghiệm vẽ flow: Không vẽ một đống mũi tên chéo nhau khiến lập trình viên nhìn vào là muốn bỏ chạy."
      }
    ],
    "perspectiveComparison": "BABOK định nghĩa BPMN theo chuẩn OMG với các ký hiệu chính xác về Event, Activity, Gateway; BCS tập trung vào chuỗi giá trị tổ chức (Organizational Business Process); 100 Ngày BA nhấn mạnh việc phân biệt rõ làn người dùng vs làn hệ thống để Dev biết chính xác chỗ nào cần viết API tự động.",
    "coreKnowledge": "\n      <h4>Các thành phần cốt lõi trong sơ đồ BPMN 2.0</h4>\n      <ul>\n        <li><b>Pool & Swimlane:</b> Phân định ranh giới tổ chức và vai trò tham gia (ví dụ Làn Khách hàng, Làn Nhân viên, Làn Hệ thống Gateway).</li>\n        <li><b>Events:</b> Điểm bắt đầu (Start Event - vòng tròn đơn), Sự kiện trung gian (Timer, Message), Điểm kết thúc (End Event - vòng tròn đậm).</li>\n        <li><b>Gateways:</b> Exclusive Gateway (XOR - chỉ chọn 1 trong các nhánh), Parallel Gateway (AND - thực hiện đồng thời tất cả các nhánh), Inclusive Gateway (OR).</li>\n        <li><b>Sequence Flow:</b> Mũi tên liền nét thể hiện thứ tự thực hiện giữa các hoạt động trong cùng 1 Pool.</li>\n      </ul>\n    ",
    "applicationSteps": "\n      <ol>\n        <li>Xác định mục tiêu quy trình và điểm kích hoạt đầu tiên (Trigger).</li>\n        <li>Liệt kê các bên tham gia để chia Làn (Lanes).</li>\n        <li>Vẽ luồng thành công chính (Happy path) từ trái qua phải.</li>\n        <li>Gắn các Gateway để xử lý kịch bản rẽ nhánh và ngoại lệ.</li>\n      </ol>\n    ",
    "scenarioExercise": {
      "context": "Quy trình xét duyệt Hồ sơ Vay tín chấp tiêu dùng: Khách hàng nộp hồ sơ trực tuyến ➔ Hệ thống chấm điểm tín nhiệm tự động (Credit Scoring) ➔ Nếu điểm dưới 500 thì tự động từ chối; Nếu điểm từ 500 đến 700 thì chuyển Chuyên viên thẩm định gọi điện kiểm tra; Nếu điểm trên 700 thì chuyển thẳng Trưởng phòng phê duyệt giải ngân.",
      "task": "Mô tả cấu trúc sơ đồ BPMN: các Làn cần có, loại Gateway sử dụng và các điều kiện rẽ nhánh.",
      "starterPrompt": "1. Các Swimlanes:\n2. Điểm bắt đầu (Start Event):\n3. Gateway & Các nhánh điều kiện:\n4. Các điểm kết thúc (End Events):",
      "sampleSolution": "\n        <h4>Mô tả Cấu trúc BPMN Xét duyệt Vay tín chấp</h4>\n        <ul>\n          <li><b>Pool/Lanes:</b> 4 làn: Làn 1 - Khách hàng; Làn 2 - Hệ thống Core AI Scoring; Làn 3 - Chuyên viên thẩm định; Làn 4 - Trưởng phòng phê duyệt.</li>\n          <li><b>Start Event:</b> Bắt đầu khi khách hàng submit form đăng ký vay thành công.</li>\n          <li><b>Gateway 1 (Exclusive Gateway - Chấm điểm tín nhiệm):</b>\n            <ul>\n              <li>Nhánh [Điểm < 500]: Gửi email thông báo từ chối ➔ End Event (Bị từ chối).</li>\n              <li>Nhánh [500 <= Điểm <= 700]: Giao task gọi điện cho Chuyên viên thẩm định ở Làn 3.</li>\n              <li>Nhánh [Điểm > 700]: Bỏ qua thẩm định, chuyển thẳng duyệt ở Làn 4.</li>\n            </ul>\n          </li>\n          <li><b>Gateway 2 (Quyết định của Chuyên viên thẩm định):</b> Duyệt hồ sơ ➔ Chuyển Làn 4; Không duyệt ➔ Kết thúc.</li>\n          <li><b>End Event:</b> 2 kết quả cuối cùng: Hồ sơ bị từ chối hoặc Khoản vay được giải ngân thành công.</li>\n        </ul>\n      ",
      "rubricCriteria": [
        "Sử dụng đúng Exclusive Gateway (XOR) cho các điều kiện loại trừ lẫn nhau",
        "Phân làn hợp lý giữa tác vụ tự động của máy và tác vụ phê duyệt của con người"
      ]
    },
    "relatedQuizIds": [
      "Q3-01",
      "Q3-02",
      "Q3-06",
      "Q3-14"
    ],
    "relatedCaseId": "CASE-01"
  },
  {
    "id": "TOPIC-STATE-MACHINE",
    "title": "Biểu đồ Trạng thái (State Machine Diagram) & Tính Bất biến Idempotency",
    "category": "Mô hình hóa quy trình",
    "summary": "Kỹ thuật kiểm soát vòng đời đối tượng dữ liệu, ngăn chặn việc chuyển trạng thái bất hợp pháp và xử lý trùng lặp giao dịch.",
    "keywords": [
      "sơ đồ trạng thái",
      "state machine",
      "state diagram",
      "vòng đời đơn hàng",
      "chuyển trạng thái",
      "transition",
      "idempotency",
      "wes wcs"
    ],
    "sources": [
      {
        "bookId": "babok-v3",
        "chapter": "Chương 10 · Kỹ thuật 10.44 State Modelling",
        "page": 356,
        "notes": "Mô hình hóa các trạng thái hợp lệ và sự kiện kích hoạt chuyển dịch vòng đời đối tượng."
      },
      {
        "bookId": "100-days-ba",
        "chapter": "DAY 2, DAY 41 & DAY 69",
        "page": 94,
        "notes": "Lỗ hổng chết người của BA: Thiết kế thiếu trạng thái trung gian khiến hệ thống bị treo đơn hàng."
      }
    ],
    "perspectiveComparison": "BABOK định nghĩa State Machine ở mức thiết kế hướng đối tượng UML; 100 Ngày BA chỉ ra bài toán thực chiến: trong hệ thống phân tán, luôn phải có trạng thái chuyển tiếp (Transitional State như PROCESSING, PENDING) và luật Idempotent để đề phòng người dùng double-click hoặc mạng chập chờn gửi 2 request trùng nhau.",
    "coreKnowledge": "\n      <h4>1. Các thành phần của State Machine</h4>\n      <ul>\n        <li><b>State (Trạng thái):</b> Điều kiện hoặc tình trạng tồn tại của đối tượng tại một thời điểm (ví dụ DRAFT, SUBMITTED, APPROVED, REJECTED).</li>\n        <li><b>Transition (Chuyển dịch):</b> Mũi tên từ trạng thái A sang trạng thái B khi có sự kiện kích hoạt.</li>\n        <li><b>Event / Trigger (Sự kiện):</b> Hành động làm thay đổi trạng thái (ví dụ Người dùng bấm Xác nhận, Webhook ngân hàng báo thành công).</li>\n        <li><b>Guard Condition (Điều kiện rào chắn):</b> Biểu thức logic bắt buộc phải đúng thì chuyển dịch mới được phép xảy ra.</li>\n      </ul>\n      <h4>2. Nguyên tắc Idempotency trong State Machine</h4>\n      <p>Một thao tác được gọi là Idempotent nếu việc thực hiện nó 1 lần hay 100 lần liên tiếp đều cho ra cùng một kết quả trạng thái dữ liệu duy nhất mà không gây tác dụng phụ (Side effect).</p>\n    ",
    "applicationSteps": "\n      <ol>\n        <li>Xác định đối tượng nghiệp vụ cốt lõi (Entity: Đơn hàng, Vé máy bay, Hồ sơ vay).</li>\n        <li>Liệt kê tất cả các trạng thái có thể có từ khi sinh ra (Initial State) đến khi kết thúc (Final State).</li>\n        <li>Vẽ Ma trận chuyển trạng thái (State Transition Matrix): Hàng là Trạng thái hiện tại, Cột là Sự kiện, Ô giao nhau là Trạng thái mới.</li>\n        <li>Quy định rõ ràng: Nếu nhận sự kiện cho một trạng thái đã qua (ví dụ nhận lệnh CANCEL khi đơn hàng đã DELIVERED) thì hệ thống phải bỏ qua an toàn mà không báo lỗi sập server.</li>\n      </ol>\n    ",
    "scenarioExercise": {
      "context": "Thiết kế vòng đời thanh toán trực tuyến qua Cổng trung gian. Người dùng bấm \"Thanh toán\", cổng ngân hàng trừ tiền nhưng do mạng chậm, ngân hàng gửi lại 2 bản tin Webhook \"PAYMENT_SUCCESS\" cách nhau 500ms.",
      "task": "Hãy lập bảng chuyển trạng thái cho Đơn hàng và đặc tả quy tắc Idempotency để tránh việc cộng điểm thưởng hoặc xuất 2 đơn hàng trùng nhau.",
      "starterPrompt": "Trạng thái ban đầu: PENDING_PAYMENT\n\nBảng chuyển trạng thái:\n- Hiện tại: PENDING_PAYMENT -> Nhận Webhook lần 1 -> Trạng thái mới: ...\n- Hiện tại: ... -> Nhận Webhook lần 2 -> Trạng thái mới: ...\n\nQuy tắc Idempotent Rule:",
      "sampleSolution": "\n        <h4>Thiết kế State Machine & Idempotency Rule</h4>\n        <table class=\"data-table\" style=\"width:100%;font-size:13px\">\n          <thead>\n            <tr><th>Trạng thái hiện tại</th><th>Sự kiện kích hoạt</th><th>Guard Condition</th><th>Trạng thái mới</th><th>Hành động kèm theo</th></tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>CREATED</td>\n              <td>Người dùng bấm Thanh toán</td>\n              <td>Giỏ hàng còn tồn kho</td>\n              <td>PENDING_PAYMENT</td>\n              <td>Khóa tạm giữ tồn kho (Soft Reservation 15 phút)</td>\n            </tr>\n            <tr>\n              <td>PENDING_PAYMENT</td>\n              <td>Nhận Webhook Success (Lần 1)</td>\n              <td>Chữ ký điện tử (Signature) hợp lệ</td>\n              <td>PAID</td>\n              <td>Cộng điểm thưởng, gửi đơn sang WMS xuất kho</td>\n            </tr>\n            <tr>\n              <td>PAID</td>\n              <td>Nhận Webhook Success (Lần 2)</td>\n              <td>Cùng mã TransactionId đã xử lý</td>\n              <td><b>PAID (Giữ nguyên)</b></td>\n              <td><b>Bỏ qua việc cộng điểm/xuất kho; chỉ phản hồi HTTP 200 OK cho ngân hàng</b></td>\n            </tr>\n          </tbody>\n        </table>\n      ",
      "rubricCriteria": [
        "Xác định trạng thái không đổi khi nhận trùng webhook",
        "Đặc tả rõ cơ chế chống cộng điểm thưởng thừa (Idempotent Handler)"
      ]
    },
    "relatedQuizIds": [
      "Q3-04",
      "Q3-15",
      "Q4-14",
      "Q2-14"
    ],
    "relatedCaseId": "CASE-01"
  },
  {
    "id": "TOPIC-SOLUTION-ARCHITECTURE",
    "title": "Phân tích Kiến trúc Giải pháp & Tích hợp API (Sync vs Async)",
    "category": "Phân tích & thiết kế giải pháp",
    "summary": "Tư duy kiến trúc hệ thống dành cho BA: Giao tiếp đồng bộ RESTful API, bất đồng bộ Message Queue và Webhook.",
    "keywords": [
      "kiến trúc giải pháp",
      "solution architecture",
      "api integration",
      "đồng bộ",
      "bất đồng bộ",
      "sync async",
      "message queue",
      "webhook",
      "microservices"
    ],
    "sources": [
      {
        "bookId": "babok-v3",
        "chapter": "Chương 7 · Task 7.5 Define Design Options & Góc nhìn 11.3 IT",
        "page": 162,
        "notes": "Lựa chọn phương án công nghệ, giao tiếp phân tán và khả năng mở rộng."
      },
      {
        "bookId": "bcs-ba-3rd",
        "chapter": "Chương 8 · Defining the Solution (Business Architecture)",
        "page": 228,
        "notes": "Kết nối kiến trúc nghiệp vụ với các khối công nghệ giải pháp."
      },
      {
        "bookId": "100-days-ba",
        "chapter": "DAY 12, DAY 38 & DAY 62",
        "page": 26,
        "notes": "Hiểu cách hệ thống vận hành là nền tảng quan trọng nhất để BA trưởng thành và tự tin nói chuyện với Tech Lead."
      }
    ],
    "perspectiveComparison": "BABOK xem xét kiến trúc ở tầng phân tích Trade-off chi phí vs giá trị; BCS định nghĩa cấu trúc tầng Business Architecture; Nguyễn Bá Phú hướng dẫn BA đọc hiểu định dạng JSON, phân biệt mã lỗi HTTP 4xx (lỗi client) vs 5xx (lỗi server) để không bắt bừa lỗi của dev.",
    "coreKnowledge": "\n      <h4>Phân biệt Tích hợp Đồng bộ và Bất đồng bộ</h4>\n      <ul>\n        <li><b>Đồng bộ (Synchronous - REST API / gRPC):</b> Hệ thống A gửi yêu cầu đến B và bị khóa lại (Blocking) chờ B xử lý xong trả lời. Dùng khi cần kết quả tức thời (ví dụ: xác thực mật khẩu, kiểm tra số dư). Nhược điểm: Nếu B chậm, A sẽ bị đơ theo.</li>\n        <li><b>Bất đồng bộ (Asynchronous - Message Queue Kafka / RabbitMQ):</b> Hệ thống A ném thông điệp vào hàng đợi rồi quay về làm việc khác ngay lập tức; B lấy thông điệp ra xử lý khi rảnh. Dùng khi tác vụ nặng, mất thời gian (ví dụ: xuất báo cáo Excel 100.000 dòng, gửi email hàng loạt).</li>\n      </ul>\n    ",
    "applicationSteps": "\n      <ol>\n        <li>Xác định yêu cầu SLA về thời gian phản hồi: Dưới 1 giây hay có thể chờ vài phút?</li>\n        <li>Vẽ sơ đồ trình tự Sequence Diagram thể hiện luồng giao tiếp giữa các thành phần.</li>\n        <li>Quy định rõ cấu trúc Request/Response JSON, mã trạng thái HTTP (200, 400, 404, 500) và cơ chế Retry khi mạng lỗi.</li>\n      </ol>\n    ",
    "scenarioExercise": {
      "context": "Hệ thống Quản lý Bán hàng cần đồng bộ dữ liệu hóa đơn xuất trong ngày sang Hệ thống Kế toán ERP cũ. Hệ thống kế toán rất chậm, mỗi hóa đơn mất 3 giây để lưu vào cơ sở dữ liệu. Nếu gửi đồng bộ lúc khách tính tiền tại quầy, thu ngân sẽ phải đợi 3 giây mỗi đơn.",
      "task": "Hãy đề xuất giải pháp kiến trúc tích hợp giữa máy POS bán hàng và hệ thống Kế toán ERP. Vẽ luồng hoạt động chính và cơ chế đảm bảo không mất hóa đơn nếu máy chủ kế toán bị sập.",
      "starterPrompt": "1. Lựa chọn cơ chế tích hợp (Sync hay Async? Vì sao?):\n2. Luồng xử lý tại quầy thu ngân (POS):\n3. Luồng xử lý ngầm (Background Job / Queue):\n4. Cơ chế dự phòng khi ERP sập:",
      "sampleSolution": "\n        <h4>Giải pháp Kiến trúc Bất đồng bộ qua Hàng đợi (Message Queue)</h4>\n        <ul>\n          <li><b>Cơ chế lựa chọn:</b> Bất đồng bộ (Asynchronous Integration via Message Queue) để loại bỏ độ trễ 3 giây tại quầy thanh toán.</li>\n          <li><b>Luồng tại POS:</b> Khi khách thanh toán xong, POS lưu hóa đơn vào CSDL cục bộ và đẩy 1 Event <code>InvoiceCreated</code> vào Message Queue (RabbitMQ), sau đó in bill cho khách ngay lập tức (dưới 300ms).</li>\n          <li><b>Luồng xử lý ngầm:</b> Một dịch vụ nền (Worker Service) lắng nghe Queue, lấy từng hóa đơn gửi sang ERP kế toán. Dù ERP mất 3 giây xử lý thì hàng đợi vẫn giữ thông điệp an toàn.</li>\n          <li><b>Cơ chế dự phòng khi ERP sập:</b> Sử dụng Dead Letter Queue (DLQ) kết hợp cơ chế Exponential Backoff Retry. Khi ERP sống lại, hệ thống tự động đẩy hóa đơn tồn đọng sang mà không làm gián đoạn việc bán hàng tại quầy.</li>\n        </ul>\n      ",
      "rubricCriteria": [
        "Đề xuất chính xác cơ chế Asynchronous / Message Queue",
        "Có giải pháp Dead Letter Queue hoặc Retry dự phòng chống mất dữ liệu"
      ]
    },
    "relatedQuizIds": [
      "Q4-01",
      "Q4-02",
      "Q4-06",
      "Q4-15"
    ],
    "relatedCaseId": "CASE-01"
  },
  {
    "id": "TOPIC-DATA-SQL-RECON",
    "title": "Dữ liệu & SQL Đối soát cho BA (Data Modeling, ERD & Reconciliation)",
    "category": "Dữ liệu & SQL",
    "summary": "Kỹ năng thiết kế lược đồ quan hệ thực thể ERD, viết câu lệnh SQL truy vấn và đối soát khớp số liệu kế toán.",
    "keywords": [
      "dữ liệu",
      "data model",
      "erd",
      "sql",
      "join",
      "left join",
      "group by",
      "having",
      "đối soát",
      "reconciliation",
      "khóa ngoại",
      "foreign key"
    ],
    "sources": [
      {
        "bookId": "babok-v3",
        "chapter": "Chương 10 · Kỹ thuật 10.14 Data Flow & 10.15 Data Modelling",
        "page": 268,
        "notes": "Mô hình hóa thực thể, thuộc tính và mối quan hệ quan trọng đối với tổ chức."
      },
      {
        "bookId": "100-days-ba",
        "chapter": "DAY 13, DAY 31 & DAY 57",
        "page": 28,
        "notes": "Làm sao để biết hệ thống cần lưu những thông tin gì? Xác định rõ Entity, Attribute và Ràng buộc toàn vẹn."
      }
    ],
    "perspectiveComparison": "BABOK định nghĩa mô hình dữ liệu ở cả 3 mức Conceptual, Logical, Physical; 100 Ngày BA hướng dẫn cách BA dùng câu lệnh SQL LEFT JOIN để tự mình kiểm chứng số liệu xem Dev có tính sai logic hay không thay vì tin lời Dev 100%.",
    "coreKnowledge": "\n      <h4>1. Các mối quan hệ cốt lõi trong ERD</h4>\n      <ul>\n        <li><b>1 - 1 (Một - Một):</b> Ví dụ 1 Người dùng có 1 Hồ sơ định danh eKYC.</li>\n        <li><b>1 - N (Một - Nhiều):</b> Ví dụ 1 Khách hàng có Nhiều Đơn hàng.</li>\n        <li><b>N - N (Nhiều - Nhiều):</b> Ví dụ 1 Đơn hàng có Nhiều Sản phẩm, 1 Sản phẩm nằm trong Nhiều Đơn hàng ➔ Bắt buộc phải có Bảng trung gian (Junction Table) <code>Order_Items</code>.</li>\n      </ul>\n      <h4>2. Logic SQL then chốt cho BA</h4>\n      <p><b>INNER JOIN:</b> Phép giao dữ liệu. <b>LEFT JOIN:</b> Giữ lại 100% bản ghi bảng bên trái (rất quan trọng khi tìm các đơn hàng chưa thanh toán hoặc khách hàng chưa mua hàng lần nào bằng điều kiện <code>WHERE right_table.id IS NULL</code>).</p>\n    ",
    "applicationSteps": "\n      <ol>\n        <li>Xác định các thực thể chính (Danh từ trong yêu cầu).</li>\n        <li>Vẽ lược đồ ERD với các khóa chính (PK) và khóa ngoại (FK).</li>\n        <li>Viết script đối soát (Data Reconciliation Script) so sánh tổng số tiền trên hệ thống giao dịch so với sổ cái tài chính cuối ngày.</li>\n      </ol>\n    ",
    "scenarioExercise": {
      "context": "Có 2 bảng dữ liệu: <code>Orders</code> (id, customer_id, order_date, total_amount, status) và <code>Customers</code> (id, full_name, city, created_at).",
      "task": "Viết câu truy vấn SQL tìm danh sách tất cả khách hàng ở thành phố \"Hà Nội\" nhưng CHƯA TỪNG đặt bất kỳ đơn hàng nào trong năm 2026.",
      "starterPrompt": "SELECT ...\nFROM Customers c\nLEFT JOIN Orders o ON ...\nWHERE ...",
      "sampleSolution": "\n        <h4>Câu lệnh SQL Truy vấn & Giải thích</h4>\n        <pre><code>SELECT \n    c.id AS customer_id,\n    c.full_name,\n    c.city\nFROM Customers c\nLEFT JOIN Orders o \n    ON c.id = o.customer_id \n    AND o.order_date >= '2026-01-01' \n    AND o.order_date <= '2026-12-31'\nWHERE c.city = 'Hà Nội'\n  AND o.id IS NULL;\n</code></pre>\n        <h5>Giải thích kỹ thuật:</h5>\n        <p>Sử dụng <b>LEFT JOIN</b> với bảng Orders theo điều kiện năm 2026. Những khách hàng chưa từng phát sinh đơn hàng sẽ có các trường dữ liệu bên bảng Orders nhận giá trị <b>NULL</b>. Mệnh đề <code>WHERE o.id IS NULL</code> sẽ lọc chính xác nhóm khách hàng này.</p>\n      ",
      "rubricCriteria": [
        "Sử dụng đúng LEFT JOIN kết hợp điều kiện IS NULL",
        "Lọc đúng thành phố Hà Nội và khoảng thời gian năm 2026"
      ]
    },
    "relatedQuizIds": [
      "Q5-01",
      "Q5-02",
      "Q5-06",
      "Q8-18"
    ],
    "relatedCaseId": "CASE-02"
  },
  {
    "id": "TOPIC-UAT-VERIFICATION",
    "title": "Thiết kế Kịch bản UAT, Phân tích Biên (BVA) & Ký duyệt Nghiệm thu Có điều kiện",
    "category": "Testing & UAT",
    "summary": "Quy trình tổ chức nghiệm thu chấp nhận người dùng UAT, phân định Defect vs CR và xử lý áp lực ký bàn giao.",
    "keywords": [
      "uat",
      "kiểm thử nghiệm thu",
      "test case",
      "bva",
      "giá trị biên",
      "equivalence partitioning",
      "sign-off",
      "conditional sign-off",
      "defect vs cr"
    ],
    "sources": [
      {
        "bookId": "babok-v3",
        "chapter": "Chương 7 · Task 7.2 Verify Requirements & Task 7.3 Validate Requirements",
        "page": 151,
        "notes": "Đảm bảo yêu cầu được thực hiện chuẩn xác và giải quyết đúng mục tiêu của người dùng."
      },
      {
        "bookId": "bcs-ba-3rd",
        "chapter": "Chương 5 · Investigation Techniques (Scenarios & Acceptance)",
        "page": 139,
        "notes": "Xây dựng kịch bản kiểm định nghiệp vụ người dùng cuối."
      },
      {
        "bookId": "100-days-ba",
        "chapter": "DAY 1, DAY 16 & DAY 70",
        "page": 4,
        "notes": "Release không phải điểm kết thúc mà là lúc BA chứng minh giá trị: 5 việc BA phải làm ngay sau khi Go-Live."
      }
    ],
    "perspectiveComparison": "BABOK v3 phân định rõ Verification (làm đúng quy cách) vs Validation (làm đúng thứ khách cần); 100 Ngày BA cung cấp cẩm nang thực chiến: xử lý thế nào khi người dùng nghiệp vụ lười test và đổ dồn áp lực nghiệm thu lên vai BA.",
    "coreKnowledge": "\n      <h4>1. Phân định Defect (Lỗi) và Change Request (Yêu cầu thay đổi) trong UAT</h4>\n      <ul>\n        <li><b>Defect (Bug):</b> Phần mềm chạy sai lệch so với tài liệu đặc tả SRS/AC đã thống nhất trước đó ➔ Đội Dev có trách nhiệm sửa chữa miễn phí.</li>\n        <li><b>Change Request (CR):</b> Nhu cầu mới phát sinh ngoài tài liệu đặc tả đã ký kết, hoặc người dùng muốn đổi logic giao diện khác với thỏa thuận ➔ Phải đánh giá chi phí, thời gian và thương lượng kế hoạch bổ sung.</li>\n      </ul>\n      <h4>2. Ký nghiệm thu có điều kiện (Conditional Sign-off)</h4>\n      <p>Khi đến hạn Go-live nhưng còn tồn tại lỗi Minor không ảnh hưởng luồng chính, BA lập biên bản nghiệm thu có điều kiện kèm Workaround và cam kết SLA Hotfix để vừa kịp tiến độ kinh doanh vừa kiểm soát rủi ro.</p>\n    ",
    "applicationSteps": "\n      <ol>\n        <li>Tổ chức Guided UAT Workshop có phân vai và dữ liệu mẫu rõ ràng.</li>\n        <li>Áp dụng Phân tích giá trị biên BVA để thiết kế test case mép.</li>\n        <li>Phân loại Defect Triage hàng ngày: Blocker, Critical, Major, Minor.</li>\n        <li>Lập biên bản Sign-off có phụ lục Known Issues & Workarounds.</li>\n      </ol>\n    ",
    "scenarioExercise": {
      "context": "Còn 1 ngày trước thời điểm Go-Live, hệ thống còn 1 lỗi: Chức năng xuất báo cáo định kỳ tổng kết doanh thu lúc nửa đêm bị chậm 40 phút, nhưng các chức năng bán hàng và quét mã vạch đều mượt mà 100%. Sếp kinh doanh ép BA phải ký nghiệm thu vô điều kiện để khai trương.",
      "task": "Là BA, bạn có ký vô điều kiện không? Hãy soạn thảo nội dung Biên bản nghiệm thu có điều kiện (Conditional Sign-off) bao gồm giải pháp tạm thời (Workaround) và cam kết sửa lỗi.",
      "starterPrompt": "Quyết định ký (Có/Không vô điều kiện):\nLý do:\nNội dung Biên bản nghiệm thu có điều kiện:\n- Lỗi tồn đọng:\n- Quy trình xử lý tạm thời (Workaround):\n- Cam kết phát hành bản vá (Hotfix SLA):",
      "sampleSolution": "\n        <h4>Biên bản Nghiệm thu Có Điều kiện (Conditional Sign-off)</h4>\n        <p><b>Quyết định:</b> Từ chối ký vô điều kiện. Chấp thuận ký <b>Nghiệm thu có điều kiện (Conditional Acceptance)</b> có sự phê duyệt đồng thuận của Ban Điều hành.</p>\n        <h5>Nội dung biên bản:</h5>\n        <ul>\n          <li><b>Lỗi tồn đọng ghi nhận:</b> Bug #DEF-204 - Báo cáo tổng kết doanh thu đêm lúc 23h59 bị timeout kéo dài 40 phút. Mức độ ảnh hưởng: Không ảnh hưởng đến các giao dịch bán hàng trực tiếp của khách hàng ban ngày.</li>\n          <li><b>Quy trình thao tác tạm thời (SOP Workaround):</b> Phân công nhân viên trực vận hành chạy script truy vấn bù lúc 01h00 sáng để xuất dữ liệu gửi sang bộ phận kế toán trước 07h00 sáng mỗi ngày.</li>\n          <li><b>Cam kết Hotfix SLA:</b> Đội ngũ Kỹ thuật tối ưu hóa chỉ mục Index SQL và phát hành bản vá Production Hotfix v1.0.1 trong vòng 48 giờ sau Go-live (trước 23h59 ngày thứ Ba).</li>\n        </ul>\n      ",
      "rubricCriteria": [
        "Kiên quyết từ chối ký vô điều kiện",
        "Xây dựng giải pháp Workaround khả thi và có thời hạn cam kết Hotfix SLA rõ ràng"
      ]
    },
    "relatedQuizIds": [
      "Q8-02",
      "Q8-03",
      "Q8-06",
      "Q8-14",
      "Q8-17"
    ],
    "relatedCaseId": "CASE-01"
  },
  {
    "id": "TOPIC-ELICITATION-TECH",
    "title": "Kỹ thuật Khai thác & Phỏng vấn Yêu cầu Chuyên sâu",
    "category": "Khai thác yêu cầu",
    "summary": "Nghệ thuật chuẩn bị câu hỏi phỏng vấn, điều phối hội thảo requirements workshop và lắng nghe chủ động.",
    "keywords": [
      "khai thác yêu cầu",
      "elicitation",
      "interview",
      "phỏng vấn",
      "workshop",
      "observation",
      "quan sát",
      "open ended question",
      "câu hỏi mở"
    ],
    "sources": [
      {
        "bookId": "babok-v3",
        "chapter": "Chương 4 · Elicitation and Collaboration & Kỹ thuật 10.25 Interviews",
        "page": 63,
        "notes": "Quy trình chuẩn bị, tiến hành, xác nhận và truyền thông kết quả khai thác yêu cầu."
      },
      {
        "bookId": "bcs-ba-3rd",
        "chapter": "Chương 5 · Investigation Techniques",
        "page": 121,
        "notes": "Bộ kỹ thuật điều tra: Phỏng vấn, Quan sát (Shadowing), Hội thảo và Điều tra định lượng."
      },
      {
        "bookId": "100-days-ba",
        "chapter": "DAY 14, DAY 21 & DAY 35",
        "page": 30,
        "notes": "Bí quyết đặt câu hỏi: Đừng bao giờ hỏi \"Khách muốn phần mềm làm gì?\", hãy hỏi \"Hiện tại anh chị đang gặp khó khăn gì nhất?\"."
      }
    ],
    "perspectiveComparison": "BABOK v3 quy định các bước khai thác có kiểm chứng (Confirm Elicitation Results); BCS phân tích chi tiết ưu nhược điểm của từng phương pháp điều tra; 100 Ngày BA nhấn mạnh việc ghi âm/ghi chú có cấu trúc và gửi xác nhận ngay trong 24 giờ.",
    "coreKnowledge": "\n      <h4>1. Các kỹ thuật khai thác yêu cầu chủ đạo</h4>\n      <ul>\n        <li><b>Phỏng vấn (Interviews):</b> Đào sâu góc nhìn cá nhân của từng chuyên gia nghiệp vụ. Phù hợp khi tìm hiểu chi tiết nghiệp vụ chuyên biệt.</li>\n        <li><b>Hội thảo yêu cầu (Workshops):</b> Tập hợp các bên liên quan cùng thảo luận để tìm tiếng nói chung và giải quyết xung đột nhanh chóng.</li>\n        <li><b>Quan sát (Observation / Shadowing):</b> Trực tiếp đi thực tế để xem người dùng thao tác ngoài đời, phát hiện các tác vụ ngầm mà phỏng vấn bỏ sót.</li>\n      </ul>\n      <h4>2. Nghệ thuật sử dụng Câu hỏi Mở vs Câu hỏi Đóng</h4>\n      <p>Câu hỏi mở (What, How, Why) dùng ở giai đoạn đầu để mở rộng tư duy và tìm hiểu bối cảnh; câu hỏi đóng (Yes/No, Chọn A hay B) dùng ở giai đoạn cuối để chốt hạ quyết định.</p>\n    ",
    "applicationSteps": "\n      <ol>\n        <li>Nghiên cứu tài liệu hiện hành trước buổi phỏng vấn (Desk research).</li>\n        <li>Lập danh sách câu hỏi theo cấu trúc phễu (Từ tổng quan đến chi tiết).</li>\n        <li>Tiến hành phỏng vấn kết hợp lắng nghe tích cực và diễn giải lại (Paraphrasing).</li>\n        <li>Gửi biên bản xác nhận kết quả (Meeting Minutes) trong vòng 24 giờ.</li>\n      </ol>\n    ",
    "scenarioExercise": {
      "context": "Bạn được giao nhiệm vụ nâng cấp hệ thống Quản lý Tour du lịch cho một công ty lữ hành. Giám đốc Kinh doanh phàn nàn: \"Quy trình hiện tại chậm quá, khách hàng bỏ sang đối thủ hết rồi!\".",
      "task": "Hãy chuẩn bị 4 câu hỏi phỏng vấn Giám đốc Kinh doanh để bóc tách vấn đề gốc rễ theo kỹ thuật 5 Whys và phân tích nguyên nhân.",
      "starterPrompt": "Câu hỏi 1 (Khai thác bối cảnh):\nCâu hỏi 2 (Lượng hóa vấn đề):\nCâu hỏi 3 (Khám phá điểm nghẽn quy trình):\nCâu hỏi 4 (Kỳ vọng giải pháp):",
      "sampleSolution": "\n        <h4>Bộ câu hỏi Phỏng vấn Đào sâu Nguyên nhân Gốc rễ</h4>\n        <ol>\n          <li><b>Câu hỏi 1 (Bối cảnh):</b> \"Anh/chị có thể chia sẻ cụ thể một trường hợp gần đây nhất mà khách hàng quyết định hủy tour và sang đối thủ vì lý do thời gian phản hồi không?\"</li>\n          <li><b>Câu hỏi 2 (Lượng hóa):</b> \"Hiện tại từ lúc khách hàng gửi yêu cầu tư vấn đến lúc nhân viên gửi lại báo giá tour chi tiết mất trung bình bao nhiêu lâu? Tỷ lệ khách hàng rơi rụng (Drop-off) ước tính là bao nhiêu %?\"</li>\n          <li><b>Câu hỏi 3 (Điểm nghẽn):</b> \"Trong quy trình báo giá hiện tại, bước nào đang ngốn nhiều thời gian nhất? (Ví dụ: chờ khách sạn xác nhận phòng, tính toán giá vé máy bay hay chờ sếp duyệt chiết khấu?)\"</li>\n          <li><b>Câu hỏi 4 (Kỳ vọng giá trị):</b> \"Nếu hệ thống mới có thể tự động sinh báo giá theo gói tiêu chuẩn trong vòng 5 phút, điều đó có giúp nhân viên chốt deal tốt hơn không hay khách hàng còn đòi hỏi sự tùy biến linh hoạt nào khác?\"</li>\n        </ol>\n      ",
      "rubricCriteria": [
        "Tránh câu hỏi sáo rỗng \"anh muốn phần mềm như thế nào\"",
        "Tập trung lượng hóa nỗi đau và bóc tách từng khâu trong quy trình vận hành"
      ]
    },
    "relatedQuizIds": [
      "Q1-01",
      "Q1-02",
      "Q1-06",
      "Q9-03"
    ],
    "relatedCaseId": "CASE-03"
  },
  {
    "id": "TOPIC-AGILE-USER-STORY",
    "title": "User Story & Quản lý Backlog trong Agile/Scrum (INVEST & Story Splitting)",
    "category": "Agile & Scrum",
    "summary": "Cách viết User Story chuẩn mực theo mẫu, áp dụng tiêu chí INVEST và kỹ thuật phân tách lát cắt dọc (Vertical Slicing).",
    "keywords": [
      "user story",
      "invest",
      "story splitting",
      "phân rã story",
      "backlog refinement",
      "dor",
      "dod",
      "sprint planning",
      "scrum"
    ],
    "sources": [
      {
        "bookId": "babok-v3",
        "chapter": "Chương 10 · Kỹ thuật 10.48 User Stories & Góc nhìn 11.1 Agile",
        "page": 369,
        "notes": "Cấu trúc User Story, 3C (Card, Conversation, Confirmation) và tiêu chí chất lượng."
      },
      {
        "bookId": "100-days-ba",
        "chapter": "DAY 10, DAY 26 & DAY 48",
        "page": 22,
        "notes": "Tách Story như thế nào để Dev không kêu trời và bàn giao được giá trị thực tế sau mỗi Sprint."
      }
    ],
    "perspectiveComparison": "BABOK xem User Story là phương tiện chuyển tải yêu cầu linh hoạt; 100 Ngày BA nhấn mạnh việc BA không được cắt ngang Story theo tầng kỹ thuật (DB/BE/FE) mà bắt buộc phải cắt dọc (Vertical Slicing) để có thể demo phần mềm chạy được.",
    "coreKnowledge": "\n      <h4>1. Tiêu chí INVEST cho User Story</h4>\n      <ul>\n        <li><b>I - Independent (Độc lập):</b> Giảm thiểu sự phụ thuộc giữa các stories để dễ dàng lập kế hoạch.</li>\n        <li><b>N - Negotiable (Thương lượng được):</b> Story là lời mời bắt đầu cuộc trò chuyện chứ không phải hợp đồng đóng băng.</li>\n        <li><b>V - Valuable (Có giá trị):</b> Mang lại giá trị hữu hình quan sát được cho người dùng hoặc doanh nghiệp.</li>\n        <li><b>E - Estimable (Ước lượng được):</b> Đội Dev hiểu rõ yêu cầu để ước lượng Story Points.</li>\n        <li><b>S - Small (Đủ nhỏ gọn):</b> Vừa vặn để hoàn thành trong 1 Sprint.</li>\n        <li><b>T - Testable (Kiểm thử được):</b> Có tiêu chí nghiệm thu AC rõ ràng để QA kiểm tra.</li>\n      </ul>\n    ",
    "applicationSteps": "\n      <ol>\n        <li>Viết User Story theo mẫu: <i>Là [Vai trò người dùng], Tôi muốn [Hành động], Để [Lợi ích mang lại]</i>.</li>\n        <li>Nếu Story quá lớn (Epic > 13 points), áp dụng các kỹ thuật tách: Tách theo bước quy trình (Workflow steps), tách theo quy tắc nghiệp vụ (Simple vs Complex rules), hoặc tách Happy path vs Edge cases.</li>\n        <li>Đảm bảo mỗi lát cắt đều chạm từ Giao diện ➔ API ➔ Cơ sở dữ liệu (Vertical Slice).</li>\n      </ol>\n    ",
    "scenarioExercise": {
      "context": "Một User Story lớn: \"Khách hàng mở tài khoản ngân hàng số và hoàn tất định danh eKYC trực tuyến bằng quét CCCD gắn chip và nhận diện khuôn mặt sinh trắc học\" được Dev chấm 21 Story Points vì quá phức tạp.",
      "task": "Hãy áp dụng kỹ thuật Vertical Story Splitting để phân rã Story trên thành 3 User Stories nhỏ hơn vừa vặn cho các Sprint 2 tuần.",
      "starterPrompt": "Story 1 (Cốt lõi - Happy path cơ bản):\nAs a ... I want ... So that ...\n\nStory 2 (Nâng cao - Tích hợp OCR & eKYC):\nAs a ... I want ... So that ...\n\nStory 3 (Xử lý Ngoại lệ & Đối soát):\nAs a ... I want ... So that ...",
      "sampleSolution": "\n        <h4>Phân rã User Story theo Lát cắt Dọc (Vertical Slicing)</h4>\n        <ol>\n          <li><b>Story 1 (Đăng ký nhanh & Tạo tài khoản cơ bản - 3 points):</b>\n            <br><i>As a</i> Khách hàng mới, <i>I want</i> Đăng ký tài khoản bằng Số điện thoại và mã OTP, <i>So that</i> Tôi có thể đăng nhập ngay vào ứng dụng và khám phá các sản phẩm tài chính.</li>\n          <li><b>Story 2 (Định danh eKYC luồng chuẩn - 8 points):</b>\n            <br><i>As a</i> Khách hàng đã có tài khoản, <i>I want</i> Chụp 2 mặt CCCD và quét khuôn mặt theo hướng dẫn, <i>So that</i> Tôi được nâng cấp hạn mức giao dịch lên 20 triệu/ngày mà không cần ra quầy.</li>\n          <li><b>Story 3 (Xử lý Ngoại lệ & Chuyển luồng xác thực thủ công - 5 points):</b>\n            <br><i>As a</i> Khách hàng chụp ảnh bị mờ hoặc không nhận diện được khuôn mặt, <i>I want</i> Hệ thống gửi hồ sơ sang Chuyên viên kiểm duyệt hậu kiểm trong 15 phút, <i>So that</i> Tôi không bị từ chối oan và vẫn mở được tài khoản.</li>\n        </ol>\n      ",
      "rubricCriteria": [
        "Mỗi Story sau khi tách đều có thể demo độc lập và mang lại giá trị",
        "Tuân thủ mẫu As a / I want / So that"
      ]
    },
    "relatedQuizIds": [
      "Q6-03",
      "Q6-04",
      "Q6-08",
      "Q6-18"
    ],
    "relatedCaseId": "CASE-02"
  },
  {
    "id": "TOPIC-UX-PRODUCT-DISCOVERY",
    "title": "Tư duy Trải nghiệm Người dùng (UX) & Khám phá Sản phẩm (Progressive Disclosure)",
    "category": "UX & Product Thinking",
    "summary": "Áp dụng các định luật tâm lý học nhận thức, 10 nguyên tắc Heuristics và kỹ thuật phân tầng thông tin Progressive Disclosure.",
    "keywords": [
      "ux",
      "product thinking",
      "progressive disclosure",
      "jakob nielsen",
      "heuristics",
      "persona",
      "empathy map",
      "usability",
      "dark pattern"
    ],
    "sources": [
      {
        "bookId": "babok-v3",
        "chapter": "Chương 10 · Kỹ thuật 10.36 Prototyping & 10.37 Reviews",
        "page": 339,
        "notes": "Sử dụng bản mẫu trực quan để khai phá nhu cầu trải nghiệm người dùng."
      },
      {
        "bookId": "bcs-ba-3rd",
        "chapter": "Chương 5 · Investigation Techniques (User Analysis & Prototyping)",
        "page": 143,
        "notes": "Phân tích Persona, hành trình người dùng và thử nghiệm nguyên mẫu."
      },
      {
        "bookId": "100-days-ba",
        "chapter": "DAY 50, DAY 68 & DAY 82",
        "page": 116,
        "notes": "UX là việc của ai? BA viết requirement thiếu tư duy trải nghiệm thì sản phẩm sẽ thành thảm họa."
      }
    ],
    "perspectiveComparison": "BABOK xem UX là công cụ xác thực yêu cầu; BCS gắn UX với năng lực phân tích nhân tố con người (Human factors); 100 Ngày BA nhấn mạnh việc BA phải đứng về phía người dùng, loại bỏ các Dark Pattern gây phiền hà.",
    "coreKnowledge": "\n      <h4>1. Định luật Hick & Progressive Disclosure</h4>\n      <p><b>Định luật Hick:</b> Càng hiển thị nhiều lựa chọn trên màn hình thì thời gian người dùng quyết định càng lâu và tỷ lệ bỏ cuộc càng lớn. Giải pháp: Áp dụng <b>Progressive Disclosure (Tiết lộ thông tin lũy tiến)</b> — chỉ hiển thị các thông tin thiết yếu nhất lúc đầu, các tùy chọn nâng cao chỉ xuất hiện khi người dùng chủ động yêu cầu.</p>\n      <h4>2. Nguyên tắc Nhận biết trạng thái hệ thống (Jakob Nielsen)</h4>\n      <p>Luôn cung cấp phản hồi trực quan kịp thời (Loading skeleton, Progress bar, Success badge) để người dùng an tâm rằng thao tác của họ đang được thực hiện.</p>\n    ",
    "applicationSteps": "\n      <ol>\n        <li>Vẽ Bản đồ Hành trình Người dùng (User Journey Map) nhận diện các điểm đau (Pain points).</li>\n        <li>Tối giản hóa biểu mẫu nhập liệu: Bỏ bớt các trường không bắt buộc, tự động điền (Auto-complete).</li>\n        <li>Kiểm tra tính dễ sử dụng (Usability Testing) trên người dùng thực tế trước khi chốt thiết kế.</li>\n      </ol>\n    ",
    "scenarioExercise": {
      "context": "Ứng dụng Đặt xe công nghệ ghi nhận 40% người dùng hủy cuốc ở màn hình xác nhận thanh toán vì màn hình quá rối rắm (hiển thị cùng lúc 15 phương thức thanh toán, 6 loại voucher, mã thuế công ty và ghi chú tài xế).",
      "task": "Áp dụng nguyên lý Progressive Disclosure để tái thiết kế luồng thông tin trên màn hình thanh toán.",
      "starterPrompt": "Tầng hiển thị mặc định (Default Screen):\n\nTầng mở rộng khi có nhu cầu (Details on Demand):\n\nCách giải quyết phương thức thanh toán:",
      "sampleSolution": "\n        <h4>Tái cấu trúc Màn hình Thanh toán theo Progressive Disclosure</h4>\n        <ul>\n          <li><b>Tầng hiển thị mặc định (Zero-clutter):</b> Chỉ hiển thị 3 thông tin sống còn: 1. Tổng tiền cước (in to rõ); 2. Phương thức thanh toán được chọn gần nhất (ví dụ Ví điện tử A); 3. Voucher tốt nhất đã được tự động áp dụng (Auto-apply Best Deal); kèm nút bấm lớn \"ĐẶT XE NGAY\".</li>\n          <li><b>Tầng mở rộng (Details on Demand):</b>\n            <ul>\n              <li>Nhấp vào ô Phương thức thanh toán ➔ Mở Bottom-sheet hiển thị các lựa chọn khác.</li>\n              <li>Chuyển mục \"Xuất hóa đơn công ty\" thành 1 toggle tắt/bật nhỏ; chỉ khi bật lên mới hiện form nhập Mã số thuế.</li>\n              <li>Mục \"Ghi chú tài xế\" để dạng link text \"Thêm ghi chú cho tài xế\", bấm vào mới mở popup nhập text.</li>\n            </ul>\n          </li>\n        </ul>\n      ",
      "rubricCriteria": [
        "Giảm tải nhận thức rõ rệt ở màn hình mặc định",
        "Ứng dụng đúng kỹ thuật Progressive Disclosure cho các thông tin phụ"
      ]
    },
    "relatedQuizIds": [
      "Q7-02",
      "Q7-05",
      "Q7-09",
      "Q7-16"
    ],
    "relatedCaseId": "CASE-04"
  },
  {
    "id": "TOPIC-BEHAVIORAL-INTERVIEW",
    "title": "Kỹ năng Xử lý Xung đột, Đàm phán & Phỏng vấn Hành vi STAR",
    "category": "Kỹ năng & Phỏng vấn BA",
    "summary": "Phương pháp trả lời phỏng vấn theo mô hình STAR, nghệ thuật đàm phán phạm vi và giải quyết bất đồng quan điểm giữa các Sếp.",
    "keywords": [
      "kỹ năng ba",
      "phỏng vấn",
      "star method",
      "đàm phán",
      "xung đột",
      "conflict resolution",
      "active listening",
      "paraphrasing",
      "đạo đức nghề nghiệp"
    ],
    "sources": [
      {
        "bookId": "babok-v3",
        "chapter": "Chương 9 · Underlying Competencies (Interaction Skills & Conflict Management)",
        "page": 197,
        "notes": "Kỹ năng giao tiếp, đàm phán, giải quyết xung đột và tư duy phân tích."
      },
      {
        "bookId": "bcs-ba-3rd",
        "chapter": "Chương 2 · The Competencies of a Business Analyst",
        "page": 56,
        "notes": "Phẩm chất cá nhân: Thấu cảm, giao tiếp chuyên nghiệp và khả năng tác động không cần quyền lực."
      },
      {
        "bookId": "100-days-ba",
        "chapter": "DAY 7, DAY 8, DAY 20 & DAY 100",
        "page": 16,
        "notes": "Bài học 10 năm làm nghề: Đạo đức nghề nghiệp, sự trung thực với dữ liệu và cách đứng vững trước áp lực."
      }
    ],
    "perspectiveComparison": "BABOK quy chuẩn các năng lực hành vi cần đạt của một chuyên gia phân tích; BCS phân loại kỹ năng mềm theo chuẩn SFIA; Nguyễn Bá Phú mang lại các bài học xương máu: cách nói lời từ chối khéo léo với khách hàng mà không làm mất lòng sếp.",
    "coreKnowledge": "\n      <h4>1. Cấu trúc Mô hình STAR trong Phỏng vấn BA</h4>\n      <ul>\n        <li><b>S - Situation (Tình huống):</b> Bối cảnh dự án, quy mô và mâu thuẫn cốt lõi đang gặp phải.</li>\n        <li><b>T - Task (Thử thách / Trách nhiệm):</b> Vai trò cụ thể của BA và nhiệm vụ cần giải quyết.</li>\n        <li><b>A - Action (Hành động):</b> Các phương pháp, kỹ thuật phân tích và bước đi cụ thể mà BẢN THÂN bạn đã thực hiện.</li>\n        <li><b>R - Result (Kết quả):</b> Kết quả định lượng đạt được, sự đồng thuận của các bên và bài học rút ra.</li>\n      </ul>\n      <h4>2. Kỹ thuật Đàm phán \"Yes, and...\" thay vì \"No\"</h4>\n      <p>Khi khách hàng đòi tính năng vô lý sát ngày Go-live, thay vì nói \"Không làm được\", hãy nói: \"Ý tưởng của anh/chị rất hay để tối ưu chuyển đổi, VÀ để kịp ngày khai trương hệ thống, chúng ta nên đưa nó làm hạng mục trọng điểm của Giai đoạn 2 ngay tuần sau Go-live\".</p>\n    ",
    "applicationSteps": "\n      <ol>\n        <li>Lắng nghe tích cực (Active Listening) và Diễn giải lại (Paraphrasing) quan điểm của đối phương.</li>\n        <li>Tìm điểm chung về mục tiêu kinh doanh (Shared Goals).</li>\n        <li>Sử dụng dữ liệu khách quan để chứng minh thay vì tranh cãi cảm tính.</li>\n        <li>Đề xuất giải pháp phân tầng (Tiered options) có tính thỏa hiệp win-win.</li>\n      </ol>\n    ",
    "scenarioExercise": {
      "context": "Phỏng vấn vị trí Senior BA. Người phỏng vấn hỏi: \"Hãy kể lại một lần bạn phải giải quyết xung đột gay gắt giữa Giám đốc Kinh doanh (đòi làm nhanh tính năng mới) và Giám đốc Công nghệ (cảnh báo hệ thống đang quá tải nợ kỹ thuật và đòi hoãn để tái cấu trúc database)\".",
      "task": "Soạn thảo câu trả lời theo chuẩn mô hình STAR.",
      "starterPrompt": "Situation:\nTask:\nAction:\nResult & Lesson:",
      "sampleSolution": "\n        <h4>Câu trả lời Phỏng vấn Chuẩn STAR</h4>\n        <ul>\n          <li><b>Situation:</b> Tại dự án Sàn Bất động sản trực tuyến, Giám đốc Kinh doanh muốn tung ngay tính năng Livestream bán nhà để kịp chiến dịch Tết, trong khi CTO kiên quyết từ chối vì cơ sở dữ liệu đang có nợ kỹ thuật nặng, thời gian tải trang đã chạm mức 8 giây. Hai bên cãi nhau gay gắt và dự án bị đóng băng suốt 2 tuần.</li>\n          <li><b>Task:</b> Với tư cách Lead BA, trách nhiệm của tôi là phá vỡ thế bế tắc, tìm ra giải pháp dung hòa lợi ích thương mại và độ ổn định kỹ thuật.</li>\n          <li><b>Action:</b>\n            <ol>\n              <li>Tôi tổ chức 1 buổi họp Triage riêng biệt, không để hai bên tranh cãi cảm tính mà dùng số liệu: Tôi lượng hóa việc tải trang 8s làm mất 30% khách hàng tiềm năng, đồng thời Livestream dịp Tết có thể mang lại 5 tỷ doanh thu.</li>\n              <li>Tôi đề xuất giải pháp kỹ thuật Hybrid: Tách tính năng Livestream sang sử dụng dịch vụ đám mây của bên thứ 3 (SaaS Video Streaming API) để không gây tải lên DB nội bộ hiện tại; đồng thời trích 20% công suất Sprint để Dev tối ưu chỉ mục database song song.</li>\n            </ol>\n          </li>\n          <li><b>Result:</b> Cả hai sếp đều đồng thuận phương án. Tính năng Livestream ra mắt đúng hạn vào dịp Tết đạt 20.000 lượt xem trực tiếp; đồng thời thời gian tải trang được kéo giảm từ 8s xuống 2.2s. Bài học rút ra: BA xuất sắc là người chuyển hóa mâu thuẫn chính trị nội bộ thành bài toán kinh tế khách quan.</li>\n        </ul>\n      ",
      "rubricCriteria": [
        "Trình bày chuẩn xác 4 bước S-T-A-R",
        "Làm nổi bật hành động dẫn dắt và giải pháp win-win có dữ liệu minh chứng"
      ]
    },
    "relatedQuizIds": [
      "Q9-02",
      "Q9-05",
      "Q9-06",
      "Q9-14",
      "Q9-17"
    ],
    "relatedCaseId": "CASE-01"
  },
  {
    "id": "TOPIC-BA-PLANNING-GOVERNANCE",
    "title": "Lập Kế hoạch & Quản trị Tiếp cận Phân tích Nghiệp vụ (BA Planning & Governance)",
    "category": "Nền tảng BA",
    "summary": "Phương pháp lựa chọn mô hình triển khai (Predictive vs Adaptive), lập kế hoạch tương tác và quy trình kiểm soát thay đổi.",
    "keywords": [
      "kế hoạch ba",
      "ba planning",
      "governance",
      "quản trị",
      "approach",
      "stakeholder engagement",
      "performance improvement",
      "kế hoạch phân tích"
    ],
    "sources": [
      {
        "bookId": "babok-v3",
        "chapter": "Chương 3 · Tasks 3.1 - 3.5 BA Planning and Monitoring",
        "page": 31,
        "notes": "Toàn bộ 5 task lập kế hoạch tiếp cận, quản trị, thông tin và cải tiến hiệu suất BA."
      },
      {
        "bookId": "bcs-ba-3rd",
        "chapter": "Chương 4 · The Business Analysis Process Model",
        "page": 102,
        "notes": "Cách tiếp cận giải quyết vấn đề và mô hình quy trình BA chuyên nghiệp."
      },
      {
        "bookId": "100-days-ba",
        "chapter": "DAY 4, DAY 18 & DAY 32",
        "page": 10,
        "notes": "Xử lý yêu cầu gấp mà không vỡ tiến độ: Gán trách nhiệm rõ ràng ngay từ khâu lập kế hoạch."
      }
    ],
    "perspectiveComparison": "BABOK v3 quy định khung quản trị chặt chẽ (Change Control Board); BCS tiếp cận theo góc nhìn chu trình giải quyết vấn đề của tư vấn viên; 100 Ngày BA nhấn mạnh việc thỏa thuận trước \"luật chơi\" với khách hàng để tránh bị xoay như chong chóng.",
    "coreKnowledge": "\n      <h4>5 Task Lập kế hoạch theo BABOK v3</h4>\n      <ul>\n        <li><b>3.1 Plan BA Approach:</b> Chọn Thác nước (khi yêu cầu rõ ràng, rủi ro thấp) hay Agile (khi độ mơ hồ cao, cần học hỏi nhanh).</li>\n        <li><b>3.2 Plan Stakeholder Engagement:</b> Phân tích ai cần tham gia vào khâu nào.</li>\n        <li><b>3.3 Plan BA Governance:</b> Ai có quyền chốt yêu cầu? Quy trình phê duyệt thay đổi (Change Request) diễn ra thế nào?</li>\n        <li><b>3.4 Plan BA Information Management:</b> Tài liệu lưu ở đâu? Quản lý phiên bản và truy vết ra sao?</li>\n        <li><b>3.5 Identify BA Performance Improvements:</b> Đo lường và cải tiến chất lượng phân tích.</li>\n      </ul>\n    ",
    "applicationSteps": "\n      <ol>\n        <li>Đánh giá độ không chắc chắn của dự án để chọn tiếp cận Predictive hay Adaptive.</li>\n        <li>Thống nhất quy trình kiểm soát thay đổi (Change Control Process) với Product Owner.</li>\n        <li>Thiết lập Definition of Ready (DoR) và Definition of Done (DoD) cho các tài liệu đặc tả.</li>\n      </ol>\n    ",
    "scenarioExercise": {
      "context": "Dự án Nâng cấp Hệ thống Bệnh viện điện tử có nhiều đơn vị tham gia: Khối Bác sĩ, Khối Điều dưỡng, Khối Tài chính, và Nhà thầu phần mềm ngoài. Không ai chịu trách nhiệm chốt yêu cầu cuối cùng, mỗi tuần một Trưởng khoa lại yêu cầu sửa đổi form bệnh án khác nhau.",
      "task": "Hãy thiết lập Kế hoạch Quản trị Yêu cầu (Governance Plan) bao gồm: Hội đồng phê duyệt, Quy trình tiếp nhận yêu cầu thay đổi và tiêu chuẩn ký duyệt.",
      "starterPrompt": "1. Cơ cấu Hội đồng phê duyệt (Change Control Board):\n2. Quy trình kiểm soát thay đổi 4 bước:\n3. Tiêu chuẩn ký chốt yêu cầu (Sign-off Criteria):",
      "sampleSolution": "\n        <h4>Kế hoạch Quản trị Yêu cầu (BA Governance Plan)</h4>\n        <ul>\n          <li><b>Cơ cấu Hội đồng Phê duyệt (CCB):</b> Gồm 3 thành viên chính thức nắm quyền quyết định cuối cùng: 1. Phó Giám đốc Bệnh viện (Chủ tịch CCB - đại diện nghiệp vụ y tế); 2. Giám đốc CNTT (chịu trách nhiệm kiến trúc kỹ thuật); 3. Lead BA (thư ký thẩm định tác động). Các Trưởng khoa chỉ đóng vai trò Tham vấn (Consulted), không được tự ý yêu cầu đổi code.</li>\n          <li><b>Quy trình Kiểm soát Thay đổi 4 bước:</b>\n            <ol>\n              <li><i>Bước 1 - Tiếp nhận:</i> Mọi yêu cầu thay đổi phải được điền vào biểu mẫu Change Request Form tiêu chuẩn.</li>\n              <li><i>Bước 2 - Phân tích tác động:</i> BA và Tech Lead đánh giá tác động chi phí/tiến độ trong vòng 3 ngày làm việc.</li>\n              <li><i>Bước 3 - Thẩm định & Biểu quyết:</i> CCB họp định kỳ thứ Hai hàng tuần để quyết định Duyệt, Từ chối hoặc Hoãn.</li>\n              <li><i>Bước 4 - Cập nhật baseline:</i> Nếu duyệt, BA cập nhật tài liệu đặc tả và đưa vào kế hoạch Sprint tới.</li>\n            </ol>\n          </li>\n          <li><b>Tiêu chuẩn ký chốt:</b> Yêu cầu chỉ được bắt đầu code khi có chữ ký số của Chủ tịch CCB và đáp ứng 100% Definition of Ready.</li>\n        </ul>\n      ",
      "rubricCriteria": [
        "Thiết lập được cơ cấu CCB rõ ràng",
        "Có quy trình kiểm soát thay đổi minh bạch theo chuẩn BABOK 3.3"
      ]
    },
    "relatedQuizIds": [
      "Q0-04",
      "Q0-05",
      "Q9-01"
    ],
    "relatedCaseId": "CASE-01"
  }
];
const bookCrossReference = [
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Chương 1",
    "itemTitle": "Introduction (Tổng quan về BABOK Guide v3)",
    "page": 11,
    "topic": "Nền tảng BA",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Chương 2",
    "itemTitle": "Business Analysis Key Concepts (Mô hình BACCM & Thuật ngữ)",
    "page": 21,
    "topic": "Nền tảng BA",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 3.1",
    "itemTitle": "3.1 Plan Business Analysis Approach",
    "page": 34,
    "topic": "Planning & Monitoring",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 3.2",
    "itemTitle": "3.2 Plan Stakeholder Engagement",
    "page": 41,
    "topic": "Planning & Monitoring",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 3.3",
    "itemTitle": "3.3 Plan Business Analysis Governance",
    "page": 47,
    "topic": "Planning & Monitoring",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 3.4",
    "itemTitle": "3.4 Plan Business Analysis Information Management",
    "page": 52,
    "topic": "Planning & Monitoring",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 3.5",
    "itemTitle": "3.5 Identify Business Analysis Performance Improvements",
    "page": 57,
    "topic": "Planning & Monitoring",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 4.1",
    "itemTitle": "4.1 Prepare for Elicitation",
    "page": 66,
    "topic": "Elicitation & Collaboration",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 4.2",
    "itemTitle": "4.2 Conduct Elicitation",
    "page": 71,
    "topic": "Elicitation & Collaboration",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 4.3",
    "itemTitle": "4.3 Confirm Elicitation Results",
    "page": 75,
    "topic": "Elicitation & Collaboration",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 4.4",
    "itemTitle": "4.4 Communicate Business Analysis Information",
    "page": 77,
    "topic": "Elicitation & Collaboration",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 4.5",
    "itemTitle": "4.5 Manage Stakeholder Collaboration",
    "page": 81,
    "topic": "Elicitation & Collaboration",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 5.1",
    "itemTitle": "5.1 Trace Requirements",
    "page": 89,
    "topic": "Requirements Life Cycle",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 5.2",
    "itemTitle": "5.2 Maintain Requirements",
    "page": 93,
    "topic": "Requirements Life Cycle",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 5.3",
    "itemTitle": "5.3 Prioritize Requirements",
    "page": 96,
    "topic": "Requirements Life Cycle",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 5.4",
    "itemTitle": "5.4 Assess Requirements Changes",
    "page": 101,
    "topic": "Requirements Life Cycle",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 5.5",
    "itemTitle": "5.5 Approve Requirements",
    "page": 105,
    "topic": "Requirements Life Cycle",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 6.1",
    "itemTitle": "6.1 Analyze Current State",
    "page": 113,
    "topic": "Strategy Analysis",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 6.2",
    "itemTitle": "6.2 Define Future State",
    "page": 120,
    "topic": "Strategy Analysis",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 6.3",
    "itemTitle": "6.3 Assess Risks",
    "page": 130,
    "topic": "Strategy Analysis",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 6.4",
    "itemTitle": "6.4 Define Change Strategy",
    "page": 134,
    "topic": "Strategy Analysis",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 7.1",
    "itemTitle": "7.1 Specify and Model Requirements",
    "page": 146,
    "topic": "Analysis & Design Definition",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 7.2",
    "itemTitle": "7.2 Verify Requirements",
    "page": 151,
    "topic": "Analysis & Design Definition",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 7.3",
    "itemTitle": "7.3 Validate Requirements",
    "page": 154,
    "topic": "Analysis & Design Definition",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 7.4",
    "itemTitle": "7.4 Define Requirements Architecture",
    "page": 158,
    "topic": "Analysis & Design Definition",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 7.5",
    "itemTitle": "7.5 Define Design Options",
    "page": 162,
    "topic": "Analysis & Design Definition",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 7.6",
    "itemTitle": "7.6 Analyze Potential Value and Recommend Solution",
    "page": 167,
    "topic": "Analysis & Design Definition",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 8.1",
    "itemTitle": "8.1 Measure Solution Performance",
    "page": 176,
    "topic": "Solution Evaluation",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 8.2",
    "itemTitle": "8.2 Analyze Performance Measures",
    "page": 180,
    "topic": "Solution Evaluation",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 8.3",
    "itemTitle": "8.3 Assess Solution Limitations",
    "page": 183,
    "topic": "Solution Evaluation",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 8.4",
    "itemTitle": "8.4 Assess Enterprise Limitations",
    "page": 187,
    "topic": "Solution Evaluation",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "babok-v3",
    "bookTitle": "BABOK Guide v3",
    "itemCode": "Task 8.5",
    "itemTitle": "8.5 Recommend Actions to Increase Solution Value",
    "page": 192,
    "topic": "Solution Evaluation",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "bcs-ba-3rd",
    "bookTitle": "Business Analysis 3rd Edition (BCS)",
    "itemCode": "Chương 1",
    "itemTitle": "What is Business Analysis? (Bản chất Nghề BA)",
    "page": 35,
    "topic": "Quy trình BA",
    "topicLessonId": "TOPIC-BACCM"
  },
  {
    "bookId": "bcs-ba-3rd",
    "bookTitle": "Business Analysis 3rd Edition (BCS)",
    "itemCode": "Chương 2",
    "itemTitle": "The Competencies of a Business Analyst (Khung Năng lực)",
    "page": 56,
    "topic": "Quy trình BA",
    "topicLessonId": "TOPIC-BACCM"
  },
  {
    "bookId": "bcs-ba-3rd",
    "bookTitle": "Business Analysis 3rd Edition (BCS)",
    "itemCode": "Chương 3",
    "itemTitle": "Strategy Analysis (Phân tích Chiến lược & Môi trường)",
    "page": 79,
    "topic": "Quy trình BA",
    "topicLessonId": "TOPIC-BACCM"
  },
  {
    "bookId": "bcs-ba-3rd",
    "bookTitle": "Business Analysis 3rd Edition (BCS)",
    "itemCode": "Chương 4",
    "itemTitle": "The Business Analysis Process Model (Mô hình Quy trình BA)",
    "page": 102,
    "topic": "Quy trình BA",
    "topicLessonId": "TOPIC-BACCM"
  },
  {
    "bookId": "bcs-ba-3rd",
    "bookTitle": "Business Analysis 3rd Edition (BCS)",
    "itemCode": "Chương 5",
    "itemTitle": "Investigation Techniques (Kỹ thuật Điều tra Hiện trạng)",
    "page": 121,
    "topic": "Quy trình BA",
    "topicLessonId": "TOPIC-BACCM"
  },
  {
    "bookId": "bcs-ba-3rd",
    "bookTitle": "Business Analysis 3rd Edition (BCS)",
    "itemCode": "Chương 6",
    "itemTitle": "Stakeholder Analysis and Management (Quản lý Stakeholder)",
    "page": 159,
    "topic": "Quy trình BA",
    "topicLessonId": "TOPIC-BACCM"
  },
  {
    "bookId": "bcs-ba-3rd",
    "bookTitle": "Business Analysis 3rd Edition (BCS)",
    "itemCode": "Chương 7",
    "itemTitle": "Modelling Business Processes (Mô hình hóa Quy trình)",
    "page": 186,
    "topic": "Quy trình BA",
    "topicLessonId": "TOPIC-BACCM"
  },
  {
    "bookId": "bcs-ba-3rd",
    "bookTitle": "Business Analysis 3rd Edition (BCS)",
    "itemCode": "Chương 8",
    "itemTitle": "Defining the Solution (Xác định Kiến trúc Giải pháp)",
    "page": 221,
    "topic": "Quy trình BA",
    "topicLessonId": "TOPIC-BACCM"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 1",
    "itemTitle": "BA NÊN LÀM GÌ - SAU KHI TÍNH NĂNG ĐƯỢC RELEASE?",
    "page": 4,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 2",
    "itemTitle": "BA KHÔNG TƯ DUY HỆ THỐNG = NGƯỜI XÂY - NHÀ KHÔNG CÓ BẢN VẼ",
    "page": 5,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 3",
    "itemTitle": "KỸ THUẬT BABOK GIÚP BẠN KHÔNG BỊ ĐỔ LỖI - KHI KHÁCH NÓI: \"TÔI CHƯA NÓI THẾ BAO GIỜ\"",
    "page": 8,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 4",
    "itemTitle": "KỸ THUẬT BABOK GIÚP BẠN XỬ LÝ - YÊU CẦU GẤP MÀ KHÔNG VỠ TIẾN ĐỘ",
    "page": 10,
    "topic": "Agile & Scrum",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 5",
    "itemTitle": "KỸ THUẬT BABOK GIÚP BA TƯ DUY LỖI – VIẾT - LOGIC CHẶT CHẼ, KHÔNG BỊ LỌT CASE",
    "page": 12,
    "topic": "Khai thác yêu cầu",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 6",
    "itemTitle": "Tôi không còn là người viết đặc tả từng dòng SRS. Tôi cũng không còn là người ngồi - da...",
    "page": 14,
    "topic": "Đặc tả & Quản lý yêu cầu",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 7",
    "itemTitle": "Bạn từng đề xuất một tính năng, tự tin lắm, tâm huyết lắm. Nhưng sau khi release: - Khô...",
    "page": 16,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 8",
    "itemTitle": "“Tôi làm BA 4 năm rồi, sao vẫn chưa được tin tưởng giao vai trò cao hơn?” Không hiếm - ...",
    "page": 18,
    "topic": "Khai thác yêu cầu",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 9",
    "itemTitle": "Bạn từng bị sếp mắng… chỉ vì làm đúng yêu cầu chưa? - Tôi từng dính cú đó. Làm feature ...",
    "page": 20,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 10",
    "itemTitle": "Câu chuyện có thật: Tuần trước, một bạn BA nhắn tôi, giọng đầy bức xúc: “Em nghỉ - phép...",
    "page": 22,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 11",
    "itemTitle": "Mất 2 phút đọc – nhưng nếu bạn là BA mới, đây có thể là 2 phút đáng nhất tuần này. - Sế...",
    "page": 24,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 12",
    "itemTitle": "Câu hỏi tưởng cũ, nhưng mỗi lần nghe lại là một lần muốn kể chuyện - Chiều qua, mình có...",
    "page": 26,
    "topic": "Agile & Scrum",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 13",
    "itemTitle": "Một câu hỏi rất quen khi làm với các bạn BA mới vào nghề: - “Làm sao để biết hệ thống c...",
    "page": 28,
    "topic": "Dữ liệu & SQL",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 14",
    "itemTitle": "Không phải bug, không phải logic sai, không phải thiếu tài liệu. - Nhiều pha toang tron...",
    "page": 30,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 15",
    "itemTitle": "Có những hôm đi làm sớm như hôm nay, ngồi ung dung làm cốc trà đá, mình tự hỏi: - Hồi m...",
    "page": 32,
    "topic": "Đặc tả & Quản lý yêu cầu",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 16",
    "itemTitle": "“Flow này rõ ràng mà, test gì nữa?” - Tôi một BA trẩu tre đã từng chém thế. Và sáng hôm...",
    "page": 34,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 17",
    "itemTitle": "Lúc mới vào, tôi nghĩ: “Đây là nơi nghiêm túc làm sản phẩm.”. Team đông, vai trò rõ - r...",
    "page": 36,
    "topic": "Agile & Scrum",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 18",
    "itemTitle": "Cuối tuần rồi chắc thể nào cũng có team vừa retro xong - Một buổi Retro sprint. UAT gãy...",
    "page": 39,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 19",
    "itemTitle": "📅 Thứ Hai – ngày đầu tuần, mở máy đã thấy 6 cái meeting chờ sẵn - Sáng 8h30: họp kick-off",
    "page": 41,
    "topic": "UX & Product Thinking",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 20",
    "itemTitle": "🏢 Chuyện có thật ở một công ty bán trà sữa... - Công ty XYZ có hệ thống TeaBoss đã chạy...",
    "page": 43,
    "topic": "Phân tích & thiết kế giải pháp",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 21",
    "itemTitle": "“Dự án này không có PM đâu – em follow luôn cả team nhé.” - Không phải câu nói lịch sử,...",
    "page": 45,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 22",
    "itemTitle": "🧃 3 lời hứa quen thuộc trước khi dự án mệt mỏi: - → “Anh thấy field này nhỏ thôi, thêm ...",
    "page": 47,
    "topic": "Dữ liệu & SQL",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 23",
    "itemTitle": "💥 Chuyện thật: - Một hệ thống đặt lịch sửa xe. BA vẽ flow đơn giản: khách đặt → garage ...",
    "page": 49,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 24",
    "itemTitle": "Nghĩ làm BA trung lập là an toàn? Sai rồi. Trong môi trường bè phái đấu đá, BA không - ...",
    "page": 52,
    "topic": "UX & Product Thinking",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 25",
    "itemTitle": "🌟 Những thứ nguy hiểm nhất thường không nằm trên giấy - Không phải yêu cầu nào cũng đượ...",
    "page": 55,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 26",
    "itemTitle": "Vừa vào công ty. Mở mail chưa đầy 10 phút, sếp đã nhắn: - \"Dự án này cần gấp BA, em joi...",
    "page": 57,
    "topic": "Phân tích & thiết kế giải pháp",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 27",
    "itemTitle": "Vẫn đi họp đều. Vẫn viết tài liệu đầy đủ. DEV hiểu. QA test pass.Feedback không tệ. - M...",
    "page": 60,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 28",
    "itemTitle": "Kỹ thuật không sai. Nhưng nếu chọn sai kỹ thuật, sai người, sai thời điểm – bạn không -...",
    "page": 62,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 29",
    "itemTitle": "“Em làm theo yêu cầu mà!” - Câu nói tưởng vô hại… nhưng thực ra đang âm thầm giết chết ...",
    "page": 64,
    "topic": "Phân tích & thiết kế giải pháp",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 30",
    "itemTitle": "🕘 9h tối. Cả team DEV – QA – BA vẫn đang OT, căng mắt fix nốt bug cuối để kịp - Golive ...",
    "page": 67,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 31",
    "itemTitle": "Phòng họp hôm đó, tôi không nói thêm một từ nào. Sếp nhìn tôi, ánh mắt đanh lại: “Em - ...",
    "page": 69,
    "topic": "Khai thác yêu cầu",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 32",
    "itemTitle": "💥 Dự án không nổ vì bug. Nó rò rỉ từng chút vì những tín hiệu nhỏ bị BA bỏ qua. Một - s...",
    "page": 71,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 33",
    "itemTitle": "Feedback không phải là cú đấm nhưng phản ứng ngu sẽ khiến bạn knockout. Hôm đó, - trong...",
    "page": 75,
    "topic": "UX & Product Thinking",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 34",
    "itemTitle": "(Dành cho những BA Manager – khi thấy dự án vận hành mà vẫn không an lòng) - 🌙 Chủ Nhật...",
    "page": 77,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 35",
    "itemTitle": "🎯 Rất nhiều bạn BA nghĩ: - “Em viết đầy đủ flow rồi mà, sao hệ thống vẫn lỗi?”",
    "page": 78,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 36",
    "itemTitle": "“Em gửi task rõ ràng mà DEV vẫn làm sai.” - “DEV làm ẩu, không đọc SRS, em mệt mỏi sửa ...",
    "page": 80,
    "topic": "Đặc tả & Quản lý yêu cầu",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 37",
    "itemTitle": "🎯 Bối cảnh: - Kỳ review 6 tháng và một hệ thống được build đúng tới từng field. Công ty...",
    "page": 83,
    "topic": "Agile & Scrum",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 38",
    "itemTitle": "“Làm lại cái này cho anh nhé.” - “Đưa tính năng kia lên gấp, mấy cái khác tính sau.”",
    "page": 86,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 39",
    "itemTitle": "📍 Câu chuyện thật – Khởi đầu của sự mất niềm tin - Ở công ty cũ, tôi từng lead một team...",
    "page": 88,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 40",
    "itemTitle": "“Em làm nhanh cái hệ thống ABC nhé.” - Và thế là BA bắt đầu đi phân tích hệ thống – như...",
    "page": 91,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 41",
    "itemTitle": "🎯 Bối cảnh: - Mỗi khi khách mua hàng tại cửa hàng → điểm sẽ được cộng vào tài khoản loy...",
    "page": 95,
    "topic": "Dữ liệu & SQL",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 42",
    "itemTitle": "🎯 Bối cảnh: Module xin nghỉ – chấm công trong hệ thống nội bộ - Junior BA đề xuất một l...",
    "page": 97,
    "topic": "Kỹ năng & Phỏng vấn BA",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 43",
    "itemTitle": "Nếu bạn vẫn nghĩ BA đi phân tích yêu cầu là để làm tính năng, thì bạn đang hiểu - sai b...",
    "page": 99,
    "topic": "UX & Product Thinking",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 44",
    "itemTitle": "Ở một công ty nọ, có những dự án bắt đầu bằng cụm từ “rất gấp”, nhưng rồi trôi vào im -...",
    "page": 101,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 45",
    "itemTitle": "Bạn vừa được “đẩy” vào một dự án đang chạy. Không onboarding, không hệ thống tài - liệu...",
    "page": 103,
    "topic": "UX & Product Thinking",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 46",
    "itemTitle": "Có những dự án không thiếu người, không thiếu tiền. Sếp cũng rất tâm huyết, luôn theo -...",
    "page": 105,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 47",
    "itemTitle": "👂 Một ngày bình thường và một loạt từ ngữ kỳ lạ ập đến - DEV bảo: “Tôi đang checkout nh...",
    "page": 107,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 48",
    "itemTitle": "Một trong những thời điểm thể hiện rõ đẳng cấp của BA – không nằm ở lúc viết - requirem...",
    "page": 110,
    "topic": "UX & Product Thinking",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 49",
    "itemTitle": "“Em đang làm dự án có tích hợp kế toán anh ạ, mà đọc tới chỗ kế toán em muốn nghỉ - việc.",
    "page": 113,
    "topic": "Phân tích & thiết kế giải pháp",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 50",
    "itemTitle": "“UX là việc của designer chứ liên quan gì đến BA?” - Câu hỏi mà mình từng nghĩ trong nă...",
    "page": 116,
    "topic": "UX & Product Thinking",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 51",
    "itemTitle": "Nhiều tính năng bắt đầu bằng một câu rất quen: - “Làm nhanh để kịp demo chiều nay nhé.”",
    "page": 119,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 52",
    "itemTitle": "🍻 Mở đầu từ quán bia hơi Hà Nội: - Bạn làm phần mềm SaaS cho chuỗi quán bia.",
    "page": 121,
    "topic": "Phân tích & thiết kế giải pháp",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 53",
    "itemTitle": "Bạn vừa họp xong với khách hàng. Hỏi nhanh: “Nếu có bộ lọc thời gian thì tiện hơn - khô...",
    "page": 124,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 54",
    "itemTitle": "Sau 1 năm ở vai trò quản lý, tôi hiểu: - Làm sếp là một danh xưng",
    "page": 127,
    "topic": "Nền tảng BA",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 55",
    "itemTitle": "Nghe chữ “gấp”, BA non tay sẽ lao vào làm ngay. BA cứng thì tỉnh lại, nhìn bản đồ dự - ...",
    "page": 129,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 56",
    "itemTitle": "h50 chiều, thứ Sáu. Tin nhắn hiện lên trên màn hình: “Sếp ơi, em mệt rồi. Em thấy - mìn...",
    "page": 131,
    "topic": "UX & Product Thinking",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 57",
    "itemTitle": "“Cùng 4-5 năm kinh nghiệm, có người là senior, có người mãi là mid. Khác biệt không - n...",
    "page": 133,
    "topic": "Kỹ năng & Phỏng vấn BA",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 58",
    "itemTitle": "Trước khi đăng bài này, tôi đã sửa – rồi xoá – rồi viết lại… không dưới 5 lần. - Vì đây...",
    "page": 137,
    "topic": "Nền tảng BA",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 59",
    "itemTitle": "Một người lãnh đạo không chết chìm vì dự án khó, mà chết vì không còn nổi một tiếng - đ...",
    "page": 140,
    "topic": "Khai thác yêu cầu",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 60",
    "itemTitle": "⚠️ Lưu ý: Công thức trong bài không phải chuẩn tuyệt đối. Các hệ số như độ phức tạp, - ...",
    "page": 142,
    "topic": "Kỹ năng & Phỏng vấn BA",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 61",
    "itemTitle": "🪄 Một tối Chủ Nhật, Hà Nội mưa rào… - Trời mưa. Giá đặt xe tăng vọt. Tôi không đi đâu c...",
    "page": 145,
    "topic": "Phân tích & thiết kế giải pháp",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 62",
    "itemTitle": "“Làm cái hệ thống đặt bàn cho nhà hàng đi – cho chuyên nghiệp hơn, đỡ lộn xộn. Anh - cầ...",
    "page": 148,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 63",
    "itemTitle": "Một đội ngũ kỹ thuật – sản phẩm – thiết kế đã ngồi cùng nhau suốt nhiều tuần. - Họ đi n...",
    "page": 153,
    "topic": "UX & Product Thinking",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 64",
    "itemTitle": "“Mỗi sprint phải đẩy 20 UC, chốt 4 SRS, tạo 5 ‘idea cải tiến’, tham dự 4 cuộc họp, xử l...",
    "page": 155,
    "topic": "Agile & Scrum",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 65",
    "itemTitle": "Hôm nay không viết chia sẻ kiến thức, mà chuyển sang chuyên mục “Anh ơi…” – nơi BA - gử...",
    "page": 157,
    "topic": "Agile & Scrum",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 66",
    "itemTitle": "Trong giai đoạn pre-seed đến series A, có rất nhiều startup gọi được vốn. Điều đó - thư...",
    "page": 160,
    "topic": "Phân tích & thiết kế giải pháp",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 67",
    "itemTitle": "🚀 CI/CD là gì? - CI (Continuous Integration – tích hợp liên tục): Mỗi lần Dev (develope...",
    "page": 162,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 68",
    "itemTitle": "Mấy hôm nay inbox đổ về nhiều, đủ thể loại tình huống dở khóc dở cười. Và câu hỏi - đượ...",
    "page": 165,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 69",
    "itemTitle": "Không phải lúc nào người dùng cũng rảnh rỗi, ngồi ngay ngắn, hai tay đặt đúng vị trí, -...",
    "page": 167,
    "topic": "UX & Product Thinking",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 70",
    "itemTitle": "❌ “Lỗi này hình như mình gặp hoài rồi mà?” - ❌ “Cái bug này từng fix mà?”",
    "page": 169,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 71",
    "itemTitle": "“Em không nghỉ vì lương. Em nghỉ vì mỗi sáng mở Jira ra, em không biết mình đang - làm ...",
    "page": 171,
    "topic": "Agile & Scrum",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 72",
    "itemTitle": "Có những buổi họp mà bạn cảm nhận rõ ràng: - DEV thì lặng thinh.",
    "page": 173,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 73",
    "itemTitle": "Ở giải marathon, người ta không chạy bằng máu lửa. Họ chạy bằng pace và bằng tim. - Có ...",
    "page": 175,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 74",
    "itemTitle": "Đã gần một tuần rồi tôi không viết. Không phải vì bí ý tưởng – mà vì viết rồi lại xoá. ...",
    "page": 178,
    "topic": "Phân tích & thiết kế giải pháp",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 75",
    "itemTitle": "“Anh tưởng tài liệu xong là dev hiểu được hết chứ?” - “Chị thấy tính năng đơn giản thôi...",
    "page": 181,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 76",
    "itemTitle": "Trong một hệ thống bất kỳ, dù nghiệp vụ có mượt đến đâu, chỉ cần một thông số kỹ - thuậ...",
    "page": 184,
    "topic": "UX & Product Thinking",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 77",
    "itemTitle": "App mobile thì cũng là hệ thống thôi mà – logic giống web, flow giống nhau, chỉ khác - ...",
    "page": 187,
    "topic": "UX & Product Thinking",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 78",
    "itemTitle": "Ở một công ty nọ, có một bạn nhân sự trẻ không giỏi xuất chúng, cũng chẳng phải key - m...",
    "page": 190,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 79",
    "itemTitle": "📌 Nhiều BA viết flow cực kỳ đẹp, rule đầy đủ, bước rõ ràng, UX hợp lý. Nhưng khi lên - ...",
    "page": 192,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 80",
    "itemTitle": "💥 “Sao lại báo lỗi? Em nhập đúng rồi mà!” - 💥 “Anh fix rồi mà vẫn lỗi. À, lần này lỗi k...",
    "page": 194,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 81",
    "itemTitle": "👨‍💻 Một buổi tối, sau giờ làm, một bạn BA 3 năm kinh nghiệm nhắn tin cho tôi: - “Anh Ph...",
    "page": 196,
    "topic": "Agile & Scrum",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 82",
    "itemTitle": "Một buổi tối bình thường, tôi gọi một chuyến xe máy công nghệ. Khi vào app, tôi thấy - ...",
    "page": 198,
    "topic": "Phân tích & thiết kế giải pháp",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 83",
    "itemTitle": "Tôi xem lại Tây Du Ký lần thứ n, và lần này, tôi không còn thấy yêu quái. Tôi thấy… một...",
    "page": 200,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 84",
    "itemTitle": "🧨 “Em ơi, từ hôm nay anh Trung không phụ trách nữa nhé. Chị Hà sẽ làm việc với em. - Mì...",
    "page": 204,
    "topic": "Nền tảng BA",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 85",
    "itemTitle": "“Cái này BA lo luôn nhé, chứ giờ ai làm?” - “Ơ, em là BA mà? Em hiểu nhất còn gì?”",
    "page": 206,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 86",
    "itemTitle": "Bạn được giao viết lại tài liệu cho một tính năng đã chạy 3 năm, không tài liệu gốc, de...",
    "page": 208,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 87",
    "itemTitle": "Một leader giỏi không phải là người góp ý đúng mà là người khiến người khác vẫn muốn - ...",
    "page": 212,
    "topic": "Khai thác yêu cầu",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 88",
    "itemTitle": "Một người “nói nhiều hơn làm” trong team không chỉ là chuyện cá nhân. - Nó là bài test ...",
    "page": 214,
    "topic": "Đặc tả & Quản lý yêu cầu",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 89",
    "itemTitle": "Xem xong Mad Unicorn, tôi không nghĩ về startup. Tôi nghĩ về nghề BA. Nghĩ về những - l...",
    "page": 216,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 90",
    "itemTitle": "Bạn là BA Lead? Tức là bạn vừa làm nghề vừa phải giữ team, giữ chất lượng, giữ - deadli...",
    "page": 218,
    "topic": "Phân tích & thiết kế giải pháp",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 91",
    "itemTitle": "Phiên dịch tập 1] - 🎧 Nghe: “Tuỳ em”",
    "page": 220,
    "topic": "Mô hình hóa quy trình",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 92",
    "itemTitle": "Ngày ngựa mất, cả làng đến chia buồn. Ông lão chỉ cười, không trách cũng không tiếc. - ...",
    "page": 221,
    "topic": "UX & Product Thinking",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 93",
    "itemTitle": "📌 Làm BA lâu năm, tưởng là sẽ vững hơn, nhiều kinh nghiệm hơn, nhưng thật ra lại dễ - c...",
    "page": 223,
    "topic": "Testing & UAT",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 94",
    "itemTitle": "Định ém mấy bài hay hay để viết vào ebook nhưng hôm nay nhá hàng tí vì thấy nhiều - cas...",
    "page": 225,
    "topic": "Đặc tả & Quản lý yêu cầu",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 95",
    "itemTitle": "Trong một buổi khảo sát, khách nói: “Dữ liệu bao gồm nhưng không giới hạn ở…” - Hoặc: “...",
    "page": 227,
    "topic": "Dữ liệu & SQL",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 96",
    "itemTitle": "Làm BA mà ôm nỗi sợ sai thì thua ngay từ vạch xuất phát. Fail Fast không phải triết lý ...",
    "page": 229,
    "topic": "Khai thác yêu cầu",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 97",
    "itemTitle": "Một BA Leader giỏi không chỉ viết requirement, mà còn biết giữ nhịp năng lượng cho cả -...",
    "page": 231,
    "topic": "UX & Product Thinking",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 98",
    "itemTitle": "“Em viết requirement: nhập chữ thì hệ thống gợi ý ra vài từ. Dev hỏi: gợi ý kiểu gì? - ...",
    "page": 233,
    "topic": "UX & Product Thinking",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 99",
    "itemTitle": "Có một kiểu “ngụy biện” rất phổ biến trong nghề BA: - “Em làm xong 10 use case rồi.”",
    "page": 235,
    "topic": "Agile & Scrum",
    "topicLessonId": "TOPIC-TRACEABILITY"
  },
  {
    "bookId": "100-days-ba",
    "bookTitle": "100 ngày viết về nghề BA",
    "itemCode": "DAY 100",
    "itemTitle": "Sau 10 năm làm BA, tôi không giữ được nhiều… - Không giữ được hết những người từng đồng...",
    "page": 236,
    "topic": "Khai thác yêu cầu",
    "topicLessonId": "TOPIC-TRACEABILITY"
  }
];
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { booksMeta, bookBabokTasks, bookBcsChapters, bookDays100, bookTopicLessons, bookCrossReference };
}
