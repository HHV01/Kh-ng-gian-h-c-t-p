module.exports = [
  // Level 0: Nền tảng (Q7-01 -> Q7-05)
  {
    track: 7,
    id: "Q7-01",
    level: 0,
    q: "Sự khác biệt căn bản giữa Giao diện người dùng (User Interface - UI) và Trải nghiệm người dùng (User Experience - UX) là gì?",
    opts: [
      "UI chỉ dành cho lập trình viên Backend; UX chỉ dành cho nhân viên kinh doanh.",
      "UI tập trung vào các yếu tố thị giác, bố cục, màu sắc, phông chữ và tính thẩm mỹ của sản phẩm; UX bao hàm toàn bộ cảm xúc, nhận thức, tính dễ sử dụng, tính hiệu quả và mức độ thỏa mãn của người dùng trong suốt quá trình tương tác với sản phẩm hoặc dịch vụ.",
      "UI và UX là hai thuật ngữ hoàn toàn giống nhau, chỉ khác nhau cách viết tắt.",
      "UI là bản thiết kế trên giấy, còn UX là mã nguồn đã được đóng gói thành file .exe."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. UI (Giao diện) là những gì người dùng nhìn thấy và chạm vào (nút bấm, màu sắc, typography); UX (Trải nghiệm) là cảm giác tổng thể, sự thuận tiện, logic hành trình và giá trị mà người dùng nhận được khi hoàn thành mục tiêu."
  },
  {
    track: 7,
    id: "Q7-02",
    level: 0,
    q: "Định luật Hick (Hick's Law) trong thiết kế sản phẩm số phát biểu nguyên lý gì?",
    opts: [
      "Thời gian người dùng đưa ra quyết định sẽ tăng lên theo tỷ lệ logarit tương ứng với số lượng và độ phức tạp của các lựa chọn được trình bày trước mắt họ.",
      "Kích thước nút bấm càng nhỏ thì người dùng bấm càng nhanh và chính xác hơn.",
      "Mọi trang web đều phải sử dụng màu xanh lam làm màu chủ đạo.",
      "Người dùng sẽ luôn đọc toàn bộ văn bản từ trên xuống dưới một cách tỉ mỉ."
    ],
    ans: 0,
    exp: "Đáp án đúng là A. Định luật Hick (Hick-Hyman Law) chỉ ra rằng càng đưa ra quá nhiều lựa chọn cùng một lúc thì người dùng càng mất nhiều thời gian suy nghĩ và dễ bị quá tải nhận thức (Cognitive Overload). Ứng dụng: Menu tinh gọn, phân cấp bước đi (Step-by-step wizard)."
  },
  {
    track: 7,
    id: "Q7-03",
    level: 0,
    q: "Mô hình phễu chỉ số khởi nghiệp tinh gọn Pirate Metrics (Khung AARRR của Dave McClure) bao gồm 5 giai đoạn phát triển người dùng nào?",
    opts: [
      "Advertising, Analyzing, Reviewing, Reacting, Rewarding.",
      "Acquisition (Thu hút), Activation (Kích hoạt trải nghiệm đầu tiên), Retention (Giữ chân), Referral (Lan tỏa/Giới thiệu), Revenue (Doanh thu).",
      "Action, Agreement, Resource, Regulation, Realization.",
      "Access, Account, Request, Response, Redirection."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Khung AARRR (Pirate Metrics): Acquisition (người dùng đến từ đâu), Activation (trải nghiệm khoảnh khắc 'Aha!' đầu tiên), Retention (họ có quay lại không), Referral (họ có giới thiệu người khác không), và Revenue (họ có trả tiền không)."
  },
  {
    track: 7,
    id: "Q7-04",
    level: 0,
    q: "Trong giai đoạn Khám phá sản phẩm (Product Discovery), công cụ 'Empathy Map' (Bản đồ thấu cảm) được BA sử dụng nhằm mục đích gì?",
    opts: [
      "Vẽ sơ đồ mạng kết nối giữa các máy chủ lưu trữ dữ liệu đám mây.",
      "Thu thập và phân loại sâu sắc thế giới nội tâm của người dùng mục tiêu thông qua 4 góc nhìn: Người dùng Nói gì (Says), Nghĩ gì (Thinks), Làm gì (Does), và Cảm thấy thế nào (Feels), từ đó nhận diện rõ Nỗi đau (Pains) và Kỳ vọng (Gains).",
      "Tính toán bảng chấm công và đánh giá xếp loại nhân sự cuối năm.",
      "Tự động sinh ra mã nguồn HTML/CSS từ hình ảnh vẽ tay."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Empathy Map giúp đội ngũ dự án đặt mình vào vị trí của khách hàng, vượt qua giả định chủ quan để thấu hiểu sâu sắc tâm lý, hành vi, nỗi bức xúc (Pains) và động lực thúc đẩy họ sử dụng giải pháp (Gains)."
  },
  {
    track: 7,
    id: "Q7-05",
    level: 0,
    q: "Theo 10 nguyên tắc đánh giá tính khả dụng (Heuristic Evaluation) nổi tiếng của Jakob Nielsen, nguyên tắc 'Visibility of system status' (Khả năng nhận biết trạng thái hệ thống) yêu cầu sản phẩm phải làm gì?",
    opts: [
      "Luôn công khai mã nguồn phần mềm cho tất cả người dùng trên Internet cùng xem.",
      "Luôn luôn thông báo cho người dùng biết chuyện gì đang xảy ra bên trong hệ thống thông qua các phản hồi trực quan, kịp thời và có ý nghĩa trong một khoảng thời gian hợp lý (ví dụ: thanh tiến trình khi tải file, icon loading khi gửi yêu cầu).",
      "Bắt buộc người dùng phải xem video quảng cáo 30 giây trước khi mở bất kỳ trang nào.",
      "Ẩn toàn bộ thông báo lỗi để người dùng không cảm thấy lo lắng hoặc hoang mang."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Nguyên tắc số 1 của Jakob Nielsen: Hệ thống luôn phải cung cấp phản hồi (Feedback) tức thời và rõ ràng để người dùng biết hành động của họ đã được ghi nhận hay đang xử lý, tránh tình trạng click đúp nhiều lần do tưởng máy bị đơ."
  },

  // Level 1: Vận dụng (Q7-06 -> Q7-13)
  {
    track: 7,
    id: "Q7-06",
    level: 1,
    q: "Dữ liệu phân tích phễu chuyển đổi (Funnel Analytics) của ứng dụng mua sắm cho thấy: Bước 1 Xem giỏ hàng đạt 10.000 lượt; Bước 2 Nhập địa chỉ đạt 8.500 lượt; nhưng đến Bước 3 Nhập thông tin thẻ thanh toán thì tỷ lệ thoát (Drop-off rate) tăng đột biến lên 70%. Là BA phụ trách tối ưu hóa sản phẩm, phương pháp nghiên cứu kết hợp nào là hiệu quả nhất để tìm ra nguyên nhân gốc rễ?",
    opts: [
      "Tự đoán nguyên nhân là do màu nút thanh toán xấu và đổi ngay sang màu tím mà không cần hỏi ai.",
      "Xem lại bản ghi phiên thao tác (Session Recordings/Heatmaps) kết hợp phỏng vấn người dùng thực tế (Usability Testing) trên phân khúc khách hàng bỏ dở đơn để phát hiện các rào cản UX (ví dụ: form nhập thẻ quá rườm rà, thiếu logo bảo mật uy tín, hoặc phát sinh phí ẩn ngoài dự kiến).",
      "Xóa bỏ hoàn toàn bước nhập địa chỉ nhận hàng để rút ngắn phễu.",
      "Gửi email khiển trách 70% khách hàng đã thoát vì không hoàn thành giao dịch."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Dữ liệu định lượng (Funnel Analytics) chỉ ra 'Vấn đề xảy ra ở đâu' (Where/What), còn dữ liệu định tính (Session recordings, Heatmaps, Usability testing) giúp BA giải mã 'Tại sao người dùng lại bỏ dở' (Why), từ đó tìm ra điểm nghẽn thực sự."
  },
  {
    track: 7,
    id: "Q7-07",
    level: 1,
    q: "Khi thiết kế biểu mẫu nhập thông tin tài khoản ngân hàng thụ hưởng, BA nên đưa ra yêu cầu UX nào để vừa phòng ngừa sai sót của người dùng (Error Prevention) vừa nâng cao tốc độ thao tác?",
    opts: [
      "Chỉ cho phép người dùng nhập tay toàn bộ số tài khoản và bắt buộc phải gõ lại đúng 3 lần liên tiếp.",
      "Tích hợp tính năng tự động tra cứu tên chủ tài khoản (Auto-lookup Account Name) ngay khi người dùng chọn ngân hàng và nhập đủ số tài khoản, hiển thị tên in hoa nổi bật để người dùng xác nhận trực quan trước khi bấm chuyển tiền.",
      "Bắt buộc người dùng phải tải lên bản quét màu sổ tiết kiệm mới cho phép chuyển tiền.",
      "Không cần kiểm tra số tài khoản, tiền chuyển nhầm thì người dùng tự chịu trách nhiệm."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Tự động tra cứu tên chủ tài khoản (Account Name Lookup) là ứng dụng mẫu mực của nguyên lý 'Error Prevention': Hệ thống chủ động đối chiếu dữ liệu với ngân hàng thụ hưởng và phản hồi ngay lập tức, ngăn ngừa 99% rủi ro chuyển tiền nhầm số tài khoản."
  },
  {
    track: 7,
    id: "Q7-08",
    level: 1,
    q: "Đội ngũ Sản phẩm chuẩn bị thực hiện thử nghiệm A/B Testing trên trang Chi tiết sản phẩm (PDP): Phiên bản A giữ nút 'Thêm vào giỏ' truyền thống; Phiên bản B bổ sung nút 'Mua ngay' (Buy Now) màu cam nổi bật. Để cuộc thử nghiệm đạt chuẩn khoa học và có ý nghĩa thống kê (Statistical Significance), BA cần thiết lập điều kiện nào?",
    opts: [
      "Chỉ chạy thử nghiệm trong vòng 2 tiếng buổi đêm cho 10 người bạn thân của BA thử nghiệm.",
      "Xác định rõ giả thuyết (Hypothesis), chỉ số mục tiêu (Primary Metric là Tỷ lệ hoàn tất đơn hàng), chia ngẫu nhiên 50/50 lượng truy cập đồng thời, và chạy thử nghiệm đủ thời gian để đạt cỡ mẫu tối thiểu với độ tin cậy thống kê (Statistical Significance p-value < 0.05).",
      "Cho phiên bản B chạy trước 1 tháng, phiên bản A chạy sau 1 tháng vào dịp Tết.",
      "Nhóm tự vào click thử nghiệm cho phiên bản B 1.000 lần để tăng chỉ số thành công."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. A/B Testing đòi hỏi phân luồng ngẫu nhiên đồng thời (Traffic split), chạy đủ chu kỳ kinh doanh (ít nhất 1-2 tuần để tránh sai lệch ngày trong tuần), xác định cỡ mẫu đủ lớn để đạt ý nghĩa thống kê (p < 0.05) trước khi đưa ra kết luận kinh doanh."
  },
  {
    track: 7,
    id: "Q7-09",
    level: 1,
    q: "Ứng dụng Ví điện tử ghi nhận 50% người dùng mới gỡ app ngay sau khi cài đặt vì ứng dụng bắt buộc phải chụp 2 mặt Căn cước công dân và quay video khuôn mặt ngay tại màn hình đầu tiên. Áp dụng kỹ thuật 'Progressive Disclosure' (Tiết lộ thông tin lũy tiến), BA nên tái cấu trúc luồng trải nghiệm này thế nào?",
    opts: [
      "Bắt buộc người dùng phải nộp thêm sổ hộ khẩu và giấy khai sinh ngay màn hình đầu tiên.",
      "Cho phép người dùng đăng ký nhanh bằng Số điện thoại/OTP để vào khám phá giao diện, nhận voucher quà tặng chào mừng (Activation); chỉ yêu cầu xác thực eKYC khi người dùng thực hiện giao dịch nạp/rút/chuyển tiền vượt ngưỡng hoặc kích hoạt ví theo quy định pháp lý.",
      "Xóa bỏ hoàn toàn định danh eKYC bất chấp quy định của Ngân hàng Nhà nước.",
      "Khóa màn hình điện thoại của người dùng nếu họ không chịu hoàn thành eKYC."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Progressive Disclosure là kỹ thuật cung cấp thông tin và đòi hỏi hành động theo từng bước tương ứng với giá trị người dùng nhận được. Giúp người dùng trải nghiệm giá trị cốt lõi trước (Onboarding smoothly) sẽ tạo động lực lớn hơn khi họ phải thực hiện các bước phức tạp như eKYC."
  },
  {
    track: 7,
    id: "Q7-10",
    level: 1,
    q: "Khi thiết kế Bảng điều khiển (Dashboard) cho Giám đốc Vận hành chuỗi 50 siêu thị, BA nhận được yêu cầu muốn xem cùng lúc 40 biểu đồ và bảng dữ liệu chi tiết trên 1 màn hình duy nhất. Hậu quả là màn hình bị rối loạn, tải chậm mất 15 giây. BA nên tư vấn giải pháp Kiến trúc thông tin (Information Architecture) như thế nào?",
    opts: [
      "Thu nhỏ kích thước chữ xuống 6pt để nhồi nhét đủ 40 biểu đồ vào 1 khung hình.",
      "Phân cấp thông tin theo cấu trúc kim tự tháp: Tầng trên cùng hiển thị 4-6 chỉ số KPI chiến lược tổng quan (High-level Summary); nhấp vào từng KPI sẽ mở ra các biểu đồ xu hướng phân tích chuyên sâu; cung cấp bộ lọc linh hoạt và cơ chế 'Drill-down' để xem chi tiết từng siêu thị khi cần.",
      "Bỏ hết toàn bộ biểu đồ và in ra file Excel 5.000 dòng gửi qua email hàng ngày.",
      "Từ chối làm dashboard và yêu cầu sếp tự đi kiểm tra từng siêu thị bằng xe máy."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Nguyên tắc thiết kế Dashboard chuyên nghiệp: Tránh quá tải nhận thức. Áp dụng quy tắc 'Overview first, zoom and filter, then details-on-demand' (Ben Shneiderman) giúp lãnh đạo nắm bắt bức tranh toàn cảnh nhanh chóng và chỉ đào sâu khi thấy có bất thường."
  },
  {
    track: 7,
    id: "Q7-11",
    level: 1,
    q: "Doanh nghiệp muốn đo lường mức độ dễ dàng hay khó khăn của khách hàng khi thực hiện khiếu nại đổi trả hàng trực tuyến. Chỉ số trải nghiệm khách hàng nào dưới đây là phù hợp nhất?",
    opts: [
      "Customer Effort Score (CES - Chỉ số nỗ lực của khách hàng).",
      "Net Promoter Score (NPS - Mức độ sẵn lòng giới thiệu cho bạn bè).",
      "Customer Lifetime Value (CLV - Giá trị vòng đời khách hàng).",
      "Return on Investment (ROI - Tỷ suất hoàn vốn đầu tư)."
    ],
    ans: 0,
    exp: "Đáp án đúng là A. CES (Customer Effort Score) đo lường xem khách hàng phải bỏ ra bao nhiêu công sức để hoàn thành một nhiệm vụ cụ thể (ví dụ giải quyết khiếu nại, đổi trả hàng). NPS đo lường lòng trung thành thương hiệu dài hạn, còn CSAT đo mức độ thỏa mãn tức thời."
  },
  {
    track: 7,
    id: "Q7-12",
    level: 1,
    q: "Khi xây dựng Cổng dịch vụ công trực tuyến phục vụ toàn dân, BA cần đưa ra yêu cầu về Tính tiếp cận (Accessibility - a11y) theo tiêu chuẩn quốc tế WCAG 2.1 cấp độ AA như thế nào đối với người dùng khiếm thị hoặc suy giảm thị lực?",
    opts: [
      "Hệ thống chỉ hỗ trợ chuột quang không dây, không hỗ trợ bàn phím máy tính thông thường.",
      "Toàn bộ hình ảnh thông tin phải có thuộc tính văn bản thay thế (alt text); tỷ lệ tương phản màu sắc chữ và nền đạt tối thiểu 4.5:1; toàn bộ chức năng có thể điều hướng hoàn toàn bằng bàn phím (Keyboard navigation) và tương thích tốt với phần mềm đọc màn hình (Screen Readers).",
      "Bắt buộc người dùng phải tải ứng dụng riêng biệt có phí mới đọc được chữ.",
      "Toàn bộ văn bản phải được chuyển thành định dạng video hoạt hình 3D."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Tiêu chuẩn WCAG 2.1 AA là yêu cầu bắt buộc cho các nền tảng dịch vụ công: Hỗ trợ người khuyết tật thông qua độ tương phản màu (Contrast ratio 4.5:1), alt text cho hình ảnh, Focus state rõ ràng và hỗ trợ điều hướng 100% bằng phím cho Screen Readers."
  },
  {
    track: 7,
    id: "Q7-13",
    level: 1,
    q: "Trưởng phòng Tiếp thị đề xuất chèn một checkbox mặc định 'Đồng ý mua thêm gói bảo hiểm hủy chuyến 50.000 VNĐ' đã được tích sẵn dấu kiểm (Pre-checked) khi khách hàng mua vé xem phim online. Xét dưới góc độ UX và Đạo đức thiết kế sản phẩm (Product Ethics), BA nên phân tích điều này như thế nào?",
    opts: [
      "Đây là một ý tưởng sáng tạo tuyệt vời cần nhân rộng trên toàn bộ ứng dụng.",
      "Đây là một dạng 'Dark Pattern' (Thiết kế thao túng / Sneak into basket): Nó có thể làm tăng doanh thu ngắn hạn nhưng gây tổn hại nghiêm trọng đến lòng tin của khách hàng (User Trust), làm tăng tỷ lệ khiếu nại đòi hoàn tiền và có nguy cơ vi phạm Luật Bảo vệ quyền lợi người tiêu dùng.",
      "Dark Pattern là quy định bắt buộc phải có theo thông lệ quốc tế.",
      "BA không cần quan tâm đến trải nghiệm khách hàng, chỉ cần nghe theo lệnh của Tiếp thị."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. 'Sneak into basket' là một Dark Pattern kinh điển lừa dối người dùng qua tính lơ đãng. BA chuyên nghiệp cần cảnh báo doanh nghiệp về rủi ro xói mòn uy tín thương hiệu, phản ứng tẩy chay và nguy cơ pháp lý khi ép buộc người tiêu dùng mua hàng không tự nguyện."
  },

  // Level 2: Nâng cao (Q7-14 -> Q7-20)
  {
    track: 7,
    id: "Q7-14",
    level: 2,
    q: "Ngân hàng số đối mặt xung đột gay gắt: Khối An ninh thông tin yêu cầu áp dụng xác thực sinh trắc học khuôn mặt và OTP cho MỌI giao dịch chuyển tiền trên 100.000 VNĐ để phòng chống tội phạm công nghệ cao. Khối Kinh doanh kịch liệt phản đối vì điều này sẽ làm tăng thời gian thanh toán từ 5 giây lên 35 giây, khiến tỷ lệ hủy giao dịch tăng vọt. Là Senior BA tư vấn giải pháp, bạn đề xuất kiến trúc UX nào tối ưu nhất?",
    opts: [
      "Loại bỏ hoàn toàn mọi lớp bảo mật để khách hàng chuyển tiền nhanh nhất có thể.",
      "Áp dụng cơ chế 'Xác thực thích ứng dựa trên rủi ro' (Risk-based Adaptive Authentication): Các giao dịch giá trị nhỏ tới người thụ hưởng quen thuộc (Whitelist / Beneficiary đã lưu) hoặc trên thiết bị tin cậy chỉ cần xác thực nhanh bằng mã PIN/Vân tay (Zero-friction); chỉ kích hoạt các bước xác thực sinh trắc học chuyên sâu và OTP khi phát hiện hành vi bất thường (Thiết bị mới, vị trí lạ, đổi mạng, hoặc giao dịch vượt ngưỡng hạn mức rủi ro cao).",
      "Khóa toàn bộ tính năng chuyển tiền online và bắt buộc khách hàng ra phòng giao dịch.",
      "Chỉ cho phép khách hàng chuyển tiền vào các ngày cuối tuần để giảm áp lực hệ thống."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Giải pháp Risk-based Authentication là chuẩn mực quốc tế: Không cào bằng rủi ro. Bằng cách phân tích ngữ cảnh (Contextual signals như Device fingerprint, IP, Beneficiary trust), hệ thống mang lại trải nghiệm mượt mà cho 95% giao dịch an toàn và chỉ dựng rào chắn bảo vệ khi phát hiện rủi ro thực sự."
  },
  {
    track: 7,
    id: "Q7-15",
    level: 2,
    q: "Hệ sinh thái Bán lẻ muốn ứng dụng AI để cá nhân hóa gợi ý sản phẩm dựa trên định vị GPS thời gian thực và lịch sử duyệt web của khách hàng nhằm tăng doanh số 25%. Tuy nhiên, Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân quy định việc thu thập phải có sự đồng thuận rõ ràng (Opt-in), không được ngầm định và người dùng có quyền rút lại đồng thuận bất kỳ lúc nào. BA nên thiết kế luồng trải nghiệm xin quyền (Consent UX Flow) như thế nào để vừa tuân thủ pháp lý vừa giữ tỷ lệ chấp thuận cao?",
    opts: [
      "Hiện popup che kín màn hình bắt người dùng ký vào bản điều khoản 50 trang mới cho vào app.",
      "Áp dụng nguyên tắc 'Just-in-Time Value-first Consent': Không xin quyền ồ ạt lúc mở app; chỉ kích hoạt hộp thoại xin quyền vào đúng thời điểm người dùng bắt đầu tìm kiếm cửa hàng gần nhất hoặc tìm ưu đãi cục bộ. Thiết kế giao diện làm nổi bật giá trị trực tiếp mà người dùng nhận được (Value proposition), cung cấp nút chọn minh bạch (Chấp nhận / Để sau) và xây dựng Trung tâm Quyền riêng tư (Privacy Center) trong Cài đặt cho phép họ bật/tắt tùy chọn minh bạch.",
      "Bí mật thu thập tọa độ GPS ngầm mà không cần hiển thị bất kỳ thông báo nào cho người dùng biết.",
      "Từ chối phát triển tính năng này vì sợ vi phạm pháp luật dẫn đến bị phạt tù."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Consent UX thông minh dựa trên kỹ thuật 'Just-in-Time': Giải thích rõ 'Tại sao tôi cần quyền này và bạn sẽ nhận được lợi ích gì' ngay tại thời điểm phát sinh nhu cầu, đi kèm giao diện quản lý quyền minh bạch. Cách tiếp cận này vừa đáp ứng 100% Nghị định 13 vừa đem lại tỷ lệ đồng thuận cao hơn nhiều so với việc bắt ép."
  },
  {
    track: 7,
    id: "Q7-16",
    level: 2,
    q: "Trong phần mềm Quản lý Kho bãi WMS, nhóm người dùng 'Chuyên viên điều phối kho lâu năm' đòi hỏi giao diện đậm đặc thông tin (High-density UI), thao tác phím tắt 100% không dùng chuột để nhập 500 phiếu xuất mỗi giờ. Trong khi đó, nhóm 'Nhân viên thời vụ mới vào' liên tục nhập sai dữ liệu vì giao diện quá phức tạp và thiếu hướng dẫn. Đứng trước hai nhóm người dùng có nhu cầu hoàn toàn đối lập, BA nên thiết kế kiến trúc trải nghiệm thế nào?",
    opts: [
      "Ép nhóm nhân viên lâu năm phải dùng chuột nhấp từng bước một giống như nhân viên mới.",
      "Thiết kế cơ chế 'Chế độ xem phân vai / Chế độ linh hoạt' (Role-based / Dual-mode Experience): Cung cấp 'Chế độ Chuyên gia' (Expert Mode) tối ưu phím tắt bàn phím toàn diện, bảng dữ liệu cô đọng; và 'Chế độ Chuẩn / Hướng dẫn' (Standard Guided Mode) có các gợi ý Wizard từng bước, kiểm tra dữ liệu theo thời gian thực (Inline validation). Đồng thời lưu tùy chọn giao diện theo hồ sơ cá nhân của từng nhân viên.",
      "Xây dựng hai phần mềm hoàn toàn riêng biệt với hai cơ sở dữ liệu không liên quan đến nhau.",
      "Sa thải toàn bộ nhân viên thời vụ và chỉ giữ lại nhân viên lâu năm."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Khi đối mặt với nhu cầu phân hóa sâu sắc giữa Novice Users và Power Users trong phần mềm B2B/Enterprise, kiến trúc giao diện đa chế độ (Dual-mode / Customizable workspaces) là lời giải hoàn hảo: Tối ưu hóa năng suất tột bậc cho chuyên gia nhưng vẫn có giàn giáo hỗ trợ (Scaffolding) cho người mới."
  },
  {
    track: 7,
    id: "Q7-17",
    level: 2,
    q: "Sau 1 năm phát triển nóng, ứng dụng Ngân hàng số bị các phòng ban (Thẻ, Bảo hiểm, Vay tiêu dùng, Đầu tư vàng, Vé máy bay) liên tục đòi đưa banner, popup quảng cáo và icon lên Màn hình chính (Home Screen). Kết quả là ứng dụng biến thành 'khu chợ rác' (Feature Bloat), thời gian người dùng tìm thấy nút 'Chuyển tiền' tăng từ 2s lên 12s, điểm CSAT giảm từ 4.6 xuống 3.2. Là Senior BA dẫn dắt sản phẩm, bạn đề xuất khung quản trị (Product Governance Framework) nào để giải cứu trải nghiệm?",
    opts: [
      "Ai có chức vụ cao nhất trong công ty thì được quyền đặt banner to nhất trên màn hình chính.",
      "Thiết lập 'Khung quản trị Màn hình chính dựa trên Dữ liệu và Giá trị cốt lõi' (Core Jobs-to-be-Done): Xác định 3 tác vụ thiết yếu chiếm 80% tần suất sử dụng của khách hàng để bảo vệ vùng hiển thị ưu tiên cố định; phân bổ các dịch vụ mở rộng theo danh mục thông minh và thuật toán gợi ý ngữ cảnh (Contextual Widget); ban hành quy chế nghiêm ngặt cấm popup chen ngang (Zero-interruptive popups) và yêu cầu mọi đề xuất đưa lên Home phải có dữ liệu chứng minh hiệu quả sau 30 ngày thử nghiệm.",
      "Xóa bỏ toàn bộ các tính năng bán bảo hiểm và cho vay ra khỏi ngân hàng.",
      "Chia màn hình chính thành 50 ô vuông nhỏ bằng nhau và phân phát đồng đều cho 50 phòng ban."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Bài toán Feature Bloat trong Super App đòi hỏi năng lực Product Governance: BA cần dựa vào lý thuyết Jobs-to-be-Done (JTBD) và dữ liệu hành vi thực tế để bảo vệ luồng tác vụ sống còn của người dùng, biến không gian màn hình chính thành tài nguyên được quản trị có nguyên tắc thay vì nhượng bộ theo quyền lực nội bộ."
  },
  {
    track: 7,
    id: "Q7-18",
    level: 2,
    q: "Một tính năng 'Trợ lý ảo gợi ý mua quà theo cung hoàng đạo' được đầu tư phát triển suốt 4 tháng. Sau 6 tháng vận hành, dữ liệu cho thấy chỉ có 0.2% người dùng mở tính năng và chi phí duy trì máy chủ AI là 200 triệu VNĐ/tháng. Giám đốc Tiếp thị kiên quyết từ chối gỡ bỏ vì 'tiếc công sức và kinh phí lớn đã đổ vào' (Hiệu ứng chi phí chìm - Sunk Cost Fallacy). Senior BA cần làm gì để đưa ra quyết định sản phẩm đúng đắn?",
    opts: [
      "Tiếp tục đổ thêm 500 triệu tiền quảng cáo để lôi kéo người dùng vào tính năng này.",
      "Xây dựng Báo cáo Phân tích Hiệu quả Sản phẩm (Product Sunset Analysis) minh bạch: Lượng hóa chi phí cơ hội bị lãng phí (Opportunity Cost), chứng minh sự sụt giảm trải nghiệm và đề xuất lộ trình 'Khai tử có kiểm soát' (Sunset Plan) hoặc tái sử dụng các module AI hữu ích vào luồng tìm kiếm lõi; giúp các bên liên quan vượt qua bẫy tâm lý chi phí chìm bằng các con số kinh tế thực tế.",
      "Bí mật xóa mã nguồn của tính năng trên máy chủ vào ban đêm rồi giả vờ bị hacker tấn công.",
      "Nghe lời Giám đốc Tiếp thị và tiếp tục duy trì tính năng vô thời hạn."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Năng lực loại bỏ tính năng thừa (Feature Sunsetting) là phẩm chất quan trọng của Senior BA/Product Manager. BA cần dùng dữ liệu khách quan để chứng minh chi phí chìm đã mất không thể lấy lại, và việc tiếp tục duy trì tính năng 'Zombie' sẽ lấy đi nguồn lực của các cơ hội kinh doanh sinh lời khác."
  },
  {
    track: 7,
    id: "Q7-19",
    level: 2,
    q: "Ban Điều hành một ứng dụng Giáo dục trực tuyến (EdTech) muốn giảm tỷ lệ hủy gói hội viên (Churn Rate) bằng cách giấu nút 'Hủy gia hạn tự động' vào sâu 6 tầng cài đặt phức tạp, đồng thời bắt người dùng phải gửi email viết tay và chờ 7 ngày duyệt. BA nên phản biện phương án này và đề xuất giải pháp 'Offboarding có trách nhiệm' như thế nào?",
    opts: [
      "Hoàn toàn tán thành và đề xuất thêm bài trắc nghiệm 50 câu hỏi trước khi cho người dùng bấm hủy.",
      "Phân tích tác động tiêu cực: Cách làm 'Roach Motel' (Dễ vào khó ra) này sẽ gây bùng nổ khiếu nại chargeback từ ngân hàng, nhận bão đánh giá 1 sao trên App Store/Google Play và vi phạm chính sách của Apple/Google dẫn đến nguy cơ bị xóa ứng dụng. Đề xuất luồng hủy minh bạch kết hợp khảo sát lý do ngắn gọn, đưa ra các ưu đãi giữ chân phù hợp (ví dụ: tạm dừng gói cước 1 tháng, giảm giá 30% cho 3 tháng tiếp theo) mà vẫn tôn trọng quyết định cuối cùng của người dùng.",
      "Khóa luôn tài khoản ngân hàng của học viên để họ không thể hủy cước.",
      "Không đưa ra ý kiến gì vì đây là chỉ đạo từ cấp trên."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Thiết kế trải nghiệm rời đi (Offboarding Experience) minh bạch là tiêu chuẩn văn minh. Cố tình dựng rào cản Dark Pattern sẽ bị Apple/Google trừng phạt gỡ app và gây thiệt hại danh tiếng khôn lường. Cung cấp tùy chọn tạm dừng (Pause subscription) hoặc gói cước linh hoạt là giải pháp giữ chân dựa trên sự thấu hiểu thay vì ép buộc."
  },
  {
    track: 7,
    id: "Q7-20",
    level: 2,
    q: "Hệ thống Bán lẻ triển khai mô hình đa kênh Omnichannel: Khách hàng mua hàng online và chọn 'Nhận hàng tại cửa hàng trong 2 giờ' (Click & Collect). Một sự cố trải nghiệm nghiêm trọng xảy ra: Khách đến cửa hàng thì nhân viên thông báo sản phẩm vừa được bán cho một khách mua trực tiếp tại quầy 10 phút trước do hệ thống cập nhật chậm. Khách hàng phẫn nộ đòi bồi thường. Là BA thiết kế giải pháp tổng thể (Service Design & System Logic), bạn xử lý vấn đề này như thế nào?",
    opts: [
      "Đổ lỗi cho nhân viên cửa hàng và yêu cầu trừ lương của nhân viên đó.",
      "Thiết kế cơ chế 'Khóa tồn kho tạm giữ' (Soft Allocation / Inventory Reservation): Ngay khi khách đặt đơn Click & Collect thành công, hệ thống trừ tồn kho khả dụng (Available-to-Promise) của cửa hàng đó lập tức trên toàn hệ thống và phát thông báo lệnh nhặt hàng (Pick-list) cho nhân viên cất vào tủ giữ hàng riêng trong vòng 15 phút. Trường hợp bất khả kháng hết hàng, hệ thống tự động quét kho chi nhánh lân cận để điều chuyển hỏa tốc hoặc tặng voucher xin lỗi tự động cho khách hàng.",
      "Khuyên công ty dẹp bỏ hoàn toàn dịch vụ Click & Collect và chỉ bán online giao bưu điện.",
      "Yêu cầu khách hàng đứng chờ ở cửa hàng 4 tiếng để nhập hàng từ nhà máy về."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Trải nghiệm Omnichannel thất bại nếu logic dữ liệu không đồng bộ với quy trình vật lý. Giải pháp cốt lõi của BA là thiết kế cơ chế 'Inventory Reservation' theo thời gian thực kết hợp quy trình Pick & Pack tại chỗ có SLA cụ thể, đi kèm kịch bản dự phòng tự động khi có biến cố tồn kho."
  }
];
