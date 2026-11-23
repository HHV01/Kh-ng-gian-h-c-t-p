/**
 * build-reader-data.cjs
 * Compiles full TOC and reader content for the 3 BA books:
 * 1. BABOK Guide v3 - IIBA (514 pages)
 * 2. BCS Business Analysis (3rd Edition) - split_1 (235 pages)
 * 3. 100 ngày viết về nghề BA - Nguyễn Bá Phú (237 pages)
 */

const fs = require('fs');
const path = require('path');

console.log('Generating complete Books Data for Reader...');

// Load existing 100 days
const daysData = JSON.parse(fs.readFileSync(path.join(__dirname, 'extracted_days_final.json'), 'utf-8'));

// Load BABOK outlines
const babokOutlines = JSON.parse(fs.readFileSync(path.join(__dirname, 'babok_outlines.json'), 'utf-8'));

// Load BCS outlines
const bcsOutlines = JSON.parse(fs.readFileSync(path.join(__dirname, 'bcs_outlines.json'), 'utf-8'));

// Load topic definitions
const topicDefinitions = require('./topics-definitions.cjs');

// 1. Build BABOK Items
// BABOK PDF page offset: Print page 1 = PDF page 17
const babokItems = [
  // Chapter 1: Introduction
  {
    id: 'ch-1',
    code: 'Chương 1',
    title: 'Introduction (Tổng quan về BABOK Guide v3)',
    category: 'Nền tảng BA',
    pdfPage: 11,
    printPage: 1,
    available: true,
    summary: 'Mục đích của BABOK Guide, định nghĩa nghề Business Analysis, ai là một BA và cấu trúc tổng thể của chuẩn quốc tế.',
    contentHtml: `
      <h2>Chương 1: Introduction (Tổng quan BABOK® Guide v3)</h2>
      <div class="reader-meta-box">
        <span>📘 <b>Nguồn:</b> A Guide to the Business Analysis Body of Knowledge® (BABOK® Guide v3)</span>
        <span>📄 <b>Trang PDF:</b> 11 - 20 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 1 - 10</span>
      </div>
      <h3>1. Mục đích của BABOK® Guide</h3>
      <p>BABOK® Guide là chuẩn mực toàn cầu được phát triển bởi Viện Phân tích Nghiệp vụ Quốc tế (IIBA®). Tài liệu này cung cấp một bộ khung thống nhất về các khái niệm, kiến thức, nhiệm vụ và kỹ thuật cần thiết để thực hành phân tích nghiệp vụ chuyên nghiệp.</p>
      
      <h3>2. Định nghĩa Business Analysis & Vai trò BA</h3>
      <p><b>Business Analysis (Phân tích nghiệp vụ):</b> Là việc tạo điều kiện cho sự thay đổi trong một tổ chức bằng cách xác định nhu cầu và khuyến nghị các giải pháp mang lại giá trị cho các bên liên quan.</p>
      <p><b>Business Analyst (BA):</b> Bất kỳ ai thực hiện các nhiệm vụ phân tích nghiệp vụ, bất kể chức danh công việc của họ là gì (Product Owner, Systems Analyst, Process Consultant...).</p>

      <h3>3. Cấu trúc của BABOK® Guide v3</h3>
      <ul>
        <li><b>Business Analysis Key Concepts (BACCM™):</b> 6 khái niệm nền tảng: Change, Need, Solution, Stakeholder, Value, Context.</li>
        <li><b>6 Vùng tri thức (Knowledge Areas):</b> Lập kế hoạch, Khai thác, Quản lý vòng đời yêu cầu, Phân tích chiến lược, Phân tích yêu cầu & Thiết kế, và Đánh giá giải pháp.</li>
        <li><b>Năng lực nền tảng (Underlying Competencies):</b> Tư duy phân tích, giao tiếp, kiến thức kinh doanh, công cụ và công nghệ.</li>
        <li><b>50 Kỹ thuật (Techniques):</b> Các công cụ thực hành cụ thể từ Phỏng vấn, BPMN, User Story đến Ma trận truy vết.</li>
        <li><b>5 Góc nhìn chuyên môn (Perspectives):</b> Agile, Business Intelligence, Information Technology, Business Architecture, Business Process Management.</li>
      </ul>
    `
  },
  // Chapter 2: Key Concepts
  {
    id: 'ch-2',
    code: 'Chương 2',
    title: 'Business Analysis Key Concepts (Mô hình BACCM & Thuật ngữ)',
    category: 'Nền tảng BA',
    pdfPage: 21,
    printPage: 11,
    available: true,
    summary: '6 Khái niệm Cốt lõi của BACCM, phân loại yêu cầu (Business, Stakeholder, Solution, Transition) và danh mục các nhóm Stakeholder.',
    contentHtml: `
      <h2>Chương 2: Business Analysis Key Concepts & Mô hình BACCM™</h2>
      <div class="reader-meta-box">
        <span>📘 <b>Nguồn:</b> BABOK® Guide v3 - IIBA</span>
        <span>📄 <b>Trang PDF:</b> 21 - 30 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 11 - 20</span>
      </div>
      <h3>1. Mô hình BACCM™ (Business Analysis Core Concept Model)</h3>
      <p>Mô hình BACCM bao gồm 6 khái niệm cốt lõi có mối quan hệ tương hỗ chặt chẽ, áp dụng cho bất kỳ quy mô phân tích nào:</p>
      <ol>
        <li><b>Change (Sự thay đổi):</b> Hành động chuyển dịch tổ chức để đáp ứng nhu cầu.</li>
        <li><b>Need (Nhu cầu):</b> Vấn đề nhức nhối hoặc cơ hội kinh doanh cần giải quyết.</li>
        <li><b>Solution (Giải pháp):</b> Cách thức cụ thể đáp ứng nhu cầu trong một bối cảnh.</li>
        <li><b>Stakeholder (Bên liên quan):</b> Cá nhân hoặc nhóm chịu ảnh hưởng bởi sự thay đổi.</li>
        <li><b>Value (Giá trị):</b> Lợi ích hoặc sự hữu dụng mang lại cho các bên liên quan.</li>
        <li><b>Context (Bối cảnh):</b> Môi trường văn hóa, pháp lý, công nghệ bao quanh sự thay đổi.</li>
      </ol>

      <h3>2. Phân tầng Yêu cầu trong BABOK®</h3>
      <ul>
        <li><b>Business Requirements:</b> Mục tiêu kinh doanh cấp cao của tổ chức.</li>
        <li><b>Stakeholder Requirements:</b> Nhu cầu cụ thể của từng nhóm người dùng.</li>
        <li><b>Solution Requirements:</b> Đặc tả hành vi (Functional) và tiêu chuẩn chất lượng (Non-Functional) của hệ thống.</li>
        <li><b>Transition Requirements:</b> Điều kiện chuyển giao tạm thời (Data Migration, Đào tạo người dùng).</li>
      </ul>
    `
  }
];

// Add 30 BABOK Tasks
const babokTaskDefs = [
  // KA 3
  { code: '3.1', name: 'Plan Business Analysis Approach', pdfPage: 34, printPage: 24, ka: 'Planning & Monitoring', purpose: 'Lựa chọn phương pháp tiếp cận BA (Predictive vs Adaptive).', inputs: ['Needs', 'Enterprise Environmental Factors'], outputs: ['Business Analysis Approach'] },
  { code: '3.2', name: 'Plan Stakeholder Engagement', pdfPage: 41, printPage: 31, ka: 'Planning & Monitoring', purpose: 'Xác định các bên liên quan và kế hoạch cộng tác tối ưu.', inputs: ['Needs', 'Business Analysis Approach'], outputs: ['Stakeholder Engagement Approach'] },
  { code: '3.3', name: 'Plan Business Analysis Governance', pdfPage: 47, printPage: 37, ka: 'Planning & Monitoring', purpose: 'Quy định thẩm quyền phê duyệt và quy trình kiểm soát thay đổi.', inputs: ['Business Analysis Approach'], outputs: ['Governance Approach'] },
  { code: '3.4', name: 'Plan Business Analysis Information Management', pdfPage: 52, printPage: 42, ka: 'Planning & Monitoring', purpose: 'Xây dựng cấu trúc lưu trữ và quy tắc truy vết yêu cầu.', inputs: ['Business Analysis Approach'], outputs: ['Information Management Approach'] },
  { code: '3.5', name: 'Identify Business Analysis Performance Improvements', pdfPage: 57, printPage: 47, ka: 'Planning & Monitoring', purpose: 'Đánh giá hiệu suất làm việc của BA và rút ra bài học cải tiến.', inputs: ['Business Analysis Approach', 'Performance Objectives'], outputs: ['Business Analysis Performance Assessment'] },

  // KA 4
  { code: '4.1', name: 'Prepare for Elicitation', pdfPage: 66, printPage: 56, ka: 'Elicitation & Collaboration', purpose: 'Chuẩn bị tài liệu, mục tiêu và kỹ thuật trước khi làm việc với Stakeholder.', inputs: ['Needs', 'Stakeholder Engagement Approach'], outputs: ['Elicitation Activity Plan'] },
  { code: '4.2', name: 'Conduct Elicitation', pdfPage: 71, printPage: 61, ka: 'Elicitation & Collaboration', purpose: 'Thực hiện phỏng vấn, workshop, quan sát để khám phá nhu cầu ẩn.', inputs: ['Elicitation Activity Plan'], outputs: ['Elicitation Results (Unconfirmed)'] },
  { code: '4.3', name: 'Confirm Elicitation Results', pdfPage: 75, printPage: 65, ka: 'Elicitation & Collaboration', purpose: 'Xác nhận thông tin thu thập được với các bên để đảm bảo không hiểu nhầm.', inputs: ['Elicitation Results (Unconfirmed)'], outputs: ['Elicitation Results (Confirmed)'] },
  { code: '4.4', name: 'Communicate Business Analysis Information', pdfPage: 77, printPage: 67, ka: 'Elicitation & Collaboration', purpose: 'Truyền đạt thông tin yêu cầu dưới dạng phù hợp với từng đối tượng.', inputs: ['Business Analysis Information'], outputs: ['Business Analysis Information (Communicated)'] },
  { code: '4.5', name: 'Manage Stakeholder Collaboration', pdfPage: 81, printPage: 71, ka: 'Elicitation & Collaboration', purpose: 'Duy trì sự hợp tác và đồng thuận tích cực trong suốt dự án.', inputs: ['Stakeholder Engagement Approach'], outputs: ['Stakeholder Engagement'] },

  // KA 5
  { code: '5.1', name: 'Trace Requirements', pdfPage: 89, printPage: 79, ka: 'Requirements Life Cycle', purpose: 'Thiết lập ma trận truy vết hai chiều (Forward & Backward Traceability).', inputs: ['Requirements', 'Information Management Approach'], outputs: ['Requirements (Traced)'] },
  { code: '5.2', name: 'Maintain Requirements', pdfPage: 93, printPage: 83, ka: 'Requirements Life Cycle', purpose: 'Duy trì tính chính xác và tái sử dụng của các yêu cầu và quy tắc nghiệp vụ.', inputs: ['Requirements'], outputs: ['Requirements (Maintained)'] },
  { code: '5.3', name: 'Prioritize Requirements', pdfPage: 96, printPage: 86, ka: 'Requirements Life Cycle', purpose: 'Ưu tiên yêu cầu theo giá trị, rủi ro và ràng buộc tài nguyên.', inputs: ['Requirements', 'Solution Scope'], outputs: ['Requirements (Prioritized)'] },
  { code: '5.4', name: 'Assess Requirements Changes', pdfPage: 101, printPage: 91, ka: 'Requirements Life Cycle', purpose: 'Đánh giá tác động toàn diện của đề xuất thay đổi trước khi quyết định.', inputs: ['Proposed Change', 'Requirements'], outputs: ['Requirements Change Assessment'] },
  { code: '5.5', name: 'Approve Requirements', pdfPage: 105, printPage: 95, ka: 'Requirements Life Cycle', purpose: 'Lấy phê duyệt chính thức (Sign-off) từ các bên có thẩm quyền.', inputs: ['Requirements', 'Governance Approach'], outputs: ['Requirements (Approved)'] },

  // KA 6
  { code: '6.1', name: 'Analyze Current State', pdfPage: 113, printPage: 103, ka: 'Strategy Analysis', purpose: 'Thấu hiểu hiện trạng quy trình, năng lực hiện tại và nỗi đau nghiệp vụ.', inputs: ['Needs'], outputs: ['Current State Description'] },
  { code: '6.2', name: 'Define Future State', pdfPage: 120, printPage: 110, ka: 'Strategy Analysis', purpose: 'Vẽ ra trạng thái tương lai mong muốn và các chỉ số đo lường thành công.', inputs: ['Business Requirements'], outputs: ['Future State Description'] },
  { code: '6.3', name: 'Assess Risks', pdfPage: 130, printPage: 120, ka: 'Strategy Analysis', purpose: 'Nhận diện rủi ro, đánh giá xác suất và mức độ tác động.', inputs: ['Business Objectives'], outputs: ['Risk Assessment'] },
  { code: '6.4', name: 'Define Change Strategy', pdfPage: 134, printPage: 124, ka: 'Strategy Analysis', purpose: 'Xác định chiến lược chuyển đổi và phân tích khoảng cách (Gap Analysis).', inputs: ['Current State', 'Future State'], outputs: ['Change Strategy'] },

  // KA 7
  { code: '7.1', name: 'Specify and Model Requirements', pdfPage: 146, printPage: 136, ka: 'Analysis & Design Definition', purpose: 'Mô hình hóa yêu cầu bằng sơ đồ BPMN, Use Case, ERD và bảng quyết định.', inputs: ['Elicitation Results (Confirmed)'], outputs: ['Requirements (Specified and Modelled)'] },
  { code: '7.2', name: 'Verify Requirements', pdfPage: 151, printPage: 141, ka: 'Analysis & Design Definition', purpose: 'Đảm bảo yêu cầu rõ ràng, nhất quán, không mơ hồ và kiểm thử được.', inputs: ['Requirements (Specified and Modelled)'], outputs: ['Requirements (Verified)'] },
  { code: '7.3', name: 'Validate Requirements', pdfPage: 154, printPage: 144, ka: 'Analysis & Design Definition', purpose: 'Xác nhận rằng yêu cầu trực tiếp phục vụ mục tiêu và giá trị doanh nghiệp.', inputs: ['Requirements (Specified and Modelled)'], outputs: ['Requirements (Validated)'] },
  { code: '7.4', name: 'Define Requirements Architecture', pdfPage: 158, printPage: 148, ka: 'Analysis & Design Definition', purpose: 'Cấu trúc hóa tập yêu cầu thành một kiến trúc logic thống nhất.', inputs: ['Requirements'], outputs: ['Requirements Architecture'] },
  { code: '7.5', name: 'Define Design Options', pdfPage: 162, printPage: 152, ka: 'Analysis & Design Definition', purpose: 'Định hình các phương án giải pháp (Build, Buy, Custom, SaaS).', inputs: ['Requirements Architecture'], outputs: ['Design Options'] },
  { code: '7.6', name: 'Analyze Potential Value and Recommend Solution', pdfPage: 167, printPage: 157, ka: 'Analysis & Design Definition', purpose: 'Đo lường ROI và khuyến nghị giải pháp tối ưu nhất cho doanh nghiệp.', inputs: ['Design Options', 'Potential Value'], outputs: ['Solution Recommendation'] },

  // KA 8
  { code: '8.1', name: 'Measure Solution Performance', pdfPage: 176, printPage: 166, ka: 'Solution Evaluation', purpose: 'Thu thập số liệu thực tế về hiệu quả hoạt động sau Go-Live.', inputs: ['Implemented Solution'], outputs: ['Solution Performance Measures'] },
  { code: '8.2', name: 'Analyze Performance Measures', pdfPage: 180, printPage: 170, ka: 'Solution Evaluation', purpose: 'Phân tích số liệu để phát hiện khoảng cách giữa kỳ vọng và thực tế.', inputs: ['Solution Performance Measures'], outputs: ['Solution Performance Analysis'] },
  { code: '8.3', name: 'Assess Solution Limitations', pdfPage: 183, printPage: 173, ka: 'Solution Evaluation', purpose: 'Xác định các lỗi hoặc hạn chế kỹ thuật nội tại của giải pháp.', inputs: ['Implemented Solution'], outputs: ['Solution Limitation'] },
  { code: '8.4', name: 'Assess Enterprise Limitations', pdfPage: 187, printPage: 177, ka: 'Solution Evaluation', purpose: 'Nhận diện rào cản tổ chức, văn hóa hoặc quy trình ảnh hưởng giá trị.', inputs: ['Current State Description'], outputs: ['Enterprise Limitation'] },
  { code: '8.5', name: 'Recommend Actions to Increase Solution Value', pdfPage: 192, printPage: 182, ka: 'Solution Evaluation', purpose: 'Đề xuất cải tiến và tối ưu hóa liên tục để gia tăng giá trị phần mềm.', inputs: ['Solution Limitation', 'Enterprise Limitation'], outputs: ['Recommended Action'] }
];

babokTaskDefs.forEach(t => {
  babokItems.push({
    id: 'task-' + t.code.replace('.', '-'),
    code: 'Task ' + t.code,
    title: `${t.code} ${t.name}`,
    category: t.ka,
    pdfPage: t.pdfPage,
    printPage: t.printPage,
    available: true,
    summary: t.purpose,
    contentHtml: `
      <h2>Task ${t.code}: ${t.name}</h2>
      <div class="reader-meta-box">
        <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>
        <span>📄 <b>Trang PDF:</b> ${t.pdfPage} &nbsp;|&nbsp; 📖 <b>Trang in:</b> ${t.printPage}</span>
        <span>🏷️ <b>Vùng tri thức:</b> ${t.ka}</span>
      </div>
      <h3>1. Mục đích của Task (Purpose)</h3>
      <p>${t.purpose}</p>

      <h3>2. Đầu vào & Đầu ra (Inputs & Outputs)</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0">
        <div class="callout" style="margin:0">
          <b>Đầu vào (Inputs):</b>
          <ul>${t.inputs.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <div class="callout tip" style="margin:0">
          <b>Đầu ra (Outputs):</b>
          <ul>${t.outputs.map(o => `<li><b>${o}</b></li>`).join('')}</ul>
        </div>
      </div>

      <h3>3. Hướng dẫn áp dụng thực tế</h3>
      <p>Khi thực hiện nhiệm vụ này trong môi trường dự án thực tế, Business Analyst cần cân bằng giữa tính đầy đủ của tài liệu và tốc độ phát triển. Tránh sa vào bẫy "tê liệt vì phân tích" (Analysis Paralysis). Luôn đối chiếu kết quả với các bên liên quan then chốt để đảm bảo tính khả thi.</p>
    `
  });
});

// Add Chapters 9, 10, 11 of BABOK
babokItems.push({
  id: 'ch-9',
  code: 'Chương 9',
  title: 'Underlying Competencies (Năng lực Nền tảng của BA)',
  category: 'Kỹ năng BA',
  pdfPage: 197,
  printPage: 187,
  available: true,
  summary: '6 Nhóm năng lực cốt lõi: Tư duy phân tích, Phẩm chất hành vi, Kiến thức kinh doanh, Giao tiếp, Tương tác và Công cụ công nghệ.',
  contentHtml: `
    <h2>Chương 9: Underlying Competencies (Năng lực Nền tảng)</h2>
    <div class="reader-meta-box">
      <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>
      <span>📄 <b>Trang PDF:</b> 197 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 187</span>
    </div>
    <p>Một Business Analyst xuất sắc không chỉ nắm vững phương pháp mà còn cần rèn giũa 6 nhóm năng lực nền tảng:</p>
    <ul>
      <li><b>9.1 Analytical Thinking & Problem Solving:</b> Tư duy sáng tạo, ra quyết định, học hỏi nhanh và giải quyết vấn đề tận gốc rễ.</li>
      <li><b>9.2 Behavioural Characteristics:</b> Đạo đức nghề nghiệp, trách nhiệm cá nhân, đáng tin cậy và khả năng thích ứng linh hoạt.</li>
      <li><b>9.3 Business Knowledge:</b> Thấu hiểu nguyên lý kinh doanh, mô hình ngành, cơ cấu tổ chức và giải pháp hiện hành.</li>
      <li><b>9.4 Communication Skills:</b> Kỹ năng giao tiếp qua lời nói, văn bản và khả năng lắng nghe chủ động.</li>
      <li><b>9.5 Interaction Skills:</b> Kỹ năng điều phối (Facilitation), lãnh đạo, đàm phán và xây dựng tinh thần đồng đội.</li>
      <li><b>9.6 Tools and Technology:</b> Sử dụng thành thạo các công cụ mô hình hóa, quản lý yêu cầu và kiểm thử.</li>
    </ul>
  `
});

babokItems.push({
  id: 'ch-10',
  code: 'Chương 10',
  title: 'Techniques (Danh mục 50 Kỹ thuật Chuẩn mực)',
  category: 'Kỹ thuật BA',
  pdfPage: 227,
  printPage: 217,
  available: true,
  summary: 'Kho vũ khí 50 kỹ thuật thực hành từ Phỏng vấn, BPMN, User Story, Mô hình hóa dữ liệu đến Đánh giá nhà cung cấp.',
  contentHtml: `
    <h2>Chương 10: Techniques (50 Kỹ thuật Thực hành của BA)</h2>
    <div class="reader-meta-box">
      <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>
      <span>📄 <b>Trang PDF:</b> 227 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 217</span>
    </div>
    <p>BABOK Guide v3 chuẩn hóa 50 kỹ thuật thực hành phân tích phổ biến nhất thế giới:</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(220px, 1fr));gap:8px;font-size:12.5px;margin:16px 0">
      <div>10.1 Acceptance Criteria</div>
      <div>10.2 Backlog Management</div>
      <div>10.8 Business Model Canvas</div>
      <div>10.9 Business Rules Analysis</div>
      <div>10.13 Data Flow Diagrams</div>
      <div>10.15 Data Modelling</div>
      <div>10.25 Interviews</div>
      <div>10.35 Process Modelling</div>
      <div>10.36 Prototyping</div>
      <div>10.40 Root Cause Analysis</div>
      <div>10.44 State Modelling</div>
      <div>10.47 Use Cases</div>
      <div>10.48 User Stories</div>
      <div>10.50 Workshops</div>
    </div>
    <p class="metadata">Mỗi kỹ thuật đều được mô tả chi tiết gồm: Mục đích, Mô tả, Các phần tử cốt lõi và Ưu/Nhược điểm khi áp dụng.</p>
  `
});

babokItems.push({
  id: 'ch-11',
  code: 'Chương 11',
  title: 'Perspectives (5 Góc nhìn Chuyên môn Thực tế)',
  category: 'Góc nhìn BA',
  pdfPage: 377,
  printPage: 367,
  available: true,
  summary: '5 Bối cảnh chuyên môn: Agile, Business Intelligence, Information Technology, Business Architecture và BPM.',
  contentHtml: `
    <h2>Chương 11: Perspectives (5 Góc nhìn Chuyên môn)</h2>
    <div class="reader-meta-box">
      <span>📘 <b>Sách:</b> BABOK® Guide v3 (IIBA)</span>
      <span>📄 <b>Trang PDF:</b> 377 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 367</span>
    </div>
    <p>BABOK cung cấp lăng kính áp dụng các kỹ thuật vào 5 bối cảnh chuyên sâu:</p>
    <ul>
      <li><b>11.1 The Agile Perspective:</b> Phân tích thích ứng, lặp ngắn, chuyển dịch từ tài liệu dài sang User Story và Conversation.</li>
      <li><b>11.2 The Business Intelligence Perspective:</b> Phân tích dữ liệu lớn, Data Warehouse, Dashboard báo cáo và trực quan hóa insight.</li>
      <li><b>11.3 The Information Technology Perspective:</b> Phân tích hệ thống IT, kiến trúc vi dịch vụ (Microservices), API và tích hợp hệ thống.</li>
      <li><b>11.4 The Business Architecture Perspective:</b> Định hình bản đồ năng lực doanh nghiệp, chuỗi giá trị và dòng chảy thông tin toàn diện.</li>
      <li><b>11.5 The Business Process Management Perspective:</b> Quản trị quy trình kinh doanh, tinh gọn hóa (Lean) và tự động hóa quy trình.</li>
    </ul>
  `
});

// 2. Build BCS Items
// File: 3rd_Business_Analysis__split_1.pdf (235 pages)
// Offset: Print page 1 = PDF page 35
const bcsChapters = [
  {
    id: 'bcs-ch-1',
    code: 'Chương 1',
    title: 'What is Business Analysis? (Bản chất Nghề BA)',
    pdfPage: 35,
    printPage: 1,
    available: true,
    summary: 'Ranh giới nghề BA, nguồn gốc lịch sử, mô hình trưởng thành BA (Business Analysis Maturity Model).',
    contentHtml: `
      <h2>Chương 1: What is Business Analysis?</h2>
      <div class="reader-meta-box">
        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>
        <span>📄 <b>Trang PDF:</b> 35 - 55 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 1 - 21</span>
      </div>
      <h3>1. Nguồn gốc và sự phát triển của Business Analysis</h3>
      <p>BCS định vị Business Analysis xuất phát từ nhu cầu thu hẹp khoảng cách giao tiếp giữa Ban Giám đốc Kinh doanh và Bộ phận Công nghệ Thông tin (IT). Khi các dự án phần mềm thất bại hàng loạt vì "lập trình đúng thứ nhưng không ai cần", vai trò của BA ra đời để đảm bảo công nghệ phục vụ trọn vẹn mục tiêu chiến lược.</p>

      <h3>2. Phạm vi công việc của BA (Scope of BA Work)</h3>
      <p>BCS phân định rõ 3 cấp độ can thiệp của BA:</p>
      <ul>
        <li><b>Strategic Analysis:</b> Tư vấn định hình chiến lược và nhận diện vấn đề trước khi có bất kỳ dự án nào.</li>
        <li><b>Business Process Improvement:</b> Tái thiết kế quy trình nghiệp vụ để nâng cao năng suất và loại bỏ lãng phí.</li>
        <li><b>IT Systems Analysis:</b> Đặc tả chi tiết các yêu cầu phần mềm để đội ngũ kỹ thuật xây dựng chính xác.</li>
      </ul>

      <h3>3. Mô hình Trưởng thành BA (Business Analysis Maturity Model)</h3>
      <p>Từ mức độ cơ bản (chỉ đặc tả phần mềm) ➔ mức cải tiến quy trình ➔ mức đối tác chiến lược của doanh nghiệp.</p>
    `
  },
  {
    id: 'bcs-ch-2',
    code: 'Chương 2',
    title: 'The Competencies of a Business Analyst (Khung Năng lực)',
    pdfPage: 56,
    printPage: 22,
    available: true,
    summary: 'Phẩm chất cá nhân, kiến thức kinh doanh, kỹ thuật chuyên môn và khung phát triển kỹ năng SFIA.',
    contentHtml: `
      <h2>Chương 2: The Competencies of a Business Analyst</h2>
      <div class="reader-meta-box">
        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>
        <span>📄 <b>Trang PDF:</b> 56 - 78 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 22 - 44</span>
      </div>
      <h3>1. Ba trụ cột năng lực theo chuẩn BCS</h3>
      <ul>
        <li><b>Personal Qualities (Phẩm chất cá nhân):</b> Tư duy phản biện, sự đồng cảm, giao tiếp tự tin và khả năng giải quyết xung đột.</li>
        <li><b>Business Knowledge (Kiến thức kinh doanh):</b> Hiểu biết tài chính doanh nghiệp, cấu trúc tổ chức và đặc thù ngành.</li>
        <li><b>Professional Techniques (Kỹ thuật chuyên môn):</b> Kỹ năng phỏng vấn, workshop, vẽ BPMN, lập User Story và viết kịch bản UAT.</li>
      </ul>
      <h3>2. Khung phát triển kỹ năng SFIA (Skills Framework for the Information Age)</h3>
      <p>BCS áp dụng SFIA để đo lường cấp độ trưởng thành của BA từ Junior lên Senior và Principal Consultant.</p>
    `
  },
  {
    id: 'bcs-ch-3',
    code: 'Chương 3',
    title: 'Strategy Analysis (Phân tích Chiến lược & Môi trường)',
    pdfPage: 79,
    printPage: 45,
    available: true,
    summary: 'Phân tích môi trường bên ngoài (PESTLE, 5 Forces), môi trường nội bộ (VMOST, Resource Audit), ma trận SWOT và Balanced Scorecard.',
    contentHtml: `
      <h2>Chương 3: Strategy Analysis (Phân tích Chiến lược)</h2>
      <div class="reader-meta-box">
        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>
        <span>📄 <b>Trang PDF:</b> 79 - 101 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 45 - 67</span>
      </div>
      <h3>1. Phân tích môi trường bên ngoài (External Analysis)</h3>
      <p><b>PESTLE:</b> Đánh giá các yếu tố Chính trị (Political), Kinh tế (Economic), Xã hội (Social), Công nghệ (Technological), Pháp lý (Legal) và Môi trường (Environmental).</p>
      <p><b>Porter’s Five Forces:</b> Đánh giá áp lực cạnh tranh ngành gồm đối thủ hiện tại, đối thủ tiềm năng, sản phẩm thay thế, quyền lực nhà cung ứng và khách hàng.</p>

      <h3>2. Phân tích nội bộ & Chiến lược tổ chức</h3>
      <p><b>Khung VMOST:</b> Vision (Tầm nhìn), Mission (Sứ mệnh), Objectives (Mục tiêu), Strategy (Chiến lược), Tactics (Chiến thuật tác nghiệp).</p>
      <p><b>Ma trận SWOT & BSC:</b> Tổng hợp điểm mạnh/yếu nội bộ với cơ hội/thách thức bên ngoài để định hình phương án chuyển đổi.</p>
    `
  },
  {
    id: 'bcs-ch-4',
    code: 'Chương 4',
    title: 'The Business Analysis Process Model (Mô hình Quy trình BA)',
    pdfPage: 102,
    printPage: 68,
    available: true,
    summary: 'Mô hình 5 giai đoạn: Investigate situation -> Consider perspectives -> Analyse needs -> Evaluate options -> Define requirements.',
    contentHtml: `
      <h2>Chương 4: The Business Analysis Process Model</h2>
      <div class="reader-meta-box">
        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>
        <span>📄 <b>Trang PDF:</b> 102 - 120 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 68 - 86</span>
      </div>
      <h3>Mô hình 5 Giai đoạn cốt lõi của BCS</h3>
      <ol>
        <li><b>Investigate Situation (Điều tra hiện trạng):</b> Thu thập dữ liệu để nhìn thấu toàn bộ bối cảnh và nguyên nhân gốc rễ.</li>
        <li><b>Consider Perspectives (Xem xét các góc nhìn):</b> Phân tích động cơ và kỳ vọng của các nhóm bên liên quan.</li>
        <li><b>Analyse Needs (Phân tích nhu cầu):</b> Xác định khoảng cách (Gap Analysis) giữa hiện tại và tương lai.</li>
        <li><b>Evaluate Options (Đánh giá các phương án):</b> Đánh giá tính khả thi về kỹ thuật, tài chính và rủi ro.</li>
        <li><b>Define Requirements (Xác định yêu cầu):</b> Đặc tả chi tiết các yêu cầu để bàn giao cho đội ngũ triển khai.</li>
      </ol>
    `
  },
  {
    id: 'bcs-ch-5',
    code: 'Chương 5',
    title: 'Investigation Techniques (Kỹ thuật Điều tra Hiện trạng)',
    pdfPage: 121,
    printPage: 87,
    available: true,
    summary: 'Phỏng vấn, Quan sát (Shadowing), Workshop, Scenario, Phân tích tài liệu và khảo sát số lượng.',
    contentHtml: `
      <h2>Chương 5: Investigation Techniques</h2>
      <div class="reader-meta-box">
        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>
        <span>📄 <b>Trang PDF:</b> 121 - 158 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 87 - 124</span>
      </div>
      <h3>Bộ công cụ điều tra thực địa của BA</h3>
      <ul>
        <li><b>Interviews (Phỏng vấn cá nhân):</b> Kỹ thuật đào sâu nguyên nhân và xây dựng mối quan hệ tin cậy.</li>
        <li><b>Observation & Shadowing (Quan sát thực tế):</b> Trực tiếp theo dõi nhân viên thao tác để phát hiện các bước làm thủ công không có trong tài liệu.</li>
        <li><b>Workshops (Hội thảo đồng thuận):</b> Tập hợp các bên liên quan để thống nhất ưu tiên và giải quyết mâu thuẫn trực diện.</li>
        <li><b>Scenarios & Prototyping:</b> Dùng kịch bản và bản mẫu giao diện sớm để kiểm chứng logic.</li>
      </ul>
    `
  },
  {
    id: 'bcs-ch-6',
    code: 'Chương 6',
    title: 'Stakeholder Analysis and Management (Quản lý Stakeholder)',
    pdfPage: 159,
    printPage: 125,
    available: true,
    summary: 'Phân loại Stakeholder, Ma trận Mendelow (Power/Interest), Ma trận RACI/RASCI và kỹ thuật phân tích CATWOE.',
    contentHtml: `
      <h2>Chương 6: Stakeholder Analysis and Management</h2>
      <div class="reader-meta-box">
        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>
        <span>📄 <b>Trang PDF:</b> 159 - 185 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 125 - 151</span>
      </div>
      <h3>1. Ma trận Mendelow (Power vs Interest Grid)</h3>
      <p>4 Chiến lược tương tác kinh điển dựa trên vị thế quyền lực và mức độ quan tâm:</p>
      <ul>
        <li><b>High Power / High Interest:</b> Quản lý chặt chẽ (Manage Closely) - Tham vấn liên tục.</li>
        <li><b>High Power / Low Interest:</b> Giữ cho hài lòng (Keep Satisfied) - Gửi báo cáo tóm tắt mốc lớn.</li>
        <li><b>Low Power / High Interest:</b> Cập nhật thường xuyên (Keep Informed) - Lắng nghe phản hồi chi tiết.</li>
        <li><b>Low Power / Low Interest:</b> Theo dõi định kỳ (Monitor with minimal effort).</li>
      </ul>
      <h3>2. Kỹ thuật CATWOE</h3>
      <p>Công cụ phân tích thế giới quan của từng nhóm stakeholder: Customer (Khách hàng), Actor (Người thực hiện), Transformation (Quá trình biến đổi), Weltanschauung (Thế giới quan), Owner (Chủ sở hữu), Environment (Ràng buộc môi trường).</p>
    `
  },
  {
    id: 'bcs-ch-7',
    code: 'Chương 7',
    title: 'Modelling Business Processes (Mô hình hóa Quy trình)',
    pdfPage: 186,
    printPage: 152,
    available: true,
    summary: 'Sơ đồ phân làn Swimlane, phân tích quy trình As-Is, thiết kế quy trình To-Be, BPMN và Six Sigma.',
    contentHtml: `
      <h2>Chương 7: Modelling Business Processes</h2>
      <div class="reader-meta-box">
        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>
        <span>📄 <b>Trang PDF:</b> 186 - 220 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 152 - 186</span>
      </div>
      <h3>Quy trình Mô hình hóa phân làn (Swimlane Process Models)</h3>
      <p>BCS nhấn mạnh việc trực quan hóa luồng công việc xuyên suốt qua nhiều phòng ban chức năng. Phân làn Swimlane giúp chỉ rõ trách nhiệm của ai ở từng bước, nơi xảy ra bàn giao (Hand-off) và các điểm nghẽn gây lãng phí thời gian.</p>
      <p>Phương pháp tiếp cận: Phân tích quy trình As-Is ➔ Nhận diện lãng phí (Waste/Bottleneck) ➔ Thiết kế quy trình mục tiêu To-Be tinh gọn.</p>
    `
  },
  {
    id: 'bcs-ch-8',
    code: 'Chương 8',
    title: 'Defining the Solution (Xác định Kiến trúc Giải pháp)',
    pdfPage: 221,
    printPage: 187,
    available: true,
    summary: 'Phân tích khoảng cách (Gap Analysis), định hình các phương án khả thi và đặt nền tảng kiến trúc doanh nghiệp.',
    contentHtml: `
      <h2>Chương 8: Defining the Solution</h2>
      <div class="reader-meta-box">
        <span>📙 <b>Sách:</b> Business Analysis (3rd Edition) - BCS</span>
        <span>📄 <b>Trang PDF:</b> 221 - 235 &nbsp;|&nbsp; 📖 <b>Trang in:</b> 187 - 201</span>
      </div>
      <h3>Phân tích Khoảng cách (Gap Analysis)</h3>
      <p>So sánh trạng thái hiện tại (As-Is) với tương lai mong muốn (To-Be) để xác định rõ những gì cần xây dựng mới, những gì cần cải tạo và những gì cần loại bỏ. Đây là trang tài liệu kết thúc của file PDF <code>split_1</code>.</p>
    `
  },

  // Truncated Chapters 9 to 14
  {
    id: 'bcs-ch-9',
    code: 'Chương 9',
    title: 'Making a Business Case (Lập Hồ sơ Kinh doanh)',
    pdfPage: 236,
    printPage: 202,
    available: false,
    statusText: 'Chưa có trong PDF đính kèm (Nội dung nằm ở file split_2)',
    summary: 'Xác định chi phí/lợi ích (Cost-Benefit Analysis), đánh giá rủi ro tài chính và trình bày Business Case.',
    contentHtml: '<div class="callout warning"><b>Chưa có trong PDF đính kèm:</b> File tài liệu đính kèm là split_1 kết thúc tại trang 235 (cuối Chương 8). Nội dung Chương 9 thuộc phần split_2 của tác phẩm.</div>'
  },
  {
    id: 'bcs-ch-10',
    code: 'Chương 10',
    title: 'Establishing the Requirements (Kỹ nghệ Yêu cầu)',
    pdfPage: 250,
    printPage: 216,
    available: false,
    statusText: 'Chưa có trong PDF đính kèm (Nội dung nằm ở file split_2)',
    summary: 'Thu thập và cấu trúc hóa tập yêu cầu chức năng và phi chức năng.',
    contentHtml: '<div class="callout warning"><b>Chưa có trong PDF đính kèm:</b> File tài liệu đính kèm là split_1 kết thúc tại trang 235 (cuối Chương 8). Nội dung Chương 10 thuộc phần split_2 của tác phẩm.</div>'
  },
  {
    id: 'bcs-ch-11',
    code: 'Chương 11',
    title: 'Documenting and Managing Requirements (Quản lý Yêu cầu)',
    pdfPage: 270,
    printPage: 236,
    available: false,
    statusText: 'Chưa có trong PDF đính kèm (Nội dung nằm ở file split_2)',
    summary: 'Tài liệu hóa SRS, thiết lập từ điển dữ liệu, ma trận truy vết và kiểm soát phiên bản.',
    contentHtml: '<div class="callout warning"><b>Chưa có trong PDF đính kèm:</b> File tài liệu đính kèm là split_1 kết thúc tại trang 235 (cuối Chương 8). Nội dung Chương 11 thuộc phần split_2 của tác phẩm.</div>'
  },
  {
    id: 'bcs-ch-12',
    code: 'Chương 12',
    title: 'Modelling Requirements (Mô hình hóa Yêu cầu)',
    pdfPage: 290,
    printPage: 256,
    available: false,
    statusText: 'Chưa có trong PDF đính kèm (Nội dung nằm ở file split_2)',
    summary: 'Sơ đồ Use Case, ERD, Class Diagram và kịch bản nghiệp vụ chi tiết.',
    contentHtml: '<div class="callout warning"><b>Chưa có trong PDF đính kèm:</b> File tài liệu đính kèm là split_1 kết thúc tại trang 235 (cuối Chương 8). Nội dung Chương 12 thuộc phần split_2 của tác phẩm.</div>'
  },
  {
    id: 'bcs-ch-13',
    code: 'Chương 13',
    title: 'Delivering the Requirements (Bàn giao & Nghiệm thu)',
    pdfPage: 310,
    printPage: 276,
    available: false,
    statusText: 'Chưa có trong PDF đính kèm (Nội dung nằm ở file split_2)',
    summary: 'Quy trình kiểm thử UAT, nghiệm thu có điều kiện và chuyển giao phần mềm cho vận hành.',
    contentHtml: '<div class="callout warning"><b>Chưa có trong PDF đính kèm:</b> File tài liệu đính kèm là split_1 kết thúc tại trang 235 (cuối Chương 8). Nội dung Chương 13 thuộc phần split_2 của tác phẩm.</div>'
  },
  {
    id: 'bcs-ch-14',
    code: 'Chương 14',
    title: 'Delivering the Business Solution (Triển khai Giá trị)',
    pdfPage: 330,
    printPage: 296,
    available: false,
    statusText: 'Chưa có trong PDF đính kèm (Nội dung nằm ở file split_2)',
    summary: 'Quản trị sự thay đổi tổ chức, đào tạo người dùng và đo lường giá trị sau Go-Live.',
    contentHtml: '<div class="callout warning"><b>Chưa có trong PDF đính kèm:</b> File tài liệu đính kèm là split_1 kết thúc tại trang 235 (cuối Chương 8). Nội dung Chương 14 thuộc phần split_2 của tác phẩm.</div>'
  }
];

// 3. Build 100 Days Items
// All 100 days from extracted_days_final.json
const daysItems = daysData.map(d => {
  return {
    id: 'day-' + d.day,
    code: 'DAY ' + d.day,
    title: d.title,
    category: d.topic,
    pdfPage: d.page,
    printPage: Math.max(1, d.page - 3),
    available: true,
    takeaway: d.takeaway,
    projectQuestion: d.projectQuestion,
    summary: d.takeaway,
    contentHtml: `
      <h2>DAY ${d.day}: ${d.title}</h2>
      <div class="reader-meta-box">
        <span>📗 <b>Tác phẩm:</b> 100 ngày viết về nghề BA (Nguyễn Bá Phú)</span>
        <span>📄 <b>Trang PDF:</b> ${d.page} &nbsp;|&nbsp; 📖 <b>Trang in:</b> ${Math.max(1, d.page - 3)}</span>
        <span>🏷️ <b>Chủ đề:</b> ${d.topic}</span>
      </div>
      <div class="callout" style="background:var(--tint);border-left:4px solid var(--primary);margin:16px 0">
        <b>💡 Bối cảnh nghề nghiệp:</b>
        <p style="margin:4px 0 0 0;font-size:13.5px">Đúc kết từ hơn 10 năm kinh nghiệm làm việc thực tế tại các dự án công nghệ tại Việt Nam. Không nói lý thuyết sáo rỗng, tập trung vào cách ứng xử thực chiến và tư duy giải quyết vấn đề.</p>
      </div>

      <h3>1. Trích đoạn & Tình huống thực chiến</h3>
      <div class="reader-story-quote">
        <p>${d.snippet}...</p>
      </div>

      <h3>2. Bài học rút ra (Key Takeaway)</h3>
      <div class="callout tip">
        <p style="margin:0;font-weight:600">${d.takeaway}</p>
      </div>

      <h3>3. Câu hỏi phản tư áp dụng vào dự án (Project Reflection)</h3>
      <div class="callout">
        <p style="margin:0"><b>❓ Tự vấn nghiệp vụ:</b> ${d.projectQuestion}</p>
      </div>
    `
  };
});

// Master booksMeta array
const masterBooksMeta = [
  {
    id: 'babok-v3',
    title: 'A Guide to the Business Analysis Body of Knowledge (BABOK® Guide v3)',
    shortTitle: 'BABOK Guide v3',
    author: 'International Institute of Business Analysis (IIBA)',
    year: '2015',
    totalPages: 514,
    pdfFileName: 'A GUIDE TO THE BUSINESS ANALYSIS BODY OF KNOWLEDGE ( PDFDrive.com ).pdf',
    pdfPageOffset: 16,
    status: 'Full (Đầy đủ 11 chương & 50 kỹ thuật)',
    description: 'Tiêu chuẩn quốc tế chuẩn mực và toàn diện nhất thế giới về nghề Business Analysis. Bao phủ 6 Vùng tri thức (30 Tasks), Mô hình BACCM, 50 Kỹ thuật, Năng lực nền tảng và 5 Góc nhìn chuyên môn.',
    color: '#6056d9',
    icon: '📘',
    toc: babokItems
  },
  {
    id: 'bcs-ba-3rd',
    title: 'Business Analysis (3rd Edition)',
    shortTitle: 'Business Analysis 3rd Edition (BCS)',
    author: 'Debra Paul, Donald Yeates, James Cadle (BCS - The Chartered Institute for IT)',
    year: '2014',
    totalPages: 235,
    pdfFileName: '3rd_Business_Analysis__split_1.pdf',
    pdfPageOffset: 34,
    status: 'Split 1 (Có đầy đủ Chương 1 đến Chương 8; Chương 9 đến 14 thuộc split_2)',
    description: 'Giáo trình cốt lõi của Viện CNTT Hoàng gia Anh (BCS). Hướng dẫn quy trình tư vấn và phân tích thực tiễn: từ Chiến lược, Mô hình quy trình BA, Kỹ thuật điều tra, Quản lý Stakeholder đến Mô hình hóa quy trình và Xác định kiến trúc giải pháp.',
    color: '#e7a05e',
    icon: '📙',
    missingNotice: 'Lưu ý về tài liệu: File PDF đính kèm là split_1 gồm 235 trang, bao phủ trọn vẹn Chương 1 đến Chương 8. Các chương 9 đến 14 (Lập Business Case, Kỹ nghệ yêu cầu, Quản lý yêu cầu, Mô hình hóa yêu cầu, Triển khai giải pháp) được liệt kê trong mục lục nhưng nội dung nằm ở split_2 của sách.',
    toc: bcsChapters
  },
  {
    id: '100-days-ba',
    title: '100 ngày viết về nghề BA',
    shortTitle: '100 ngày viết về nghề BA',
    author: 'Nguyễn Bá Phú (Chuyên gia BA / Tác giả thực chiến)',
    year: '2023',
    totalPages: 237,
    pdfFileName: 'Sách 100 ngày viết về nghề BA - A5 (3) (1) (1).pdf',
    pdfPageOffset: 3,
    status: 'Full (Đầy đủ 100 DAY từ DAY 1 đến DAY 100)',
    description: 'Góc nhìn người trong nghề, tổng hợp 100 câu chuyện va vấp và bài học xương máu thực tế tại thị trường Việt Nam: cách làm việc với Dev/Tester/PO, quản lý kỳ vọng khách hàng, xử lý phát sinh và duy trì tư duy hệ thống.',
    color: '#059669',
    icon: '📗',
    toc: daysItems
  }
];

// Write dist/books-data.js
let outJs = `// Module Sách BA: Dữ liệu học liệu tổng hợp từ 3 nguồn sách BA kinh điển\n`;
outJs += `// 1. BABOK Guide v3 (IIBA) - 6 Vùng tri thức, 30 Tasks, 50 Kỹ thuật\n`;
outJs += `// 2. Business Analysis 3rd Edition (BCS) - Chương 1 đến 8 (file split_1)\n`;
outJs += `// 3. 100 ngày viết về nghề BA (Nguyễn Bá Phú) - Toàn bộ 100 DAY thực chiến\n\n`;

outJs += `const booksMeta = ${JSON.stringify(masterBooksMeta, null, 2)};\n`;
outJs += `if (typeof window !== 'undefined') { window.booksMeta = booksMeta; } else if (typeof global !== 'undefined') { global.booksMeta = booksMeta; }\n`;

// Legacy exports for backwards compatibility
outJs += `const bookBabokTasks = booksMeta[0].toc.filter(t => t.id.startsWith('task-')).map(t => ({\n`;
outJs += `  code: t.code.replace('Task ', ''),\n`;
outJs += `  name: t.title.replace(/^\\d+\\.\\d+\\s+/, ''),\n`;
outJs += `  chapter: t.category,\n`;
outJs += `  page: t.pdfPage,\n`;
outJs += `  topicLessonId: 'TOPIC-TRACEABILITY',\n`;
outJs += `  purpose: t.summary,\n`;
outJs += `  inputs: ['Needs'],\n`;
outJs += `  outputs: ['Requirements'],\n`;
outJs += `  whenToApply: 'Áp dụng trong giai đoạn lập kế hoạch và đặc tả.'\n`;
outJs += `}));\n`;

outJs += `const bookBcsChapters = booksMeta[1].toc.filter(c => c.available).map((c, i) => ({\n`;
outJs += `  chapter: i + 1,\n`;
outJs += `  title: c.title,\n`;
outJs += `  pages: c.pdfPage + ' - ' + (c.pdfPage + 20),\n`;
outJs += `  topicLessonId: 'TOPIC-BACCM',\n`;
outJs += `  sections: ['Introduction', 'Core concepts', 'Application'],\n`;
outJs += `  summary: c.summary\n`;
outJs += `}));\n`;

outJs += `const bookDays100 = booksMeta[2].toc.map((d, i) => ({\n`;
outJs += `  day: i + 1,\n`;
outJs += `  page: d.pdfPage,\n`;
outJs += `  title: d.title,\n`;
outJs += `  topic: d.category,\n`;
outJs += `  takeaway: d.takeaway,\n`;
outJs += `  projectQuestion: d.projectQuestion,\n`;
outJs += `  authorNote: 'Kinh nghiệm nghề thực chiến của tác giả Nguyễn Bá Phú',\n`;
outJs += `  topicLessonId: 'TOPIC-TRACEABILITY'\n`;
outJs += `}));\n`;

outJs += `const bookTopicLessons = ${JSON.stringify(topicDefinitions, null, 2)};\n`;

// Cross Reference
const crossRef = [];
babokItems.slice(0, 32).forEach(t => {
  crossRef.push({
    bookId: 'babok-v3',
    bookTitle: 'BABOK Guide v3',
    itemCode: t.code,
    itemTitle: t.title,
    page: t.pdfPage,
    topic: t.category,
    topicLessonId: 'TOPIC-TRACEABILITY'
  });
});
bcsChapters.filter(c => c.available).forEach(c => {
  crossRef.push({
    bookId: 'bcs-ba-3rd',
    bookTitle: 'Business Analysis 3rd Edition (BCS)',
    itemCode: c.code,
    itemTitle: c.title,
    page: c.pdfPage,
    topic: 'Quy trình BA',
    topicLessonId: 'TOPIC-BACCM'
  });
});
daysItems.forEach(d => {
  crossRef.push({
    bookId: '100-days-ba',
    bookTitle: '100 ngày viết về nghề BA',
    itemCode: d.code,
    itemTitle: d.title,
    page: d.pdfPage,
    topic: d.category,
    topicLessonId: 'TOPIC-TRACEABILITY'
  });
});
outJs += `const bookCrossReference = ${JSON.stringify(crossRef, null, 2)};\n`;

outJs += `if (typeof module !== 'undefined' && module.exports) {\n`;
outJs += `  module.exports = { booksMeta, bookBabokTasks, bookBcsChapters, bookDays100, bookTopicLessons, bookCrossReference };\n`;
outJs += `}\n`;

fs.writeFileSync(path.join(__dirname, '..', 'dist', 'books-data.js'), outJs, 'utf-8');
console.log('Successfully generated dist/books-data.js! Size:', (outJs.length / 1024).toFixed(1), 'KB');
