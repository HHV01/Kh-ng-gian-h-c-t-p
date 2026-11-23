/**
 * 15 In-depth Interactive Topic Review Lessons
 * Covering all core BA areas across BABOK v3, BCS 3rd Edition, and 100 Ngày BA
 */

module.exports = [
  {
    id: 'TOPIC-IMPACT-ANALYSIS',
    title: 'Phân tích Tác động khi Đổi Yêu cầu (Change Assessment & Impact Analysis)',
    category: 'Đặc tả & Quản lý yêu cầu',
    summary: 'Phương pháp nhận diện phạm vi ảnh hưởng đa chiều khi phát sinh thay đổi yêu cầu giữa chừng trong hệ thống phân tán phức tạp.',
    keywords: ['phân tích tác động', 'impact analysis', 'change request', 'cr', 'thay đổi yêu cầu', 'đổi quy tắc', 'assess requirements changes', 'wes', 'wcs', 'idempotency'],
    sources: [
      { bookId: 'babok-v3', chapter: 'Chương 5 · Task 5.4 Assess Requirements Changes', page: 101, notes: 'Đánh giá tính khả thi, chi phí, giá trị và rủi ro của đề xuất thay đổi lên các yêu cầu hiện hành.' },
      { bookId: 'bcs-ba-3rd', chapter: 'Chương 4 · The BA Process Model (Evaluate Options)', page: 113, notes: 'Xem xét các phương án thay đổi và đánh đổi kỹ thuật - nghiệp vụ.' },
      { bookId: '100-days-ba', chapter: 'DAY 9 & DAY 23', page: 20, notes: 'Kinh nghiệm xương máu khi nhận yêu cầu "sửa tí xíu": không vội gật đầu mà phải truy quét rủi ro dây chuyền.' }
    ],
    perspectiveComparison: 'BABOK v3 tiếp cận mang tính hình thức quản trị chặt chẽ (Governance & formal sign-off); BCS tiếp cận theo góc nhìn tối ưu giá trị kinh doanh (Cost-Benefit & Feasibility); Nguyễn Bá Phú tiếp cận thực chiến trên dự án: tập trung vào việc bảo vệ team khỏi bẫy "lời nói gió bay" bằng cách viết rõ checklist tác động kỹ thuật và thống nhất với Tech Lead trước khi phản hồi khách hàng.',
    coreKnowledge: `
      <h4>1. Bản chất của Phân tích tác động (Impact Analysis)</h4>
      <p>Khi có một yêu cầu thay đổi (Change Request - CR) phát sinh, BA không bao giờ được trả lời "Được" hay "Không" ngay lập tức. Thay vào đó, BA cần thực hiện phân tích tác động trên 5 chiều kích:</p>
      <ul>
        <li><b>Tác động Nghiệp vụ (Business Impact):</b> Thay đổi này có vi phạm quy định pháp lý, chính sách công ty hay làm sai lệch quy trình đang vận hành không?</li>
        <li><b>Tác động Kiến trúc & Dữ liệu (Technical & Data Impact):</b> Có làm vỡ schema cơ sở dữ liệu, ảnh hưởng API tích hợp hay gây lỗi race-condition không?</li>
        <li><b>Tác động Tiến độ & Chi phí (Schedule & Cost):</b> Mất bao nhiêu Story Points/man-days để sửa, có làm trễ ngày Go-live cam kết không?</li>
        <li><b>Tác động Trải nghiệm Người dùng (UX Impact):</b> Người dùng cuối có phải học lại thao tác hay gặp rào cản nhận thức mới không?</li>
        <li><b>Tác động Kiểm thử & Hồi quy (Testing & Regression):</b> Cần cập nhật bao nhiêu Test Cases và những module nào bắt buộc phải test hồi quy?</li>
      </ul>
    `,
    applicationSteps: `
      <ol>
        <li><b>Thu thập & Cô lập đề xuất thay đổi:</b> Ghi nhận chính xác mong muốn mới, làm rõ lý do tại sao cần đổi tại thời điểm này.</li>
        <li><b>Truy vết mạng lưới phụ thuộc (Traceability Mapping):</b> Mở ma trận truy vết (RTM) để quét từ yêu cầu gốc ➔ các User Stories liên quan ➔ các màn hình/API ➔ các bảng DB chịu ảnh hưởng.</li>
        <li><b>Họp thẩm định kỹ thuật (Impact Triage):</b> Thảo luận với Tech Lead/Architect về giải pháp kỹ thuật, đánh giá rủi ro tương thích ngược (Backward compatibility).</li>
        <li><b>Lượng hóa đánh đổi & Lập báo cáo thay đổi (CR Report):</b> Nêu rõ 2 phương án: Phương án A (Làm ngay trong đợt này - chi phí/ngày trễ) và Phương án B (Hoãn sang Phase sau/Sprint sau).</li>
        <li><b>Trình phê duyệt chính thức (Sign-off):</b> Xin phê duyệt bằng văn bản từ Product Owner và Nhà tài trợ dự án có thẩm quyền.</li>
      </ol>
    `,
    scenarioExercise: {
      context: 'Hệ thống Quản lý Kho thông minh (Smart Warehouse) gồm 2 phân hệ: WES (Warehouse Execution System - quản lý đơn hàng & logic kinh doanh) và WCS (Warehouse Control System - điều phối cánh tay robot và xe tự hành AGV). Đơn hàng #DH-8899 đang trong trạng thái "Đang xuất kho", robot AGV đã nhận lệnh di chuyển pallet ra cửa xuất. Bất ngờ, Khách hàng gọi điện hỏa tốc yêu cầu HỦY ĐƠN HÀNG này để đổi địa chỉ nhận.',
      task: 'Là BA phụ trách luồng tích hợp WES-WCS, bạn hãy lập ma trận phân tích tác động: 1. Trạng thái đơn hàng và robot nào bị ảnh hưởng? 2. Bên nào (WES hay WCS) có quyền chốt quyết định hủy? 3. Cần bổ sung/sửa đổi Acceptance Criteria (AC) nào? 4. Bộ phận QA cần chạy lại những test case hồi quy nào?',
      starterPrompt: '1. Các trạng thái bị ảnh hưởng:\n- Trạng thái đơn hàng trên WES:\n- Trạng thái nhiệm vụ trên WCS & Robot AGV:\n\n2. Quyền quyết định hủy (State Authority):\n\n3. Tiêu chí nghiệm thu (AC) cần bổ sung:\n\n4. Các ca kiểm thử hồi quy (Regression Test Cases):',
      sampleSolution: `
        <h4>Bảng Phân tích Tác động & Ma trận Truy vết Mẫu (Model Answer)</h4>
        <table class="data-table" style="width:100%;font-size:13px;margin:12px 0">
          <thead>
            <tr><th>Thành phần</th><th>Hiện trạng</th><th>Tác động sau thay đổi</th><th>Hành động bắt buộc của BA/Dev</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><b>WES Order State</b></td>
              <td>Đang xuất kho (In-Picking)</td>
              <td>Chuyển sang "Yêu cầu Hủy (Cancel Pending)" ➔ Nếu WCS xác nhận dừng robot thành công thì chuyển "Đã hủy (Cancelled)"</td>
              <td>Cập nhật State Machine Diagram: không cho phép hủy trực tiếp nếu chưa có ACK từ WCS.</td>
            </tr>
            <tr>
              <td><b>WCS / AGV Task</b></td>
              <td>Nhiệm vụ đang chạy (Task In-Progress)</td>
              <td>Kiểm tra vị trí vật lý: Nếu pallet chưa đặt lên băng chuyền xuất thì phát lệnh STOP và hoàn trả pallet về ô kệ lưu trữ (Return to Rack)</td>
              <td>Đặc tả thông điệp API: <code>POST /api/v1/tasks/{taskId}/abort</code> có cơ chế Idempotent.</td>
            </tr>
            <tr>
              <td><b>Quyền quyết định</b></td>
              <td>WES tạo lệnh</td>
              <td><b>WCS là bên nắm quyền quyết định cuối cùng</b> về việc có thể hủy được hay không dựa trên an toàn vật lý của robot.</td>
              <td>Ghi rõ quy tắc: Nếu robot đã nhả pallet vào thùng xe tải thì WCS trả về "CANCEL_REJECTED - Order Already Dispatched".</td>
            </tr>
          </tbody>
        </table>
        <h5>Tiêu chí nghiệm thu (AC) bổ sung:</h5>
        <ul>
          <li><b>AC-01 (Happy path hủy thành công):</b> Given Đơn hàng đang ở trạng thái In-Picking VÀ robot chưa đưa hàng vào xe; When Người dùng gửi yêu cầu Hủy; Then WES gửi lệnh Abort sang WCS, WCS điều hướng robot trả hàng về kệ và phản hồi 200 OK, WES cập nhật trạng thái đơn thành CANCELLED và hoàn lại tồn kho.</li>
          <li><b>AC-02 (Race condition hủy bất khả kháng):</b> Given Robot đã thả hàng vào xe tải lúc 10:00:01; When Lệnh hủy từ WES đến WCS lúc 10:00:02; Then WCS từ chối hủy với mã lỗi 409 ORDER_LOADED, WES giữ nguyên trạng thái đơn là DISPATCHED và thông báo khách hàng liên hệ đổi trả sau Go-live.</li>
        </ul>
        <h5>Test cases kiểm thử hồi quy bắt buộc:</h5>
        <ul>
          <li>TC-REG-01: Kiểm tra tính Idempotent khi người dùng click nút Hủy 2 lần liên tiếp.</li>
          <li>TC-REG-02: Kiểm tra cập nhật tồn kho khi robot trả hàng về vị trí kệ cũ.</li>
          <li>TC-REG-03: Kiểm tra mất kết nối mạng giữa WES và WCS khi đang phát lệnh Abort.</li>
        </ul>
      `,
      rubricCriteria: [
        'Nhận diện được cả trạng thái logic trên WES lẫn trạng thái vật lý của robot trên WCS.',
        'Phân định đúng quyền quyết định (WCS chốt khả năng hủy dựa trên vị trí thực tế của hàng hóa).',
        'Viết được ít nhất 2 Acceptance Criteria bao quát cả kịch bản hủy thành công và kịch bản từ chối hủy do race-condition.',
        'Liệt kê được các test case kiểm tra Idempotency và kiểm tra đồng bộ tồn kho hoàn trả.'
      ]
    },
    relatedQuizIds: ['Q2-14', 'Q2-15', 'Q6-16', 'Q4-14'],
    relatedCaseId: 'CASE-01'
  },
  {
    id: 'TOPIC-TRACEABILITY',
    title: 'Truy vết Yêu cầu & Quản lý Tính Nhất quán (Requirements Traceability Matrix)',
    category: 'Đặc tả & Quản lý yêu cầu',
    summary: 'Kỹ thuật liên kết hai chiều từ mục tiêu kinh doanh đến từng dòng mã nguồn và ca kiểm thử nghiệm thu.',
    keywords: ['truy vết', 'traceability', 'requirements traceability', 'rtm', 'ma trận truy vết', 'backward traceability', 'forward traceability', 'liên kết yêu cầu'],
    sources: [
      { bookId: 'babok-v3', chapter: 'Chương 5 · Task 5.1 Trace Requirements', page: 89, notes: 'Thiết lập mối quan hệ phụ thuộc, nguồn gốc (Derive) và thỏa mãn (Satisfy) giữa các cấp độ yêu cầu.' },
      { bookId: 'bcs-ba-3rd', chapter: 'Chương 8 · Defining the Solution (Requirements Catalogue)', page: 228, notes: 'Quản lý danh mục yêu cầu có mã định danh để phục vụ đối soát nghiệm thu.' },
      { bookId: '100-days-ba', chapter: 'DAY 2 & DAY 17', page: 5, notes: 'Tư duy hệ thống của BA: không viết tính năng rời rạc mà phải biết từng màn hình gắn với mục tiêu nào.' }
    ],
    perspectiveComparison: 'BABOK định nghĩa mô hình truy vết toán học hoàn chỉnh (Forward & Backward Traceability); BCS gắn liền truy vết với việc xây dựng Business Case và kiểm soát chi phí bàn giao; 100 Ngày BA nhấn mạnh việc dùng ma trận truy vết như một "tấm khiên hộ mệnh" khi khách hàng hoặc sếp hỏi: "Tại sao tính năng này lại làm như thế này?".',
    coreKnowledge: `
      <h4>1. Định nghĩa và Giá trị cốt lõi của Traceability</h4>
      <p>Truy vết yêu cầu (Requirements Traceability) là khả năng theo dõi một yêu cầu từ nguồn gốc sinh ra nó (Nhu cầu kinh doanh / Luật định), xuyên qua quá trình phân tích đặc tả, thiết kế kiến trúc, cho đến các dòng code và ca kiểm thử cuối cùng.</p>
      <ul>
        <li><b>Forward Traceability (Truy vết xuôi):</b> Từ Mục tiêu kinh doanh ➔ Yêu cầu phần mềm ➔ Test case. Đảm bảo mọi mục tiêu đều được hiện thực hóa và kiểm thử đầy đủ (No missing features).</li>
        <li><b>Backward Traceability (Truy vết ngược):</b> Từ Test case / Code / Tính năng ➔ Ngược về Mục tiêu kinh doanh. Ngăn chặn hiện tượng làm thừa tính năng không ai dùng (No gold plating).</li>
      </ul>
    `,
    applicationSteps: `
      <ol>
        <li><b>Đánh mã định danh chuẩn hóa (Standardized ID):</b> Quy ước mã định danh duy nhất (BR-xxx cho Business Req, UR-xxx cho User Req, SR-xxx cho System Req, TC-xxx cho Test case).</li>
        <li><b>Thiết lập Ma trận RTM (Requirements Traceability Matrix):</b> Xây dựng bảng quan hệ ánh xạ nhiều-nhiều hoặc 1-nhiều giữa các tầng yêu cầu.</li>
        <li><b>Bảo trì ma trận khi có thay đổi:</b> Mỗi khi một User Story được thêm, bớt hoặc sửa, phải cập nhật ngay RTM để phát hiện các "yêu cầu mồ côi" (Orphan requirements).</li>
        <li><b>Sử dụng RTM trong nghiệm thu UAT:</b> Căn cứ vào RTM để báo cáo tỷ lệ bao phủ kiểm thử (Test Coverage) trước khi ký bàn giao.</li>
      </ol>
    `,
    scenarioExercise: {
      context: 'Dự án Cổng dịch vụ công trực tuyến của Thành phố có yêu cầu pháp lý: "Người dân có thể tra cứu tình trạng giải quyết hồ sơ đất đai bằng mã định danh công dân VNeID hoặc mã hồ sơ". Dự án có 3 phân hệ: Cổng người dân (Portal), Hệ thống một cửa điện tử (Back-office) và CSDL Đất đai liên thông.',
      task: 'Hãy lập bảng ma trận truy vết RTM từ Business Need ➔ Functional Requirements ➔ Non-functional Requirement ➔ 3 Test Cases nghiệm thu.',
      starterPrompt: 'Mã Business Need: BR-DATDAI-01: ...\n\nMã Functional Requirements (FR):\n- FR-01:\n- FR-02:\n\nMã Non-Functional Requirement (NFR):\n- NFR-01:\n\nMa trận Test Cases (TC):\n- TC-01 ánh xạ tới FR-...\n- TC-02 ánh xạ tới FR-...\n- TC-03 ánh xạ tới NFR-...',
      sampleSolution: `
        <h4>Ma trận Truy vết RTM Chuẩn mực</h4>
        <table class="data-table" style="width:100%;font-size:13px">
          <thead>
            <tr><th>Mã Yêu cầu</th><th>Mô tả chi tiết</th><th>Ánh xạ nguồn gốc</th><th>Mã Test Case nghiệm thu</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><b>BR-DATDAI-01</b></td>
              <td>Minh bạch hóa tiến độ giải quyết hồ sơ đất đai cho 100% công dân số theo Nghị định Chính phủ.</td>
              <td>Nghị định 42/2022/NĐ-CP</td>
              <td>UAT-OVERALL-01</td>
            </tr>
            <tr>
              <td><b>FR-SEARCH-01</b></td>
              <td>Người dân có thể đăng nhập bằng VNeID cấp độ 2 để xem toàn bộ danh sách hồ sơ đất đai đứng tên mình.</td>
              <td>BR-DATDAI-01</td>
              <td>TC-PORTAL-01 (Test login VNeID & trả về danh sách hồ sơ)</td>
            </tr>
            <tr>
              <td><b>FR-SEARCH-02</b></td>
              <td>Người dân vãng lai không cần đăng nhập có thể nhập Mã biên nhận hồ sơ (12 ký tự) + Mã captcha để tra cứu trạng thái xử lý hiện tại.</td>
              <td>BR-DATDAI-01</td>
              <td>TC-PORTAL-02 (Test tra cứu ẩn danh bằng mã biên nhận hợp lệ & không hợp lệ)</td>
            </tr>
            <tr>
              <td><b>NFR-SEC-01</b></td>
              <td>Không hiển thị thông tin số CCCD và số tiền thuế đầy đủ cho người tra cứu ẩn danh (phải làm mờ dạng 079***456).</td>
              <td>Luật An toàn thông tin</td>
              <td>TC-SEC-MASK-01 (Xác minh Data Masking trên màn hình tra cứu vãng lai)</td>
            </tr>
          </tbody>
        </table>
      `,
      rubricCriteria: [
        'Có cấu trúc mã định danh rõ ràng, phân biệt giữa BR, FR, NFR và TC.',
        'Thể hiện được tính liên kết hai chiều (Backward & Forward traceability).',
        'Bao gồm cả yêu cầu bảo mật thông tin (Data Masking) như một NFR gắn với mục tiêu pháp lý.'
      ]
    },
    relatedQuizIds: ['Q2-01', 'Q2-02', 'Q2-06', 'Q2-10'],
    relatedCaseId: 'CASE-03'
  },
  {
    id: 'TOPIC-AC-GHERKIN',
    title: 'Viết Tiêu chí Nghiệm thu (Acceptance Criteria) & Gherkin Given-When-Then',
    category: 'Đặc tả & Quản lý yêu cầu',
    summary: 'Kỹ thuật đặc tả tiêu chí nghiệm thu rõ ràng, đo lường được, làm cầu nối chính xác giữa BA, Lập trình viên và Tester.',
    keywords: ['tiêu chí nghiệm thu', 'acceptance criteria', 'ac', 'gherkin', 'given when then', 'bva', 'boundary value', 'bdd', 'quy tắc nghiệm thu'],
    sources: [
      { bookId: 'babok-v3', chapter: 'Chương 10 · Kỹ thuật 10.1 Acceptance and Evaluation Criteria', page: 227, notes: 'Định nghĩa các tiêu chí đo lường sự thành công của một giải pháp hoặc tính năng.' },
      { bookId: '100-days-ba', chapter: 'DAY 5 & DAY 29', page: 12, notes: 'Tư duy lỗi của BA: Viết logic chặt chẽ không bị lọt case, bắt đầu từ tiền điều kiện rõ ràng.' }
    ],
    perspectiveComparison: 'BABOK v3 phân loại Acceptance Criteria thành các thuộc tính chất lượng tổng thể; 100 Ngày BA nhấn mạnh việc áp dụng cú pháp Given-When-Then để triệt tiêu cãi cọ giữa Dev và QA về việc "đây là bug hay tính năng".',
    coreKnowledge: `
      <h4>1. Cú pháp Gherkin chuẩn mực</h4>
      <ul>
        <li><b>Given (Tiền điều kiện / Bối cảnh dữ liệu):</b> Trạng thái của hệ thống và tài khoản người dùng trước khi hành động diễn ra.</li>
        <li><b>When (Hành động kích hoạt):</b> Thao tác cụ thể mà người dùng hoặc sự kiện ngoại vi thực hiện.</li>
        <li><b>Then (Kết quả quan sát được):</b> Trạng thái mới của dữ liệu, thông báo hiển thị trên giao diện hoặc phản hồi API.</li>
        <li><b>And / But:</b> Nối các điều kiện bổ sung trong cùng một ngữ cảnh.</li>
      </ul>
      <h4>2. Ba sai lầm kinh điển khi viết AC</h4>
      <ul>
        <li>Viết mơ hồ không đo lường được (Ví dụ: "Hệ thống phải load nhanh", "Giao diện đẹp").</li>
        <li>Bỏ quên kịch bản ngoại lệ (Negative cases / Error flows).</li>
        <li>Đưa giải pháp kỹ thuật vào AC (Ví dụ viết "Dev phải dùng câu lệnh UPDATE bảng Users").</li>
      </ul>
    `,
    applicationSteps: `
      <ol>
        <li><b>Xác định Happy Path (Luồng chuẩn):</b> Viết kịch bản người dùng nhập đúng thông tin và nhận được kết quả thành công.</li>
        <li><b>Khai thác Phân tích Giá trị Biên (BVA):</b> Đặt các giá trị sát mép (min, min-1, max, max+1) để viết AC bắt lỗi.</li>
        <li><b>Xác định kịch bản Timeout / Network Error:</b> Quy định rõ hệ thống phản hồi thế nào khi bên thứ ba không phản hồi.</li>
        <li><b>Review 3 bên (Three Amigos):</b> BA, Dev và QA cùng đọc lại AC để thống nhất cách hiểu trước khi đưa vào Sprint.</li>
      </ol>
    `,
    scenarioExercise: {
      context: 'Hệ thống Thương mại điện tử ra mắt tính năng "Áp dụng Mã giảm giá Flash Sale: Giảm 20% tối đa 100.000 VNĐ cho đơn hàng có giá trị sản phẩm từ 300.000 VNĐ trở lên, mỗi tài khoản chỉ được dùng 1 lần duy nhất".',
      task: 'Hãy viết 3 tiêu chí nghiệm thu AC bằng định dạng Gherkin: 1. Áp mã thành công ở mức giảm tối đa; 2. Từ chối khi giá trị đơn hàng chưa đủ 300.000 VNĐ; 3. Từ chối khi tài khoản đã dùng mã này trước đó.',
      starterPrompt: 'AC 1 - Áp dụng thành công (Happy path):\nGiven ...\nWhen ...\nThen ...\n\nAC 2 - Đơn hàng chưa đạt giá trị tối thiểu:\nGiven ...\nWhen ...\nThen ...\n\nAC 3 - Tài khoản đã sử dụng mã trước đó:\nGiven ...\nWhen ...\nThen ...',
      sampleSolution: `
        <h4>Bộ Tiêu chí Nghiệm thu AC Chuẩn Gherkin</h4>
        <pre><code>Scenario: AC-01 - Áp mã thành công và chạm trần giảm giá tối đa
Given Khách hàng đã đăng nhập tài khoản "user_01" chưa từng sử dụng mã "FLASH20"
And Giỏ hàng có tổng giá trị sản phẩm là 600.000 VNĐ
When Khách hàng nhập mã giảm giá "FLASH20" và nhấn "Áp dụng"
Then Hệ thống áp dụng mã thành công
And Số tiền giảm giá được hiển thị là 100.000 VNĐ (thay vì 120.000 VNĐ do chạm mức trần tối đa)
And Tổng số tiền thanh toán được cập nhật thành 500.000 VNĐ.

Scenario: AC-02 - Từ chối khi giỏ hàng chưa đạt giá trị tối thiểu (Boundary Test)
Given Khách hàng có giỏ hàng với giá trị sản phẩm là 299.999 VNĐ
When Khách hàng nhập mã giảm giá "FLASH20" và nhấn "Áp dụng"
Then Hệ thống từ chối áp dụng mã
And Hiển thị thông báo lỗi: "Đơn hàng cần tối thiểu 300.000 VNĐ để sử dụng mã này"
And Tổng số tiền thanh toán giữ nguyên 299.999 VNĐ.

Scenario: AC-03 - Từ chối khi tài khoản đã từng sử dụng mã (Idempotent / Usage Limit)
Given Khách hàng "user_02" đã có 1 đơn hàng trước đó ở trạng thái "Đã thanh toán" sử dụng mã "FLASH20"
And Giỏ hàng hiện tại có giá trị 400.000 VNĐ
When Khách hàng nhập mã "FLASH20" và nhấn "Áp dụng"
Then Hệ thống từ chối áp dụng
And Hiển thị thông báo lỗi: "Mỗi tài khoản chỉ được sử dụng mã khuyến mãi này 1 lần".
</code></pre>
      `,
      rubricCriteria: [
        'Cú pháp chuẩn xác Given, When, Then, And.',
        'Đặc tả rõ ràng số tiền cụ thể và quy tắc trần tối đa 100.000 VNĐ.',
        'Xử lý chính xác giá trị biên 299.999 VNĐ và thông điệp lỗi trực quan.',
        'Bao gồm điều kiện tiên quyết kiểm tra lịch sử tài khoản đã dùng mã.'
      ]
    },
    relatedQuizIds: ['Q2-04', 'Q6-10', 'Q8-06'],
    relatedCaseId: 'CASE-02'
  },
  {
    id: 'TOPIC-BACCM',
    title: 'Mô hình Khái niệm Cốt lõi Business Analysis (BACCM) & Giá trị Nghiệp vụ',
    category: 'Nền tảng BA',
    summary: 'Bộ khung 6 khái niệm nền tảng của BABOK v3 giúp định hình mọi bài toán phân tích từ bản chất giá trị.',
    keywords: ['baccm', 'core concepts', 'business analysis core concept model', 'change', 'need', 'solution', 'stakeholder', 'value', 'context', 'khái niệm cốt lõi', 'giá trị'],
    sources: [
      { bookId: 'babok-v3', chapter: 'Chương 2 · Business Analysis Key Concepts (BACCM)', page: 21, notes: 'Định nghĩa 6 khái niệm cốt lõi và mối quan hệ hữu cơ không thể tách rời.' },
      { bookId: 'bcs-ba-3rd', chapter: 'Chương 1 · What is Business Analysis?', page: 35, notes: 'Định nghĩa vai trò BA trong việc kiến tạo giá trị thay đổi tổ chức.' },
      { bookId: '100-days-ba', chapter: 'DAY 6 & DAY 8', page: 14, notes: 'Không làm BA thợ gõ máy - Chuyển dịch từ người viết tài liệu sang người giải quyết vấn đề.' }
    ],
    perspectiveComparison: 'BABOK v3 chuẩn hóa 6 đỉnh lục giác BACCM bình đẳng nhau; BCS tiếp cận thực tế thông qua Business Change Lifecycle; Nguyễn Bá Phú đúc kết thành quy tắc "Hỏi chữ TẠI SAO 5 lần" trước khi bắt tay vào vẽ wireframe.',
    coreKnowledge: `
      <h4>6 Khái niệm trong Mô hình BACCM</h4>
      <table class="data-table" style="width:100%;font-size:13px">
        <tr><td><b>1. Change (Sự thay đổi)</b></td><td>Hành động chuyển dịch một tổ chức từ hiện trạng sang trạng thái tương lai nhằm đáp ứng nhu cầu.</td></tr>
        <tr><td><b>2. Need (Nhu cầu)</b></td><td>Vấn đề nhức nhối cần giải quyết hoặc cơ hội kinh doanh cần nắm bắt.</td></tr>
        <tr><td><b>3. Solution (Giải pháp)</b></td><td>Cách thức cụ thể (phần mềm, quy trình, chính sách) được xây dựng để thỏa mãn nhu cầu trong một bối cảnh.</td></tr>
        <tr><td><b>4. Stakeholder (Các bên liên quan)</b></td><td>Những cá nhân, nhóm người có ảnh hưởng hoặc chịu ảnh hưởng trực tiếp/gián tiếp bởi sự thay đổi.</td></tr>
        <tr><td><b>5. Value (Giá trị)</b></td><td>Lợi ích, tầm quan trọng hoặc sự hữu dụng mà giải pháp mang lại cho các bên liên quan trong bối cảnh cụ thể.</td></tr>
        <tr><td><b>6. Context (Bối cảnh)</b></td><td>Môi trường bao quanh sự thay đổi (văn hóa, công nghệ, pháp lý, đối thủ cạnh tranh).</td></tr>
      </table>
    `,
    applicationSteps: `
      <ol>
        <li>Khi nhận một yêu cầu tính năng, dùng 6 đỉnh BACCM để chất vấn: Ai cần nó? Vì sao cần? Bối cảnh là gì? Giá trị đo bằng gì?</li>
        <li>Nếu thay đổi 1 đỉnh (ví dụ thay đổi Context do luật mới), ngay lập tức đánh giá lại 5 đỉnh còn lại.</li>
      </ol>
    `,
    scenarioExercise: {
      context: 'Một chuỗi bệnh viện đa khoa tư nhân muốn xây dựng tính năng "Bác sĩ khám bệnh từ xa qua Video Call" (Telemedicine) trên ứng dụng di động.',
      task: 'Hãy phân tích bài toán này bằng cách điền thông tin vào 6 khái niệm của mô hình BACCM.',
      starterPrompt: '1. Need:\n2. Change:\n3. Solution:\n4. Context:\n5. Stakeholders:\n6. Value:',
      sampleSolution: `
        <h4>Phân tích Telemedicine bằng Mô hình BACCM</h4>
        <ul>
          <li><b>Need:</b> Bệnh nhân tái khám bệnh mãn tính ở xa ngại đến bệnh viện chờ đợi; Bệnh viện muốn giảm quá tải phòng khám và mở rộng nguồn thu ngoại tỉnh.</li>
          <li><b>Change:</b> Chuyển đổi quy trình khám bệnh trực tiếp truyền thống sang mô hình khám kết hợp Hybrid (Tele-consultation + Giao thuốc tận nhà).</li>
          <li><b>Solution:</b> Ứng dụng di động tích hợp WebRTC Video Call có mã hóa y tế, kê đơn thuốc điện tử có chữ ký số bác sĩ và liên kết cổng thanh toán viện phí.</li>
          <li><b>Context:</b> Luật Khám bệnh chữa bệnh sửa đổi cho phép Telehealth; Hạ tầng 4G/5G phổ cập; Rủi ro bảo mật dữ liệu sức khỏe cá nhân theo Nghị định 13.</li>
          <li><b>Stakeholders:</b> Bệnh nhân, Bác sĩ chuyên khoa, Dược sĩ nhà thuốc bệnh viện, Khối Pháp chế y tế, Đội ngũ kỹ thuật IT.</li>
          <li><b>Value:</b> Bệnh nhân tiết kiệm 70% thời gian đi lại; Bệnh viện tăng 25% lượt tái khám đúng hẹn và tối ưu công suất ngoài giờ của bác sĩ.</li>
        </ul>
      `,
      rubricCriteria: ['Phân biệt rõ ràng giữa Need (vấn đề cốt lõi) và Solution (phần mềm cụ thể)', 'Xác định được giá trị định lượng cho cả người bệnh lẫn bệnh viện']
    },
    relatedQuizIds: ['Q0-01', 'Q0-02', 'Q0-03'],
    relatedCaseId: 'CASE-04'
  },
  {
    id: 'TOPIC-STAKEHOLDER-MGMT',
    title: 'Phân tích, Lập bản đồ & Quản lý Kỳ vọng Stakeholders (Mendelow & RACI)',
    category: 'Khai thác yêu cầu',
    summary: 'Nghệ thuật phân loại các bên liên quan, nhận diện rủi ro chính trị nội bộ và lập ma trận cộng tác hiệu quả.',
    keywords: ['stakeholder', 'quản lý stakeholder', 'ma trận quyền lực', 'mendelow', 'power interest grid', 'raci', 'rasci', 'thấu cảm', 'onion diagram'],
    sources: [
      { bookId: 'babok-v3', chapter: 'Chương 3 · Task 3.2 Plan Stakeholder Engagement & Kỹ thuật 10.43', page: 41, notes: 'Phân tích ma trận quyền lực và mức độ ảnh hưởng của các bên liên quan.' },
      { bookId: 'bcs-ba-3rd', chapter: 'Chương 6 · Stakeholder Analysis and Management', page: 159, notes: 'Phân loại Stakeholders, Ma trận Mendelow, RACI và kỹ thuật CATWOE.' },
      { bookId: '100-days-ba', chapter: 'DAY 3, DAY 11 & DAY 28', page: 8, notes: 'Cách không bị đổ lỗi khi khách hàng nói "Tôi chưa từng nói thế bao giờ".' }
    ],
    perspectiveComparison: 'BABOK nhấn mạnh phân loại vai trò theo tiêu chuẩn quản trị; BCS đào sâu các chiến lược tương tác theo 4 góc phần tư Mendelow; 100 Ngày BA cung cấp chiến thuật thực chiến: luôn gửi biên bản chốt ý sau mỗi cuộc họp để bảo vệ tính minh bạch.',
    coreKnowledge: `
      <h4>4 Nhóm Stakeholder theo Ma trận Mendelow</h4>
      <ul>
        <li><b>Quyền lực Cao / Quan tâm Cao (Key Players):</b> Cần quản lý chặt chẽ (Manage Closely), mời tham vấn thường xuyên và duy trì sự đồng thuận tuyệt đối.</li>
        <li><b>Quyền lực Cao / Quan tâm Thấp:</b> Giữ cho họ hài lòng (Keep Satisfied), gửi báo cáo cô đọng các mốc quan trọng, tránh lôi kéo vào họp vụn vặt.</li>
        <li><b>Quyền lực Thấp / Quan tâm Cao:</b> Cập nhật thông tin đầy đủ (Keep Informed), lắng nghe ý kiến phản hồi chi tiết vì họ là người dùng trực tiếp.</li>
        <li><b>Quyền lực Thấp / Quan tâm Thấp:</b> Giám sát với nỗ lực tối thiểu (Monitor with minimal effort).</li>
      </ul>
    `,
    applicationSteps: `
      <ol>
        <li>Liệt kê danh sách tất cả các bên liên quan (Internal & External).</li>
        <li>Chấm điểm vị trí của từng người trên trục Quyền lực và Mức độ quan tâm.</li>
        <li>Lập bảng RACI phân định rõ: R (Responsible - Người làm), A (Accountable - Người chịu trách nhiệm phê duyệt duy nhất), C (Consulted - Người được tham vấn), I (Informed - Người nhận thông báo).</li>
      </ol>
    `,
    scenarioExercise: {
      context: 'Dự án triển khai phần mềm Số hóa Quy trình Phê duyệt Mua sắm (E-Procurement). Giám đốc Tài chính (CFO) có quyền ký duyệt ngân sách dự án nhưng rất bận rộn; Trưởng phòng Mua sắm là người trực tiếp dùng phần mềm mỗi ngày; Nhân viên IT phụ trách tích hợp máy chủ; Chuyên viên kiểm toán nội bộ quan tâm đến tính bảo mật chứng từ.',
      task: 'Xếp 4 nhân vật trên vào 4 ô của Ma trận Mendelow và đề xuất chiến lược giao tiếp phù hợp cho từng người.',
      starterPrompt: '1. Giám đốc Tài chính (CFO):\n- Phân nhóm:\n- Chiến lược:\n\n2. Trưởng phòng Mua sắm:\n- Phân nhóm:\n- Chiến lược:\n\n3. Chuyên viên Kiểm toán nội bộ:\n- Phân nhóm:\n- Chiến lược:\n\n4. Nhân viên IT vận hành:\n- Phân nhóm:\n- Chiến lược:',
      sampleSolution: `
        <h4>Phân loại Ma trận Mendelow & Kế hoạch Tương tác</h4>
        <ul>
          <li><b>CFO:</b> High Power / Low Interest ➔ <i>Keep Satisfied</i>. Không gửi email dài; mỗi 2 tuần gửi 1 bản tóm tắt 1 trang (Executive Summary) về tiến độ và chỉ số tiết kiệm chi phí dự kiến.</li>
          <li><b>Trưởng phòng Mua sắm:</b> High Power / High Interest ➔ <i>Manage Closely</i>. Mời làm Subject Matter Expert (SME) đồng thiết kế quy trình, demo Prototype hàng tuần để lấy feedback.</li>
          <li><b>Chuyên viên Kiểm toán:</b> Low-to-Medium Power / High Interest ➔ <i>Keep Informed / Consult</i>. Tham vấn về yêu cầu lưu vết nhật ký kiểm toán (Audit Trail) để đảm bảo tuân thủ từ đầu.</li>
          <li><b>Nhân viên IT:</b> Low Power / Low-to-Medium Interest ➔ <i>Monitor & Keep Informed</i>. Gửi tài liệu đặc tả API và lịch bàn giao kỹ thuật trước các đợt kiểm thử.</li>
        </ul>
      `,
      rubricCriteria: ['Phân loại đúng CFO vào nhóm Keep Satisfied và Trưởng phòng Mua sắm vào Key Players', 'Đề xuất chiến lược truyền thông có tính thực tế cao']
    },
    relatedQuizIds: ['Q1-03', 'Q1-04', 'Q9-04', 'Q9-07'],
    relatedCaseId: 'CASE-01'
  },
  {
    id: 'TOPIC-BPMN-PROCESS',
    title: 'Mô hình hóa Quy trình Nghiệp vụ Chuẩn với BPMN 2.0 & Flowchart',
    category: 'Mô hình hóa quy trình',
    summary: 'Kỹ thuật vẽ sơ đồ quy trình trực quan, phân định trách nhiệm phân làn (Swimlanes) và logic rẽ nhánh chuẩn mực quốc tế.',
    keywords: ['mô hình hóa quy trình', 'bpmn', 'flowchart', 'swimlane', 'pool', 'gateway', 'exclusive gateway', 'parallel gateway', 'as-is', 'to-be'],
    sources: [
      { bookId: 'babok-v3', chapter: 'Chương 10 · Kỹ thuật 10.35 Process Modelling', page: 334, notes: 'Mô tả tuần tự các hoạt động nghiệp vụ từ sự kiện kích hoạt đến kết quả đầu ra.' },
      { bookId: 'bcs-ba-3rd', chapter: 'Chương 7 · Modelling Business Processes', page: 186, notes: 'Quy trình phân làn Swimlane, phân tích As-Is và cải tiến quy trình To-Be.' },
      { bookId: '100-days-ba', chapter: 'DAY 15, DAY 33 & DAY 58', page: 32, notes: 'Kinh nghiệm vẽ flow: Không vẽ một đống mũi tên chéo nhau khiến lập trình viên nhìn vào là muốn bỏ chạy.' }
    ],
    perspectiveComparison: 'BABOK định nghĩa BPMN theo chuẩn OMG với các ký hiệu chính xác về Event, Activity, Gateway; BCS tập trung vào chuỗi giá trị tổ chức (Organizational Business Process); 100 Ngày BA nhấn mạnh việc phân biệt rõ làn người dùng vs làn hệ thống để Dev biết chính xác chỗ nào cần viết API tự động.',
    coreKnowledge: `
      <h4>Các thành phần cốt lõi trong sơ đồ BPMN 2.0</h4>
      <ul>
        <li><b>Pool & Swimlane:</b> Phân định ranh giới tổ chức và vai trò tham gia (ví dụ Làn Khách hàng, Làn Nhân viên, Làn Hệ thống Gateway).</li>
        <li><b>Events:</b> Điểm bắt đầu (Start Event - vòng tròn đơn), Sự kiện trung gian (Timer, Message), Điểm kết thúc (End Event - vòng tròn đậm).</li>
        <li><b>Gateways:</b> Exclusive Gateway (XOR - chỉ chọn 1 trong các nhánh), Parallel Gateway (AND - thực hiện đồng thời tất cả các nhánh), Inclusive Gateway (OR).</li>
        <li><b>Sequence Flow:</b> Mũi tên liền nét thể hiện thứ tự thực hiện giữa các hoạt động trong cùng 1 Pool.</li>
      </ul>
    `,
    applicationSteps: `
      <ol>
        <li>Xác định mục tiêu quy trình và điểm kích hoạt đầu tiên (Trigger).</li>
        <li>Liệt kê các bên tham gia để chia Làn (Lanes).</li>
        <li>Vẽ luồng thành công chính (Happy path) từ trái qua phải.</li>
        <li>Gắn các Gateway để xử lý kịch bản rẽ nhánh và ngoại lệ.</li>
      </ol>
    `,
    scenarioExercise: {
      context: 'Quy trình xét duyệt Hồ sơ Vay tín chấp tiêu dùng: Khách hàng nộp hồ sơ trực tuyến ➔ Hệ thống chấm điểm tín nhiệm tự động (Credit Scoring) ➔ Nếu điểm dưới 500 thì tự động từ chối; Nếu điểm từ 500 đến 700 thì chuyển Chuyên viên thẩm định gọi điện kiểm tra; Nếu điểm trên 700 thì chuyển thẳng Trưởng phòng phê duyệt giải ngân.',
      task: 'Mô tả cấu trúc sơ đồ BPMN: các Làn cần có, loại Gateway sử dụng và các điều kiện rẽ nhánh.',
      starterPrompt: '1. Các Swimlanes:\n2. Điểm bắt đầu (Start Event):\n3. Gateway & Các nhánh điều kiện:\n4. Các điểm kết thúc (End Events):',
      sampleSolution: `
        <h4>Mô tả Cấu trúc BPMN Xét duyệt Vay tín chấp</h4>
        <ul>
          <li><b>Pool/Lanes:</b> 4 làn: Làn 1 - Khách hàng; Làn 2 - Hệ thống Core AI Scoring; Làn 3 - Chuyên viên thẩm định; Làn 4 - Trưởng phòng phê duyệt.</li>
          <li><b>Start Event:</b> Bắt đầu khi khách hàng submit form đăng ký vay thành công.</li>
          <li><b>Gateway 1 (Exclusive Gateway - Chấm điểm tín nhiệm):</b>
            <ul>
              <li>Nhánh [Điểm < 500]: Gửi email thông báo từ chối ➔ End Event (Bị từ chối).</li>
              <li>Nhánh [500 <= Điểm <= 700]: Giao task gọi điện cho Chuyên viên thẩm định ở Làn 3.</li>
              <li>Nhánh [Điểm > 700]: Bỏ qua thẩm định, chuyển thẳng duyệt ở Làn 4.</li>
            </ul>
          </li>
          <li><b>Gateway 2 (Quyết định của Chuyên viên thẩm định):</b> Duyệt hồ sơ ➔ Chuyển Làn 4; Không duyệt ➔ Kết thúc.</li>
          <li><b>End Event:</b> 2 kết quả cuối cùng: Hồ sơ bị từ chối hoặc Khoản vay được giải ngân thành công.</li>
        </ul>
      `,
      rubricCriteria: ['Sử dụng đúng Exclusive Gateway (XOR) cho các điều kiện loại trừ lẫn nhau', 'Phân làn hợp lý giữa tác vụ tự động của máy và tác vụ phê duyệt của con người']
    },
    relatedQuizIds: ['Q3-01', 'Q3-02', 'Q3-06', 'Q3-14'],
    relatedCaseId: 'CASE-01'
  },
  {
    id: 'TOPIC-STATE-MACHINE',
    title: 'Biểu đồ Trạng thái (State Machine Diagram) & Tính Bất biến Idempotency',
    category: 'Mô hình hóa quy trình',
    summary: 'Kỹ thuật kiểm soát vòng đời đối tượng dữ liệu, ngăn chặn việc chuyển trạng thái bất hợp pháp và xử lý trùng lặp giao dịch.',
    keywords: ['sơ đồ trạng thái', 'state machine', 'state diagram', 'vòng đời đơn hàng', 'chuyển trạng thái', 'transition', 'idempotency', 'wes wcs'],
    sources: [
      { bookId: 'babok-v3', chapter: 'Chương 10 · Kỹ thuật 10.44 State Modelling', page: 356, notes: 'Mô hình hóa các trạng thái hợp lệ và sự kiện kích hoạt chuyển dịch vòng đời đối tượng.' },
      { bookId: '100-days-ba', chapter: 'DAY 2, DAY 41 & DAY 69', page: 94, notes: 'Lỗ hổng chết người của BA: Thiết kế thiếu trạng thái trung gian khiến hệ thống bị treo đơn hàng.' }
    ],
    perspectiveComparison: 'BABOK định nghĩa State Machine ở mức thiết kế hướng đối tượng UML; 100 Ngày BA chỉ ra bài toán thực chiến: trong hệ thống phân tán, luôn phải có trạng thái chuyển tiếp (Transitional State như PROCESSING, PENDING) và luật Idempotent để đề phòng người dùng double-click hoặc mạng chập chờn gửi 2 request trùng nhau.',
    coreKnowledge: `
      <h4>1. Các thành phần của State Machine</h4>
      <ul>
        <li><b>State (Trạng thái):</b> Điều kiện hoặc tình trạng tồn tại của đối tượng tại một thời điểm (ví dụ DRAFT, SUBMITTED, APPROVED, REJECTED).</li>
        <li><b>Transition (Chuyển dịch):</b> Mũi tên từ trạng thái A sang trạng thái B khi có sự kiện kích hoạt.</li>
        <li><b>Event / Trigger (Sự kiện):</b> Hành động làm thay đổi trạng thái (ví dụ Người dùng bấm Xác nhận, Webhook ngân hàng báo thành công).</li>
        <li><b>Guard Condition (Điều kiện rào chắn):</b> Biểu thức logic bắt buộc phải đúng thì chuyển dịch mới được phép xảy ra.</li>
      </ul>
      <h4>2. Nguyên tắc Idempotency trong State Machine</h4>
      <p>Một thao tác được gọi là Idempotent nếu việc thực hiện nó 1 lần hay 100 lần liên tiếp đều cho ra cùng một kết quả trạng thái dữ liệu duy nhất mà không gây tác dụng phụ (Side effect).</p>
    `,
    applicationSteps: `
      <ol>
        <li>Xác định đối tượng nghiệp vụ cốt lõi (Entity: Đơn hàng, Vé máy bay, Hồ sơ vay).</li>
        <li>Liệt kê tất cả các trạng thái có thể có từ khi sinh ra (Initial State) đến khi kết thúc (Final State).</li>
        <li>Vẽ Ma trận chuyển trạng thái (State Transition Matrix): Hàng là Trạng thái hiện tại, Cột là Sự kiện, Ô giao nhau là Trạng thái mới.</li>
        <li>Quy định rõ ràng: Nếu nhận sự kiện cho một trạng thái đã qua (ví dụ nhận lệnh CANCEL khi đơn hàng đã DELIVERED) thì hệ thống phải bỏ qua an toàn mà không báo lỗi sập server.</li>
      </ol>
    `,
    scenarioExercise: {
      context: 'Thiết kế vòng đời thanh toán trực tuyến qua Cổng trung gian. Người dùng bấm "Thanh toán", cổng ngân hàng trừ tiền nhưng do mạng chậm, ngân hàng gửi lại 2 bản tin Webhook "PAYMENT_SUCCESS" cách nhau 500ms.',
      task: 'Hãy lập bảng chuyển trạng thái cho Đơn hàng và đặc tả quy tắc Idempotency để tránh việc cộng điểm thưởng hoặc xuất 2 đơn hàng trùng nhau.',
      starterPrompt: 'Trạng thái ban đầu: PENDING_PAYMENT\n\nBảng chuyển trạng thái:\n- Hiện tại: PENDING_PAYMENT -> Nhận Webhook lần 1 -> Trạng thái mới: ...\n- Hiện tại: ... -> Nhận Webhook lần 2 -> Trạng thái mới: ...\n\nQuy tắc Idempotent Rule:',
      sampleSolution: `
        <h4>Thiết kế State Machine & Idempotency Rule</h4>
        <table class="data-table" style="width:100%;font-size:13px">
          <thead>
            <tr><th>Trạng thái hiện tại</th><th>Sự kiện kích hoạt</th><th>Guard Condition</th><th>Trạng thái mới</th><th>Hành động kèm theo</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>CREATED</td>
              <td>Người dùng bấm Thanh toán</td>
              <td>Giỏ hàng còn tồn kho</td>
              <td>PENDING_PAYMENT</td>
              <td>Khóa tạm giữ tồn kho (Soft Reservation 15 phút)</td>
            </tr>
            <tr>
              <td>PENDING_PAYMENT</td>
              <td>Nhận Webhook Success (Lần 1)</td>
              <td>Chữ ký điện tử (Signature) hợp lệ</td>
              <td>PAID</td>
              <td>Cộng điểm thưởng, gửi đơn sang WMS xuất kho</td>
            </tr>
            <tr>
              <td>PAID</td>
              <td>Nhận Webhook Success (Lần 2)</td>
              <td>Cùng mã TransactionId đã xử lý</td>
              <td><b>PAID (Giữ nguyên)</b></td>
              <td><b>Bỏ qua việc cộng điểm/xuất kho; chỉ phản hồi HTTP 200 OK cho ngân hàng</b></td>
            </tr>
          </tbody>
        </table>
      `,
      rubricCriteria: ['Xác định trạng thái không đổi khi nhận trùng webhook', 'Đặc tả rõ cơ chế chống cộng điểm thưởng thừa (Idempotent Handler)']
    },
    relatedQuizIds: ['Q3-04', 'Q3-15', 'Q4-14', 'Q2-14'],
    relatedCaseId: 'CASE-01'
  },
  {
    id: 'TOPIC-SOLUTION-ARCHITECTURE',
    title: 'Phân tích Kiến trúc Giải pháp & Tích hợp API (Sync vs Async)',
    category: 'Phân tích & thiết kế giải pháp',
    summary: 'Tư duy kiến trúc hệ thống dành cho BA: Giao tiếp đồng bộ RESTful API, bất đồng bộ Message Queue và Webhook.',
    keywords: ['kiến trúc giải pháp', 'solution architecture', 'api integration', 'đồng bộ', 'bất đồng bộ', 'sync async', 'message queue', 'webhook', 'microservices'],
    sources: [
      { bookId: 'babok-v3', chapter: 'Chương 7 · Task 7.5 Define Design Options & Góc nhìn 11.3 IT', page: 162, notes: 'Lựa chọn phương án công nghệ, giao tiếp phân tán và khả năng mở rộng.' },
      { bookId: 'bcs-ba-3rd', chapter: 'Chương 8 · Defining the Solution (Business Architecture)', page: 228, notes: 'Kết nối kiến trúc nghiệp vụ với các khối công nghệ giải pháp.' },
      { bookId: '100-days-ba', chapter: 'DAY 12, DAY 38 & DAY 62', page: 26, notes: 'Hiểu cách hệ thống vận hành là nền tảng quan trọng nhất để BA trưởng thành và tự tin nói chuyện với Tech Lead.' }
    ],
    perspectiveComparison: 'BABOK xem xét kiến trúc ở tầng phân tích Trade-off chi phí vs giá trị; BCS định nghĩa cấu trúc tầng Business Architecture; Nguyễn Bá Phú hướng dẫn BA đọc hiểu định dạng JSON, phân biệt mã lỗi HTTP 4xx (lỗi client) vs 5xx (lỗi server) để không bắt bừa lỗi của dev.',
    coreKnowledge: `
      <h4>Phân biệt Tích hợp Đồng bộ và Bất đồng bộ</h4>
      <ul>
        <li><b>Đồng bộ (Synchronous - REST API / gRPC):</b> Hệ thống A gửi yêu cầu đến B và bị khóa lại (Blocking) chờ B xử lý xong trả lời. Dùng khi cần kết quả tức thời (ví dụ: xác thực mật khẩu, kiểm tra số dư). Nhược điểm: Nếu B chậm, A sẽ bị đơ theo.</li>
        <li><b>Bất đồng bộ (Asynchronous - Message Queue Kafka / RabbitMQ):</b> Hệ thống A ném thông điệp vào hàng đợi rồi quay về làm việc khác ngay lập tức; B lấy thông điệp ra xử lý khi rảnh. Dùng khi tác vụ nặng, mất thời gian (ví dụ: xuất báo cáo Excel 100.000 dòng, gửi email hàng loạt).</li>
      </ul>
    `,
    applicationSteps: `
      <ol>
        <li>Xác định yêu cầu SLA về thời gian phản hồi: Dưới 1 giây hay có thể chờ vài phút?</li>
        <li>Vẽ sơ đồ trình tự Sequence Diagram thể hiện luồng giao tiếp giữa các thành phần.</li>
        <li>Quy định rõ cấu trúc Request/Response JSON, mã trạng thái HTTP (200, 400, 404, 500) và cơ chế Retry khi mạng lỗi.</li>
      </ol>
    `,
    scenarioExercise: {
      context: 'Hệ thống Quản lý Bán hàng cần đồng bộ dữ liệu hóa đơn xuất trong ngày sang Hệ thống Kế toán ERP cũ. Hệ thống kế toán rất chậm, mỗi hóa đơn mất 3 giây để lưu vào cơ sở dữ liệu. Nếu gửi đồng bộ lúc khách tính tiền tại quầy, thu ngân sẽ phải đợi 3 giây mỗi đơn.',
      task: 'Hãy đề xuất giải pháp kiến trúc tích hợp giữa máy POS bán hàng và hệ thống Kế toán ERP. Vẽ luồng hoạt động chính và cơ chế đảm bảo không mất hóa đơn nếu máy chủ kế toán bị sập.',
      starterPrompt: '1. Lựa chọn cơ chế tích hợp (Sync hay Async? Vì sao?):\n2. Luồng xử lý tại quầy thu ngân (POS):\n3. Luồng xử lý ngầm (Background Job / Queue):\n4. Cơ chế dự phòng khi ERP sập:',
      sampleSolution: `
        <h4>Giải pháp Kiến trúc Bất đồng bộ qua Hàng đợi (Message Queue)</h4>
        <ul>
          <li><b>Cơ chế lựa chọn:</b> Bất đồng bộ (Asynchronous Integration via Message Queue) để loại bỏ độ trễ 3 giây tại quầy thanh toán.</li>
          <li><b>Luồng tại POS:</b> Khi khách thanh toán xong, POS lưu hóa đơn vào CSDL cục bộ và đẩy 1 Event <code>InvoiceCreated</code> vào Message Queue (RabbitMQ), sau đó in bill cho khách ngay lập tức (dưới 300ms).</li>
          <li><b>Luồng xử lý ngầm:</b> Một dịch vụ nền (Worker Service) lắng nghe Queue, lấy từng hóa đơn gửi sang ERP kế toán. Dù ERP mất 3 giây xử lý thì hàng đợi vẫn giữ thông điệp an toàn.</li>
          <li><b>Cơ chế dự phòng khi ERP sập:</b> Sử dụng Dead Letter Queue (DLQ) kết hợp cơ chế Exponential Backoff Retry. Khi ERP sống lại, hệ thống tự động đẩy hóa đơn tồn đọng sang mà không làm gián đoạn việc bán hàng tại quầy.</li>
        </ul>
      `,
      rubricCriteria: ['Đề xuất chính xác cơ chế Asynchronous / Message Queue', 'Có giải pháp Dead Letter Queue hoặc Retry dự phòng chống mất dữ liệu']
    },
    relatedQuizIds: ['Q4-01', 'Q4-02', 'Q4-06', 'Q4-15'],
    relatedCaseId: 'CASE-01'
  },
  {
    id: 'TOPIC-DATA-SQL-RECON',
    title: 'Dữ liệu & SQL Đối soát cho BA (Data Modeling, ERD & Reconciliation)',
    category: 'Dữ liệu & SQL',
    summary: 'Kỹ năng thiết kế lược đồ quan hệ thực thể ERD, viết câu lệnh SQL truy vấn và đối soát khớp số liệu kế toán.',
    keywords: ['dữ liệu', 'data model', 'erd', 'sql', 'join', 'left join', 'group by', 'having', 'đối soát', 'reconciliation', 'khóa ngoại', 'foreign key'],
    sources: [
      { bookId: 'babok-v3', chapter: 'Chương 10 · Kỹ thuật 10.14 Data Flow & 10.15 Data Modelling', page: 268, notes: 'Mô hình hóa thực thể, thuộc tính và mối quan hệ quan trọng đối với tổ chức.' },
      { bookId: '100-days-ba', chapter: 'DAY 13, DAY 31 & DAY 57', page: 28, notes: 'Làm sao để biết hệ thống cần lưu những thông tin gì? Xác định rõ Entity, Attribute và Ràng buộc toàn vẹn.' }
    ],
    perspectiveComparison: 'BABOK định nghĩa mô hình dữ liệu ở cả 3 mức Conceptual, Logical, Physical; 100 Ngày BA hướng dẫn cách BA dùng câu lệnh SQL LEFT JOIN để tự mình kiểm chứng số liệu xem Dev có tính sai logic hay không thay vì tin lời Dev 100%.',
    coreKnowledge: `
      <h4>1. Các mối quan hệ cốt lõi trong ERD</h4>
      <ul>
        <li><b>1 - 1 (Một - Một):</b> Ví dụ 1 Người dùng có 1 Hồ sơ định danh eKYC.</li>
        <li><b>1 - N (Một - Nhiều):</b> Ví dụ 1 Khách hàng có Nhiều Đơn hàng.</li>
        <li><b>N - N (Nhiều - Nhiều):</b> Ví dụ 1 Đơn hàng có Nhiều Sản phẩm, 1 Sản phẩm nằm trong Nhiều Đơn hàng ➔ Bắt buộc phải có Bảng trung gian (Junction Table) <code>Order_Items</code>.</li>
      </ul>
      <h4>2. Logic SQL then chốt cho BA</h4>
      <p><b>INNER JOIN:</b> Phép giao dữ liệu. <b>LEFT JOIN:</b> Giữ lại 100% bản ghi bảng bên trái (rất quan trọng khi tìm các đơn hàng chưa thanh toán hoặc khách hàng chưa mua hàng lần nào bằng điều kiện <code>WHERE right_table.id IS NULL</code>).</p>
    `,
    applicationSteps: `
      <ol>
        <li>Xác định các thực thể chính (Danh từ trong yêu cầu).</li>
        <li>Vẽ lược đồ ERD với các khóa chính (PK) và khóa ngoại (FK).</li>
        <li>Viết script đối soát (Data Reconciliation Script) so sánh tổng số tiền trên hệ thống giao dịch so với sổ cái tài chính cuối ngày.</li>
      </ol>
    `,
    scenarioExercise: {
      context: 'Có 2 bảng dữ liệu: <code>Orders</code> (id, customer_id, order_date, total_amount, status) và <code>Customers</code> (id, full_name, city, created_at).',
      task: 'Viết câu truy vấn SQL tìm danh sách tất cả khách hàng ở thành phố "Hà Nội" nhưng CHƯA TỪNG đặt bất kỳ đơn hàng nào trong năm 2026.',
      starterPrompt: 'SELECT ...\nFROM Customers c\nLEFT JOIN Orders o ON ...\nWHERE ...',
      sampleSolution: `
        <h4>Câu lệnh SQL Truy vấn & Giải thích</h4>
        <pre><code>SELECT 
    c.id AS customer_id,
    c.full_name,
    c.city
FROM Customers c
LEFT JOIN Orders o 
    ON c.id = o.customer_id 
    AND o.order_date >= '2026-01-01' 
    AND o.order_date <= '2026-12-31'
WHERE c.city = 'Hà Nội'
  AND o.id IS NULL;
</code></pre>
        <h5>Giải thích kỹ thuật:</h5>
        <p>Sử dụng <b>LEFT JOIN</b> với bảng Orders theo điều kiện năm 2026. Những khách hàng chưa từng phát sinh đơn hàng sẽ có các trường dữ liệu bên bảng Orders nhận giá trị <b>NULL</b>. Mệnh đề <code>WHERE o.id IS NULL</code> sẽ lọc chính xác nhóm khách hàng này.</p>
      `,
      rubricCriteria: ['Sử dụng đúng LEFT JOIN kết hợp điều kiện IS NULL', 'Lọc đúng thành phố Hà Nội và khoảng thời gian năm 2026']
    },
    relatedQuizIds: ['Q5-01', 'Q5-02', 'Q5-06', 'Q8-18'],
    relatedCaseId: 'CASE-02'
  },
  {
    id: 'TOPIC-UAT-VERIFICATION',
    title: 'Thiết kế Kịch bản UAT, Phân tích Biên (BVA) & Ký duyệt Nghiệm thu Có điều kiện',
    category: 'Testing & UAT',
    summary: 'Quy trình tổ chức nghiệm thu chấp nhận người dùng UAT, phân định Defect vs CR và xử lý áp lực ký bàn giao.',
    keywords: ['uat', 'kiểm thử nghiệm thu', 'test case', 'bva', 'giá trị biên', 'equivalence partitioning', 'sign-off', 'conditional sign-off', 'defect vs cr'],
    sources: [
      { bookId: 'babok-v3', chapter: 'Chương 7 · Task 7.2 Verify Requirements & Task 7.3 Validate Requirements', page: 151, notes: 'Đảm bảo yêu cầu được thực hiện chuẩn xác và giải quyết đúng mục tiêu của người dùng.' },
      { bookId: 'bcs-ba-3rd', chapter: 'Chương 5 · Investigation Techniques (Scenarios & Acceptance)', page: 139, notes: 'Xây dựng kịch bản kiểm định nghiệp vụ người dùng cuối.' },
      { bookId: '100-days-ba', chapter: 'DAY 1, DAY 16 & DAY 70', page: 4, notes: 'Release không phải điểm kết thúc mà là lúc BA chứng minh giá trị: 5 việc BA phải làm ngay sau khi Go-Live.' }
    ],
    perspectiveComparison: 'BABOK v3 phân định rõ Verification (làm đúng quy cách) vs Validation (làm đúng thứ khách cần); 100 Ngày BA cung cấp cẩm nang thực chiến: xử lý thế nào khi người dùng nghiệp vụ lười test và đổ dồn áp lực nghiệm thu lên vai BA.',
    coreKnowledge: `
      <h4>1. Phân định Defect (Lỗi) và Change Request (Yêu cầu thay đổi) trong UAT</h4>
      <ul>
        <li><b>Defect (Bug):</b> Phần mềm chạy sai lệch so với tài liệu đặc tả SRS/AC đã thống nhất trước đó ➔ Đội Dev có trách nhiệm sửa chữa miễn phí.</li>
        <li><b>Change Request (CR):</b> Nhu cầu mới phát sinh ngoài tài liệu đặc tả đã ký kết, hoặc người dùng muốn đổi logic giao diện khác với thỏa thuận ➔ Phải đánh giá chi phí, thời gian và thương lượng kế hoạch bổ sung.</li>
      </ul>
      <h4>2. Ký nghiệm thu có điều kiện (Conditional Sign-off)</h4>
      <p>Khi đến hạn Go-live nhưng còn tồn tại lỗi Minor không ảnh hưởng luồng chính, BA lập biên bản nghiệm thu có điều kiện kèm Workaround và cam kết SLA Hotfix để vừa kịp tiến độ kinh doanh vừa kiểm soát rủi ro.</p>
    `,
    applicationSteps: `
      <ol>
        <li>Tổ chức Guided UAT Workshop có phân vai và dữ liệu mẫu rõ ràng.</li>
        <li>Áp dụng Phân tích giá trị biên BVA để thiết kế test case mép.</li>
        <li>Phân loại Defect Triage hàng ngày: Blocker, Critical, Major, Minor.</li>
        <li>Lập biên bản Sign-off có phụ lục Known Issues & Workarounds.</li>
      </ol>
    `,
    scenarioExercise: {
      context: 'Còn 1 ngày trước thời điểm Go-Live, hệ thống còn 1 lỗi: Chức năng xuất báo cáo định kỳ tổng kết doanh thu lúc nửa đêm bị chậm 40 phút, nhưng các chức năng bán hàng và quét mã vạch đều mượt mà 100%. Sếp kinh doanh ép BA phải ký nghiệm thu vô điều kiện để khai trương.',
      task: 'Là BA, bạn có ký vô điều kiện không? Hãy soạn thảo nội dung Biên bản nghiệm thu có điều kiện (Conditional Sign-off) bao gồm giải pháp tạm thời (Workaround) và cam kết sửa lỗi.',
      starterPrompt: 'Quyết định ký (Có/Không vô điều kiện):\nLý do:\nNội dung Biên bản nghiệm thu có điều kiện:\n- Lỗi tồn đọng:\n- Quy trình xử lý tạm thời (Workaround):\n- Cam kết phát hành bản vá (Hotfix SLA):',
      sampleSolution: `
        <h4>Biên bản Nghiệm thu Có Điều kiện (Conditional Sign-off)</h4>
        <p><b>Quyết định:</b> Từ chối ký vô điều kiện. Chấp thuận ký <b>Nghiệm thu có điều kiện (Conditional Acceptance)</b> có sự phê duyệt đồng thuận của Ban Điều hành.</p>
        <h5>Nội dung biên bản:</h5>
        <ul>
          <li><b>Lỗi tồn đọng ghi nhận:</b> Bug #DEF-204 - Báo cáo tổng kết doanh thu đêm lúc 23h59 bị timeout kéo dài 40 phút. Mức độ ảnh hưởng: Không ảnh hưởng đến các giao dịch bán hàng trực tiếp của khách hàng ban ngày.</li>
          <li><b>Quy trình thao tác tạm thời (SOP Workaround):</b> Phân công nhân viên trực vận hành chạy script truy vấn bù lúc 01h00 sáng để xuất dữ liệu gửi sang bộ phận kế toán trước 07h00 sáng mỗi ngày.</li>
          <li><b>Cam kết Hotfix SLA:</b> Đội ngũ Kỹ thuật tối ưu hóa chỉ mục Index SQL và phát hành bản vá Production Hotfix v1.0.1 trong vòng 48 giờ sau Go-live (trước 23h59 ngày thứ Ba).</li>
        </ul>
      `,
      rubricCriteria: ['Kiên quyết từ chối ký vô điều kiện', 'Xây dựng giải pháp Workaround khả thi và có thời hạn cam kết Hotfix SLA rõ ràng']
    },
    relatedQuizIds: ['Q8-02', 'Q8-03', 'Q8-06', 'Q8-14', 'Q8-17'],
    relatedCaseId: 'CASE-01'
  },
  {
    id: 'TOPIC-ELICITATION-TECH',
    title: 'Kỹ thuật Khai thác & Phỏng vấn Yêu cầu Chuyên sâu',
    category: 'Khai thác yêu cầu',
    summary: 'Nghệ thuật chuẩn bị câu hỏi phỏng vấn, điều phối hội thảo requirements workshop và lắng nghe chủ động.',
    keywords: ['khai thác yêu cầu', 'elicitation', 'interview', 'phỏng vấn', 'workshop', 'observation', 'quan sát', 'open ended question', 'câu hỏi mở'],
    sources: [
      { bookId: 'babok-v3', chapter: 'Chương 4 · Elicitation and Collaboration & Kỹ thuật 10.25 Interviews', page: 63, notes: 'Quy trình chuẩn bị, tiến hành, xác nhận và truyền thông kết quả khai thác yêu cầu.' },
      { bookId: 'bcs-ba-3rd', chapter: 'Chương 5 · Investigation Techniques', page: 121, notes: 'Bộ kỹ thuật điều tra: Phỏng vấn, Quan sát (Shadowing), Hội thảo và Điều tra định lượng.' },
      { bookId: '100-days-ba', chapter: 'DAY 14, DAY 21 & DAY 35', page: 30, notes: 'Bí quyết đặt câu hỏi: Đừng bao giờ hỏi "Khách muốn phần mềm làm gì?", hãy hỏi "Hiện tại anh chị đang gặp khó khăn gì nhất?".' }
    ],
    perspectiveComparison: 'BABOK v3 quy định các bước khai thác có kiểm chứng (Confirm Elicitation Results); BCS phân tích chi tiết ưu nhược điểm của từng phương pháp điều tra; 100 Ngày BA nhấn mạnh việc ghi âm/ghi chú có cấu trúc và gửi xác nhận ngay trong 24 giờ.',
    coreKnowledge: `
      <h4>1. Các kỹ thuật khai thác yêu cầu chủ đạo</h4>
      <ul>
        <li><b>Phỏng vấn (Interviews):</b> Đào sâu góc nhìn cá nhân của từng chuyên gia nghiệp vụ. Phù hợp khi tìm hiểu chi tiết nghiệp vụ chuyên biệt.</li>
        <li><b>Hội thảo yêu cầu (Workshops):</b> Tập hợp các bên liên quan cùng thảo luận để tìm tiếng nói chung và giải quyết xung đột nhanh chóng.</li>
        <li><b>Quan sát (Observation / Shadowing):</b> Trực tiếp đi thực tế để xem người dùng thao tác ngoài đời, phát hiện các tác vụ ngầm mà phỏng vấn bỏ sót.</li>
      </ul>
      <h4>2. Nghệ thuật sử dụng Câu hỏi Mở vs Câu hỏi Đóng</h4>
      <p>Câu hỏi mở (What, How, Why) dùng ở giai đoạn đầu để mở rộng tư duy và tìm hiểu bối cảnh; câu hỏi đóng (Yes/No, Chọn A hay B) dùng ở giai đoạn cuối để chốt hạ quyết định.</p>
    `,
    applicationSteps: `
      <ol>
        <li>Nghiên cứu tài liệu hiện hành trước buổi phỏng vấn (Desk research).</li>
        <li>Lập danh sách câu hỏi theo cấu trúc phễu (Từ tổng quan đến chi tiết).</li>
        <li>Tiến hành phỏng vấn kết hợp lắng nghe tích cực và diễn giải lại (Paraphrasing).</li>
        <li>Gửi biên bản xác nhận kết quả (Meeting Minutes) trong vòng 24 giờ.</li>
      </ol>
    `,
    scenarioExercise: {
      context: 'Bạn được giao nhiệm vụ nâng cấp hệ thống Quản lý Tour du lịch cho một công ty lữ hành. Giám đốc Kinh doanh phàn nàn: "Quy trình hiện tại chậm quá, khách hàng bỏ sang đối thủ hết rồi!".',
      task: 'Hãy chuẩn bị 4 câu hỏi phỏng vấn Giám đốc Kinh doanh để bóc tách vấn đề gốc rễ theo kỹ thuật 5 Whys và phân tích nguyên nhân.',
      starterPrompt: 'Câu hỏi 1 (Khai thác bối cảnh):\nCâu hỏi 2 (Lượng hóa vấn đề):\nCâu hỏi 3 (Khám phá điểm nghẽn quy trình):\nCâu hỏi 4 (Kỳ vọng giải pháp):',
      sampleSolution: `
        <h4>Bộ câu hỏi Phỏng vấn Đào sâu Nguyên nhân Gốc rễ</h4>
        <ol>
          <li><b>Câu hỏi 1 (Bối cảnh):</b> "Anh/chị có thể chia sẻ cụ thể một trường hợp gần đây nhất mà khách hàng quyết định hủy tour và sang đối thủ vì lý do thời gian phản hồi không?"</li>
          <li><b>Câu hỏi 2 (Lượng hóa):</b> "Hiện tại từ lúc khách hàng gửi yêu cầu tư vấn đến lúc nhân viên gửi lại báo giá tour chi tiết mất trung bình bao nhiêu lâu? Tỷ lệ khách hàng rơi rụng (Drop-off) ước tính là bao nhiêu %?"</li>
          <li><b>Câu hỏi 3 (Điểm nghẽn):</b> "Trong quy trình báo giá hiện tại, bước nào đang ngốn nhiều thời gian nhất? (Ví dụ: chờ khách sạn xác nhận phòng, tính toán giá vé máy bay hay chờ sếp duyệt chiết khấu?)"</li>
          <li><b>Câu hỏi 4 (Kỳ vọng giá trị):</b> "Nếu hệ thống mới có thể tự động sinh báo giá theo gói tiêu chuẩn trong vòng 5 phút, điều đó có giúp nhân viên chốt deal tốt hơn không hay khách hàng còn đòi hỏi sự tùy biến linh hoạt nào khác?"</li>
        </ol>
      `,
      rubricCriteria: ['Tránh câu hỏi sáo rỗng "anh muốn phần mềm như thế nào"', 'Tập trung lượng hóa nỗi đau và bóc tách từng khâu trong quy trình vận hành']
    },
    relatedQuizIds: ['Q1-01', 'Q1-02', 'Q1-06', 'Q9-03'],
    relatedCaseId: 'CASE-03'
  },
  {
    id: 'TOPIC-AGILE-USER-STORY',
    title: 'User Story & Quản lý Backlog trong Agile/Scrum (INVEST & Story Splitting)',
    category: 'Agile & Scrum',
    summary: 'Cách viết User Story chuẩn mực theo mẫu, áp dụng tiêu chí INVEST và kỹ thuật phân tách lát cắt dọc (Vertical Slicing).',
    keywords: ['user story', 'invest', 'story splitting', 'phân rã story', 'backlog refinement', 'dor', 'dod', 'sprint planning', 'scrum'],
    sources: [
      { bookId: 'babok-v3', chapter: 'Chương 10 · Kỹ thuật 10.48 User Stories & Góc nhìn 11.1 Agile', page: 369, notes: 'Cấu trúc User Story, 3C (Card, Conversation, Confirmation) và tiêu chí chất lượng.' },
      { bookId: '100-days-ba', chapter: 'DAY 10, DAY 26 & DAY 48', page: 22, notes: 'Tách Story như thế nào để Dev không kêu trời và bàn giao được giá trị thực tế sau mỗi Sprint.' }
    ],
    perspectiveComparison: 'BABOK xem User Story là phương tiện chuyển tải yêu cầu linh hoạt; 100 Ngày BA nhấn mạnh việc BA không được cắt ngang Story theo tầng kỹ thuật (DB/BE/FE) mà bắt buộc phải cắt dọc (Vertical Slicing) để có thể demo phần mềm chạy được.',
    coreKnowledge: `
      <h4>1. Tiêu chí INVEST cho User Story</h4>
      <ul>
        <li><b>I - Independent (Độc lập):</b> Giảm thiểu sự phụ thuộc giữa các stories để dễ dàng lập kế hoạch.</li>
        <li><b>N - Negotiable (Thương lượng được):</b> Story là lời mời bắt đầu cuộc trò chuyện chứ không phải hợp đồng đóng băng.</li>
        <li><b>V - Valuable (Có giá trị):</b> Mang lại giá trị hữu hình quan sát được cho người dùng hoặc doanh nghiệp.</li>
        <li><b>E - Estimable (Ước lượng được):</b> Đội Dev hiểu rõ yêu cầu để ước lượng Story Points.</li>
        <li><b>S - Small (Đủ nhỏ gọn):</b> Vừa vặn để hoàn thành trong 1 Sprint.</li>
        <li><b>T - Testable (Kiểm thử được):</b> Có tiêu chí nghiệm thu AC rõ ràng để QA kiểm tra.</li>
      </ul>
    `,
    applicationSteps: `
      <ol>
        <li>Viết User Story theo mẫu: <i>Là [Vai trò người dùng], Tôi muốn [Hành động], Để [Lợi ích mang lại]</i>.</li>
        <li>Nếu Story quá lớn (Epic > 13 points), áp dụng các kỹ thuật tách: Tách theo bước quy trình (Workflow steps), tách theo quy tắc nghiệp vụ (Simple vs Complex rules), hoặc tách Happy path vs Edge cases.</li>
        <li>Đảm bảo mỗi lát cắt đều chạm từ Giao diện ➔ API ➔ Cơ sở dữ liệu (Vertical Slice).</li>
      </ol>
    `,
    scenarioExercise: {
      context: 'Một User Story lớn: "Khách hàng mở tài khoản ngân hàng số và hoàn tất định danh eKYC trực tuyến bằng quét CCCD gắn chip và nhận diện khuôn mặt sinh trắc học" được Dev chấm 21 Story Points vì quá phức tạp.',
      task: 'Hãy áp dụng kỹ thuật Vertical Story Splitting để phân rã Story trên thành 3 User Stories nhỏ hơn vừa vặn cho các Sprint 2 tuần.',
      starterPrompt: 'Story 1 (Cốt lõi - Happy path cơ bản):\nAs a ... I want ... So that ...\n\nStory 2 (Nâng cao - Tích hợp OCR & eKYC):\nAs a ... I want ... So that ...\n\nStory 3 (Xử lý Ngoại lệ & Đối soát):\nAs a ... I want ... So that ...',
      sampleSolution: `
        <h4>Phân rã User Story theo Lát cắt Dọc (Vertical Slicing)</h4>
        <ol>
          <li><b>Story 1 (Đăng ký nhanh & Tạo tài khoản cơ bản - 3 points):</b>
            <br><i>As a</i> Khách hàng mới, <i>I want</i> Đăng ký tài khoản bằng Số điện thoại và mã OTP, <i>So that</i> Tôi có thể đăng nhập ngay vào ứng dụng và khám phá các sản phẩm tài chính.</li>
          <li><b>Story 2 (Định danh eKYC luồng chuẩn - 8 points):</b>
            <br><i>As a</i> Khách hàng đã có tài khoản, <i>I want</i> Chụp 2 mặt CCCD và quét khuôn mặt theo hướng dẫn, <i>So that</i> Tôi được nâng cấp hạn mức giao dịch lên 20 triệu/ngày mà không cần ra quầy.</li>
          <li><b>Story 3 (Xử lý Ngoại lệ & Chuyển luồng xác thực thủ công - 5 points):</b>
            <br><i>As a</i> Khách hàng chụp ảnh bị mờ hoặc không nhận diện được khuôn mặt, <i>I want</i> Hệ thống gửi hồ sơ sang Chuyên viên kiểm duyệt hậu kiểm trong 15 phút, <i>So that</i> Tôi không bị từ chối oan và vẫn mở được tài khoản.</li>
        </ol>
      `,
      rubricCriteria: ['Mỗi Story sau khi tách đều có thể demo độc lập và mang lại giá trị', 'Tuân thủ mẫu As a / I want / So that']
    },
    relatedQuizIds: ['Q6-03', 'Q6-04', 'Q6-08', 'Q6-18'],
    relatedCaseId: 'CASE-02'
  },
  {
    id: 'TOPIC-UX-PRODUCT-DISCOVERY',
    title: 'Tư duy Trải nghiệm Người dùng (UX) & Khám phá Sản phẩm (Progressive Disclosure)',
    category: 'UX & Product Thinking',
    summary: 'Áp dụng các định luật tâm lý học nhận thức, 10 nguyên tắc Heuristics và kỹ thuật phân tầng thông tin Progressive Disclosure.',
    keywords: ['ux', 'product thinking', 'progressive disclosure', 'jakob nielsen', 'heuristics', 'persona', 'empathy map', 'usability', 'dark pattern'],
    sources: [
      { bookId: 'babok-v3', chapter: 'Chương 10 · Kỹ thuật 10.36 Prototyping & 10.37 Reviews', page: 339, notes: 'Sử dụng bản mẫu trực quan để khai phá nhu cầu trải nghiệm người dùng.' },
      { bookId: 'bcs-ba-3rd', chapter: 'Chương 5 · Investigation Techniques (User Analysis & Prototyping)', page: 143, notes: 'Phân tích Persona, hành trình người dùng và thử nghiệm nguyên mẫu.' },
      { bookId: '100-days-ba', chapter: 'DAY 50, DAY 68 & DAY 82', page: 116, notes: 'UX là việc của ai? BA viết requirement thiếu tư duy trải nghiệm thì sản phẩm sẽ thành thảm họa.' }
    ],
    perspectiveComparison: 'BABOK xem UX là công cụ xác thực yêu cầu; BCS gắn UX với năng lực phân tích nhân tố con người (Human factors); 100 Ngày BA nhấn mạnh việc BA phải đứng về phía người dùng, loại bỏ các Dark Pattern gây phiền hà.',
    coreKnowledge: `
      <h4>1. Định luật Hick & Progressive Disclosure</h4>
      <p><b>Định luật Hick:</b> Càng hiển thị nhiều lựa chọn trên màn hình thì thời gian người dùng quyết định càng lâu và tỷ lệ bỏ cuộc càng lớn. Giải pháp: Áp dụng <b>Progressive Disclosure (Tiết lộ thông tin lũy tiến)</b> — chỉ hiển thị các thông tin thiết yếu nhất lúc đầu, các tùy chọn nâng cao chỉ xuất hiện khi người dùng chủ động yêu cầu.</p>
      <h4>2. Nguyên tắc Nhận biết trạng thái hệ thống (Jakob Nielsen)</h4>
      <p>Luôn cung cấp phản hồi trực quan kịp thời (Loading skeleton, Progress bar, Success badge) để người dùng an tâm rằng thao tác của họ đang được thực hiện.</p>
    `,
    applicationSteps: `
      <ol>
        <li>Vẽ Bản đồ Hành trình Người dùng (User Journey Map) nhận diện các điểm đau (Pain points).</li>
        <li>Tối giản hóa biểu mẫu nhập liệu: Bỏ bớt các trường không bắt buộc, tự động điền (Auto-complete).</li>
        <li>Kiểm tra tính dễ sử dụng (Usability Testing) trên người dùng thực tế trước khi chốt thiết kế.</li>
      </ol>
    `,
    scenarioExercise: {
      context: 'Ứng dụng Đặt xe công nghệ ghi nhận 40% người dùng hủy cuốc ở màn hình xác nhận thanh toán vì màn hình quá rối rắm (hiển thị cùng lúc 15 phương thức thanh toán, 6 loại voucher, mã thuế công ty và ghi chú tài xế).',
      task: 'Áp dụng nguyên lý Progressive Disclosure để tái thiết kế luồng thông tin trên màn hình thanh toán.',
      starterPrompt: 'Tầng hiển thị mặc định (Default Screen):\n\nTầng mở rộng khi có nhu cầu (Details on Demand):\n\nCách giải quyết phương thức thanh toán:',
      sampleSolution: `
        <h4>Tái cấu trúc Màn hình Thanh toán theo Progressive Disclosure</h4>
        <ul>
          <li><b>Tầng hiển thị mặc định (Zero-clutter):</b> Chỉ hiển thị 3 thông tin sống còn: 1. Tổng tiền cước (in to rõ); 2. Phương thức thanh toán được chọn gần nhất (ví dụ Ví điện tử A); 3. Voucher tốt nhất đã được tự động áp dụng (Auto-apply Best Deal); kèm nút bấm lớn "ĐẶT XE NGAY".</li>
          <li><b>Tầng mở rộng (Details on Demand):</b>
            <ul>
              <li>Nhấp vào ô Phương thức thanh toán ➔ Mở Bottom-sheet hiển thị các lựa chọn khác.</li>
              <li>Chuyển mục "Xuất hóa đơn công ty" thành 1 toggle tắt/bật nhỏ; chỉ khi bật lên mới hiện form nhập Mã số thuế.</li>
              <li>Mục "Ghi chú tài xế" để dạng link text "Thêm ghi chú cho tài xế", bấm vào mới mở popup nhập text.</li>
            </ul>
          </li>
        </ul>
      `,
      rubricCriteria: ['Giảm tải nhận thức rõ rệt ở màn hình mặc định', 'Ứng dụng đúng kỹ thuật Progressive Disclosure cho các thông tin phụ']
    },
    relatedQuizIds: ['Q7-02', 'Q7-05', 'Q7-09', 'Q7-16'],
    relatedCaseId: 'CASE-04'
  },
  {
    id: 'TOPIC-BEHAVIORAL-INTERVIEW',
    title: 'Kỹ năng Xử lý Xung đột, Đàm phán & Phỏng vấn Hành vi STAR',
    category: 'Kỹ năng & Phỏng vấn BA',
    summary: 'Phương pháp trả lời phỏng vấn theo mô hình STAR, nghệ thuật đàm phán phạm vi và giải quyết bất đồng quan điểm giữa các Sếp.',
    keywords: ['kỹ năng ba', 'phỏng vấn', 'star method', 'đàm phán', 'xung đột', 'conflict resolution', 'active listening', 'paraphrasing', 'đạo đức nghề nghiệp'],
    sources: [
      { bookId: 'babok-v3', chapter: 'Chương 9 · Underlying Competencies (Interaction Skills & Conflict Management)', page: 197, notes: 'Kỹ năng giao tiếp, đàm phán, giải quyết xung đột và tư duy phân tích.' },
      { bookId: 'bcs-ba-3rd', chapter: 'Chương 2 · The Competencies of a Business Analyst', page: 56, notes: 'Phẩm chất cá nhân: Thấu cảm, giao tiếp chuyên nghiệp và khả năng tác động không cần quyền lực.' },
      { bookId: '100-days-ba', chapter: 'DAY 7, DAY 8, DAY 20 & DAY 100', page: 16, notes: 'Bài học 10 năm làm nghề: Đạo đức nghề nghiệp, sự trung thực với dữ liệu và cách đứng vững trước áp lực.' }
    ],
    perspectiveComparison: 'BABOK quy chuẩn các năng lực hành vi cần đạt của một chuyên gia phân tích; BCS phân loại kỹ năng mềm theo chuẩn SFIA; Nguyễn Bá Phú mang lại các bài học xương máu: cách nói lời từ chối khéo léo với khách hàng mà không làm mất lòng sếp.',
    coreKnowledge: `
      <h4>1. Cấu trúc Mô hình STAR trong Phỏng vấn BA</h4>
      <ul>
        <li><b>S - Situation (Tình huống):</b> Bối cảnh dự án, quy mô và mâu thuẫn cốt lõi đang gặp phải.</li>
        <li><b>T - Task (Thử thách / Trách nhiệm):</b> Vai trò cụ thể của BA và nhiệm vụ cần giải quyết.</li>
        <li><b>A - Action (Hành động):</b> Các phương pháp, kỹ thuật phân tích và bước đi cụ thể mà BẢN THÂN bạn đã thực hiện.</li>
        <li><b>R - Result (Kết quả):</b> Kết quả định lượng đạt được, sự đồng thuận của các bên và bài học rút ra.</li>
      </ul>
      <h4>2. Kỹ thuật Đàm phán "Yes, and..." thay vì "No"</h4>
      <p>Khi khách hàng đòi tính năng vô lý sát ngày Go-live, thay vì nói "Không làm được", hãy nói: "Ý tưởng của anh/chị rất hay để tối ưu chuyển đổi, VÀ để kịp ngày khai trương hệ thống, chúng ta nên đưa nó làm hạng mục trọng điểm của Giai đoạn 2 ngay tuần sau Go-live".</p>
    `,
    applicationSteps: `
      <ol>
        <li>Lắng nghe tích cực (Active Listening) và Diễn giải lại (Paraphrasing) quan điểm của đối phương.</li>
        <li>Tìm điểm chung về mục tiêu kinh doanh (Shared Goals).</li>
        <li>Sử dụng dữ liệu khách quan để chứng minh thay vì tranh cãi cảm tính.</li>
        <li>Đề xuất giải pháp phân tầng (Tiered options) có tính thỏa hiệp win-win.</li>
      </ol>
    `,
    scenarioExercise: {
      context: 'Phỏng vấn vị trí Senior BA. Người phỏng vấn hỏi: "Hãy kể lại một lần bạn phải giải quyết xung đột gay gắt giữa Giám đốc Kinh doanh (đòi làm nhanh tính năng mới) và Giám đốc Công nghệ (cảnh báo hệ thống đang quá tải nợ kỹ thuật và đòi hoãn để tái cấu trúc database)".',
      task: 'Soạn thảo câu trả lời theo chuẩn mô hình STAR.',
      starterPrompt: 'Situation:\nTask:\nAction:\nResult & Lesson:',
      sampleSolution: `
        <h4>Câu trả lời Phỏng vấn Chuẩn STAR</h4>
        <ul>
          <li><b>Situation:</b> Tại dự án Sàn Bất động sản trực tuyến, Giám đốc Kinh doanh muốn tung ngay tính năng Livestream bán nhà để kịp chiến dịch Tết, trong khi CTO kiên quyết từ chối vì cơ sở dữ liệu đang có nợ kỹ thuật nặng, thời gian tải trang đã chạm mức 8 giây. Hai bên cãi nhau gay gắt và dự án bị đóng băng suốt 2 tuần.</li>
          <li><b>Task:</b> Với tư cách Lead BA, trách nhiệm của tôi là phá vỡ thế bế tắc, tìm ra giải pháp dung hòa lợi ích thương mại và độ ổn định kỹ thuật.</li>
          <li><b>Action:</b>
            <ol>
              <li>Tôi tổ chức 1 buổi họp Triage riêng biệt, không để hai bên tranh cãi cảm tính mà dùng số liệu: Tôi lượng hóa việc tải trang 8s làm mất 30% khách hàng tiềm năng, đồng thời Livestream dịp Tết có thể mang lại 5 tỷ doanh thu.</li>
              <li>Tôi đề xuất giải pháp kỹ thuật Hybrid: Tách tính năng Livestream sang sử dụng dịch vụ đám mây của bên thứ 3 (SaaS Video Streaming API) để không gây tải lên DB nội bộ hiện tại; đồng thời trích 20% công suất Sprint để Dev tối ưu chỉ mục database song song.</li>
            </ol>
          </li>
          <li><b>Result:</b> Cả hai sếp đều đồng thuận phương án. Tính năng Livestream ra mắt đúng hạn vào dịp Tết đạt 20.000 lượt xem trực tiếp; đồng thời thời gian tải trang được kéo giảm từ 8s xuống 2.2s. Bài học rút ra: BA xuất sắc là người chuyển hóa mâu thuẫn chính trị nội bộ thành bài toán kinh tế khách quan.</li>
        </ul>
      `,
      rubricCriteria: ['Trình bày chuẩn xác 4 bước S-T-A-R', 'Làm nổi bật hành động dẫn dắt và giải pháp win-win có dữ liệu minh chứng']
    },
    relatedQuizIds: ['Q9-02', 'Q9-05', 'Q9-06', 'Q9-14', 'Q9-17'],
    relatedCaseId: 'CASE-01'
  },
  {
    id: 'TOPIC-BA-PLANNING-GOVERNANCE',
    title: 'Lập Kế hoạch & Quản trị Tiếp cận Phân tích Nghiệp vụ (BA Planning & Governance)',
    category: 'Nền tảng BA',
    summary: 'Phương pháp lựa chọn mô hình triển khai (Predictive vs Adaptive), lập kế hoạch tương tác và quy trình kiểm soát thay đổi.',
    keywords: ['kế hoạch ba', 'ba planning', 'governance', 'quản trị', 'approach', 'stakeholder engagement', 'performance improvement', 'kế hoạch phân tích'],
    sources: [
      { bookId: 'babok-v3', chapter: 'Chương 3 · Tasks 3.1 - 3.5 BA Planning and Monitoring', page: 31, notes: 'Toàn bộ 5 task lập kế hoạch tiếp cận, quản trị, thông tin và cải tiến hiệu suất BA.' },
      { bookId: 'bcs-ba-3rd', chapter: 'Chương 4 · The Business Analysis Process Model', page: 102, notes: 'Cách tiếp cận giải quyết vấn đề và mô hình quy trình BA chuyên nghiệp.' },
      { bookId: '100-days-ba', chapter: 'DAY 4, DAY 18 & DAY 32', page: 10, notes: 'Xử lý yêu cầu gấp mà không vỡ tiến độ: Gán trách nhiệm rõ ràng ngay từ khâu lập kế hoạch.' }
    ],
    perspectiveComparison: 'BABOK v3 quy định khung quản trị chặt chẽ (Change Control Board); BCS tiếp cận theo góc nhìn chu trình giải quyết vấn đề của tư vấn viên; 100 Ngày BA nhấn mạnh việc thỏa thuận trước "luật chơi" với khách hàng để tránh bị xoay như chong chóng.',
    coreKnowledge: `
      <h4>5 Task Lập kế hoạch theo BABOK v3</h4>
      <ul>
        <li><b>3.1 Plan BA Approach:</b> Chọn Thác nước (khi yêu cầu rõ ràng, rủi ro thấp) hay Agile (khi độ mơ hồ cao, cần học hỏi nhanh).</li>
        <li><b>3.2 Plan Stakeholder Engagement:</b> Phân tích ai cần tham gia vào khâu nào.</li>
        <li><b>3.3 Plan BA Governance:</b> Ai có quyền chốt yêu cầu? Quy trình phê duyệt thay đổi (Change Request) diễn ra thế nào?</li>
        <li><b>3.4 Plan BA Information Management:</b> Tài liệu lưu ở đâu? Quản lý phiên bản và truy vết ra sao?</li>
        <li><b>3.5 Identify BA Performance Improvements:</b> Đo lường và cải tiến chất lượng phân tích.</li>
      </ul>
    `,
    applicationSteps: `
      <ol>
        <li>Đánh giá độ không chắc chắn của dự án để chọn tiếp cận Predictive hay Adaptive.</li>
        <li>Thống nhất quy trình kiểm soát thay đổi (Change Control Process) với Product Owner.</li>
        <li>Thiết lập Definition of Ready (DoR) và Definition of Done (DoD) cho các tài liệu đặc tả.</li>
      </ol>
    `,
    scenarioExercise: {
      context: 'Dự án Nâng cấp Hệ thống Bệnh viện điện tử có nhiều đơn vị tham gia: Khối Bác sĩ, Khối Điều dưỡng, Khối Tài chính, và Nhà thầu phần mềm ngoài. Không ai chịu trách nhiệm chốt yêu cầu cuối cùng, mỗi tuần một Trưởng khoa lại yêu cầu sửa đổi form bệnh án khác nhau.',
      task: 'Hãy thiết lập Kế hoạch Quản trị Yêu cầu (Governance Plan) bao gồm: Hội đồng phê duyệt, Quy trình tiếp nhận yêu cầu thay đổi và tiêu chuẩn ký duyệt.',
      starterPrompt: '1. Cơ cấu Hội đồng phê duyệt (Change Control Board):\n2. Quy trình kiểm soát thay đổi 4 bước:\n3. Tiêu chuẩn ký chốt yêu cầu (Sign-off Criteria):',
      sampleSolution: `
        <h4>Kế hoạch Quản trị Yêu cầu (BA Governance Plan)</h4>
        <ul>
          <li><b>Cơ cấu Hội đồng Phê duyệt (CCB):</b> Gồm 3 thành viên chính thức nắm quyền quyết định cuối cùng: 1. Phó Giám đốc Bệnh viện (Chủ tịch CCB - đại diện nghiệp vụ y tế); 2. Giám đốc CNTT (chịu trách nhiệm kiến trúc kỹ thuật); 3. Lead BA (thư ký thẩm định tác động). Các Trưởng khoa chỉ đóng vai trò Tham vấn (Consulted), không được tự ý yêu cầu đổi code.</li>
          <li><b>Quy trình Kiểm soát Thay đổi 4 bước:</b>
            <ol>
              <li><i>Bước 1 - Tiếp nhận:</i> Mọi yêu cầu thay đổi phải được điền vào biểu mẫu Change Request Form tiêu chuẩn.</li>
              <li><i>Bước 2 - Phân tích tác động:</i> BA và Tech Lead đánh giá tác động chi phí/tiến độ trong vòng 3 ngày làm việc.</li>
              <li><i>Bước 3 - Thẩm định & Biểu quyết:</i> CCB họp định kỳ thứ Hai hàng tuần để quyết định Duyệt, Từ chối hoặc Hoãn.</li>
              <li><i>Bước 4 - Cập nhật baseline:</i> Nếu duyệt, BA cập nhật tài liệu đặc tả và đưa vào kế hoạch Sprint tới.</li>
            </ol>
          </li>
          <li><b>Tiêu chuẩn ký chốt:</b> Yêu cầu chỉ được bắt đầu code khi có chữ ký số của Chủ tịch CCB và đáp ứng 100% Definition of Ready.</li>
        </ul>
      `,
      rubricCriteria: ['Thiết lập được cơ cấu CCB rõ ràng', 'Có quy trình kiểm soát thay đổi minh bạch theo chuẩn BABOK 3.3']
    },
    relatedQuizIds: ['Q0-04', 'Q0-05', 'Q9-01'],
    relatedCaseId: 'CASE-01'
  }
];

console.log('Defined 15 comprehensive Topic Review Lessons.');
