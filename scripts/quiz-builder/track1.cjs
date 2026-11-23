module.exports = [
  // Level 0: Nền tảng (Q1-01 -> Q1-05)
  {
    track: 1,
    id: "Q1-01",
    level: 0,
    q: "Theo BABOK v3, mục tiêu cốt lõi của hoạt động Khai thác Yêu cầu (Elicitation) là gì?",
    opts: [
      "Chép lại nguyên văn tất cả lời nói của khách hàng vào biên bản cuộc họp dự án.",
      "Khơi gợi, khám phá và làm sáng tỏ những nhu cầu thực tế tiềm ẩn của các bên liên quan, thay vì chỉ đơn thuần thu thập các mong muốn bề nổi.",
      "Yêu cầu các bên liên quan tự viết tài liệu nghiệp vụ chi tiết rồi gửi cho đội phát triển phần mềm.",
      "Thuyết phục khách hàng chấp nhận các tính năng có sẵn trong thư viện mã nguồn của công ty."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Elicitation không phải là 'thu thập thụ động' (Gathering) mà là quá trình chủ động tương tác, khơi gợi (Draw out) để khám phá ra nhu cầu chưa được nói ra hoặc chưa rõ ràng của stakeholder. Phương án A là ghi chép thụ động, C đẩy việc cho khách, D mang tính áp đặt."
  },
  {
    track: 1,
    id: "Q1-02",
    level: 0,
    q: "Trong kỹ thuật Phỏng vấn (Interviewing), khi nào BA nên ưu tiên sử dụng 'Câu hỏi mở' (Open-ended Questions)?",
    opts: [
      "Khi cần xác nhận dứt khoát một mốc thời gian hoặc một giá trị dữ liệu cụ thể (Có/Không).",
      "Ở giai đoạn đầu buổi phỏng vấn để khuyến khích stakeholder chia sẻ tự do về bối cảnh, quy trình hiện tại và những nỗi đau nghiệp vụ.",
      "Khi cần chốt lại biên bản cuộc họp để kết thúc buổi phỏng vấn nhanh chóng.",
      "Khi muốn kiểm tra kiến thức kỹ thuật của lập trình viên trong đội dự án."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Câu hỏi mở (như 'Anh/chị thường xử lý đơn hàng bị lỗi như thế nào?') kích thích người được phỏng vấn chia sẻ sâu về bối cảnh và cảm xúc. Câu hỏi đóng (A, C) phù hợp để xác nhận chi tiết hoặc chốt phương án ở cuối buổi."
  },
  {
    track: 1,
    id: "Q1-03",
    level: 0,
    q: "Vai trò trọng tâm của BA khi điều phối một phiên Hội thảo Yêu cầu (Requirements Workshop / JAD Session) là gì?",
    opts: [
      "Là người đưa ra mọi quyết định nghiệp vụ thay cho các bên liên quan khi họ tranh cãi.",
      "Đóng vai trò người điều phối trung lập (Facilitator), giữ đúng mục tiêu chương trình, khuyến khích mọi người đóng góp và ghi nhận các đồng thuận cũng như bất đồng.",
      "Chỉ ngồi ghi chép biên bản và không được can thiệp vào tiến trình thảo luận của các phòng ban.",
      "Bảo vệ lập trường kỹ thuật của đội nhà và từ chối các yêu cầu phức tạp từ phía người dùng."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Vai trò Facilitator đòi hỏi tính trung lập, hướng dẫn tiến trình để các bên tự thảo luận và đạt đồng thuận, không thiên vị hay tự quyết định thay stakeholder (A, D)."
  },
  {
    track: 1,
    id: "Q1-04",
    level: 0,
    q: "Kỹ thuật 'Quan sát thụ động' (Passive / Invisible Observation hay Fly-on-the-wall) khác với 'Quan sát chủ động' (Active Observation) ở điểm nào?",
    opts: [
      "Quan sát thụ động chỉ theo dõi qua camera an ninh mà không đến hiện trường.",
      "Trong quan sát thụ động, BA theo dõi quy trình làm việc tự nhiên mà không ngắt lời hay đặt câu hỏi trong lúc người dùng thao tác; các thắc mắc được gom lại hỏi sau khi quan sát xong.",
      "Quan sát thụ động bắt buộc người dùng phải giải thích từng thao tác nhấp chuột ngay khi họ đang làm việc.",
      "Quan sát thụ động chỉ áp dụng cho lập trình viên khi viết code, không dùng cho người dùng nghiệp vụ."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Quan sát thụ động giúp BA nhìn thấy nhịp độ làm việc thực tế không bị can thiệp. Quan sát chủ động thì vừa xem vừa hỏi, dễ làm gián đoạn công việc nếu nhân viên đang thao tác ca làm việc gấp."
  },
  {
    track: 1,
    id: "Q1-05",
    level: 0,
    q: "Khi tiến hành Kỹ thuật Phân tích Tài liệu (Document Analysis) trong dự án nâng cấp hệ thống, nguồn tài liệu nào sau đây mang lại giá trị cao nhất về quy tắc nghiệp vụ thực tế?",
    opts: [
      "Bài viết quảng cáo của phòng Marketing trên mạng xã hội về dịch vụ của công ty.",
      "Quy chế hoạt động, sổ tay vận hành hiện hành, tài liệu đặc tả hệ thống cũ kèm các báo cáo kiểm toán nghiệp vụ gần nhất.",
      "Sách giáo khoa lý thuyết quản trị kinh doanh đại cương.",
      "Hợp đồng lao động của các nhân viên đang làm việc tại phòng ban mục tiêu."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Tài liệu vận hành, đặc tả cũ và báo cáo kiểm toán phản ánh chính xác cấu trúc quy tắc, các trường hợp lỗi thường gặp và quy trình kinh doanh thực tế cần được kế thừa hoặc cải tiến."
  },

  // Level 1: Vận dụng (Q1-06 -> Q1-13)
  {
    track: 1,
    id: "Q1-06",
    level: 1,
    q: "Trong buổi phỏng vấn quy trình bồi thường bảo hiểm, bác sĩ giám định liên tục yêu cầu: 'Tôi muốn một nút bấm màu tím thật to ở góc phải màn hình để phê duyệt nhanh'. Kỹ thuật phản hồi khơi gợi nào chuẩn xác nhất?",
    opts: [
      "Ghi nhận ngay vào tài liệu: 'Hệ thống phải có nút bấm màu tím kích thước 100x50px ở góc phải'.",
      "Từ chối thẳng thừng vì cho rằng bác sĩ không có chuyên môn về thiết kế giao diện người dùng (UI/UX).",
      "Hỏi đào sâu: 'Bác sĩ cần những thông tin quan trọng nào hiển thị trước mắt trước khi ra quyết định phê duyệt, và điều gì khiến quy trình hiện tại mất nhiều thời gian nhất?'.",
      "Đổi màu toàn bộ giao diện sang màu tím để làm vừa lòng bác sĩ giám định."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Khách hàng thường dùng ngôn ngữ giải pháp giao diện để diễn đạt nhu cầu về 'sự thuận tiện và tốc độ'. BA cần khơi gợi thông tin quyết định đằng sau nút bấm đó thay vì chấp nhận giải pháp bề nổi (A) hay đối đầu (B)."
  },
  {
    track: 1,
    id: "Q1-07",
    level: 1,
    q: "Khi phỏng vấn Đội trưởng điều phối kho về cách phân bổ hàng lên giá kệ, người này trả lời: 'Quy trình ở đây đơn giản lắm, chúng tôi xếp hàng hoàn toàn theo cảm tính và thói quen lâu năm'. BA nên chọn kỹ thuật nào tiếp theo để làm rõ logic ngầm này?",
    opts: [
      "Tin tưởng lời nói của Đội trưởng và ghi vào đặc tả: 'Việc xếp hàng do nhân viên tự chọn vị trí ngẫu nhiên'.",
      "Kết hợp Quan sát thực địa (Observation) và Phân tích dữ liệu lịch sử xuất nhập (Data Analysis) để tìm ra các quy luật ngầm (như hàng nặng để tầng dưới, hàng bán chạy để gần cửa).",
      "Yêu cầu Đội trưởng kho phải học một khóa đào tạo về quản lý kho hàng chuẩn quốc tế rồi mới phỏng vấn tiếp.",
      "Bỏ qua phân hệ quản lý vị trí giá kệ và chuyển sang làm phân hệ báo cáo tài chính."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Kiến thức ngầm (Tacit Knowledge) của người có kinh nghiệm thường khó diễn đạt bằng lời. Kết hợp quan sát hành vi thực tế và phân tích dữ liệu lịch sử giúp BA mô hình hóa được các thuật toán phân bổ giá kệ khoa học."
  },
  {
    track: 1,
    id: "Q1-08",
    level: 1,
    q: "Trong Workshop khai thác yêu cầu phân hệ phê duyệt tín dụng, Giám đốc Kinh doanh và Giám đốc Quản trị Rủi ro tranh cãi nảy lửa và không thể thống nhất về hạn mức cho vay tự động không cần thẩm định. Là Facilitator, BA nên làm gì?",
    opts: [
      "Bỏ phiếu biểu quyết giữa tất cả các thành viên tham gia trong phòng họp để lấy số đông.",
      "Tự mình quyết định một con số hạn mức trung bình cộng giữa hai bên để tiếp tục cuộc họp.",
      "Ghi nhận hai quan điểm vào danh sách 'Các vấn đề mở (Open Issues)', làm rõ mục tiêu kinh doanh chung (Tăng trưởng tín dụng có kiểm soát) và xin ý kiến chỉ đạo từ Sponsor/Hội đồng tín dụng sau buổi họp.",
      "Hủy bỏ phân hệ cho vay tự động và giữ nguyên quy trình thẩm định hồ sơ giấy."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Facilitator không tự quyết định (B) hay dùng số đông ép buộc (A) trong các quyết định chính sách rủi ro. Việc ghi vào Open Issues và leo thang lên người có thẩm quyền phê duyệt chiến lược (Sponsor) là chuẩn mực quản trị."
  },
  {
    track: 1,
    id: "Q1-09",
    level: 1,
    q: "BA cần khảo sát ý kiến của 2.000 tài xế giao hàng công nghệ về ứng dụng điều hướng mới. Để tỷ lệ hoàn thành khảo sát (Response Rate) cao và dữ liệu có chất lượng, tiêu chí thiết kế bảng hỏi nào là phù hợp nhất?",
    opts: [
      "Tạo bảng hỏi 50 câu tự luận chuyên sâu để tài xế có cơ hội viết cảm nghĩ dài dòng.",
      "Thiết kế bảng hỏi ngắn gọn từ 7–10 câu trắc nghiệm đa lựa chọn, tối ưu hóa giao diện di động, dùng từ ngữ bình dân dễ hiểu và có phần thưởng khuyến khích nhỏ.",
      "Gửi bảng câu hỏi qua thư bưu điện đến địa chỉ thường trú của từng tài xế.",
      "Chỉ phỏng vấn 1 tài xế quen biết rồi suy diễn cho toàn bộ 2.000 tài xế còn lại."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Đối tượng tài xế làm việc di động ngoài đường cần bảng khảo sát súc tích, dễ bấm trên smartphone, không tốn thời gian đọc hiểu văn bản học thuật."
  },
  {
    track: 1,
    id: "Q1-10",
    level: 1,
    q: "Khi đọc quy chế nội bộ, tài liệu ghi rõ: 'Mọi đề xuất chi tiêu trên 10 triệu phải có chữ ký của 3 Giám đốc khối'. Nhưng khi phỏng vấn thực tế, các nhân viên đều nói: 'Chúng tôi chỉ nhắn tin Zalo cho Phó Tổng Giám đốc duyệt là thủ quỹ chi tiền'. BA nên ghi nhận phát hiện này ra sao?",
    opts: [
      "Chỉ ghi nhận quy trình nhắn tin Zalo vào SRS vì đó là những gì đang diễn ra trong thực tế.",
      "Chỉ ghi nhận quy chế giấy vì đó là văn bản pháp lý chính thống của công ty.",
      "Mô hình hóa sự sai lệch giữa Quy trình trên giấy (De jure) và Quy trình thực tế (De facto), phân tích rủi ro kiểm soát nội bộ và thảo luận với Ban Kiểm soát cùng Sponsor để thống nhất quy trình chuẩn To-Be.",
      "Báo cáo thanh tra công ty để xử lý kỷ luật toàn bộ nhân viên và thủ quỹ."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Nhiệm vụ của BA là nhận diện khoảng cách giữa quy chế và thực tiễn để chuẩn hóa. Làm theo Zalo (A) gây rủi ro kiểm toán, rập khuôn theo giấy (B) sẽ tạo ra phần mềm bị tẩy chay vì quá rườm rà."
  },
  {
    track: 1,
    id: "Q1-11",
    level: 1,
    q: "Khi nào BA nên ưu tiên tổ chức nhóm tập trung (Focus Group) thay vì các cuộc phỏng vấn cá nhân 1-1 trong dự án phát triển sản phẩm Mobile Banking cho thế hệ Gen Z?",
    opts: [
      "Khi cần thu thập các dữ liệu tài chính tuyệt mật của từng cá nhân cụ thể.",
      "Khi muốn kích thích sự tương tác xã hội, khơi gợi tranh luận đa chiều và khám phá các phản ứng cảm xúc tập thể đối với ý tưởng sản phẩm mới.",
      "Khi người tham gia có tính cách rụt rè và rất sợ nói trước đám đông.",
      "Khi cần giải quyết một bất đồng cá nhân giữa hai chuyên viên kế toán nội bộ."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Focus Group tận dụng động lực nhóm (Group Dynamics) để kích thích sự sáng tạo và phản ứng cộng hưởng giữa các đối tượng cùng phân khúc khách hàng (như giới trẻ Gen Z)."
  },
  {
    track: 1,
    id: "Q1-12",
    level: 1,
    q: "Trong giai đoạn đầu khai thác yêu cầu về một quy trình điều phối xe container phức tạp, BA nên sử dụng loại Prototype nào để đạt hiệu quả giao tiếp cao nhất với chi phí thấp nhất?",
    opts: [
      "Xây dựng một bản phần mềm chạy thật hoàn chỉnh có kết nối cơ sở dữ liệu production.",
      "Bản phác thảo trên giấy hoặc Wireframe mức độ chi tiết thấp (Low-Fidelity Mockup) tập trung vào luồng thông tin và cấu trúc dữ liệu chính thay vì tiểu tiết màu sắc.",
      "Mô hình đồ họa 3D động có âm thanh và hiệu ứng chuyển cảnh như game.",
      "Không dùng bất kỳ hình ảnh nào, chỉ đọc văn bản thuần túy cho người nghe."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Low-Fidelity Prototype cho phép thử nghiệm luồng nghiệp vụ nhanh chóng, dễ chỉnh sửa ngay trên giấy/bảng trắng mà không làm stakeholder bị phân tâm vào màu sắc hoặc font chữ."
  },
  {
    track: 1,
    id: "Q1-13",
    level: 1,
    q: "Khi tiến hành kỹ thuật Phân tích Giao diện (Interface Analysis) giữa Cổng dịch vụ công trực tuyến và Cơ sở dữ liệu Quốc gia về Dân cư, BA cần làm rõ những nội dung trọng tâm nào?",
    opts: [
      "Màu sắc nút bấm và font chữ hiển thị trên cả hai hệ thống.",
      "Ai là người sở hữu giao diện, phương thức truyền thông điệp (REST/SOAP/MQ), định dạng dữ liệu, tần suất gửi, cơ chế xác thực và SLA phản hồi khi có sự cố.",
      "Mức lương của các lập trình viên bảo trì cổng kết nối ở hai bên.",
      "Cấu hình phần cứng chi tiết của máy chủ vật lý đặt ở trung tâm dữ liệu đối tác."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Interface Analysis tập trung vào ranh giới tích hợp: thông số kỹ thuật hợp đồng giao tiếp (Contract), định dạng gói tin, bảo mật, thời gian chờ (Timeout) và cơ chế xử lý lỗi kết nối."
  },

  // Level 2: Nâng cao (Q1-14 -> Q1-20)
  {
    track: 1,
    id: "Q1-14",
    level: 2,
    q: "Hệ thống IoT quan trắc môi trường nhà máy: Kỹ sư an toàn yêu cầu 'Cảnh báo nồng độ khí độc rò rỉ phải kích hoạt còi báo động trong vòng 0.5 giây'. Tuy nhiên, hạ tầng viễn thông tại vùng sâu chỉ đảm bảo kết nối mạng ngắt quãng và có độ trễ truyền dữ liệu lên Cloud từ 5-15 giây. BA cần khai thác và đề xuất giải pháp kiến trúc nào?",
    opts: [
      "Bỏ qua yêu cầu 0.5 giây của kỹ sư an toàn vì bất khả thi về mặt đường truyền Internet.",
      "Khai thác giải pháp xử lý phân tán tại biên (Edge Computing): Cài đặt cảm biến IoT nối trực tiếp với bộ điều khiển PLC/Edge Gateway tại chỗ để kích hoạt còi báo động vật lý ngay lập tức (<0.2 giây) mà không cần chờ mạng; dữ liệu được đồng bộ lên Cloud sau khi có kết nối.",
      "Yêu cầu nhà máy phải dời về trung tâm thành phố để có mạng cáp quang tốc độ cao.",
      "Chuyển toàn bộ việc giám sát khí độc sang hình thức cử người đi ngửi thủ công định kỳ."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Ràng buộc an toàn tính mạng đòi hỏi phản hồi tức thì, trong khi ràng buộc viễn thông là độ trễ Cloud. BA khai thác phương án kiến trúc Edge Computing để thỏa mãn cả yêu cầu an toàn tại chỗ và quản lý tập trung từ xa."
  },
  {
    track: 1,
    id: "Q1-15",
    level: 2,
    q: "Trong dự án WES (Warehouse Execution System), ba ca trưởng kho đưa ra 3 quy tắc điều phối cổng xuất hàng (Outbound Dock Allocation) trái ngược nhau: Ca sáng muốn ưu tiên theo loại xe tải, Ca chiều muốn ưu tiên theo trọng lượng pallet, Ca đêm muốn ưu tiên theo thời hạn xuất bến. Không ai chịu nhượng bộ. Chiến lược xử lý của Lead BA là gì?",
    opts: [
      "Chọn quy tắc của Ca trưởng có thâm niên công tác lâu năm nhất tại nhà máy.",
      "Lập trình 3 phần mềm riêng biệt cho 3 ca làm việc khác nhau.",
      "Khai thác sâu mục tiêu cốt lõi của từng ca, phát hiện bản chất lưu lượng hàng hóa thay đổi theo khung giờ; từ đó đặc tả công cụ cấu hình quy tắc động (Dynamic Rule Engine) cho phép tự động chuyển đổi tiêu chí ưu tiên theo khung giờ hoạt động hoặc kịch bản vận hành.",
      "Từ chối làm tính năng điều phối tự động và để các ca trưởng tiếp tục gọi điện điều xe thủ công."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Bất đồng thường bắt nguồn từ bối cảnh làm việc đặc thù của từng ca (ca sáng xe to, ca đêm gom hàng gấp). Xây dựng Dynamic Rule Engine thay vì quy tắc cứng (Hard-coded) biến mâu thuẫn thành tính năng linh hoạt vượt trội."
  },
  {
    track: 1,
    id: "Q1-16",
    level: 2,
    q: "Một ứng dụng thanh toán xuyên biên giới phục vụ khách du lịch: Quy định pháp lý sở tại bắt buộc phải thu thập định danh sinh trắc học khuôn mặt và lưu trữ tối thiểu 5 năm để phục vụ an ninh quốc gia. Tuy nhiên, đạo luật GDPR của Liên minh Châu Âu (nơi nhiều du khách sinh sống) nghiêm cấm lưu trữ sinh trắc học nếu không có sự đồng thuận rõ ràng và cho phép quyền được lãng quên (Right to be Forgotten). BA xử lý thế nào?",
    opts: [
      "Chỉ tuân thủ luật Việt Nam và phớt lờ hoàn toàn đạo luật GDPR của châu Âu.",
      "Từ chối phục vụ toàn bộ khách hàng đến từ Liên minh Châu Âu.",
      "Làm việc với Chuyên gia Pháp lý của cả hai khu vực để thiết kế luồng khai thác yêu cầu: Thực hiện xác thực sinh trắc học tại chỗ (Local matching) và lưu mã băm mã hóa một chiều (One-way hash) tại máy chủ nội địa đáp ứng luật sở tại, đồng thời hiển thị điều khoản đồng thuận minh bạch chuẩn GDPR và cơ chế ẩn danh hóa dữ liệu cá nhân.",
      "Không lưu bất kỳ thông tin nào và báo cáo sai sự thật cho cơ quan an ninh."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Xung đột luật pháp quốc tế là bài toán phức tạp nhất trong FinTech. BA phải kết nối pháp chế để thiết kế giải pháp kỹ thuật bảo mật (Data Privacy by Design) đảm bảo tuân thủ song phương."
  },
  {
    track: 1,
    id: "Q1-17",
    level: 2,
    q: "Dự án xây dựng mô hình Phát hiện Gian lận (Fraud Detection) trong giao dịch thẻ tín dụng: Đội ngũ vận hành nghiệp vụ từ chối cung cấp danh sách quy tắc cứng, chỉ nói 'chúng tôi nhìn vào linh cảm là biết gian lận'. Dữ liệu lịch sử 1 triệu giao dịch không hề có nhãn đánh dấu (Unlabeled Data). BA cần dẫn dắt bước khai thác yêu cầu tiếp theo như thế nào?",
    opts: [
      "Bỏ cuộc vì không thể xây dựng phần mềm dựa trên 'linh cảm'.",
      "Tổ chức các buổi phân tích hồi cứu (Retrospective Case Review) trên 100 vụ gian lận thực tế đã xảy ra: Cùng chuyên gia mổ xẻ các đặc trưng bất thường (vị trí địa lý thay đổi trong 5 phút, số tiền tăng đột biến, loại hàng mua lúc nửa đêm) để hình thành bộ thuộc tính (Feature Engineering) và gắn nhãn tập dữ liệu mẫu.",
      "Ép buộc đội nghiệp vụ phải ký cam kết đưa ra 10 công thức toán học trong vòng 24 giờ.",
      "Lập trình ngẫu nhiên chặn 5% số lượng giao dịch bất kỳ mỗi ngày để đề phòng rủi ro."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. 'Linh cảm' thực chất là sự tích lũy kinh nghiệm tiềm thức từ các dấu hiệu bất thường lặp đi lặp lại. Phân tích các ca sự cố cụ thể giúp biến trực giác thành các đặc trưng định lượng (Features) phục vụ xây dựng giải pháp."
  },
  {
    track: 1,
    id: "Q1-18",
    level: 2,
    q: "Hệ thống ERP sản xuất: Ban Lãnh đạo ép tiến độ khai thác yêu cầu phải chốt trong 2 tuần để kịp tiến độ giải ngân vốn đầu tư. Tuy nhiên, tài liệu quy trình nhà máy đã lạc hậu 8 năm và các Kỹ sư trưởng dây chuyền đang bận trực khắc phục sự cố máy móc liên tục 12 tiếng/ngày. Đâu là kế hoạch tiếp cận khả thi nhất của BA?",
    opts: [
      "Tự bịa ra các quy trình mới trong văn phòng máy lạnh để nộp đúng hạn 2 tuần.",
      "Xin dừng dự án và từ chối làm việc vì điều kiện không thuận lợi.",
      "Áp dụng chiến lược khai thác phân tầng: Dùng 3 ngày đầu đọc dữ liệu log xuất nhập vật tư và hệ thống SCADA để phác thảo khung quy trình cốt lõi; sau đó chỉ xin các khung giờ giao ban ngắn 20 phút của Kỹ sư trưởng để xác thực các điểm đứt gãy quan trọng nhất; các chi tiết phụ phân rã xử lý dần trong các Sprint phát triển.",
      "Bắt buộc các kỹ sư trưởng phải tăng ca thêm sau 12 tiếng làm việc để ngồi họp với BA thâu đêm."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Trong tình huống khan hiếm thời gian của chuyên gia (SME Constraint), BA phải tự lực khai thác tối đa từ dữ liệu máy móc (SCADA/Log) để chuẩn bị sẵn sàng, chỉ dùng thời gian của SME cho việc xác thực trọng yếu (High-leverage interaction)."
  },
  {
    track: 1,
    id: "Q1-19",
    level: 2,
    q: "Khai thác yêu cầu cho Cổng dịch vụ công cấp tỉnh: Chỉ tiêu Bộ ngành giao là 90% hồ sơ phải được xử lý trực tuyến toàn trình (không nộp giấy). Tuy nhiên, người dân vùng sâu vùng xa không có máy tính, không có chữ ký số cá nhân và đường truyền mạng rất yếu. Làm thế nào để BA đề xuất quy trình vừa đạt chỉ tiêu số hóa vừa phục vụ được nhân dân?",
    opts: [
      "Kiên quyết loại bỏ hoàn toàn việc tiếp nhận hồ sơ tại bộ phận một cửa cấp xã để ép người dân phải tự mua máy tính kết nối mạng.",
      "Từ chối nhận chỉ tiêu 90% và gửi công văn xin giữ nguyên quy trình nộp hồ sơ giấy 100%.",
      "Khai thác mô hình 'Đại lý hỗ trợ số hóa' (Assisted Digital Service): Công chức tại bộ phận một cửa xã đóng vai trò người hỗ trợ, sử dụng thiết bị chuyên dụng quét giấy tờ và ký số thay mặt người dân sau khi đối soát sinh trắc học; hồ sơ vẫn đi theo luồng số hóa toàn trình trên hệ thống liên thông.",
      "Tự động duyệt tất cả hồ sơ của người dân vùng xa mà không cần kiểm tra giấy tờ để đạt chỉ tiêu số hóa."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. 'Assisted Digital' là mô hình kinh điển trong chính phủ điện tử toàn cầu khi người dùng cuối thiếu năng lực số (Digital Divide). Quy trình này đảm bảo tính toàn trình của dữ liệu số trên hệ thống mà không bỏ rơi người dân."
  },
  {
    track: 1,
    id: "Q1-20",
    level: 2,
    q: "Hệ thống Quản lý Đơn hàng (OMS) tích hợp với 3 sàn TMĐT lớn: Đúng dịp Siêu Sale 11/11, một sàn TMĐT âm thầm thay đổi cấu trúc Webhook gửi đơn hàng mới mà không báo trước, khiến OMS không đọc được dữ liệu và có nguy cơ bỏ sót 50.000 đơn hàng. BA cần làm việc với đội kỹ thuật để khai thác yêu cầu cấp bách nào?",
    opts: [
      "Ngay lập tức gửi đơn kiện sàn TMĐT ra tòa án kinh tế và ngừng bán hàng trên sàn đó.",
      "Thiết kế cơ chế 'Dead-Letter Queue & Raw Payload Ingestion': Lưu trữ nguyên vẹn toàn bộ chuỗi JSON thô nhận được vào bộ đệm an toàn kèm timestamp; đồng thời bổ sung bộ giải mã linh hoạt (Adapter pattern) để tái phân tích và đẩy lại các đơn hàng vào luồng xử lý mà không làm mất mát đơn hàng nào.",
      "Xóa toàn bộ các đơn hàng bị lỗi format để tránh làm chậm hệ thống xử lý của các sàn khác.",
      "Chờ hết đợt khuyến mại 11/11 rồi mới tiến hành họp rút kinh nghiệm."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Khi tích hợp bên thứ ba, nguyên tắc phòng thủ hàng đầu là 'Không bao giờ làm mất dữ liệu thô' (Ingest raw first). Dead-letter queue giúp hứng toàn bộ payload dù sai format, sau đó patch bộ chuyển đổi để xử lý lại (Replay)."
  }
];
