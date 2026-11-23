module.exports = [
  // Level 0: Nền tảng (Q8-01 -> Q8-05)
  {
    track: 8,
    id: "Q8-01",
    level: 0,
    q: "Thứ tự tiêu chuẩn của 4 cấp độ kiểm thử phần mềm từ phạm vi hẹp nhất đến phạm vi rộng nhất trong quy trình công nghệ phần mềm là gì?",
    opts: [
      "User Acceptance Testing (UAT) -> System Testing -> Integration Testing -> Unit Testing.",
      "Unit Testing (Kiểm thử đơn vị) -> Integration Testing (Kiểm thử tích hợp) -> System Testing (Kiểm thử hệ thống) -> User Acceptance Testing (Kiểm thử chấp nhận người dùng - UAT).",
      "Stress Testing -> Load Testing -> Smoke Testing -> Sanity Testing.",
      "Manual Testing -> Automation Testing -> AI Testing -> Robot Testing."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Mô hình chữ V (V-Model) và chuẩn ISTQB quy định 4 cấp độ kiểm thử lũy tiến: Bắt đầu từ Unit Test (Dev kiểm tra từng hàm/component), Integration Test (kiểm tra giao tiếp giữa các module), System Test (kiểm tra toàn bộ hệ thống khép kín), và UAT (người dùng/khách hàng nghiệm thu nghiệp vụ)."
  },
  {
    track: 8,
    id: "Q8-02",
    level: 0,
    q: "Mục đích cốt lõi nhất của giai đoạn Kiểm thử Chấp nhận Người dùng (User Acceptance Testing - UAT) là gì?",
    opts: [
      "Tìm kiếm xem mã nguồn lập trình có tuân thủ đúng quy tắc đặt tên biến của công ty hay không.",
      "Xác nhận phần mềm có đáp ứng đúng và đầy đủ các nhu cầu nghiệp vụ thực tế của người dùng cuối, quy trình vận hành của doanh nghiệp và các điều kiện thỏa thuận trong hợp đồng để tiến hành nghiệm thu bàn giao chính thức hay không.",
      "Thay thế hoàn toàn công việc của đội ngũ lập trình viên Backend.",
      "Kiểm tra xem máy tính của người dùng có bị nhiễm virus hay không."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Khác với System Testing (do QA kiểm tra xem hệ thống có chạy đúng thiết kế kỹ thuật hay không), UAT tập trung trả lời câu hỏi nghiệp vụ: 'Hệ thống này có giải quyết đúng vấn đề và đáp ứng quy trình vận hành thực tế của doanh nghiệp để đưa vào sử dụng hay không?'."
  },
  {
    track: 8,
    id: "Q8-03",
    level: 0,
    q: "Trong kỹ thuật kiểm thử hộp đen, sự khác biệt giữa 'Phân vùng tương đương' (Equivalence Partitioning - EP) và 'Phân tích giá trị biên' (Boundary Value Analysis - BVA) là gì?",
    opts: [
      "EP chỉ dùng cho kiểm thử tự động, BVA chỉ dùng cho kiểm thử thủ công.",
      "EP chia miền dữ liệu đầu vào thành các phân vùng hợp lệ và không hợp lệ mà ở đó hệ thống được giả định sẽ xử lý giống nhau; BVA tập trung kiểm thử tại các giá trị biên giới hạn nằm ngay sát ranh giới giữa các phân vùng đó (nơi có nguy cơ phát sinh lỗi cao nhất).",
      "BVA chỉ áp dụng cho kiểm thử giao diện đồ họa, còn EP áp dụng cho kiểm thử cơ sở dữ liệu.",
      "Hai kỹ thuật này hoàn toàn trùng lặp và không bao giờ được dùng cùng nhau."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. EP chia các nhóm giá trị tương đương để giảm số lượng ca kiểm thử (chỉ cần chọn 1 đại diện mỗi vùng). BVA bổ trợ cho EP bằng cách tập trung kiểm tra các điểm mép (ví dụ: min-1, min, min+1, max-1, max, max+1) vì lập trình viên thường xuyên mắc lỗi toán tử như `<` thay vì `<=`."
  },
  {
    track: 8,
    id: "Q8-04",
    level: 0,
    q: "Yêu cầu nào dưới đây thuộc nhóm 'Kiểm thử phi chức năng' (Non-functional Testing)?",
    opts: [
      "Khi người dùng nhập đúng tên đăng nhập và mật khẩu thì hệ thống phải cho phép đăng nhập thành công.",
      "Hệ thống phải có khả năng xử lý đồng thời 5.000 giao dịch mỗi giây (5.000 TPS) với thời gian phản hồi p95 dưới 500ms và không rò rỉ bộ nhớ (Kiểm thử hiệu năng và khả năng chịu tải).",
      "Khi bấm nút 'Xuất Excel', hệ thống phải tải về file danh sách khách hàng gồm 5 cột thông tin.",
      "Khi hủy đơn hàng, hệ thống phải cập nhật trạng thái đơn thành 'Đã hủy'."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Kiểm thử chức năng (Functional Testing) kiểm tra 'Hệ thống làm ĐƯỢC CÁI GÌ' (Tính năng, quy tắc nghiệp vụ). Kiểm thử phi chức năng (Non-functional Testing) kiểm tra 'Hệ thống hoạt động NHƯ THẾ NÀO' (Tốc độ, hiệu năng, tải trọng, bảo mật, tính khả dụng)."
  },
  {
    track: 8,
    id: "Q8-05",
    level: 0,
    q: "Khi phân loại lỗi phần mềm (Defect Triage), sự khác biệt giữa 'Độ nghiêm trọng của lỗi' (Bug Severity) và 'Mức độ ưu tiên sửa lỗi' (Bug Priority) được hiểu như thế nào?",
    opts: [
      "Severity do Giám đốc quyết định, Priority do Thực tập sinh quyết định.",
      "Severity phản ánh mức độ ảnh hưởng kỹ thuật của lỗi đối với sự vận hành của hệ thống (ví dụ: sập máy chủ, mất dữ liệu); Priority phản ánh mức độ khẩn cấp về mặt kinh doanh và thời gian cần phải khắc phục lỗi đó sớm hay muộn.",
      "Severity và Priority luôn luôn bắt buộc phải có mức độ giống hệt nhau.",
      "Severity chỉ áp dụng cho lỗi chính tả, còn Priority áp dụng cho lỗi thanh toán."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Severity là thước đo tác động kỹ thuật (Blocker, Critical, Major, Minor). Priority là thước đo khẩn cấp nghiệp vụ (P1-Urgent, P2-High, P3-Normal). Ví dụ: Sai chính tả logo trang chủ có Severity thấp (không làm hỏng code) nhưng Priority rất cao (ảnh hưởng thể diện thương hiệu)."
  },

  // Level 1: Vận dụng (Q8-06 -> Q8-13)
  {
    track: 8,
    id: "Q8-06",
    level: 1,
    q: "Quy tắc nghiệp vụ: 'Khách hàng gửi tiết kiệm kỳ hạn 12 tháng: Nếu số tiền gửi từ 10 triệu đến dưới 100 triệu, lãi suất là 6.0%/năm; Nếu số tiền từ 100 triệu đến dưới 500 triệu, lãi suất là 6.5%/năm; Nếu từ 500 triệu trở lên, lãi suất là 7.0%/năm; Số tiền gửi tối thiểu là 10 triệu'. Áp dụng kỹ thuật Phân tích giá trị biên (BVA), BA nên chọn bộ dữ liệu kiểm thử biên nào để bàn giao cho đội UAT?",
    opts: [
      "1 triệu, 5 triệu, 20 triệu, 50 triệu, 1 tỷ.",
      "9.999.999 VNĐ (Bị từ chối), 10.000.000 VNĐ (6.0%), 99.999.999 VNĐ (6.0%), 100.000.000 VNĐ (6.5%), 499.999.999 VNĐ (6.5%), 500.000.000 VNĐ (7.0%).",
      "Chỉ cần kiểm thử duy nhất một con số 150 triệu là đủ nghiệm thu.",
      "Các số âm như -10 triệu, -100 triệu và số 0 VNĐ."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Bộ kiểm thử biên chuẩn mực phải bao gồm các điểm chặn ranh giới: Ngay dưới ngưỡng tối thiểu (9.999.999), đúng ngưỡng tối thiểu (10.000.000), mép dưới và mép trên của từng bậc lãi suất (99.999.999 vs 100.000.000, 499.999.999 vs 500.000.000)."
  },
  {
    track: 8,
    id: "Q8-07",
    level: 1,
    q: "Khi chuẩn bị dữ liệu kiểm thử (Test Data) cho giai đoạn UAT phần mềm Tính thuế thu nhập cá nhân (TNCN) mới, thách thức lớn nhất là các ca giảm trừ gia cảnh phức tạp (người phụ thuộc sinh giữa năm, con đủ 18 tuổi, người lao động chuyển nơi làm việc). BA nên phối hợp tạo dữ liệu kiểm thử thế nào để đảm bảo tính bao quát?",
    opts: [
      "Chỉ nhập 1 nhân viên mẫu có mức lương 10 triệu đồng và không có người phụ thuộc nào.",
      "Thiết lập 'Bảng ma trận dữ liệu kiểm thử' (Test Data Matrix) kết hợp các biến số: Mức thu nhập các bậc, số lượng người phụ thuộc, thời điểm bắt đầu/kết thúc giảm trừ, thu nhập vãng lai; từ đó tạo các bộ hồ sơ nhân sự giả lập đặc thù tương ứng và đối chiếu kết quả với bảng tính chuẩn của Chuyên viên thuế.",
      "Lấy bừa họ tên và số tài khoản ngân hàng của đồng nghiệp trong công ty điền vào hệ thống.",
      "Yêu cầu đội Dev viết code tự động duyệt qua toàn bộ các trường hợp mà không cần kiểm tra số liệu."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Xây dựng Test Data Matrix giúp kiểm soát toàn diện các tổ hợp điều kiện nghiệp vụ phức tạp. Việc đối chiếu kết quả phần mềm với 'Bảng tính chuẩn mực độc lập' (Golden Record / Baseline spreadsheet) của chuyên gia kế toán thuế là cách duy nhất đảm bảo tính chính xác 100% của thuật toán."
  },
  {
    track: 8,
    id: "Q8-08",
    level: 1,
    q: "Trong tuần đầu tiên của kế hoạch UAT kéo dài 3 tuần, người dùng nghiệp vụ (Business Users) từ chối tham gia kiểm thử với lý do 'Công việc vận hành cuối tháng quá bận, không có thời gian ngồi mò phần mềm'. Dự án có nguy cơ vỡ tiến độ Go-live. Là BA điều phối UAT, bạn xử lý tình huống này như thế nào?",
    opts: [
      "Báo cáo lên Tổng Giám đốc đòi sa thải toàn bộ nhân viên nghiệp vụ lười biếng.",
      "Chuyển đổi hình thức từ 'Tự do kiểm thử' (Unstructured testing) sang 'Phiên kiểm thử có hướng dẫn theo kịch bản tập trung' (Guided / Focused UAT Workshop): BA chuẩn bị sẵn dữ liệu mẫu, phân bổ ca kiểm thử theo vai trò cụ thể, đóng gói thành các phiên làm việc ngắn 90 phút/ngày, BA ngồi trực tiếp bên cạnh để hỗ trợ ghi nhận lỗi, đồng thời báo cáo tiến độ minh bạch cho Trưởng bộ phận của họ.",
      "Tự mình bấm thay toàn bộ các kịch bản kiểm thử rồi ký giả chữ ký nghiệm thu của khách hàng.",
      "Tuyên bố hủy bỏ dự án và chuyển phần mềm sang cho công ty khác sử dụng."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Người dùng nghiệp vụ thường sợ UAT vì họ thiếu thời gian và không biết bắt đầu từ đâu. BA cần giảm thiểu nỗ lực của họ bằng cách tổ chức Guided UAT Workshop có kịch bản End-to-End cụ thể, thời gian ngắn gọn (Timeboxing 90 phút), chuẩn bị sẵn dữ liệu để họ chỉ cần thực hiện tác vụ chuyên môn."
  },
  {
    track: 8,
    id: "Q8-09",
    level: 1,
    q: "Trong quá trình kiểm thử hệ thống Bán hàng Đa kênh, Tester phát hiện hóa đơn giá trị 1.500.550 VNĐ khi áp thuế VAT 8% bị tính lệch 1 đồng (120.044 VNĐ thay vì 120.045 VNĐ) do quy tắc làm tròn số học khác nhau giữa phân hệ Giỏ hàng và phân hệ Kế toán ERP. Khi ghi nhận lỗi này vào Jira, BA cần viết mô tả thế nào cho chuẩn mực?",
    opts: [
      "Hệ thống tính tiền sai bét, yêu cầu dev sửa ngay lập tức.",
      "Tiêu đề rõ ràng: '[Lệch VAT] Chênh lệch 1 đồng giữa Giỏ hàng và Hóa đơn ERP do quy tắc làm tròn (Rounding logic)'; Mô tả đầy đủ: Điều kiện tiên quyết (Pre-conditions), Dữ liệu đầu vào cụ thể (SKU, đơn giá, số lượng), Các bước tái hiện (Steps to Reproduce), Kết quả thực tế (Actual: 120.044), Kết quả kỳ vọng (Expected: 120.045 theo Thông tư kế toán), cùng tài liệu tham chiếu quy tắc làm tròn (Round Half Up).",
      "Chỉ đính kèm ảnh chụp màn hình mà không viết bất kỳ chữ nào.",
      "Ghi nhận là lỗi Minor và để sang năm sau sửa vì 1 đồng là số tiền quá nhỏ."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Một Bug Report chất lượng cao của BA phải cung cấp đầy đủ: Tiêu đề súc tích, Bối cảnh dữ liệu, Các bước tái hiện chính xác, Actual vs Expected, và căn cứ pháp lý/nghiệp vụ (Business Rule / Law reference) để Dev hiểu được bản chất thuật toán cần điều chỉnh."
  },
  {
    track: 8,
    id: "Q8-10",
    level: 1,
    q: "Sau khi đội Dev tiến hành sửa một lỗi nhỏ liên quan đến định dạng hiển thị ngày sinh trên hồ sơ nhân viên, BA nhận thấy phân hệ Tính bảo hiểm xã hội bỗng nhiên báo lỗi không tính được tiền. Khái niệm và giải pháp kiểm định nào cần được áp dụng ở đây?",
    opts: [
      "Đây là hiện tượng ngẫu nhiên không thể phòng tránh trong ngành phần mềm.",
      "Hiện tượng Lỗi tác động liên đới (Regression Defect / Side-effect); BA và QA cần kích hoạt bộ 'Kiểm thử hồi quy' (Regression Test Suite) bao gồm các chức năng cốt lõi chịu ảnh hưởng để đảm bảo việc sửa lỗi tại một điểm không làm hư hỏng các chức năng đang chạy ổn định khác.",
      "Xóa bỏ hoàn toàn tính năng hiển thị ngày sinh để không bao giờ bị lỗi nữa.",
      "Yêu cầu lập trình viên không được sửa bất kỳ lỗi nào nữa từ nay về sau."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Regression Testing (Kiểm thử hồi quy) là hoạt động bắt buộc sau mỗi lần sửa code hoặc bổ sung tính năng mới, nhằm xác minh các sửa đổi đó không gây ra hiệu ứng phụ (Side-effects) làm gãy đổ các module liên quan."
  },
  {
    track: 8,
    id: "Q8-11",
    level: 1,
    q: "Trong quá trình UAT màn hình Quản lý kho, người dùng phát biểu: 'Chúng tôi muốn hệ thống phải tự động gửi tin nhắn SMS cho Giám đốc mỗi khi có lô hàng đông lạnh bị quá nhiệt độ cho phép'. Kiểm tra lại Hợp đồng và Tài liệu đặc tả SRS đã ký kết, tính năng gửi SMS này không hề được đề cập. BA cần xử lý phân loại như thế nào?",
    opts: [
      "Ghi nhận đây là lỗi nghiêm trọng (Blocker Bug) và bắt buộc Dev phải làm miễn phí ngay lập tức.",
      "Xác định đây là 'Yêu cầu thay đổi phạm vi' (Change Request - CR) chứ không phải là Lỗi (Defect); BA giải thích rõ ràng cho người dùng căn cứ theo SRS đã thống nhất, ghi nhận nhu cầu, đánh giá tính khả thi/chi phí/thời gian và đưa vào quy trình thẩm định CR chính thức (hoặc xếp vào giai đoạn sau Go-live).",
      "Lập tức từ chối thẳng thừng và cấm người dùng không được phát biểu ý kiến nữa.",
      "Âm thầm bỏ tiền túi cá nhân ra thuê công ty bên ngoài viết thêm tính năng đó."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Phân định rõ Defect (Sai lệch so với đặc tả đã ký kết) và Change Request (Nhu cầu phát sinh ngoài phạm vi đã thống nhất) là kỹ năng sống còn của BA để bảo vệ ngân sách dự án và tránh hiện tượng phình to phạm vi (Scope Creep) trong giai đoạn UAT."
  },
  {
    track: 8,
    id: "Q8-12",
    level: 1,
    q: "Phương pháp 'Kiểm thử thăm dò' (Exploratory Testing) kết hợp cùng kỹ thuật Persona mang lại giá trị độc đáo nào mà các kịch bản kiểm thử theo kịch bản cứng (Scripted Test Cases) thường bỏ sót?",
    opts: [
      "Giúp hoàn thành việc kiểm thử mà không cần bật máy tính.",
      "Khai thác trực giác, kinh nghiệm thực tế và sự sáng tạo của người kiểm thử khi hóa thân vào các mẫu người dùng đặc thù (ví dụ: một nhân viên mới hay ấn nhầm, một khách hàng cố tình hack hệ thống) để tìm ra các lỗi logic sâu và các tình huống ngoại lệ bất thường ngoài đời thực.",
      "Giúp tiết kiệm 100% chi phí trả lương cho nhân viên kiểm thử.",
      "Đảm bảo mã nguồn phần mềm không bị phát tán ra nước ngoài."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Scripted Testing chỉ kiểm tra những gì đã lường trước trong đặc tả. Exploratory Testing kết hợp Persona trao quyền cho tester suy nghĩ như người dùng thật ngoài đời (thử các hành vi phi chuẩn, ấn nút lung tung, thao tác trái quy luật) để phát hiện các lỗ hổng trải nghiệm và kẽ hở logic tiềm ẩn."
  },
  {
    track: 8,
    id: "Q8-13",
    level: 1,
    q: "Báo cáo Kiểm thử khả năng chịu tải (Stress/Load Testing) chuẩn bị cho ngày Siêu sale 11/11 trả về kết quả: 'Ở mức tải 1.000 RPS, Response Time p95 là 800ms, Error Rate 0.1%; nhưng khi nâng tải lên 2.500 RPS, Response Time p95 tăng vọt lên 8.2s và Error Rate chạm mức 28% (chủ yếu là lỗi HTTP 504 Gateway Timeout)'. BA cần đọc hiểu dữ liệu này và khuyến nghị điều gì?",
    opts: [
      "Hệ thống hoàn toàn khỏe mạnh và sẵn sàng đón nhận 50.000 người dùng cùng lúc.",
      "Hệ thống đạt giới hạn chịu đựng (Breaking Point) ở khoảng 1.500 - 2.000 RPS; nguyên nhân nghẽn cổ chai dẫn đến timeout khi vượt quá tải. BA cần cảnh báo rủi ro sập sàn và phối hợp với Kỹ sư hạ tầng/Dev triển khai phương án tối ưu truy vấn DB, bổ sung bộ nhớ đệm Cache (Redis), thiết lập cơ chế xếp hàng chờ (Virtual Waiting Room) và chuẩn bị kịch bản tự động co giãn tài nguyên (Auto-scaling).",
      "Khuyên công ty hủy bỏ ngày hội mua sắm 11/11 và đóng cửa website trong tháng đó.",
      "Đổi mã lỗi từ 504 thành mã 200 để báo cáo trông có vẻ đẹp hơn."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Error Rate 28% kèm thời gian chờ 8.2s là dấu hiệu sập hệ thống (Catastrophic failure) khi lưu lượng vượt quá 2.000 RPS. BA cần diễn giải chỉ số kỹ thuật thành rủi ro thương mại, thúc đẩy giải pháp hạ tầng chịu tải (Caching, Queueing, Auto-scaling, Circuit Breaker) trước chiến dịch lớn."
  },

  // Level 2: Nâng cao (Q8-14 -> Q8-20)
  {
    track: 8,
    id: "Q8-14",
    level: 2,
    q: "Còn 24 giờ trước thời điểm Go-Live toàn quốc của Hệ thống Quản lý Vận đơn Logistics. Biên bản UAT còn tồn đọng 1 lỗi phân loại 'Critical': Chức năng 'Xuất báo cáo tổng kết sản lượng tự động lúc 23h59' bị lỗi treo máy và phải mất 45 phút chạy lại thủ công; tuy nhiên toàn bộ các luồng cốt lõi (Tạo đơn, Gán xe, Định vị GPS, Thu hộ COD) đều hoạt động trơn tru 100%. Giám đốc Khối Vận hành tạo áp lực ép BA và QA phải ký 'Biên bản nghiệm thu vô điều kiện' để kịp tiến độ. Là Senior BA đại diện quản lý chất lượng giải pháp, bạn xử lý tình huống tiến thoái lưỡng nan này như thế nào?",
    opts: [
      "Ký duyệt ngay lập tức và nói dối với Ban Giám đốc rằng hệ thống hoàn toàn không có bất kỳ lỗi nào.",
      "Từ chối ký vô điều kiện; thay vào đó lập 'Biên bản nghiệm thu có điều kiện' (Conditional Sign-off kèm Known Defects List): Nêu rõ lỗi tồn đọng, phân tích tác động rủi ro, xây dựng quy trình thao tác tạm thời (SOP Workaround: Phân công nhân sự vận hành chạy lệnh bù lúc 0h15), đồng thời ký cam kết dịch vụ (SLA) với Đội Dev phải phát hành bản Hotfix sửa dứt điểm lỗi trong vòng 48 giờ sau Go-live có sự phê duyệt đồng thuận của Ban điều hành.",
      "Tuyên bố rút lui khỏi dự án và không chịu trách nhiệm về bất cứ điều gì nữa.",
      "Yêu cầu hoãn lịch Go-live của toàn bộ tập đoàn thêm 6 tháng để viết lại module báo cáo."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Ký vô điều kiện là vô trách nhiệm, nhưng trì hoãn ngày Go-live vì một lỗi batch ban đêm có thể cứu vãn bằng workaround lại gây thiệt hại kinh doanh khổng lồ. Giải pháp chuẩn mực của Senior BA là 'Conditional Sign-off' kèm Workaround khả thi, minh bạch rủi ro và ràng buộc cam kết Hotfix SLA có sự phê chuẩn cấp cao."
  },
  {
    track: 8,
    id: "Q8-15",
    level: 2,
    q: "Để chuẩn bị môi trường UAT cho Hệ thống Ngân hàng điện tử, đại diện Phía Khách hàng yêu cầu sao chép (Clone) 100% dữ liệu thực từ môi trường Production về máy chủ UAT (gồm số CCCD, số dư tài khoản, lịch sử giao dịch và mật khẩu mã hóa của 3 triệu khách hàng) với lý do 'Có dữ liệu thật 100% thì kiểm thử mới chính xác và phát hiện hết lỗi'. Đội ngũ kiểm thử bao gồm cả nhân sự outsource bên ngoài. Là BA phụ trách giải pháp, bạn cần phản ứng thế nào để vừa đáp ứng nhu cầu kiểm thử vừa tuân thủ quy định bảo mật?",
    opts: [
      "Đồng ý ngay và gửi đường link tải cơ sở dữ liệu lên nhóm Zalo của các bạn Tester outsource.",
      "Kiên quyết từ chối việc dùng dữ liệu thật chưa xử lý vì vi phạm nghiêm trọng Luật An ninh mạng, Nghị định 13/2023/NĐ-CP và tiêu chuẩn PCI-DSS; Đề xuất phương án áp dụng kỹ thuật 'Làm mờ và xáo trộn dữ liệu' (Data Masking / Obfuscation) hoặc sinh dữ liệu giả lập có cấu trúc tương đương (Synthetic Data Generation): Giữ nguyên format và quy luật logic của dữ liệu (số ký tự CCCD, logic số dư, mã ngân hàng) nhưng thay thế toàn bộ thông tin định danh cá nhân nhạy cảm thành dữ liệu giả.",
      "Tuyên bố cấm hoàn toàn không cho thực hiện kiểm thử trên môi trường UAT nữa.",
      "Yêu cầu 3 triệu khách hàng ký giấy từ bỏ quyền riêng tư dữ liệu để phục vụ kiểm thử."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Sử dụng dữ liệu cá nhân thật trên môi trường phi sản xuất (Non-production environments) có nhà thầu ngoài là vi phạm pháp luật và tạo rủi ro rò rỉ dữ liệu thảm khốc. Data Masking / Data Anonymization là giải pháp bắt buộc: Bảo toàn đặc tính phân bố và độ phức tạp dữ liệu cho kiểm thử nhưng loại bỏ 100% thông tin nhạy cảm định danh (PII)."
  },
  {
    track: 8,
    id: "Q8-16",
    level: 2,
    q: "Trong quá trình UAT hệ thống Đặt phòng khách sạn tích hợp với Cổng thanh toán quốc tế và Hệ thống Global Distribution System (GDS), môi trường Sandbox của đối tác bên ngoài liên tục chập chờn, phản hồi timeout thất thường khiến các ca kiểm thử UAT luồng đặt vé bị tắc nghẽn suốt 4 ngày. Đội Tester nội bộ không thể phân định lỗi do code nhà hay do đối tác. BA nên phối hợp triển khai giải pháp kỹ thuật nào để thông luồng kiểm thử?",
    opts: [
      "Cho toàn bộ đội ngũ dự án nghỉ phép cho đến khi đối tác tự sửa xong hệ thống của họ.",
      "Thiết lập giải pháp 'Ảo hóa dịch vụ và Mock Server' (Service Virtualization / API Mocking): Đội phát triển cấu hình một máy chủ giả lập phản hồi của đối tác theo đúng chuẩn hợp đồng giao tiếp (OpenAPI Specification), có thể chủ động kích hoạt trả về các mã thành công, thất bại, thẻ hết hạn hoặc giả lập timeout có chủ đích; cho phép đội UAT kiểm thử thông suốt 100% các kịch bản nghiệp vụ nội bộ mà không phụ thuộc vào hạ tầng đối tác.",
      "Tự ý chuyển thẳng sang môi trường Production thật của đối tác và quẹt thẻ tín dụng cá nhân của BA để test.",
      "Hủy bỏ hoàn toàn tính năng thanh toán quốc tế và chỉ chấp nhận khách đến quầy trả tiền mặt."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Khi phụ thuộc vào dịch vụ bên thứ ba (Third-party dependency) không ổn định trong giai đoạn UAT, Service Virtualization (Mocking Server) là cứu cánh. Nó cho phép cô lập kiểm thử hệ thống nội bộ, mô phỏng cả kịch bản hiếm gặp (Edge cases) mà môi trường thật của đối tác khó chủ động tạo ra."
  },
  {
    track: 8,
    id: "Q8-17",
    level: 2,
    q: "Trong phiên UAT hệ thống Thương mại điện tử, Trưởng phòng Chăm sóc khách hàng phát hiện: Khi khách hàng hủy một đơn hàng đã áp Voucher hoàn xu, hệ thống hủy đơn thành công nhưng KHÔNG tự động phục hồi lại thời hạn sử dụng của Voucher cho khách. Trong tài liệu SRS ban đầu, mục này bị bỏ trống không quy định. Đội Dev khẳng định đây là 'Change Request' phát sinh ngoài hợp đồng, đòi thêm 60 triệu và hoãn 10 ngày. Khách hàng khẳng định đây là 'Lỗi logic hiển nhiên' và tuyên bố từ chối nghiệm thu. Là BA chủ trì phân tích, bạn đưa ra phán quyết và giải pháp hòa giải như thế nào?",
    opts: [
      "Ủng hộ khách hàng 100% và ép Dev phải tự bỏ tiền túi ra đền cho công ty.",
      "Thừa nhận thiếu sót trong tài liệu đặc tả (Ambiguity gap); Đóng vai trò cầu nối phân tích tác động kinh doanh: Việc không hoàn voucher sẽ dẫn đến hàng nghìn cuộc gọi khiếu nại làm quá tải tổng đài ngay ngày đầu Go-live. Đề xuất giải pháp dung hòa: Tách bài toán thành 2 bước — Bước 1 (Ngay trong đợt Release): Dev hỗ trợ viết nhanh một API hoàn voucher thủ công cho đội CSKH xử lý tạm thời; Bước 2: Đưa việc tự động hóa hoàn voucher vào backlog cải tiến của Sprint đầu tiên sau Go-live với chi phí kỹ thuật được thương lượng lại giữa hai bên.",
      "Xóa bỏ hoàn toàn tính năng Voucher ra khỏi hệ thống để không bên nào tranh cãi nữa.",
      "Bỏ mặc hai bên tự tranh luận và không tham gia cuộc họp hòa giải."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Tranh chấp 'Defect vs CR' do khoảng trống đặc tả là xung đột thường gặp nhất trong UAT. BA chuyên nghiệp không đổ lỗi mà nhận diện rủi ro vận hành thực tế, đưa ra giải pháp giảm tải hai bước (Workaround trước để kịp Go-live, tự động hóa bài bản sau) để hài hòa lợi ích kinh doanh và kỹ thuật."
  },
  {
    track: 8,
    id: "Q8-18",
    level: 2,
    q: "Dự án Nâng cấp Hệ thống Tiền gửi Ngân hàng thực hiện chuyển đổi dữ liệu (Data Migration) số dư của 800.000 tài khoản từ Core Banking cũ sang Core Banking mới. Sai số dù chỉ 1 đồng hoặc lệch 1 ngày tính lãi suất dồn tích (Accrued Interest) cũng có thể dẫn đến đình chỉ hoạt động ngân hàng. Để kiểm thử nghiệm thu chuyển đổi dữ liệu (Data Migration Testing), BA và QA cần thiết kế chiến lược kiểm thử đối soát như thế nào?",
    opts: [
      "Chọn ngẫu nhiên 5 tài khoản của nhân viên ngân hàng kiểm tra bằng mắt, nếu đúng thì kết luận toàn bộ 800.000 tài khoản đều đúng.",
      "Thiết lập quy trình kiểm thử đối soát tự động toàn diện (Automated 100% Data Reconciliation): Chạy song song tính toán lãi suất trên cả hai hệ thống trong cùng một kỳ đối chiếu; xây dựng các script SQL tự động so sánh từng trường dữ liệu then chốt (Số dư gốc, lãi dồn tích, trạng thái phong tỏa, mã tiền tệ); thiết lập bảng kiểm soát tổng hợp (Reconciliation Dashboard) kiểm tra khớp số dư tổng mức Ledger (Balance-level check) và kiểm tra chi tiết từng bút toán (Account-level check), với ngưỡng sai số chấp nhận được là 0.00 VNĐ.",
      "Cộng gộp toàn bộ tiền của 800.000 tài khoản thành một con số tổng duy nhất rồi so sánh.",
      "Chuyển đổi dữ liệu trực tiếp trong giờ giao dịch mà không cần chạy kiểm thử trước."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Migration Testing trong tài chính đòi hỏi kiểm tra đối soát 100% (Reconciliation at 100% volume) ở hai cấp độ: Cấp độ vi mô (từng tài khoản, lãi tích lũy) và cấp độ vĩ mô (tổng tài sản trên sổ cái General Ledger), đối soát song song (Parallel run) để đảm bảo độ chính xác tuyệt đối không có sai số."
  },
  {
    track: 8,
    id: "Q8-19",
    level: 2,
    q: "Trước thời điểm chính thức chuyển đổi hệ thống ERP Bệnh viện vào đêm ngày thứ Bảy (Go-Live Window từ 22h00 đến 04h00 sáng Chủ nhật), Ban Điều hành yêu cầu tổ chức một buổi 'Mock Cutover' (Diễn tập chuyển đổi hệ thống). Mục tiêu cốt lõi mà BA và đội ngũ chuyển giao cần xác minh trong buổi diễn tập này là gì?",
    opts: [
      "Mời toàn bộ bệnh nhân trong bệnh viện tham gia chạy thử máy tính.",
      "Xác thực tính khả thi của 'Kịch bản chuyển đổi chi tiết từng phút' (Cutover Runbook): Đo lường chính xác thời gian chạy chuyển đổi dữ liệu có khớp với khung giờ ngừng hệ thống (Downtime Window 6 tiếng) hay không; kiểm tra vai trò phối hợp giữa các nhóm (Kỹ thuật, Nghiệp vụ y tế, Dược); và đặc biệt là kiểm thử quy trình khôi phục trạng thái ban đầu (Rollback Plan) nếu gặp sự cố không thể khắc phục trước giờ mở cửa đón bệnh nhân vào sáng Chủ nhật.",
      "Kiểm tra xem hệ thống điều hòa nhiệt độ trong phòng máy chủ có đủ mát hay không.",
      "Viết xong toàn bộ tài liệu hướng dẫn sử dụng phần mềm bằng tiếng Anh."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Mock Cutover (Diễn tập chuyển đổi) là bài kiểm tra quyết định cho ngày Go-live: Đo lường chính xác thời gian chạy dữ liệu có vượt khung giờ chết cho phép (Downtime window) hay không, kiểm chứng tính sẵn sàng của nhân sự và bắt buộc phải diễn tập kế hoạch Rollback để đảm bảo an toàn tuyệt đối cho vận hành y tế."
  },
  {
    track: 8,
    id: "Q8-20",
    level: 2,
    q: "Doanh nghiệp chuyển đổi mô hình sang Continuous Deployment (CD), phát hành phiên bản mới hàng tuần ra môi trường Production. Quy trình UAT truyền thống kéo dài 3 tuần của các Trưởng phòng nghiệp vụ bị 'phá sản' hoàn toàn vì không thể theo kịp tốc độ của đội kỹ thuật. Là Senior BA tư vấn hiện đại hóa quy trình chất lượng, giải pháp nào giúp Doanh nghiệp duy trì kiểm soát nghiệm thu nghiệp vụ mà không làm chậm nhịp phát hành phần mềm?",
    opts: [
      "Bãi bỏ hoàn toàn việc nghiệm thu nghiệp vụ và để cho Dev tự do release bất cứ thứ gì họ muốn.",
      "Ứng dụng kỹ thuật 'Cờ tính năng' (Feature Toggles / Feature Flags) kết hợp cơ chế 'Phát hành thử nghiệm phân tầng' (Canary Release / Internal Beta Testing): Mã nguồn mới vẫn được liên tục đóng gói lên môi trường Production nhưng tính năng mới được ẩn giấu sau cờ tính năng; BA cấp quyền cho nhóm người dùng nghiệp vụ then chốt trải nghiệm và nghiệm thu trực tiếp trên dữ liệu thật an toàn; khi đạt chuẩn chấp nhận, PO/BA chỉ cần bật cờ tính năng cho toàn bộ thị trường ngay lập tức mà không cần triển khai lại mã nguồn.",
      "Bắt buộc đội Dev phải quay trở lại mô hình Waterfall phát hành 1 năm 1 lần.",
      "Chỉ cho phép phát hành các tính năng vào ngày lễ Giáng sinh hàng năm."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Trong kỷ nguyên DevOps/CI-CD, Feature Flags (Feature Toggles) tách rời việc 'Triển khai mã nguồn' (Deployment) khỏi việc 'Phát hành tính năng cho người dùng' (Release). Điều này giúp BA và Business Stakeholders có thể nghiệm thu trực tiếp trong môi trường thật (Testing in Production an toàn) mà không cản trở dòng chảy phát triển của kỹ thuật."
  }
];
