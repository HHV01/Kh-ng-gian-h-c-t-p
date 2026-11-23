module.exports = [
  // Level 0: Nền tảng (Q0-01 -> Q0-05)
  {
    track: 0,
    id: "Q0-01",
    level: 0,
    q: "Theo chuẩn BABOK v3, bản chất cốt lõi của hoạt động Phân tích Nghiệp vụ (Business Analysis) là gì?",
    opts: [
      "Lập trình và xây dựng kiến trúc kỹ thuật chi tiết cho phần mềm doanh nghiệp.",
      "Thực hành tạo ra sự thay đổi trong tổ chức bằng cách xác định nhu cầu và đề xuất giải pháp mang lại giá trị cho các bên liên quan.",
      "Quản lý tiến độ dự án, ngân sách và phân bổ nguồn lực kỹ thuật cho đội phát triển.",
      "Kiểm thử hệ thống và đảm bảo mã nguồn phần mềm không còn lỗi trước khi phát hành."
    ],
    ans: 1,
    exp: "Đáp án đúng là B theo định nghĩa chuẩn BABOK v3 Guide. Phương án C là vai trò của Project Manager, A là của Software Architect/Dev, còn D thuộc về QA/QC."
  },
  {
    track: 0,
    id: "Q0-02",
    level: 0,
    q: "Hệ thống phân cấp yêu cầu theo chuẩn BABOK v3 bao gồm 4 tầng nào sau đây theo đúng trình tự từ tổng quát đến chi tiết?",
    opts: [
      "User Requirements ➔ System Requirements ➔ Functional Requirements ➔ Non-functional Requirements.",
      "Business Requirements ➔ Stakeholder Requirements ➔ Solution Requirements (FR/NFR) ➔ Transition Requirements.",
      "Business Goals ➔ Product Backlog ➔ User Stories ➔ Tasks.",
      "Customer Needs ➔ Functional Specs ➔ Technical Specs ➔ Test Cases."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. BABOK v3 phân loại 4 cấp độ: Yêu cầu kinh doanh (Business), Yêu cầu các bên liên quan (Stakeholder), Yêu cầu giải pháp (Solution: chức năng và phi chức năng) và Yêu cầu chuyển giao (Transition). Phương án A và C chỉ là cách gọi theo thói quen của Agile hoặc kỹ thuật."
  },
  {
    track: 0,
    id: "Q0-03",
    level: 0,
    q: "Trong ma trận phân tích Stakeholder theo Quyền lực & Mức độ quan tâm (Mendelow's Matrix), nhóm có 'Quyền lực cao (High Power) nhưng Mức độ quan tâm thấp (Low Interest)' cần được quản lý theo chiến lược nào?",
    opts: [
      "Quản lý chặt chẽ (Manage Closely) qua các cuộc họp tiến độ hàng tuần.",
      "Làm cho họ hài lòng (Keep Satisfied) bằng thông tin súc tích, tránh làm phiền việc vận hành.",
      "Chỉ cần giám sát tối thiểu (Monitor with minimum effort) khi có biến động lớn.",
      "Thông báo định kỳ chi tiết (Keep Informed) về các quyết định kỹ thuật nội bộ."
    ],
    ans: 1,
    exp: "Đáp án đúng là B (Keep Satisfied). Nhóm quyền lực cao nhưng ít quan tâm (như CFO, Ban Pháp chế) cần báo cáo cô đọng, đáp ứng kỳ vọng của họ mà không kéo vào họp vụn vặt. Phương án A dành cho High Power / High Interest, còn D dành cho Low Power / High Interest."
  },
  {
    track: 0,
    id: "Q0-04",
    level: 0,
    q: "Phát biểu nào sau đây phân định chính xác nhất ranh giới trách nhiệm giữa Business Analyst (BA) và Product Owner (PO) trong dự án?",
    opts: [
      "BA chịu trách nhiệm nghiệm thu sản phẩm cuối cùng, còn PO chịu trách nhiệm viết toàn bộ tài liệu đặc tả chi tiết.",
      "PO sở hữu tầm nhìn sản phẩm và quyền ưu tiên tính năng theo giá trị kinh doanh; BA đi sâu phân tích vấn đề, làm rõ yêu cầu và logic nghiệp vụ.",
      "BA chỉ làm việc trong mô hình Thác nước (Waterfall), còn PO là vai trò bắt buộc thay thế hoàn toàn BA trong mô hình Agile.",
      "PO chỉ quản lý ngân sách và hợp đồng với khách hàng, còn BA quản lý việc phân chia task cho đội lập trình viên."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. PO chịu trách nhiệm về Product Backlog, thứ tự ưu tiên và tối ưu hóa ROI; BA là người đồng hành phân tích sâu logic, quy tắc nghiệp vụ, phân tích tác động và kết nối kỹ thuật. Phương án C sai vì BA vẫn đóng vai trò quan trọng trong Agile."
  },
  {
    track: 0,
    id: "Q0-05",
    level: 0,
    q: "Kỹ thuật '5 Whys' và Biểu đồ xương cá (Ishikawa Diagram) được BA sử dụng chủ yếu trong giai đoạn nào?",
    opts: [
      "Đặc tả các ca kiểm thử hồi quy (Regression Testing) trong giai đoạn UAT.",
      "Phân tích nguyên nhân gốc rễ (Root Cause Analysis) để hiểu vấn đề thực sự trước khi đề xuất giải pháp.",
      "Ước lượng độ phức tạp (Story Points) của User Story trong phiên Sprint Planning.",
      "Vẽ sơ đồ luồng dữ liệu (Data Flow Diagram) giữa các thành phần kiến trúc Microservices."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. 5 Whys và Ishikawa là các kỹ thuật chuẩn để truy tìm căn nguyên cốt lõi (Root Cause) của vấn đề kinh doanh, tránh việc chỉ chữa phần ngọn hoặc đưa ra giải pháp sai hướng."
  },

  // Level 1: Vận dụng (Q0-06 -> Q0-13)
  {
    track: 0,
    id: "Q0-06",
    level: 1,
    q: "Giám đốc Vận hành một công ty thương mại điện tử nói với BA: 'Hệ thống giao hàng quá chậm, chúng ta cần mua thêm 15 xe tải mới ngay lập tức'. Hành động đúng đắn tiếp theo của BA là gì?",
    opts: [
      "Ghi nhận ngay yêu cầu 'Mua 15 xe tải' vào tài liệu Software Requirements Specification (SRS) phần phạm vi dự án.",
      "Đặt câu hỏi đào sâu nguyên nhân khiến giao hàng chậm (tắc đường, khâu soạn hàng tại kho trễ, hay năng lực vận chuyển thiếu) để xác định đúng vấn đề kinh doanh.",
      "Từ chối yêu cầu của Giám đốc vì cho rằng việc mua xe tải thuộc phạm vi đầu tư tài sản, không liên quan đến phần mềm.",
      "Lập tức gửi yêu cầu báo giá sang phòng Mua hàng để kịp tiến độ mua sắm theo yêu cầu của Giám đốc."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Đây là lỗi phổ biến 'Solution Bias' (stakeholder đưa ra giải pháp thay vì vấn đề). BA phải khơi gợi để tìm ra vấn đề thực sự: nếu nghẽn do khâu đóng gói kho mất 4 tiếng thì mua thêm 15 xe tải vẫn không giải quyết được thời gian giao hàng."
  },
  {
    track: 0,
    id: "Q0-07",
    level: 1,
    q: "Trong dự án số hóa hồ sơ nhân sự, Trưởng phòng Pháp chế có quyền phủ quyết dự án (High Power) nhưng từ chối tham gia các buổi họp lấy yêu cầu hàng tuần vì quá bận (Low Interest). Kế hoạch làm việc nào phù hợp nhất?",
    opts: [
      "Tiếp tục gửi lời mời họp lịch cố định hàng tuần và ghi nhận vắng mặt nếu Trưởng phòng không đến.",
      "Gửi tóm tắt cô đọng qua email về các điều khoản bảo mật dữ liệu, xin lịch hẹn riêng 30 phút đúng trọng tâm và gửi trước dự thảo quy chế.",
      "Tự ý quyết định các quy tắc bảo mật theo suy đoán và đợi đến khi kiểm toán độc lập phát hiện sai sót.",
      "Loại bỏ bộ phận Pháp chế ra khỏi danh sách stakeholder vì họ không hợp tác chủ động trong giai đoạn đầu."
    ],
    ans: 1,
    exp: "Đáp án đúng là B (Chiến lược Keep Satisfied). Với stakeholder nhóm này, việc spam lịch họp tuần (A) sẽ gây ức chế. BA cần chuẩn bị nội dung súc tích, nhắm trúng mối quan tâm pháp lý để họ phản hồi nhanh và hiệu quả."
  },
  {
    track: 0,
    id: "Q0-08",
    level: 1,
    q: "Phát biểu yêu cầu: 'Hệ thống phải xuất hóa đơn điện tử định dạng XML theo chuẩn Thông tư 78 của Tổng cục Thuế trong vòng 2 giây cho 300 giao dịch đồng thời.' Phát biểu này chứa đựng các loại yêu cầu nào?",
    opts: [
      "Chỉ bao gồm Yêu cầu chức năng (Functional Requirement).",
      "Bao gồm cả Yêu cầu nghiệp vụ (Tuân thủ Thông tư 78), Yêu cầu chức năng (Xuất XML) và Yêu cầu phi chức năng (Thời gian phản hồi và khả năng chịu tải).",
      "Chỉ bao gồm Yêu cầu chuyển đổi hệ thống (Transition Requirement).",
      "Là một User Story hoàn chỉnh theo tiêu chuẩn INVEST."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Phát biểu tích hợp cả quy định pháp lý bắt buộc (Business Rule/Compliance), tính năng cụ thể (FR: xuất hóa đơn XML) và ràng buộc chất lượng dịch vụ (NFR: hiệu năng 2s, concurrency 300 CCU)."
  },
  {
    track: 0,
    id: "Q0-09",
    level: 1,
    q: "Khi phỏng vấn Giám đốc Nhân sự về phần mềm chấm công mới, stakeholder yêu cầu: 'Hệ thống phải tự động trừ 500.000đ vào lương nếu nhân viên đi muộn 3 lần trong tháng'. BA phát hiện quy định này trái với Luật Lao động hiện hành. BA nên phản ứng thế nào?",
    opts: [
      "Vẫn đặc tả và chuyển cho Dev lập trình vì tôn trọng nguyên tắc 'khách hàng là thượng đế'.",
      "Lập tức tranh cãi gay gắt và từ chối nói chuyện tiếp với stakeholder trong buổi phỏng vấn.",
      "Nêu rõ rủi ro pháp lý theo Luật Lao động hiện hành, đề xuất xin ý kiến thẩm định của Bộ phận Pháp chế và gợi ý cơ chế trừ điểm thi đua thay vì trừ lương trực tiếp.",
      "Bỏ qua yêu cầu này một cách im lặng mà không ghi nhận hay phản hồi lại cho stakeholder."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. BA cần thể hiện năng lực tư vấn chuyên nghiệp và đạo đức nghề nghiệp: cảnh báo rủi ro tuân thủ (Compliance Risk), kết nối bộ phận chuyên môn (Pháp chế) và đề xuất phương án thay thế khả thi về mặt quản trị."
  },
  {
    track: 0,
    id: "Q0-10",
    level: 1,
    q: "Dự án triển khai cổng mua sắm nội bộ (E-Procurement). Ban Giám đốc muốn đo lường thành công của dự án theo tư duy Outcome (kết quả mang lại) thay vì Output (đầu ra sản phẩm). Đâu là chỉ số phù hợp nhất?",
    opts: [
      "Bàn giao đủ 25 màn hình chức năng và 100 trang tài liệu hướng dẫn sử dụng đúng hạn hợp đồng.",
      "Thời gian phê duyệt đơn mua hàng (PR/PO Cycle Time) giảm từ 7 ngày xuống 1.5 ngày và chi phí mua sắm tiết kiệm được 12% qua đấu thầu điện tử.",
      "Số lượng dòng mã nguồn (LOC) của hệ thống đạt trên 50.000 dòng chuẩn kiến trúc sạch.",
      "Đội dự án tổ chức đủ 10 buổi đào tạo cho 500 nhân viên trong tháng đầu tiên."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Output là sản phẩm bàn giao (màn hình, tài liệu, dòng code ở A, C, D). Outcome là tác động đo lường được lên hiệu quả kinh doanh thực tế (thời gian chu kỳ mua hàng giảm, chi phí tiết kiệm được)."
  },
  {
    track: 0,
    id: "Q0-11",
    level: 1,
    q: "Trong dự án chuyển đổi hệ thống Core Banking sang nền tảng mới, đâu là một ví dụ điển hình về Yêu cầu chuyển giao (Transition Requirement)?",
    opts: [
      "Hệ thống phải cho phép khách hàng chuyển tiền 24/7 qua mã QR động.",
      "Quy trình trích xuất, làm sạch và chuyển đổi 5 triệu tài khoản số dư cũ từ hệ thống kế thừa sang hệ thống mới trong đêm chuyển giao (Cutover Window 6 tiếng).",
      "Giao diện ứng dụng phải hỗ trợ chế độ tương phản cao cho người khiếm thị theo chuẩn WCAG.",
      "Hệ thống phải mã hóa dữ liệu thẻ tín dụng theo chuẩn quốc tế PCI-DSS."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Transition Requirements là các yêu cầu chỉ có giá trị tạm thời trong giai đoạn chuyển đổi (như script migration, đào tạo chuyển giao, quy trình song song), không còn tồn tại khi hệ thống mới vận hành ổn định."
  },
  {
    track: 0,
    id: "Q0-12",
    level: 1,
    q: "Kỹ thuật Phân tích khoảng cách (GAP Analysis) giúp ích nhiều nhất cho BA khi nào?",
    opts: [
      "Khi viết câu lệnh SQL để truy vấn dữ liệu từ nhiều bảng quan hệ khác nhau.",
      "Khi so sánh giữa trạng thái hiện tại (Current State) và trạng thái mong muốn (Future State) để xác định phạm vi công việc cần thực hiện.",
      "Khi thiết kế màu sắc và icon cho hệ thống Design System trên phần mềm Figma.",
      "Khi tính toán vận tốc hoàn thành công việc (Velocity) của đội Scrum sau mỗi Sprint."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. GAP Analysis là kỹ thuật nền tảng để trả lời câu hỏi: Hiện tại chúng ta đang ở đâu? Mục tiêu tương lai là gì? Khoảng trống (Gap) cần lấp đầy bao gồm những năng lực, quy trình hay hệ thống nào."
  },
  {
    track: 0,
    id: "Q0-13",
    level: 1,
    q: "Nhân viên vận hành kho từ chối sử dụng thiết bị quét mã vạch mới và tiếp tục ghi chép số liệu xuất nhập kho bằng sổ tay. Phương pháp tiếp cận tốt nhất của BA là gì?",
    opts: [
      "Báo cáo ngay lên Ban Giám đốc để áp dụng hình thức kỷ luật trừ lương các nhân viên chống đối.",
      "Quan sát trực tiếp tại kho (Job Shadowing) và phỏng vấn thấu cảm để tìm hiểu lý do (thiết bị quá nặng, phản hồi quét chậm, hay chữ quá nhỏ trong bóng tối) từ đó đề xuất điều chỉnh.",
      "Khóa toàn bộ quy trình giấy tờ thủ công để ép buộc nhân viên bắt buộc phải dùng máy quét.",
      "Bỏ mặc vì coi đó là vấn đề nội bộ của Trưởng kho, không thuộc trách nhiệm của đội dự án phần mềm."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Kháng cự thay đổi (Change Resistance) thường bắt nguồn từ bất tiện thực tế chưa được thấu hiểu (Usability, môi trường làm việc). BA cần tiếp cận hiện trường tìm căn nguyên thay vì áp đặt quyền lực (A, C)."
  },

  // Level 2: Nâng cao (Q0-14 -> Q0-20)
  {
    track: 0,
    id: "Q0-14",
    level: 2,
    q: "Dự án Smart Warehouse tự động hóa đối mặt xung đột gay gắt: CFO yêu cầu cắt giảm 25% chi phí đầu tư ban đầu (CAPEX), trong khi COO kiên quyết hệ thống phải đạt chuẩn giao hàng hỏa tốc trong 2 giờ với 100% đơn hàng. Ràng buộc thời gian go-live còn 3 tháng. Là Lead BA, bạn khuyến nghị chiến lược phạm vi nào?",
    opts: [
      "Ủng hộ CFO cắt bỏ toàn bộ hệ thống băng chuyền tự động và quay về quy trình nhặt hàng thủ công bằng giấy.",
      "Ủng hộ COO và yêu cầu Ban Giám đốc phê duyệt tăng 40% ngân sách vượt định mức để đảm bảo chất lượng tối đa.",
      "Áp dụng phân tích Pareto (80/20): Tự động hóa phân vùng cho top 20% SKU bán chạy nhất chiếm 80% lưu lượng để đảm bảo cam kết 2 giờ của COO; các SKU cồng kềnh/bán chậm giữ quy trình bán tự động để đáp ứng ngân sách của CFO.",
      "Trì hoãn dự án vô thời hạn đến khi CFO và COO tự tìm được tiếng nói chung trên bàn họp Ban Giám đốc."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Phân tích Pareto và phân tầng giải pháp (Hybrid Automation) là nghệ thuật đánh đổi kinh điển của Senior BA khi gặp xung đột lợi ích cốt lõi giữa chi phí và tốc độ vận hành, giúp đáp ứng cả hai mục tiêu khả thi."
  },
  {
    track: 0,
    id: "Q0-15",
    level: 2,
    q: "Cổng thanh toán điện tử của công ty Fintech phải tuân thủ quy định bắt buộc của Ngân hàng Nhà nước về xác thực sinh trắc học trước ngày 01/07 (còn 4 tuần), nhưng đối tác cung cấp dịch vụ OCR/NFC thông báo API mới nhất chưa ổn định và có thể lỗi 15% cuộc gọi. Dự án chịu ràng buộc pháp lý phạt nặng nếu chậm hạn. BA nên đề xuất giải pháp nào?",
    opts: [
      "Xin gia hạn với Ngân hàng Nhà nước thêm 6 tháng để chờ nhà cung cấp công nghệ hoàn thiện API.",
      "Triển khai xác thực sinh trắc học cho giao dịch vượt ngưỡng bắt buộc theo luật (ví dụ trên 10 triệu đồng), kết hợp luồng dự phòng (Fallback) tự động chuyển sang xác thực khuôn mặt qua video call với nhân viên trực tổng đài khi API gặp lỗi.",
      "Tắt hoàn toàn tính năng chuyển tiền trên ứng dụng di động để tránh bị xử phạt pháp lý.",
      "Bỏ qua bước xác thực sinh trắc học và làm giả mạo bản ghi nhật ký để qua mắt cơ quan thanh tra."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Ràng buộc pháp lý không thể trì hoãn (A), đóng dịch vụ (C) hay vi phạm pháp luật (D). Giải pháp phân vùng phạm vi theo ngưỡng luật định kết hợp cơ chế luồng dự phòng nhân sự (Human-in-the-loop Fallback) đảm bảo 100% tuân thủ pháp lý mà không làm đứt gãy dịch vụ."
  },
  {
    track: 0,
    id: "Q0-16",
    level: 2,
    q: "Trong dự án số hóa quy trình bồi thường bảo hiểm, Trưởng phòng Giám định (SME chủ chốt) cố tình cung cấp thiếu các quy tắc nghiệp vụ ngoại lệ phức tạp vì lo sợ hệ thống tự động hóa STP (Straight-Through Processing) sẽ cắt giảm nhân sự của phòng. Dự án đang bước vào giai đoạn chốt SRS. BA xử lý tình huống này thế nào?",
    opts: [
      "Bỏ qua các trường hợp ngoại lệ đó và chốt SRS theo những gì đã được cung cấp để bảo vệ tiến độ cá nhân.",
      "Gửi email khiển trách Trưởng phòng Giám định và CC cho Tổng giám đốc công ty để gây áp lực hành chính.",
      "Phân tích dữ liệu log lịch sử bồi thường 2 năm gần nhất để phát hiện độc lập các ca xử lý dị biệt; đồng thời làm việc với Ban dự án để truyền thông rõ vai trò mới của đội giám định là tập trung thẩm định các vụ gian lận cao cấp thay vì bị sa thải.",
      "Tự sáng tạo ra các quy tắc nghiệp vụ theo phỏng đoán của mình mà không cần sự xác nhận của đội giám định."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Senior BA giải quyết bài toán con người và dữ liệu song song: dùng Data Analytics để phát hiện sự thật khách quan (không phụ thuộc lời nói), đồng thời tháo gỡ tâm lý lo âu bằng chiến lược quản trị thay đổi (Change Management)."
  },
  {
    track: 0,
    id: "Q0-17",
    level: 2,
    q: "Hợp đồng dự án phần mềm theo hình thức Trọn gói (Fixed-Price). Đúng 1 tuần trước đợt UAT cuối cùng, Khách hàng yêu cầu bổ sung phân hệ phê duyệt đa chi nhánh với ma trận hạn mức phức tạp, tuyên bố 'nếu không có chức năng này thì phần mềm không thể đưa vào sử dụng thực tế'. BA cần xử lý theo quy trình nào?",
    opts: [
      "Đồng ý làm thêm miễn phí ngay lập tức vì sợ khách hàng không ký biên bản nghiệm thu.",
      "Lập tức từ chối và tuyên bố đây không phải việc của BA mà là việc của Giám đốc dự án.",
      "Ghi nhận yêu cầu, tiến hành phân tích tác động (Impact Analysis) đến tiến độ/chi phí/kiến trúc, đối chiếu lại với Phạm vi hợp đồng đã ký (Scope Baseline) và trình lên Ban Quản lý thay đổi (Change Control Board) để đề xuất đưa vào Phase 2 hoặc ký phụ lục hợp đồng phát sinh.",
      "Xóa bớt các tính năng bảo mật đã hoàn thành để lấy thời gian bù vào làm tính năng mới mà không báo cáo cho khách hàng."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Trong hợp đồng Fixed-Price, bất kỳ thay đổi nào cũng phải tuân thủ quy trình Quản lý Thay đổi (Change Management Process): phân tích tác động, đối chiếu baseline và trình CCB quyết định chi phí/thời gian phát sinh."
  },
  {
    track: 0,
    id: "Q0-18",
    level: 2,
    q: "Hệ thống Quản lý Cảng biển (TOS): Dữ liệu danh sách container (Manifest) từ hãng tàu quốc tế thường bị trễ 30-45 phút do đường truyền vệ tinh, trong khi Hải quan cảng bắt buộc hệ thống phải khóa dữ liệu hạ bãi trước 2 giờ khi tàu cập phao số 0. Rủi ro phạt chậm tàu lên tới $50,000/giờ. Giải pháp nghiệp vụ nào dung hòa được hai ràng buộc này?",
    opts: [
      "Từ chối cho tàu cập cảng cho đến khi hãng tàu gửi đủ 100% dữ liệu chính thức qua mạng.",
      "Thiết kế cơ chế 'Pre-Manifest Provisional Ingestion': Cho phép nạp dữ liệu tạm thời để phân bổ bãi sơ bộ, kèm quy tắc reconciliation đối soát tự động khi dữ liệu chính thức cập bến và cơ chế cảnh báo ngoại lệ ưu tiên cao cho các container có sai lệch vị trí.",
      "Yêu cầu Hải quan hủy bỏ quy định bắt buộc khóa dữ liệu trước 2 giờ.",
      "Cho công nhân bốc dỡ toàn bộ container xuống cầu tàu mà không cần ghi nhận vị trí trên phần mềm."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Cả hãng tàu và hải quan đều có các ràng buộc bất khả kháng. Giải pháp nạp dữ liệu tạm thời (Provisional state) kết hợp đối soát tự động (Automated Reconciliation) giúp tối ưu hóa bãi mà không làm gián đoạn tàu và không vi phạm quy định cảng vụ."
  },
  {
    track: 0,
    id: "Q0-19",
    level: 2,
    q: "Dự án chuyển đổi dữ liệu 10 năm của Bệnh viện đa khoa sang hệ thống EMR mới: 15% hồ sơ bệnh án cũ thiếu số định danh CCCD và có nhiều bệnh nhân trùng cả Họ tên và Ngày tháng năm sinh. Quy chế ngành Y tế nghiêm cấm gộp nhầm hồ sơ vì nguy hiểm tính mạng. BA nên xác lập quy tắc chuyển đổi dữ liệu (Data Migration Rules) như thế nào?",
    opts: [
      "Tự động gộp tất cả bệnh nhân trùng Họ tên và Ngày sinh vào làm một hồ sơ duy nhất để tiết kiệm dung lượng lưu trữ.",
      "Xóa bỏ toàn bộ 15% hồ sơ cũ này vì dữ liệu không đạt chuẩn chất lượng.",
      "Thiết lập cơ chế tách biệt thành các hồ sơ độc lập có gắn cờ 'Cần xác thực tại chỗ (Pending Physical Verification)'. Khi bệnh nhân đến khám lần tới, hệ thống bắt buộc nhân viên lễ tân đối chiếu sổ bảo hiểm/giấy tờ gốc trước khi thực hiện liên kết hồ sơ.",
      "Gán ngẫu nhiên một số CCCD giả lập cho các hồ sơ thiếu để vượt qua validation của hệ thống mới."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Trong ngành y tế, an toàn tính mạng người bệnh là tối thượng. Tách riêng hồ sơ kèm cờ xác thực ngoại tuyến khi tái khám là giải pháp an toàn tuyệt đối, tránh thảm họa gộp nhầm tiền sử dị ứng thuốc giữa hai bệnh nhân trùng tên."
  },
  {
    track: 0,
    id: "Q0-20",
    level: 2,
    q: "Sau 3 tháng go-live hệ thống ERP quản lý tài sản, báo cáo kiểm toán chỉ ra: 100% chức năng phần mềm đạt nghiệm thu kỹ thuật, nhưng tỷ lệ nhập liệu thực tế chỉ đạt 28%, 72% tài sản phát sinh vẫn được theo dõi bằng bảng tính Excel bên ngoài. Bước hành động phân tích tiếp theo của Lead BA để giải cứu dự án là gì?",
    opts: [
      "Khẳng định trách nhiệm của đội phần mềm đã kết thúc vì đã có biên bản nghiệm thu kỹ thuật ký đóng dấu.",
      "Yêu cầu Ban Giám đốc xóa phần mềm Excel khỏi máy tính của toàn bộ nhân viên công ty.",
      "Dẫn dắt cuộc rà soát sau triển khai (Post-Implementation Review): Phân tích chi tiết rào cản thao tác (UX friction, số lượng bước nhập liệu quá dài, thiếu tính năng import hàng loạt) và thiết kế lộ trình cải tiến tập trung vào tính tiện dụng và tích hợp tự động.",
      "Đề xuất thanh lý hợp đồng phần mềm hiện tại và lập dự án mới để mua một gói ERP đắt tiền hơn."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Nghiệm thu kỹ thuật không đồng nghĩa với thành công kinh doanh. Senior BA chịu trách nhiệm về Value Realization (Hiện thực hóa giá trị), phải trực tiếp phân tích rào cản ứng dụng (Adoption Barrier) để cải tiến giải pháp đạt được mục tiêu ban đầu."
  }
];
