module.exports = [
  // Level 0: Nền tảng (Q6-01 -> Q6-05)
  {
    track: 6,
    id: "Q6-01",
    level: 0,
    q: "Ba trụ cột thực nghiệm (Empirical Pillars) của khung làm việc Scrum theo Scrum Guide chính thức bao gồm những yếu tố nào?",
    opts: [
      "Minh bạch (Transparency), Thanh tra (Inspection), và Thích ứng (Adaptation).",
      "Kế hoạch cố định (Fixed Plan), Quy trình chặt chẽ (Rigid Process), và Kiểm soát chi phí (Cost Control).",
      "Viết tài liệu chi tiết (Detailed Docs), Đàm phán hợp đồng (Negotiation), và Báo cáo cấp trên (Reporting).",
      "Tự động hóa hoàn toàn (Automation), Không cần họp hành (No Meetings), và Tự do tuyệt đối (Absolute Freedom)."
    ],
    ans: 0,
    exp: "Đáp án đúng là A. Scrum dựa trên thuyết thực nghiệm (Empiricism) với 3 trụ cột: Minh bạch (mọi người đều hiểu rõ hiện trạng), Thanh tra (liên tục xem xét tiến độ và sản phẩm), và Thích ứng (điều chỉnh ngay khi phát hiện sai lệch)."
  },
  {
    track: 6,
    id: "Q6-02",
    level: 0,
    q: "Trong một Scrum Team chuẩn mực, vai trò của Business Analyst (BA) được định vị như thế nào?",
    opts: [
      "BA là một vị trí quản lý đứng trên Scrum Master và Product Owner để ký duyệt kế hoạch Sprint.",
      "Scrum Guide không định nghĩa chức danh 'BA' riêng biệt; BA là thành viên nhóm phát triển (Developers) sở hữu chuyên môn phân tích nghiệp vụ, hoặc cộng tác chặt chẽ hỗ trợ Product Owner làm mịn và quản lý Backlog.",
      "BA bắt buộc phải thay thế Scrum Master điều phối các cuộc họp hàng ngày Daily Scrum.",
      "BA là người đại diện khách hàng ký hợp đồng kinh tế và quyết định mức lương thưởng của các lập trình viên."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Scrum chỉ có 3 trách nhiệm cốt lõi: Product Owner, Scrum Master và Developers. Bất kỳ ai tham gia tạo ra sản phẩm (BA, Dev, QA, UX) đều thuộc nhóm Developers, hoặc BA đóng vai trò Business/Product Specialist trợ lực đắc lực cho PO."
  },
  {
    track: 6,
    id: "Q6-03",
    level: 0,
    q: "Sự khác biệt căn bản giữa Definition of Ready (DoR) và Definition of Done (DoD) trong quy trình Agile là gì?",
    opts: [
      "DoR áp dụng cho toàn bộ dự án khi nghiệm thu; DoD chỉ áp dụng khi bắt đầu thành lập công ty.",
      "DoR là tiêu chuẩn chất lượng của một User Story trước khi được nhóm đưa vào Sprint Backlog để phát triển; DoD là tiêu chuẩn chung để xác định một Increment hay tính năng đã hoàn thiện 100%, sẵn sàng bàn giao hoặc release.",
      "DoR chỉ do Tester kiểm tra; DoD chỉ do Product Owner tự duyệt một mình mà không cần Dev.",
      "Hai thuật ngữ này hoàn toàn đồng nghĩa và có thể dùng thay thế cho nhau trong mọi biên bản họp."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. DoR (Sẵn sàng để làm) là 'cửa vào' đảm bảo Story đã đủ rõ ràng, có tiêu chí nghiệm thu và khả năng estimate. DoD (Định nghĩa hoàn thành) là 'cửa ra' đảm bảo chất lượng kỹ thuật (code review, test, tài liệu, build) để tính năng đạt chuẩn Release."
  },
  {
    track: 6,
    id: "Q6-04",
    level: 0,
    q: "Một User Story được coi là đạt tiêu chuẩn chất lượng theo bộ tiêu chí INVEST khi thỏa mãn các yếu tố nào?",
    opts: [
      "Immediate, Necessary, Validated, Extended, Structured, Timebound.",
      "Independent (Độc lập), Negotiable (Có thể thương lượng), Valuable (Có giá trị), Estimable (Ước lượng được), Small (Đủ nhỏ gọn), Testable (Kiểm thử được).",
      "Important, New, Visual, Expressive, Standard, Technical.",
      "Integrated, Networked, Verified, Encrypted, Scalable, Trackable."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. INVEST (Bill Wake) là bộ tiêu chí chuẩn mực cho User Story: Độc lập để dễ ưu tiên; Thương lượng được thay vì hợp đồng đóng băng; Mang lại giá trị cho người dùng/doanh nghiệp; Đủ rõ để ước lượng; Nhỏ gọn trong Sprint; và Có thể kiểm thử nghiệm thu được."
  },
  {
    track: 6,
    id: "Q6-05",
    level: 0,
    q: "Trong 5 sự kiện Scrum chính thức, sự kiện nào có mục tiêu cốt lõi là thanh tra chính bản thân quy trình làm việc, mối quan hệ con người và công cụ để đề xuất cải tiến cho Sprint kế tiếp?",
    opts: [
      "Sprint Planning (Lập kế hoạch Sprint).",
      "Daily Scrum (Họp đứng hàng ngày).",
      "Sprint Retrospective (Cải tiến Sprint).",
      "Sprint Review (Đánh giá và Demo sản phẩm)."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Sprint Review tập trung thanh tra sản phẩm (Product Increment) với Stakeholders. Trong khi đó, Sprint Retrospective (Họp hồi tưởng / Cải tiến) tập trung thanh tra quy trình nội bộ, con người, công cụ và văn hóa nhóm để tìm ra hành động cải tiến ngay trong Sprint tới."
  },

  // Level 1: Vận dụng (Q6-06 -> Q6-13)
  {
    track: 6,
    id: "Q6-06",
    level: 1,
    q: "Trong buổi Backlog Refinement, khi thảo luận User Story 'Tích hợp cổng thanh toán quốc tế mới', Đội Dev tuyên bố không thể estimate vì tài liệu API đối tác chưa đầy đủ và cơ chế Webhook chưa rõ ràng. Là BA của nhóm, hành động chuẩn mực nhất của bạn là gì?",
    opts: [
      "Ép đội Dev gán bừa một con số 8 Story Points để kịp chốt kế hoạch Sprint sắp tới.",
      "Đề xuất tạo một 'Spike Story' (Nghiên cứu có giới hạn thời gian/Timebox) để 1 Dev làm việc cùng BA kết nối trực tiếp với kỹ thuật cổng thanh toán, đồng thời hoãn đưa Story chính vào Sprint cho đến khi thỏa mãn DoR.",
      "Hủy bỏ hoàn toàn tính năng thanh toán quốc tế và yêu cầu khách hàng chỉ dùng tiền mặt.",
      "Tự mình viết code mẫu giả lập tích hợp rồi yêu cầu Dev copy nguyên bản mà không cần nghiên cứu thêm."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Khi thiếu hụt thông tin kỹ thuật nghiêm trọng dẫn đến không thể ước lượng (vi phạm chữ 'E' trong INVEST), giải pháp tốt nhất là tạo Spike Story (Timebox research) để giải tỏa rủi ro kỹ thuật, đảm bảo Story chính đáp ứng DoR trước khi đưa vào Sprint."
  },
  {
    track: 6,
    id: "Q6-07",
    level: 1,
    q: "Khi xây dựng User Story Map cho giai đoạn Release MVP của ứng dụng Đặt xe công nghệ, BA nên sắp xếp cấu trúc ma trận hai chiều như thế nào?",
    opts: [
      "Trục ngang sắp xếp các bảng cơ sở dữ liệu; trục dọc sắp xếp mã lỗi HTTP từ 200 đến 500.",
      "Trục ngang theo luồng hành trình người dùng (User Activities / Backbone từ Mở app -> Tìm chuyến -> Đặt xe -> Thanh toán -> Đánh giá); trục dọc thể hiện mức độ ưu tiên giảm dần chia thành các lát cắt Release (MVP, Release 2, Release 3).",
      "Trục ngang liệt kê danh sách nhân sự tham gia dự án; trục dọc liệt kê số giờ chấm công mỗi ngày.",
      "Trục ngang là các điều khoản pháp lý hợp đồng; trục dọc là biểu đồ phân bổ ngân sách tài chính."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Kỹ thuật User Story Mapping (Jeff Patton) tổ chức trục ngang là 'Backbone' (dòng thời gian hành trình trải nghiệm người dùng), và trục dọc là các tầng câu chuyện chi tiết được cắt ngang (slicing) thành các phiên bản phát hành từ MVP đến các giai đoạn tiếp theo."
  },
  {
    track: 6,
    id: "Q6-08",
    level: 1,
    q: "Một User Story 'Khách hàng đăng ký tài khoản và hoàn tất eKYC xác thực căn cước công dân' được nhóm estimate lên tới 21 Story Points vì quá phức tạp. Là BA, bạn nên áp dụng chiến lược phân tách (Story Splitting) nào hợp lý nhất?",
    opts: [
      "Tách theo phân lớp kiến trúc kỹ thuật: Story 1 viết bảng DB, Story 2 viết API Backend, Story 3 vẽ giao diện Frontend (Horizontal slicing).",
      "Tách dọc theo quy trình và độ phức tạp nghiệp vụ (Vertical slicing): Story 1 là Đăng ký tài khoản cơ bản bằng SĐT/OTP để đăng nhập được ngay; Story 2 là Xác thực eKYC luồng chuẩn (Happy path); Story 3 xử lý các ngoại lệ (OCR mờ, khuôn mặt không khớp).",
      "Giữ nguyên 21 points và kéo dài thời gian Sprint từ 2 tuần lên 8 tuần để nhóm làm cho xong.",
      "Xóa bỏ hoàn toàn khâu eKYC để Story giảm xuống còn 1 point mà không cần quan tâm đến quy định phòng chống rửa tiền."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Nguyên tắc Agile đòi hỏi phân tách lát cắt dọc (Vertical slicing) để mỗi mảnh nhỏ đều mang lại giá trị có thể chuyển giao (Deliverable value). Phân tách ngang theo tầng kỹ thuật (DB/API/FE) sẽ tạo ra các phần không độc lập và không thể demo giá trị thực cho người dùng."
  },
  {
    track: 6,
    id: "Q6-09",
    level: 1,
    q: "Product Owner muốn dành 100% dung lượng Sprint cho các tính năng thương mại mới, nhưng Tech Lead cảnh báo hệ thống đang có 'Nợ kỹ thuật' (Technical Debt) nghiêm trọng khiến thời gian tải trang tăng từ 1s lên 9s. Là BA, bạn hỗ trợ nhóm giải quyết mâu thuẫn này thế nào?",
    opts: [
      "Đứng về phía PO hoàn toàn và bác bỏ cảnh báo của Tech Lead vì nợ kỹ thuật không sinh ra doanh thu trực tiếp.",
      "Hỗ trợ Tech Lead chuyển hóa rủi ro kỹ thuật thành tác động nghiệp vụ (Ví dụ: Thời gian tải trang 9s làm tăng tỷ lệ bỏ giỏ hàng 35% và sụt giảm doanh thu), từ đó giúp PO cân đối tỷ trọng backlog (ví dụ dành 20% dung lượng mỗi Sprint cho kỹ thuật/tối ưu).",
      "Khuyên Tech Lead âm thầm tự sửa ngoài giờ mà không cần ghi nhận bất cứ thông tin nào vào Backlog.",
      "Đề xuất dừng toàn bộ hoạt động kinh doanh của công ty trong 6 tháng để viết lại toàn bộ mã nguồn từ đầu."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Vai trò cầu nối của BA là lượng hóa nợ kỹ thuật thành tác động kinh doanh (Business Impact & Customer Experience). Việc này giúp PO hiểu giá trị kinh tế của việc trả nợ kỹ thuật và đồng thuận trích tỷ lệ phù hợp (thường 15-25% capacity) để duy trì sự bền vững của sản phẩm."
  },
  {
    track: 6,
    id: "Q6-10",
    level: 1,
    q: "Tiêu chí nghiệm thu (Acceptance Criteria) viết theo định dạng Gherkin (Given-When-Then) nào dưới đây đặc tả chính xác kịch bản áp mã giảm giá khi giỏ hàng chưa đạt giá trị đơn tối thiểu?",
    opts: [
      "Khi khách bấm nút mua thì hệ thống phải chạy mượt mà không bị treo máy.",
      "Given Khách hàng có giỏ hàng trị giá 200.000 VNĐ và mã 'SALE50' yêu cầu đơn tối thiểu 300.000 VNĐ; When Khách hàng áp dụng mã 'SALE50'; Then Hệ thống từ chối áp dụng, hiển thị thông báo lỗi 'Đơn hàng cần tối thiểu 300.000 VNĐ để sử dụng mã này', và tổng tiền giữ nguyên 200.000 VNĐ.",
      "Given Khách hàng muốn mua đồ rẻ; When Khách nhập mã bất kỳ; Then Giảm giá 50% ngay lập tức bất kể giá trị đơn hàng là bao nhiêu.",
      "Then Khách hàng thấy vui mừng; When Hệ thống tính toán xong; Given Giỏ hàng đã có hàng."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Cú pháp Gherkin chuẩn: Given (Tiền điều kiện/Bối cảnh dữ liệu) -> When (Hành động người dùng/Kích hoạt) -> Then (Kết quả mong đợi quan sát được và trạng thái dữ liệu). Câu B đặc tả rõ ràng giá trị, thông điệp lỗi và trạng thái tổng tiền."
  },
  {
    track: 6,
    id: "Q6-11",
    level: 1,
    q: "Trong buổi họp Sprint Review, một Giám đốc kinh doanh cấp cao bất ngờ yêu cầu thay đổi toàn bộ luồng thanh toán và đổi màu nhận diện vì không đúng ý thích cá nhân của ông. Đội ngũ Scrum (PO, BA, Dev) nên phản hồi như thế nào?",
    opts: [
      "Ngay lập tức chấp nhận và hứa sửa xong ngay trong đêm để làm hài lòng sếp.",
      "Lắng nghe, ghi nhận ý kiến phản hồi như một đề xuất giá trị vào Product Backlog; PO và BA sẽ cùng phân tích dữ liệu hành vi người dùng, đánh giá tác động chi phí và ưu tiên nó trong các Sprint tương lai theo mục tiêu sản phẩm.",
      "Mời Giám đốc kinh doanh rời khỏi cuộc họp vì Sprint Review cấm không cho Stakeholder phát biểu ý kiến.",
      "Yêu cầu đội Dev hủy bỏ toàn bộ kết quả của Sprint vừa làm và rollback lại phiên bản cũ."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Sprint Review là cơ hội thu thập phản hồi (Feedback Loop). Nhóm không từ chối thô bạo nhưng cũng không bao giờ cam kết sửa ngay lập tức làm vỡ kế hoạch; mọi thay đổi đều phải được đưa vào Product Backlog để PO cân nhắc ưu tiên dựa trên giá trị và dữ liệu."
  },
  {
    track: 6,
    id: "Q6-12",
    level: 1,
    q: "Trong phiên Planning Poker ước lượng Story 'Đồng bộ hóa tồn kho đa sàn', một Dev Senior chấm 3 điểm, trong khi hai Dev Junior chấm 13 điểm. Là BA tham gia phiên họp, bạn cần can thiệp như thế nào?",
    opts: [
      "Lấy trung bình cộng (3 + 13 + 13) / 3 = 9.66 và làm tròn thành 10 điểm để kết thúc cuộc họp sớm.",
      "Mời hai bạn Dev có điểm số cao nhất và thấp nhất chia sẻ góc nhìn và giả định của họ; từ đó BA làm rõ các điểm mơ hồ về phạm vi hoặc logic tích hợp để cả nhóm có sự hiểu biết chung (Shared understanding) trước khi bỏ phiếu lại.",
      "Ép hai Dev Junior phải nghe theo Dev Senior vì Senior luôn có nhiều kinh nghiệm hơn.",
      "Tự ý gán Story đó thành 1 điểm và cảnh cáo nhóm không được tranh luận kéo dài."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Mục đích lớn nhất của Planning Poker không phải là con số, mà là phát hiện sự bất đồng về mặt hiểu biết yêu cầu hoặc giải pháp kỹ thuật. BA cần tận dụng sự chênh lệch điểm số để làm sáng tỏ các góc khuất nghiệp vụ, sau đó cho nhóm vote lại."
  },
  {
    track: 6,
    id: "Q6-13",
    level: 1,
    q: "Quan sát biểu đồ Sprint Burndown Chart kéo dài 10 ngày làm việc, BA nhận thấy đường 'Actual Work Remaining' đi ngang hoàn toàn suốt từ Ngày 1 đến Ngày 8, sau đó đột ngột rơi thẳng đứng về 0 vào Ngày 10. Hiện tượng này phản ánh vấn đề gì trong quy trình của nhóm?",
    opts: [
      "Nhóm đang áp dụng xuất sắc phương pháp Agile và tiến độ hoàn toàn bình thường.",
      "Nhóm đang làm việc theo kiểu 'Mini-Waterfall trong Sprint': Các User Story được phát triển song song nhưng để dồn việc kiểm thử và nghiệm thu vào ngày cuối cùng; các Story không được phân rã đủ nhỏ để hoàn thành dứt điểm từng cái (Lack of incremental completion).",
      "Đội ngũ Tester đã nghỉ việc tập thể trong suốt 8 ngày đầu tiên.",
      "Biểu đồ bị hỏng hiển thị do máy chủ theo dõi dự án mất kết nối mạng Internet."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Hiện tượng 'vách đá dựng đứng' (Cliff drop) trên Burndown Chart là dấu hiệu kinh điển của Mini-Waterfall: Dev ôm đồm toàn bộ Story đến cuối kỳ mới bàn giao cho QA test dồn cục, vi phạm nguyên tắc 'Dừng bắt đầu, bắt đầu hoàn thành' (Stop starting, start finishing)."
  },

  // Level 2: Nâng cao (Q6-14 -> Q6-20)
  {
    track: 6,
    id: "Q6-14",
    level: 2,
    q: "Hệ thống Thanh toán trực tuyến đối mặt thời hạn pháp lý (Fixed Deadline) bắt buộc tuân thủ Thông tư Ngân hàng Nhà nước vào ngày 01/01 (nếu trễ sẽ bị đình chỉ giấy phép). Còn 2 Sprint cuối, nhưng tổng Story Points ước tính vượt 40% Velocity trung bình của nhóm. Phía Kinh doanh vẫn kiên quyết đòi giữ nguyên các tính năng Loyalty và Quà tặng kèm theo. Là BA cố vấn cho Product Owner, giải pháp tối ưu nhất là gì?",
    opts: [
      "Đề xuất tuyển thêm gấp đôi lập trình viên ngay trong Sprint tới để kịp hoàn thành toàn bộ khối lượng công việc đúng hạn.",
      "Áp dụng nguyên lý 'Tam giác linh hoạt Agile' (Cố định Thời gian và Chi phí -> Điều chỉnh Phạm vi): Tách Backlog thành 2 nhóm rõ rệt: Nhóm 1 (Pháp lý bắt buộc - Must have) phải dồn 100% nguồn lực hoàn thiện dứt điểm; Nhóm 2 (Loyalty & Khuyến mãi - Nice to have) hoãn sang quý sau. Sử dụng bảng phân tích rủi ro pháp lý để thuyết phục các bên liên quan.",
      "Yêu cầu nhóm Dev cắt giảm toàn bộ khâu viết Unit Test và kiểm thử bảo mật để kịp bàn giao tất cả tính năng vào ngày 01/01.",
      "Gửi email xin lỗi cơ quan quản lý nhà nước xin gia hạn thêm 1 năm với lý do nhóm đang áp dụng quy trình Scrum."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Trong Agile, khi Thời hạn (Time) và Nguồn lực (Cost/Team) cố định thì Phạm vi (Scope) là biến số duy nhất có thể điều chỉnh. BA cần cùng PO phân loại MoSCoW, bảo vệ tuyệt đối các yêu cầu tuân thủ sống còn (Must-have) và hoãn các tính năng thứ yếu (Could/Won't have)."
  },
  {
    track: 6,
    id: "Q6-15",
    level: 2,
    q: "Trong mô hình Scrum quy mô lớn (Scaled Agile với 4 Scrum Teams), Team Checkout phụ thuộc vào API tính phí vận chuyển từ Team Logistics. Giữa Sprint, Team Logistics bất ngờ thông báo họ phải đổi cấu trúc Response JSON để hỗ trợ giao hàng hỏa tốc, khiến Sprint Goal của Team Checkout có nguy cơ đổ vỡ. Là BA của Team Checkout, bạn xử lý tình huống phụ thuộc này như thế nào?",
    opts: [
      "Chỉ trích Team Logistics trên kênh chat chung toàn công ty và yêu cầu hủy bỏ Sprint của họ.",
      "Phối hợp ngay với BA/Tech Lead của Team Logistics để thống nhất áp dụng chiến lược 'API Versioning' (Duy trì v1 cho Checkout dùng tiếp trong Sprint này, triển khai v2 song song); đồng thời tạo Mock API dữ liệu chuẩn v1 để Team Checkout hoàn thành Sprint Goal độc lập.",
      "Dừng toàn bộ công việc của Team Checkout và cho cả đội ngồi chờ Team Logistics làm xong v2 rồi mới tiếp tục.",
      "Yêu cầu Team Checkout tự viết lại hệ thống định tuyến xe vận chuyển mà không cần qua Team Logistics nữa."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Xử lý phụ thuộc đa nhóm (Cross-team dependency) đòi hỏi nguyên tắc giảm thiểu gắn kết chặt chẽ (Decoupling): Áp dụng Versioning giúp bên phụ thuộc không bị phá vỡ (Breaking change), kết hợp Mock Server cho phép nhóm tiếp tục phát triển và kiểm thử mà không bị chặn (Blocked)."
  },
  {
    track: 6,
    id: "Q6-16",
    level: 2,
    q: "Vào ngày thứ 4 của Sprint 2 tuần, Giám đốc Kinh doanh mang về một khách hàng Doanh nghiệp VIP cam kết ký hợp đồng 5 tỷ VNĐ với điều kiện phải có tính năng 'Xuất hóa đơn điện tử đặc thù' vào cuối tuần này. PO dao động và định nhét ngay 3 User Story này vào Sprint đang chạy. Đánh giá chuyên môn của BA và khuyến nghị hành động chuẩn mực là gì?",
    opts: [
      "Đồng ý ngay lập tức và ép đội Dev làm thêm giờ xuyên đêm để kiếm hợp đồng cho công ty.",
      "Phân tích tác động (Impact Analysis): Việc đưa Story mới vào sẽ làm vỡ Sprint Goal hiện tại, gây quá tải và nguy cơ lỗi dây chuyền cho các tính năng đang làm dở. Đề xuất PO hai kịch bản: Kịch bản 1 là trao đổi với Dev Team để tráo đổi Story tương đương (bỏ bớt tính năng chưa bắt đầu có điểm tương đương); Kịch bản 2 là nếu bắt buộc 100% phải thay đổi toàn diện, PO phải tuyên bố hủy bỏ Sprint (Sprint Cancellation) theo đúng Scrum Guide để tái lập kế hoạch chính thức.",
      "Âm thầm xóa bỏ các Story của các khách hàng khác trên Jira mà không báo cáo cho Scrum Master.",
      "Khuyên PO từ chối thẳng thừng đuổi khách hàng VIP đi vì tôn chỉ của Scrum là cấm thay đổi kế hoạch."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Theo Scrum Guide, không được phép đưa ra các thay đổi làm nguy hại đến Sprint Goal. Tuy nhiên Scrum tôn trọng giá trị kinh doanh. BA cần hỗ trợ PO thấy rõ cái giá phải trả: thương lượng tráo đổi phạm vi (Scope negotiation) hoặc nếu thay đổi mang tính đảo lộn mục tiêu gốc thì phải chính thức Abort/Cancel Sprint để quy hoạch lại bài bản."
  },
  {
    track: 6,
    id: "Q6-17",
    level: 2,
    q: "Hệ thống Đặt vé máy bay gặp sự cố Production nghiêm trọng: Tỷ lệ thanh toán thất bại tăng vọt lên 40% do lỗi timeout từ cổng thanh toán đối tác. Nhóm Scrum đang trong Sprint và đã cam kết 100% công suất. Đội vận hành cần các Senior Dev nhảy vào khắc phục khẩn cấp. BA nên phối hợp quản lý Backlog và điều phối công việc thế nào?",
    opts: [
      "Từ chối hỗ trợ vận hành và yêu cầu họ đợi sau khi Sprint kết thúc sau 7 ngày nữa mới được xử lý.",
      "Hỗ trợ PO tạo 'Production Hotfix / Emergency Bug' đưa vào Sprint Backlog; cùng Tech Lead đánh giá số Story Points cần thiết để khắc phục, từ đó chủ động chọn và rút bớt các User Story chưa bắt đầu có độ ưu tiên thấp nhất ra khỏi Sprint Backlog trả về Product Backlog nhằm bảo vệ tính khả thi của nhóm.",
      "Tự ý nhảy vào sửa code trên Production mà không cần qua quy trình kiểm thử.",
      "Đóng cổng thanh toán vĩnh viễn và chỉ chấp nhận chuyển khoản ngân hàng thủ công qua chụp ảnh màn hình."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Sự cố Production khẩn cấp (P0/P1) là thực tế không thể tránh khỏi. Nguyên tắc cân bằng của Scrum là khi phát sinh việc khẩn cấp ngoài kế hoạch chiếm dụng công suất, nhóm phải thương lượng với PO để loại bỏ một khối lượng công việc tương đương ra khỏi Sprint hiện tại để tránh nợ dồn ứ và kiệt sức."
  },
  {
    track: 6,
    id: "Q6-18",
    level: 2,
    q: "Đội Dev áp dụng Definition of Ready (DoR) cực kỳ khắt khe: Từ chối nhận mọi Story nếu chưa có thiết kế Figma hoàn chỉnh 100% đến từng icon và tài liệu API chi tiết từ đối tác thứ 3. Tuy nhiên, đối tác đang chậm tiến độ cung cấp tài liệu còn đối thủ chuẩn bị ra mắt tính năng cạnh tranh. BA nên làm gì để giải quyết thế bế tắc này mà không vi phạm nguyên tắc chất lượng?",
    opts: [
      "Bãi bỏ hoàn toàn DoR và bắt Dev nhận các tài liệu ý tưởng sơ sài viết trong tin nhắn Zalo.",
      "Đàm phán với nhóm để áp dụng cơ chế 'Dual-track Agile' hoặc kỹ thuật phân tách: Tách User Story thành 2 phần: Phần 1 phát triển luồng trải nghiệm người dùng với Wireframe cơ bản và Mock Server API nội bộ; Phần 2 hoàn thiện tích hợp sâu khi đối tác cung cấp tài liệu chính thức. Đồng thời cùng nhóm tinh chỉnh DoR theo hướng thực tế, đo lường theo rủi ro thay vì hình thức máy móc.",
      "Yêu cầu Designer làm việc liên tục 48 tiếng không ngủ để vẽ xong toàn bộ các màn hình.",
      "Nộp đơn khiếu nại lên Ban Giám đốc yêu cầu kỷ luật toàn bộ đội lập trình vì tội cứng nhắc."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. DoR sinh ra để phục vụ nhóm chứ không phải trở thành rào cản quan liêu ngăn chặn tính linh hoạt. BA cần giúp nhóm áp dụng tư duy Dual-track hoặc tách luồng phát triển giao diện/Mock logic độc lập, giúp nhóm vẫn tiến lên mà vẫn kiểm soát được các rủi ro chưa chắc chắn."
  },
  {
    track: 6,
    id: "Q6-19",
    level: 2,
    q: "Trong dự án Chuyển đổi hệ thống Quản lý kho cũ (Legacy Monolith) sang kiến trúc Microservices mới theo mô hình Strangler Fig Pattern, Đội Nghiệp vụ Kho yêu cầu hệ thống cũ và mới phải chạy song song (Dual-run) và đối soát khớp 100% từng bút toán xuất nhập kho theo thời gian thực. Tuy nhiên, việc đồng bộ hai chiều khiến độ trễ quét mã vạch tăng gấp 3 lần, công nhân kho phản đối dữ dội vì trễ giờ xuất xe. BA nên giải quyết bài toán mâu thuẫn giữa tính toàn vẹn nghiệp vụ và hiệu năng vận hành này như thế nào?",
    opts: [
      "Bỏ qua hoàn toàn việc đối soát dữ liệu và chuyển đổi 100% sang hệ thống mới ngay lập tức không cần kiểm tra (Big Bang).",
      "Đề xuất kiến trúc giải pháp chuyển đổi: Tách việc đối soát khớp dữ liệu sang cơ chế Bất đồng bộ (Asynchronous Reconciliation / Batch job cuối ngày hoặc theo giờ) thay vì đồng bộ thời gian thực trong luồng quét mã vạch; tại luồng quét mã vạch trực tiếp của công nhân kho, chỉ áp dụng kiểm tra idempotency và ghi nhận sự kiện vào hàng đợi (Message Queue) để bảo toàn trải nghiệm tốc độ dưới 0.5s.",
      "Bắt buộc công nhân kho phải làm quen với độ trễ và tăng thời gian ca làm việc của công nhân thêm 4 tiếng mỗi ngày.",
      "Tắt hoàn toàn hệ thống Microservices mới và quay trở lại dùng vĩnh viễn hệ thống cũ 20 năm tuổi."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Đây là bài toán kinh điển về đánh đổi giữa Performance (hiệu năng vận hành thực tế của công nhân kho) và Eventual Consistency (tính nhất quán sau cùng của kế toán kho). Tách khâu đối soát nặng nề sang xử lý bất đồng bộ (Async background job) vừa bảo vệ SLA tốc độ của công nhân vừa bảo toàn yêu cầu đối soát số liệu kế toán."
  },
  {
    track: 6,
    id: "Q6-20",
    level: 2,
    q: "Tổ chức đang chuyển đổi số từ mô hình Thác nước (Waterfall) sang Scrum. Giám đốc Dự án (PM truyền thống) vẫn đòi hỏi BA phải hoàn thiện bản đặc tả SRS đóng băng 150 trang có chữ ký phê duyệt của 5 Trưởng phòng trước khi cho phép bắt đầu Sprint 1, khiến dự án đình trệ 2 tháng. Là Senior BA dẫn dắt chuyên môn, bạn nên đưa ra chiến lược gì để dung hòa và thúc đẩy chuyển đổi thành công?",
    opts: [
      "Công khai tẩy chay PM và từ chối tham gia tất cả các cuộc họp do PM triệu tập.",
      "Đề xuất mô hình chuyển tiếp 'Living Documentation' (Tài liệu sống): Thay vì viết tài liệu chi tiết cho toàn bộ 150 trang tính năng của cả năm, BA xây dựng khung tài liệu kiến trúc tổng thể cấp cao (High-level Architecture & Core Scope) để lấy chữ ký khung; sau đó các đặc tả chi tiết được làm mịn dần (Progressive Elaboration) theo dạng User Stories & Acceptance Criteria theo từng đợt Release 2 tháng một lần, chứng minh hiệu quả bằng phần mềm chạy được thực tế (Working Software).",
      "Bí mật thuê một công ty bên ngoài viết hộ tài liệu SRS giả để nộp cho xong thủ tục hành chính.",
      "Chấp nhận chờ đợi viết xong 150 trang và hủy bỏ hoàn toàn ý định chuyển sang Scrum."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Chuyển đổi tổ chức không thể diễn ra kiểu cực đoan. Senior BA cần dùng chiến lược tài liệu hóa thích ứng (Progressive Elaboration & Living Documentation): Ký duyệt khung định hướng lớn để đáp ứng nhu cầu quản trị rủi ro của ban lãnh đạo, trong khi chi tiết hóa linh hoạt theo nhịp Sprint để giữ vững tốc độ phát triển của nhóm."
  }
];
