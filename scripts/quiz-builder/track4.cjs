module.exports = [
  // Level 0: Nền tảng (Q4-01 -> Q4-05)
  {
    track: 4,
    id: "Q4-01",
    level: 0,
    q: "Trong giai đoạn Phân tích Chiến lược & Thiết kế Giải pháp, ranh giới trách nhiệm giữa Business Analyst (BA) và Solution Architect (SA) được phân định chính xác như thế nào?",
    opts: [
      "BA quyết định chọn ngôn ngữ lập trình và thiết kế bảng cơ sở dữ liệu, còn SA chỉ vẽ giao diện người dùng.",
      "BA tập trung định nghĩa 'Cái gì cần giải quyết và vì sao' (Vấn đề kinh doanh, giá trị, yêu cầu, quy tắc nghiệp vụ); SA chịu trách nhiệm 'Giải quyết bằng cách nào ở tầng kỹ thuật' (Kiến trúc hệ thống, công nghệ, cấu trúc dữ liệu và mô hình tích hợp).",
      "BA và SA là hai tên gọi khác nhau của cùng một vị trí công việc trong doanh nghiệp công nghệ.",
      "SA chịu trách nhiệm đàm phán hợp đồng giá tiền với khách hàng, còn BA chịu trách nhiệm viết code backend."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. BA làm chủ không gian bài toán (Problem Space: What & Why); SA làm chủ không gian giải pháp kỹ thuật (Solution Space: How). Sự phối hợp chặt chẽ giữa BA và SA đảm bảo giải pháp vừa đáp ứng mục tiêu kinh doanh vừa khả thi về mặt công nghệ."
  },
  {
    track: 4,
    id: "Q4-02",
    level: 0,
    q: "Khi tiến hành Đánh giá Tính khả thi (Feasibility Analysis) của một giải pháp đề xuất, mô hình TELOS đánh giá 5 khía cạnh cốt lõi nào?",
    opts: [
      "Traffic, Errors, Latency, Output, Saturation.",
      "Technical (Kỹ thuật), Economic (Kinh tế/Chi phí - Lợi ích), Legal (Pháp lý), Operational (Vận hành), Schedule (Tiến độ/Thời gian).",
      "Testing, Execution, Logging, Optimization, Security.",
      "Team, Effort, Leadership, Organization, Scope."
    ],
    ans: 1,
    exp: "Đáp án đúng là B theo khung TELOS chuẩn quốc tế: Khả thi kỹ thuật (công nghệ làm được không), Kinh tế (có sinh lời/vừa ngân sách không), Pháp lý (có vi phạm luật không), Vận hành (tổ chức có dùng được không) và Tiến độ (có kịp deadline không)."
  },
  {
    track: 4,
    id: "Q4-03",
    level: 0,
    q: "Kỹ thuật 'Ma trận Quyết định có Trọng số' (Weighted Decision Matrix) giúp ích gì cho BA khi so sánh các phương án giải pháp khác nhau?",
    opts: [
      "Tự động tạo ra mã nguồn phần mềm dựa trên các tiêu chí toán học.",
      "Lượng hóa và đánh giá khách quan các phương án giải pháp dựa trên một tập hợp các tiêu chí kinh doanh và kỹ thuật đã được gán trọng số ưu tiên theo mục tiêu chiến lược của tổ chức.",
      "Thay thế hoàn toàn vai trò phê duyệt của Ban Giám đốc trong việc lựa chọn nhà thầu.",
      "Dùng để tính toán chính xác số lượng lỗi lập trình viên sẽ tạo ra trong dự án."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Weighted Decision Matrix giúp loại bỏ cảm tính cá nhân bằng cách chấm điểm từng giải pháp (COTS vs Tự xây dựng vs Thuê ngoài) dựa trên các tiêu chí (chi phí, thời gian, độ linh hoạt) kèm trọng số phần trăm rõ ràng."
  },
  {
    track: 4,
    id: "Q4-04",
    level: 0,
    q: "Phương án 'Mua phần mềm đóng gói sẵn' (COTS - Commercial Off-The-Shelf) thường có ưu điểm và nhược điểm điển hình nào so với 'Tự phát triển theo yêu cầu' (Custom Build)?",
    opts: [
      "Ưu điểm: Miễn phí hoàn toàn 100%; Nhược điểm: Không thể cài đặt trên máy tính.",
      "Ưu điểm: Thời gian triển khai nhanh, kế thừa thực tiễn tốt nhất của ngành (Best practices); Nhược điểm: Khó tùy biến sâu theo các quy trình đặc thù riêng biệt và có nguy cơ phụ thuộc nhà cung cấp (Vendor lock-in).",
      "Ưu điểm: Tùy biến tự do mọi chức năng; Nhược điểm: Không có tài liệu hướng dẫn sử dụng.",
      "Không có ưu điểm nào, tự viết phần mềm luôn luôn tốt hơn mua giải pháp có sẵn."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. COTS giúp rút ngắn thời gian ra mắt (Time-to-market) và đã được kiểm chứng qua nhiều khách hàng, nhưng nếu doanh nghiệp có quy trình độc thù cạnh tranh thì việc chỉnh sửa mã nguồn COTS sẽ cực kỳ tốn kém và rủi ro."
  },
  {
    track: 4,
    id: "Q4-05",
    level: 0,
    q: "Phân biệt giữa Proof of Concept (PoC) và Minimum Viable Product (MVP):",
    opts: [
      "PoC là sản phẩm hoàn chỉnh để bán đại trà cho khách hàng; MVP chỉ là bản vẽ tay trên giấy của BA.",
      "PoC nhằm mục đích kiểm chứng tính khả thi kỹ thuật của một giả định hoặc công nghệ mới; MVP là một phiên bản sản phẩm có đầy đủ các tính năng cốt lõi tối thiểu để phát hành thực tế cho người dùng nhằm thu thập phản hồi học hỏi từ thị trường.",
      "Hai khái niệm này hoàn toàn đồng nghĩa và có thể dùng thay thế cho nhau trong mọi hoàn cảnh.",
      "PoC do phòng Marketing làm, còn MVP do phòng Kế toán phê duyệt."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. PoC kiểm tra 'Liệu công nghệ này có hoạt động được không?' (ví dụ thuật toán nhận diện khuôn mặt có đọc được trong bóng tối không). MVP là sản phẩm chạy thật có giá trị cốt lõi nhỏ nhất đưa đến tay khách hàng thật."
  },

  // Level 1: Vận dụng (Q4-06 -> Q4-13)
  {
    track: 4,
    id: "Q4-06",
    level: 1,
    q: "Một doanh nghiệp sản xuất dệt may có 6.000 công nhân với cơ chế tính lương sản phẩm, thưởng phạt ca kíp và phụ cấp độc hại cực kỳ đặc thù, liên tục thay đổi theo từng đơn hàng xuất khẩu hàng tháng. Khi lựa chọn giữa Build (Tự phát triển) và Buy (Mua gói phần mềm nhân sự COTS nước ngoài), BA nên khuyến nghị hướng đi nào?",
    opts: [
      "Mua gói COTS nước ngoài giá rẻ và ép công nhân phải đổi cách tính lương theo chuẩn của phần mềm.",
      "Khuyến nghị phương án Custom Build (hoặc mua nền tảng trong nước có mã nguồn mở cho phép tùy biến sâu), vì sự phức tạp và biến đổi liên tục của quy chế lương là năng lực cạnh tranh vận hành cốt lõi, việc chỉnh sửa COTS nước ngoài sẽ bất khả thi và chi phí bảo trì cực lớn.",
      "Từ chối làm phân hệ tính lương và tiếp tục tính bằng sổ tay ghi chép.",
      "Thuê sinh viên làm gia công phần mềm miễn phí trong 1 tuần."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Khi quy tắc nghiệp vụ mang tính chất đặc thù nội địa sâu sắc và biến động cao, việc ép mua COTS chuẩn quốc tế (A) thường dẫn tới thất bại do chi phí tùy biến (Customization cost) vượt quá chi phí tự xây dựng."
  },
  {
    track: 4,
    id: "Q4-07",
    level: 1,
    q: "Đề xuất đầu tư hệ thống quét mã vạch tự động tại kho hàng trị giá 1.2 tỷ VNĐ. Phân tích tài chính chỉ ra: Hệ thống giúp giảm 3 nhân sự kiểm đếm (tiết kiệm 360 triệu VNĐ/năm) và giảm tỷ lệ thất thoát hàng hóa hư hỏng ước tính 240 triệu VNĐ/năm. Thời gian hoàn vốn giản đơn (Payback Period) của giải pháp này là bao lâu?",
    opts: [
      "Khoảng 5 năm.",
      "Đúng 2 năm (Tổng lợi ích tiết kiệm: 360 + 240 = 600 triệu/năm; 1.2 tỷ / 600 triệu = 2 năm).",
      "Khoảng 10 năm.",
      "Không bao giờ hoàn vốn được."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Công thức Payback Period = Chi phí đầu tư ban đầu / Lợi ích dòng ròng hàng năm = 1.200.000.000 / (360.000.000 + 240.000.000) = 2 năm. Đây là bài toán phân tích Cost-Benefit căn bản của BA."
  },
  {
    track: 4,
    id: "Q4-08",
    level: 1,
    q: "Trong phân tích chiến lược chuyển đổi số chuỗi bán lẻ thời trang, ma trận SWOT chỉ ra: Điểm mạnh (S) là có 200 cửa hàng phủ rộng toàn quốc; Cơ hội (O) là thị trường mua sắm trực tuyến trên điện thoại bùng nổ 40%/năm. Chiến lược SO (Tận dụng thế mạnh để đón đầu cơ hội) phù hợp nhất là gì?",
    opts: [
      "Đóng cửa toàn bộ 200 cửa hàng vật lý để chuyển hẳn sang làm trang web bán hàng online.",
      "Xây dựng mô hình Omnichannel 'Click-and-Collect' (Bán hàng đa kênh): Cho phép khách hàng đặt hàng trực tuyến trên App và có thể nhận hàng hoặc đổi trả sản phẩm tại bất kỳ cửa hàng vật lý nào gần nhất trong vòng 30 phút.",
      "Không làm gì cả vì cửa hàng truyền thống đang kinh doanh ổn định.",
      "Bán bớt hàng tồn kho với giá 1.000 đồng để dọn dẹp mặt bằng."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Chiến lược SO kết hợp sức mạnh mạng lưới cửa hàng sẵn có (S) với xu hướng thương mại điện tử (O) để tạo ra lợi thế cạnh tranh vượt trội mà các đối thủ thuần online không có được (BOPIS / Click-and-Collect)."
  },
  {
    track: 4,
    id: "Q4-09",
    level: 1,
    q: "Lựa chọn mô hình tích hợp dữ liệu giữa Cổng dịch vụ công cấp tỉnh và Hệ thống Hạch toán Kho bạc Nhà nước: Báo cáo đối soát chỉ cần nộp vào lúc 17h00 hàng ngày, số lượng giao dịch trong ngày là 30.000 bản ghi. Hạ tầng đường truyền giữa hai bên có băng thông thấp. Lựa chọn kiến trúc tích hợp nào là tối ưu nhất?",
    opts: [
      "Bắt buộc gửi từng giao dịch realtime qua Webhook ngay khi phát sinh kể cả nửa đêm.",
      "Thiết kế cơ chế xử lý theo lô định kỳ (Batch Job Integration): Xuất gói dữ liệu mã hóa nén gzip vào cuối ngày lúc 17h05, truyền tải và đối soát hàng loạt một lần duy nhất trong khung giờ vắng tải, kèm cơ chế báo cáo sai lệch đối soát (Reconciliation Report).",
      "Cử nhân viên mang USB sang cắm trực tiếp vào máy chủ Kho bạc mỗi ngày.",
      "Bỏ qua khâu đối soát với Kho bạc Nhà nước."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Khi nghiệp vụ không đòi hỏi tức thời (chỉ cần chốt số cuối ngày) và băng thông mạng thấp, tích hợp Batch Job cuối ngày giúp giảm thiểu tài nguyên hệ thống, tránh nghẽn mạng và đối soát dữ liệu toàn vẹn hơn."
  },
  {
    track: 4,
    id: "Q4-10",
    level: 1,
    q: "Thiết kế giải pháp phân quyền truy cập (Role-Based Access Control - RBAC) trong Hệ thống Thông tin Bệnh viện (HIS): Nguyên tắc bảo mật 'Đặc quyền tối thiểu' (Principle of Least Privilege) được áp dụng như thế nào?",
    opts: [
      "Cấp quyền Quản trị viên tối cao (Super Admin) cho tất cả Bác sĩ, Y tá và Thực tập sinh để thao tác cho tiện.",
      "Mỗi vai trò chỉ được cấp đúng và đủ quyền truy cập các chức năng và dữ liệu cần thiết để thực hiện nhiệm vụ công việc: Bác sĩ điều trị được xem và kê đơn bệnh án của khoa mình; Nhân viên thu ngân chỉ thấy thông tin viện phí cần thu mà không được xem chi tiết tiền sử bệnh án; Nhân viên tiếp đón chỉ thấy thông tin hành chính cơ bản.",
      "Mọi nhân viên bệnh viện đều có quyền xem toàn bộ hồ sơ bệnh án của tất cả bệnh nhân trong thành phố.",
      "Không cần phân quyền, ai vào trước thì làm việc trước."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Least Privilege là nguyên tắc vàng trong bảo mật hệ thống thông tin, đặc biệt trong ngành y tế và tài chính: chỉ cấp đúng quyền cần thiết cho vị trí công việc, ngăn chặn rò rỉ dữ liệu nhạy cảm."
  },
  {
    track: 4,
    id: "Q4-11",
    level: 1,
    q: "Dự án phần mềm Quản lý Bán hàng tại cửa hàng (POS) chuẩn bị triển khai giai đoạn Pilot (Thử nghiệm thực tế). Tiêu chí lựa chọn chi nhánh cửa hàng nào sau đây là phù hợp nhất để thử nghiệm Pilot?",
    opts: [
      "Chọn chi nhánh có doanh số lớn nhất toàn quốc chiếm 50% doanh thu công ty để thử nghiệm ngay ngày Tết.",
      "Chọn một chi nhánh có quy mô vừa phải, có đầy đủ các luồng nghiệp vụ đại diện (bán lẻ, đổi trả hàng, xuất hóa đơn VAT, thanh toán thẻ) và có người Quản lý chi nhánh cởi mở, sẵn sàng hợp tác đóng góp phản hồi cải tiến.",
      "Chọn một chi nhánh sắp đóng cửa giải thể để nếu có hỏng phần mềm cũng không ảnh hưởng ai.",
      "Không cần làm Pilot, triển khai đồng loạt 500 cửa hàng cùng lúc trong một đêm duy nhất."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Địa điểm Pilot lý tưởng phải có tính đại diện cao về mặt nghiệp vụ nhưng quy mô rủi ro được kiểm soát (không gây tê liệt doanh nghiệp), đồng thời nhân sự tại chỗ phải có tinh thần xây dựng và phản hồi tích cực."
  },
  {
    track: 4,
    id: "Q4-12",
    level: 1,
    q: "Trong quá trình đánh giá gói phần mềm SaaS nước ngoài quản lý khách hàng (CRM), BA phát hiện: Máy chủ của nhà cung cấp đặt hoàn toàn tại Bắc Mỹ và chính sách điều khoản không hỗ trợ lưu trữ dữ liệu tại Việt Nam. Rủi ro giải pháp nào được xác định?",
    opts: [
      "Không có rủi ro nào, phần mềm nước ngoài luôn hợp pháp tuyệt đối.",
      "Rủi ro tuân thủ pháp lý nghiêm trọng (Legal Compliance Risk): Vi phạm Luật An ninh mạng và Nghị định bảo vệ dữ liệu cá nhân (PDPD) của Việt Nam quy định về việc lưu trữ dữ liệu cá nhân của người dùng Việt Nam tại lãnh thổ trong nước.",
      "Rủi ro về màu sắc giao diện không hợp phong thủy.",
      "Rủi ro lập trình viên không biết tiếng Anh."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Tuân thủ luật pháp sở tại (Data Residency / Sovereignty) là tiêu chí tiên quyết trong TELOS. Vi phạm quy định này có thể dẫn tới bị phạt hàng tỷ đồng hoặc bị cơ quan chức năng chặn truy cập dịch vụ."
  },
  {
    track: 4,
    id: "Q4-13",
    level: 1,
    q: "Hệ thống nhận diện khuôn mặt chấm công tại cổng vào nhà máy sản xuất (có 3.000 công nhân vào ca cùng lúc lúc 7h30 sáng). Thiết kế giải pháp phòng ngừa rủi ro mất kết nối mạng Internet (Offline Fallback Strategy) nào là chuẩn xác nhất?",
    opts: [
      "Cho công nhân đứng ngoài cổng chờ đợi đến khi nhà mạng sửa xong đường truyền Internet.",
      "Thiết bị chấm công tại cổng lưu trữ cơ sở dữ liệu mẫu khuôn mặt cục bộ (Local Edge Database) và thực hiện nhận diện offline độc lập tại chỗ; lưu bản ghi chấm công có chữ ký số vào bộ nhớ máy; tự động đồng bộ ngầm (Background Sync) lên máy chủ trung tâm ngay khi có kết nối trở lại.",
      "Tuyên bố công nhân được nghỉ làm hưởng nguyên lương nếu mạng Internet bị đứt.",
      "Tắt máy chấm công và yêu cầu công nhân tự ký tên vào một tờ giấy A4 duy nhất."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Chiến lược Offline-First / Local Fallback đảm bảo tính liên tục vận hành kinh doanh (Business Continuity): hệ thống vẫn phục vụ bình thường tại chỗ ngay cả khi đứt cáp quang biển, sau đó tự hồi phục dữ liệu."
  },

  // Level 2: Nâng cao (Q4-14 -> Q4-20)
  {
    track: 4,
    id: "Q4-14",
    level: 2,
    q: "Hệ thống phần mềm Monolith thương mại điện tử hiện tại bị sập liên tục mỗi đợt Siêu Sale do quá tải cơ sở dữ liệu. Giám đốc Công nghệ (CTO) đề xuất 'Đập bỏ toàn bộ hệ thống cũ để xây dựng lại từ đầu theo kiến trúc Microservices phân tán 100% trong 18 tháng với ngân sách gấp 3 lần'. Tuy nhiên, Ban Giám đốc yêu cầu phải duy trì kinh doanh liên tục và chuẩn bị cho mùa khuyến mại lớn sau 4 tháng nữa. Là Senior BA tư vấn chiến lược, bạn đề xuất giải pháp kiến trúc chuyển đổi nào?",
    opts: [
      "Hoàn toàn đồng ý với CTO và cho dừng toàn bộ hoạt động bán hàng của công ty trong 18 tháng để chờ hệ thống mới.",
      "Áp dụng mẫu hình kiến trúc chuyển đổi Strangler Fig Pattern: Giữ nguyên hệ thống Monolith cũ làm nền tảng, bóc tách riêng các phân hệ chịu tải cao nhất (như Giỏ hàng và Cổng thanh toán) ra thành các dịch vụ độc lập kết hợp cơ chế bộ nhớ đệm phân tán (Redis Cache) và hàng đợi (Kafka) trong 3 tháng; các phân hệ khác tiếp tục chuyển đổi dần dần theo lộ trình nhiều năm.",
      "Phản đối mọi sự thay đổi và đề xuất tiếp tục dùng hệ thống cũ bị sập.",
      "Chỉ thay đổi giao diện website cho đẹp hơn để đánh lạc hướng người dùng."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Strangler Fig Pattern là phương pháp luận chuẩn quốc tế để chuyển đổi từ Monolith sang Microservices mà không gặp rủi ro 'Big Bang': bóc tách từng phần có giá trị cao nhất trước, vừa giải quyết khủng hoảng 4 tháng tới vừa giữ hoạt động kinh doanh liên tục."
  },
  {
    track: 4,
    id: "Q4-15",
    level: 2,
    q: "Hệ thống Quản lý Thực thi Kho hàng (WES) trong kho tự động hóa: Dây chuyền robot AGV đòi hỏi công suất xử lý xuất hàng 3.500 pallet/giờ (khoảng 60 lệnh/giây). Tuy nhiên, hệ thống ERP kế toán cũ của tập đoàn chỉ có thể tiếp nhận tối đa 10 yêu cầu API/giây, nếu gửi quá sẽ bị tràn bộ nhớ và treo máy chủ tài chính. Giải pháp thiết kế tầng đệm tích hợp (Integration Buffering) nào thỏa mãn cả hai ràng buộc?",
    opts: [
      "Bắt robot AGV chạy chậm lại 6 lần để không làm hỏng máy chủ ERP kế toán.",
      "Thiết kế cơ chế Bất đồng bộ qua Hàng đợi Thông điệp (Message Queue / Event-Driven Architecture): WES thực thi việc xuất pallet với tốc độ tối đa của robot và đẩy các sự kiện hoàn tất vào hàng đợi tin cậy (Kafka/RabbitMQ); một tiến trình xử lý nền (Worker Consumer) sẽ trích xuất dữ liệu từ hàng đợi và điều tiết tốc độ (Rate Limiting) nạp vào ERP đúng ngưỡng an toàn 10 req/s.",
      "Cho phép ERP bị sập và khởi động lại thủ công sau mỗi giờ làm việc.",
      "Xóa bỏ hệ thống ERP kế toán và không ghi nhận số sách tài chính nữa."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Khi có sự chênh lệch lớn về công suất thông lượng (Throughput Mismatch) giữa hệ thống vật lý tốc độ cao và hệ thống kế toán chậm chạp, kiến trúc hướng sự kiện (EDA) có hàng đợi đệm (Message Queue) và điều tiết tải (Rate Limiting) là giải pháp tiêu chuẩn."
  },
  {
    track: 4,
    id: "Q4-16",
    level: 2,
    q: "Dự án Cổng dịch vụ công cấp tỉnh: Lãnh đạo tỉnh muốn giao diện hiện đại, tích hợp bản đồ 3D tương tác và nhiều hiệu ứng đồ họa hoành tráng để trình diễn. Tuy nhiên, kết quả khảo sát của BA chỉ ra 70% người dân nộp hồ sơ sinh sống ở khu vực miền núi, sử dụng điện thoại thông minh giá rẻ đời cũ và đường truyền mạng 3G chập chờn. BA cần xây dựng lập luận phân tích chiến lược như thế nào để thuyết phục Lãnh đạo?",
    opts: [
      "Làm đúng theo ý thích 3D của Lãnh đạo và phớt lờ khó khăn của người dân vùng sâu vùng xa.",
      "Trực tiếp phê phán Lãnh đạo là lãng phí và không hiểu biết gì về công nghệ.",
      "Sử dụng dữ liệu thực tế và phân tích Trade-off: Đo lường tốc độ tải trang 3D trên thiết bị phổ thông (mất >25 giây, tỷ lệ tải trang thất bại 60%); đề xuất phương án 'Kiến trúc Giao diện Thích ứng (Adaptive UX / Progressive Enhancement)': Cung cấp chế độ mặc định siêu nhẹ, tối ưu tải dưới 1.5 giây cho 100% công dân nộp hồ sơ, đồng thời xây dựng một trang Dashboard tổng quan riêng biệt dành riêng cho phòng điều hành của Lãnh đạo trình diễn.",
      "Hủy bỏ dự án dịch vụ công và chuyển sang phát triển game 3D."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Senior BA giải quyết bài toán kỳ vọng chính trị của lãnh đạo bằng dữ liệu khách quan và giải pháp lưỡng toàn kỳ mỹ (Progressive Enhancement): tách biệt giao diện phục vụ đại chúng siêu nhẹ với màn hình điều hành trình diễn chuyên biệt."
  },
  {
    track: 4,
    id: "Q4-17",
    level: 2,
    q: "Hệ thống Bệnh án điện tử (EMR) cho mạng lưới 10 bệnh viện: Dữ liệu ảnh chụp cộng hưởng từ MRI và cắt lớp CT-Scan có dung lượng cực lớn (500MB đến 1GB/ca chụp). Bác sĩ phòng cấp cứu đòi hỏi phải xem được hình ảnh trong vòng 3 giây khi có ca bệnh khẩn cấp. Tuy nhiên, ngân sách chi trả cho dung lượng lưu trữ Cloud tốc độ cao hàng tháng bị Hội đồng quản trị giới hạn cứng. Thiết kế giải pháp phân tầng lưu trữ (Tiered Storage Strategy) nào tối ưu nhất?",
    opts: [
      "Nén giảm chất lượng ảnh xuống 90% khiến hình ảnh bị mờ và bác sĩ không chẩn đoán được bệnh.",
      "Áp dụng Phân tầng Dữ liệu theo Vòng đời (Data Lifecycle Tiering): Dữ liệu hình ảnh của bệnh nhân đang điều trị nội trú trong 30 ngày gần nhất được lưu trên bộ nhớ đệm hiệu năng cao (Hot Storage / Local Edge Server tại bệnh viện) để truy xuất tức thì <2 giây; sau 30 ngày bệnh nhân xuất viện, hình ảnh tự động di chuyển sang tầng lưu trữ chi phí thấp (Cold / Archive Cloud Storage) với chi phí chỉ bằng 1/10.",
      "Xóa toàn bộ hình ảnh MRI ngay sau khi bác sĩ đọc xong ca chụp.",
      "Yêu cầu bệnh nhân tự mang theo ổ cứng di động để copy ảnh về nhà tự bảo quản."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Tiered Storage (Hot vs Cold Storage) giải quyết hoàn hảo bài toán cân bằng giữa tốc độ truy xuất cứu mạng bệnh nhân trong ca cấp cứu và bài toán chi phí tài chính hữu hạn của bệnh viện."
  },
  {
    track: 4,
    id: "Q4-18",
    level: 2,
    q: "Hệ thống sàn thương mại điện tử tích hợp với 5 đơn vị vận chuyển (3PL): Mỗi đối tác giao hàng có biểu phí khác nhau theo khu vực, thời gian giao hàng cam kết khác nhau và tỷ lệ giao hàng thành công thất thường. Khách hàng mong muốn gói cước ship rẻ nhất nhưng vẫn đảm bảo đúng hạn. Giải pháp thiết kế công cụ Định tuyến đơn hàng thông minh (Smart Order Routing Engine) cần quy định logic gì?",
    opts: [
      "Luôn luôn gán 100% đơn hàng cho 1 đơn vị vận chuyển duy nhất dù giá đắt hay rẻ.",
      "Thiết lập thuật toán tối ưu đa mục tiêu (Multi-objective Routing Algorithm): Tự động tính toán điểm số tổng hợp dựa trên 3 tiêu chí theo trọng số: (1) Chi phí vận chuyển thực tế cho tuyến đường đó; (2) Cam kết SLA thời gian giao hàng so với mốc hẹn của khách; (3) Điểm đánh giá chất lượng dịch vụ (Performance Score / Success rate) 7 ngày gần nhất của từng đối tác.",
      "Cho phép tài xế của các hãng vận chuyển tự vào phần mềm tranh giành đơn hàng.",
      "Yêu cầu người mua hàng tự liên hệ với các hãng vận chuyển để thỏa thuận giá cước."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Smart Order Routing là giải pháp cốt lõi của E-Logistics: kết hợp linh hoạt giữa chi phí, thời gian và dữ liệu độ tin cậy lịch sử thực tế của từng đối tác 3PL để tự động hóa việc chọn lựa tối ưu cho từng bưu kiện."
  },
  {
    track: 4,
    id: "Q4-19",
    level: 2,
    q: "Bài toán Quản lý Dữ liệu Tổng thể (Master Data Management - MDM) của một tập đoàn bán lẻ: Khách hàng VIP vừa tự cập nhật số điện thoại mới trên Ứng dụng Di động, nhưng cùng lúc đó nhân viên chăm sóc khách hàng tại tổng đài lại sửa đổi thông tin của khách theo dữ liệu cũ trên phần mềm CRM nội bộ. Xung đột dữ liệu (Data Conflict) phát sinh. Cơ chế giải quyết xung đột nguồn chân lý duy nhất (Single Source of Truth) nào chuẩn xác nhất?",
    opts: [
      "Hệ thống tự động xóa sạch thông tin của khách hàng để không ai dùng được nữa.",
      "Xác lập ma trận quyền ưu tiên theo miền thuộc tính (Attribute-level Master Authority): Đối với thông tin liên lạc cá nhân (SĐT, Email), hành động tự xác thực kèm OTP của chính chủ trên Ứng dụng Di động được gán quyền ưu tiên cao nhất (Golden Record); hệ thống tự động đồng bộ đè dữ liệu mới này sang CRM kèm lịch sử kiểm toán nguồn thay đổi.",
      "Ai lưu dữ liệu sau cùng thì người đó thắng bất kể nguồn gốc từ đâu mà không cần ghi log.",
      "Bắt khách hàng phải đến trụ sở chính của tập đoàn để ký đơn xác nhận số điện thoại."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Trong MDM, nguyên tắc Golden Record phân quyền theo thuộc tính (Attribute-level Source of Truth): dữ liệu do chính chủ xác thực qua OTP luôn có độ tin cậy cao hơn thông tin gián tiếp do nhân viên nhập thủ công."
  },
  {
    track: 4,
    id: "Q4-20",
    level: 2,
    q: "Đánh giá hiệu quả giải pháp sau 6 tháng go-live: Phân hệ 'Gợi ý sản phẩm thông minh bằng AI' tiêu tốn 35% chi phí hạ tầng máy chủ hàng tháng của công ty, nhưng số liệu phân tích kinh doanh cho thấy tính năng này chỉ đóng góp tăng thêm 0.6% tổng doanh thu (trong khi mục tiêu kinh doanh đề ra ban đầu là tăng 5%). Là Senior BA phụ trách đánh giá giá trị giải pháp, khuyến nghị nào là đúng đắn nhất?",
    opts: [
      "Bỏ qua số liệu tài chính và tiếp tục duy trì vì công nghệ AI nghe rất hợp xu hướng thời đại.",
      "Tiến hành phân tích sâu nguyên nhân thất bại: Kiểm tra chất lượng dữ liệu đầu vào và thuật toán gợi ý; nếu chi phí hạ tầng (Cost) tiếp tục vượt xa giá trị kinh doanh tạo ra (ROI âm) và không có lộ trình tối ưu hóa khả thi, khuyến nghị Ban Lãnh đạo dừng phân hệ AI này hoặc chuyển đổi sang giải pháp gợi ý theo quy tắc thống kê đơn giản (Rule-based) để cắt giảm chi phí.",
      "Tăng gấp đôi ngân sách máy chủ để xem AI có thông minh hơn không.",
      "Đổ lỗi hoàn toàn cho đội ngũ Marketing không biết quảng cáo tính năng mới."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Năng lực quan trọng của Senior BA là Solution Evaluation: dũng cảm nhìn thẳng vào chỉ số ROI thực tế, không bị mắc bẫy tâm lý chi phí chìm (Sunk Cost Fallacy) hay chạy theo trào lưu công nghệ nếu không mang lại giá trị kinh tế thực chất."
  }
];
