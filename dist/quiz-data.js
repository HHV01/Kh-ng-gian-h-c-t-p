// Ngân hàng 200 câu hỏi trắc nghiệm Business Analysis (BA) chuẩn mực
// 10 chủ đề x 20 câu hỏi (5 Nền tảng · 8 Vận dụng · 7 Nâng cao)
// Tự động sinh bởi build-quiz.cjs

const quizBank = [
  {
    "track": 0,
    "id": "Q0-01",
    "level": 0,
    "q": "Theo chuẩn BABOK v3, bản chất cốt lõi của hoạt động Phân tích Nghiệp vụ (Business Analysis) là gì?",
    "opts": [
      "Lập trình và xây dựng kiến trúc kỹ thuật chi tiết cho phần mềm doanh nghiệp.",
      "Thực hành tạo ra sự thay đổi trong tổ chức bằng cách xác định nhu cầu và đề xuất giải pháp mang lại giá trị cho các bên liên quan.",
      "Quản lý tiến độ dự án, ngân sách và phân bổ nguồn lực kỹ thuật cho đội phát triển.",
      "Kiểm thử hệ thống và đảm bảo mã nguồn phần mềm không còn lỗi trước khi phát hành."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B theo định nghĩa chuẩn BABOK v3 Guide. Phương án C là vai trò của Project Manager, A là của Software Architect/Dev, còn D thuộc về QA/QC."
  },
  {
    "track": 0,
    "id": "Q0-02",
    "level": 0,
    "q": "Hệ thống phân cấp yêu cầu theo chuẩn BABOK v3 bao gồm 4 tầng nào sau đây theo đúng trình tự từ tổng quát đến chi tiết?",
    "opts": [
      "User Requirements ➔ System Requirements ➔ Functional Requirements ➔ Non-functional Requirements.",
      "Business Requirements ➔ Stakeholder Requirements ➔ Solution Requirements (FR/NFR) ➔ Transition Requirements.",
      "Business Goals ➔ Product Backlog ➔ User Stories ➔ Tasks.",
      "Customer Needs ➔ Functional Specs ➔ Technical Specs ➔ Test Cases."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. BABOK v3 phân loại 4 cấp độ: Yêu cầu kinh doanh (Business), Yêu cầu các bên liên quan (Stakeholder), Yêu cầu giải pháp (Solution: chức năng và phi chức năng) và Yêu cầu chuyển giao (Transition). Phương án A và C chỉ là cách gọi theo thói quen của Agile hoặc kỹ thuật."
  },
  {
    "track": 0,
    "id": "Q0-03",
    "level": 0,
    "q": "Trong ma trận phân tích Stakeholder theo Quyền lực & Mức độ quan tâm (Mendelow's Matrix), nhóm có 'Quyền lực cao (High Power) nhưng Mức độ quan tâm thấp (Low Interest)' cần được quản lý theo chiến lược nào?",
    "opts": [
      "Quản lý chặt chẽ (Manage Closely) qua các cuộc họp tiến độ hàng tuần.",
      "Làm cho họ hài lòng (Keep Satisfied) bằng thông tin súc tích, tránh làm phiền việc vận hành.",
      "Chỉ cần giám sát tối thiểu (Monitor with minimum effort) khi có biến động lớn.",
      "Thông báo định kỳ chi tiết (Keep Informed) về các quyết định kỹ thuật nội bộ."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B (Keep Satisfied). Nhóm quyền lực cao nhưng ít quan tâm (như CFO, Ban Pháp chế) cần báo cáo cô đọng, đáp ứng kỳ vọng của họ mà không kéo vào họp vụn vặt. Phương án A dành cho High Power / High Interest, còn D dành cho Low Power / High Interest."
  },
  {
    "track": 0,
    "id": "Q0-04",
    "level": 0,
    "q": "Phát biểu nào sau đây phân định chính xác nhất ranh giới trách nhiệm giữa Business Analyst (BA) và Product Owner (PO) trong dự án?",
    "opts": [
      "BA chịu trách nhiệm nghiệm thu sản phẩm cuối cùng, còn PO chịu trách nhiệm viết toàn bộ tài liệu đặc tả chi tiết.",
      "PO sở hữu tầm nhìn sản phẩm và quyền ưu tiên tính năng theo giá trị kinh doanh; BA đi sâu phân tích vấn đề, làm rõ yêu cầu và logic nghiệp vụ.",
      "BA chỉ làm việc trong mô hình Thác nước (Waterfall), còn PO là vai trò bắt buộc thay thế hoàn toàn BA trong mô hình Agile.",
      "PO chỉ quản lý ngân sách và hợp đồng với khách hàng, còn BA quản lý việc phân chia task cho đội lập trình viên."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. PO chịu trách nhiệm về Product Backlog, thứ tự ưu tiên và tối ưu hóa ROI; BA là người đồng hành phân tích sâu logic, quy tắc nghiệp vụ, phân tích tác động và kết nối kỹ thuật. Phương án C sai vì BA vẫn đóng vai trò quan trọng trong Agile."
  },
  {
    "track": 0,
    "id": "Q0-05",
    "level": 0,
    "q": "Kỹ thuật '5 Whys' và Biểu đồ xương cá (Ishikawa Diagram) được BA sử dụng chủ yếu trong giai đoạn nào?",
    "opts": [
      "Đặc tả các ca kiểm thử hồi quy (Regression Testing) trong giai đoạn UAT.",
      "Phân tích nguyên nhân gốc rễ (Root Cause Analysis) để hiểu vấn đề thực sự trước khi đề xuất giải pháp.",
      "Ước lượng độ phức tạp (Story Points) của User Story trong phiên Sprint Planning.",
      "Vẽ sơ đồ luồng dữ liệu (Data Flow Diagram) giữa các thành phần kiến trúc Microservices."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. 5 Whys và Ishikawa là các kỹ thuật chuẩn để truy tìm căn nguyên cốt lõi (Root Cause) của vấn đề kinh doanh, tránh việc chỉ chữa phần ngọn hoặc đưa ra giải pháp sai hướng."
  },
  {
    "track": 0,
    "id": "Q0-06",
    "level": 1,
    "q": "Giám đốc Vận hành một công ty thương mại điện tử nói với BA: 'Hệ thống giao hàng quá chậm, chúng ta cần mua thêm 15 xe tải mới ngay lập tức'. Hành động đúng đắn tiếp theo của BA là gì?",
    "opts": [
      "Ghi nhận ngay yêu cầu 'Mua 15 xe tải' vào tài liệu Software Requirements Specification (SRS) phần phạm vi dự án.",
      "Đặt câu hỏi đào sâu nguyên nhân khiến giao hàng chậm (tắc đường, khâu soạn hàng tại kho trễ, hay năng lực vận chuyển thiếu) để xác định đúng vấn đề kinh doanh.",
      "Từ chối yêu cầu của Giám đốc vì cho rằng việc mua xe tải thuộc phạm vi đầu tư tài sản, không liên quan đến phần mềm.",
      "Lập tức gửi yêu cầu báo giá sang phòng Mua hàng để kịp tiến độ mua sắm theo yêu cầu của Giám đốc."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Đây là lỗi phổ biến 'Solution Bias' (stakeholder đưa ra giải pháp thay vì vấn đề). BA phải khơi gợi để tìm ra vấn đề thực sự: nếu nghẽn do khâu đóng gói kho mất 4 tiếng thì mua thêm 15 xe tải vẫn không giải quyết được thời gian giao hàng."
  },
  {
    "track": 0,
    "id": "Q0-07",
    "level": 1,
    "q": "Trong dự án số hóa hồ sơ nhân sự, Trưởng phòng Pháp chế có quyền phủ quyết dự án (High Power) nhưng từ chối tham gia các buổi họp lấy yêu cầu hàng tuần vì quá bận (Low Interest). Kế hoạch làm việc nào phù hợp nhất?",
    "opts": [
      "Tiếp tục gửi lời mời họp lịch cố định hàng tuần và ghi nhận vắng mặt nếu Trưởng phòng không đến.",
      "Gửi tóm tắt cô đọng qua email về các điều khoản bảo mật dữ liệu, xin lịch hẹn riêng 30 phút đúng trọng tâm và gửi trước dự thảo quy chế.",
      "Tự ý quyết định các quy tắc bảo mật theo suy đoán và đợi đến khi kiểm toán độc lập phát hiện sai sót.",
      "Loại bỏ bộ phận Pháp chế ra khỏi danh sách stakeholder vì họ không hợp tác chủ động trong giai đoạn đầu."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B (Chiến lược Keep Satisfied). Với stakeholder nhóm này, việc spam lịch họp tuần (A) sẽ gây ức chế. BA cần chuẩn bị nội dung súc tích, nhắm trúng mối quan tâm pháp lý để họ phản hồi nhanh và hiệu quả."
  },
  {
    "track": 0,
    "id": "Q0-08",
    "level": 1,
    "q": "Phát biểu yêu cầu: 'Hệ thống phải xuất hóa đơn điện tử định dạng XML theo chuẩn Thông tư 78 của Tổng cục Thuế trong vòng 2 giây cho 300 giao dịch đồng thời.' Phát biểu này chứa đựng các loại yêu cầu nào?",
    "opts": [
      "Chỉ bao gồm Yêu cầu chức năng (Functional Requirement).",
      "Bao gồm cả Yêu cầu nghiệp vụ (Tuân thủ Thông tư 78), Yêu cầu chức năng (Xuất XML) và Yêu cầu phi chức năng (Thời gian phản hồi và khả năng chịu tải).",
      "Chỉ bao gồm Yêu cầu chuyển đổi hệ thống (Transition Requirement).",
      "Là một User Story hoàn chỉnh theo tiêu chuẩn INVEST."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Phát biểu tích hợp cả quy định pháp lý bắt buộc (Business Rule/Compliance), tính năng cụ thể (FR: xuất hóa đơn XML) và ràng buộc chất lượng dịch vụ (NFR: hiệu năng 2s, concurrency 300 CCU)."
  },
  {
    "track": 0,
    "id": "Q0-09",
    "level": 1,
    "q": "Khi phỏng vấn Giám đốc Nhân sự về phần mềm chấm công mới, stakeholder yêu cầu: 'Hệ thống phải tự động trừ 500.000đ vào lương nếu nhân viên đi muộn 3 lần trong tháng'. BA phát hiện quy định này trái với Luật Lao động hiện hành. BA nên phản ứng thế nào?",
    "opts": [
      "Vẫn đặc tả và chuyển cho Dev lập trình vì tôn trọng nguyên tắc 'khách hàng là thượng đế'.",
      "Lập tức tranh cãi gay gắt và từ chối nói chuyện tiếp với stakeholder trong buổi phỏng vấn.",
      "Nêu rõ rủi ro pháp lý theo Luật Lao động hiện hành, đề xuất xin ý kiến thẩm định của Bộ phận Pháp chế và gợi ý cơ chế trừ điểm thi đua thay vì trừ lương trực tiếp.",
      "Bỏ qua yêu cầu này một cách im lặng mà không ghi nhận hay phản hồi lại cho stakeholder."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. BA cần thể hiện năng lực tư vấn chuyên nghiệp và đạo đức nghề nghiệp: cảnh báo rủi ro tuân thủ (Compliance Risk), kết nối bộ phận chuyên môn (Pháp chế) và đề xuất phương án thay thế khả thi về mặt quản trị."
  },
  {
    "track": 0,
    "id": "Q0-10",
    "level": 1,
    "q": "Dự án triển khai cổng mua sắm nội bộ (E-Procurement). Ban Giám đốc muốn đo lường thành công của dự án theo tư duy Outcome (kết quả mang lại) thay vì Output (đầu ra sản phẩm). Đâu là chỉ số phù hợp nhất?",
    "opts": [
      "Bàn giao đủ 25 màn hình chức năng và 100 trang tài liệu hướng dẫn sử dụng đúng hạn hợp đồng.",
      "Thời gian phê duyệt đơn mua hàng (PR/PO Cycle Time) giảm từ 7 ngày xuống 1.5 ngày và chi phí mua sắm tiết kiệm được 12% qua đấu thầu điện tử.",
      "Số lượng dòng mã nguồn (LOC) của hệ thống đạt trên 50.000 dòng chuẩn kiến trúc sạch.",
      "Đội dự án tổ chức đủ 10 buổi đào tạo cho 500 nhân viên trong tháng đầu tiên."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Output là sản phẩm bàn giao (màn hình, tài liệu, dòng code ở A, C, D). Outcome là tác động đo lường được lên hiệu quả kinh doanh thực tế (thời gian chu kỳ mua hàng giảm, chi phí tiết kiệm được)."
  },
  {
    "track": 0,
    "id": "Q0-11",
    "level": 1,
    "q": "Trong dự án chuyển đổi hệ thống Core Banking sang nền tảng mới, đâu là một ví dụ điển hình về Yêu cầu chuyển giao (Transition Requirement)?",
    "opts": [
      "Hệ thống phải cho phép khách hàng chuyển tiền 24/7 qua mã QR động.",
      "Quy trình trích xuất, làm sạch và chuyển đổi 5 triệu tài khoản số dư cũ từ hệ thống kế thừa sang hệ thống mới trong đêm chuyển giao (Cutover Window 6 tiếng).",
      "Giao diện ứng dụng phải hỗ trợ chế độ tương phản cao cho người khiếm thị theo chuẩn WCAG.",
      "Hệ thống phải mã hóa dữ liệu thẻ tín dụng theo chuẩn quốc tế PCI-DSS."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Transition Requirements là các yêu cầu chỉ có giá trị tạm thời trong giai đoạn chuyển đổi (như script migration, đào tạo chuyển giao, quy trình song song), không còn tồn tại khi hệ thống mới vận hành ổn định."
  },
  {
    "track": 0,
    "id": "Q0-12",
    "level": 1,
    "q": "Kỹ thuật Phân tích khoảng cách (GAP Analysis) giúp ích nhiều nhất cho BA khi nào?",
    "opts": [
      "Khi viết câu lệnh SQL để truy vấn dữ liệu từ nhiều bảng quan hệ khác nhau.",
      "Khi so sánh giữa trạng thái hiện tại (Current State) và trạng thái mong muốn (Future State) để xác định phạm vi công việc cần thực hiện.",
      "Khi thiết kế màu sắc và icon cho hệ thống Design System trên phần mềm Figma.",
      "Khi tính toán vận tốc hoàn thành công việc (Velocity) của đội Scrum sau mỗi Sprint."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. GAP Analysis là kỹ thuật nền tảng để trả lời câu hỏi: Hiện tại chúng ta đang ở đâu? Mục tiêu tương lai là gì? Khoảng trống (Gap) cần lấp đầy bao gồm những năng lực, quy trình hay hệ thống nào."
  },
  {
    "track": 0,
    "id": "Q0-13",
    "level": 1,
    "q": "Nhân viên vận hành kho từ chối sử dụng thiết bị quét mã vạch mới và tiếp tục ghi chép số liệu xuất nhập kho bằng sổ tay. Phương pháp tiếp cận tốt nhất của BA là gì?",
    "opts": [
      "Báo cáo ngay lên Ban Giám đốc để áp dụng hình thức kỷ luật trừ lương các nhân viên chống đối.",
      "Quan sát trực tiếp tại kho (Job Shadowing) và phỏng vấn thấu cảm để tìm hiểu lý do (thiết bị quá nặng, phản hồi quét chậm, hay chữ quá nhỏ trong bóng tối) từ đó đề xuất điều chỉnh.",
      "Khóa toàn bộ quy trình giấy tờ thủ công để ép buộc nhân viên bắt buộc phải dùng máy quét.",
      "Bỏ mặc vì coi đó là vấn đề nội bộ của Trưởng kho, không thuộc trách nhiệm của đội dự án phần mềm."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Kháng cự thay đổi (Change Resistance) thường bắt nguồn từ bất tiện thực tế chưa được thấu hiểu (Usability, môi trường làm việc). BA cần tiếp cận hiện trường tìm căn nguyên thay vì áp đặt quyền lực (A, C)."
  },
  {
    "track": 0,
    "id": "Q0-14",
    "level": 2,
    "q": "Dự án Smart Warehouse tự động hóa đối mặt xung đột gay gắt: CFO yêu cầu cắt giảm 25% chi phí đầu tư ban đầu (CAPEX), trong khi COO kiên quyết hệ thống phải đạt chuẩn giao hàng hỏa tốc trong 2 giờ với 100% đơn hàng. Ràng buộc thời gian go-live còn 3 tháng. Là Lead BA, bạn khuyến nghị chiến lược phạm vi nào?",
    "opts": [
      "Ủng hộ CFO cắt bỏ toàn bộ hệ thống băng chuyền tự động và quay về quy trình nhặt hàng thủ công bằng giấy.",
      "Ủng hộ COO và yêu cầu Ban Giám đốc phê duyệt tăng 40% ngân sách vượt định mức để đảm bảo chất lượng tối đa.",
      "Áp dụng phân tích Pareto (80/20): Tự động hóa phân vùng cho top 20% SKU bán chạy nhất chiếm 80% lưu lượng để đảm bảo cam kết 2 giờ của COO; các SKU cồng kềnh/bán chậm giữ quy trình bán tự động để đáp ứng ngân sách của CFO.",
      "Trì hoãn dự án vô thời hạn đến khi CFO và COO tự tìm được tiếng nói chung trên bàn họp Ban Giám đốc."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Phân tích Pareto và phân tầng giải pháp (Hybrid Automation) là nghệ thuật đánh đổi kinh điển của Senior BA khi gặp xung đột lợi ích cốt lõi giữa chi phí và tốc độ vận hành, giúp đáp ứng cả hai mục tiêu khả thi."
  },
  {
    "track": 0,
    "id": "Q0-15",
    "level": 2,
    "q": "Cổng thanh toán điện tử của công ty Fintech phải tuân thủ quy định bắt buộc của Ngân hàng Nhà nước về xác thực sinh trắc học trước ngày 01/07 (còn 4 tuần), nhưng đối tác cung cấp dịch vụ OCR/NFC thông báo API mới nhất chưa ổn định và có thể lỗi 15% cuộc gọi. Dự án chịu ràng buộc pháp lý phạt nặng nếu chậm hạn. BA nên đề xuất giải pháp nào?",
    "opts": [
      "Xin gia hạn với Ngân hàng Nhà nước thêm 6 tháng để chờ nhà cung cấp công nghệ hoàn thiện API.",
      "Triển khai xác thực sinh trắc học cho giao dịch vượt ngưỡng bắt buộc theo luật (ví dụ trên 10 triệu đồng), kết hợp luồng dự phòng (Fallback) tự động chuyển sang xác thực khuôn mặt qua video call với nhân viên trực tổng đài khi API gặp lỗi.",
      "Tắt hoàn toàn tính năng chuyển tiền trên ứng dụng di động để tránh bị xử phạt pháp lý.",
      "Bỏ qua bước xác thực sinh trắc học và làm giả mạo bản ghi nhật ký để qua mắt cơ quan thanh tra."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Ràng buộc pháp lý không thể trì hoãn (A), đóng dịch vụ (C) hay vi phạm pháp luật (D). Giải pháp phân vùng phạm vi theo ngưỡng luật định kết hợp cơ chế luồng dự phòng nhân sự (Human-in-the-loop Fallback) đảm bảo 100% tuân thủ pháp lý mà không làm đứt gãy dịch vụ."
  },
  {
    "track": 0,
    "id": "Q0-16",
    "level": 2,
    "q": "Trong dự án số hóa quy trình bồi thường bảo hiểm, Trưởng phòng Giám định (SME chủ chốt) cố tình cung cấp thiếu các quy tắc nghiệp vụ ngoại lệ phức tạp vì lo sợ hệ thống tự động hóa STP (Straight-Through Processing) sẽ cắt giảm nhân sự của phòng. Dự án đang bước vào giai đoạn chốt SRS. BA xử lý tình huống này thế nào?",
    "opts": [
      "Bỏ qua các trường hợp ngoại lệ đó và chốt SRS theo những gì đã được cung cấp để bảo vệ tiến độ cá nhân.",
      "Gửi email khiển trách Trưởng phòng Giám định và CC cho Tổng giám đốc công ty để gây áp lực hành chính.",
      "Phân tích dữ liệu log lịch sử bồi thường 2 năm gần nhất để phát hiện độc lập các ca xử lý dị biệt; đồng thời làm việc với Ban dự án để truyền thông rõ vai trò mới của đội giám định là tập trung thẩm định các vụ gian lận cao cấp thay vì bị sa thải.",
      "Tự sáng tạo ra các quy tắc nghiệp vụ theo phỏng đoán của mình mà không cần sự xác nhận của đội giám định."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Senior BA giải quyết bài toán con người và dữ liệu song song: dùng Data Analytics để phát hiện sự thật khách quan (không phụ thuộc lời nói), đồng thời tháo gỡ tâm lý lo âu bằng chiến lược quản trị thay đổi (Change Management)."
  },
  {
    "track": 0,
    "id": "Q0-17",
    "level": 2,
    "q": "Hợp đồng dự án phần mềm theo hình thức Trọn gói (Fixed-Price). Đúng 1 tuần trước đợt UAT cuối cùng, Khách hàng yêu cầu bổ sung phân hệ phê duyệt đa chi nhánh với ma trận hạn mức phức tạp, tuyên bố 'nếu không có chức năng này thì phần mềm không thể đưa vào sử dụng thực tế'. BA cần xử lý theo quy trình nào?",
    "opts": [
      "Đồng ý làm thêm miễn phí ngay lập tức vì sợ khách hàng không ký biên bản nghiệm thu.",
      "Lập tức từ chối và tuyên bố đây không phải việc của BA mà là việc của Giám đốc dự án.",
      "Ghi nhận yêu cầu, tiến hành phân tích tác động (Impact Analysis) đến tiến độ/chi phí/kiến trúc, đối chiếu lại với Phạm vi hợp đồng đã ký (Scope Baseline) và trình lên Ban Quản lý thay đổi (Change Control Board) để đề xuất đưa vào Phase 2 hoặc ký phụ lục hợp đồng phát sinh.",
      "Xóa bớt các tính năng bảo mật đã hoàn thành để lấy thời gian bù vào làm tính năng mới mà không báo cáo cho khách hàng."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Trong hợp đồng Fixed-Price, bất kỳ thay đổi nào cũng phải tuân thủ quy trình Quản lý Thay đổi (Change Management Process): phân tích tác động, đối chiếu baseline và trình CCB quyết định chi phí/thời gian phát sinh."
  },
  {
    "track": 0,
    "id": "Q0-18",
    "level": 2,
    "q": "Hệ thống Quản lý Cảng biển (TOS): Dữ liệu danh sách container (Manifest) từ hãng tàu quốc tế thường bị trễ 30-45 phút do đường truyền vệ tinh, trong khi Hải quan cảng bắt buộc hệ thống phải khóa dữ liệu hạ bãi trước 2 giờ khi tàu cập phao số 0. Rủi ro phạt chậm tàu lên tới $50,000/giờ. Giải pháp nghiệp vụ nào dung hòa được hai ràng buộc này?",
    "opts": [
      "Từ chối cho tàu cập cảng cho đến khi hãng tàu gửi đủ 100% dữ liệu chính thức qua mạng.",
      "Thiết kế cơ chế 'Pre-Manifest Provisional Ingestion': Cho phép nạp dữ liệu tạm thời để phân bổ bãi sơ bộ, kèm quy tắc reconciliation đối soát tự động khi dữ liệu chính thức cập bến và cơ chế cảnh báo ngoại lệ ưu tiên cao cho các container có sai lệch vị trí.",
      "Yêu cầu Hải quan hủy bỏ quy định bắt buộc khóa dữ liệu trước 2 giờ.",
      "Cho công nhân bốc dỡ toàn bộ container xuống cầu tàu mà không cần ghi nhận vị trí trên phần mềm."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Cả hãng tàu và hải quan đều có các ràng buộc bất khả kháng. Giải pháp nạp dữ liệu tạm thời (Provisional state) kết hợp đối soát tự động (Automated Reconciliation) giúp tối ưu hóa bãi mà không làm gián đoạn tàu và không vi phạm quy định cảng vụ."
  },
  {
    "track": 0,
    "id": "Q0-19",
    "level": 2,
    "q": "Dự án chuyển đổi dữ liệu 10 năm của Bệnh viện đa khoa sang hệ thống EMR mới: 15% hồ sơ bệnh án cũ thiếu số định danh CCCD và có nhiều bệnh nhân trùng cả Họ tên và Ngày tháng năm sinh. Quy chế ngành Y tế nghiêm cấm gộp nhầm hồ sơ vì nguy hiểm tính mạng. BA nên xác lập quy tắc chuyển đổi dữ liệu (Data Migration Rules) như thế nào?",
    "opts": [
      "Tự động gộp tất cả bệnh nhân trùng Họ tên và Ngày sinh vào làm một hồ sơ duy nhất để tiết kiệm dung lượng lưu trữ.",
      "Xóa bỏ toàn bộ 15% hồ sơ cũ này vì dữ liệu không đạt chuẩn chất lượng.",
      "Thiết lập cơ chế tách biệt thành các hồ sơ độc lập có gắn cờ 'Cần xác thực tại chỗ (Pending Physical Verification)'. Khi bệnh nhân đến khám lần tới, hệ thống bắt buộc nhân viên lễ tân đối chiếu sổ bảo hiểm/giấy tờ gốc trước khi thực hiện liên kết hồ sơ.",
      "Gán ngẫu nhiên một số CCCD giả lập cho các hồ sơ thiếu để vượt qua validation của hệ thống mới."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Trong ngành y tế, an toàn tính mạng người bệnh là tối thượng. Tách riêng hồ sơ kèm cờ xác thực ngoại tuyến khi tái khám là giải pháp an toàn tuyệt đối, tránh thảm họa gộp nhầm tiền sử dị ứng thuốc giữa hai bệnh nhân trùng tên."
  },
  {
    "track": 0,
    "id": "Q0-20",
    "level": 2,
    "q": "Sau 3 tháng go-live hệ thống ERP quản lý tài sản, báo cáo kiểm toán chỉ ra: 100% chức năng phần mềm đạt nghiệm thu kỹ thuật, nhưng tỷ lệ nhập liệu thực tế chỉ đạt 28%, 72% tài sản phát sinh vẫn được theo dõi bằng bảng tính Excel bên ngoài. Bước hành động phân tích tiếp theo của Lead BA để giải cứu dự án là gì?",
    "opts": [
      "Khẳng định trách nhiệm của đội phần mềm đã kết thúc vì đã có biên bản nghiệm thu kỹ thuật ký đóng dấu.",
      "Yêu cầu Ban Giám đốc xóa phần mềm Excel khỏi máy tính của toàn bộ nhân viên công ty.",
      "Dẫn dắt cuộc rà soát sau triển khai (Post-Implementation Review): Phân tích chi tiết rào cản thao tác (UX friction, số lượng bước nhập liệu quá dài, thiếu tính năng import hàng loạt) và thiết kế lộ trình cải tiến tập trung vào tính tiện dụng và tích hợp tự động.",
      "Đề xuất thanh lý hợp đồng phần mềm hiện tại và lập dự án mới để mua một gói ERP đắt tiền hơn."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Nghiệm thu kỹ thuật không đồng nghĩa với thành công kinh doanh. Senior BA chịu trách nhiệm về Value Realization (Hiện thực hóa giá trị), phải trực tiếp phân tích rào cản ứng dụng (Adoption Barrier) để cải tiến giải pháp đạt được mục tiêu ban đầu."
  },
  {
    "track": 1,
    "id": "Q1-01",
    "level": 0,
    "q": "Theo BABOK v3, mục tiêu cốt lõi của hoạt động Khai thác Yêu cầu (Elicitation) là gì?",
    "opts": [
      "Chép lại nguyên văn tất cả lời nói của khách hàng vào biên bản cuộc họp dự án.",
      "Khơi gợi, khám phá và làm sáng tỏ những nhu cầu thực tế tiềm ẩn của các bên liên quan, thay vì chỉ đơn thuần thu thập các mong muốn bề nổi.",
      "Yêu cầu các bên liên quan tự viết tài liệu nghiệp vụ chi tiết rồi gửi cho đội phát triển phần mềm.",
      "Thuyết phục khách hàng chấp nhận các tính năng có sẵn trong thư viện mã nguồn của công ty."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Elicitation không phải là 'thu thập thụ động' (Gathering) mà là quá trình chủ động tương tác, khơi gợi (Draw out) để khám phá ra nhu cầu chưa được nói ra hoặc chưa rõ ràng của stakeholder. Phương án A là ghi chép thụ động, C đẩy việc cho khách, D mang tính áp đặt."
  },
  {
    "track": 1,
    "id": "Q1-02",
    "level": 0,
    "q": "Trong kỹ thuật Phỏng vấn (Interviewing), khi nào BA nên ưu tiên sử dụng 'Câu hỏi mở' (Open-ended Questions)?",
    "opts": [
      "Khi cần xác nhận dứt khoát một mốc thời gian hoặc một giá trị dữ liệu cụ thể (Có/Không).",
      "Ở giai đoạn đầu buổi phỏng vấn để khuyến khích stakeholder chia sẻ tự do về bối cảnh, quy trình hiện tại và những nỗi đau nghiệp vụ.",
      "Khi cần chốt lại biên bản cuộc họp để kết thúc buổi phỏng vấn nhanh chóng.",
      "Khi muốn kiểm tra kiến thức kỹ thuật của lập trình viên trong đội dự án."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Câu hỏi mở (như 'Anh/chị thường xử lý đơn hàng bị lỗi như thế nào?') kích thích người được phỏng vấn chia sẻ sâu về bối cảnh và cảm xúc. Câu hỏi đóng (A, C) phù hợp để xác nhận chi tiết hoặc chốt phương án ở cuối buổi."
  },
  {
    "track": 1,
    "id": "Q1-03",
    "level": 0,
    "q": "Vai trò trọng tâm của BA khi điều phối một phiên Hội thảo Yêu cầu (Requirements Workshop / JAD Session) là gì?",
    "opts": [
      "Là người đưa ra mọi quyết định nghiệp vụ thay cho các bên liên quan khi họ tranh cãi.",
      "Đóng vai trò người điều phối trung lập (Facilitator), giữ đúng mục tiêu chương trình, khuyến khích mọi người đóng góp và ghi nhận các đồng thuận cũng như bất đồng.",
      "Chỉ ngồi ghi chép biên bản và không được can thiệp vào tiến trình thảo luận của các phòng ban.",
      "Bảo vệ lập trường kỹ thuật của đội nhà và từ chối các yêu cầu phức tạp từ phía người dùng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Vai trò Facilitator đòi hỏi tính trung lập, hướng dẫn tiến trình để các bên tự thảo luận và đạt đồng thuận, không thiên vị hay tự quyết định thay stakeholder (A, D)."
  },
  {
    "track": 1,
    "id": "Q1-04",
    "level": 0,
    "q": "Kỹ thuật 'Quan sát thụ động' (Passive / Invisible Observation hay Fly-on-the-wall) khác với 'Quan sát chủ động' (Active Observation) ở điểm nào?",
    "opts": [
      "Quan sát thụ động chỉ theo dõi qua camera an ninh mà không đến hiện trường.",
      "Trong quan sát thụ động, BA theo dõi quy trình làm việc tự nhiên mà không ngắt lời hay đặt câu hỏi trong lúc người dùng thao tác; các thắc mắc được gom lại hỏi sau khi quan sát xong.",
      "Quan sát thụ động bắt buộc người dùng phải giải thích từng thao tác nhấp chuột ngay khi họ đang làm việc.",
      "Quan sát thụ động chỉ áp dụng cho lập trình viên khi viết code, không dùng cho người dùng nghiệp vụ."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Quan sát thụ động giúp BA nhìn thấy nhịp độ làm việc thực tế không bị can thiệp. Quan sát chủ động thì vừa xem vừa hỏi, dễ làm gián đoạn công việc nếu nhân viên đang thao tác ca làm việc gấp."
  },
  {
    "track": 1,
    "id": "Q1-05",
    "level": 0,
    "q": "Khi tiến hành Kỹ thuật Phân tích Tài liệu (Document Analysis) trong dự án nâng cấp hệ thống, nguồn tài liệu nào sau đây mang lại giá trị cao nhất về quy tắc nghiệp vụ thực tế?",
    "opts": [
      "Bài viết quảng cáo của phòng Marketing trên mạng xã hội về dịch vụ của công ty.",
      "Quy chế hoạt động, sổ tay vận hành hiện hành, tài liệu đặc tả hệ thống cũ kèm các báo cáo kiểm toán nghiệp vụ gần nhất.",
      "Sách giáo khoa lý thuyết quản trị kinh doanh đại cương.",
      "Hợp đồng lao động của các nhân viên đang làm việc tại phòng ban mục tiêu."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Tài liệu vận hành, đặc tả cũ và báo cáo kiểm toán phản ánh chính xác cấu trúc quy tắc, các trường hợp lỗi thường gặp và quy trình kinh doanh thực tế cần được kế thừa hoặc cải tiến."
  },
  {
    "track": 1,
    "id": "Q1-06",
    "level": 1,
    "q": "Trong buổi phỏng vấn quy trình bồi thường bảo hiểm, bác sĩ giám định liên tục yêu cầu: 'Tôi muốn một nút bấm màu tím thật to ở góc phải màn hình để phê duyệt nhanh'. Kỹ thuật phản hồi khơi gợi nào chuẩn xác nhất?",
    "opts": [
      "Ghi nhận ngay vào tài liệu: 'Hệ thống phải có nút bấm màu tím kích thước 100x50px ở góc phải'.",
      "Từ chối thẳng thừng vì cho rằng bác sĩ không có chuyên môn về thiết kế giao diện người dùng (UI/UX).",
      "Hỏi đào sâu: 'Bác sĩ cần những thông tin quan trọng nào hiển thị trước mắt trước khi ra quyết định phê duyệt, và điều gì khiến quy trình hiện tại mất nhiều thời gian nhất?'.",
      "Đổi màu toàn bộ giao diện sang màu tím để làm vừa lòng bác sĩ giám định."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Khách hàng thường dùng ngôn ngữ giải pháp giao diện để diễn đạt nhu cầu về 'sự thuận tiện và tốc độ'. BA cần khơi gợi thông tin quyết định đằng sau nút bấm đó thay vì chấp nhận giải pháp bề nổi (A) hay đối đầu (B)."
  },
  {
    "track": 1,
    "id": "Q1-07",
    "level": 1,
    "q": "Khi phỏng vấn Đội trưởng điều phối kho về cách phân bổ hàng lên giá kệ, người này trả lời: 'Quy trình ở đây đơn giản lắm, chúng tôi xếp hàng hoàn toàn theo cảm tính và thói quen lâu năm'. BA nên chọn kỹ thuật nào tiếp theo để làm rõ logic ngầm này?",
    "opts": [
      "Tin tưởng lời nói của Đội trưởng và ghi vào đặc tả: 'Việc xếp hàng do nhân viên tự chọn vị trí ngẫu nhiên'.",
      "Kết hợp Quan sát thực địa (Observation) và Phân tích dữ liệu lịch sử xuất nhập (Data Analysis) để tìm ra các quy luật ngầm (như hàng nặng để tầng dưới, hàng bán chạy để gần cửa).",
      "Yêu cầu Đội trưởng kho phải học một khóa đào tạo về quản lý kho hàng chuẩn quốc tế rồi mới phỏng vấn tiếp.",
      "Bỏ qua phân hệ quản lý vị trí giá kệ và chuyển sang làm phân hệ báo cáo tài chính."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Kiến thức ngầm (Tacit Knowledge) của người có kinh nghiệm thường khó diễn đạt bằng lời. Kết hợp quan sát hành vi thực tế và phân tích dữ liệu lịch sử giúp BA mô hình hóa được các thuật toán phân bổ giá kệ khoa học."
  },
  {
    "track": 1,
    "id": "Q1-08",
    "level": 1,
    "q": "Trong Workshop khai thác yêu cầu phân hệ phê duyệt tín dụng, Giám đốc Kinh doanh và Giám đốc Quản trị Rủi ro tranh cãi nảy lửa và không thể thống nhất về hạn mức cho vay tự động không cần thẩm định. Là Facilitator, BA nên làm gì?",
    "opts": [
      "Bỏ phiếu biểu quyết giữa tất cả các thành viên tham gia trong phòng họp để lấy số đông.",
      "Tự mình quyết định một con số hạn mức trung bình cộng giữa hai bên để tiếp tục cuộc họp.",
      "Ghi nhận hai quan điểm vào danh sách 'Các vấn đề mở (Open Issues)', làm rõ mục tiêu kinh doanh chung (Tăng trưởng tín dụng có kiểm soát) và xin ý kiến chỉ đạo từ Sponsor/Hội đồng tín dụng sau buổi họp.",
      "Hủy bỏ phân hệ cho vay tự động và giữ nguyên quy trình thẩm định hồ sơ giấy."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Facilitator không tự quyết định (B) hay dùng số đông ép buộc (A) trong các quyết định chính sách rủi ro. Việc ghi vào Open Issues và leo thang lên người có thẩm quyền phê duyệt chiến lược (Sponsor) là chuẩn mực quản trị."
  },
  {
    "track": 1,
    "id": "Q1-09",
    "level": 1,
    "q": "BA cần khảo sát ý kiến của 2.000 tài xế giao hàng công nghệ về ứng dụng điều hướng mới. Để tỷ lệ hoàn thành khảo sát (Response Rate) cao và dữ liệu có chất lượng, tiêu chí thiết kế bảng hỏi nào là phù hợp nhất?",
    "opts": [
      "Tạo bảng hỏi 50 câu tự luận chuyên sâu để tài xế có cơ hội viết cảm nghĩ dài dòng.",
      "Thiết kế bảng hỏi ngắn gọn từ 7–10 câu trắc nghiệm đa lựa chọn, tối ưu hóa giao diện di động, dùng từ ngữ bình dân dễ hiểu và có phần thưởng khuyến khích nhỏ.",
      "Gửi bảng câu hỏi qua thư bưu điện đến địa chỉ thường trú của từng tài xế.",
      "Chỉ phỏng vấn 1 tài xế quen biết rồi suy diễn cho toàn bộ 2.000 tài xế còn lại."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Đối tượng tài xế làm việc di động ngoài đường cần bảng khảo sát súc tích, dễ bấm trên smartphone, không tốn thời gian đọc hiểu văn bản học thuật."
  },
  {
    "track": 1,
    "id": "Q1-10",
    "level": 1,
    "q": "Khi đọc quy chế nội bộ, tài liệu ghi rõ: 'Mọi đề xuất chi tiêu trên 10 triệu phải có chữ ký của 3 Giám đốc khối'. Nhưng khi phỏng vấn thực tế, các nhân viên đều nói: 'Chúng tôi chỉ nhắn tin Zalo cho Phó Tổng Giám đốc duyệt là thủ quỹ chi tiền'. BA nên ghi nhận phát hiện này ra sao?",
    "opts": [
      "Chỉ ghi nhận quy trình nhắn tin Zalo vào SRS vì đó là những gì đang diễn ra trong thực tế.",
      "Chỉ ghi nhận quy chế giấy vì đó là văn bản pháp lý chính thống của công ty.",
      "Mô hình hóa sự sai lệch giữa Quy trình trên giấy (De jure) và Quy trình thực tế (De facto), phân tích rủi ro kiểm soát nội bộ và thảo luận với Ban Kiểm soát cùng Sponsor để thống nhất quy trình chuẩn To-Be.",
      "Báo cáo thanh tra công ty để xử lý kỷ luật toàn bộ nhân viên và thủ quỹ."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Nhiệm vụ của BA là nhận diện khoảng cách giữa quy chế và thực tiễn để chuẩn hóa. Làm theo Zalo (A) gây rủi ro kiểm toán, rập khuôn theo giấy (B) sẽ tạo ra phần mềm bị tẩy chay vì quá rườm rà."
  },
  {
    "track": 1,
    "id": "Q1-11",
    "level": 1,
    "q": "Khi nào BA nên ưu tiên tổ chức nhóm tập trung (Focus Group) thay vì các cuộc phỏng vấn cá nhân 1-1 trong dự án phát triển sản phẩm Mobile Banking cho thế hệ Gen Z?",
    "opts": [
      "Khi cần thu thập các dữ liệu tài chính tuyệt mật của từng cá nhân cụ thể.",
      "Khi muốn kích thích sự tương tác xã hội, khơi gợi tranh luận đa chiều và khám phá các phản ứng cảm xúc tập thể đối với ý tưởng sản phẩm mới.",
      "Khi người tham gia có tính cách rụt rè và rất sợ nói trước đám đông.",
      "Khi cần giải quyết một bất đồng cá nhân giữa hai chuyên viên kế toán nội bộ."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Focus Group tận dụng động lực nhóm (Group Dynamics) để kích thích sự sáng tạo và phản ứng cộng hưởng giữa các đối tượng cùng phân khúc khách hàng (như giới trẻ Gen Z)."
  },
  {
    "track": 1,
    "id": "Q1-12",
    "level": 1,
    "q": "Trong giai đoạn đầu khai thác yêu cầu về một quy trình điều phối xe container phức tạp, BA nên sử dụng loại Prototype nào để đạt hiệu quả giao tiếp cao nhất với chi phí thấp nhất?",
    "opts": [
      "Xây dựng một bản phần mềm chạy thật hoàn chỉnh có kết nối cơ sở dữ liệu production.",
      "Bản phác thảo trên giấy hoặc Wireframe mức độ chi tiết thấp (Low-Fidelity Mockup) tập trung vào luồng thông tin và cấu trúc dữ liệu chính thay vì tiểu tiết màu sắc.",
      "Mô hình đồ họa 3D động có âm thanh và hiệu ứng chuyển cảnh như game.",
      "Không dùng bất kỳ hình ảnh nào, chỉ đọc văn bản thuần túy cho người nghe."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Low-Fidelity Prototype cho phép thử nghiệm luồng nghiệp vụ nhanh chóng, dễ chỉnh sửa ngay trên giấy/bảng trắng mà không làm stakeholder bị phân tâm vào màu sắc hoặc font chữ."
  },
  {
    "track": 1,
    "id": "Q1-13",
    "level": 1,
    "q": "Khi tiến hành kỹ thuật Phân tích Giao diện (Interface Analysis) giữa Cổng dịch vụ công trực tuyến và Cơ sở dữ liệu Quốc gia về Dân cư, BA cần làm rõ những nội dung trọng tâm nào?",
    "opts": [
      "Màu sắc nút bấm và font chữ hiển thị trên cả hai hệ thống.",
      "Ai là người sở hữu giao diện, phương thức truyền thông điệp (REST/SOAP/MQ), định dạng dữ liệu, tần suất gửi, cơ chế xác thực và SLA phản hồi khi có sự cố.",
      "Mức lương của các lập trình viên bảo trì cổng kết nối ở hai bên.",
      "Cấu hình phần cứng chi tiết của máy chủ vật lý đặt ở trung tâm dữ liệu đối tác."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Interface Analysis tập trung vào ranh giới tích hợp: thông số kỹ thuật hợp đồng giao tiếp (Contract), định dạng gói tin, bảo mật, thời gian chờ (Timeout) và cơ chế xử lý lỗi kết nối."
  },
  {
    "track": 1,
    "id": "Q1-14",
    "level": 2,
    "q": "Hệ thống IoT quan trắc môi trường nhà máy: Kỹ sư an toàn yêu cầu 'Cảnh báo nồng độ khí độc rò rỉ phải kích hoạt còi báo động trong vòng 0.5 giây'. Tuy nhiên, hạ tầng viễn thông tại vùng sâu chỉ đảm bảo kết nối mạng ngắt quãng và có độ trễ truyền dữ liệu lên Cloud từ 5-15 giây. BA cần khai thác và đề xuất giải pháp kiến trúc nào?",
    "opts": [
      "Bỏ qua yêu cầu 0.5 giây của kỹ sư an toàn vì bất khả thi về mặt đường truyền Internet.",
      "Khai thác giải pháp xử lý phân tán tại biên (Edge Computing): Cài đặt cảm biến IoT nối trực tiếp với bộ điều khiển PLC/Edge Gateway tại chỗ để kích hoạt còi báo động vật lý ngay lập tức (<0.2 giây) mà không cần chờ mạng; dữ liệu được đồng bộ lên Cloud sau khi có kết nối.",
      "Yêu cầu nhà máy phải dời về trung tâm thành phố để có mạng cáp quang tốc độ cao.",
      "Chuyển toàn bộ việc giám sát khí độc sang hình thức cử người đi ngửi thủ công định kỳ."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Ràng buộc an toàn tính mạng đòi hỏi phản hồi tức thì, trong khi ràng buộc viễn thông là độ trễ Cloud. BA khai thác phương án kiến trúc Edge Computing để thỏa mãn cả yêu cầu an toàn tại chỗ và quản lý tập trung từ xa."
  },
  {
    "track": 1,
    "id": "Q1-15",
    "level": 2,
    "q": "Trong dự án WES (Warehouse Execution System), ba ca trưởng kho đưa ra 3 quy tắc điều phối cổng xuất hàng (Outbound Dock Allocation) trái ngược nhau: Ca sáng muốn ưu tiên theo loại xe tải, Ca chiều muốn ưu tiên theo trọng lượng pallet, Ca đêm muốn ưu tiên theo thời hạn xuất bến. Không ai chịu nhượng bộ. Chiến lược xử lý của Lead BA là gì?",
    "opts": [
      "Chọn quy tắc của Ca trưởng có thâm niên công tác lâu năm nhất tại nhà máy.",
      "Lập trình 3 phần mềm riêng biệt cho 3 ca làm việc khác nhau.",
      "Khai thác sâu mục tiêu cốt lõi của từng ca, phát hiện bản chất lưu lượng hàng hóa thay đổi theo khung giờ; từ đó đặc tả công cụ cấu hình quy tắc động (Dynamic Rule Engine) cho phép tự động chuyển đổi tiêu chí ưu tiên theo khung giờ hoạt động hoặc kịch bản vận hành.",
      "Từ chối làm tính năng điều phối tự động và để các ca trưởng tiếp tục gọi điện điều xe thủ công."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Bất đồng thường bắt nguồn từ bối cảnh làm việc đặc thù của từng ca (ca sáng xe to, ca đêm gom hàng gấp). Xây dựng Dynamic Rule Engine thay vì quy tắc cứng (Hard-coded) biến mâu thuẫn thành tính năng linh hoạt vượt trội."
  },
  {
    "track": 1,
    "id": "Q1-16",
    "level": 2,
    "q": "Một ứng dụng thanh toán xuyên biên giới phục vụ khách du lịch: Quy định pháp lý sở tại bắt buộc phải thu thập định danh sinh trắc học khuôn mặt và lưu trữ tối thiểu 5 năm để phục vụ an ninh quốc gia. Tuy nhiên, đạo luật GDPR của Liên minh Châu Âu (nơi nhiều du khách sinh sống) nghiêm cấm lưu trữ sinh trắc học nếu không có sự đồng thuận rõ ràng và cho phép quyền được lãng quên (Right to be Forgotten). BA xử lý thế nào?",
    "opts": [
      "Chỉ tuân thủ luật Việt Nam và phớt lờ hoàn toàn đạo luật GDPR của châu Âu.",
      "Từ chối phục vụ toàn bộ khách hàng đến từ Liên minh Châu Âu.",
      "Làm việc với Chuyên gia Pháp lý của cả hai khu vực để thiết kế luồng khai thác yêu cầu: Thực hiện xác thực sinh trắc học tại chỗ (Local matching) và lưu mã băm mã hóa một chiều (One-way hash) tại máy chủ nội địa đáp ứng luật sở tại, đồng thời hiển thị điều khoản đồng thuận minh bạch chuẩn GDPR và cơ chế ẩn danh hóa dữ liệu cá nhân.",
      "Không lưu bất kỳ thông tin nào và báo cáo sai sự thật cho cơ quan an ninh."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Xung đột luật pháp quốc tế là bài toán phức tạp nhất trong FinTech. BA phải kết nối pháp chế để thiết kế giải pháp kỹ thuật bảo mật (Data Privacy by Design) đảm bảo tuân thủ song phương."
  },
  {
    "track": 1,
    "id": "Q1-17",
    "level": 2,
    "q": "Dự án xây dựng mô hình Phát hiện Gian lận (Fraud Detection) trong giao dịch thẻ tín dụng: Đội ngũ vận hành nghiệp vụ từ chối cung cấp danh sách quy tắc cứng, chỉ nói 'chúng tôi nhìn vào linh cảm là biết gian lận'. Dữ liệu lịch sử 1 triệu giao dịch không hề có nhãn đánh dấu (Unlabeled Data). BA cần dẫn dắt bước khai thác yêu cầu tiếp theo như thế nào?",
    "opts": [
      "Bỏ cuộc vì không thể xây dựng phần mềm dựa trên 'linh cảm'.",
      "Tổ chức các buổi phân tích hồi cứu (Retrospective Case Review) trên 100 vụ gian lận thực tế đã xảy ra: Cùng chuyên gia mổ xẻ các đặc trưng bất thường (vị trí địa lý thay đổi trong 5 phút, số tiền tăng đột biến, loại hàng mua lúc nửa đêm) để hình thành bộ thuộc tính (Feature Engineering) và gắn nhãn tập dữ liệu mẫu.",
      "Ép buộc đội nghiệp vụ phải ký cam kết đưa ra 10 công thức toán học trong vòng 24 giờ.",
      "Lập trình ngẫu nhiên chặn 5% số lượng giao dịch bất kỳ mỗi ngày để đề phòng rủi ro."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. 'Linh cảm' thực chất là sự tích lũy kinh nghiệm tiềm thức từ các dấu hiệu bất thường lặp đi lặp lại. Phân tích các ca sự cố cụ thể giúp biến trực giác thành các đặc trưng định lượng (Features) phục vụ xây dựng giải pháp."
  },
  {
    "track": 1,
    "id": "Q1-18",
    "level": 2,
    "q": "Hệ thống ERP sản xuất: Ban Lãnh đạo ép tiến độ khai thác yêu cầu phải chốt trong 2 tuần để kịp tiến độ giải ngân vốn đầu tư. Tuy nhiên, tài liệu quy trình nhà máy đã lạc hậu 8 năm và các Kỹ sư trưởng dây chuyền đang bận trực khắc phục sự cố máy móc liên tục 12 tiếng/ngày. Đâu là kế hoạch tiếp cận khả thi nhất của BA?",
    "opts": [
      "Tự bịa ra các quy trình mới trong văn phòng máy lạnh để nộp đúng hạn 2 tuần.",
      "Xin dừng dự án và từ chối làm việc vì điều kiện không thuận lợi.",
      "Áp dụng chiến lược khai thác phân tầng: Dùng 3 ngày đầu đọc dữ liệu log xuất nhập vật tư và hệ thống SCADA để phác thảo khung quy trình cốt lõi; sau đó chỉ xin các khung giờ giao ban ngắn 20 phút của Kỹ sư trưởng để xác thực các điểm đứt gãy quan trọng nhất; các chi tiết phụ phân rã xử lý dần trong các Sprint phát triển.",
      "Bắt buộc các kỹ sư trưởng phải tăng ca thêm sau 12 tiếng làm việc để ngồi họp với BA thâu đêm."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Trong tình huống khan hiếm thời gian của chuyên gia (SME Constraint), BA phải tự lực khai thác tối đa từ dữ liệu máy móc (SCADA/Log) để chuẩn bị sẵn sàng, chỉ dùng thời gian của SME cho việc xác thực trọng yếu (High-leverage interaction)."
  },
  {
    "track": 1,
    "id": "Q1-19",
    "level": 2,
    "q": "Khai thác yêu cầu cho Cổng dịch vụ công cấp tỉnh: Chỉ tiêu Bộ ngành giao là 90% hồ sơ phải được xử lý trực tuyến toàn trình (không nộp giấy). Tuy nhiên, người dân vùng sâu vùng xa không có máy tính, không có chữ ký số cá nhân và đường truyền mạng rất yếu. Làm thế nào để BA đề xuất quy trình vừa đạt chỉ tiêu số hóa vừa phục vụ được nhân dân?",
    "opts": [
      "Kiên quyết loại bỏ hoàn toàn việc tiếp nhận hồ sơ tại bộ phận một cửa cấp xã để ép người dân phải tự mua máy tính kết nối mạng.",
      "Từ chối nhận chỉ tiêu 90% và gửi công văn xin giữ nguyên quy trình nộp hồ sơ giấy 100%.",
      "Khai thác mô hình 'Đại lý hỗ trợ số hóa' (Assisted Digital Service): Công chức tại bộ phận một cửa xã đóng vai trò người hỗ trợ, sử dụng thiết bị chuyên dụng quét giấy tờ và ký số thay mặt người dân sau khi đối soát sinh trắc học; hồ sơ vẫn đi theo luồng số hóa toàn trình trên hệ thống liên thông.",
      "Tự động duyệt tất cả hồ sơ của người dân vùng xa mà không cần kiểm tra giấy tờ để đạt chỉ tiêu số hóa."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. 'Assisted Digital' là mô hình kinh điển trong chính phủ điện tử toàn cầu khi người dùng cuối thiếu năng lực số (Digital Divide). Quy trình này đảm bảo tính toàn trình của dữ liệu số trên hệ thống mà không bỏ rơi người dân."
  },
  {
    "track": 1,
    "id": "Q1-20",
    "level": 2,
    "q": "Hệ thống Quản lý Đơn hàng (OMS) tích hợp với 3 sàn TMĐT lớn: Đúng dịp Siêu Sale 11/11, một sàn TMĐT âm thầm thay đổi cấu trúc Webhook gửi đơn hàng mới mà không báo trước, khiến OMS không đọc được dữ liệu và có nguy cơ bỏ sót 50.000 đơn hàng. BA cần làm việc với đội kỹ thuật để khai thác yêu cầu cấp bách nào?",
    "opts": [
      "Ngay lập tức gửi đơn kiện sàn TMĐT ra tòa án kinh tế và ngừng bán hàng trên sàn đó.",
      "Thiết kế cơ chế 'Dead-Letter Queue & Raw Payload Ingestion': Lưu trữ nguyên vẹn toàn bộ chuỗi JSON thô nhận được vào bộ đệm an toàn kèm timestamp; đồng thời bổ sung bộ giải mã linh hoạt (Adapter pattern) để tái phân tích và đẩy lại các đơn hàng vào luồng xử lý mà không làm mất mát đơn hàng nào.",
      "Xóa toàn bộ các đơn hàng bị lỗi format để tránh làm chậm hệ thống xử lý của các sàn khác.",
      "Chờ hết đợt khuyến mại 11/11 rồi mới tiến hành họp rút kinh nghiệm."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Khi tích hợp bên thứ ba, nguyên tắc phòng thủ hàng đầu là 'Không bao giờ làm mất dữ liệu thô' (Ingest raw first). Dead-letter queue giúp hứng toàn bộ payload dù sai format, sau đó patch bộ chuyển đổi để xử lý lại (Replay)."
  },
  {
    "track": 2,
    "id": "Q2-01",
    "level": 0,
    "q": "Cấu trúc chuẩn của một User Story theo mẫu của Mike Cohn và nguyên tắc kiểm tra chất lượng INVEST là gì?",
    "opts": [
      "Hệ thống phải [Hành động] để [Mục tiêu kỹ thuật]; kiểm tra theo nguyên tắc SMART.",
      "As a [Role], I want [Feature/Action], So that [Benefit/Value]; kiểm tra theo nguyên tắc INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable).",
      "Nếu [Điều kiện] thì [Kết quả]; kiểm tra theo nguyên tắc ACID của cơ sở dữ liệu quan hệ.",
      "Người dùng [Tên cụ thể] sẽ nhấn vào [Nút bấm] trên màn hình [Tên trang]; kiểm tra theo nguyên tắc SOLID."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Cấu trúc kinh điển 'As a... I want... So that...' gắn liền với nguyên tắc INVEST để đảm bảo story độc lập, có thể thương lượng, mang lại giá trị, ước lượng được, đủ nhỏ và kiểm thử được. Phương án A là cú pháp SRS truyền thống, C là logic kiểm tra, D là kịch bản test chi tiết."
  },
  {
    "track": 2,
    "id": "Q2-02",
    "level": 0,
    "q": "Cú pháp Given-When-Then (Gherkin format) trong viết Tiêu chí Chấp nhận (Acceptance Criteria - AC) được hiểu chính xác như thế nào?",
    "opts": [
      "Given: Kết quả mong đợi; When: Bối cảnh ban đầu; Then: Hành động của người dùng.",
      "Given: Thiết kế giao diện Figma; When: Lập trình viên viết code; Then: Tester thực hiện kiểm thử.",
      "Given: Bối cảnh / tiền điều kiện ban đầu; When: Hành động / sự kiện kích hoạt; Then: Kết quả mong đợi quan sát được và sự thay đổi trạng thái của hệ thống.",
      "Given: Ngân sách dự án; When: Tiến độ bị chậm; Then: Cắt giảm bớt phạm vi tính năng."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C theo chuẩn BDD (Behavior-Driven Development). Given thiết lập ngữ cảnh (tiền điều kiện), When mô tả hành động kích hoạt của tác nhân, Then xác định hành vi và trạng thái kết quả cần kiểm chứng."
  },
  {
    "track": 2,
    "id": "Q2-03",
    "level": 0,
    "q": "Sự khác biệt cốt lõi giữa Yêu cầu Chức năng (Functional Requirements - FR) và Yêu cầu Phi chức năng (Non-Functional Requirements - NFR) là gì?",
    "opts": [
      "FR do lập trình viên tự nghĩ ra, còn NFR do khách hàng trực tiếp yêu cầu.",
      "FR mô tả cụ thể hệ thống phải làm gì (hành vi, chức năng, tính toán); NFR mô tả hệ thống phải hoạt động tốt như thế nào (hiệu năng, bảo mật, độ tin cậy, khả năng mở rộng).",
      "FR chỉ áp dụng cho ứng dụng di động, còn NFR chỉ áp dụng cho trang web máy tính để bàn.",
      "FR không thể kiểm thử được, trong khi NFR là những tiêu chí kiểm thử duy nhất của dự án."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B theo chuẩn ISO/IEC 25010 và BABOK. FR là 'What the system does', NFR là 'How well the system performs' (chất lượng dịch vụ, ràng buộc vận hành)."
  },
  {
    "track": 2,
    "id": "Q2-04",
    "level": 0,
    "q": "Ma trận Truy vết Yêu cầu (Requirements Traceability Matrix - RTM) được thiết lập nhằm mục đích chính nào sau đây?",
    "opts": [
      "Để chấm điểm KPI hàng tháng cho các thành viên trong đội phát triển phần mềm.",
      "Thiết lập mối liên kết hai chiều từ mục tiêu kinh doanh ➔ yêu cầu chi tiết ➔ thiết kế kiến trúc ➔ mã nguồn ➔ ca kiểm thử (Test Cases), giúp quản lý phạm vi và phân tích tác động khi có thay đổi.",
      "Để vẽ lại toàn bộ sơ đồ cơ sở dữ liệu quan hệ (ERD) của hệ thống thông tin.",
      "Dùng làm hợp đồng pháp lý duy nhất để thanh toán tiền lương cho nhân viên thử việc."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. RTM đảm bảo tính truy vết hai chiều (Bidirectional Traceability): biết mỗi yêu cầu phục vụ mục tiêu nào, được kiểm thử bằng test case nào, và khi yêu cầu thay đổi thì những thành phần nào bị tác động."
  },
  {
    "track": 2,
    "id": "Q2-05",
    "level": 0,
    "q": "Trong kỹ thuật ưu tiên yêu cầu MoSCoW, nhóm yêu cầu 'Must Have' được định nghĩa như thế nào?",
    "opts": [
      "Những tính năng rất hay nếu có nhưng nếu không có thì hệ thống vẫn phát hành bình thường được.",
      "Các yêu cầu cốt lõi bắt buộc phải có, nếu thiếu một trong số chúng thì sản phẩm coi như thất bại và không thể đưa vào vận hành (Non-negotiable).",
      "Những yêu cầu đã được thống nhất sẽ dời sang các phiên bản nâng cấp của năm sau.",
      "Những ý tưởng sáng tạo bất chợt của đội lập trình trong lúc uống cà phê."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. 'Must Have' là các điều kiện tiên quyết không thể thương lượng để go-live. Nếu bỏ bớt Must Have, giải pháp không còn giá trị kinh doanh hoặc vi phạm pháp lý."
  },
  {
    "track": 2,
    "id": "Q2-06",
    "level": 1,
    "q": "BA viết Acceptance Criteria cho tính năng 'Đổi mật khẩu người dùng' như sau: 'Given người dùng đã đăng nhập; When nhập mật khẩu mới hợp lệ và bấm Lưu; Then hệ thống cập nhật mật khẩu thành công'. AC này còn thiếu sót trường hợp biên/bảo mật quan trọng nào?",
    "opts": [
      "Thiếu việc yêu cầu đổi font chữ trên thanh menu sau khi đổi mật khẩu.",
      "Thiếu tiền điều kiện phải xác thực mật khẩu hiện tại, kiểm tra mật khẩu mới không trùng 3 lần gần nhất, và thu hồi (revoke) toàn bộ phiên đăng nhập/token trên các thiết bị khác.",
      "Thiếu việc gửi tin nhắn quảng cáo các sản phẩm mới đến số điện thoại của người dùng.",
      "Không có thiếu sót nào, AC trên đã hoàn hảo theo đúng chuẩn quốc tế."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Đổi mật khẩu là tính năng nhạy cảm bảo mật cao. AC bắt buộc phải kiểm tra mật khẩu cũ, chính sách lịch sử mật khẩu và cơ chế hủy token phiên cũ để ngăn chặn việc chiếm quyền điều khiển tài khoản."
  },
  {
    "track": 2,
    "id": "Q2-07",
    "level": 1,
    "q": "Stakeholder phát biểu yêu cầu: 'Hệ thống tìm kiếm đơn hàng phải chạy thật nhanh, không được để người dùng chờ đợi'. Cách viết lại nào sau đây chuyển hóa yêu cầu mơ hồ trên thành NFR kiểm chứng được (Testable)?",
    "opts": [
      "Hệ thống tìm kiếm đơn hàng phải đạt tốc độ bàn thờ và làm hài lòng 100% nhân viên.",
      "Tại môi trường tải tiêu chuẩn với 500 người dùng đồng thời (CCU), 95% số lượng truy vấn tìm kiếm đơn hàng theo mã đơn hoặc số điện thoại phải trả về kết quả trong thời gian dưới 1.5 giây (p95 latency < 1.5s).",
      "Hệ thống phải sử dụng công nghệ tìm kiếm hiện đại nhất thế giới như Elasticsearch.",
      "Nhân viên IT phải thường xuyên khởi động lại máy chủ tìm kiếm mỗi sáng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Một NFR chuẩn phải định lượng được với ngưỡng đo lường cụ thể (1.5 giây), phân vị thống kê (p95 latency) và bối cảnh tải thực tế (500 CCU)."
  },
  {
    "track": 2,
    "id": "Q2-08",
    "level": 1,
    "q": "Quốc hội ban hành nghị quyết giảm thuế VAT từ 10% xuống 8% đối với một số nhóm hàng bán lẻ từ ngày 01/01. Dựa trên Ma trận Truy vết Yêu cầu (RTM), BA cần cập nhật những thành phần nào?",
    "opts": [
      "Chỉ cần sửa giao diện hiển thị chữ '8%' trên trang web bán hàng.",
      "Truy vết từ Yêu cầu nghiệp vụ (Tuân thủ luật thuế) ➔ Bảng quy tắc tính thuế (Tax Rule) ➔ Logic tính tiền trong mã nguồn giỏ hàng/thanh toán ➔ Mẫu in hóa đơn điện tử ➔ Kịch bản kiểm thử tính giá tự động.",
      "Xóa toàn bộ các sản phẩm chịu thuế 10% ra khỏi cơ sở dữ liệu của công ty.",
      "Yêu cầu khách hàng tự tính nhẩm thuế 8% rồi chuyển khoản số tiền đã giảm."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. RTM cho thấy sự phụ thuộc từ luật thuế xuống các công thức tính toán backend, hóa đơn tài chính và test cases kiểm thử tự động, đảm bảo không bỏ sót mắt xích nào."
  },
  {
    "track": 2,
    "id": "Q2-09",
    "level": 1,
    "q": "Trong dự án Khám bệnh từ xa (Telemedicine), BA nhận được 3 yêu cầu sau: (1) Dữ liệu hình ảnh y tế phải mã hóa theo chuẩn HIPAA; (2) Video cuộc gọi tư vấn phải duy trì tối thiểu 24 khung hình/giây; (3) Hệ thống phải sẵn sàng hoạt động 99.9% thời gian. Hãy phân loại chính xác các NFR này theo chuẩn chất lượng:",
    "opts": [
      "(1) Tính tiện dụng (Usability); (2) Tính tương thích (Portability); (3) Tính bảo trì (Maintainability).",
      "(1) Tính bảo mật (Security); (2) Hiệu năng & Băng thông (Performance/Efficiency); (3) Tính sẵn sàng (Availability/Reliability).",
      "Cả 3 yêu cầu trên đều là Yêu cầu Chức năng (Functional Requirements).",
      "(1) Yêu cầu chuyển đổi; (2) Yêu cầu giao diện; (3) Yêu cầu kiểm toán."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Mã hóa dữ liệu thuộc nhóm Bảo mật (Security), độ mượt video thuộc nhóm Hiệu năng (Performance), và uptime 99.9% thuộc nhóm Tính khả dụng/Sẵn sàng (Availability)."
  },
  {
    "track": 2,
    "id": "Q2-10",
    "level": 1,
    "q": "Khi xây dựng sản phẩm Ví điện tử phiên bản MVP trong 3 tháng, đội ngũ áp dụng kỹ thuật MoSCoW. Lựa chọn nào sau đây thể hiện việc phân bổ ưu tiên hợp lý nhất?",
    "opts": [
      "Must have: Game lắc lì xì trúng thưởng; Won't have: Chức năng nạp và rút tiền về tài khoản ngân hàng.",
      "Must have: Đăng ký, Liên kết tài khoản ngân hàng, Nạp/Rút tiền và Thanh toán mã QR cơ bản; Should have: Tự động trích tiền đóng học phí định kỳ; Won't have (kỳ này): Vay thấu chi tài chính.",
      "Must have: Tích hợp 50 dịch vụ giải trí trực tuyến; Could have: Bảo mật mã OTP đăng nhập.",
      "Tất cả 100 tính năng trong danh sách đều được đánh dấu là Must Have."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. MVP của ví điện tử bắt buộc phải có luồng dòng tiền cốt lõi (Nạp, Rút, Chuyển, Thanh toán cơ bản) là Must Have. Các tính năng phức tạp như thấu chi hoặc game tương tác thuộc các đợt phát hành sau."
  },
  {
    "track": 2,
    "id": "Q2-11",
    "level": 1,
    "q": "User Story sau đây vi phạm nguyên tắc nào trong tiêu chí INVEST? 'Là nhân viên vận hành, tôi muốn hệ thống IoT tự động đọc cảm biến, gửi cảnh báo qua SMS, phân tích xu hướng nhiệt độ bằng Machine Learning trong 30 ngày và xuất báo cáo PDF hàng tuần để quản lý thiết bị.'",
    "opts": [
      "Vi phạm tiêu chí 'Small' (Quá to/Epic) và 'Independent' (Gộp quá nhiều hành vi độc lập vào làm một story duy nhất).",
      "Vi phạm tiêu chí 'Valuable' vì tính năng này hoàn toàn không có giá trị cho doanh nghiệp.",
      "Vi phạm vì không ghi tên cụ thể của nhân viên vận hành trong câu văn.",
      "Đạt chuẩn 100% INVEST, không vi phạm bất kỳ nguyên tắc nào."
    ],
    "ans": 0,
    "exp": "Đáp án đúng là A. Story này là một Epic cồng kềnh gộp cả đọc cảm biến, gửi SMS, chạy ML và xuất PDF báo cáo. Cần phân rã nhỏ (Small) thành ít nhất 3–4 story độc lập (Independent) để có thể ước lượng và lập trình."
  },
  {
    "track": 2,
    "id": "Q2-12",
    "level": 1,
    "q": "Khi đặc tả tính năng nạp tiền từ thẻ ATM vào ví điện tử, BA cần xử lý trường hợp ngoại lệ (Edge Case): 'Hệ thống cổng thanh toán Napas bị gián đoạn kết nối sau khi đã trừ tiền tài khoản ngân hàng của khách, nhưng ví điện tử chưa nhận được tín hiệu phản hồi'. Đặc tả trạng thái nào là chuẩn xác nhất?",
    "opts": [
      "Lập tức cộng tiền vào ví điện tử ngay cho khách và chấp nhận rủi ro bị mất tiền nếu giao dịch thẻ thực tế không thành công.",
      "Đưa giao dịch ví vào trạng thái trung gian 'Đang chờ đối soát (Pending Verification)'; hiển thị thông báo rõ ràng cho khách và kích hoạt tiến trình kiểm tra trạng thái tự động (Polling/Inquiry) hoặc đối soát tự động cuối ngày trước khi hoàn tất hoặc hoàn tiền.",
      "Báo lỗi 'Giao dịch thất bại' và xóa luôn bản ghi giao dịch trong hệ thống ví.",
      "Tự động khóa tài khoản ngân hàng của khách để phòng ngừa gian lận."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Khi gặp sự cố mạng không đồng bộ giữa hai hệ thống tài chính, bắt buộc phải có trạng thái trung gian (Pending) và quy trình đối soát/hỏi trạng thái (Inquiry Job) để đảm bảo tính toàn vẹn số dư."
  },
  {
    "track": 2,
    "id": "Q2-13",
    "level": 1,
    "q": "Khái niệm 'Baseline Yêu cầu' (Requirements Baseline) có ý nghĩa gì trong quản lý dự án phần mềm?",
    "opts": [
      "Là danh sách các câu hỏi phỏng vấn chuẩn bị cho buổi gặp gỡ khách hàng đầu tiên.",
      "Là tập hợp các yêu cầu đã được tất cả các bên liên quan chính thống nhất và ký duyệt chính thức tại một mốc thời gian cụ thể; mọi thay đổi phát sinh sau mốc này bắt buộc phải qua quy trình kiểm soát thay đổi (Change Control).",
      "Là bản thiết kế cơ sở dữ liệu nháp của lập trình viên thực tập.",
      "Là mức lương tối thiểu thỏa thuận giữa công ty và nhân sự BA."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Requirements Baseline đóng vai trò là mốc tham chiếu chuẩn (Snapshot). Khi đã baseline, không ai được tự ý sửa yêu cầu mà phải tạo Change Request để đánh giá chi phí, tiến độ và rủi ro."
  },
  {
    "track": 2,
    "id": "Q2-14",
    "level": 2,
    "q": "Hệ thống WES (Warehouse Execution System) giao tiếp với WCS (Warehouse Control System): WCS đã chấp nhận nhiệm vụ xuất pallet và giao cho robot AGV. Phản hồi xác nhận từ WCS về WES bị timeout do mạng chập chờn, nên WES gửi lại yêu cầu cùng mã nhiệm vụ đó. Robot đang thực hiện lần đầu. Tiêu chí Chấp nhận (AC) nào kiểm tra đúng hành vi cần có?",
    "opts": [
      "WCS trả về thông tin nhiệm vụ đã nhận theo hợp đồng tích hợp đảm bảo tính Idempotency, không tạo thêm job mới hoặc giao thêm cho robot khác.",
      "WCS ghi nhận lần gửi lại thành nhiệm vụ mới hoàn toàn nhưng giữ ở trạng thái chờ đến khi robot rảnh.",
      "WCS hủy bỏ nhiệm vụ đang chạy dở của robot, tạo lại job mới và gán lại cho đúng con robot ban đầu.",
      "WCS hoàn toàn bỏ qua yêu cầu gửi lại và để WES tiếp tục chờ đợi phản hồi của lần đầu trong vô vọng."
    ],
    "ans": 0,
    "exp": "Đáp án đúng là A theo chuẩn tích hợp hệ thống phân tán (Idempotent Consumer Pattern). WCS phải nhận biết mã nhiệm vụ đã tồn tại, trả lại trạng thái của nhiệm vụ hiện hành để WES đồng bộ, tránh tuyệt đối việc xuất thừa pallet hay trùng lệnh robot."
  },
  {
    "track": 2,
    "id": "Q2-15",
    "level": 2,
    "q": "Đặc tả tính năng trừ tồn kho trong chương trình Flash Sale: Có 50 sản phẩm giảm giá 90%, dự kiến có 20.000 lượt bấm nút 'Mua ngay' đồng thời trong đúng 1 giây đầu tiên. Yêu cầu đặt ra: Tuyệt đối không được bán vượt tồn kho (Overselling) và hệ thống không được bị treo database (Deadlock). AC và giải pháp đặc tả nào là chuẩn xác nhất?",
    "opts": [
      "Dùng lệnh SELECT * rồi kiểm tra số lượng trên ứng dụng bằng if-else; ai bấm trước thì ghi nhận.",
      "Đặc tả cơ chế giữ hàng (Inventory Reservation) bằng phép trừ nguyên tử (Atomic Decrement) trên bộ nhớ đệm phân tán (Redis/In-memory cache) có thiết lập thời gian hết hạn (TTL 10 phút); chỉ 50 request trừ cache thành công mới được đẩy vào hàng đợi (Message Queue) để tạo đơn hàng dưới cơ sở dữ liệu chính.",
      "Khóa toàn bộ bảng cơ sở dữ liệu (Table Lock) cho đến khi 20.000 người mua xong lần lượt từng người một.",
      "Cho phép cả 20.000 người đặt hàng thành công rồi hôm sau nhân viên gọi điện xin lỗi hủy bớt 19.950 đơn."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Đây là bài toán kinh điển Concurrency Control trong E-commerce. Dùng Atomic Cache Decrement + Message Queue giảm tải 99.8% áp lực ghi vào Database, chống overselling tuyệt đối mà không gây nghẽn cổ chai."
  },
  {
    "track": 2,
    "id": "Q2-16",
    "level": 2,
    "q": "Xung đột yêu cầu giữa hai NFR: Chuyên gia Bảo mật yêu cầu 'Mọi giao dịch xác nhận hoàn tất đơn hàng trên ứng dụng Tài xế giao hàng phải nhập mã xác thực OTP 6 số qua SMS để chống gian lận'. Tuy nhiên, Giám đốc Vận hành chỉ ra 'Tài xế đang lái xe ngoài đường, nếu bắt nhập OTP 6 số sẽ gây tai nạn giao thông và giảm 40% năng suất giao hàng'. BA đề xuất giải pháp cân bằng nào?",
    "opts": [
      "Bỏ hoàn toàn bảo mật và cho phép tài xế bấm xác nhận mà không cần bất kỳ bằng chứng nào.",
      "Bắt buộc tài xế phải dừng xe tắt máy vào lề đường, nhập OTP và gọi điện cho tổng đài xác nhận mỗi đơn hàng.",
      "Phân tích đánh giá rủi ro theo ngữ cảnh (Contextual / Risk-based Authentication): Giao dịch thông thường chỉ yêu cầu chụp ảnh gói hàng tại cửa kèm định vị GPS bán kính 50m; chỉ kích hoạt xác thực nâng cao (nhận diện khuôn mặt hoặc OTP) khi phát hiện dấu hiệu bất thường (lệch GPS > 500m hoặc đơn hàng giá trị cao trên 10 triệu đồng).",
      "Xóa ứng dụng tài xế và quay về dùng biên bản giao hàng bằng giấy có chữ ký tươi."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Kỹ thuật Risk-based Authentication cân bằng hoàn hảo giữa tính tiện dụng vận hành (Usability/Safety) và yêu cầu phòng chống gian lận (Security), tối ưu hóa trải nghiệm happy path."
  },
  {
    "track": 2,
    "id": "Q2-17",
    "level": 2,
    "q": "Trong hợp đồng trọn gói Fixed-Price, Khách hàng phát hiện thiếu quy trình 'Phê duyệt vượt ngân sách dự toán' và yêu cầu đội dự án phải bổ sung ngay trong Sprint hiện tại, viện dẫn lý do: 'Hệ thống ERP mà không có phê duyệt ngân sách là hệ thống phế phẩm'. BA tiến hành phân tích và phản hồi ra sao?",
    "opts": [
      "Âm thầm lập trình thêm cho khách hàng mà không ghi nhận bất kỳ giấy tờ nào.",
      "Đối chiếu lại Tài liệu Đặc tả Yêu cầu (BRD/SRS) đã được ký duyệt baseline: Xác nhận tính năng này chưa có trong phạm vi đã thỏa thuận; thực hiện Phân tích tác động (Impact Analysis) đến cấu trúc dữ liệu, thời gian trễ tiến độ (ước tính 2 tuần) và chi phí phát sinh; sau đó gửi Change Request cho Hội đồng Quản lý Thay đổi (CCB) để khách hàng lựa chọn hoán đổi tính năng tương đương hoặc ký phụ lục phát sinh.",
      "Gửi email từ chối cộc lốc và trích dẫn điều khoản phạt hợp đồng đối với khách hàng.",
      "Hủy bỏ toàn bộ các tính năng đã làm xong để làm lại từ đầu theo ý khách."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Quy trình Quản lý Thay đổi (Change Management) chuẩn mực: dùng Baseline đối chiếu sự thật, định lượng tác động (Impact) và trao quyền quyết định chi phí/tiến độ cho các bên có thẩm quyền qua Change Request."
  },
  {
    "track": 2,
    "id": "Q2-18",
    "level": 2,
    "q": "Hệ thống Đặt vé máy bay trực tuyến: Khi khách hàng thanh toán vé máy bay, tiền đã bị trừ từ cổng thẻ Visa nhưng phía hãng hàng không gặp sự cố không thể xuất mã vé (PNR). Hệ thống đối mặt với ràng buộc: Hãng bay không hỗ trợ API hoàn tiền tức thời, tiền của khách bị giữ lại cổng thanh toán. Đặc tả máy trạng thái (State Machine) của đơn hàng cần xử lý thế nào?",
    "opts": [
      "Chuyển trạng thái đơn sang 'Đã hủy' và mặc kệ tiền của khách hàng bị treo.",
      "Chuyển trạng thái đơn sang 'Đã thanh toán thành công' và xuất vé trắng cho khách.",
      "Chuyển trạng thái đơn sang 'Sự cố xuất vé - Chờ xử lý hoàn tiền tự động (Ticketing_Failed_Pending_Refund)'; đồng thời bắn cảnh báo độ ưu tiên cao nhất cho bộ phận Hỗ trợ khách hàng trong vòng 5 phút, lưu trữ mã tham chiếu giao dịch cổng thanh toán và kích hoạt API hoàn tiền tự động hoặc luồng đối soát khẩn cấp theo SLA cam kết.",
      "Tự động đặt lại một chuyến bay bất kỳ của hãng hàng không khác mà không cần hỏi ý kiến khách hàng."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Máy trạng thái phải phản ánh chính xác trạng thái thực tế không đồng bộ (Tiền trừ nhưng vé lỗi). Cần trạng thái trung gian rõ ràng kèm cơ chế cứu hộ (Recovery mechanism) và SLA bồi hoàn minh bạch cho người dùng."
  },
  {
    "track": 2,
    "id": "Q2-19",
    "level": 2,
    "q": "Hệ thống Quản lý Đơn hàng (OMS) phục vụ chuỗi bán lẻ đa kênh: Một đơn hàng gồm 3 món sản phẩm nằm rải rác ở 2 kho vật lý cách nhau 40km. Khách hàng lựa chọn phương thức 'Giao hàng gom thành 1 kiện duy nhất' để tiết kiệm phí vận chuyển. Đặc tả nghiệp vụ phân rã đơn hàng (Order Decomposition & Routing) cần quy định logic nào?",
    "opts": [
      "Bắt khách hàng phải trả tiền thuê xe tải riêng để chạy qua hai kho gom hàng.",
      "Tạo hai mã đơn hàng con điều chuyển nội bộ (Transfer Orders) gom hàng về Kho trung tâm (Hub) để đóng gói chung thành 1 kiện chính thức kèm 1 mã vận đơn duy nhất gửi cho đơn vị giao vận; cập nhật trạng thái đơn hàng cha là 'Đang gom hàng tại kho trung tâm' và tính toán lại SLA giao hàng dự kiến.",
      "Tự ý hủy đơn hàng và báo cho khách là hết hàng.",
      "Giao rời thành 2 kiện riêng vào 2 ngày khác nhau và thu tiền ship gấp đôi."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Logic phân rã đơn (Order Splitting & Internal Transfer) là cốt lõi của bài toán Omnichannel Fulfillment: tách đơn con điều chuyển nội bộ về Hub gom kiện, giữ nguyên 1 mã kiện cha và cập nhật SLA thực tế cho khách."
  },
  {
    "track": 2,
    "id": "Q2-20",
    "level": 2,
    "q": "Yêu cầu tuân thủ kiểm toán (Audit Trail) cho hệ thống Kế toán doanh nghiệp: Quy định pháp luật nghiêm cấm việc xóa vĩnh viễn (Hard Delete) bất kỳ bản ghi bút toán kế toán nào, kể cả bút toán sai sót do kế toán viên nhập nhầm số tiền. BA cần đặc tả cơ chế điều chỉnh dữ liệu này như thế nào?",
    "opts": [
      "Cho phép kế toán trưởng truy cập trực tiếp vào database SQL để dùng lệnh UPDATE sửa lại số tiền cho khớp.",
      "Đặc tả cơ chế 'Bút toán điều chỉnh đảo sổ (Reversal / Adjustment Journal Entry)': Bản ghi cũ giữ nguyên trạng thái bị hủy kèm lý do và người hủy; hệ thống tự động sinh ra một bút toán đảo có dấu âm hoặc bút toán điều chỉnh chênh lệch đối ứng, ghi nhật ký kiểm toán bất biến (Immutable Audit Log) với đầy đủ dấu vết thời gian.",
      "Xóa sạch lịch sử giao dịch mỗi quý để hệ thống chạy nhanh hơn.",
      "Đặc tả tính năng cho phép kế toán viên tự chọn ngày giờ tùy ý để ghi đè số liệu cũ mà không để lại lịch sử."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Trong kế toán tài chính và kiểm toán, nguyên tắc bất biến (Immutability) là tối thượng. Sai sót phải được sửa bằng bút toán đảo (Reversal entry) hoặc bút toán bổ sung đối ứng, tuyệt đối cấm can thiệp xóa hay ghi đè bản ghi gốc."
  },
  {
    "track": 3,
    "id": "Q3-01",
    "level": 0,
    "q": "Trong chuẩn ký hiệu mô hình hóa quy trình nghiệp vụ BPMN 2.0, nhóm 'Flow Objects' (Đối tượng luồng) bao gồm 3 thành phần cốt lõi nào?",
    "opts": [
      "Database, Table, Field.",
      "Events (Sự kiện), Activities (Hoạt động/Công việc) và Gateways (Cổng rẽ nhánh).",
      "Actor, Use Case, System Boundary.",
      "Class, Object, Interface."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B theo chuẩn OMG BPMN 2.0. Flow Objects gồm Events (hình tròn), Activities (hình chữ nhật bo góc) và Gateways (hình thoi). Phương án A thuộc về cơ sở dữ liệu, C thuộc Use Case Diagram, D thuộc Class Diagram."
  },
  {
    "track": 3,
    "id": "Q3-02",
    "level": 0,
    "q": "Phân biệt giữa Exclusive Gateway (XOR - ký hiệu hình thoi có dấu X) và Parallel Gateway (AND - ký hiệu hình thoi có dấu +) trong BPMN 2.0:",
    "opts": [
      "Exclusive Gateway kích hoạt tất cả các nhánh đi ra; Parallel Gateway chỉ kích hoạt duy nhất một nhánh thỏa mãn điều kiện.",
      "Exclusive Gateway chỉ kích hoạt duy nhất một nhánh đi ra dựa trên điều kiện đánh giá; Parallel Gateway kích hoạt đồng thời tất cả các nhánh đi ra mà không cần đánh giá điều kiện.",
      "Hai loại Gateway này hoàn toàn tương đương nhau và có thể thay thế tùy ý theo sở thích người vẽ.",
      "Exclusive Gateway dùng để kết thúc quy trình, còn Parallel Gateway dùng để bắt đầu quy trình."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Exclusive Gateway (XOR) mang tính loại trừ lẫn nhau: chỉ 1 nhánh được chọn dựa trên điều kiện (True/False). Parallel Gateway (AND) dùng để phân tách luồng thành nhiều nhánh chạy song song độc lập."
  },
  {
    "track": 3,
    "id": "Q3-03",
    "level": 0,
    "q": "Ý nghĩa và quy tắc sử dụng Swimlane (Pools và Lanes) trong biểu đồ BPMN 2.0 là gì?",
    "opts": [
      "Pool đại diện cho một vai trò nhân viên cụ thể, còn Lane đại diện cho toàn bộ công ty đối tác bên ngoài.",
      "Pool đại diện cho một thực thể hoặc tổ chức độc lập (Participant/Process Boundary); Lane phân chia không gian bên trong một Pool để chỉ định phòng ban hoặc vai trò chịu trách nhiệm thực thi công việc.",
      "Chỉ được phép sử dụng tối đa 1 Lane trong một biểu đồ BPMN.",
      "Swimlane chỉ dùng để trang trí màu sắc cho biểu đồ thêm sinh động, không có ý nghĩa ngữ nghĩa."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B theo chuẩn BPMN 2.0. Pool định nghĩa ranh giới quy trình của một thực thể tham gia (ví dụ: Khách hàng vs Doanh nghiệp); Lane là sự phân chia nội bộ trong Pool theo vai trò (ví dụ: Kế toán, Thủ kho, Trưởng phòng)."
  },
  {
    "track": 3,
    "id": "Q3-04",
    "level": 0,
    "q": "Trong BPMN 2.0, sự khác biệt giữa 'None End Event' (vòng tròn viền đậm rỗng) và 'Terminate End Event' (vòng tròn viền đậm có chấm đen đặc ở giữa) là gì?",
    "opts": [
      "None End Event dừng toàn bộ hệ thống máy chủ; Terminate End Event chỉ dừng một nhánh công việc.",
      "None End Event chỉ kết thúc nhánh luồng công việc hiện tại; Terminate End Event lập tức hủy bỏ và chấm dứt toàn bộ tất cả các nhánh đang chạy song song trong phiên quy trình đó.",
      "Hai sự kiện này hoàn toàn giống nhau về mặt hành vi ngữ nghĩa.",
      "Terminate End Event tự động khởi động lại quy trình từ đầu."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Terminate End Event có sức mạnh chấm dứt cưỡng bức (Kill switch): nếu có 3 nhánh đang chạy song song, chỉ cần 1 nhánh chạm vào Terminate End Event là toàn bộ 2 nhánh kia bị hủy bỏ lập tức."
  },
  {
    "track": 3,
    "id": "Q3-05",
    "level": 0,
    "q": "Mục đích chính của việc lập mô hình quy trình Hiện trạng (As-Is Process) trước khi xây dựng quy trình Tương lai (To-Be Process) là gì?",
    "opts": [
      "Để chỉ trích và quy trách nhiệm cá nhân cho các nhân viên đang làm sai quy trình.",
      "Hiểu rõ cách thức tổ chức đang vận hành, phát hiện các điểm nghẽn (Bottlenecks), lãng phí (Waste), rủi ro kiểm soát và các nguyên nhân gốc rễ cần khắc phục.",
      "Sao chép nguyên vẹn quy trình thủ công hiện tại đưa vào phần mềm mà không cần thay đổi bất cứ điều gì.",
      "Để kéo dài thời gian dự án và tính thêm giờ công tư vấn cho khách hàng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Mô hình As-Is giúp thiết lập đường cơ sở (Baseline) để hiểu hiện trạng, từ đó xác định khoảng trống (GAP) và các cơ hội tối ưu hóa nghiệp vụ trước khi thiết kế To-Be."
  },
  {
    "track": 3,
    "id": "Q3-06",
    "level": 1,
    "q": "Khi kiểm tra sơ đồ BPMN do một Junior BA vẽ, bạn thấy một đường 'Sequence Flow' (mũi tên nét liền) nối từ một Activity bên trong Pool 'Khách hàng' sang một Activity bên trong Pool 'Ngân hàng'. Lỗi cú pháp này được sửa lại như thế nào cho đúng chuẩn?",
    "opts": [
      "Đổi Sequence Flow thành Message Flow (đường nét đứt, đầu có vòng tròn rỗng và mũi tên hở) vì Sequence Flow không được phép vượt qua ranh giới giữa hai Pool độc lập.",
      "Xóa bỏ Pool 'Khách hàng' và gộp tất cả công việc của khách hàng vào làm một Lane của 'Ngân hàng'.",
      "Giữ nguyên vì BPMN 2.0 hoàn toàn cho phép Sequence Flow nối tự do giữa các Pool khác nhau.",
      "Thay thế bằng đường Data Association nối với một cơ sở dữ liệu chung."
    ],
    "ans": 0,
    "exp": "Đáp án đúng là A. Quy tắc bất di bất dịch của BPMN 2.0: Sequence Flow chỉ điều phối luồng bên trong cùng 1 Pool; giao tiếp thông điệp giữa hai Pool độc lập bắt buộc phải dùng Message Flow (nét đứt)."
  },
  {
    "track": 3,
    "id": "Q3-07",
    "level": 1,
    "q": "Mô hình hóa quy trình duyệt đơn xin nghỉ phép: 'Nếu số ngày nghỉ <= 2 ngày thì chỉ cần Trưởng nhóm duyệt; Nếu số ngày nghỉ > 2 ngày thì bắt buộc phải có cả Trưởng nhóm và Trưởng phòng nhân sự cùng duyệt độc lập'. Sau Gateway rẽ nhánh, BA nên sử dụng cấu trúc cổng nào là chuẩn xác nhất?",
    "opts": [
      "Sử dụng 1 Exclusive Gateway để rẽ 2 nhánh: Nhánh 1 (<= 2 ngày) đi đến Activity 'Trưởng nhóm duyệt'; Nhánh 2 (> 2 ngày) đi vào 1 Parallel Gateway (AND) để kích hoạt song song cả 'Trưởng nhóm duyệt' và 'Trưởng phòng duyệt'.",
      "Sử dụng một Start Event mới cho mỗi loại đơn nghỉ phép.",
      "Chỉ sử dụng 1 Exclusive Gateway duy nhất và nối thẳng vào 1 Activity gộp chung.",
      "Sử dụng một Terminate Event để kết thúc quy trình nếu nhân viên nghỉ quá 2 ngày."
    ],
    "ans": 0,
    "exp": "Đáp án đúng là A. Phân nhánh logic theo số ngày nghỉ là loại trừ nhau (<=2 hoặc >2) nên dùng Exclusive Gateway (XOR). Ở nhánh > 2 ngày cần cả hai người cùng duyệt độc lập nên dùng Parallel Gateway (AND) để kích hoạt 2 luồng song song."
  },
  {
    "track": 3,
    "id": "Q3-08",
    "level": 1,
    "q": "Quy trình thanh toán trực tuyến: Khách hàng có tối đa 15 phút để quét mã QR thanh toán; nếu sau 15 phút chưa nhận được tiền, hệ thống tự động hủy đơn và hoàn lại tồn kho. Trong BPMN 2.0, cơ chế xử lý ngoại lệ này được biểu diễn chuẩn xác nhất bằng ký hiệu nào?",
    "opts": [
      "Một Start Event hình tròn rỗng nối trực tiếp vào Database.",
      "Một Intermediate Timer Boundary Event (Sự kiện đồng hồ đo thời gian gắn trên đường biên của Subprocess hoặc Activity thanh toán) kích hoạt luồng hủy đơn khi hết hạn 15 phút.",
      "Một End Event có biểu tượng dấu chéo màu đỏ ở góc màn hình.",
      "Một Sequence Flow nét đứt chạy vòng quanh toàn bộ Pool."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Boundary Timer Event gắn trên đường viền của Activity/Subprocess là mẫu thiết kế chuẩn (Pattern) trong BPMN để xử lý Timeout: nếu sự kiện chính chưa xong trong thời hạn quy định, luồng ngoại lệ sẽ bị ngắt và kích hoạt hành động xử lý quá hạn."
  },
  {
    "track": 3,
    "id": "Q3-09",
    "level": 1,
    "q": "Trong quy trình tiếp nhận hàng nhập kho: Khi kiện hàng đến, nhân viên A thực hiện 'Kiểm đếm số lượng vật lý' và nhân viên B thực hiện 'Quét mã vạch kiểm tra hạn sử dụng'. Hai công việc này diễn ra hoàn toàn độc lập cùng lúc. Sau khi cả hai hoàn thành xong, kiện hàng mới được 'Cập nhật trạng thái nhập kho'. Cặp Gateway nào được sử dụng?",
    "opts": [
      "Một Exclusive Gateway để tách nhánh và một Inclusive Gateway để gộp nhánh.",
      "Một Parallel Gateway (AND-Split) để phân tách thành 2 luồng song song và một Parallel Gateway (AND-Join) để đồng bộ hóa, chờ cả hai nhánh cùng xong mới đi tiếp.",
      "Một Event-based Gateway để chờ khách hàng gọi điện xác nhận.",
      "Không cần dùng Gateway nào, chỉ cần vẽ 2 mũi tên xuất phát từ cùng 1 Activity."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Mô hình Fork-Join kinh điển: Parallel Gateway (AND-Split) chia luồng song song, và Parallel Gateway (AND-Join) đóng vai trò điểm đồng bộ (Synchronization Barrier) chờ đủ tất cả nhánh hoàn thành mới mở luồng tiếp theo."
  },
  {
    "track": 3,
    "id": "Q3-10",
    "level": 1,
    "q": "Sự khác biệt giữa một 'Embedded Sub-process' (Quy trình con nhúng cục bộ) và một 'Call Activity / Reusable Sub-process' (Quy trình con tái sử dụng toàn cục) trong BPMN 2.0 là gì?",
    "opts": [
      "Embedded Sub-process có viền nét đậm hơn Call Activity.",
      "Embedded Sub-process phụ thuộc hoàn toàn vào ngữ cảnh và dữ liệu của quy trình cha (không thể gọi độc lập từ nơi khác); Call Activity đại diện cho một quy trình độc lập được định nghĩa toàn cục, có thể được tái sử dụng bởi nhiều quy trình nghiệp vụ khác nhau.",
      "Call Activity chỉ dùng để gọi điện thoại cho khách hàng, không thể chứa các hoạt động phần mềm.",
      "Embedded Sub-process bắt buộc phải vẽ trên một trang giấy riêng biệt."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B theo chuẩn BPMN 2.0. Call Activity (viền đậm) là thực thể quy trình tái sử dụng (như quy trình 'Xác thực OTP' hay 'Thanh toán' dùng chung cho nhiều ứng dụng). Embedded Sub-process chỉ tồn tại cục bộ trong lòng quy trình cha."
  },
  {
    "track": 3,
    "id": "Q3-11",
    "level": 1,
    "q": "Khi phân tích biểu đồ As-Is của quy trình cấp phép xây dựng, BA nhận thấy: Tại bước 'Thẩm định hồ sơ kỹ thuật', thời gian chờ đợi (Queue Time) trung bình là 18 ngày, trong khi thời gian xử lý thực tế (Processing Time) của chuyên viên chỉ mất 4 tiếng. Đây là dấu hiệu của hiện tượng gì?",
    "opts": [
      "Quy trình đang hoạt động với hiệu suất tối ưu tuyệt đối.",
      "Nút thắt cổ chai nghiêm trọng (Bottleneck) do quá tải nguồn lực thẩm định, thiếu cơ chế cân bằng tải hoặc quy trình chuyển giao hồ sơ thủ công bị ứ đọng.",
      "Lập trình viên viết mã nguồn phần mềm bị lỗi rò rỉ bộ nhớ (Memory Leak).",
      "Dữ liệu bản đồ quy hoạch bị sai lệch tọa độ địa lý."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Trong phân tích quy trình (Value Stream Mapping), tỷ lệ thời gian gia tăng giá trị (4h) quá nhỏ so với thời gian chờ lãng phí (18 ngày) là bằng chứng rõ ràng của điểm nghẽn năng lực (Resource Bottleneck) hoặc độ trễ chuyển giao hồ sơ."
  },
  {
    "track": 3,
    "id": "Q3-12",
    "level": 1,
    "q": "Trong BPMN 2.0, khi nào BA sử dụng 'Message Flow' thay vì 'Data Association'?",
    "opts": [
      "Khi muốn lưu trữ dữ liệu vào đĩa cứng máy chủ.",
      "Khi mô tả sự trao đổi thông điệp/tín hiệu giao tiếp giữa hai đối tượng tham gia độc lập thuộc hai Pool khác nhau; còn Data Association dùng để liên kết giữa Activity và Kho dữ liệu (Data Store / Data Object) bên trong cùng quy trình.",
      "Hai ký hiệu này hoàn toàn đồng nghĩa và có thể dùng thay thế tự do.",
      "Khi vẽ sơ đồ mạng máy tính cục bộ LAN trong văn phòng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Message Flow thể hiện sự tương tác liên tổ chức giữa các Pool. Data Association (đường chấm có mũi tên hở) kết nối luồng công việc với Data Objects hoặc Data Stores nội bộ."
  },
  {
    "track": 3,
    "id": "Q3-13",
    "level": 1,
    "q": "Khi mô hình hóa vòng đời đơn hàng thương mại điện tử bằng Biểu đồ Chuyển trạng thái (State Machine Diagram), thứ tự chuyển dịch trạng thái nào sau đây là hợp lệ và chặt chẽ nhất?",
    "opts": [
      "Đã giao hàng ➔ Chờ thanh toán ➔ Đang vận chuyển ➔ Đã tạo đơn.",
      "Tạo mới (Created) ➔ Chờ thanh toán (Pending Payment) ➔ Đã thanh toán (Paid) ➔ Đang đóng gói (Processing) ➔ Đang giao (In Transit) ➔ Giao thành công (Delivered) / Hoàn hàng (Returned).",
      "Đã hủy (Cancelled) ➔ Đã thanh toán (Paid) ➔ Tạo mới (Created).",
      "Đang giao hàng ➔ Chờ phê duyệt ngân sách ➔ Đóng tài khoản."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Vòng đời đơn hàng phản ánh tính logic thời gian của nghiệp vụ: từ khởi tạo, xác nhận thanh toán, xử lý kho, vận chuyển đến giao thành công hoặc kích hoạt luồng trả hàng ngoại lệ."
  },
  {
    "track": 3,
    "id": "Q3-14",
    "level": 2,
    "q": "Quy trình xử lý đơn hàng đa kho phức tạp: Khi nhận đơn hàng lớn, hệ thống kiểm tra Kho gần nhất; nếu thiếu hàng, hệ thống kích hoạt đồng thời kiểm tra 2 kho vệ tinh A và B. Ràng buộc: Chỉ cần 1 trong 2 kho vệ tinh xác nhận có đủ hàng trước là chốt đơn điều phối từ kho đó ngay, đồng thời lệnh kiểm tra tại kho vệ tinh còn lại phải bị hủy lập tức để tránh khóa hàng trùng lặp. Mô hình BPMN chuẩn xác nhất là gì?",
    "opts": [
      "Sử dụng 1 Exclusive Gateway thông thường nối tuần tự qua từng kho.",
      "Bọc việc kiểm tra hai kho vệ tinh trong một Sub-process chạy song song, sử dụng Event-based Gateway hoặc Intermediary Message Event kích hoạt một Terminate End Event bên trong Sub-process đó ngay khi một kho xác nhận thành công.",
      "Vẽ 2 Pool riêng cho 2 kho vệ tinh và dùng 10 đường Sequence Flow nối đan chéo qua lại.",
      "Yêu cầu nhân viên kho gọi điện thoại cho nhau để tự thương lượng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Mẫu thiết kế 'Race Condition / First-come First-served' trong BPMN: luồng chạy song song nhưng bị ngắt và hủy bỏ nhánh thua cuộc ngay khi nhánh đầu tiên chạm mốc thành công, đảm bảo giải phóng tài nguyên hàng hóa tức thì."
  },
  {
    "track": 3,
    "id": "Q3-15",
    "level": 2,
    "q": "Quy trình giải quyết chế độ tai nạn lao động liên cơ quan: Doanh nghiệp gửi hồ sơ sang Cơ quan Bảo hiểm Xã hội (BHXH); BHXH gửi yêu cầu xác nhận thương tật sang Bệnh viện; Bệnh viện gửi kết quả giám định y khoa về BHXH; BHXH duyệt chi và gửi thông báo cho Sở LĐTB&XH. Quá trình trao đổi này có thể bị trì hoãn hàng tuần và hồ sơ có thể bị trả về yêu cầu bổ sung nhiều lần. Kiến trúc mô hình BPMN nào là phù hợp nhất?",
    "opts": [
      "Gộp tất cả 4 cơ quan vào làm 4 Lane trong cùng 1 Pool duy nhất và dùng Sequence Flow nối tuần tự.",
      "Mô hình hóa dưới dạng sơ đồ Cộng tác (Collaboration Diagram) gồm 4 Pool độc lập đại diện cho 4 pháp nhân; sử dụng Message Flow để trao đổi thông điệp bất đồng bộ kèm các Intermediate Message Catching Event và Timer Event để quản lý thời hạn SLA phản hồi và vòng lặp bổ sung hồ sơ.",
      "Vẽ 1 hình chữ nhật lớn duy nhất ghi tên cả 4 cơ quan rồi dùng mũi tên chỉ thẳng vào ô 'Kết thúc'.",
      "Không thể mô hình hóa được vì các cơ quan nhà nước không dùng phần mềm chung."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Do 4 cơ quan là 4 pháp nhân độc lập có thẩm quyền và hệ thống riêng, bắt buộc phải dùng 4 Pool độc lập giao tiếp qua Message Flow bất đồng bộ. Gộp chung vào 1 Pool (A) là vi phạm nghiêm trọng chuẩn BPMN."
  },
  {
    "track": 3,
    "id": "Q3-16",
    "level": 2,
    "q": "Trong quy trình thanh toán vé xem phim trực tuyến: Khách hàng đã bị trừ tiền từ tài khoản ví điện tử, nhưng rạp chiếu phim phản hồi hết ghế do xung đột phút chót. Hệ thống phải kích hoạt 'Bù trừ giao dịch' (Compensation) để hoàn tiền tự động và hủy mã giữ chỗ. BPMN 2.0 cung cấp cơ chế chuẩn nào cho kịch bản giao dịch nghiệp vụ này?",
    "opts": [
      "Một Start Event loại lỗi.",
      "Sử dụng Transaction Subprocess có gắn Compensation Boundary Event kết nối với Compensation Activity (Hoàn tiền vào ví điện tử) khi nhận được Cancel End Event.",
      "Vẽ một mũi tên quay ngược trở lại bước đầu tiên của quy trình mà không làm gì thêm.",
      "Tắt máy chủ thanh toán để hệ thống tự khởi động lại vào ngày hôm sau."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Transaction Subprocess và Compensation Mechanism (ký hiệu hai tam giác tua ngược ⯬⯬) là mẫu thiết kế chuẩn trong BPMN 2.0 dành cho bài toán Saga / Bù trừ giao dịch phân tán khi một bước nghiệp vụ thất bại cần hoàn tác các bước trước đó."
  },
  {
    "track": 3,
    "id": "Q3-17",
    "level": 2,
    "q": "Quy trình xử lý hồ sơ hành chính công một cửa: Khi có một 'Công văn hỏa tốc' gửi đến từ Văn phòng Ủy ban Nhân dân Tỉnh, toàn bộ quy trình xử lý văn bản thông thường đang diễn ra tại phòng ban phải bị tạm ngắt ngay lập tức để ưu tiên xử lý công văn hỏa tốc trong vòng 2 giờ. Ký hiệu BPMN nào thể hiện chính xác hành vi này?",
    "opts": [
      "Một đường Sequence Flow nét đứt nối vào góc dưới màn hình.",
      "Một Interrupting Escalation (hoặc Signal) Boundary Event gắn trên Subprocess xử lý văn bản thông thường, khi sự kiện xảy ra sẽ lập tức ngắt luồng hiện tại và chuyển hướng điều khiển sang luồng xử lý ưu tiên hỏa tốc.",
      "Một End Event loại Terminate để xóa bỏ vĩnh viễn toàn bộ công văn thông thường trong hệ thống.",
      "Không thể vẽ được trên sơ đồ BPMN mà phải ghi chú bằng văn bản giấy đính kèm."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Interrupting Boundary Event (viền kép nét liền) có cơ chế ngắt cưỡng bức luồng công việc đang thực thi để chuyển sang luồng xử lý khẩn cấp (Escalation/Priority Handling), đúng bản chất nghiệp vụ công văn hỏa tốc."
  },
  {
    "track": 3,
    "id": "Q3-18",
    "level": 2,
    "q": "Smart Factory: Dây chuyền robot AGV vận chuyển linh kiện tự động gặp chướng ngại vật vật lý bất ngờ trên đường ray (vỡ hộp hàng rơi vãi). Cảm biến an toàn phát hiện sự cố. Hệ thống WCS phải: (1) Dừng khẩn cấp robot gặp sự cố; (2) Phát tín hiệu cô lập khu vực đường ray đó; (3) Tự động tái định tuyến (Reroute) các robot khác đi theo đường tránh mà không làm tê liệt toàn bộ dây chuyền. Mô hình hóa logic này bằng BPMN đòi hỏi sự kết hợp nào?",
    "opts": [
      "Chỉ dùng một Exclusive Gateway thông thường.",
      "Sử dụng Non-interrupting Error Boundary Event kết hợp với Parallel Gateway để phân nhánh đồng thời: một nhánh cô lập và gọi kỹ thuật viên hiện trường, một nhánh gửi tín hiệu Message Broadcast cập nhật bản đồ định tuyến mới cho các robot đang hoạt động.",
      "Vẽ sơ đồ nối trực tiếp từ cảm biến vào nút tắt nguồn điện nhà máy.",
      "Dùng 100 User Task thủ công để công nhân tự điều khiển robot bằng tay."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Sự cố cục bộ của 1 robot không được phép làm dừng toàn nhà máy. Dùng Parallel Gateway phân nhánh xử lý song song (vừa cô lập sửa chữa vừa phát lệnh Reroute cho các robot khác) duy trì tính sẵn sàng liên tục của dây chuyền."
  },
  {
    "track": 3,
    "id": "Q3-19",
    "level": 2,
    "q": "Tái thiết kế quy trình To-Be cho chuỗi cung ứng dược phẩm: Quy trình As-Is yêu cầu Dược sĩ trưởng phải ký duyệt thủ công 100% đơn đặt hàng thuốc cảm sốt thông thường của 500 nhà thuốc chi nhánh mỗi ngày (trung bình 3.000 đơn/ngày), gây trễ hạn giao thuốc nghiêm trọng. BA đề xuất nguyên tắc tối ưu hóa quy trình nào trong mô hình To-Be?",
    "opts": [
      "Thuê thêm 10 Dược sĩ trưởng nữa để cùng ngồi ký duyệt đơn hàng thủ công cả ngày.",
      "Áp dụng nguyên tắc 'Quản lý theo ngoại lệ' (Management by Exception): Hệ thống tự động phê duyệt và đẩy thẳng xuống kho xuất hàng đối với 95% đơn hàng thuốc thông thường nằm trong hạn mức và không có cảnh báo; chỉ chuyển hướng (Route) đến Dược sĩ trưởng phê duyệt đối với các đơn hàng chứa thuốc kiểm soát đặc biệt (gây nghiện, hướng thần) hoặc đơn có số lượng tăng đột biến >300%.",
      "Bỏ hoàn toàn khâu kiểm soát dược phẩm và cho phép nhà thuốc tự do xuất kho tùy ý.",
      "Bắt các nhà thuốc chỉ được đặt hàng 1 lần duy nhất trong tháng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. 'Management by Exception' (STP - Straight-Through Processing) là nguyên lý tái thiết kế quy trình kinh điển: giải phóng 95% khối lượng công việc thông thường cho máy tính xử lý tự động, chỉ đưa chuyên gia vào các trường hợp ngoại lệ rủi ro cao."
  },
  {
    "track": 3,
    "id": "Q3-20",
    "level": 2,
    "q": "Khi rà soát một sơ đồ BPMN quy trình mua sắm do đội nghiệp vụ vẽ, BA nhận thấy: Sơ đồ có hơn 50 Activity, 20 Gateway đan chéo chằng chịt không theo cấu trúc phân tầng (hiện tượng 'Spaghetti Process'), không ai có thể đọc hiểu được toàn cục. Chiến lược tái cấu trúc (Refactoring) mô hình quy trình nào là chuẩn mực nhất?",
    "opts": [
      "Xóa bỏ sơ đồ và chuyển toàn bộ sang viết văn xuôi dài 50 trang.",
      "Thu nhỏ kích thước font chữ và nén toàn bộ sơ đồ vào một trang giấy A0.",
      "Áp dụng nguyên tắc Phân rã theo cấp độ (Hierarchical Process Modeling): Xây dựng biểu đồ Cấp 0 (Level 0 - Value Chain / Quy trình tổng quan 5-7 bước chính); sau đó đóng gói các cụm hoạt động phức tạp thành các Sub-process / Call Activity ở Cấp 1 và Cấp 2, tuân thủ nguyên tắc 7±2 phần tử trên một màn hình hiển thị.",
      "Chỉ giữ lại 3 bước đầu tiên và cắt bỏ toàn bộ phần sau của quy trình."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Kỹ thuật Hierarchical Decomposition (Phân rã đa cấp độ) là chìa khóa quản trị độ phức tạp trong BPMN: tầng cao nhất nhìn tổng thể (Executive view), các tầng con đi sâu vào chi tiết kỹ thuật (Operational view), đảm bảo tính công thái học và khả năng bảo trì."
  },
  {
    "track": 4,
    "id": "Q4-01",
    "level": 0,
    "q": "Trong giai đoạn Phân tích Chiến lược & Thiết kế Giải pháp, ranh giới trách nhiệm giữa Business Analyst (BA) và Solution Architect (SA) được phân định chính xác như thế nào?",
    "opts": [
      "BA quyết định chọn ngôn ngữ lập trình và thiết kế bảng cơ sở dữ liệu, còn SA chỉ vẽ giao diện người dùng.",
      "BA tập trung định nghĩa 'Cái gì cần giải quyết và vì sao' (Vấn đề kinh doanh, giá trị, yêu cầu, quy tắc nghiệp vụ); SA chịu trách nhiệm 'Giải quyết bằng cách nào ở tầng kỹ thuật' (Kiến trúc hệ thống, công nghệ, cấu trúc dữ liệu và mô hình tích hợp).",
      "BA và SA là hai tên gọi khác nhau của cùng một vị trí công việc trong doanh nghiệp công nghệ.",
      "SA chịu trách nhiệm đàm phán hợp đồng giá tiền với khách hàng, còn BA chịu trách nhiệm viết code backend."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. BA làm chủ không gian bài toán (Problem Space: What & Why); SA làm chủ không gian giải pháp kỹ thuật (Solution Space: How). Sự phối hợp chặt chẽ giữa BA và SA đảm bảo giải pháp vừa đáp ứng mục tiêu kinh doanh vừa khả thi về mặt công nghệ."
  },
  {
    "track": 4,
    "id": "Q4-02",
    "level": 0,
    "q": "Khi tiến hành Đánh giá Tính khả thi (Feasibility Analysis) của một giải pháp đề xuất, mô hình TELOS đánh giá 5 khía cạnh cốt lõi nào?",
    "opts": [
      "Traffic, Errors, Latency, Output, Saturation.",
      "Technical (Kỹ thuật), Economic (Kinh tế/Chi phí - Lợi ích), Legal (Pháp lý), Operational (Vận hành), Schedule (Tiến độ/Thời gian).",
      "Testing, Execution, Logging, Optimization, Security.",
      "Team, Effort, Leadership, Organization, Scope."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B theo khung TELOS chuẩn quốc tế: Khả thi kỹ thuật (công nghệ làm được không), Kinh tế (có sinh lời/vừa ngân sách không), Pháp lý (có vi phạm luật không), Vận hành (tổ chức có dùng được không) và Tiến độ (có kịp deadline không)."
  },
  {
    "track": 4,
    "id": "Q4-03",
    "level": 0,
    "q": "Kỹ thuật 'Ma trận Quyết định có Trọng số' (Weighted Decision Matrix) giúp ích gì cho BA khi so sánh các phương án giải pháp khác nhau?",
    "opts": [
      "Tự động tạo ra mã nguồn phần mềm dựa trên các tiêu chí toán học.",
      "Lượng hóa và đánh giá khách quan các phương án giải pháp dựa trên một tập hợp các tiêu chí kinh doanh và kỹ thuật đã được gán trọng số ưu tiên theo mục tiêu chiến lược của tổ chức.",
      "Thay thế hoàn toàn vai trò phê duyệt của Ban Giám đốc trong việc lựa chọn nhà thầu.",
      "Dùng để tính toán chính xác số lượng lỗi lập trình viên sẽ tạo ra trong dự án."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Weighted Decision Matrix giúp loại bỏ cảm tính cá nhân bằng cách chấm điểm từng giải pháp (COTS vs Tự xây dựng vs Thuê ngoài) dựa trên các tiêu chí (chi phí, thời gian, độ linh hoạt) kèm trọng số phần trăm rõ ràng."
  },
  {
    "track": 4,
    "id": "Q4-04",
    "level": 0,
    "q": "Phương án 'Mua phần mềm đóng gói sẵn' (COTS - Commercial Off-The-Shelf) thường có ưu điểm và nhược điểm điển hình nào so với 'Tự phát triển theo yêu cầu' (Custom Build)?",
    "opts": [
      "Ưu điểm: Miễn phí hoàn toàn 100%; Nhược điểm: Không thể cài đặt trên máy tính.",
      "Ưu điểm: Thời gian triển khai nhanh, kế thừa thực tiễn tốt nhất của ngành (Best practices); Nhược điểm: Khó tùy biến sâu theo các quy trình đặc thù riêng biệt và có nguy cơ phụ thuộc nhà cung cấp (Vendor lock-in).",
      "Ưu điểm: Tùy biến tự do mọi chức năng; Nhược điểm: Không có tài liệu hướng dẫn sử dụng.",
      "Không có ưu điểm nào, tự viết phần mềm luôn luôn tốt hơn mua giải pháp có sẵn."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. COTS giúp rút ngắn thời gian ra mắt (Time-to-market) và đã được kiểm chứng qua nhiều khách hàng, nhưng nếu doanh nghiệp có quy trình độc thù cạnh tranh thì việc chỉnh sửa mã nguồn COTS sẽ cực kỳ tốn kém và rủi ro."
  },
  {
    "track": 4,
    "id": "Q4-05",
    "level": 0,
    "q": "Phân biệt giữa Proof of Concept (PoC) và Minimum Viable Product (MVP):",
    "opts": [
      "PoC là sản phẩm hoàn chỉnh để bán đại trà cho khách hàng; MVP chỉ là bản vẽ tay trên giấy của BA.",
      "PoC nhằm mục đích kiểm chứng tính khả thi kỹ thuật của một giả định hoặc công nghệ mới; MVP là một phiên bản sản phẩm có đầy đủ các tính năng cốt lõi tối thiểu để phát hành thực tế cho người dùng nhằm thu thập phản hồi học hỏi từ thị trường.",
      "Hai khái niệm này hoàn toàn đồng nghĩa và có thể dùng thay thế cho nhau trong mọi hoàn cảnh.",
      "PoC do phòng Marketing làm, còn MVP do phòng Kế toán phê duyệt."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. PoC kiểm tra 'Liệu công nghệ này có hoạt động được không?' (ví dụ thuật toán nhận diện khuôn mặt có đọc được trong bóng tối không). MVP là sản phẩm chạy thật có giá trị cốt lõi nhỏ nhất đưa đến tay khách hàng thật."
  },
  {
    "track": 4,
    "id": "Q4-06",
    "level": 1,
    "q": "Một doanh nghiệp sản xuất dệt may có 6.000 công nhân với cơ chế tính lương sản phẩm, thưởng phạt ca kíp và phụ cấp độc hại cực kỳ đặc thù, liên tục thay đổi theo từng đơn hàng xuất khẩu hàng tháng. Khi lựa chọn giữa Build (Tự phát triển) và Buy (Mua gói phần mềm nhân sự COTS nước ngoài), BA nên khuyến nghị hướng đi nào?",
    "opts": [
      "Mua gói COTS nước ngoài giá rẻ và ép công nhân phải đổi cách tính lương theo chuẩn của phần mềm.",
      "Khuyến nghị phương án Custom Build (hoặc mua nền tảng trong nước có mã nguồn mở cho phép tùy biến sâu), vì sự phức tạp và biến đổi liên tục của quy chế lương là năng lực cạnh tranh vận hành cốt lõi, việc chỉnh sửa COTS nước ngoài sẽ bất khả thi và chi phí bảo trì cực lớn.",
      "Từ chối làm phân hệ tính lương và tiếp tục tính bằng sổ tay ghi chép.",
      "Thuê sinh viên làm gia công phần mềm miễn phí trong 1 tuần."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Khi quy tắc nghiệp vụ mang tính chất đặc thù nội địa sâu sắc và biến động cao, việc ép mua COTS chuẩn quốc tế (A) thường dẫn tới thất bại do chi phí tùy biến (Customization cost) vượt quá chi phí tự xây dựng."
  },
  {
    "track": 4,
    "id": "Q4-07",
    "level": 1,
    "q": "Đề xuất đầu tư hệ thống quét mã vạch tự động tại kho hàng trị giá 1.2 tỷ VNĐ. Phân tích tài chính chỉ ra: Hệ thống giúp giảm 3 nhân sự kiểm đếm (tiết kiệm 360 triệu VNĐ/năm) và giảm tỷ lệ thất thoát hàng hóa hư hỏng ước tính 240 triệu VNĐ/năm. Thời gian hoàn vốn giản đơn (Payback Period) của giải pháp này là bao lâu?",
    "opts": [
      "Khoảng 5 năm.",
      "Đúng 2 năm (Tổng lợi ích tiết kiệm: 360 + 240 = 600 triệu/năm; 1.2 tỷ / 600 triệu = 2 năm).",
      "Khoảng 10 năm.",
      "Không bao giờ hoàn vốn được."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Công thức Payback Period = Chi phí đầu tư ban đầu / Lợi ích dòng ròng hàng năm = 1.200.000.000 / (360.000.000 + 240.000.000) = 2 năm. Đây là bài toán phân tích Cost-Benefit căn bản của BA."
  },
  {
    "track": 4,
    "id": "Q4-08",
    "level": 1,
    "q": "Trong phân tích chiến lược chuyển đổi số chuỗi bán lẻ thời trang, ma trận SWOT chỉ ra: Điểm mạnh (S) là có 200 cửa hàng phủ rộng toàn quốc; Cơ hội (O) là thị trường mua sắm trực tuyến trên điện thoại bùng nổ 40%/năm. Chiến lược SO (Tận dụng thế mạnh để đón đầu cơ hội) phù hợp nhất là gì?",
    "opts": [
      "Đóng cửa toàn bộ 200 cửa hàng vật lý để chuyển hẳn sang làm trang web bán hàng online.",
      "Xây dựng mô hình Omnichannel 'Click-and-Collect' (Bán hàng đa kênh): Cho phép khách hàng đặt hàng trực tuyến trên App và có thể nhận hàng hoặc đổi trả sản phẩm tại bất kỳ cửa hàng vật lý nào gần nhất trong vòng 30 phút.",
      "Không làm gì cả vì cửa hàng truyền thống đang kinh doanh ổn định.",
      "Bán bớt hàng tồn kho với giá 1.000 đồng để dọn dẹp mặt bằng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Chiến lược SO kết hợp sức mạnh mạng lưới cửa hàng sẵn có (S) với xu hướng thương mại điện tử (O) để tạo ra lợi thế cạnh tranh vượt trội mà các đối thủ thuần online không có được (BOPIS / Click-and-Collect)."
  },
  {
    "track": 4,
    "id": "Q4-09",
    "level": 1,
    "q": "Lựa chọn mô hình tích hợp dữ liệu giữa Cổng dịch vụ công cấp tỉnh và Hệ thống Hạch toán Kho bạc Nhà nước: Báo cáo đối soát chỉ cần nộp vào lúc 17h00 hàng ngày, số lượng giao dịch trong ngày là 30.000 bản ghi. Hạ tầng đường truyền giữa hai bên có băng thông thấp. Lựa chọn kiến trúc tích hợp nào là tối ưu nhất?",
    "opts": [
      "Bắt buộc gửi từng giao dịch realtime qua Webhook ngay khi phát sinh kể cả nửa đêm.",
      "Thiết kế cơ chế xử lý theo lô định kỳ (Batch Job Integration): Xuất gói dữ liệu mã hóa nén gzip vào cuối ngày lúc 17h05, truyền tải và đối soát hàng loạt một lần duy nhất trong khung giờ vắng tải, kèm cơ chế báo cáo sai lệch đối soát (Reconciliation Report).",
      "Cử nhân viên mang USB sang cắm trực tiếp vào máy chủ Kho bạc mỗi ngày.",
      "Bỏ qua khâu đối soát với Kho bạc Nhà nước."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Khi nghiệp vụ không đòi hỏi tức thời (chỉ cần chốt số cuối ngày) và băng thông mạng thấp, tích hợp Batch Job cuối ngày giúp giảm thiểu tài nguyên hệ thống, tránh nghẽn mạng và đối soát dữ liệu toàn vẹn hơn."
  },
  {
    "track": 4,
    "id": "Q4-10",
    "level": 1,
    "q": "Thiết kế giải pháp phân quyền truy cập (Role-Based Access Control - RBAC) trong Hệ thống Thông tin Bệnh viện (HIS): Nguyên tắc bảo mật 'Đặc quyền tối thiểu' (Principle of Least Privilege) được áp dụng như thế nào?",
    "opts": [
      "Cấp quyền Quản trị viên tối cao (Super Admin) cho tất cả Bác sĩ, Y tá và Thực tập sinh để thao tác cho tiện.",
      "Mỗi vai trò chỉ được cấp đúng và đủ quyền truy cập các chức năng và dữ liệu cần thiết để thực hiện nhiệm vụ công việc: Bác sĩ điều trị được xem và kê đơn bệnh án của khoa mình; Nhân viên thu ngân chỉ thấy thông tin viện phí cần thu mà không được xem chi tiết tiền sử bệnh án; Nhân viên tiếp đón chỉ thấy thông tin hành chính cơ bản.",
      "Mọi nhân viên bệnh viện đều có quyền xem toàn bộ hồ sơ bệnh án của tất cả bệnh nhân trong thành phố.",
      "Không cần phân quyền, ai vào trước thì làm việc trước."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Least Privilege là nguyên tắc vàng trong bảo mật hệ thống thông tin, đặc biệt trong ngành y tế và tài chính: chỉ cấp đúng quyền cần thiết cho vị trí công việc, ngăn chặn rò rỉ dữ liệu nhạy cảm."
  },
  {
    "track": 4,
    "id": "Q4-11",
    "level": 1,
    "q": "Dự án phần mềm Quản lý Bán hàng tại cửa hàng (POS) chuẩn bị triển khai giai đoạn Pilot (Thử nghiệm thực tế). Tiêu chí lựa chọn chi nhánh cửa hàng nào sau đây là phù hợp nhất để thử nghiệm Pilot?",
    "opts": [
      "Chọn chi nhánh có doanh số lớn nhất toàn quốc chiếm 50% doanh thu công ty để thử nghiệm ngay ngày Tết.",
      "Chọn một chi nhánh có quy mô vừa phải, có đầy đủ các luồng nghiệp vụ đại diện (bán lẻ, đổi trả hàng, xuất hóa đơn VAT, thanh toán thẻ) và có người Quản lý chi nhánh cởi mở, sẵn sàng hợp tác đóng góp phản hồi cải tiến.",
      "Chọn một chi nhánh sắp đóng cửa giải thể để nếu có hỏng phần mềm cũng không ảnh hưởng ai.",
      "Không cần làm Pilot, triển khai đồng loạt 500 cửa hàng cùng lúc trong một đêm duy nhất."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Địa điểm Pilot lý tưởng phải có tính đại diện cao về mặt nghiệp vụ nhưng quy mô rủi ro được kiểm soát (không gây tê liệt doanh nghiệp), đồng thời nhân sự tại chỗ phải có tinh thần xây dựng và phản hồi tích cực."
  },
  {
    "track": 4,
    "id": "Q4-12",
    "level": 1,
    "q": "Trong quá trình đánh giá gói phần mềm SaaS nước ngoài quản lý khách hàng (CRM), BA phát hiện: Máy chủ của nhà cung cấp đặt hoàn toàn tại Bắc Mỹ và chính sách điều khoản không hỗ trợ lưu trữ dữ liệu tại Việt Nam. Rủi ro giải pháp nào được xác định?",
    "opts": [
      "Không có rủi ro nào, phần mềm nước ngoài luôn hợp pháp tuyệt đối.",
      "Rủi ro tuân thủ pháp lý nghiêm trọng (Legal Compliance Risk): Vi phạm Luật An ninh mạng và Nghị định bảo vệ dữ liệu cá nhân (PDPD) của Việt Nam quy định về việc lưu trữ dữ liệu cá nhân của người dùng Việt Nam tại lãnh thổ trong nước.",
      "Rủi ro về màu sắc giao diện không hợp phong thủy.",
      "Rủi ro lập trình viên không biết tiếng Anh."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Tuân thủ luật pháp sở tại (Data Residency / Sovereignty) là tiêu chí tiên quyết trong TELOS. Vi phạm quy định này có thể dẫn tới bị phạt hàng tỷ đồng hoặc bị cơ quan chức năng chặn truy cập dịch vụ."
  },
  {
    "track": 4,
    "id": "Q4-13",
    "level": 1,
    "q": "Hệ thống nhận diện khuôn mặt chấm công tại cổng vào nhà máy sản xuất (có 3.000 công nhân vào ca cùng lúc lúc 7h30 sáng). Thiết kế giải pháp phòng ngừa rủi ro mất kết nối mạng Internet (Offline Fallback Strategy) nào là chuẩn xác nhất?",
    "opts": [
      "Cho công nhân đứng ngoài cổng chờ đợi đến khi nhà mạng sửa xong đường truyền Internet.",
      "Thiết bị chấm công tại cổng lưu trữ cơ sở dữ liệu mẫu khuôn mặt cục bộ (Local Edge Database) và thực hiện nhận diện offline độc lập tại chỗ; lưu bản ghi chấm công có chữ ký số vào bộ nhớ máy; tự động đồng bộ ngầm (Background Sync) lên máy chủ trung tâm ngay khi có kết nối trở lại.",
      "Tuyên bố công nhân được nghỉ làm hưởng nguyên lương nếu mạng Internet bị đứt.",
      "Tắt máy chấm công và yêu cầu công nhân tự ký tên vào một tờ giấy A4 duy nhất."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Chiến lược Offline-First / Local Fallback đảm bảo tính liên tục vận hành kinh doanh (Business Continuity): hệ thống vẫn phục vụ bình thường tại chỗ ngay cả khi đứt cáp quang biển, sau đó tự hồi phục dữ liệu."
  },
  {
    "track": 4,
    "id": "Q4-14",
    "level": 2,
    "q": "Hệ thống phần mềm Monolith thương mại điện tử hiện tại bị sập liên tục mỗi đợt Siêu Sale do quá tải cơ sở dữ liệu. Giám đốc Công nghệ (CTO) đề xuất 'Đập bỏ toàn bộ hệ thống cũ để xây dựng lại từ đầu theo kiến trúc Microservices phân tán 100% trong 18 tháng với ngân sách gấp 3 lần'. Tuy nhiên, Ban Giám đốc yêu cầu phải duy trì kinh doanh liên tục và chuẩn bị cho mùa khuyến mại lớn sau 4 tháng nữa. Là Senior BA tư vấn chiến lược, bạn đề xuất giải pháp kiến trúc chuyển đổi nào?",
    "opts": [
      "Hoàn toàn đồng ý với CTO và cho dừng toàn bộ hoạt động bán hàng của công ty trong 18 tháng để chờ hệ thống mới.",
      "Áp dụng mẫu hình kiến trúc chuyển đổi Strangler Fig Pattern: Giữ nguyên hệ thống Monolith cũ làm nền tảng, bóc tách riêng các phân hệ chịu tải cao nhất (như Giỏ hàng và Cổng thanh toán) ra thành các dịch vụ độc lập kết hợp cơ chế bộ nhớ đệm phân tán (Redis Cache) và hàng đợi (Kafka) trong 3 tháng; các phân hệ khác tiếp tục chuyển đổi dần dần theo lộ trình nhiều năm.",
      "Phản đối mọi sự thay đổi và đề xuất tiếp tục dùng hệ thống cũ bị sập.",
      "Chỉ thay đổi giao diện website cho đẹp hơn để đánh lạc hướng người dùng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Strangler Fig Pattern là phương pháp luận chuẩn quốc tế để chuyển đổi từ Monolith sang Microservices mà không gặp rủi ro 'Big Bang': bóc tách từng phần có giá trị cao nhất trước, vừa giải quyết khủng hoảng 4 tháng tới vừa giữ hoạt động kinh doanh liên tục."
  },
  {
    "track": 4,
    "id": "Q4-15",
    "level": 2,
    "q": "Hệ thống Quản lý Thực thi Kho hàng (WES) trong kho tự động hóa: Dây chuyền robot AGV đòi hỏi công suất xử lý xuất hàng 3.500 pallet/giờ (khoảng 60 lệnh/giây). Tuy nhiên, hệ thống ERP kế toán cũ của tập đoàn chỉ có thể tiếp nhận tối đa 10 yêu cầu API/giây, nếu gửi quá sẽ bị tràn bộ nhớ và treo máy chủ tài chính. Giải pháp thiết kế tầng đệm tích hợp (Integration Buffering) nào thỏa mãn cả hai ràng buộc?",
    "opts": [
      "Bắt robot AGV chạy chậm lại 6 lần để không làm hỏng máy chủ ERP kế toán.",
      "Thiết kế cơ chế Bất đồng bộ qua Hàng đợi Thông điệp (Message Queue / Event-Driven Architecture): WES thực thi việc xuất pallet với tốc độ tối đa của robot và đẩy các sự kiện hoàn tất vào hàng đợi tin cậy (Kafka/RabbitMQ); một tiến trình xử lý nền (Worker Consumer) sẽ trích xuất dữ liệu từ hàng đợi và điều tiết tốc độ (Rate Limiting) nạp vào ERP đúng ngưỡng an toàn 10 req/s.",
      "Cho phép ERP bị sập và khởi động lại thủ công sau mỗi giờ làm việc.",
      "Xóa bỏ hệ thống ERP kế toán và không ghi nhận số sách tài chính nữa."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Khi có sự chênh lệch lớn về công suất thông lượng (Throughput Mismatch) giữa hệ thống vật lý tốc độ cao và hệ thống kế toán chậm chạp, kiến trúc hướng sự kiện (EDA) có hàng đợi đệm (Message Queue) và điều tiết tải (Rate Limiting) là giải pháp tiêu chuẩn."
  },
  {
    "track": 4,
    "id": "Q4-16",
    "level": 2,
    "q": "Dự án Cổng dịch vụ công cấp tỉnh: Lãnh đạo tỉnh muốn giao diện hiện đại, tích hợp bản đồ 3D tương tác và nhiều hiệu ứng đồ họa hoành tráng để trình diễn. Tuy nhiên, kết quả khảo sát của BA chỉ ra 70% người dân nộp hồ sơ sinh sống ở khu vực miền núi, sử dụng điện thoại thông minh giá rẻ đời cũ và đường truyền mạng 3G chập chờn. BA cần xây dựng lập luận phân tích chiến lược như thế nào để thuyết phục Lãnh đạo?",
    "opts": [
      "Làm đúng theo ý thích 3D của Lãnh đạo và phớt lờ khó khăn của người dân vùng sâu vùng xa.",
      "Trực tiếp phê phán Lãnh đạo là lãng phí và không hiểu biết gì về công nghệ.",
      "Sử dụng dữ liệu thực tế và phân tích Trade-off: Đo lường tốc độ tải trang 3D trên thiết bị phổ thông (mất >25 giây, tỷ lệ tải trang thất bại 60%); đề xuất phương án 'Kiến trúc Giao diện Thích ứng (Adaptive UX / Progressive Enhancement)': Cung cấp chế độ mặc định siêu nhẹ, tối ưu tải dưới 1.5 giây cho 100% công dân nộp hồ sơ, đồng thời xây dựng một trang Dashboard tổng quan riêng biệt dành riêng cho phòng điều hành của Lãnh đạo trình diễn.",
      "Hủy bỏ dự án dịch vụ công và chuyển sang phát triển game 3D."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Senior BA giải quyết bài toán kỳ vọng chính trị của lãnh đạo bằng dữ liệu khách quan và giải pháp lưỡng toàn kỳ mỹ (Progressive Enhancement): tách biệt giao diện phục vụ đại chúng siêu nhẹ với màn hình điều hành trình diễn chuyên biệt."
  },
  {
    "track": 4,
    "id": "Q4-17",
    "level": 2,
    "q": "Hệ thống Bệnh án điện tử (EMR) cho mạng lưới 10 bệnh viện: Dữ liệu ảnh chụp cộng hưởng từ MRI và cắt lớp CT-Scan có dung lượng cực lớn (500MB đến 1GB/ca chụp). Bác sĩ phòng cấp cứu đòi hỏi phải xem được hình ảnh trong vòng 3 giây khi có ca bệnh khẩn cấp. Tuy nhiên, ngân sách chi trả cho dung lượng lưu trữ Cloud tốc độ cao hàng tháng bị Hội đồng quản trị giới hạn cứng. Thiết kế giải pháp phân tầng lưu trữ (Tiered Storage Strategy) nào tối ưu nhất?",
    "opts": [
      "Nén giảm chất lượng ảnh xuống 90% khiến hình ảnh bị mờ và bác sĩ không chẩn đoán được bệnh.",
      "Áp dụng Phân tầng Dữ liệu theo Vòng đời (Data Lifecycle Tiering): Dữ liệu hình ảnh của bệnh nhân đang điều trị nội trú trong 30 ngày gần nhất được lưu trên bộ nhớ đệm hiệu năng cao (Hot Storage / Local Edge Server tại bệnh viện) để truy xuất tức thì <2 giây; sau 30 ngày bệnh nhân xuất viện, hình ảnh tự động di chuyển sang tầng lưu trữ chi phí thấp (Cold / Archive Cloud Storage) với chi phí chỉ bằng 1/10.",
      "Xóa toàn bộ hình ảnh MRI ngay sau khi bác sĩ đọc xong ca chụp.",
      "Yêu cầu bệnh nhân tự mang theo ổ cứng di động để copy ảnh về nhà tự bảo quản."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Tiered Storage (Hot vs Cold Storage) giải quyết hoàn hảo bài toán cân bằng giữa tốc độ truy xuất cứu mạng bệnh nhân trong ca cấp cứu và bài toán chi phí tài chính hữu hạn của bệnh viện."
  },
  {
    "track": 4,
    "id": "Q4-18",
    "level": 2,
    "q": "Hệ thống sàn thương mại điện tử tích hợp với 5 đơn vị vận chuyển (3PL): Mỗi đối tác giao hàng có biểu phí khác nhau theo khu vực, thời gian giao hàng cam kết khác nhau và tỷ lệ giao hàng thành công thất thường. Khách hàng mong muốn gói cước ship rẻ nhất nhưng vẫn đảm bảo đúng hạn. Giải pháp thiết kế công cụ Định tuyến đơn hàng thông minh (Smart Order Routing Engine) cần quy định logic gì?",
    "opts": [
      "Luôn luôn gán 100% đơn hàng cho 1 đơn vị vận chuyển duy nhất dù giá đắt hay rẻ.",
      "Thiết lập thuật toán tối ưu đa mục tiêu (Multi-objective Routing Algorithm): Tự động tính toán điểm số tổng hợp dựa trên 3 tiêu chí theo trọng số: (1) Chi phí vận chuyển thực tế cho tuyến đường đó; (2) Cam kết SLA thời gian giao hàng so với mốc hẹn của khách; (3) Điểm đánh giá chất lượng dịch vụ (Performance Score / Success rate) 7 ngày gần nhất của từng đối tác.",
      "Cho phép tài xế của các hãng vận chuyển tự vào phần mềm tranh giành đơn hàng.",
      "Yêu cầu người mua hàng tự liên hệ với các hãng vận chuyển để thỏa thuận giá cước."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Smart Order Routing là giải pháp cốt lõi của E-Logistics: kết hợp linh hoạt giữa chi phí, thời gian và dữ liệu độ tin cậy lịch sử thực tế của từng đối tác 3PL để tự động hóa việc chọn lựa tối ưu cho từng bưu kiện."
  },
  {
    "track": 4,
    "id": "Q4-19",
    "level": 2,
    "q": "Bài toán Quản lý Dữ liệu Tổng thể (Master Data Management - MDM) của một tập đoàn bán lẻ: Khách hàng VIP vừa tự cập nhật số điện thoại mới trên Ứng dụng Di động, nhưng cùng lúc đó nhân viên chăm sóc khách hàng tại tổng đài lại sửa đổi thông tin của khách theo dữ liệu cũ trên phần mềm CRM nội bộ. Xung đột dữ liệu (Data Conflict) phát sinh. Cơ chế giải quyết xung đột nguồn chân lý duy nhất (Single Source of Truth) nào chuẩn xác nhất?",
    "opts": [
      "Hệ thống tự động xóa sạch thông tin của khách hàng để không ai dùng được nữa.",
      "Xác lập ma trận quyền ưu tiên theo miền thuộc tính (Attribute-level Master Authority): Đối với thông tin liên lạc cá nhân (SĐT, Email), hành động tự xác thực kèm OTP của chính chủ trên Ứng dụng Di động được gán quyền ưu tiên cao nhất (Golden Record); hệ thống tự động đồng bộ đè dữ liệu mới này sang CRM kèm lịch sử kiểm toán nguồn thay đổi.",
      "Ai lưu dữ liệu sau cùng thì người đó thắng bất kể nguồn gốc từ đâu mà không cần ghi log.",
      "Bắt khách hàng phải đến trụ sở chính của tập đoàn để ký đơn xác nhận số điện thoại."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Trong MDM, nguyên tắc Golden Record phân quyền theo thuộc tính (Attribute-level Source of Truth): dữ liệu do chính chủ xác thực qua OTP luôn có độ tin cậy cao hơn thông tin gián tiếp do nhân viên nhập thủ công."
  },
  {
    "track": 4,
    "id": "Q4-20",
    "level": 2,
    "q": "Đánh giá hiệu quả giải pháp sau 6 tháng go-live: Phân hệ 'Gợi ý sản phẩm thông minh bằng AI' tiêu tốn 35% chi phí hạ tầng máy chủ hàng tháng của công ty, nhưng số liệu phân tích kinh doanh cho thấy tính năng này chỉ đóng góp tăng thêm 0.6% tổng doanh thu (trong khi mục tiêu kinh doanh đề ra ban đầu là tăng 5%). Là Senior BA phụ trách đánh giá giá trị giải pháp, khuyến nghị nào là đúng đắn nhất?",
    "opts": [
      "Bỏ qua số liệu tài chính và tiếp tục duy trì vì công nghệ AI nghe rất hợp xu hướng thời đại.",
      "Tiến hành phân tích sâu nguyên nhân thất bại: Kiểm tra chất lượng dữ liệu đầu vào và thuật toán gợi ý; nếu chi phí hạ tầng (Cost) tiếp tục vượt xa giá trị kinh doanh tạo ra (ROI âm) và không có lộ trình tối ưu hóa khả thi, khuyến nghị Ban Lãnh đạo dừng phân hệ AI này hoặc chuyển đổi sang giải pháp gợi ý theo quy tắc thống kê đơn giản (Rule-based) để cắt giảm chi phí.",
      "Tăng gấp đôi ngân sách máy chủ để xem AI có thông minh hơn không.",
      "Đổ lỗi hoàn toàn cho đội ngũ Marketing không biết quảng cáo tính năng mới."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Năng lực quan trọng của Senior BA là Solution Evaluation: dũng cảm nhìn thẳng vào chỉ số ROI thực tế, không bị mắc bẫy tâm lý chi phí chìm (Sunk Cost Fallacy) hay chạy theo trào lưu công nghệ nếu không mang lại giá trị kinh tế thực chất."
  },
  {
    "track": 5,
    "id": "Q5-01",
    "level": 0,
    "q": "Trong ngôn ngữ truy vấn SQL tiêu chuẩn, sự khác biệt căn bản giữa phép nối 'INNER JOIN' và 'LEFT JOIN' là gì?",
    "opts": [
      "INNER JOIN chạy nhanh gấp 10 lần LEFT JOIN trong mọi trường hợp.",
      "INNER JOIN chỉ trả về các bản ghi có sự trùng khớp khóa ở cả hai bảng; LEFT JOIN trả về toàn bộ bản ghi từ bảng bên trái kèm dữ liệu trùng khớp từ bảng bên phải (nếu không có khớp thì các cột bảng phải nhận giá trị NULL).",
      "LEFT JOIN bắt buộc phải xóa bỏ các bản ghi trùng lặp trong cơ sở dữ liệu.",
      "INNER JOIN chỉ áp dụng cho bảng có ít hơn 100 dòng dữ liệu."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. INNER JOIN là phép giao (Intersection) giữa hai bảng; LEFT JOIN giữ lại 100% bản ghi của bảng bên trái (Left table), điền NULL cho các trường không tìm thấy đối ứng bên bảng phải."
  },
  {
    "track": 5,
    "id": "Q5-02",
    "level": 0,
    "q": "Mệnh đề 'WHERE' và mệnh đề 'HAVING' trong câu lệnh SQL khác nhau như thế nào khi làm việc với phép nhóm dữ liệu (GROUP BY)?",
    "opts": [
      "WHERE lọc dữ liệu trên từng hàng riêng lẻ trước khi thực hiện nhóm dữ liệu; HAVING lọc dữ liệu trên các giá trị tổng hợp (Aggregate values) sau khi đã nhóm dữ liệu bằng GROUP BY.",
      "WHERE chỉ dùng cho số, còn HAVING chỉ dùng cho chuỗi ký tự văn bản.",
      "HAVING bắt buộc phải đứng trước mệnh đề FROM.",
      "Hai mệnh đề này hoàn toàn giống nhau và có thể đổi chỗ tự do cho nhau."
    ],
    "ans": 0,
    "exp": "Đáp án đúng là A. Thứ tự thực thi logic trong SQL: FROM ➔ WHERE (lọc từng dòng) ➔ GROUP BY ➔ HAVING (lọc trên kết quả hàm tổng hợp như SUM, COUNT, AVG) ➔ SELECT ➔ ORDER BY."
  },
  {
    "track": 5,
    "id": "Q5-03",
    "level": 0,
    "q": "Khái niệm 'Khóa ngoại' (Foreign Key) và 'Tính toàn vẹn tham chiếu' (Referential Integrity) trong cơ sở dữ liệu quan hệ có ý nghĩa gì?",
    "opts": [
      "Dùng để dịch các câu lệnh SQL sang tiếng nước ngoài.",
      "Khóa ngoại là một trường trong một bảng liên kết với Khóa chính của bảng khác; Tính toàn vẹn tham chiếu đảm bảo không thể tạo ra bản ghi con tham chiếu đến một bản ghi cha không tồn tại, và ngăn chặn việc vô tình xóa bản ghi cha khi dữ liệu con vẫn còn phụ thuộc.",
      "Khóa ngoại chỉ dùng để mã hóa mật khẩu người dùng trong bảng Users.",
      "Khóa ngoại cho phép người dùng nhập tự do bất kỳ giá trị nào mà không cần kiểm tra tính hợp lệ."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Ràng buộc toàn vẹn tham chiếu (Foreign Key Constraint) ngăn chặn hiện tượng dữ liệu mồ côi (Orphan records), ví dụ không thể tạo đơn hàng cho một `customer_id` không hề tồn tại trong bảng Customers."
  },
  {
    "track": 5,
    "id": "Q5-04",
    "level": 0,
    "q": "Sự khác biệt cốt lõi giữa hệ thống Cơ sở dữ liệu Giao dịch (OLTP) và Kho dữ liệu Phân tích (OLAP / Data Warehouse) là gì?",
    "opts": [
      "OLTP dùng để in báo cáo cuối năm, còn OLAP dùng để khách hàng bấm mua hàng trên website.",
      "OLTP (Online Transaction Processing) tối ưu hóa cho các thao tác đọc/ghi giao dịch nhanh, tần suất cao, dữ liệu chuẩn hóa chi tiết; OLAP (Online Analytical Processing) tối ưu hóa cho các truy vấn phức tạp, tổng hợp dữ liệu lịch sử lớn phục vụ báo cáo quản trị và BI.",
      "OLTP chỉ hoạt động trên mạng nội bộ, còn OLAP chỉ chạy trên điện thoại di động.",
      "OLTP không cần sao lưu dữ liệu, còn OLAP bắt buộc phải sao lưu từng giây."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. OLTP (như MySQL, PostgreSQL cho đơn hàng) cần tốc độ commit giao dịch nhanh và chuẩn hóa (Normalized 3NF). OLAP (như BigQuery, Snowflake) phi chuẩn hóa (Star/Snowflake Schema) để quét hàng triệu dòng phục vụ phân tích xu hướng."
  },
  {
    "track": 5,
    "id": "Q5-05",
    "level": 0,
    "q": "Giá trị 'NULL' trong ngôn ngữ SQL được định nghĩa chính xác như thế nào và nó ảnh hưởng ra sao đến hàm đếm COUNT?",
    "opts": [
      "NULL tương đương với số 0 hoặc chuỗi ký tự rỗng ''; hàm COUNT(column) luôn đếm cả giá trị NULL.",
      "NULL đại diện cho giá trị chưa biết hoặc dữ liệu bị thiếu (Unknown/Missing value); hàm COUNT(column) sẽ bỏ qua (không đếm) các giá trị NULL, trong khi COUNT(*) đếm toàn bộ số lượng hàng bất kể có NULL hay không.",
      "NULL là một lỗi cú pháp khiến câu truy vấn SQL bị dừng hoạt động ngay lập tức.",
      "Phép so sánh `column = NULL` luôn luôn trả về kết quả TRUE trong SQL."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. NULL không phải số 0 hay rỗng. `COUNT(column_name)` chỉ đếm các dòng non-null; `COUNT(*)` đếm tổng số dòng. Ngoài ra, phép so sánh với NULL phải dùng `IS NULL` hoặc `IS NOT NULL`, dùng toán tử `=` luôn trả về Unknown."
  },
  {
    "track": 5,
    "id": "Q5-06",
    "level": 1,
    "q": "BA cần xuất danh sách các khách hàng đã đăng ký tài khoản nhưng chưa từng phát sinh bất kỳ đơn hàng nào trong hệ thống. Câu lệnh SQL nào thể hiện logic chuẩn xác nhất?",
    "opts": [
      "SELECT * FROM Customers INNER JOIN Orders ON Customers.id = Orders.customer_id;",
      "SELECT Customers.id, Customers.name FROM Customers LEFT JOIN Orders ON Customers.id = Orders.customer_id WHERE Orders.id IS NULL;",
      "SELECT * FROM Customers WHERE id IN (SELECT customer_id FROM Orders);",
      "DELETE FROM Customers WHERE Orders.id IS NULL;"
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Đây là mẫu truy vấn Anti-Join kinh điển trong SQL: dùng `LEFT JOIN` với bảng Orders rồi lọc những dòng có `Orders.id IS NULL` để tìm các bản ghi bên trái không có bất kỳ liên kết nào bên phải."
  },
  {
    "track": 5,
    "id": "Q5-07",
    "level": 1,
    "q": "BA muốn tính giá trị đơn hàng trung bình (AOV) theo từng danh mục sản phẩm trong tháng 10/2026, nhưng chỉ hiển thị các danh mục có tổng số đơn hàng lớn hơn 50 đơn. Đoạn truy vấn nào sắp xếp đúng các mệnh đề?",
    "opts": [
      "SELECT category_id, AVG(total_amount) FROM Orders WHERE order_date >= '2026-10-01' AND order_date < '2026-11-01' GROUP BY category_id HAVING COUNT(id) > 50;",
      "SELECT category_id, AVG(total_amount) FROM Orders HAVING COUNT(id) > 50 WHERE order_date = '10/2026' GROUP BY category_id;",
      "SELECT category_id, AVG(total_amount) FROM Orders GROUP BY category_id WHERE COUNT(id) > 50;",
      "SELECT category_id, SUM(total_amount) FROM Orders WHERE COUNT(id) > 50 GROUP BY category_id;"
    ],
    "ans": 0,
    "exp": "Đáp án đúng là A. Mệnh đề `WHERE` lọc theo khoảng thời gian trước khi nhóm dòng; `GROUP BY category_id` thực hiện gom nhóm; và `HAVING COUNT(id) > 50` lọc các nhóm có số lượng thỏa mãn điều kiện tổng hợp."
  },
  {
    "track": 5,
    "id": "Q5-08",
    "level": 1,
    "q": "Một báo cáo kinh doanh ghi nhận chỉ số Người dùng hoạt động hàng tháng (Monthly Active Users - MAU). BA phát hiện câu lệnh SQL đang dùng là `SELECT COUNT(user_id) FROM User_Activity_Log WHERE activity_month = '2026-10'`. Lỗi sai logic nghiêm trọng ở đây là gì?",
    "opts": [
      "Không có lỗi nào, câu lệnh đã hoàn hảo.",
      "Câu lệnh này đếm tổng số lượt hành động (Events) chứ không đếm số lượng người dùng độc nhất; một người dùng đăng nhập 50 lần sẽ bị đếm thành 50 người, làm thổi phồng chỉ số MAU. Cần sửa thành `COUNT(DISTINCT user_id)`.",
      "Phải đổi thành hàm `SUM(user_id)` mới tính đúng số người dùng.",
      "Phải xóa mệnh đề WHERE để lấy dữ liệu toàn bộ các năm trước."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Đây là lỗi phổ biến nhất của người mới học SQL: dùng `COUNT(user_id)` trên bảng log giao dịch dẫn đến việc trùng lặp người dùng. Đo lường MAU/DAU bắt buộc phải dùng `COUNT(DISTINCT user_id)`."
  },
  {
    "track": 5,
    "id": "Q5-09",
    "level": 1,
    "q": "Để kiểm tra tính toàn vẹn dữ liệu đơn hàng, BA chạy truy vấn đối chiếu giữa giá bán thực tế lưu trong chi tiết đơn hàng (`Order_Items.unit_price`) và giá niêm yết của sản phẩm (`Products.price`). Phát hiện có sự sai lệch ở 5% số dòng đơn hàng cũ. Kết luận phân tích nào là hợp lý nhất?",
    "opts": [
      "Cơ sở dữ liệu bị hỏng hoàn toàn, cần xóa bảng Order_Items đi tạo lại.",
      "Đây là đặc thù nghiệp vụ đúng: Bảng `Order_Items` phải lưu lại giá lịch sử tại thời điểm mua (Snapshot Price), trong khi `Products.price` là giá hiện hành đã bị thay đổi theo thời gian; nếu có chênh lệch ở các đơn hàng phát sinh sau khi đổi giá niêm yết thì đó là hành vi chuẩn xác.",
      "Lập trình viên đã ăn cắp tiền của công ty bằng cách sửa giá trong cơ sở dữ liệu.",
      "Tất cả các sản phẩm có giá sai lệch đều là hàng giả."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Trong thiết kế CSDL thương mại điện tử, chi tiết đơn hàng bắt buộc phải lưu giá tại thời điểm giao dịch (`historical_price`). Giá trong bảng Products thay đổi trong tương lai không được phép làm thay đổi số tiền của các hóa đơn lịch sử."
  },
  {
    "track": 5,
    "id": "Q5-10",
    "level": 1,
    "q": "Khi lập tài liệu Từ điển Dữ liệu (Data Dictionary) cho bảng `Inventory_Transactions` (Giao dịch kho hàng), trường `quantity` (Số lượng xuất nhập) nên được định nghĩa kiểu dữ liệu và ràng buộc nào là chặt chẽ nhất đối với hàng hóa bán theo đơn vị chiếc?",
    "opts": [
      "Kiểu dữ liệu VARCHAR(255) cho phép nhập tùy ý chữ và số.",
      "Kiểu dữ liệu INTEGER, ràng buộc NOT NULL, kết hợp kiểm tra CHECK (quantity != 0) để đảm bảo mọi giao dịch đều phải có số lượng cụ thể và không chấp nhận giá trị bằng 0.",
      "Kiểu dữ liệu BOOLEAN chỉ lưu giá trị Đúng/Sai.",
      "Không cần định nghĩa kiểu dữ liệu để hệ quản trị tự động đoán."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Số lượng hàng hóa đếm được phải là số nguyên (INTEGER), bắt buộc có giá trị (NOT NULL) và giao dịch kho phải có số lượng khác 0 (CHECK constraint)."
  },
  {
    "track": 5,
    "id": "Q5-11",
    "level": 1,
    "q": "BA muốn phân loại khách hàng thành 3 nhóm dựa trên tổng số tiền đã chi tiêu: 'VIP' (từ 50 triệu trở lên), 'Thân thiết' (từ 10 triệu đến dưới 50 triệu), và 'Tiêu chuẩn' (dưới 10 triệu). Cú pháp mệnh đề SQL nào thực hiện chuẩn xác?",
    "opts": [
      "IF total_spent >= 50000000 THEN 'VIP' ELSE 'Tiêu chuẩn';",
      "CASE WHEN total_spent >= 50000000 THEN 'VIP' WHEN total_spent >= 10000000 THEN 'Thân thiết' ELSE 'Tiêu chuẩn' END AS customer_tier",
      "SWITCH(total_spent) CASE 50000000: 'VIP';",
      "WHERE total_spent BETWEEN 'VIP' AND 'Thân thiết'"
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Cú pháp `CASE WHEN ... THEN ... ELSE ... END` là cấu trúc điều kiện chuẩn hóa của ngôn ngữ SQL để biến đổi và gắn nhãn phân đoạn dữ liệu một cách linh hoạt."
  },
  {
    "track": 5,
    "id": "Q5-12",
    "level": 1,
    "q": "Khi hợp nhất dữ liệu danh sách khách hàng từ hai công ty sáp nhập bằng SQL, sự khác biệt giữa toán tử `UNION` và `UNION ALL` là gì?",
    "opts": [
      "UNION xóa bảng dữ liệu cũ, còn UNION ALL giữ lại bảng cũ.",
      "UNION tự động lọc bỏ các bản ghi trùng lặp hoàn toàn giữa hai tập kết quả (kèm chi phí sắp xếp dữ liệu); UNION ALL giữ nguyên toàn bộ các bản ghi kể cả trùng lặp và có tốc độ thực thi nhanh hơn.",
      "UNION ALL chỉ lấy các khách hàng có tên bắt đầu bằng chữ A.",
      "Hai toán tử này hoàn toàn giống nhau 100%."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. `UNION` thực hiện thao tác loại bỏ trùng lặp (Deduplication) nên tốn tài nguyên sắp xếp (Sort/Distinct). `UNION ALL` ghép nối thuần túy (Concatenate) nhanh hơn nhiều, phù hợp khi chắc chắn hai tập dữ liệu độc lập hoặc cần giữ nguyên bản ghi trùng."
  },
  {
    "track": 5,
    "id": "Q5-13",
    "level": 1,
    "q": "Một BA thực hiện câu lệnh: `SELECT * FROM Customers JOIN Orders ON Customers.id = Orders.customer_id JOIN Addresses ON Customers.id = Addresses.customer_id`. Biết một khách hàng có 3 đơn hàng và 2 địa chỉ nhận hàng. Kết quả trả về cho khách hàng này sẽ có bao nhiêu dòng dữ liệu và hiện tượng này gọi là gì?",
    "opts": [
      "Trả về đúng 1 dòng dữ liệu duy nhất.",
      "Trả về 6 dòng dữ liệu (3 đơn hàng x 2 địa chỉ); đây là hiện tượng Nhân tích Đề-các / Thổi phồng dữ liệu (Cartesian Product / Data Fan-out) do JOIN đồng thời nhiều mối quan hệ 1-Nhiều.",
      "Trả về đúng 5 dòng dữ liệu (3 + 2).",
      "Hệ thống báo lỗi cú pháp và không trả về dòng nào."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Khi JOIN đồng thời hai bảng con quan hệ 1-N (Orders và Addresses) vào cùng một bảng cha (Customers), số dòng bị nhân lên theo cấp số nhân (3 x 2 = 6). Hiện tượng Data Fan-out này làm sai lệch hoàn toàn các phép tính tổng SUM/COUNT nếu không gom nhóm cẩn thận."
  },
  {
    "track": 5,
    "id": "Q5-14",
    "level": 2,
    "q": "Phân tích Tỷ lệ Giữ chân Khách hàng theo đoàn hệ (Retention Cohort Analysis): BA muốn tính tỷ lệ người dùng đăng ký vào Tháng 1/2026 có quay lại thực hiện giao dịch vào Tháng 2 và Tháng 3. Logic truy vấn SQL nâng cao nào là chuẩn xác nhất?",
    "opts": [
      "Dùng lệnh SELECT * FROM Users WHERE register_date = 'Tháng 1' rồi đếm bằng tay trên Excel.",
      "Sử dụng bảng tạm / CTE (Common Table Expression): CTE 1 xác định ngày giao dịch đầu tiên (First Purchase Cohort) của từng `user_id`; CTE 2 nối với các giao dịch tiếp theo; dùng hàm phân tích thời gian DATE_DIFF để tính số tháng chênh lệch (Month 0, Month 1, Month 2); sau đó dùng hàm COUNT(DISTINCT user_id) kết hợp GROUP BY cohort_month và pivot tỷ lệ phần trăm.",
      "Dùng lệnh DELETE xóa toàn bộ người dùng không giao dịch ở Tháng 2 để lấy danh sách Tháng 3.",
      "Chỉ cần tính tổng số tiền của toàn công ty chia cho 12 tháng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Phân tích Cohort đòi hỏi kỹ thuật CTE / Subquery xác định mốc First-touch của từng khách hàng, sau đó đo lường hoạt động tái mua ở các chu kỳ tiếp theo (Period Offset) bằng hàm thời gian và COUNT DISTINCT."
  },
  {
    "track": 5,
    "id": "Q5-15",
    "level": 2,
    "q": "Bài toán Đối soát Tài chính tự động: Bảng `OMS_Orders` ghi nhận trạng thái đơn hàng nội bộ, bảng `Bank_Transactions` ghi nhận sao kê tiền về từ cổng thanh toán. Cần tìm các giao dịch sai lệch rủi ro cao: (1) OMS ghi nhận 'Đã thanh toán' nhưng Bank không có tiền về; (2) Bank đã trừ tiền của khách nhưng OMS lại ghi nhận 'Đã hủy'. Mẫu truy vấn SQL nào khoanh vùng được cả hai trường hợp sai lệch này?",
    "opts": [
      "Sử dụng phép nối toàn phần `FULL OUTER JOIN OMS_Orders O ON O.trans_id = B.trans_id FULL OUTER JOIN Bank_Transactions B` kết hợp điều kiện `WHERE (O.status = 'PAID' AND B.trans_id IS NULL) OR (B.status = 'SUCCESS' AND (O.status = 'CANCELLED' OR O.trans_id IS NULL))`.",
      "Chỉ dùng INNER JOIN để lấy các giao dịch hoàn toàn khớp nhau.",
      "Dùng lệnh DROP TABLE để xóa hai bảng và tải lại file sao kê mới.",
      "Chỉ cần kiểm tra tổng số tiền của hai bảng có bằng nhau hay không mà không cần soi từng giao dịch."
    ],
    "ans": 0,
    "exp": "Đáp án đúng là A. Phép nối `FULL OUTER JOIN` giữ lại dữ liệu của cả hai phía, cho phép dùng mệnh đề `WHERE` để bắt trọn vẹn cả 2 trường hợp bất thường đối soát: lệch phía OMS (bán hàng nhưng không có tiền) và lệch phía Bank (thu tiền khách nhưng hủy đơn)."
  },
  {
    "track": 5,
    "id": "Q5-16",
    "level": 2,
    "q": "Hệ thống IoT quan trắc môi trường thông minh: Hàng nghìn cảm biến gửi dữ liệu nhiệt độ mỗi 10 giây. Do hiện tượng nhiễu sóng vô tuyến, thỉnh thoảng xuất hiện các giá trị dị biệt ảo (Spikes: nhiệt độ nhảy vọt lên 999°C trong đúng 10 giây rồi quay về 25°C). Để vẽ biểu đồ xu hướng chính xác cho nhà máy, BA cần hướng dẫn kỹ sư dữ liệu xử lý truy vấn SQL như thế nào?",
    "opts": [
      "Tính trung bình cộng AVG toàn bộ dữ liệu bao gồm cả các điểm 999°C.",
      "Sử dụng hàm cửa sổ phân tích (Window Function: `AVG() OVER (PARTITION BY sensor_id ORDER BY timestamp ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING)`) để tính trung bình trượt (Moving Average); hoặc kết hợp lọc bỏ ngoại lệ bằng ngưỡng giá trị vật lý khả thi (ví dụ WHERE temperature BETWEEN -10 AND 60) trước khi tổng hợp.",
      "Xóa bỏ hoàn toàn cảm biến đó khỏi hệ thống và mua cảm biến mới.",
      "Làm tròn tất cả nhiệt độ về số 0°C để tránh sai lệch."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Kỹ thuật lọc nhiễu chuỗi thời gian (Time-series Noise Filtering) bằng ngưỡng vật lý (Domain boundaries) và hàm cửa sổ tính trung bình trượt (Moving Average) giúp triệt tiêu các gai nhọn ảo (Spikes) mà không làm mất tính liên tục của dữ liệu."
  },
  {
    "track": 5,
    "id": "Q5-17",
    "level": 2,
    "q": "Báo cáo Dashboard phân tích doanh số của Tổng Giám đốc bị phản ánh tải quá chậm (mất 45 giây và thường xuyên bị timeout), do câu lệnh SQL phải thực hiện quét toàn bộ (Full Table Scan) và JOIN 7 bảng giao dịch lớn với hơn 100 triệu dòng mỗi lần người dùng mở trang. Là BA phân tích dữ liệu, giải pháp thiết kế nào bền vững nhất?",
    "opts": [
      "Khuyên Tổng Giám đốc kiên nhẫn ngồi chờ 45 giây mỗi khi xem báo cáo.",
      "Đề xuất xây dựng Bảng Tổng hợp Tinh gọn (Data Mart / Pre-aggregated Summary Table): Sử dụng một tiến trình ETL/ELT tự động tính toán sẵn các chỉ số doanh thu theo ngày, theo danh mục và chi nhánh vào ban đêm lúc 2h00 sáng; câu truy vấn Dashboard ban ngày chỉ cần SELECT trực tiếp từ bảng tổng hợp này trong thời gian dưới 0.2 giây.",
      "Xóa bớt 90 triệu dòng dữ liệu lịch sử của công ty đi để bảng nhẹ bớt.",
      "Cắt giảm báo cáo của Tổng Giám đốc và chỉ gửi báo cáo giấy hàng tháng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Đây là nguyên lý cốt lõi của Kiến trúc Kho Dữ liệu (Data Warehousing): tách biệt tầng dữ liệu giao dịch chi tiết (Raw Details) với tầng dữ liệu phân tích tổng hợp (Pre-aggregated Data Marts) để đáp ứng thời gian phản hồi tức thì cho Dashboard lãnh đạo."
  },
  {
    "track": 5,
    "id": "Q5-18",
    "level": 2,
    "q": "Hệ thống quản lý biến động giá sản phẩm lịch sử (Slowly Changing Dimensions - SCD Type 2): Giá niêm yết của sản phẩm thay đổi 4 lần trong năm 2026. Khi BA viết câu truy vấn tính tổng doanh thu lịch sử chính xác của các đơn hàng phát sinh trong năm, logic kết nối dữ liệu giữa bảng `Orders` và bảng lịch sử giá `Product_Price_History` phải thỏa mãn điều kiện nào?",
    "opts": [
      "Luôn luôn nhân số lượng đơn hàng với mức giá đắt nhất của sản phẩm.",
      "Kết nối bằng điều kiện khoảng thời gian hiệu lực của mức giá: `ON Orders.product_id = Price_History.product_id AND Orders.order_date >= Price_History.start_date AND (Orders.order_date < Price_History.end_date OR Price_History.end_date IS NULL)`.",
      "Chỉ lấy mức giá hiện tại của ngày hôm nay để nhân ngược lại cho toàn bộ đơn hàng trong quá khứ.",
      "Không cần kết nối giá, chỉ cần cộng tổng số lượng sản phẩm bán được."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B theo chuẩn thiết kế kho dữ liệu Kimball (SCD Type 2): mỗi mức giá lịch sử có một khoảng hiệu lực (`start_date` đến `end_date`), đơn hàng phát sinh vào ngày nào bắt buộc phải ánh xạ đúng mức giá có hiệu lực tại thời điểm đó."
  },
  {
    "track": 5,
    "id": "Q5-19",
    "level": 2,
    "q": "Bài toán làm sạch dữ liệu định danh công dân trong Cổng dịch vụ công: Do lịch sử chuyển đổi giấy tờ, một công dân có thể xuất hiện nhiều tài khoản trùng lặp (lúc đăng ký bằng CMND 9 số cũ, lúc đăng ký bằng CCCD 12 số mới). Làm thế nào để BA thiết kế truy vấn và quy tắc đối soát tự động để hợp nhất định danh (Identity Deduplication) mà không bị gộp nhầm?",
    "opts": [
      "Cứ thấy trùng Họ và Tên là tự động gộp tất cả làm một người duy nhất.",
      "Sử dụng kỹ thuật đối khớp đa tầng (Multi-tier Deterministic & Probabilistic Matching): Tầng 1 đối chiếu bảng ánh xạ lịch sử cấp đổi từ Bộ Công an (CMND cũ ➔ CCCD mới); Tầng 2 kiểm tra kết hợp đồng thời [Số điện thoại chính chủ + Ngày tháng năm sinh + Mã thẻ BHYT]; các trường hợp chỉ trùng họ tên nhưng lệch ngày sinh hoặc lệch số điện thoại phải được đẩy ra hàng đợi xác thực thủ công.",
      "Xóa toàn bộ các tài khoản đăng ký bằng CMND cũ và bắt người dân đăng ký lại từ đầu.",
      "Để nguyên dữ liệu trùng lặp và không làm gì cả."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Hợp nhất định danh (Entity Resolution) trong hệ thống hành chính công đòi hỏi thuật toán đối chiếu đa thuộc tính kết hợp bảng ánh xạ lịch sử chính thống; tuyệt đối không được gộp thuần túy theo họ tên (A) vì tỷ lệ trùng tên ở Việt Nam cực kỳ cao."
  },
  {
    "track": 5,
    "id": "Q5-20",
    "level": 2,
    "q": "Phân tích Phễu Chuyển đổi (Conversion Funnel) của sàn thương mại điện tử: Tỷ lệ người dùng bỏ cuộc (Drop-off Rate) tại bước 'Xác nhận Địa chỉ giao hàng' tăng đột biến từ 14% lên 48% ngay sau bản phát hành ứng dụng phiên bản mới. BA kết hợp phân tích dữ liệu SQL và điều tra như thế nào để tìm ra nguyên nhân gốc rễ?",
    "opts": [
      "Khẳng định do người dùng tháng này hết tiền nên không muốn mua hàng nữa.",
      "Truy vấn bảng Log lỗi ứng dụng (`App_Error_Logs`) nhóm theo phiên bản ứng dụng và thiết bị: Phát hiện bản cập nhật mới có lỗi Crash hoặc không hiển thị danh sách Quận/Huyện trên các dòng máy Android đời cũ; đồng thời đo lường thời gian phản hồi API gợi ý địa chỉ (Latency > 10s gây timeout) để phối hợp với đội Dev vá lỗi khẩn cấp.",
      "Tăng gấp đôi ngân sách quảng cáo Facebook để bù đắp số người dùng bỏ cuộc.",
      "Xóa bỏ hoàn toàn bước nhập địa chỉ giao hàng khỏi ứng dụng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Khi một bước trong phễu chuyển đổi sụt giảm đột biến sau bản cập nhật, BA dữ liệu phải đào sâu vào log lỗi kỹ thuật (Error logs phân rã theo Device/OS) và độ trễ API để tìm ra bug chức năng hoặc sự cố hiệu năng gây rào cản người dùng."
  },
  {
    "track": 6,
    "id": "Q6-01",
    "level": 0,
    "q": "Ba trụ cột thực nghiệm (Empirical Pillars) của khung làm việc Scrum theo Scrum Guide chính thức bao gồm những yếu tố nào?",
    "opts": [
      "Minh bạch (Transparency), Thanh tra (Inspection), và Thích ứng (Adaptation).",
      "Kế hoạch cố định (Fixed Plan), Quy trình chặt chẽ (Rigid Process), và Kiểm soát chi phí (Cost Control).",
      "Viết tài liệu chi tiết (Detailed Docs), Đàm phán hợp đồng (Negotiation), và Báo cáo cấp trên (Reporting).",
      "Tự động hóa hoàn toàn (Automation), Không cần họp hành (No Meetings), và Tự do tuyệt đối (Absolute Freedom)."
    ],
    "ans": 0,
    "exp": "Đáp án đúng là A. Scrum dựa trên thuyết thực nghiệm (Empiricism) với 3 trụ cột: Minh bạch (mọi người đều hiểu rõ hiện trạng), Thanh tra (liên tục xem xét tiến độ và sản phẩm), và Thích ứng (điều chỉnh ngay khi phát hiện sai lệch)."
  },
  {
    "track": 6,
    "id": "Q6-02",
    "level": 0,
    "q": "Trong một Scrum Team chuẩn mực, vai trò của Business Analyst (BA) được định vị như thế nào?",
    "opts": [
      "BA là một vị trí quản lý đứng trên Scrum Master và Product Owner để ký duyệt kế hoạch Sprint.",
      "Scrum Guide không định nghĩa chức danh 'BA' riêng biệt; BA là thành viên nhóm phát triển (Developers) sở hữu chuyên môn phân tích nghiệp vụ, hoặc cộng tác chặt chẽ hỗ trợ Product Owner làm mịn và quản lý Backlog.",
      "BA bắt buộc phải thay thế Scrum Master điều phối các cuộc họp hàng ngày Daily Scrum.",
      "BA là người đại diện khách hàng ký hợp đồng kinh tế và quyết định mức lương thưởng của các lập trình viên."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Scrum chỉ có 3 trách nhiệm cốt lõi: Product Owner, Scrum Master và Developers. Bất kỳ ai tham gia tạo ra sản phẩm (BA, Dev, QA, UX) đều thuộc nhóm Developers, hoặc BA đóng vai trò Business/Product Specialist trợ lực đắc lực cho PO."
  },
  {
    "track": 6,
    "id": "Q6-03",
    "level": 0,
    "q": "Sự khác biệt căn bản giữa Definition of Ready (DoR) và Definition of Done (DoD) trong quy trình Agile là gì?",
    "opts": [
      "DoR áp dụng cho toàn bộ dự án khi nghiệm thu; DoD chỉ áp dụng khi bắt đầu thành lập công ty.",
      "DoR là tiêu chuẩn chất lượng của một User Story trước khi được nhóm đưa vào Sprint Backlog để phát triển; DoD là tiêu chuẩn chung để xác định một Increment hay tính năng đã hoàn thiện 100%, sẵn sàng bàn giao hoặc release.",
      "DoR chỉ do Tester kiểm tra; DoD chỉ do Product Owner tự duyệt một mình mà không cần Dev.",
      "Hai thuật ngữ này hoàn toàn đồng nghĩa và có thể dùng thay thế cho nhau trong mọi biên bản họp."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. DoR (Sẵn sàng để làm) là 'cửa vào' đảm bảo Story đã đủ rõ ràng, có tiêu chí nghiệm thu và khả năng estimate. DoD (Định nghĩa hoàn thành) là 'cửa ra' đảm bảo chất lượng kỹ thuật (code review, test, tài liệu, build) để tính năng đạt chuẩn Release."
  },
  {
    "track": 6,
    "id": "Q6-04",
    "level": 0,
    "q": "Một User Story được coi là đạt tiêu chuẩn chất lượng theo bộ tiêu chí INVEST khi thỏa mãn các yếu tố nào?",
    "opts": [
      "Immediate, Necessary, Validated, Extended, Structured, Timebound.",
      "Independent (Độc lập), Negotiable (Có thể thương lượng), Valuable (Có giá trị), Estimable (Ước lượng được), Small (Đủ nhỏ gọn), Testable (Kiểm thử được).",
      "Important, New, Visual, Expressive, Standard, Technical.",
      "Integrated, Networked, Verified, Encrypted, Scalable, Trackable."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. INVEST (Bill Wake) là bộ tiêu chí chuẩn mực cho User Story: Độc lập để dễ ưu tiên; Thương lượng được thay vì hợp đồng đóng băng; Mang lại giá trị cho người dùng/doanh nghiệp; Đủ rõ để ước lượng; Nhỏ gọn trong Sprint; và Có thể kiểm thử nghiệm thu được."
  },
  {
    "track": 6,
    "id": "Q6-05",
    "level": 0,
    "q": "Trong 5 sự kiện Scrum chính thức, sự kiện nào có mục tiêu cốt lõi là thanh tra chính bản thân quy trình làm việc, mối quan hệ con người và công cụ để đề xuất cải tiến cho Sprint kế tiếp?",
    "opts": [
      "Sprint Planning (Lập kế hoạch Sprint).",
      "Daily Scrum (Họp đứng hàng ngày).",
      "Sprint Retrospective (Cải tiến Sprint).",
      "Sprint Review (Đánh giá và Demo sản phẩm)."
    ],
    "ans": 2,
    "exp": "Đáp án đúng là C. Sprint Review tập trung thanh tra sản phẩm (Product Increment) với Stakeholders. Trong khi đó, Sprint Retrospective (Họp hồi tưởng / Cải tiến) tập trung thanh tra quy trình nội bộ, con người, công cụ và văn hóa nhóm để tìm ra hành động cải tiến ngay trong Sprint tới."
  },
  {
    "track": 6,
    "id": "Q6-06",
    "level": 1,
    "q": "Trong buổi Backlog Refinement, khi thảo luận User Story 'Tích hợp cổng thanh toán quốc tế mới', Đội Dev tuyên bố không thể estimate vì tài liệu API đối tác chưa đầy đủ và cơ chế Webhook chưa rõ ràng. Là BA của nhóm, hành động chuẩn mực nhất của bạn là gì?",
    "opts": [
      "Ép đội Dev gán bừa một con số 8 Story Points để kịp chốt kế hoạch Sprint sắp tới.",
      "Đề xuất tạo một 'Spike Story' (Nghiên cứu có giới hạn thời gian/Timebox) để 1 Dev làm việc cùng BA kết nối trực tiếp với kỹ thuật cổng thanh toán, đồng thời hoãn đưa Story chính vào Sprint cho đến khi thỏa mãn DoR.",
      "Hủy bỏ hoàn toàn tính năng thanh toán quốc tế và yêu cầu khách hàng chỉ dùng tiền mặt.",
      "Tự mình viết code mẫu giả lập tích hợp rồi yêu cầu Dev copy nguyên bản mà không cần nghiên cứu thêm."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Khi thiếu hụt thông tin kỹ thuật nghiêm trọng dẫn đến không thể ước lượng (vi phạm chữ 'E' trong INVEST), giải pháp tốt nhất là tạo Spike Story (Timebox research) để giải tỏa rủi ro kỹ thuật, đảm bảo Story chính đáp ứng DoR trước khi đưa vào Sprint."
  },
  {
    "track": 6,
    "id": "Q6-07",
    "level": 1,
    "q": "Khi xây dựng User Story Map cho giai đoạn Release MVP của ứng dụng Đặt xe công nghệ, BA nên sắp xếp cấu trúc ma trận hai chiều như thế nào?",
    "opts": [
      "Trục ngang sắp xếp các bảng cơ sở dữ liệu; trục dọc sắp xếp mã lỗi HTTP từ 200 đến 500.",
      "Trục ngang theo luồng hành trình người dùng (User Activities / Backbone từ Mở app -> Tìm chuyến -> Đặt xe -> Thanh toán -> Đánh giá); trục dọc thể hiện mức độ ưu tiên giảm dần chia thành các lát cắt Release (MVP, Release 2, Release 3).",
      "Trục ngang liệt kê danh sách nhân sự tham gia dự án; trục dọc liệt kê số giờ chấm công mỗi ngày.",
      "Trục ngang là các điều khoản pháp lý hợp đồng; trục dọc là biểu đồ phân bổ ngân sách tài chính."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Kỹ thuật User Story Mapping (Jeff Patton) tổ chức trục ngang là 'Backbone' (dòng thời gian hành trình trải nghiệm người dùng), và trục dọc là các tầng câu chuyện chi tiết được cắt ngang (slicing) thành các phiên bản phát hành từ MVP đến các giai đoạn tiếp theo."
  },
  {
    "track": 6,
    "id": "Q6-08",
    "level": 1,
    "q": "Một User Story 'Khách hàng đăng ký tài khoản và hoàn tất eKYC xác thực căn cước công dân' được nhóm estimate lên tới 21 Story Points vì quá phức tạp. Là BA, bạn nên áp dụng chiến lược phân tách (Story Splitting) nào hợp lý nhất?",
    "opts": [
      "Tách theo phân lớp kiến trúc kỹ thuật: Story 1 viết bảng DB, Story 2 viết API Backend, Story 3 vẽ giao diện Frontend (Horizontal slicing).",
      "Tách dọc theo quy trình và độ phức tạp nghiệp vụ (Vertical slicing): Story 1 là Đăng ký tài khoản cơ bản bằng SĐT/OTP để đăng nhập được ngay; Story 2 là Xác thực eKYC luồng chuẩn (Happy path); Story 3 xử lý các ngoại lệ (OCR mờ, khuôn mặt không khớp).",
      "Giữ nguyên 21 points và kéo dài thời gian Sprint từ 2 tuần lên 8 tuần để nhóm làm cho xong.",
      "Xóa bỏ hoàn toàn khâu eKYC để Story giảm xuống còn 1 point mà không cần quan tâm đến quy định phòng chống rửa tiền."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Nguyên tắc Agile đòi hỏi phân tách lát cắt dọc (Vertical slicing) để mỗi mảnh nhỏ đều mang lại giá trị có thể chuyển giao (Deliverable value). Phân tách ngang theo tầng kỹ thuật (DB/API/FE) sẽ tạo ra các phần không độc lập và không thể demo giá trị thực cho người dùng."
  },
  {
    "track": 6,
    "id": "Q6-09",
    "level": 1,
    "q": "Product Owner muốn dành 100% dung lượng Sprint cho các tính năng thương mại mới, nhưng Tech Lead cảnh báo hệ thống đang có 'Nợ kỹ thuật' (Technical Debt) nghiêm trọng khiến thời gian tải trang tăng từ 1s lên 9s. Là BA, bạn hỗ trợ nhóm giải quyết mâu thuẫn này thế nào?",
    "opts": [
      "Đứng về phía PO hoàn toàn và bác bỏ cảnh báo của Tech Lead vì nợ kỹ thuật không sinh ra doanh thu trực tiếp.",
      "Hỗ trợ Tech Lead chuyển hóa rủi ro kỹ thuật thành tác động nghiệp vụ (Ví dụ: Thời gian tải trang 9s làm tăng tỷ lệ bỏ giỏ hàng 35% và sụt giảm doanh thu), từ đó giúp PO cân đối tỷ trọng backlog (ví dụ dành 20% dung lượng mỗi Sprint cho kỹ thuật/tối ưu).",
      "Khuyên Tech Lead âm thầm tự sửa ngoài giờ mà không cần ghi nhận bất cứ thông tin nào vào Backlog.",
      "Đề xuất dừng toàn bộ hoạt động kinh doanh của công ty trong 6 tháng để viết lại toàn bộ mã nguồn từ đầu."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Vai trò cầu nối của BA là lượng hóa nợ kỹ thuật thành tác động kinh doanh (Business Impact & Customer Experience). Việc này giúp PO hiểu giá trị kinh tế của việc trả nợ kỹ thuật và đồng thuận trích tỷ lệ phù hợp (thường 15-25% capacity) để duy trì sự bền vững của sản phẩm."
  },
  {
    "track": 6,
    "id": "Q6-10",
    "level": 1,
    "q": "Tiêu chí nghiệm thu (Acceptance Criteria) viết theo định dạng Gherkin (Given-When-Then) nào dưới đây đặc tả chính xác kịch bản áp mã giảm giá khi giỏ hàng chưa đạt giá trị đơn tối thiểu?",
    "opts": [
      "Khi khách bấm nút mua thì hệ thống phải chạy mượt mà không bị treo máy.",
      "Given Khách hàng có giỏ hàng trị giá 200.000 VNĐ và mã 'SALE50' yêu cầu đơn tối thiểu 300.000 VNĐ; When Khách hàng áp dụng mã 'SALE50'; Then Hệ thống từ chối áp dụng, hiển thị thông báo lỗi 'Đơn hàng cần tối thiểu 300.000 VNĐ để sử dụng mã này', và tổng tiền giữ nguyên 200.000 VNĐ.",
      "Given Khách hàng muốn mua đồ rẻ; When Khách nhập mã bất kỳ; Then Giảm giá 50% ngay lập tức bất kể giá trị đơn hàng là bao nhiêu.",
      "Then Khách hàng thấy vui mừng; When Hệ thống tính toán xong; Given Giỏ hàng đã có hàng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Cú pháp Gherkin chuẩn: Given (Tiền điều kiện/Bối cảnh dữ liệu) -> When (Hành động người dùng/Kích hoạt) -> Then (Kết quả mong đợi quan sát được và trạng thái dữ liệu). Câu B đặc tả rõ ràng giá trị, thông điệp lỗi và trạng thái tổng tiền."
  },
  {
    "track": 6,
    "id": "Q6-11",
    "level": 1,
    "q": "Trong buổi họp Sprint Review, một Giám đốc kinh doanh cấp cao bất ngờ yêu cầu thay đổi toàn bộ luồng thanh toán và đổi màu nhận diện vì không đúng ý thích cá nhân của ông. Đội ngũ Scrum (PO, BA, Dev) nên phản hồi như thế nào?",
    "opts": [
      "Ngay lập tức chấp nhận và hứa sửa xong ngay trong đêm để làm hài lòng sếp.",
      "Lắng nghe, ghi nhận ý kiến phản hồi như một đề xuất giá trị vào Product Backlog; PO và BA sẽ cùng phân tích dữ liệu hành vi người dùng, đánh giá tác động chi phí và ưu tiên nó trong các Sprint tương lai theo mục tiêu sản phẩm.",
      "Mời Giám đốc kinh doanh rời khỏi cuộc họp vì Sprint Review cấm không cho Stakeholder phát biểu ý kiến.",
      "Yêu cầu đội Dev hủy bỏ toàn bộ kết quả của Sprint vừa làm và rollback lại phiên bản cũ."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Sprint Review là cơ hội thu thập phản hồi (Feedback Loop). Nhóm không từ chối thô bạo nhưng cũng không bao giờ cam kết sửa ngay lập tức làm vỡ kế hoạch; mọi thay đổi đều phải được đưa vào Product Backlog để PO cân nhắc ưu tiên dựa trên giá trị và dữ liệu."
  },
  {
    "track": 6,
    "id": "Q6-12",
    "level": 1,
    "q": "Trong phiên Planning Poker ước lượng Story 'Đồng bộ hóa tồn kho đa sàn', một Dev Senior chấm 3 điểm, trong khi hai Dev Junior chấm 13 điểm. Là BA tham gia phiên họp, bạn cần can thiệp như thế nào?",
    "opts": [
      "Lấy trung bình cộng (3 + 13 + 13) / 3 = 9.66 và làm tròn thành 10 điểm để kết thúc cuộc họp sớm.",
      "Mời hai bạn Dev có điểm số cao nhất và thấp nhất chia sẻ góc nhìn và giả định của họ; từ đó BA làm rõ các điểm mơ hồ về phạm vi hoặc logic tích hợp để cả nhóm có sự hiểu biết chung (Shared understanding) trước khi bỏ phiếu lại.",
      "Ép hai Dev Junior phải nghe theo Dev Senior vì Senior luôn có nhiều kinh nghiệm hơn.",
      "Tự ý gán Story đó thành 1 điểm và cảnh cáo nhóm không được tranh luận kéo dài."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Mục đích lớn nhất của Planning Poker không phải là con số, mà là phát hiện sự bất đồng về mặt hiểu biết yêu cầu hoặc giải pháp kỹ thuật. BA cần tận dụng sự chênh lệch điểm số để làm sáng tỏ các góc khuất nghiệp vụ, sau đó cho nhóm vote lại."
  },
  {
    "track": 6,
    "id": "Q6-13",
    "level": 1,
    "q": "Quan sát biểu đồ Sprint Burndown Chart kéo dài 10 ngày làm việc, BA nhận thấy đường 'Actual Work Remaining' đi ngang hoàn toàn suốt từ Ngày 1 đến Ngày 8, sau đó đột ngột rơi thẳng đứng về 0 vào Ngày 10. Hiện tượng này phản ánh vấn đề gì trong quy trình của nhóm?",
    "opts": [
      "Nhóm đang áp dụng xuất sắc phương pháp Agile và tiến độ hoàn toàn bình thường.",
      "Nhóm đang làm việc theo kiểu 'Mini-Waterfall trong Sprint': Các User Story được phát triển song song nhưng để dồn việc kiểm thử và nghiệm thu vào ngày cuối cùng; các Story không được phân rã đủ nhỏ để hoàn thành dứt điểm từng cái (Lack of incremental completion).",
      "Đội ngũ Tester đã nghỉ việc tập thể trong suốt 8 ngày đầu tiên.",
      "Biểu đồ bị hỏng hiển thị do máy chủ theo dõi dự án mất kết nối mạng Internet."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Hiện tượng 'vách đá dựng đứng' (Cliff drop) trên Burndown Chart là dấu hiệu kinh điển của Mini-Waterfall: Dev ôm đồm toàn bộ Story đến cuối kỳ mới bàn giao cho QA test dồn cục, vi phạm nguyên tắc 'Dừng bắt đầu, bắt đầu hoàn thành' (Stop starting, start finishing)."
  },
  {
    "track": 6,
    "id": "Q6-14",
    "level": 2,
    "q": "Hệ thống Thanh toán trực tuyến đối mặt thời hạn pháp lý (Fixed Deadline) bắt buộc tuân thủ Thông tư Ngân hàng Nhà nước vào ngày 01/01 (nếu trễ sẽ bị đình chỉ giấy phép). Còn 2 Sprint cuối, nhưng tổng Story Points ước tính vượt 40% Velocity trung bình của nhóm. Phía Kinh doanh vẫn kiên quyết đòi giữ nguyên các tính năng Loyalty và Quà tặng kèm theo. Là BA cố vấn cho Product Owner, giải pháp tối ưu nhất là gì?",
    "opts": [
      "Đề xuất tuyển thêm gấp đôi lập trình viên ngay trong Sprint tới để kịp hoàn thành toàn bộ khối lượng công việc đúng hạn.",
      "Áp dụng nguyên lý 'Tam giác linh hoạt Agile' (Cố định Thời gian và Chi phí -> Điều chỉnh Phạm vi): Tách Backlog thành 2 nhóm rõ rệt: Nhóm 1 (Pháp lý bắt buộc - Must have) phải dồn 100% nguồn lực hoàn thiện dứt điểm; Nhóm 2 (Loyalty & Khuyến mãi - Nice to have) hoãn sang quý sau. Sử dụng bảng phân tích rủi ro pháp lý để thuyết phục các bên liên quan.",
      "Yêu cầu nhóm Dev cắt giảm toàn bộ khâu viết Unit Test và kiểm thử bảo mật để kịp bàn giao tất cả tính năng vào ngày 01/01.",
      "Gửi email xin lỗi cơ quan quản lý nhà nước xin gia hạn thêm 1 năm với lý do nhóm đang áp dụng quy trình Scrum."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Trong Agile, khi Thời hạn (Time) và Nguồn lực (Cost/Team) cố định thì Phạm vi (Scope) là biến số duy nhất có thể điều chỉnh. BA cần cùng PO phân loại MoSCoW, bảo vệ tuyệt đối các yêu cầu tuân thủ sống còn (Must-have) và hoãn các tính năng thứ yếu (Could/Won't have)."
  },
  {
    "track": 6,
    "id": "Q6-15",
    "level": 2,
    "q": "Trong mô hình Scrum quy mô lớn (Scaled Agile với 4 Scrum Teams), Team Checkout phụ thuộc vào API tính phí vận chuyển từ Team Logistics. Giữa Sprint, Team Logistics bất ngờ thông báo họ phải đổi cấu trúc Response JSON để hỗ trợ giao hàng hỏa tốc, khiến Sprint Goal của Team Checkout có nguy cơ đổ vỡ. Là BA của Team Checkout, bạn xử lý tình huống phụ thuộc này như thế nào?",
    "opts": [
      "Chỉ trích Team Logistics trên kênh chat chung toàn công ty và yêu cầu hủy bỏ Sprint của họ.",
      "Phối hợp ngay với BA/Tech Lead của Team Logistics để thống nhất áp dụng chiến lược 'API Versioning' (Duy trì v1 cho Checkout dùng tiếp trong Sprint này, triển khai v2 song song); đồng thời tạo Mock API dữ liệu chuẩn v1 để Team Checkout hoàn thành Sprint Goal độc lập.",
      "Dừng toàn bộ công việc của Team Checkout và cho cả đội ngồi chờ Team Logistics làm xong v2 rồi mới tiếp tục.",
      "Yêu cầu Team Checkout tự viết lại hệ thống định tuyến xe vận chuyển mà không cần qua Team Logistics nữa."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Xử lý phụ thuộc đa nhóm (Cross-team dependency) đòi hỏi nguyên tắc giảm thiểu gắn kết chặt chẽ (Decoupling): Áp dụng Versioning giúp bên phụ thuộc không bị phá vỡ (Breaking change), kết hợp Mock Server cho phép nhóm tiếp tục phát triển và kiểm thử mà không bị chặn (Blocked)."
  },
  {
    "track": 6,
    "id": "Q6-16",
    "level": 2,
    "q": "Vào ngày thứ 4 của Sprint 2 tuần, Giám đốc Kinh doanh mang về một khách hàng Doanh nghiệp VIP cam kết ký hợp đồng 5 tỷ VNĐ với điều kiện phải có tính năng 'Xuất hóa đơn điện tử đặc thù' vào cuối tuần này. PO dao động và định nhét ngay 3 User Story này vào Sprint đang chạy. Đánh giá chuyên môn của BA và khuyến nghị hành động chuẩn mực là gì?",
    "opts": [
      "Đồng ý ngay lập tức và ép đội Dev làm thêm giờ xuyên đêm để kiếm hợp đồng cho công ty.",
      "Phân tích tác động (Impact Analysis): Việc đưa Story mới vào sẽ làm vỡ Sprint Goal hiện tại, gây quá tải và nguy cơ lỗi dây chuyền cho các tính năng đang làm dở. Đề xuất PO hai kịch bản: Kịch bản 1 là trao đổi với Dev Team để tráo đổi Story tương đương (bỏ bớt tính năng chưa bắt đầu có điểm tương đương); Kịch bản 2 là nếu bắt buộc 100% phải thay đổi toàn diện, PO phải tuyên bố hủy bỏ Sprint (Sprint Cancellation) theo đúng Scrum Guide để tái lập kế hoạch chính thức.",
      "Âm thầm xóa bỏ các Story của các khách hàng khác trên Jira mà không báo cáo cho Scrum Master.",
      "Khuyên PO từ chối thẳng thừng đuổi khách hàng VIP đi vì tôn chỉ của Scrum là cấm thay đổi kế hoạch."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Theo Scrum Guide, không được phép đưa ra các thay đổi làm nguy hại đến Sprint Goal. Tuy nhiên Scrum tôn trọng giá trị kinh doanh. BA cần hỗ trợ PO thấy rõ cái giá phải trả: thương lượng tráo đổi phạm vi (Scope negotiation) hoặc nếu thay đổi mang tính đảo lộn mục tiêu gốc thì phải chính thức Abort/Cancel Sprint để quy hoạch lại bài bản."
  },
  {
    "track": 6,
    "id": "Q6-17",
    "level": 2,
    "q": "Hệ thống Đặt vé máy bay gặp sự cố Production nghiêm trọng: Tỷ lệ thanh toán thất bại tăng vọt lên 40% do lỗi timeout từ cổng thanh toán đối tác. Nhóm Scrum đang trong Sprint và đã cam kết 100% công suất. Đội vận hành cần các Senior Dev nhảy vào khắc phục khẩn cấp. BA nên phối hợp quản lý Backlog và điều phối công việc thế nào?",
    "opts": [
      "Từ chối hỗ trợ vận hành và yêu cầu họ đợi sau khi Sprint kết thúc sau 7 ngày nữa mới được xử lý.",
      "Hỗ trợ PO tạo 'Production Hotfix / Emergency Bug' đưa vào Sprint Backlog; cùng Tech Lead đánh giá số Story Points cần thiết để khắc phục, từ đó chủ động chọn và rút bớt các User Story chưa bắt đầu có độ ưu tiên thấp nhất ra khỏi Sprint Backlog trả về Product Backlog nhằm bảo vệ tính khả thi của nhóm.",
      "Tự ý nhảy vào sửa code trên Production mà không cần qua quy trình kiểm thử.",
      "Đóng cổng thanh toán vĩnh viễn và chỉ chấp nhận chuyển khoản ngân hàng thủ công qua chụp ảnh màn hình."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Sự cố Production khẩn cấp (P0/P1) là thực tế không thể tránh khỏi. Nguyên tắc cân bằng của Scrum là khi phát sinh việc khẩn cấp ngoài kế hoạch chiếm dụng công suất, nhóm phải thương lượng với PO để loại bỏ một khối lượng công việc tương đương ra khỏi Sprint hiện tại để tránh nợ dồn ứ và kiệt sức."
  },
  {
    "track": 6,
    "id": "Q6-18",
    "level": 2,
    "q": "Đội Dev áp dụng Definition of Ready (DoR) cực kỳ khắt khe: Từ chối nhận mọi Story nếu chưa có thiết kế Figma hoàn chỉnh 100% đến từng icon và tài liệu API chi tiết từ đối tác thứ 3. Tuy nhiên, đối tác đang chậm tiến độ cung cấp tài liệu còn đối thủ chuẩn bị ra mắt tính năng cạnh tranh. BA nên làm gì để giải quyết thế bế tắc này mà không vi phạm nguyên tắc chất lượng?",
    "opts": [
      "Bãi bỏ hoàn toàn DoR và bắt Dev nhận các tài liệu ý tưởng sơ sài viết trong tin nhắn Zalo.",
      "Đàm phán với nhóm để áp dụng cơ chế 'Dual-track Agile' hoặc kỹ thuật phân tách: Tách User Story thành 2 phần: Phần 1 phát triển luồng trải nghiệm người dùng với Wireframe cơ bản và Mock Server API nội bộ; Phần 2 hoàn thiện tích hợp sâu khi đối tác cung cấp tài liệu chính thức. Đồng thời cùng nhóm tinh chỉnh DoR theo hướng thực tế, đo lường theo rủi ro thay vì hình thức máy móc.",
      "Yêu cầu Designer làm việc liên tục 48 tiếng không ngủ để vẽ xong toàn bộ các màn hình.",
      "Nộp đơn khiếu nại lên Ban Giám đốc yêu cầu kỷ luật toàn bộ đội lập trình vì tội cứng nhắc."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. DoR sinh ra để phục vụ nhóm chứ không phải trở thành rào cản quan liêu ngăn chặn tính linh hoạt. BA cần giúp nhóm áp dụng tư duy Dual-track hoặc tách luồng phát triển giao diện/Mock logic độc lập, giúp nhóm vẫn tiến lên mà vẫn kiểm soát được các rủi ro chưa chắc chắn."
  },
  {
    "track": 6,
    "id": "Q6-19",
    "level": 2,
    "q": "Trong dự án Chuyển đổi hệ thống Quản lý kho cũ (Legacy Monolith) sang kiến trúc Microservices mới theo mô hình Strangler Fig Pattern, Đội Nghiệp vụ Kho yêu cầu hệ thống cũ và mới phải chạy song song (Dual-run) và đối soát khớp 100% từng bút toán xuất nhập kho theo thời gian thực. Tuy nhiên, việc đồng bộ hai chiều khiến độ trễ quét mã vạch tăng gấp 3 lần, công nhân kho phản đối dữ dội vì trễ giờ xuất xe. BA nên giải quyết bài toán mâu thuẫn giữa tính toàn vẹn nghiệp vụ và hiệu năng vận hành này như thế nào?",
    "opts": [
      "Bỏ qua hoàn toàn việc đối soát dữ liệu và chuyển đổi 100% sang hệ thống mới ngay lập tức không cần kiểm tra (Big Bang).",
      "Đề xuất kiến trúc giải pháp chuyển đổi: Tách việc đối soát khớp dữ liệu sang cơ chế Bất đồng bộ (Asynchronous Reconciliation / Batch job cuối ngày hoặc theo giờ) thay vì đồng bộ thời gian thực trong luồng quét mã vạch; tại luồng quét mã vạch trực tiếp của công nhân kho, chỉ áp dụng kiểm tra idempotency và ghi nhận sự kiện vào hàng đợi (Message Queue) để bảo toàn trải nghiệm tốc độ dưới 0.5s.",
      "Bắt buộc công nhân kho phải làm quen với độ trễ và tăng thời gian ca làm việc của công nhân thêm 4 tiếng mỗi ngày.",
      "Tắt hoàn toàn hệ thống Microservices mới và quay trở lại dùng vĩnh viễn hệ thống cũ 20 năm tuổi."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Đây là bài toán kinh điển về đánh đổi giữa Performance (hiệu năng vận hành thực tế của công nhân kho) và Eventual Consistency (tính nhất quán sau cùng của kế toán kho). Tách khâu đối soát nặng nề sang xử lý bất đồng bộ (Async background job) vừa bảo vệ SLA tốc độ của công nhân vừa bảo toàn yêu cầu đối soát số liệu kế toán."
  },
  {
    "track": 6,
    "id": "Q6-20",
    "level": 2,
    "q": "Tổ chức đang chuyển đổi số từ mô hình Thác nước (Waterfall) sang Scrum. Giám đốc Dự án (PM truyền thống) vẫn đòi hỏi BA phải hoàn thiện bản đặc tả SRS đóng băng 150 trang có chữ ký phê duyệt của 5 Trưởng phòng trước khi cho phép bắt đầu Sprint 1, khiến dự án đình trệ 2 tháng. Là Senior BA dẫn dắt chuyên môn, bạn nên đưa ra chiến lược gì để dung hòa và thúc đẩy chuyển đổi thành công?",
    "opts": [
      "Công khai tẩy chay PM và từ chối tham gia tất cả các cuộc họp do PM triệu tập.",
      "Đề xuất mô hình chuyển tiếp 'Living Documentation' (Tài liệu sống): Thay vì viết tài liệu chi tiết cho toàn bộ 150 trang tính năng của cả năm, BA xây dựng khung tài liệu kiến trúc tổng thể cấp cao (High-level Architecture & Core Scope) để lấy chữ ký khung; sau đó các đặc tả chi tiết được làm mịn dần (Progressive Elaboration) theo dạng User Stories & Acceptance Criteria theo từng đợt Release 2 tháng một lần, chứng minh hiệu quả bằng phần mềm chạy được thực tế (Working Software).",
      "Bí mật thuê một công ty bên ngoài viết hộ tài liệu SRS giả để nộp cho xong thủ tục hành chính.",
      "Chấp nhận chờ đợi viết xong 150 trang và hủy bỏ hoàn toàn ý định chuyển sang Scrum."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Chuyển đổi tổ chức không thể diễn ra kiểu cực đoan. Senior BA cần dùng chiến lược tài liệu hóa thích ứng (Progressive Elaboration & Living Documentation): Ký duyệt khung định hướng lớn để đáp ứng nhu cầu quản trị rủi ro của ban lãnh đạo, trong khi chi tiết hóa linh hoạt theo nhịp Sprint để giữ vững tốc độ phát triển của nhóm."
  },
  {
    "track": 7,
    "id": "Q7-01",
    "level": 0,
    "q": "Sự khác biệt căn bản giữa Giao diện người dùng (User Interface - UI) và Trải nghiệm người dùng (User Experience - UX) là gì?",
    "opts": [
      "UI chỉ dành cho lập trình viên Backend; UX chỉ dành cho nhân viên kinh doanh.",
      "UI tập trung vào các yếu tố thị giác, bố cục, màu sắc, phông chữ và tính thẩm mỹ của sản phẩm; UX bao hàm toàn bộ cảm xúc, nhận thức, tính dễ sử dụng, tính hiệu quả và mức độ thỏa mãn của người dùng trong suốt quá trình tương tác với sản phẩm hoặc dịch vụ.",
      "UI và UX là hai thuật ngữ hoàn toàn giống nhau, chỉ khác nhau cách viết tắt.",
      "UI là bản thiết kế trên giấy, còn UX là mã nguồn đã được đóng gói thành file .exe."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. UI (Giao diện) là những gì người dùng nhìn thấy và chạm vào (nút bấm, màu sắc, typography); UX (Trải nghiệm) là cảm giác tổng thể, sự thuận tiện, logic hành trình và giá trị mà người dùng nhận được khi hoàn thành mục tiêu."
  },
  {
    "track": 7,
    "id": "Q7-02",
    "level": 0,
    "q": "Định luật Hick (Hick's Law) trong thiết kế sản phẩm số phát biểu nguyên lý gì?",
    "opts": [
      "Thời gian người dùng đưa ra quyết định sẽ tăng lên theo tỷ lệ logarit tương ứng với số lượng và độ phức tạp của các lựa chọn được trình bày trước mắt họ.",
      "Kích thước nút bấm càng nhỏ thì người dùng bấm càng nhanh và chính xác hơn.",
      "Mọi trang web đều phải sử dụng màu xanh lam làm màu chủ đạo.",
      "Người dùng sẽ luôn đọc toàn bộ văn bản từ trên xuống dưới một cách tỉ mỉ."
    ],
    "ans": 0,
    "exp": "Đáp án đúng là A. Định luật Hick (Hick-Hyman Law) chỉ ra rằng càng đưa ra quá nhiều lựa chọn cùng một lúc thì người dùng càng mất nhiều thời gian suy nghĩ và dễ bị quá tải nhận thức (Cognitive Overload). Ứng dụng: Menu tinh gọn, phân cấp bước đi (Step-by-step wizard)."
  },
  {
    "track": 7,
    "id": "Q7-03",
    "level": 0,
    "q": "Mô hình phễu chỉ số khởi nghiệp tinh gọn Pirate Metrics (Khung AARRR của Dave McClure) bao gồm 5 giai đoạn phát triển người dùng nào?",
    "opts": [
      "Advertising, Analyzing, Reviewing, Reacting, Rewarding.",
      "Acquisition (Thu hút), Activation (Kích hoạt trải nghiệm đầu tiên), Retention (Giữ chân), Referral (Lan tỏa/Giới thiệu), Revenue (Doanh thu).",
      "Action, Agreement, Resource, Regulation, Realization.",
      "Access, Account, Request, Response, Redirection."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Khung AARRR (Pirate Metrics): Acquisition (người dùng đến từ đâu), Activation (trải nghiệm khoảnh khắc 'Aha!' đầu tiên), Retention (họ có quay lại không), Referral (họ có giới thiệu người khác không), và Revenue (họ có trả tiền không)."
  },
  {
    "track": 7,
    "id": "Q7-04",
    "level": 0,
    "q": "Trong giai đoạn Khám phá sản phẩm (Product Discovery), công cụ 'Empathy Map' (Bản đồ thấu cảm) được BA sử dụng nhằm mục đích gì?",
    "opts": [
      "Vẽ sơ đồ mạng kết nối giữa các máy chủ lưu trữ dữ liệu đám mây.",
      "Thu thập và phân loại sâu sắc thế giới nội tâm của người dùng mục tiêu thông qua 4 góc nhìn: Người dùng Nói gì (Says), Nghĩ gì (Thinks), Làm gì (Does), và Cảm thấy thế nào (Feels), từ đó nhận diện rõ Nỗi đau (Pains) và Kỳ vọng (Gains).",
      "Tính toán bảng chấm công và đánh giá xếp loại nhân sự cuối năm.",
      "Tự động sinh ra mã nguồn HTML/CSS từ hình ảnh vẽ tay."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Empathy Map giúp đội ngũ dự án đặt mình vào vị trí của khách hàng, vượt qua giả định chủ quan để thấu hiểu sâu sắc tâm lý, hành vi, nỗi bức xúc (Pains) và động lực thúc đẩy họ sử dụng giải pháp (Gains)."
  },
  {
    "track": 7,
    "id": "Q7-05",
    "level": 0,
    "q": "Theo 10 nguyên tắc đánh giá tính khả dụng (Heuristic Evaluation) nổi tiếng của Jakob Nielsen, nguyên tắc 'Visibility of system status' (Khả năng nhận biết trạng thái hệ thống) yêu cầu sản phẩm phải làm gì?",
    "opts": [
      "Luôn công khai mã nguồn phần mềm cho tất cả người dùng trên Internet cùng xem.",
      "Luôn luôn thông báo cho người dùng biết chuyện gì đang xảy ra bên trong hệ thống thông qua các phản hồi trực quan, kịp thời và có ý nghĩa trong một khoảng thời gian hợp lý (ví dụ: thanh tiến trình khi tải file, icon loading khi gửi yêu cầu).",
      "Bắt buộc người dùng phải xem video quảng cáo 30 giây trước khi mở bất kỳ trang nào.",
      "Ẩn toàn bộ thông báo lỗi để người dùng không cảm thấy lo lắng hoặc hoang mang."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Nguyên tắc số 1 của Jakob Nielsen: Hệ thống luôn phải cung cấp phản hồi (Feedback) tức thời và rõ ràng để người dùng biết hành động của họ đã được ghi nhận hay đang xử lý, tránh tình trạng click đúp nhiều lần do tưởng máy bị đơ."
  },
  {
    "track": 7,
    "id": "Q7-06",
    "level": 1,
    "q": "Dữ liệu phân tích phễu chuyển đổi (Funnel Analytics) của ứng dụng mua sắm cho thấy: Bước 1 Xem giỏ hàng đạt 10.000 lượt; Bước 2 Nhập địa chỉ đạt 8.500 lượt; nhưng đến Bước 3 Nhập thông tin thẻ thanh toán thì tỷ lệ thoát (Drop-off rate) tăng đột biến lên 70%. Là BA phụ trách tối ưu hóa sản phẩm, phương pháp nghiên cứu kết hợp nào là hiệu quả nhất để tìm ra nguyên nhân gốc rễ?",
    "opts": [
      "Tự đoán nguyên nhân là do màu nút thanh toán xấu và đổi ngay sang màu tím mà không cần hỏi ai.",
      "Xem lại bản ghi phiên thao tác (Session Recordings/Heatmaps) kết hợp phỏng vấn người dùng thực tế (Usability Testing) trên phân khúc khách hàng bỏ dở đơn để phát hiện các rào cản UX (ví dụ: form nhập thẻ quá rườm rà, thiếu logo bảo mật uy tín, hoặc phát sinh phí ẩn ngoài dự kiến).",
      "Xóa bỏ hoàn toàn bước nhập địa chỉ nhận hàng để rút ngắn phễu.",
      "Gửi email khiển trách 70% khách hàng đã thoát vì không hoàn thành giao dịch."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Dữ liệu định lượng (Funnel Analytics) chỉ ra 'Vấn đề xảy ra ở đâu' (Where/What), còn dữ liệu định tính (Session recordings, Heatmaps, Usability testing) giúp BA giải mã 'Tại sao người dùng lại bỏ dở' (Why), từ đó tìm ra điểm nghẽn thực sự."
  },
  {
    "track": 7,
    "id": "Q7-07",
    "level": 1,
    "q": "Khi thiết kế biểu mẫu nhập thông tin tài khoản ngân hàng thụ hưởng, BA nên đưa ra yêu cầu UX nào để vừa phòng ngừa sai sót của người dùng (Error Prevention) vừa nâng cao tốc độ thao tác?",
    "opts": [
      "Chỉ cho phép người dùng nhập tay toàn bộ số tài khoản và bắt buộc phải gõ lại đúng 3 lần liên tiếp.",
      "Tích hợp tính năng tự động tra cứu tên chủ tài khoản (Auto-lookup Account Name) ngay khi người dùng chọn ngân hàng và nhập đủ số tài khoản, hiển thị tên in hoa nổi bật để người dùng xác nhận trực quan trước khi bấm chuyển tiền.",
      "Bắt buộc người dùng phải tải lên bản quét màu sổ tiết kiệm mới cho phép chuyển tiền.",
      "Không cần kiểm tra số tài khoản, tiền chuyển nhầm thì người dùng tự chịu trách nhiệm."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Tự động tra cứu tên chủ tài khoản (Account Name Lookup) là ứng dụng mẫu mực của nguyên lý 'Error Prevention': Hệ thống chủ động đối chiếu dữ liệu với ngân hàng thụ hưởng và phản hồi ngay lập tức, ngăn ngừa 99% rủi ro chuyển tiền nhầm số tài khoản."
  },
  {
    "track": 7,
    "id": "Q7-08",
    "level": 1,
    "q": "Đội ngũ Sản phẩm chuẩn bị thực hiện thử nghiệm A/B Testing trên trang Chi tiết sản phẩm (PDP): Phiên bản A giữ nút 'Thêm vào giỏ' truyền thống; Phiên bản B bổ sung nút 'Mua ngay' (Buy Now) màu cam nổi bật. Để cuộc thử nghiệm đạt chuẩn khoa học và có ý nghĩa thống kê (Statistical Significance), BA cần thiết lập điều kiện nào?",
    "opts": [
      "Chỉ chạy thử nghiệm trong vòng 2 tiếng buổi đêm cho 10 người bạn thân của BA thử nghiệm.",
      "Xác định rõ giả thuyết (Hypothesis), chỉ số mục tiêu (Primary Metric là Tỷ lệ hoàn tất đơn hàng), chia ngẫu nhiên 50/50 lượng truy cập đồng thời, và chạy thử nghiệm đủ thời gian để đạt cỡ mẫu tối thiểu với độ tin cậy thống kê (Statistical Significance p-value < 0.05).",
      "Cho phiên bản B chạy trước 1 tháng, phiên bản A chạy sau 1 tháng vào dịp Tết.",
      "Nhóm tự vào click thử nghiệm cho phiên bản B 1.000 lần để tăng chỉ số thành công."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. A/B Testing đòi hỏi phân luồng ngẫu nhiên đồng thời (Traffic split), chạy đủ chu kỳ kinh doanh (ít nhất 1-2 tuần để tránh sai lệch ngày trong tuần), xác định cỡ mẫu đủ lớn để đạt ý nghĩa thống kê (p < 0.05) trước khi đưa ra kết luận kinh doanh."
  },
  {
    "track": 7,
    "id": "Q7-09",
    "level": 1,
    "q": "Ứng dụng Ví điện tử ghi nhận 50% người dùng mới gỡ app ngay sau khi cài đặt vì ứng dụng bắt buộc phải chụp 2 mặt Căn cước công dân và quay video khuôn mặt ngay tại màn hình đầu tiên. Áp dụng kỹ thuật 'Progressive Disclosure' (Tiết lộ thông tin lũy tiến), BA nên tái cấu trúc luồng trải nghiệm này thế nào?",
    "opts": [
      "Bắt buộc người dùng phải nộp thêm sổ hộ khẩu và giấy khai sinh ngay màn hình đầu tiên.",
      "Cho phép người dùng đăng ký nhanh bằng Số điện thoại/OTP để vào khám phá giao diện, nhận voucher quà tặng chào mừng (Activation); chỉ yêu cầu xác thực eKYC khi người dùng thực hiện giao dịch nạp/rút/chuyển tiền vượt ngưỡng hoặc kích hoạt ví theo quy định pháp lý.",
      "Xóa bỏ hoàn toàn định danh eKYC bất chấp quy định của Ngân hàng Nhà nước.",
      "Khóa màn hình điện thoại của người dùng nếu họ không chịu hoàn thành eKYC."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Progressive Disclosure là kỹ thuật cung cấp thông tin và đòi hỏi hành động theo từng bước tương ứng với giá trị người dùng nhận được. Giúp người dùng trải nghiệm giá trị cốt lõi trước (Onboarding smoothly) sẽ tạo động lực lớn hơn khi họ phải thực hiện các bước phức tạp như eKYC."
  },
  {
    "track": 7,
    "id": "Q7-10",
    "level": 1,
    "q": "Khi thiết kế Bảng điều khiển (Dashboard) cho Giám đốc Vận hành chuỗi 50 siêu thị, BA nhận được yêu cầu muốn xem cùng lúc 40 biểu đồ và bảng dữ liệu chi tiết trên 1 màn hình duy nhất. Hậu quả là màn hình bị rối loạn, tải chậm mất 15 giây. BA nên tư vấn giải pháp Kiến trúc thông tin (Information Architecture) như thế nào?",
    "opts": [
      "Thu nhỏ kích thước chữ xuống 6pt để nhồi nhét đủ 40 biểu đồ vào 1 khung hình.",
      "Phân cấp thông tin theo cấu trúc kim tự tháp: Tầng trên cùng hiển thị 4-6 chỉ số KPI chiến lược tổng quan (High-level Summary); nhấp vào từng KPI sẽ mở ra các biểu đồ xu hướng phân tích chuyên sâu; cung cấp bộ lọc linh hoạt và cơ chế 'Drill-down' để xem chi tiết từng siêu thị khi cần.",
      "Bỏ hết toàn bộ biểu đồ và in ra file Excel 5.000 dòng gửi qua email hàng ngày.",
      "Từ chối làm dashboard và yêu cầu sếp tự đi kiểm tra từng siêu thị bằng xe máy."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Nguyên tắc thiết kế Dashboard chuyên nghiệp: Tránh quá tải nhận thức. Áp dụng quy tắc 'Overview first, zoom and filter, then details-on-demand' (Ben Shneiderman) giúp lãnh đạo nắm bắt bức tranh toàn cảnh nhanh chóng và chỉ đào sâu khi thấy có bất thường."
  },
  {
    "track": 7,
    "id": "Q7-11",
    "level": 1,
    "q": "Doanh nghiệp muốn đo lường mức độ dễ dàng hay khó khăn của khách hàng khi thực hiện khiếu nại đổi trả hàng trực tuyến. Chỉ số trải nghiệm khách hàng nào dưới đây là phù hợp nhất?",
    "opts": [
      "Customer Effort Score (CES - Chỉ số nỗ lực của khách hàng).",
      "Net Promoter Score (NPS - Mức độ sẵn lòng giới thiệu cho bạn bè).",
      "Customer Lifetime Value (CLV - Giá trị vòng đời khách hàng).",
      "Return on Investment (ROI - Tỷ suất hoàn vốn đầu tư)."
    ],
    "ans": 0,
    "exp": "Đáp án đúng là A. CES (Customer Effort Score) đo lường xem khách hàng phải bỏ ra bao nhiêu công sức để hoàn thành một nhiệm vụ cụ thể (ví dụ giải quyết khiếu nại, đổi trả hàng). NPS đo lường lòng trung thành thương hiệu dài hạn, còn CSAT đo mức độ thỏa mãn tức thời."
  },
  {
    "track": 7,
    "id": "Q7-12",
    "level": 1,
    "q": "Khi xây dựng Cổng dịch vụ công trực tuyến phục vụ toàn dân, BA cần đưa ra yêu cầu về Tính tiếp cận (Accessibility - a11y) theo tiêu chuẩn quốc tế WCAG 2.1 cấp độ AA như thế nào đối với người dùng khiếm thị hoặc suy giảm thị lực?",
    "opts": [
      "Hệ thống chỉ hỗ trợ chuột quang không dây, không hỗ trợ bàn phím máy tính thông thường.",
      "Toàn bộ hình ảnh thông tin phải có thuộc tính văn bản thay thế (alt text); tỷ lệ tương phản màu sắc chữ và nền đạt tối thiểu 4.5:1; toàn bộ chức năng có thể điều hướng hoàn toàn bằng bàn phím (Keyboard navigation) và tương thích tốt với phần mềm đọc màn hình (Screen Readers).",
      "Bắt buộc người dùng phải tải ứng dụng riêng biệt có phí mới đọc được chữ.",
      "Toàn bộ văn bản phải được chuyển thành định dạng video hoạt hình 3D."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Tiêu chuẩn WCAG 2.1 AA là yêu cầu bắt buộc cho các nền tảng dịch vụ công: Hỗ trợ người khuyết tật thông qua độ tương phản màu (Contrast ratio 4.5:1), alt text cho hình ảnh, Focus state rõ ràng và hỗ trợ điều hướng 100% bằng phím cho Screen Readers."
  },
  {
    "track": 7,
    "id": "Q7-13",
    "level": 1,
    "q": "Trưởng phòng Tiếp thị đề xuất chèn một checkbox mặc định 'Đồng ý mua thêm gói bảo hiểm hủy chuyến 50.000 VNĐ' đã được tích sẵn dấu kiểm (Pre-checked) khi khách hàng mua vé xem phim online. Xét dưới góc độ UX và Đạo đức thiết kế sản phẩm (Product Ethics), BA nên phân tích điều này như thế nào?",
    "opts": [
      "Đây là một ý tưởng sáng tạo tuyệt vời cần nhân rộng trên toàn bộ ứng dụng.",
      "Đây là một dạng 'Dark Pattern' (Thiết kế thao túng / Sneak into basket): Nó có thể làm tăng doanh thu ngắn hạn nhưng gây tổn hại nghiêm trọng đến lòng tin của khách hàng (User Trust), làm tăng tỷ lệ khiếu nại đòi hoàn tiền và có nguy cơ vi phạm Luật Bảo vệ quyền lợi người tiêu dùng.",
      "Dark Pattern là quy định bắt buộc phải có theo thông lệ quốc tế.",
      "BA không cần quan tâm đến trải nghiệm khách hàng, chỉ cần nghe theo lệnh của Tiếp thị."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. 'Sneak into basket' là một Dark Pattern kinh điển lừa dối người dùng qua tính lơ đãng. BA chuyên nghiệp cần cảnh báo doanh nghiệp về rủi ro xói mòn uy tín thương hiệu, phản ứng tẩy chay và nguy cơ pháp lý khi ép buộc người tiêu dùng mua hàng không tự nguyện."
  },
  {
    "track": 7,
    "id": "Q7-14",
    "level": 2,
    "q": "Ngân hàng số đối mặt xung đột gay gắt: Khối An ninh thông tin yêu cầu áp dụng xác thực sinh trắc học khuôn mặt và OTP cho MỌI giao dịch chuyển tiền trên 100.000 VNĐ để phòng chống tội phạm công nghệ cao. Khối Kinh doanh kịch liệt phản đối vì điều này sẽ làm tăng thời gian thanh toán từ 5 giây lên 35 giây, khiến tỷ lệ hủy giao dịch tăng vọt. Là Senior BA tư vấn giải pháp, bạn đề xuất kiến trúc UX nào tối ưu nhất?",
    "opts": [
      "Loại bỏ hoàn toàn mọi lớp bảo mật để khách hàng chuyển tiền nhanh nhất có thể.",
      "Áp dụng cơ chế 'Xác thực thích ứng dựa trên rủi ro' (Risk-based Adaptive Authentication): Các giao dịch giá trị nhỏ tới người thụ hưởng quen thuộc (Whitelist / Beneficiary đã lưu) hoặc trên thiết bị tin cậy chỉ cần xác thực nhanh bằng mã PIN/Vân tay (Zero-friction); chỉ kích hoạt các bước xác thực sinh trắc học chuyên sâu và OTP khi phát hiện hành vi bất thường (Thiết bị mới, vị trí lạ, đổi mạng, hoặc giao dịch vượt ngưỡng hạn mức rủi ro cao).",
      "Khóa toàn bộ tính năng chuyển tiền online và bắt buộc khách hàng ra phòng giao dịch.",
      "Chỉ cho phép khách hàng chuyển tiền vào các ngày cuối tuần để giảm áp lực hệ thống."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Giải pháp Risk-based Authentication là chuẩn mực quốc tế: Không cào bằng rủi ro. Bằng cách phân tích ngữ cảnh (Contextual signals như Device fingerprint, IP, Beneficiary trust), hệ thống mang lại trải nghiệm mượt mà cho 95% giao dịch an toàn và chỉ dựng rào chắn bảo vệ khi phát hiện rủi ro thực sự."
  },
  {
    "track": 7,
    "id": "Q7-15",
    "level": 2,
    "q": "Hệ sinh thái Bán lẻ muốn ứng dụng AI để cá nhân hóa gợi ý sản phẩm dựa trên định vị GPS thời gian thực và lịch sử duyệt web của khách hàng nhằm tăng doanh số 25%. Tuy nhiên, Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân quy định việc thu thập phải có sự đồng thuận rõ ràng (Opt-in), không được ngầm định và người dùng có quyền rút lại đồng thuận bất kỳ lúc nào. BA nên thiết kế luồng trải nghiệm xin quyền (Consent UX Flow) như thế nào để vừa tuân thủ pháp lý vừa giữ tỷ lệ chấp thuận cao?",
    "opts": [
      "Hiện popup che kín màn hình bắt người dùng ký vào bản điều khoản 50 trang mới cho vào app.",
      "Áp dụng nguyên tắc 'Just-in-Time Value-first Consent': Không xin quyền ồ ạt lúc mở app; chỉ kích hoạt hộp thoại xin quyền vào đúng thời điểm người dùng bắt đầu tìm kiếm cửa hàng gần nhất hoặc tìm ưu đãi cục bộ. Thiết kế giao diện làm nổi bật giá trị trực tiếp mà người dùng nhận được (Value proposition), cung cấp nút chọn minh bạch (Chấp nhận / Để sau) và xây dựng Trung tâm Quyền riêng tư (Privacy Center) trong Cài đặt cho phép họ bật/tắt tùy chọn minh bạch.",
      "Bí mật thu thập tọa độ GPS ngầm mà không cần hiển thị bất kỳ thông báo nào cho người dùng biết.",
      "Từ chối phát triển tính năng này vì sợ vi phạm pháp luật dẫn đến bị phạt tù."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Consent UX thông minh dựa trên kỹ thuật 'Just-in-Time': Giải thích rõ 'Tại sao tôi cần quyền này và bạn sẽ nhận được lợi ích gì' ngay tại thời điểm phát sinh nhu cầu, đi kèm giao diện quản lý quyền minh bạch. Cách tiếp cận này vừa đáp ứng 100% Nghị định 13 vừa đem lại tỷ lệ đồng thuận cao hơn nhiều so với việc bắt ép."
  },
  {
    "track": 7,
    "id": "Q7-16",
    "level": 2,
    "q": "Trong phần mềm Quản lý Kho bãi WMS, nhóm người dùng 'Chuyên viên điều phối kho lâu năm' đòi hỏi giao diện đậm đặc thông tin (High-density UI), thao tác phím tắt 100% không dùng chuột để nhập 500 phiếu xuất mỗi giờ. Trong khi đó, nhóm 'Nhân viên thời vụ mới vào' liên tục nhập sai dữ liệu vì giao diện quá phức tạp và thiếu hướng dẫn. Đứng trước hai nhóm người dùng có nhu cầu hoàn toàn đối lập, BA nên thiết kế kiến trúc trải nghiệm thế nào?",
    "opts": [
      "Ép nhóm nhân viên lâu năm phải dùng chuột nhấp từng bước một giống như nhân viên mới.",
      "Thiết kế cơ chế 'Chế độ xem phân vai / Chế độ linh hoạt' (Role-based / Dual-mode Experience): Cung cấp 'Chế độ Chuyên gia' (Expert Mode) tối ưu phím tắt bàn phím toàn diện, bảng dữ liệu cô đọng; và 'Chế độ Chuẩn / Hướng dẫn' (Standard Guided Mode) có các gợi ý Wizard từng bước, kiểm tra dữ liệu theo thời gian thực (Inline validation). Đồng thời lưu tùy chọn giao diện theo hồ sơ cá nhân của từng nhân viên.",
      "Xây dựng hai phần mềm hoàn toàn riêng biệt với hai cơ sở dữ liệu không liên quan đến nhau.",
      "Sa thải toàn bộ nhân viên thời vụ và chỉ giữ lại nhân viên lâu năm."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Khi đối mặt với nhu cầu phân hóa sâu sắc giữa Novice Users và Power Users trong phần mềm B2B/Enterprise, kiến trúc giao diện đa chế độ (Dual-mode / Customizable workspaces) là lời giải hoàn hảo: Tối ưu hóa năng suất tột bậc cho chuyên gia nhưng vẫn có giàn giáo hỗ trợ (Scaffolding) cho người mới."
  },
  {
    "track": 7,
    "id": "Q7-17",
    "level": 2,
    "q": "Sau 1 năm phát triển nóng, ứng dụng Ngân hàng số bị các phòng ban (Thẻ, Bảo hiểm, Vay tiêu dùng, Đầu tư vàng, Vé máy bay) liên tục đòi đưa banner, popup quảng cáo và icon lên Màn hình chính (Home Screen). Kết quả là ứng dụng biến thành 'khu chợ rác' (Feature Bloat), thời gian người dùng tìm thấy nút 'Chuyển tiền' tăng từ 2s lên 12s, điểm CSAT giảm từ 4.6 xuống 3.2. Là Senior BA dẫn dắt sản phẩm, bạn đề xuất khung quản trị (Product Governance Framework) nào để giải cứu trải nghiệm?",
    "opts": [
      "Ai có chức vụ cao nhất trong công ty thì được quyền đặt banner to nhất trên màn hình chính.",
      "Thiết lập 'Khung quản trị Màn hình chính dựa trên Dữ liệu và Giá trị cốt lõi' (Core Jobs-to-be-Done): Xác định 3 tác vụ thiết yếu chiếm 80% tần suất sử dụng của khách hàng để bảo vệ vùng hiển thị ưu tiên cố định; phân bổ các dịch vụ mở rộng theo danh mục thông minh và thuật toán gợi ý ngữ cảnh (Contextual Widget); ban hành quy chế nghiêm ngặt cấm popup chen ngang (Zero-interruptive popups) và yêu cầu mọi đề xuất đưa lên Home phải có dữ liệu chứng minh hiệu quả sau 30 ngày thử nghiệm.",
      "Xóa bỏ toàn bộ các tính năng bán bảo hiểm và cho vay ra khỏi ngân hàng.",
      "Chia màn hình chính thành 50 ô vuông nhỏ bằng nhau và phân phát đồng đều cho 50 phòng ban."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Bài toán Feature Bloat trong Super App đòi hỏi năng lực Product Governance: BA cần dựa vào lý thuyết Jobs-to-be-Done (JTBD) và dữ liệu hành vi thực tế để bảo vệ luồng tác vụ sống còn của người dùng, biến không gian màn hình chính thành tài nguyên được quản trị có nguyên tắc thay vì nhượng bộ theo quyền lực nội bộ."
  },
  {
    "track": 7,
    "id": "Q7-18",
    "level": 2,
    "q": "Một tính năng 'Trợ lý ảo gợi ý mua quà theo cung hoàng đạo' được đầu tư phát triển suốt 4 tháng. Sau 6 tháng vận hành, dữ liệu cho thấy chỉ có 0.2% người dùng mở tính năng và chi phí duy trì máy chủ AI là 200 triệu VNĐ/tháng. Giám đốc Tiếp thị kiên quyết từ chối gỡ bỏ vì 'tiếc công sức và kinh phí lớn đã đổ vào' (Hiệu ứng chi phí chìm - Sunk Cost Fallacy). Senior BA cần làm gì để đưa ra quyết định sản phẩm đúng đắn?",
    "opts": [
      "Tiếp tục đổ thêm 500 triệu tiền quảng cáo để lôi kéo người dùng vào tính năng này.",
      "Xây dựng Báo cáo Phân tích Hiệu quả Sản phẩm (Product Sunset Analysis) minh bạch: Lượng hóa chi phí cơ hội bị lãng phí (Opportunity Cost), chứng minh sự sụt giảm trải nghiệm và đề xuất lộ trình 'Khai tử có kiểm soát' (Sunset Plan) hoặc tái sử dụng các module AI hữu ích vào luồng tìm kiếm lõi; giúp các bên liên quan vượt qua bẫy tâm lý chi phí chìm bằng các con số kinh tế thực tế.",
      "Bí mật xóa mã nguồn của tính năng trên máy chủ vào ban đêm rồi giả vờ bị hacker tấn công.",
      "Nghe lời Giám đốc Tiếp thị và tiếp tục duy trì tính năng vô thời hạn."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Năng lực loại bỏ tính năng thừa (Feature Sunsetting) là phẩm chất quan trọng của Senior BA/Product Manager. BA cần dùng dữ liệu khách quan để chứng minh chi phí chìm đã mất không thể lấy lại, và việc tiếp tục duy trì tính năng 'Zombie' sẽ lấy đi nguồn lực của các cơ hội kinh doanh sinh lời khác."
  },
  {
    "track": 7,
    "id": "Q7-19",
    "level": 2,
    "q": "Ban Điều hành một ứng dụng Giáo dục trực tuyến (EdTech) muốn giảm tỷ lệ hủy gói hội viên (Churn Rate) bằng cách giấu nút 'Hủy gia hạn tự động' vào sâu 6 tầng cài đặt phức tạp, đồng thời bắt người dùng phải gửi email viết tay và chờ 7 ngày duyệt. BA nên phản biện phương án này và đề xuất giải pháp 'Offboarding có trách nhiệm' như thế nào?",
    "opts": [
      "Hoàn toàn tán thành và đề xuất thêm bài trắc nghiệm 50 câu hỏi trước khi cho người dùng bấm hủy.",
      "Phân tích tác động tiêu cực: Cách làm 'Roach Motel' (Dễ vào khó ra) này sẽ gây bùng nổ khiếu nại chargeback từ ngân hàng, nhận bão đánh giá 1 sao trên App Store/Google Play và vi phạm chính sách của Apple/Google dẫn đến nguy cơ bị xóa ứng dụng. Đề xuất luồng hủy minh bạch kết hợp khảo sát lý do ngắn gọn, đưa ra các ưu đãi giữ chân phù hợp (ví dụ: tạm dừng gói cước 1 tháng, giảm giá 30% cho 3 tháng tiếp theo) mà vẫn tôn trọng quyết định cuối cùng của người dùng.",
      "Khóa luôn tài khoản ngân hàng của học viên để họ không thể hủy cước.",
      "Không đưa ra ý kiến gì vì đây là chỉ đạo từ cấp trên."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Thiết kế trải nghiệm rời đi (Offboarding Experience) minh bạch là tiêu chuẩn văn minh. Cố tình dựng rào cản Dark Pattern sẽ bị Apple/Google trừng phạt gỡ app và gây thiệt hại danh tiếng khôn lường. Cung cấp tùy chọn tạm dừng (Pause subscription) hoặc gói cước linh hoạt là giải pháp giữ chân dựa trên sự thấu hiểu thay vì ép buộc."
  },
  {
    "track": 7,
    "id": "Q7-20",
    "level": 2,
    "q": "Hệ thống Bán lẻ triển khai mô hình đa kênh Omnichannel: Khách hàng mua hàng online và chọn 'Nhận hàng tại cửa hàng trong 2 giờ' (Click & Collect). Một sự cố trải nghiệm nghiêm trọng xảy ra: Khách đến cửa hàng thì nhân viên thông báo sản phẩm vừa được bán cho một khách mua trực tiếp tại quầy 10 phút trước do hệ thống cập nhật chậm. Khách hàng phẫn nộ đòi bồi thường. Là BA thiết kế giải pháp tổng thể (Service Design & System Logic), bạn xử lý vấn đề này như thế nào?",
    "opts": [
      "Đổ lỗi cho nhân viên cửa hàng và yêu cầu trừ lương của nhân viên đó.",
      "Thiết kế cơ chế 'Khóa tồn kho tạm giữ' (Soft Allocation / Inventory Reservation): Ngay khi khách đặt đơn Click & Collect thành công, hệ thống trừ tồn kho khả dụng (Available-to-Promise) của cửa hàng đó lập tức trên toàn hệ thống và phát thông báo lệnh nhặt hàng (Pick-list) cho nhân viên cất vào tủ giữ hàng riêng trong vòng 15 phút. Trường hợp bất khả kháng hết hàng, hệ thống tự động quét kho chi nhánh lân cận để điều chuyển hỏa tốc hoặc tặng voucher xin lỗi tự động cho khách hàng.",
      "Khuyên công ty dẹp bỏ hoàn toàn dịch vụ Click & Collect và chỉ bán online giao bưu điện.",
      "Yêu cầu khách hàng đứng chờ ở cửa hàng 4 tiếng để nhập hàng từ nhà máy về."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Trải nghiệm Omnichannel thất bại nếu logic dữ liệu không đồng bộ với quy trình vật lý. Giải pháp cốt lõi của BA là thiết kế cơ chế 'Inventory Reservation' theo thời gian thực kết hợp quy trình Pick & Pack tại chỗ có SLA cụ thể, đi kèm kịch bản dự phòng tự động khi có biến cố tồn kho."
  },
  {
    "track": 8,
    "id": "Q8-01",
    "level": 0,
    "q": "Thứ tự tiêu chuẩn của 4 cấp độ kiểm thử phần mềm từ phạm vi hẹp nhất đến phạm vi rộng nhất trong quy trình công nghệ phần mềm là gì?",
    "opts": [
      "User Acceptance Testing (UAT) -> System Testing -> Integration Testing -> Unit Testing.",
      "Unit Testing (Kiểm thử đơn vị) -> Integration Testing (Kiểm thử tích hợp) -> System Testing (Kiểm thử hệ thống) -> User Acceptance Testing (Kiểm thử chấp nhận người dùng - UAT).",
      "Stress Testing -> Load Testing -> Smoke Testing -> Sanity Testing.",
      "Manual Testing -> Automation Testing -> AI Testing -> Robot Testing."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Mô hình chữ V (V-Model) và chuẩn ISTQB quy định 4 cấp độ kiểm thử lũy tiến: Bắt đầu từ Unit Test (Dev kiểm tra từng hàm/component), Integration Test (kiểm tra giao tiếp giữa các module), System Test (kiểm tra toàn bộ hệ thống khép kín), và UAT (người dùng/khách hàng nghiệm thu nghiệp vụ)."
  },
  {
    "track": 8,
    "id": "Q8-02",
    "level": 0,
    "q": "Mục đích cốt lõi nhất của giai đoạn Kiểm thử Chấp nhận Người dùng (User Acceptance Testing - UAT) là gì?",
    "opts": [
      "Tìm kiếm xem mã nguồn lập trình có tuân thủ đúng quy tắc đặt tên biến của công ty hay không.",
      "Xác nhận phần mềm có đáp ứng đúng và đầy đủ các nhu cầu nghiệp vụ thực tế của người dùng cuối, quy trình vận hành của doanh nghiệp và các điều kiện thỏa thuận trong hợp đồng để tiến hành nghiệm thu bàn giao chính thức hay không.",
      "Thay thế hoàn toàn công việc của đội ngũ lập trình viên Backend.",
      "Kiểm tra xem máy tính của người dùng có bị nhiễm virus hay không."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Khác với System Testing (do QA kiểm tra xem hệ thống có chạy đúng thiết kế kỹ thuật hay không), UAT tập trung trả lời câu hỏi nghiệp vụ: 'Hệ thống này có giải quyết đúng vấn đề và đáp ứng quy trình vận hành thực tế của doanh nghiệp để đưa vào sử dụng hay không?'."
  },
  {
    "track": 8,
    "id": "Q8-03",
    "level": 0,
    "q": "Trong kỹ thuật kiểm thử hộp đen, sự khác biệt giữa 'Phân vùng tương đương' (Equivalence Partitioning - EP) và 'Phân tích giá trị biên' (Boundary Value Analysis - BVA) là gì?",
    "opts": [
      "EP chỉ dùng cho kiểm thử tự động, BVA chỉ dùng cho kiểm thử thủ công.",
      "EP chia miền dữ liệu đầu vào thành các phân vùng hợp lệ và không hợp lệ mà ở đó hệ thống được giả định sẽ xử lý giống nhau; BVA tập trung kiểm thử tại các giá trị biên giới hạn nằm ngay sát ranh giới giữa các phân vùng đó (nơi có nguy cơ phát sinh lỗi cao nhất).",
      "BVA chỉ áp dụng cho kiểm thử giao diện đồ họa, còn EP áp dụng cho kiểm thử cơ sở dữ liệu.",
      "Hai kỹ thuật này hoàn toàn trùng lặp và không bao giờ được dùng cùng nhau."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. EP chia các nhóm giá trị tương đương để giảm số lượng ca kiểm thử (chỉ cần chọn 1 đại diện mỗi vùng). BVA bổ trợ cho EP bằng cách tập trung kiểm tra các điểm mép (ví dụ: min-1, min, min+1, max-1, max, max+1) vì lập trình viên thường xuyên mắc lỗi toán tử như `<` thay vì `<=`."
  },
  {
    "track": 8,
    "id": "Q8-04",
    "level": 0,
    "q": "Yêu cầu nào dưới đây thuộc nhóm 'Kiểm thử phi chức năng' (Non-functional Testing)?",
    "opts": [
      "Khi người dùng nhập đúng tên đăng nhập và mật khẩu thì hệ thống phải cho phép đăng nhập thành công.",
      "Hệ thống phải có khả năng xử lý đồng thời 5.000 giao dịch mỗi giây (5.000 TPS) với thời gian phản hồi p95 dưới 500ms và không rò rỉ bộ nhớ (Kiểm thử hiệu năng và khả năng chịu tải).",
      "Khi bấm nút 'Xuất Excel', hệ thống phải tải về file danh sách khách hàng gồm 5 cột thông tin.",
      "Khi hủy đơn hàng, hệ thống phải cập nhật trạng thái đơn thành 'Đã hủy'."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Kiểm thử chức năng (Functional Testing) kiểm tra 'Hệ thống làm ĐƯỢC CÁI GÌ' (Tính năng, quy tắc nghiệp vụ). Kiểm thử phi chức năng (Non-functional Testing) kiểm tra 'Hệ thống hoạt động NHƯ THẾ NÀO' (Tốc độ, hiệu năng, tải trọng, bảo mật, tính khả dụng)."
  },
  {
    "track": 8,
    "id": "Q8-05",
    "level": 0,
    "q": "Khi phân loại lỗi phần mềm (Defect Triage), sự khác biệt giữa 'Độ nghiêm trọng của lỗi' (Bug Severity) và 'Mức độ ưu tiên sửa lỗi' (Bug Priority) được hiểu như thế nào?",
    "opts": [
      "Severity do Giám đốc quyết định, Priority do Thực tập sinh quyết định.",
      "Severity phản ánh mức độ ảnh hưởng kỹ thuật của lỗi đối với sự vận hành của hệ thống (ví dụ: sập máy chủ, mất dữ liệu); Priority phản ánh mức độ khẩn cấp về mặt kinh doanh và thời gian cần phải khắc phục lỗi đó sớm hay muộn.",
      "Severity và Priority luôn luôn bắt buộc phải có mức độ giống hệt nhau.",
      "Severity chỉ áp dụng cho lỗi chính tả, còn Priority áp dụng cho lỗi thanh toán."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Severity là thước đo tác động kỹ thuật (Blocker, Critical, Major, Minor). Priority là thước đo khẩn cấp nghiệp vụ (P1-Urgent, P2-High, P3-Normal). Ví dụ: Sai chính tả logo trang chủ có Severity thấp (không làm hỏng code) nhưng Priority rất cao (ảnh hưởng thể diện thương hiệu)."
  },
  {
    "track": 8,
    "id": "Q8-06",
    "level": 1,
    "q": "Quy tắc nghiệp vụ: 'Khách hàng gửi tiết kiệm kỳ hạn 12 tháng: Nếu số tiền gửi từ 10 triệu đến dưới 100 triệu, lãi suất là 6.0%/năm; Nếu số tiền từ 100 triệu đến dưới 500 triệu, lãi suất là 6.5%/năm; Nếu từ 500 triệu trở lên, lãi suất là 7.0%/năm; Số tiền gửi tối thiểu là 10 triệu'. Áp dụng kỹ thuật Phân tích giá trị biên (BVA), BA nên chọn bộ dữ liệu kiểm thử biên nào để bàn giao cho đội UAT?",
    "opts": [
      "1 triệu, 5 triệu, 20 triệu, 50 triệu, 1 tỷ.",
      "9.999.999 VNĐ (Bị từ chối), 10.000.000 VNĐ (6.0%), 99.999.999 VNĐ (6.0%), 100.000.000 VNĐ (6.5%), 499.999.999 VNĐ (6.5%), 500.000.000 VNĐ (7.0%).",
      "Chỉ cần kiểm thử duy nhất một con số 150 triệu là đủ nghiệm thu.",
      "Các số âm như -10 triệu, -100 triệu và số 0 VNĐ."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Bộ kiểm thử biên chuẩn mực phải bao gồm các điểm chặn ranh giới: Ngay dưới ngưỡng tối thiểu (9.999.999), đúng ngưỡng tối thiểu (10.000.000), mép dưới và mép trên của từng bậc lãi suất (99.999.999 vs 100.000.000, 499.999.999 vs 500.000.000)."
  },
  {
    "track": 8,
    "id": "Q8-07",
    "level": 1,
    "q": "Khi chuẩn bị dữ liệu kiểm thử (Test Data) cho giai đoạn UAT phần mềm Tính thuế thu nhập cá nhân (TNCN) mới, thách thức lớn nhất là các ca giảm trừ gia cảnh phức tạp (người phụ thuộc sinh giữa năm, con đủ 18 tuổi, người lao động chuyển nơi làm việc). BA nên phối hợp tạo dữ liệu kiểm thử thế nào để đảm bảo tính bao quát?",
    "opts": [
      "Chỉ nhập 1 nhân viên mẫu có mức lương 10 triệu đồng và không có người phụ thuộc nào.",
      "Thiết lập 'Bảng ma trận dữ liệu kiểm thử' (Test Data Matrix) kết hợp các biến số: Mức thu nhập các bậc, số lượng người phụ thuộc, thời điểm bắt đầu/kết thúc giảm trừ, thu nhập vãng lai; từ đó tạo các bộ hồ sơ nhân sự giả lập đặc thù tương ứng và đối chiếu kết quả với bảng tính chuẩn của Chuyên viên thuế.",
      "Lấy bừa họ tên và số tài khoản ngân hàng của đồng nghiệp trong công ty điền vào hệ thống.",
      "Yêu cầu đội Dev viết code tự động duyệt qua toàn bộ các trường hợp mà không cần kiểm tra số liệu."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Xây dựng Test Data Matrix giúp kiểm soát toàn diện các tổ hợp điều kiện nghiệp vụ phức tạp. Việc đối chiếu kết quả phần mềm với 'Bảng tính chuẩn mực độc lập' (Golden Record / Baseline spreadsheet) của chuyên gia kế toán thuế là cách duy nhất đảm bảo tính chính xác 100% của thuật toán."
  },
  {
    "track": 8,
    "id": "Q8-08",
    "level": 1,
    "q": "Trong tuần đầu tiên của kế hoạch UAT kéo dài 3 tuần, người dùng nghiệp vụ (Business Users) từ chối tham gia kiểm thử với lý do 'Công việc vận hành cuối tháng quá bận, không có thời gian ngồi mò phần mềm'. Dự án có nguy cơ vỡ tiến độ Go-live. Là BA điều phối UAT, bạn xử lý tình huống này như thế nào?",
    "opts": [
      "Báo cáo lên Tổng Giám đốc đòi sa thải toàn bộ nhân viên nghiệp vụ lười biếng.",
      "Chuyển đổi hình thức từ 'Tự do kiểm thử' (Unstructured testing) sang 'Phiên kiểm thử có hướng dẫn theo kịch bản tập trung' (Guided / Focused UAT Workshop): BA chuẩn bị sẵn dữ liệu mẫu, phân bổ ca kiểm thử theo vai trò cụ thể, đóng gói thành các phiên làm việc ngắn 90 phút/ngày, BA ngồi trực tiếp bên cạnh để hỗ trợ ghi nhận lỗi, đồng thời báo cáo tiến độ minh bạch cho Trưởng bộ phận của họ.",
      "Tự mình bấm thay toàn bộ các kịch bản kiểm thử rồi ký giả chữ ký nghiệm thu của khách hàng.",
      "Tuyên bố hủy bỏ dự án và chuyển phần mềm sang cho công ty khác sử dụng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Người dùng nghiệp vụ thường sợ UAT vì họ thiếu thời gian và không biết bắt đầu từ đâu. BA cần giảm thiểu nỗ lực của họ bằng cách tổ chức Guided UAT Workshop có kịch bản End-to-End cụ thể, thời gian ngắn gọn (Timeboxing 90 phút), chuẩn bị sẵn dữ liệu để họ chỉ cần thực hiện tác vụ chuyên môn."
  },
  {
    "track": 8,
    "id": "Q8-09",
    "level": 1,
    "q": "Trong quá trình kiểm thử hệ thống Bán hàng Đa kênh, Tester phát hiện hóa đơn giá trị 1.500.550 VNĐ khi áp thuế VAT 8% bị tính lệch 1 đồng (120.044 VNĐ thay vì 120.045 VNĐ) do quy tắc làm tròn số học khác nhau giữa phân hệ Giỏ hàng và phân hệ Kế toán ERP. Khi ghi nhận lỗi này vào Jira, BA cần viết mô tả thế nào cho chuẩn mực?",
    "opts": [
      "Hệ thống tính tiền sai bét, yêu cầu dev sửa ngay lập tức.",
      "Tiêu đề rõ ràng: '[Lệch VAT] Chênh lệch 1 đồng giữa Giỏ hàng và Hóa đơn ERP do quy tắc làm tròn (Rounding logic)'; Mô tả đầy đủ: Điều kiện tiên quyết (Pre-conditions), Dữ liệu đầu vào cụ thể (SKU, đơn giá, số lượng), Các bước tái hiện (Steps to Reproduce), Kết quả thực tế (Actual: 120.044), Kết quả kỳ vọng (Expected: 120.045 theo Thông tư kế toán), cùng tài liệu tham chiếu quy tắc làm tròn (Round Half Up).",
      "Chỉ đính kèm ảnh chụp màn hình mà không viết bất kỳ chữ nào.",
      "Ghi nhận là lỗi Minor và để sang năm sau sửa vì 1 đồng là số tiền quá nhỏ."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Một Bug Report chất lượng cao của BA phải cung cấp đầy đủ: Tiêu đề súc tích, Bối cảnh dữ liệu, Các bước tái hiện chính xác, Actual vs Expected, và căn cứ pháp lý/nghiệp vụ (Business Rule / Law reference) để Dev hiểu được bản chất thuật toán cần điều chỉnh."
  },
  {
    "track": 8,
    "id": "Q8-10",
    "level": 1,
    "q": "Sau khi đội Dev tiến hành sửa một lỗi nhỏ liên quan đến định dạng hiển thị ngày sinh trên hồ sơ nhân viên, BA nhận thấy phân hệ Tính bảo hiểm xã hội bỗng nhiên báo lỗi không tính được tiền. Khái niệm và giải pháp kiểm định nào cần được áp dụng ở đây?",
    "opts": [
      "Đây là hiện tượng ngẫu nhiên không thể phòng tránh trong ngành phần mềm.",
      "Hiện tượng Lỗi tác động liên đới (Regression Defect / Side-effect); BA và QA cần kích hoạt bộ 'Kiểm thử hồi quy' (Regression Test Suite) bao gồm các chức năng cốt lõi chịu ảnh hưởng để đảm bảo việc sửa lỗi tại một điểm không làm hư hỏng các chức năng đang chạy ổn định khác.",
      "Xóa bỏ hoàn toàn tính năng hiển thị ngày sinh để không bao giờ bị lỗi nữa.",
      "Yêu cầu lập trình viên không được sửa bất kỳ lỗi nào nữa từ nay về sau."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Regression Testing (Kiểm thử hồi quy) là hoạt động bắt buộc sau mỗi lần sửa code hoặc bổ sung tính năng mới, nhằm xác minh các sửa đổi đó không gây ra hiệu ứng phụ (Side-effects) làm gãy đổ các module liên quan."
  },
  {
    "track": 8,
    "id": "Q8-11",
    "level": 1,
    "q": "Trong quá trình UAT màn hình Quản lý kho, người dùng phát biểu: 'Chúng tôi muốn hệ thống phải tự động gửi tin nhắn SMS cho Giám đốc mỗi khi có lô hàng đông lạnh bị quá nhiệt độ cho phép'. Kiểm tra lại Hợp đồng và Tài liệu đặc tả SRS đã ký kết, tính năng gửi SMS này không hề được đề cập. BA cần xử lý phân loại như thế nào?",
    "opts": [
      "Ghi nhận đây là lỗi nghiêm trọng (Blocker Bug) và bắt buộc Dev phải làm miễn phí ngay lập tức.",
      "Xác định đây là 'Yêu cầu thay đổi phạm vi' (Change Request - CR) chứ không phải là Lỗi (Defect); BA giải thích rõ ràng cho người dùng căn cứ theo SRS đã thống nhất, ghi nhận nhu cầu, đánh giá tính khả thi/chi phí/thời gian và đưa vào quy trình thẩm định CR chính thức (hoặc xếp vào giai đoạn sau Go-live).",
      "Lập tức từ chối thẳng thừng và cấm người dùng không được phát biểu ý kiến nữa.",
      "Âm thầm bỏ tiền túi cá nhân ra thuê công ty bên ngoài viết thêm tính năng đó."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Phân định rõ Defect (Sai lệch so với đặc tả đã ký kết) và Change Request (Nhu cầu phát sinh ngoài phạm vi đã thống nhất) là kỹ năng sống còn của BA để bảo vệ ngân sách dự án và tránh hiện tượng phình to phạm vi (Scope Creep) trong giai đoạn UAT."
  },
  {
    "track": 8,
    "id": "Q8-12",
    "level": 1,
    "q": "Phương pháp 'Kiểm thử thăm dò' (Exploratory Testing) kết hợp cùng kỹ thuật Persona mang lại giá trị độc đáo nào mà các kịch bản kiểm thử theo kịch bản cứng (Scripted Test Cases) thường bỏ sót?",
    "opts": [
      "Giúp hoàn thành việc kiểm thử mà không cần bật máy tính.",
      "Khai thác trực giác, kinh nghiệm thực tế và sự sáng tạo của người kiểm thử khi hóa thân vào các mẫu người dùng đặc thù (ví dụ: một nhân viên mới hay ấn nhầm, một khách hàng cố tình hack hệ thống) để tìm ra các lỗi logic sâu và các tình huống ngoại lệ bất thường ngoài đời thực.",
      "Giúp tiết kiệm 100% chi phí trả lương cho nhân viên kiểm thử.",
      "Đảm bảo mã nguồn phần mềm không bị phát tán ra nước ngoài."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Scripted Testing chỉ kiểm tra những gì đã lường trước trong đặc tả. Exploratory Testing kết hợp Persona trao quyền cho tester suy nghĩ như người dùng thật ngoài đời (thử các hành vi phi chuẩn, ấn nút lung tung, thao tác trái quy luật) để phát hiện các lỗ hổng trải nghiệm và kẽ hở logic tiềm ẩn."
  },
  {
    "track": 8,
    "id": "Q8-13",
    "level": 1,
    "q": "Báo cáo Kiểm thử khả năng chịu tải (Stress/Load Testing) chuẩn bị cho ngày Siêu sale 11/11 trả về kết quả: 'Ở mức tải 1.000 RPS, Response Time p95 là 800ms, Error Rate 0.1%; nhưng khi nâng tải lên 2.500 RPS, Response Time p95 tăng vọt lên 8.2s và Error Rate chạm mức 28% (chủ yếu là lỗi HTTP 504 Gateway Timeout)'. BA cần đọc hiểu dữ liệu này và khuyến nghị điều gì?",
    "opts": [
      "Hệ thống hoàn toàn khỏe mạnh và sẵn sàng đón nhận 50.000 người dùng cùng lúc.",
      "Hệ thống đạt giới hạn chịu đựng (Breaking Point) ở khoảng 1.500 - 2.000 RPS; nguyên nhân nghẽn cổ chai dẫn đến timeout khi vượt quá tải. BA cần cảnh báo rủi ro sập sàn và phối hợp với Kỹ sư hạ tầng/Dev triển khai phương án tối ưu truy vấn DB, bổ sung bộ nhớ đệm Cache (Redis), thiết lập cơ chế xếp hàng chờ (Virtual Waiting Room) và chuẩn bị kịch bản tự động co giãn tài nguyên (Auto-scaling).",
      "Khuyên công ty hủy bỏ ngày hội mua sắm 11/11 và đóng cửa website trong tháng đó.",
      "Đổi mã lỗi từ 504 thành mã 200 để báo cáo trông có vẻ đẹp hơn."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Error Rate 28% kèm thời gian chờ 8.2s là dấu hiệu sập hệ thống (Catastrophic failure) khi lưu lượng vượt quá 2.000 RPS. BA cần diễn giải chỉ số kỹ thuật thành rủi ro thương mại, thúc đẩy giải pháp hạ tầng chịu tải (Caching, Queueing, Auto-scaling, Circuit Breaker) trước chiến dịch lớn."
  },
  {
    "track": 8,
    "id": "Q8-14",
    "level": 2,
    "q": "Còn 24 giờ trước thời điểm Go-Live toàn quốc của Hệ thống Quản lý Vận đơn Logistics. Biên bản UAT còn tồn đọng 1 lỗi phân loại 'Critical': Chức năng 'Xuất báo cáo tổng kết sản lượng tự động lúc 23h59' bị lỗi treo máy và phải mất 45 phút chạy lại thủ công; tuy nhiên toàn bộ các luồng cốt lõi (Tạo đơn, Gán xe, Định vị GPS, Thu hộ COD) đều hoạt động trơn tru 100%. Giám đốc Khối Vận hành tạo áp lực ép BA và QA phải ký 'Biên bản nghiệm thu vô điều kiện' để kịp tiến độ. Là Senior BA đại diện quản lý chất lượng giải pháp, bạn xử lý tình huống tiến thoái lưỡng nan này như thế nào?",
    "opts": [
      "Ký duyệt ngay lập tức và nói dối với Ban Giám đốc rằng hệ thống hoàn toàn không có bất kỳ lỗi nào.",
      "Từ chối ký vô điều kiện; thay vào đó lập 'Biên bản nghiệm thu có điều kiện' (Conditional Sign-off kèm Known Defects List): Nêu rõ lỗi tồn đọng, phân tích tác động rủi ro, xây dựng quy trình thao tác tạm thời (SOP Workaround: Phân công nhân sự vận hành chạy lệnh bù lúc 0h15), đồng thời ký cam kết dịch vụ (SLA) với Đội Dev phải phát hành bản Hotfix sửa dứt điểm lỗi trong vòng 48 giờ sau Go-live có sự phê duyệt đồng thuận của Ban điều hành.",
      "Tuyên bố rút lui khỏi dự án và không chịu trách nhiệm về bất cứ điều gì nữa.",
      "Yêu cầu hoãn lịch Go-live của toàn bộ tập đoàn thêm 6 tháng để viết lại module báo cáo."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Ký vô điều kiện là vô trách nhiệm, nhưng trì hoãn ngày Go-live vì một lỗi batch ban đêm có thể cứu vãn bằng workaround lại gây thiệt hại kinh doanh khổng lồ. Giải pháp chuẩn mực của Senior BA là 'Conditional Sign-off' kèm Workaround khả thi, minh bạch rủi ro và ràng buộc cam kết Hotfix SLA có sự phê chuẩn cấp cao."
  },
  {
    "track": 8,
    "id": "Q8-15",
    "level": 2,
    "q": "Để chuẩn bị môi trường UAT cho Hệ thống Ngân hàng điện tử, đại diện Phía Khách hàng yêu cầu sao chép (Clone) 100% dữ liệu thực từ môi trường Production về máy chủ UAT (gồm số CCCD, số dư tài khoản, lịch sử giao dịch và mật khẩu mã hóa của 3 triệu khách hàng) với lý do 'Có dữ liệu thật 100% thì kiểm thử mới chính xác và phát hiện hết lỗi'. Đội ngũ kiểm thử bao gồm cả nhân sự outsource bên ngoài. Là BA phụ trách giải pháp, bạn cần phản ứng thế nào để vừa đáp ứng nhu cầu kiểm thử vừa tuân thủ quy định bảo mật?",
    "opts": [
      "Đồng ý ngay và gửi đường link tải cơ sở dữ liệu lên nhóm Zalo của các bạn Tester outsource.",
      "Kiên quyết từ chối việc dùng dữ liệu thật chưa xử lý vì vi phạm nghiêm trọng Luật An ninh mạng, Nghị định 13/2023/NĐ-CP và tiêu chuẩn PCI-DSS; Đề xuất phương án áp dụng kỹ thuật 'Làm mờ và xáo trộn dữ liệu' (Data Masking / Obfuscation) hoặc sinh dữ liệu giả lập có cấu trúc tương đương (Synthetic Data Generation): Giữ nguyên format và quy luật logic của dữ liệu (số ký tự CCCD, logic số dư, mã ngân hàng) nhưng thay thế toàn bộ thông tin định danh cá nhân nhạy cảm thành dữ liệu giả.",
      "Tuyên bố cấm hoàn toàn không cho thực hiện kiểm thử trên môi trường UAT nữa.",
      "Yêu cầu 3 triệu khách hàng ký giấy từ bỏ quyền riêng tư dữ liệu để phục vụ kiểm thử."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Sử dụng dữ liệu cá nhân thật trên môi trường phi sản xuất (Non-production environments) có nhà thầu ngoài là vi phạm pháp luật và tạo rủi ro rò rỉ dữ liệu thảm khốc. Data Masking / Data Anonymization là giải pháp bắt buộc: Bảo toàn đặc tính phân bố và độ phức tạp dữ liệu cho kiểm thử nhưng loại bỏ 100% thông tin nhạy cảm định danh (PII)."
  },
  {
    "track": 8,
    "id": "Q8-16",
    "level": 2,
    "q": "Trong quá trình UAT hệ thống Đặt phòng khách sạn tích hợp với Cổng thanh toán quốc tế và Hệ thống Global Distribution System (GDS), môi trường Sandbox của đối tác bên ngoài liên tục chập chờn, phản hồi timeout thất thường khiến các ca kiểm thử UAT luồng đặt vé bị tắc nghẽn suốt 4 ngày. Đội Tester nội bộ không thể phân định lỗi do code nhà hay do đối tác. BA nên phối hợp triển khai giải pháp kỹ thuật nào để thông luồng kiểm thử?",
    "opts": [
      "Cho toàn bộ đội ngũ dự án nghỉ phép cho đến khi đối tác tự sửa xong hệ thống của họ.",
      "Thiết lập giải pháp 'Ảo hóa dịch vụ và Mock Server' (Service Virtualization / API Mocking): Đội phát triển cấu hình một máy chủ giả lập phản hồi của đối tác theo đúng chuẩn hợp đồng giao tiếp (OpenAPI Specification), có thể chủ động kích hoạt trả về các mã thành công, thất bại, thẻ hết hạn hoặc giả lập timeout có chủ đích; cho phép đội UAT kiểm thử thông suốt 100% các kịch bản nghiệp vụ nội bộ mà không phụ thuộc vào hạ tầng đối tác.",
      "Tự ý chuyển thẳng sang môi trường Production thật của đối tác và quẹt thẻ tín dụng cá nhân của BA để test.",
      "Hủy bỏ hoàn toàn tính năng thanh toán quốc tế và chỉ chấp nhận khách đến quầy trả tiền mặt."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Khi phụ thuộc vào dịch vụ bên thứ ba (Third-party dependency) không ổn định trong giai đoạn UAT, Service Virtualization (Mocking Server) là cứu cánh. Nó cho phép cô lập kiểm thử hệ thống nội bộ, mô phỏng cả kịch bản hiếm gặp (Edge cases) mà môi trường thật của đối tác khó chủ động tạo ra."
  },
  {
    "track": 8,
    "id": "Q8-17",
    "level": 2,
    "q": "Trong phiên UAT hệ thống Thương mại điện tử, Trưởng phòng Chăm sóc khách hàng phát hiện: Khi khách hàng hủy một đơn hàng đã áp Voucher hoàn xu, hệ thống hủy đơn thành công nhưng KHÔNG tự động phục hồi lại thời hạn sử dụng của Voucher cho khách. Trong tài liệu SRS ban đầu, mục này bị bỏ trống không quy định. Đội Dev khẳng định đây là 'Change Request' phát sinh ngoài hợp đồng, đòi thêm 60 triệu và hoãn 10 ngày. Khách hàng khẳng định đây là 'Lỗi logic hiển nhiên' và tuyên bố từ chối nghiệm thu. Là BA chủ trì phân tích, bạn đưa ra phán quyết và giải pháp hòa giải như thế nào?",
    "opts": [
      "Ủng hộ khách hàng 100% và ép Dev phải tự bỏ tiền túi ra đền cho công ty.",
      "Thừa nhận thiếu sót trong tài liệu đặc tả (Ambiguity gap); Đóng vai trò cầu nối phân tích tác động kinh doanh: Việc không hoàn voucher sẽ dẫn đến hàng nghìn cuộc gọi khiếu nại làm quá tải tổng đài ngay ngày đầu Go-live. Đề xuất giải pháp dung hòa: Tách bài toán thành 2 bước — Bước 1 (Ngay trong đợt Release): Dev hỗ trợ viết nhanh một API hoàn voucher thủ công cho đội CSKH xử lý tạm thời; Bước 2: Đưa việc tự động hóa hoàn voucher vào backlog cải tiến của Sprint đầu tiên sau Go-live với chi phí kỹ thuật được thương lượng lại giữa hai bên.",
      "Xóa bỏ hoàn toàn tính năng Voucher ra khỏi hệ thống để không bên nào tranh cãi nữa.",
      "Bỏ mặc hai bên tự tranh luận và không tham gia cuộc họp hòa giải."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Tranh chấp 'Defect vs CR' do khoảng trống đặc tả là xung đột thường gặp nhất trong UAT. BA chuyên nghiệp không đổ lỗi mà nhận diện rủi ro vận hành thực tế, đưa ra giải pháp giảm tải hai bước (Workaround trước để kịp Go-live, tự động hóa bài bản sau) để hài hòa lợi ích kinh doanh và kỹ thuật."
  },
  {
    "track": 8,
    "id": "Q8-18",
    "level": 2,
    "q": "Dự án Nâng cấp Hệ thống Tiền gửi Ngân hàng thực hiện chuyển đổi dữ liệu (Data Migration) số dư của 800.000 tài khoản từ Core Banking cũ sang Core Banking mới. Sai số dù chỉ 1 đồng hoặc lệch 1 ngày tính lãi suất dồn tích (Accrued Interest) cũng có thể dẫn đến đình chỉ hoạt động ngân hàng. Để kiểm thử nghiệm thu chuyển đổi dữ liệu (Data Migration Testing), BA và QA cần thiết kế chiến lược kiểm thử đối soát như thế nào?",
    "opts": [
      "Chọn ngẫu nhiên 5 tài khoản của nhân viên ngân hàng kiểm tra bằng mắt, nếu đúng thì kết luận toàn bộ 800.000 tài khoản đều đúng.",
      "Thiết lập quy trình kiểm thử đối soát tự động toàn diện (Automated 100% Data Reconciliation): Chạy song song tính toán lãi suất trên cả hai hệ thống trong cùng một kỳ đối chiếu; xây dựng các script SQL tự động so sánh từng trường dữ liệu then chốt (Số dư gốc, lãi dồn tích, trạng thái phong tỏa, mã tiền tệ); thiết lập bảng kiểm soát tổng hợp (Reconciliation Dashboard) kiểm tra khớp số dư tổng mức Ledger (Balance-level check) và kiểm tra chi tiết từng bút toán (Account-level check), với ngưỡng sai số chấp nhận được là 0.00 VNĐ.",
      "Cộng gộp toàn bộ tiền của 800.000 tài khoản thành một con số tổng duy nhất rồi so sánh.",
      "Chuyển đổi dữ liệu trực tiếp trong giờ giao dịch mà không cần chạy kiểm thử trước."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Migration Testing trong tài chính đòi hỏi kiểm tra đối soát 100% (Reconciliation at 100% volume) ở hai cấp độ: Cấp độ vi mô (từng tài khoản, lãi tích lũy) và cấp độ vĩ mô (tổng tài sản trên sổ cái General Ledger), đối soát song song (Parallel run) để đảm bảo độ chính xác tuyệt đối không có sai số."
  },
  {
    "track": 8,
    "id": "Q8-19",
    "level": 2,
    "q": "Trước thời điểm chính thức chuyển đổi hệ thống ERP Bệnh viện vào đêm ngày thứ Bảy (Go-Live Window từ 22h00 đến 04h00 sáng Chủ nhật), Ban Điều hành yêu cầu tổ chức một buổi 'Mock Cutover' (Diễn tập chuyển đổi hệ thống). Mục tiêu cốt lõi mà BA và đội ngũ chuyển giao cần xác minh trong buổi diễn tập này là gì?",
    "opts": [
      "Mời toàn bộ bệnh nhân trong bệnh viện tham gia chạy thử máy tính.",
      "Xác thực tính khả thi của 'Kịch bản chuyển đổi chi tiết từng phút' (Cutover Runbook): Đo lường chính xác thời gian chạy chuyển đổi dữ liệu có khớp với khung giờ ngừng hệ thống (Downtime Window 6 tiếng) hay không; kiểm tra vai trò phối hợp giữa các nhóm (Kỹ thuật, Nghiệp vụ y tế, Dược); và đặc biệt là kiểm thử quy trình khôi phục trạng thái ban đầu (Rollback Plan) nếu gặp sự cố không thể khắc phục trước giờ mở cửa đón bệnh nhân vào sáng Chủ nhật.",
      "Kiểm tra xem hệ thống điều hòa nhiệt độ trong phòng máy chủ có đủ mát hay không.",
      "Viết xong toàn bộ tài liệu hướng dẫn sử dụng phần mềm bằng tiếng Anh."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Mock Cutover (Diễn tập chuyển đổi) là bài kiểm tra quyết định cho ngày Go-live: Đo lường chính xác thời gian chạy dữ liệu có vượt khung giờ chết cho phép (Downtime window) hay không, kiểm chứng tính sẵn sàng của nhân sự và bắt buộc phải diễn tập kế hoạch Rollback để đảm bảo an toàn tuyệt đối cho vận hành y tế."
  },
  {
    "track": 8,
    "id": "Q8-20",
    "level": 2,
    "q": "Doanh nghiệp chuyển đổi mô hình sang Continuous Deployment (CD), phát hành phiên bản mới hàng tuần ra môi trường Production. Quy trình UAT truyền thống kéo dài 3 tuần của các Trưởng phòng nghiệp vụ bị 'phá sản' hoàn toàn vì không thể theo kịp tốc độ của đội kỹ thuật. Là Senior BA tư vấn hiện đại hóa quy trình chất lượng, giải pháp nào giúp Doanh nghiệp duy trì kiểm soát nghiệm thu nghiệp vụ mà không làm chậm nhịp phát hành phần mềm?",
    "opts": [
      "Bãi bỏ hoàn toàn việc nghiệm thu nghiệp vụ và để cho Dev tự do release bất cứ thứ gì họ muốn.",
      "Ứng dụng kỹ thuật 'Cờ tính năng' (Feature Toggles / Feature Flags) kết hợp cơ chế 'Phát hành thử nghiệm phân tầng' (Canary Release / Internal Beta Testing): Mã nguồn mới vẫn được liên tục đóng gói lên môi trường Production nhưng tính năng mới được ẩn giấu sau cờ tính năng; BA cấp quyền cho nhóm người dùng nghiệp vụ then chốt trải nghiệm và nghiệm thu trực tiếp trên dữ liệu thật an toàn; khi đạt chuẩn chấp nhận, PO/BA chỉ cần bật cờ tính năng cho toàn bộ thị trường ngay lập tức mà không cần triển khai lại mã nguồn.",
      "Bắt buộc đội Dev phải quay trở lại mô hình Waterfall phát hành 1 năm 1 lần.",
      "Chỉ cho phép phát hành các tính năng vào ngày lễ Giáng sinh hàng năm."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Trong kỷ nguyên DevOps/CI-CD, Feature Flags (Feature Toggles) tách rời việc 'Triển khai mã nguồn' (Deployment) khỏi việc 'Phát hành tính năng cho người dùng' (Release). Điều này giúp BA và Business Stakeholders có thể nghiệm thu trực tiếp trong môi trường thật (Testing in Production an toàn) mà không cản trở dòng chảy phát triển của kỹ thuật."
  },
  {
    "track": 9,
    "id": "Q9-01",
    "level": 0,
    "q": "Theo chuẩn quốc tế BABOK Guide v3 của IIBA, 6 Vùng Tri thức (Knowledge Areas) cốt lõi của nghề Business Analysis bao gồm những nội dung nào?",
    "opts": [
      "Lập trình Frontend, Quản trị mạng, Lắp ráp phần cứng, Thiết kế đồ họa, Kế toán thuế, Bán hàng qua điện thoại.",
      "Business Analysis Planning & Monitoring, Elicitation & Collaboration, Requirements Life Cycle Management, Strategy Analysis, Requirements Analysis and Design Definition (RADD), và Solution Evaluation.",
      "Tuyển dụng nhân sự, Quản lý tiền lương, Đàm phán hợp đồng, Mua sắm máy tính, Soạn thảo văn bản, Chấm công hàng ngày.",
      "Scrum Master, Product Owner, DevOps Engineer, QA Automation, Data Scientist, UI Designer."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. BABOK Guide v3 phân chia toàn bộ nghiệp vụ BA thành 6 Knowledge Areas: Lập kế hoạch & Giám sát BA; Khai thác & Cộng tác; Quản lý vòng đời yêu cầu; Phân tích chiến lược; Phân tích yêu cầu & Định nghĩa thiết kế; và Đánh giá giải pháp."
  },
  {
    "track": 9,
    "id": "Q9-02",
    "level": 0,
    "q": "Sự khác biệt cốt lõi về mặt năng lực và trách nhiệm giữa một Junior BA và một Senior BA là gì?",
    "opts": [
      "Junior BA không cần biết dùng máy tính; Senior BA phải biết viết code Assembly.",
      "Junior BA thường thực hiện các tác vụ phân tích theo kịch bản rõ ràng, cần có sự hướng dẫn về phương pháp luận và tài liệu hóa; Senior BA có khả năng giải quyết các vấn đề mơ hồ, dẫn dắt định hình giải pháp chiến lược, quản lý các bên liên quan phức tạp và cố vấn cho đội ngũ.",
      "Junior BA làm việc 40 giờ/tuần, Senior BA bắt buộc làm việc 80 giờ/tuần.",
      "Senior BA là người ký hợp đồng nhận tiền dự án từ khách hàng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Năng lực tạo ra sự khác biệt lớn nhất giữa Junior và Senior BA là khả năng 'Làm chủ sự mơ hồ' (Embracing Ambiguity), tư duy phản biện chiến lược, kỹ năng đàm phán với lãnh đạo cấp cao và khả năng định hình bài toán kinh doanh chưa có tiền lệ."
  },
  {
    "track": 9,
    "id": "Q9-03",
    "level": 0,
    "q": "Trong kỹ năng phỏng vấn thu thập yêu cầu (Interviewing Skills), khi nào BA nên sử dụng 'Câu hỏi mở' (Open-ended questions) thay vì 'Câu hỏi đóng' (Closed-ended questions)?",
    "opts": [
      "Khi cuộc họp sắp hết giờ và chỉ còn đúng 30 giây để chốt biên bản.",
      "Khi bắt đầu buổi phỏng vấn hoặc khi muốn khuyến khích người được phỏng vấn chia sẻ chi tiết, bộc lộ bối cảnh sâu, nỗi đau thực tế và toàn cảnh quy trình làm việc hiện tại mà BA chưa biết trước.",
      "Khi cần xác nhận dứt điểm một lựa chọn đúng/sai (Có hoặc Không) về một quy định pháp lý.",
      "Khi nói chuyện với máy tính qua dòng lệnh terminal."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Câu hỏi mở (Bắt đầu bằng Làm thế nào, Tại sao, Điều gì xảy ra khi...) khơi gợi luồng suy nghĩ tự nhiên và giúp khám phá các góc khuất chưa lường trước. Câu hỏi đóng (Có/Không, Chọn A hay B) dùng ở giai đoạn sau để chốt hạ và xác nhận sự đồng thuận."
  },
  {
    "track": 9,
    "id": "Q9-04",
    "level": 0,
    "q": "Khi áp dụng Ma trận Mendelow (Ma trận Quyền lực vs Mức độ quan tâm - Power vs Interest Grid) để phân tích các bên liên quan, nhóm Stakeholder thuộc ô 'Quyền lực cao - Mức độ quan tâm cao' (High Power, High Interest) cần được quản lý theo chiến lược nào?",
    "opts": [
      "Chỉ cần giám sát tối thiểu (Monitor with minimal effort).",
      "Quản lý chặt chẽ và tương tác thường xuyên (Manage Closely - Key Players): Tham vấn ý kiến liên tục, cập nhật tiến độ chi tiết và duy trì sự đồng thuận cao độ.",
      "Chỉ gửi email thông báo định kỳ mà không cần lắng nghe phản hồi (Keep Informed).",
      "Phớt lờ hoàn toàn để tránh bị can thiệp vào công việc kỹ thuật."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Nhóm 'High Power - High Interest' là những người nắm quyền sinh sát của dự án (Key Players, Sponsors, Product Owners). Chiến lược bắt buộc là 'Manage Closely': Xây dựng mối quan hệ tin cậy, tham vấn ý kiến thường xuyên và đảm bảo họ luôn hài lòng với định hướng giải pháp."
  },
  {
    "track": 9,
    "id": "Q9-05",
    "level": 0,
    "q": "Trong giao tiếp chuyên nghiệp của BA, kỹ thuật 'Lắng nghe tích cực' (Active Listening) kết hợp với 'Diễn giải lại' (Paraphrasing) mang lại lợi ích gì?",
    "opts": [
      "Lặp lại như một con vẹt từng từ ngữ của khách hàng để kéo dài thời gian cuộc họp.",
      "Giúp BA tóm lược và diễn đạt lại nội dung của người nói bằng ngôn từ mạch lạc của mình ('Theo như tôi hiểu, điều anh/chị đang mong muốn là... có đúng không?'), qua đó xác nhận tính chính xác của thông tin, xóa tan hiểu lầm và thể hiện sự tôn trọng tuyệt đối đối với đối tác.",
      "Dùng để bác bỏ ngay lập tức mọi ý kiến của đối phương khi họ vừa dứt lời.",
      "Giúp ghi âm lén cuộc trò chuyện mà đối phương không hề hay biết."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Paraphrasing trong Active Listening là công cụ kiểm chứng thông tin tối thượng của BA: Nó biến thông tin nghe được thành sự hiểu biết chung (Shared Understanding) đã được xác thực, ngăn ngừa rủi ro hiểu sai dẫn đến viết sai đặc tả."
  },
  {
    "track": 9,
    "id": "Q9-06",
    "level": 1,
    "q": "Trong buổi phỏng vấn tuyển dụng vị trí Senior BA, Giám đốc Phỏng vấn đặt câu hỏi: 'Hãy kể lại một trường hợp bạn phải xử lý bất đồng quan điểm gay gắt giữa Giám đốc Kinh doanh và Giám đốc Công nghệ về phạm vi dự án'. Ứng viên nên áp dụng cấu trúc trả lời nào để làm nổi bật năng lực giải quyết vấn đề?",
    "opts": [
      "Kể lể chi tiết về việc hai vị giám đốc đã to tiếng cãi nhau như thế nào và chê bai cả hai người.",
      "Áp dụng mô hình STAR: Situation (Bối cảnh dự án & mâu thuẫn cốt lõi) -> Task (Trách nhiệm của BA trong việc tìm điểm chung) -> Action (Hành động cụ thể: Phân tích dữ liệu, tổ chức workshop, dùng ma trận đánh đổi Trade-off Matrix) -> Result (Kết quả đạt được: Đồng thuận phương án, dự án kịp tiến độ, bài học kinh nghiệm).",
      "Nói rằng mình chưa bao giờ gặp bất đồng vì mọi người trong công ty luôn luôn đồng ý với nhau.",
      "Khuyên người phỏng vấn không nên hỏi những câu hỏi liên quan đến xung đột cá nhân."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Phương pháp STAR (Situation - Task - Action - Result) là chuẩn mực vàng trong phỏng vấn hành vi (Behavioral Interview). Nó giúp ứng viên trình bày câu chuyện có cấu trúc rõ ràng, tập trung vào hành động giải pháp của bản thân và định lượng kết quả cụ thể."
  },
  {
    "track": 9,
    "id": "Q9-07",
    "level": 1,
    "q": "Khi triển khai phần mềm Số hóa Quy trình cho Nhà máy, Trưởng phòng Kế hoạch Vận hành luôn tỏ thái độ bất hợp tác, từ chối trả lời phỏng vấn và vắng mặt trong các buổi họp thu thập yêu cầu vì lo sợ phần mềm tự động hóa sẽ khiến phòng ban của ông bị cắt giảm nhân sự. Kế hoạch tiếp cận nào của BA là chuyên nghiệp và nhân văn nhất?",
    "opts": [
      "Báo cáo lên Tổng giám đốc đề nghị kỷ luật hoặc sa thải ngay Trưởng phòng Kế hoạch.",
      "Chủ động đặt một buổi trò chuyện 1-1 không chính thức (Informal 1-on-1): Lắng nghe chân thành nỗi lo lắng về sự thay đổi (Change resistance); giải thích rõ mục tiêu phần mềm là giải phóng nhân viên khỏi các tác vụ nhập liệu thủ công nhàm chán để họ nâng cấp lên vai trò kiểm soát chiến lược; đồng thời mời ông đóng vai trò 'Chuyên gia cố vấn trưởng' (Subject Matter Expert) định hình tính năng để tạo cảm giác làm chủ giải pháp (Sense of ownership).",
      "Tự ý bịa ra các quy trình nghiệp vụ của phòng Kế hoạch để đưa vào phần mềm mà không cần ông ấy.",
      "Gửi email đe dọa rằng nếu không hợp tác thì toàn bộ nhân viên dưới quyền ông sẽ bị phạt tiền."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Kháng cự thay đổi (Change Resistance) thường bắt nguồn từ nỗi sợ mất an toàn vị trí. BA giỏi là người làm công tác quản trị thay đổi (Change Management): Thấu cảm, lắng nghe nỗi sợ, tái định vị giá trị của tự động hóa và trao quyền để họ trở thành đồng tác giả của giải pháp."
  },
  {
    "track": 9,
    "id": "Q9-08",
    "level": 1,
    "q": "Trong tài liệu yêu cầu nghiệp vụ, một BA Junior viết: 'Hệ thống cần phải xử lý dữ liệu thật nhanh chóng, có giao diện trực quan thân thiện và đảm bảo an toàn tuyệt đối'. Để chuyển hóa câu văn này thành các yêu cầu đo lường được theo tiêu chuẩn SMART, Senior BA nên hướng dẫn viết lại như thế nào?",
    "opts": [
      "Hệ thống phải làm hài lòng tất cả mọi người trên thế giới bất kể già trẻ lớn bé.",
      "Tách thành các tiêu chí cụ thể: 1. Hiệu năng: 95% giao dịch truy vấn báo cáo hoàn tất dưới 1.5 giây ở mức tải 2.000 người dùng đồng thời; 2. Khả năng sử dụng: 90% nhân viên mới hoàn thành thao tác tạo đơn trong vòng 3 phút mà không cần người hướng dẫn; 3. Bảo mật: Xác thực 2 lớp (2FA), mã hóa dữ liệu truyền tải theo chuẩn TLS 1.3 và lưu trữ theo chuẩn AES-256.",
      "Hệ thống phải siêu nhanh, siêu đẹp và bảo mật như pháo đài quân sự.",
      "Giữ nguyên câu văn cũ vì nó đã rất đầy đủ ý nghĩa và dễ hiểu đối với lập trình viên."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Các từ ngữ cảm tính ('nhanh', 'thân thiện', 'an toàn') là cội nguồn của tranh cãi khi nghiệm thu. Tiêu chuẩn SMART đòi hỏi lượng hóa bằng chỉ số SLA kỹ thuật, chỉ số đo lường trải nghiệm người dùng (Usability metrics) và tiêu chuẩn an ninh cụ thể."
  },
  {
    "track": 9,
    "id": "Q9-09",
    "level": 1,
    "q": "Trong bài kiểm tra nghiệp vụ tại chỗ khi phỏng vấn BA: 'Hãy thiết kế luồng quy trình rút tiền mặt tại cây ATM'. Ứng viên thể hiện tư duy phân tích chuẩn mực nhất bằng cách bắt đầu như thế nào?",
    "opts": [
      "Lập tức vẽ ngay giao diện màn hình cảm ứng của cây ATM với màu sắc ưa thích.",
      "Bắt đầu bằng việc xác định Phạm vi & Giả định (Scope & Assumptions: ATM nội mạng hay liên mạng, loại thẻ hỗ trợ), nhận diện Tác nhân (Actors: Khách hàng, Cây ATM, Hệ thống Core Banking, Bộ đếm tiền vật lý), Tiền điều kiện (Pre-conditions); sau đó thiết kế Luồng chuẩn (Happy path) trước khi phân tích các Kịch bản ngoại lệ & Rủi ro (Exceptions: Sai mã PIN 3 lần, thẻ hết hạn, máy hết tiền, tiền bị kẹt, khách quên lấy tiền).",
      "Kêu ca rằng câu hỏi này đã quá cũ và yêu cầu người phỏng vấn đổi sang câu hỏi khác.",
      "Liệt kê tất cả các hãng sản xuất cây ATM trên thị trường hiện nay."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Người phỏng vấn không chấm điểm việc bạn vẽ nhanh, mà chấm phương pháp tiếp cận có cấu trúc: Đi từ Bối cảnh -> Phạm vi -> Tác nhân -> Luồng thành công chuẩn mực (Happy path) -> Khai thác sâu các ngoại lệ và cơ chế an toàn (Exceptions & Edge cases)."
  },
  {
    "track": 9,
    "id": "Q9-10",
    "level": 1,
    "q": "Khách hàng khăng khăng đòi bổ sung thêm một tính năng 'Nhận diện khách hàng VIP bằng trí tuệ nhân tạo nhận diện biển số xe ô tô' vào dự án Bán lẻ chỉ còn 1 tháng là Go-live, trong khi ngân sách và thời gian đã cạn kiệt. Kỹ thuật đàm phán 'Yes, and...' (Đồng thuận có điều kiện) của BA được áp dụng thế nào để từ chối khéo léo mà không gây rạn nứt mối quan hệ?",
    "opts": [
      "Nói 'Không bao giờ' và bảo khách hàng rằng đây là một ý tưởng ngớ ngẩn không có tính khả thi.",
      "Áp dụng nguyên lý: 'Ý tưởng nhận diện khách hàng VIP của anh/chị rất tuyệt vời để tăng trải nghiệm cá nhân hóa, VÀ để đảm bảo tính năng này hoạt động ổn định nhất mà không làm lỡ ngày khai trương hệ thống bán lẻ vào tháng tới, chúng ta nên ghi nhận nó thành Hạng mục trọng điểm của Giai đoạn 2 (Phase 2 Roadmap) ngay sau khi Giai đoạn 1 đi vào hoạt động trơn tru'.",
      "Im lặng gật đầu đồng ý nhưng sau đó không làm gì cả.",
      "Yêu cầu khách hàng thanh toán thêm 10 tỷ đồng tiền mặt ngay trong ngày thì mới chịu làm."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Kỹ thuật đàm phán 'Yes, and...' (hoặc 'Yes, but...') công nhận giá trị của ý tưởng trước (tạo thiện cảm và đồng thuận tâm lý), sau đó đưa ra các ràng buộc thực tế và giải pháp chuyển dịch khả thi (đưa vào Phase 2) thay vì nói 'Không' một cách thô bạo."
  },
  {
    "track": 9,
    "id": "Q9-11",
    "level": 1,
    "q": "Một BA phụ trách cùng lúc 3 dự án khác nhau và bị ngập trong 20 đầu việc mỗi ngày từ email, chat, họp hành và viết tài liệu. Để không bị kiệt sức (Burnout) và đảm bảo các mốc quan trọng của dự án không bị đổ vỡ, BA nên ứng dụng Ma trận Eisenhower như thế nào?",
    "opts": [
      "Làm tất cả mọi việc theo thứ tự ai gửi tin nhắn sau cùng thì làm trước.",
      "Phân loại công việc vào 4 góc: 1. Khẩn cấp & Quan trọng (Làm ngay: Lỗi Blocker trước Go-live, rủi ro pháp lý); 2. Quan trọng nhưng Không khẩn cấp (Lên lịch tập trung: Viết đặc tả bài bản, nghiên cứu giải pháp, đào tạo đội ngũ); 3. Khẩn cấp nhưng Không quan trọng (Ủy quyền/Thương lượng: Tham gia các cuộc họp cập nhật tình hình thông thường); 4. Không khẩn cấp & Không quan trọng (Loại bỏ triệt để: Lướt mạng xã hội, các luồng email thảo luận lan man).",
      "Tắt toàn bộ điện thoại và máy tính để đi ngủ trong giờ làm việc.",
      "Đùn đẩy toàn bộ công việc sang cho các bạn Tester và lập trình viên làm thay."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Ma trận Eisenhower giúp BA phân biệt giữa 'Bận rộn' (Being busy) và 'Hiệu quả' (Being effective). Trọng tâm của một BA xuất sắc là dành nhiều thời gian cho Ô số 2 (Quan trọng nhưng không khẩn cấp) để ngăn ngừa các cuộc khủng hoảng phát sinh thành Ô số 1."
  },
  {
    "track": 9,
    "id": "Q9-12",
    "level": 1,
    "q": "Trong một buổi Hội thảo Yêu cầu (Requirements Workshop) có 12 đại diện từ các phòng ban tham gia, cuộc thảo luận bắt đầu bị chệch hướng khi hai Trưởng phòng tranh cãi gay gắt suốt 25 phút về quy chế thưởng nội bộ của công ty (nằm ngoài phạm vi của phần mềm). Là người điều phối (Facilitator), BA cần làm gì?",
    "opts": [
      "Ngồi nghe họ cãi nhau cho đến khi hết giờ họp rồi cho giải tán.",
      "Lịch sự can thiệp và kích hoạt công cụ 'Bãi đỗ ý tưởng' (Parking Lot / Idea Bin): Ghi nhận mối quan tâm của hai Trưởng phòng lên bảng nhưng nhắc nhở lại Mục tiêu trọng tâm của buổi họp hôm nay; đề nghị chuyển chủ đề quy chế thưởng sang một cuộc họp riêng của phòng Nhân sự để tiếp tục chương trình nghị sự (Agenda) đúng thời gian quy định.",
      "Tham gia tranh luận và bầu chọn xem ai là người có lý hơn.",
      "Đứng dậy bỏ về phòng làm việc một mình."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. 'Parking Lot' là kỹ thuật điều phối kinh điển của Facilitator: Tôn trọng ý kiến của người tham gia bằng cách ghi nhận lại trực quan nhưng kiên quyết cắt đứt việc làm loãng chủ đề, giữ cho cuộc họp bám sát mục tiêu và khung thời gian (Timebox)."
  },
  {
    "track": 9,
    "id": "Q9-13",
    "level": 1,
    "q": "Khi nhà tuyển dụng hỏi câu hỏi phỏng vấn kinh điển: 'Điểm yếu lớn nhất của bạn là gì?'. Câu trả lời nào thể hiện sự tự nhận thức (Self-awareness) và tinh thần cầu tiến chuyên nghiệp nhất của một BA?",
    "opts": [
      "Tôi là người quá hoàn hảo và không hề có bất kỳ điểm yếu nào trong công việc.",
      "Tôi nhận thấy trước đây mình có xu hướng quá cầu toàn trong việc hoàn thiện tài liệu đặc tả, dẫn đến việc đôi khi làm chậm nhịp phản hồi cho đội phát triển. Nhận thức được điều này, tôi đã chủ động áp dụng các mẫu tài liệu tinh gọn (Lean Documentation) và phối hợp trao đổi trực tiếp với Dev/QA qua mockup sớm để vừa kiểm soát được chất lượng vừa đảm bảo tốc độ của Sprint.",
      "Điểm yếu của tôi là hay ngủ quên và không thích nghe theo chỉ đạo của cấp trên.",
      "Tôi rất ghét phải viết tài liệu và không thích nói chuyện với khách hàng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Một câu trả lời điểm yếu chuẩn mực phải hội tụ 3 yếu tố: 1. Thành thật nhận diện một điểm hạn chế thực tế trong công việc; 2. Thể hiện nhận thức được tác động của nó; 3. Nêu rõ kế hoạch và các hành động cụ thể bản thân đã và đang thực hiện để khắc phục."
  },
  {
    "track": 9,
    "id": "Q9-14",
    "level": 2,
    "q": "Trong quá trình phân tích số liệu hiệu quả hoạt động để thiết kế Module Tính thưởng tự động cho Dự án Chuyển đổi số Ngân hàng, Senior BA phát hiện Trưởng vùng kinh doanh đang sử dụng thủ thuật chia nhỏ các khoản vay và ghi nhận giải ngân khống ảo trước kỳ chốt sổ để thổi phồng KPI quý. Khi BA chuẩn bị đưa phát hiện này vào báo cáo, Giám đốc Dự án yêu cầu BA: 'Hãy lờ đi và chỉnh lại số liệu cho êm đẹp, vì Trưởng vùng này là người đỡ đầu chính trị cho dự án chúng ta'. Đứng trước xung đột đạo đức nghề nghiệp và áp lực quyền lực chính trị nội bộ, hành động chuẩn mực của bạn là gì?",
    "opts": [
      "Lập tức nghe lời Giám đốc Dự án và sửa lại toàn bộ số liệu sai lệch để bảo vệ vị trí của mình.",
      "Bảo vệ tính khách quan và tính toàn vẹn dữ liệu (Data Integrity): Từ chối làm sai lệch số liệu phân tích; trình bày các con số thực tế một cách trung thực và khách quan; lập biên bản rủi ro tuân thủ nghiệp vụ (Compliance & Fraud Risk Analysis) gửi riêng cho Giám đốc Dự án để giải thích rõ hậu quả pháp lý nghiêm trọng nếu kiểm toán nội bộ phát hiện sau này; đồng thời nếu tiếp tục bị ép buộc thì kích hoạt quy trình báo cáo bảo vệ đạo đức nghề nghiệp lên Kênh Kiểm toán Nội bộ hoặc Ban Đạo đức (Whistleblowing policy).",
      "Đăng toàn bộ tài liệu mật của ngân hàng lên mạng xã hội Facebook để bóc phốt.",
      "Đòi Trưởng vùng kinh doanh chia cho mình một phần tiền thưởng thì mới chịu im lặng."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Đạo đức nghề nghiệp của Business Analyst đòi hỏi tính độc lập, khách quan và trung thực tuyệt đối với dữ liệu (BABOK Code of Ethical Conduct). Tiếp tay làm sai lệch số liệu là hành vi gian lận vi phạm pháp luật. BA cần bảo vệ bản thân và tổ chức bằng chứng cứ khách quan và các kênh báo cáo minh bạch hợp pháp."
  },
  {
    "track": 9,
    "id": "Q9-15",
    "level": 2,
    "q": "Hệ thống Quản lý Bệnh viện thông minh (Smart Hospital) gặp thảm họa vào ngày đầu Go-live: Module Tiếp đón bệnh nhân cấp cứu bị tê liệt khiến hàng trăm bệnh nhân ứ đọng, người nhà bức xúc quay video lan truyền trên truyền thông. Ban Giám đốc tổ chức họp khẩn và quy kết lỗi do BA không lường trước quy trình khẩn cấp. Trong vai trò Lead BA, bạn chủ trì buổi Phân tích Nguyên nhân Gốc rễ (Root Cause Analysis - RCA) như thế nào để vừa hạ nhiệt khủng hoảng vừa tìm ra giải pháp khắc phục dứt điểm?",
    "opts": [
      "Lập tức đổ hết mọi tội lỗi cho các bác sĩ và nhân viên điều dưỡng vì họ không chịu học cách dùng phần mềm.",
      "Dẫn dắt buổi RCA trên tinh thần 'Không đổ lỗi cá nhân' (Blameless Post-mortem): Sử dụng phương pháp biểu đồ Xương cá (Ishikawa Diagram) và 5 Whys để mổ xẻ toàn diện trên 4 khía cạnh: Quy trình nghiệp vụ (Quy trình dự phòng khẩn cấp chưa được kích hoạt), Công nghệ (Nghẽn kết nối mạng bệnh viện), Dữ liệu (Thiếu đồng bộ bảo hiểm y tế), và Con người (Thiếu đào tạo thao tác nhanh lúc hoảng loạn); từ đó đưa ra ngay giải pháp 2 tầng: Kích hoạt ngay quy trình giấy dự phòng (Code Blue SOP) trong ngắn hạn, và điều chỉnh luồng tắt 1-click cho ca cấp cứu trong phần mềm trong vòng 24 giờ.",
      "Nộp đơn xin nghỉ việc ngay trong buổi họp để trốn tránh trách nhiệm.",
      "Tuyên bố rằng hệ thống bệnh viện quá phức tạp và không có bất kỳ ai trên đời có thể làm được."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Khủng hoảng đòi hỏi bản lĩnh lãnh đạo của Lead BA: Chuyển hóa tâm lý đổ lỗi thành tinh thần 'Blameless Post-mortem'. Sử dụng công cụ khoa học (Ishikawa, 5 Whys) giúp toàn bộ các bên nhìn nhận sự cố một cách hệ thống, vừa có biện pháp cứu hộ tức thời (Fall-back procedure) vừa có giải pháp kỹ thuật sửa gốc rễ."
  },
  {
    "track": 9,
    "id": "Q9-16",
    "level": 2,
    "q": "Bài toán tình huống chiến lược (Strategic Case Study): Tập đoàn Bán lẻ đang cân nhắc bài toán Tự xây dựng hay Đi mua (Build vs Buy) cho Hệ thống Quản lý Trung tâm Phân phối (WMS/WES): Lựa chọn A là mua phần mềm đóng gói tiêu chuẩn quốc tế của SAP/Manhattan giá 1 triệu USD, triển khai trong 6 tháng nhưng chi phí bản quyền hàng năm cao và rất khó tùy biến theo các robot AGV nội địa; Lựa chọn B là tự phát triển (In-house Build) với chi phí ước tính 400.000 USD nhưng thời gian kéo dài 18 tháng và rủi ro năng lực công nghệ đội ngũ. Với tư cách Senior BA chiến lược, bạn thiết lập Khung phân tích quyết định (Decision Matrix) dựa trên các trụ cột cốt lõi nào?",
    "opts": [
      "Khuyên chọn phương án nào rẻ tiền nhất tại thời điểm hiện tại bất kể tương lai thế nào.",
      "Xây dựng Khung phân tích Đánh đổi Đa chiều (Multi-criteria Decision Analysis & TCO): 1. Phân tích Tổng chi phí sở hữu 5 năm (TCO gồm chi phí mua, hạ tầng, bảo trì, tùy biến); 2. Đánh giá Năng lực lõi (Core Competency: Quản lý kho có phải là lợi thế cạnh tranh sống còn độc quyền của doanh nghiệp hay không); 3. Rủi ro thời gian thâm nhập thị trường (Time-to-Market); 4. Mức độ phụ thuộc nhà cung cấp (Vendor Lock-in) vs Rủi ro giữ chân nhân tài nội bộ (Talent Retention); Từ đó đề xuất phương án tối ưu (ví dụ mô hình Hybrid: Mua nền tảng lõi và tự xây dựng các module điều phối robot độc quyền).",
      "Gieo quẻ xúc xắc để quyết định cho nhanh chóng.",
      "Chỉ định mua ngay phần mềm của công ty do người quen của BA làm giám đốc."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Quyết định Build vs Buy không chỉ dựa trên giá mua ban đầu. Senior BA phải đánh giá qua lăng kính TCO 5 năm, xem xét năng lực cốt lõi (Strategic Differentiator) và thời gian ra thị trường. Mô hình Hybrid (Mua hệ thống lõi đã chứng minh độ ổn định, tự xây các dịch vụ cạnh tranh độc quyền) thường là giải pháp cân bằng tối ưu."
  },
  {
    "track": 9,
    "id": "Q9-17",
    "level": 2,
    "q": "Trong Dự án ERP Doanh nghiệp, hai Nhà tài trợ cấp cao (Project Sponsors) rơi vào bế tắc chính trị: Phó Tổng Giám đốc Tài chính muốn quy trình Phê duyệt Mua sắm phải đi qua 5 cấp kiểm soát nghiêm ngặt bằng văn bản số để triệt tiêu mọi thất thoát; Trong khi Phó Tổng Giám đốc Kinh doanh muốn quy trình phê duyệt phải tức thời dưới 15 phút trên điện thoại di động để nhân viên kịp chốt đơn hàng triệu đô với đối tác. Cả hai vị đều nắm quyền lực ngang nhau và từ chối nhượng bộ. Là Lead BA điều phối dự án, chiến lược hòa giải và thiết kế giải pháp của bạn là gì?",
    "opts": [
      "Bỏ phiếu kín giữa các nhân viên công ty xem ai được yêu thích hơn để nghe theo người đó.",
      "Áp dụng phương pháp 'Phân tầng quy tắc nghiệp vụ theo giá trị và ngưỡng rủi ro' (Risk-based Tiered Approval Thresholds): Phân tích lịch sử dữ liệu giao dịch 3 năm gần nhất để chứng minh rằng 80% đơn hàng mua sắm có giá trị dưới 50 triệu đồng và có tỷ lệ rủi ro gần như bằng 0; từ đó đề xuất thiết kế quy trình phân luồng: Các đơn hàng dưới 50 triệu được duyệt nhanh 1 cấp tự động trên Mobile (đáp ứng mục tiêu thần tốc của Kinh doanh); các đơn hàng giá trị cao từ 500 triệu trở lên mới kích hoạt luồng kiểm soát 5 cấp chặt chẽ (đáp ứng mục tiêu an toàn của Tài chính).",
      "Tuyên bố dự án thất bại vì ban lãnh đạo không đoàn kết.",
      "Tạo ra hai quy trình hoàn toàn trái ngược nhau trên cùng một phần mềm để họ tự tranh cãi trên hệ thống."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Đây là nghệ thuật hòa giải nghiệp vụ đỉnh cao của Lead BA: Dùng dữ liệu khách quan để chứng minh không cần phải chọn 'Hoặc An toàn Hoặc Tốc độ'. Thiết kế giải pháp phân tầng theo ngưỡng rủi ro (Risk-tiered thresholds) giải quyết trọn vẹn cả hai mục tiêu xung đột mà vẫn giữ vững hòa khí lãnh đạo."
  },
  {
    "track": 9,
    "id": "Q9-18",
    "level": 2,
    "q": "Sau 3 tháng triển khai Hệ thống Bán hàng CRM mới tại 30 chi nhánh, tỷ lệ nhân viên kinh doanh sử dụng phần mềm chỉ đạt 20%, phần lớn nhân viên đều lén lút ghi sổ tay và bảng Excel riêng vì cho rằng hệ thống mới 'quá nhiều trường bắt buộc nhập, làm chậm thời gian tư vấn khách hàng'. Là Senior BA phụ trách Thúc đẩy chuyển đổi (Adoption Lead), bạn áp dụng mô hình Quản trị Thay đổi ADKAR như thế nào để xoay chuyển tình thế trong vòng 60 ngày?",
    "opts": [
      "Yêu cầu trừ 50% lương của tất cả những ai không chịu sử dụng phần mềm CRM.",
      "Áp dụng bài bản 5 giai đoạn ADKAR: 1. Awareness (Tổ chức truyền thông giải thích lý do vì sao công ty bắt buộc phải đổi mới); 2. Desire (Thiết kế chính sách khen thưởng và vinh danh những người tiên phong dùng CRM hiệu quả); 3. Knowledge (Tái đào tạo thực chiến theo từng vai trò cụ thể); 4. Ability (Lắng nghe phản hồi để tinh giản ngay các trường thông tin không cần thiết trên CRM, tích hợp tính năng tự động điền để giảm thời gian nhập liệu); 5. Reinforcement (Đo lường hàng tuần, hỗ trợ trực tiếp tại quầy và biến việc áp dụng CRM thành một tiêu chí đánh giá khen thưởng tích cực).",
      "Tắt hoàn toàn phần mềm CRM và chấp nhận cho nhân viên quay lại dùng sổ tay vĩnh viễn.",
      "Thu hồi toàn bộ sổ tay và máy tính cá nhân của nhân viên kinh doanh."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Chuyển đổi số thất bại 70% là do yếu tố con người. Mô hình ADKAR (Awareness - Desire - Knowledge - Ability - Reinforcement) cung cấp lộ trình thay đổi hành vi khoa học: Kết hợp giữa việc truyền thông mục tiêu, khen thưởng tạo động lực, đào tạo kỹ năng và quan trọng nhất là BA phải tinh giản giao diện để gỡ bỏ sự phiền hà cho nhân viên."
  },
  {
    "track": 9,
    "id": "Q9-19",
    "level": 2,
    "q": "Đúng 48 giờ trước ngày Khai trương Hệ thống Vé xe buýt Thông minh toàn thành phố (đã có giấy mời lãnh đạo Bộ Giao thông Vận tải tham dự), BA phát hiện một lỗ hổng logic đặc tả nghiêm trọng: Nếu hành khách quét thẻ hai lần liên tiếp trong vòng 3 giây tại hai cửa khác nhau của xe, hệ thống sẽ trừ tiền 2 lần và khóa thẻ. Việc sửa đổi triệt để đòi hỏi cập nhật lại Firmware của 2.000 máy quét trên xe và API trung tâm, việc này chắc chắn mất ít nhất 5 ngày kiểm thử an toàn. Là Senior BA cố vấn khủng hoảng, bạn đưa ra phương án ứng phó nào khả thi nhất?",
    "opts": [
      "Giấu kín thông tin không báo cho ai biết và hy vọng sẽ không có hành khách nào quét thẻ nhanh như vậy.",
      "Kích hoạt Kế hoạch Giảm thiểu Rủi ro Khẩn cấp 2 tầng (Two-tiered Mitigation Plan): Tầng 1 (Kỹ thuật nhanh trong 12 giờ): Không can thiệp Firmware tại chỗ mà cấu hình ngay một bộ lọc chống trùng lặp (Deduplication Filter / Idempotency Rule) tại tầng Backend Gateway để tự động phát hiện và bỏ qua giao dịch thứ 2 cùng thẻ trong vòng 5 giây, đồng thời hoàn tiền tự động nếu lỡ trừ; Tầng 2 (Vận hành & Truyền thông): Bố trí tình nguyện viên hướng dẫn hành khách quét thẻ 1 lần tại ngày khai trương; lên lịch nâng cấp Firmware đồng loạt sau lễ khai trương.",
      "Yêu cầu hủy bỏ buổi lễ khai trương toàn thành phố và họp báo xin lỗi công chúng.",
      "Tắt toàn bộ hệ thống bán vé và cho hành khách đi xe buýt miễn phí trong 1 năm."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Năng lực xử lý sự cố giờ chót của Senior BA: Nhận diện điểm nghẽn và tìm giải pháp can thiệp có chi phí thấp nhất nhưng hiệu quả cao nhất (Xử lý chặn duplicate tại Backend Gateway thay vì rủi ro cập nhật 2.000 máy quét Firmware), kết hợp điều phối vận hành thực tế để bảo vệ an toàn cho sự kiện trọng đại."
  },
  {
    "track": 9,
    "id": "Q9-20",
    "level": 2,
    "q": "Câu hỏi tình huống Tầm nhìn Chiến lược Sản phẩm (Product Vision & Strategy): 'Nếu bạn được bổ nhiệm làm Principal BA dẫn dắt chuyển đổi số cho chuỗi 600 nhà thuốc bán lẻ truyền thống đang bị đe dọa bởi các nền tảng thương mại điện tử giao thuốc siêu tốc, bạn sẽ xây dựng Lộ trình Chuyển đổi Sản phẩm số (Digital Roadmap) 3 năm như thế nào để tạo ra lợi thế cạnh tranh phòng thủ vững chắc?'. Phương án trả lời nào thể hiện tư duy kiến trúc và chiến lược xuất sắc nhất?",
    "opts": [
      "Xây dựng một website bán thuốc online giống hệt như các trang thương mại điện tử khác và chi 100 tỷ để chạy quảng cáo giảm giá sốc.",
      "Đề xuất Chiến lược Hệ sinh thái Sức khỏe Số Hợp nhất (Unified Healthcare Ecosystem Roadmap) qua 3 giai đoạn: Năm 1 - Số hóa Nền tảng Vận hành (Hệ thống ERP/WMS quản lý hạn sử dụng thuốc chuẩn GPP thời gian thực, quản lý đơn thuốc điện tử quốc gia); Năm 2 - Khai mở Trải nghiệm Đa kênh (Omnichannel & Hyperlocal Delivery: Biến 600 nhà thuốc thành 600 kho mini giao hàng hỏa tốc trong 30 phút, tư vấn dược sĩ trực tuyến qua Video Call 24/7); Năm 3 - Nền tảng Cá nhân hóa Y tế (Chăm sóc bệnh mãn tính, nhắc lịch uống thuốc tự động, kết nối hồ sơ sức khỏe điện tử với bác sĩ gia đình).",
      "Khuyên đóng cửa toàn bộ 600 nhà thuốc và chuyển sang kinh doanh bất động sản.",
      "Chỉ tập trung mua 1 phần mềm kế toán mới và không cần quan tâm đến bán hàng online."
    ],
    "ans": 1,
    "exp": "Đáp án đúng là B. Tư duy Principal BA thể hiện ở tầm nhìn chiến lược đa năm (Multi-year Roadmap): Không chạy đua giá rẻ với các sàn TMĐT thuần túy mà biến mạng lưới vật lý 600 cửa hàng thành lợi thế độc quyền (Hyperlocal fulfillment) kết hợp dịch vụ tư vấn chuyên môn y tế tin cậy (Telepharmacy & Chronic Care management) để tạo dựng giá trị bền vững."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = quizBank;
}
if (typeof window !== 'undefined') {
  window.quizBank = quizBank;
}
