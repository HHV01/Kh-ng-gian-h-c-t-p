module.exports = [
  // Level 0: Nền tảng (Q2-01 -> Q2-05)
  {
    track: 2,
    id: "Q2-01",
    level: 0,
    q: "Cấu trúc chuẩn của một User Story theo mẫu của Mike Cohn và nguyên tắc kiểm tra chất lượng INVEST là gì?",
    opts: [
      "Hệ thống phải [Hành động] để [Mục tiêu kỹ thuật]; kiểm tra theo nguyên tắc SMART.",
      "As a [Role], I want [Feature/Action], So that [Benefit/Value]; kiểm tra theo nguyên tắc INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable).",
      "Nếu [Điều kiện] thì [Kết quả]; kiểm tra theo nguyên tắc ACID của cơ sở dữ liệu quan hệ.",
      "Người dùng [Tên cụ thể] sẽ nhấn vào [Nút bấm] trên màn hình [Tên trang]; kiểm tra theo nguyên tắc SOLID."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Cấu trúc kinh điển 'As a... I want... So that...' gắn liền với nguyên tắc INVEST để đảm bảo story độc lập, có thể thương lượng, mang lại giá trị, ước lượng được, đủ nhỏ và kiểm thử được. Phương án A là cú pháp SRS truyền thống, C là logic kiểm tra, D là kịch bản test chi tiết."
  },
  {
    track: 2,
    id: "Q2-02",
    level: 0,
    q: "Cú pháp Given-When-Then (Gherkin format) trong viết Tiêu chí Chấp nhận (Acceptance Criteria - AC) được hiểu chính xác như thế nào?",
    opts: [
      "Given: Kết quả mong đợi; When: Bối cảnh ban đầu; Then: Hành động của người dùng.",
      "Given: Thiết kế giao diện Figma; When: Lập trình viên viết code; Then: Tester thực hiện kiểm thử.",
      "Given: Bối cảnh / tiền điều kiện ban đầu; When: Hành động / sự kiện kích hoạt; Then: Kết quả mong đợi quan sát được và sự thay đổi trạng thái của hệ thống.",
      "Given: Ngân sách dự án; When: Tiến độ bị chậm; Then: Cắt giảm bớt phạm vi tính năng."
    ],
    ans: 2,
    exp: "Đáp án đúng là C theo chuẩn BDD (Behavior-Driven Development). Given thiết lập ngữ cảnh (tiền điều kiện), When mô tả hành động kích hoạt của tác nhân, Then xác định hành vi và trạng thái kết quả cần kiểm chứng."
  },
  {
    track: 2,
    id: "Q2-03",
    level: 0,
    q: "Sự khác biệt cốt lõi giữa Yêu cầu Chức năng (Functional Requirements - FR) và Yêu cầu Phi chức năng (Non-Functional Requirements - NFR) là gì?",
    opts: [
      "FR do lập trình viên tự nghĩ ra, còn NFR do khách hàng trực tiếp yêu cầu.",
      "FR mô tả cụ thể hệ thống phải làm gì (hành vi, chức năng, tính toán); NFR mô tả hệ thống phải hoạt động tốt như thế nào (hiệu năng, bảo mật, độ tin cậy, khả năng mở rộng).",
      "FR chỉ áp dụng cho ứng dụng di động, còn NFR chỉ áp dụng cho trang web máy tính để bàn.",
      "FR không thể kiểm thử được, trong khi NFR là những tiêu chí kiểm thử duy nhất của dự án."
    ],
    ans: 1,
    exp: "Đáp án đúng là B theo chuẩn ISO/IEC 25010 và BABOK. FR là 'What the system does', NFR là 'How well the system performs' (chất lượng dịch vụ, ràng buộc vận hành)."
  },
  {
    track: 2,
    id: "Q2-04",
    level: 0,
    q: "Ma trận Truy vết Yêu cầu (Requirements Traceability Matrix - RTM) được thiết lập nhằm mục đích chính nào sau đây?",
    opts: [
      "Để chấm điểm KPI hàng tháng cho các thành viên trong đội phát triển phần mềm.",
      "Thiết lập mối liên kết hai chiều từ mục tiêu kinh doanh ➔ yêu cầu chi tiết ➔ thiết kế kiến trúc ➔ mã nguồn ➔ ca kiểm thử (Test Cases), giúp quản lý phạm vi và phân tích tác động khi có thay đổi.",
      "Để vẽ lại toàn bộ sơ đồ cơ sở dữ liệu quan hệ (ERD) của hệ thống thông tin.",
      "Dùng làm hợp đồng pháp lý duy nhất để thanh toán tiền lương cho nhân viên thử việc."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. RTM đảm bảo tính truy vết hai chiều (Bidirectional Traceability): biết mỗi yêu cầu phục vụ mục tiêu nào, được kiểm thử bằng test case nào, và khi yêu cầu thay đổi thì những thành phần nào bị tác động."
  },
  {
    track: 2,
    id: "Q2-05",
    level: 0,
    q: "Trong kỹ thuật ưu tiên yêu cầu MoSCoW, nhóm yêu cầu 'Must Have' được định nghĩa như thế nào?",
    opts: [
      "Những tính năng rất hay nếu có nhưng nếu không có thì hệ thống vẫn phát hành bình thường được.",
      "Các yêu cầu cốt lõi bắt buộc phải có, nếu thiếu một trong số chúng thì sản phẩm coi như thất bại và không thể đưa vào vận hành (Non-negotiable).",
      "Những yêu cầu đã được thống nhất sẽ dời sang các phiên bản nâng cấp của năm sau.",
      "Những ý tưởng sáng tạo bất chợt của đội lập trình trong lúc uống cà phê."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. 'Must Have' là các điều kiện tiên quyết không thể thương lượng để go-live. Nếu bỏ bớt Must Have, giải pháp không còn giá trị kinh doanh hoặc vi phạm pháp lý."
  },

  // Level 1: Vận dụng (Q2-06 -> Q2-13)
  {
    track: 2,
    id: "Q2-06",
    level: 1,
    q: "BA viết Acceptance Criteria cho tính năng 'Đổi mật khẩu người dùng' như sau: 'Given người dùng đã đăng nhập; When nhập mật khẩu mới hợp lệ và bấm Lưu; Then hệ thống cập nhật mật khẩu thành công'. AC này còn thiếu sót trường hợp biên/bảo mật quan trọng nào?",
    opts: [
      "Thiếu việc yêu cầu đổi font chữ trên thanh menu sau khi đổi mật khẩu.",
      "Thiếu tiền điều kiện phải xác thực mật khẩu hiện tại, kiểm tra mật khẩu mới không trùng 3 lần gần nhất, và thu hồi (revoke) toàn bộ phiên đăng nhập/token trên các thiết bị khác.",
      "Thiếu việc gửi tin nhắn quảng cáo các sản phẩm mới đến số điện thoại của người dùng.",
      "Không có thiếu sót nào, AC trên đã hoàn hảo theo đúng chuẩn quốc tế."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Đổi mật khẩu là tính năng nhạy cảm bảo mật cao. AC bắt buộc phải kiểm tra mật khẩu cũ, chính sách lịch sử mật khẩu và cơ chế hủy token phiên cũ để ngăn chặn việc chiếm quyền điều khiển tài khoản."
  },
  {
    track: 2,
    id: "Q2-07",
    level: 1,
    q: "Stakeholder phát biểu yêu cầu: 'Hệ thống tìm kiếm đơn hàng phải chạy thật nhanh, không được để người dùng chờ đợi'. Cách viết lại nào sau đây chuyển hóa yêu cầu mơ hồ trên thành NFR kiểm chứng được (Testable)?",
    opts: [
      "Hệ thống tìm kiếm đơn hàng phải đạt tốc độ bàn thờ và làm hài lòng 100% nhân viên.",
      "Tại môi trường tải tiêu chuẩn với 500 người dùng đồng thời (CCU), 95% số lượng truy vấn tìm kiếm đơn hàng theo mã đơn hoặc số điện thoại phải trả về kết quả trong thời gian dưới 1.5 giây (p95 latency < 1.5s).",
      "Hệ thống phải sử dụng công nghệ tìm kiếm hiện đại nhất thế giới như Elasticsearch.",
      "Nhân viên IT phải thường xuyên khởi động lại máy chủ tìm kiếm mỗi sáng."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Một NFR chuẩn phải định lượng được với ngưỡng đo lường cụ thể (1.5 giây), phân vị thống kê (p95 latency) và bối cảnh tải thực tế (500 CCU)."
  },
  {
    track: 2,
    id: "Q2-08",
    level: 1,
    q: "Quốc hội ban hành nghị quyết giảm thuế VAT từ 10% xuống 8% đối với một số nhóm hàng bán lẻ từ ngày 01/01. Dựa trên Ma trận Truy vết Yêu cầu (RTM), BA cần cập nhật những thành phần nào?",
    opts: [
      "Chỉ cần sửa giao diện hiển thị chữ '8%' trên trang web bán hàng.",
      "Truy vết từ Yêu cầu nghiệp vụ (Tuân thủ luật thuế) ➔ Bảng quy tắc tính thuế (Tax Rule) ➔ Logic tính tiền trong mã nguồn giỏ hàng/thanh toán ➔ Mẫu in hóa đơn điện tử ➔ Kịch bản kiểm thử tính giá tự động.",
      "Xóa toàn bộ các sản phẩm chịu thuế 10% ra khỏi cơ sở dữ liệu của công ty.",
      "Yêu cầu khách hàng tự tính nhẩm thuế 8% rồi chuyển khoản số tiền đã giảm."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. RTM cho thấy sự phụ thuộc từ luật thuế xuống các công thức tính toán backend, hóa đơn tài chính và test cases kiểm thử tự động, đảm bảo không bỏ sót mắt xích nào."
  },
  {
    track: 2,
    id: "Q2-09",
    level: 1,
    q: "Trong dự án Khám bệnh từ xa (Telemedicine), BA nhận được 3 yêu cầu sau: (1) Dữ liệu hình ảnh y tế phải mã hóa theo chuẩn HIPAA; (2) Video cuộc gọi tư vấn phải duy trì tối thiểu 24 khung hình/giây; (3) Hệ thống phải sẵn sàng hoạt động 99.9% thời gian. Hãy phân loại chính xác các NFR này theo chuẩn chất lượng:",
    opts: [
      "(1) Tính tiện dụng (Usability); (2) Tính tương thích (Portability); (3) Tính bảo trì (Maintainability).",
      "(1) Tính bảo mật (Security); (2) Hiệu năng & Băng thông (Performance/Efficiency); (3) Tính sẵn sàng (Availability/Reliability).",
      "Cả 3 yêu cầu trên đều là Yêu cầu Chức năng (Functional Requirements).",
      "(1) Yêu cầu chuyển đổi; (2) Yêu cầu giao diện; (3) Yêu cầu kiểm toán."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Mã hóa dữ liệu thuộc nhóm Bảo mật (Security), độ mượt video thuộc nhóm Hiệu năng (Performance), và uptime 99.9% thuộc nhóm Tính khả dụng/Sẵn sàng (Availability)."
  },
  {
    track: 2,
    id: "Q2-10",
    level: 1,
    q: "Khi xây dựng sản phẩm Ví điện tử phiên bản MVP trong 3 tháng, đội ngũ áp dụng kỹ thuật MoSCoW. Lựa chọn nào sau đây thể hiện việc phân bổ ưu tiên hợp lý nhất?",
    opts: [
      "Must have: Game lắc lì xì trúng thưởng; Won't have: Chức năng nạp và rút tiền về tài khoản ngân hàng.",
      "Must have: Đăng ký, Liên kết tài khoản ngân hàng, Nạp/Rút tiền và Thanh toán mã QR cơ bản; Should have: Tự động trích tiền đóng học phí định kỳ; Won't have (kỳ này): Vay thấu chi tài chính.",
      "Must have: Tích hợp 50 dịch vụ giải trí trực tuyến; Could have: Bảo mật mã OTP đăng nhập.",
      "Tất cả 100 tính năng trong danh sách đều được đánh dấu là Must Have."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. MVP của ví điện tử bắt buộc phải có luồng dòng tiền cốt lõi (Nạp, Rút, Chuyển, Thanh toán cơ bản) là Must Have. Các tính năng phức tạp như thấu chi hoặc game tương tác thuộc các đợt phát hành sau."
  },
  {
    track: 2,
    id: "Q2-11",
    level: 1,
    q: "User Story sau đây vi phạm nguyên tắc nào trong tiêu chí INVEST? 'Là nhân viên vận hành, tôi muốn hệ thống IoT tự động đọc cảm biến, gửi cảnh báo qua SMS, phân tích xu hướng nhiệt độ bằng Machine Learning trong 30 ngày và xuất báo cáo PDF hàng tuần để quản lý thiết bị.'",
    opts: [
      "Vi phạm tiêu chí 'Small' (Quá to/Epic) và 'Independent' (Gộp quá nhiều hành vi độc lập vào làm một story duy nhất).",
      "Vi phạm tiêu chí 'Valuable' vì tính năng này hoàn toàn không có giá trị cho doanh nghiệp.",
      "Vi phạm vì không ghi tên cụ thể của nhân viên vận hành trong câu văn.",
      "Đạt chuẩn 100% INVEST, không vi phạm bất kỳ nguyên tắc nào."
    ],
    ans: 0,
    exp: "Đáp án đúng là A. Story này là một Epic cồng kềnh gộp cả đọc cảm biến, gửi SMS, chạy ML và xuất PDF báo cáo. Cần phân rã nhỏ (Small) thành ít nhất 3–4 story độc lập (Independent) để có thể ước lượng và lập trình."
  },
  {
    track: 2,
    id: "Q2-12",
    level: 1,
    q: "Khi đặc tả tính năng nạp tiền từ thẻ ATM vào ví điện tử, BA cần xử lý trường hợp ngoại lệ (Edge Case): 'Hệ thống cổng thanh toán Napas bị gián đoạn kết nối sau khi đã trừ tiền tài khoản ngân hàng của khách, nhưng ví điện tử chưa nhận được tín hiệu phản hồi'. Đặc tả trạng thái nào là chuẩn xác nhất?",
    opts: [
      "Lập tức cộng tiền vào ví điện tử ngay cho khách và chấp nhận rủi ro bị mất tiền nếu giao dịch thẻ thực tế không thành công.",
      "Đưa giao dịch ví vào trạng thái trung gian 'Đang chờ đối soát (Pending Verification)'; hiển thị thông báo rõ ràng cho khách và kích hoạt tiến trình kiểm tra trạng thái tự động (Polling/Inquiry) hoặc đối soát tự động cuối ngày trước khi hoàn tất hoặc hoàn tiền.",
      "Báo lỗi 'Giao dịch thất bại' và xóa luôn bản ghi giao dịch trong hệ thống ví.",
      "Tự động khóa tài khoản ngân hàng của khách để phòng ngừa gian lận."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Khi gặp sự cố mạng không đồng bộ giữa hai hệ thống tài chính, bắt buộc phải có trạng thái trung gian (Pending) và quy trình đối soát/hỏi trạng thái (Inquiry Job) để đảm bảo tính toàn vẹn số dư."
  },
  {
    track: 2,
    id: "Q2-13",
    level: 1,
    q: "Khái niệm 'Baseline Yêu cầu' (Requirements Baseline) có ý nghĩa gì trong quản lý dự án phần mềm?",
    opts: [
      "Là danh sách các câu hỏi phỏng vấn chuẩn bị cho buổi gặp gỡ khách hàng đầu tiên.",
      "Là tập hợp các yêu cầu đã được tất cả các bên liên quan chính thống nhất và ký duyệt chính thức tại một mốc thời gian cụ thể; mọi thay đổi phát sinh sau mốc này bắt buộc phải qua quy trình kiểm soát thay đổi (Change Control).",
      "Là bản thiết kế cơ sở dữ liệu nháp của lập trình viên thực tập.",
      "Là mức lương tối thiểu thỏa thuận giữa công ty và nhân sự BA."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Requirements Baseline đóng vai trò là mốc tham chiếu chuẩn (Snapshot). Khi đã baseline, không ai được tự ý sửa yêu cầu mà phải tạo Change Request để đánh giá chi phí, tiến độ và rủi ro."
  },

  // Level 2: Nâng cao (Q2-14 -> Q2-20)
  {
    track: 2,
    id: "Q2-14",
    level: 2,
    q: "Hệ thống WES (Warehouse Execution System) giao tiếp với WCS (Warehouse Control System): WCS đã chấp nhận nhiệm vụ xuất pallet và giao cho robot AGV. Phản hồi xác nhận từ WCS về WES bị timeout do mạng chập chờn, nên WES gửi lại yêu cầu cùng mã nhiệm vụ đó. Robot đang thực hiện lần đầu. Tiêu chí Chấp nhận (AC) nào kiểm tra đúng hành vi cần có?",
    opts: [
      "WCS trả về thông tin nhiệm vụ đã nhận theo hợp đồng tích hợp đảm bảo tính Idempotency, không tạo thêm job mới hoặc giao thêm cho robot khác.",
      "WCS ghi nhận lần gửi lại thành nhiệm vụ mới hoàn toàn nhưng giữ ở trạng thái chờ đến khi robot rảnh.",
      "WCS hủy bỏ nhiệm vụ đang chạy dở của robot, tạo lại job mới và gán lại cho đúng con robot ban đầu.",
      "WCS hoàn toàn bỏ qua yêu cầu gửi lại và để WES tiếp tục chờ đợi phản hồi của lần đầu trong vô vọng."
    ],
    ans: 0,
    exp: "Đáp án đúng là A theo chuẩn tích hợp hệ thống phân tán (Idempotent Consumer Pattern). WCS phải nhận biết mã nhiệm vụ đã tồn tại, trả lại trạng thái của nhiệm vụ hiện hành để WES đồng bộ, tránh tuyệt đối việc xuất thừa pallet hay trùng lệnh robot."
  },
  {
    track: 2,
    id: "Q2-15",
    level: 2,
    q: "Đặc tả tính năng trừ tồn kho trong chương trình Flash Sale: Có 50 sản phẩm giảm giá 90%, dự kiến có 20.000 lượt bấm nút 'Mua ngay' đồng thời trong đúng 1 giây đầu tiên. Yêu cầu đặt ra: Tuyệt đối không được bán vượt tồn kho (Overselling) và hệ thống không được bị treo database (Deadlock). AC và giải pháp đặc tả nào là chuẩn xác nhất?",
    opts: [
      "Dùng lệnh SELECT * rồi kiểm tra số lượng trên ứng dụng bằng if-else; ai bấm trước thì ghi nhận.",
      "Đặc tả cơ chế giữ hàng (Inventory Reservation) bằng phép trừ nguyên tử (Atomic Decrement) trên bộ nhớ đệm phân tán (Redis/In-memory cache) có thiết lập thời gian hết hạn (TTL 10 phút); chỉ 50 request trừ cache thành công mới được đẩy vào hàng đợi (Message Queue) để tạo đơn hàng dưới cơ sở dữ liệu chính.",
      "Khóa toàn bộ bảng cơ sở dữ liệu (Table Lock) cho đến khi 20.000 người mua xong lần lượt từng người một.",
      "Cho phép cả 20.000 người đặt hàng thành công rồi hôm sau nhân viên gọi điện xin lỗi hủy bớt 19.950 đơn."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Đây là bài toán kinh điển Concurrency Control trong E-commerce. Dùng Atomic Cache Decrement + Message Queue giảm tải 99.8% áp lực ghi vào Database, chống overselling tuyệt đối mà không gây nghẽn cổ chai."
  },
  {
    track: 2,
    id: "Q2-16",
    level: 2,
    q: "Xung đột yêu cầu giữa hai NFR: Chuyên gia Bảo mật yêu cầu 'Mọi giao dịch xác nhận hoàn tất đơn hàng trên ứng dụng Tài xế giao hàng phải nhập mã xác thực OTP 6 số qua SMS để chống gian lận'. Tuy nhiên, Giám đốc Vận hành chỉ ra 'Tài xế đang lái xe ngoài đường, nếu bắt nhập OTP 6 số sẽ gây tai nạn giao thông và giảm 40% năng suất giao hàng'. BA đề xuất giải pháp cân bằng nào?",
    opts: [
      "Bỏ hoàn toàn bảo mật và cho phép tài xế bấm xác nhận mà không cần bất kỳ bằng chứng nào.",
      "Bắt buộc tài xế phải dừng xe tắt máy vào lề đường, nhập OTP và gọi điện cho tổng đài xác nhận mỗi đơn hàng.",
      "Phân tích đánh giá rủi ro theo ngữ cảnh (Contextual / Risk-based Authentication): Giao dịch thông thường chỉ yêu cầu chụp ảnh gói hàng tại cửa kèm định vị GPS bán kính 50m; chỉ kích hoạt xác thực nâng cao (nhận diện khuôn mặt hoặc OTP) khi phát hiện dấu hiệu bất thường (lệch GPS > 500m hoặc đơn hàng giá trị cao trên 10 triệu đồng).",
      "Xóa ứng dụng tài xế và quay về dùng biên bản giao hàng bằng giấy có chữ ký tươi."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Kỹ thuật Risk-based Authentication cân bằng hoàn hảo giữa tính tiện dụng vận hành (Usability/Safety) và yêu cầu phòng chống gian lận (Security), tối ưu hóa trải nghiệm happy path."
  },
  {
    track: 2,
    id: "Q2-17",
    level: 2,
    q: "Trong hợp đồng trọn gói Fixed-Price, Khách hàng phát hiện thiếu quy trình 'Phê duyệt vượt ngân sách dự toán' và yêu cầu đội dự án phải bổ sung ngay trong Sprint hiện tại, viện dẫn lý do: 'Hệ thống ERP mà không có phê duyệt ngân sách là hệ thống phế phẩm'. BA tiến hành phân tích và phản hồi ra sao?",
    opts: [
      "Âm thầm lập trình thêm cho khách hàng mà không ghi nhận bất kỳ giấy tờ nào.",
      "Đối chiếu lại Tài liệu Đặc tả Yêu cầu (BRD/SRS) đã được ký duyệt baseline: Xác nhận tính năng này chưa có trong phạm vi đã thỏa thuận; thực hiện Phân tích tác động (Impact Analysis) đến cấu trúc dữ liệu, thời gian trễ tiến độ (ước tính 2 tuần) và chi phí phát sinh; sau đó gửi Change Request cho Hội đồng Quản lý Thay đổi (CCB) để khách hàng lựa chọn hoán đổi tính năng tương đương hoặc ký phụ lục phát sinh.",
      "Gửi email từ chối cộc lốc và trích dẫn điều khoản phạt hợp đồng đối với khách hàng.",
      "Hủy bỏ toàn bộ các tính năng đã làm xong để làm lại từ đầu theo ý khách."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Quy trình Quản lý Thay đổi (Change Management) chuẩn mực: dùng Baseline đối chiếu sự thật, định lượng tác động (Impact) và trao quyền quyết định chi phí/tiến độ cho các bên có thẩm quyền qua Change Request."
  },
  {
    track: 2,
    id: "Q2-18",
    level: 2,
    q: "Hệ thống Đặt vé máy bay trực tuyến: Khi khách hàng thanh toán vé máy bay, tiền đã bị trừ từ cổng thẻ Visa nhưng phía hãng hàng không gặp sự cố không thể xuất mã vé (PNR). Hệ thống đối mặt với ràng buộc: Hãng bay không hỗ trợ API hoàn tiền tức thời, tiền của khách bị giữ lại cổng thanh toán. Đặc tả máy trạng thái (State Machine) của đơn hàng cần xử lý thế nào?",
    opts: [
      "Chuyển trạng thái đơn sang 'Đã hủy' và mặc kệ tiền của khách hàng bị treo.",
      "Chuyển trạng thái đơn sang 'Đã thanh toán thành công' và xuất vé trắng cho khách.",
      "Chuyển trạng thái đơn sang 'Sự cố xuất vé - Chờ xử lý hoàn tiền tự động (Ticketing_Failed_Pending_Refund)'; đồng thời bắn cảnh báo độ ưu tiên cao nhất cho bộ phận Hỗ trợ khách hàng trong vòng 5 phút, lưu trữ mã tham chiếu giao dịch cổng thanh toán và kích hoạt API hoàn tiền tự động hoặc luồng đối soát khẩn cấp theo SLA cam kết.",
      "Tự động đặt lại một chuyến bay bất kỳ của hãng hàng không khác mà không cần hỏi ý kiến khách hàng."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Máy trạng thái phải phản ánh chính xác trạng thái thực tế không đồng bộ (Tiền trừ nhưng vé lỗi). Cần trạng thái trung gian rõ ràng kèm cơ chế cứu hộ (Recovery mechanism) và SLA bồi hoàn minh bạch cho người dùng."
  },
  {
    track: 2,
    id: "Q2-19",
    level: 2,
    q: "Hệ thống Quản lý Đơn hàng (OMS) phục vụ chuỗi bán lẻ đa kênh: Một đơn hàng gồm 3 món sản phẩm nằm rải rác ở 2 kho vật lý cách nhau 40km. Khách hàng lựa chọn phương thức 'Giao hàng gom thành 1 kiện duy nhất' để tiết kiệm phí vận chuyển. Đặc tả nghiệp vụ phân rã đơn hàng (Order Decomposition & Routing) cần quy định logic nào?",
    opts: [
      "Bắt khách hàng phải trả tiền thuê xe tải riêng để chạy qua hai kho gom hàng.",
      "Tạo hai mã đơn hàng con điều chuyển nội bộ (Transfer Orders) gom hàng về Kho trung tâm (Hub) để đóng gói chung thành 1 kiện chính thức kèm 1 mã vận đơn duy nhất gửi cho đơn vị giao vận; cập nhật trạng thái đơn hàng cha là 'Đang gom hàng tại kho trung tâm' và tính toán lại SLA giao hàng dự kiến.",
      "Tự ý hủy đơn hàng và báo cho khách là hết hàng.",
      "Giao rời thành 2 kiện riêng vào 2 ngày khác nhau và thu tiền ship gấp đôi."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Logic phân rã đơn (Order Splitting & Internal Transfer) là cốt lõi của bài toán Omnichannel Fulfillment: tách đơn con điều chuyển nội bộ về Hub gom kiện, giữ nguyên 1 mã kiện cha và cập nhật SLA thực tế cho khách."
  },
  {
    track: 2,
    id: "Q2-20",
    level: 2,
    q: "Yêu cầu tuân thủ kiểm toán (Audit Trail) cho hệ thống Kế toán doanh nghiệp: Quy định pháp luật nghiêm cấm việc xóa vĩnh viễn (Hard Delete) bất kỳ bản ghi bút toán kế toán nào, kể cả bút toán sai sót do kế toán viên nhập nhầm số tiền. BA cần đặc tả cơ chế điều chỉnh dữ liệu này như thế nào?",
    opts: [
      "Cho phép kế toán trưởng truy cập trực tiếp vào database SQL để dùng lệnh UPDATE sửa lại số tiền cho khớp.",
      "Đặc tả cơ chế 'Bút toán điều chỉnh đảo sổ (Reversal / Adjustment Journal Entry)': Bản ghi cũ giữ nguyên trạng thái bị hủy kèm lý do và người hủy; hệ thống tự động sinh ra một bút toán đảo có dấu âm hoặc bút toán điều chỉnh chênh lệch đối ứng, ghi nhật ký kiểm toán bất biến (Immutable Audit Log) với đầy đủ dấu vết thời gian.",
      "Xóa sạch lịch sử giao dịch mỗi quý để hệ thống chạy nhanh hơn.",
      "Đặc tả tính năng cho phép kế toán viên tự chọn ngày giờ tùy ý để ghi đè số liệu cũ mà không để lại lịch sử."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Trong kế toán tài chính và kiểm toán, nguyên tắc bất biến (Immutability) là tối thượng. Sai sót phải được sửa bằng bút toán đảo (Reversal entry) hoặc bút toán bổ sung đối ứng, tuyệt đối cấm can thiệp xóa hay ghi đè bản ghi gốc."
  }
];
