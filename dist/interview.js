/**
 * VYWORKSPACE - INTERACTIVE BA INTERVIEW SIMULATION MODULE
 * 10 Real-world BA scenarios, dynamic dialog flow, counter-questions, and 6-criteria rubric evaluation.
 */

function escInterview(s) { return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

// Dữ liệu 10 tình huống phỏng vấn thực tế
const interviewScenariosData = [
  {
    id: "sc-1",
    title: "Stakeholder không đồng ý với giải pháp đề xuất",
    level: "Middle",
    skill: "Xử lý xung đột",
    duration: "12 phút",
    brief: "Trưởng phòng Vận hành (Operations Head) kiên quyết phản đối luồng phê duyệt tự động vì lo ngại mất kiểm soát ca trực và phát sinh sai sót trong quy trình thực tế.",
    context: "Bạn vừa hoàn thành việc phân tích và đề xuất quy trình tự động hóa phê duyệt đơn hàng dưới 50 triệu nhằm giảm thời gian chờ từ 4 giờ xuống 15 phút. Tuy nhiên, trong buổi Review Giải pháp, Trưởng phòng Vận hành tuyên bố: 'Quy trình hiện tại chạy 5 năm nay rất ổn, tự động hóa sẽ làm nhân viên lơ là, sai sót ai chịu? Tôi không ký duyệt giải pháp này!'.",
    interviewer: {
      name: "Trần Minh Trí",
      role: "Hiring Manager / Head of Product",
      avatar: "👔"
    },
    turns: [
      {
        turnIndex: 1,
        question: "Trước thái độ phản đối gay gắt của Trưởng phòng Vận hành ngay trong buổi họp, bạn sẽ phản hồi và xử lý tình huống này như thế nào?",
        hint: "Áp dụng tư duy Empathy & Evidence: Đừng đôi co đúng sai trong cuộc họp. Hãy thừa nhận nỗi lo lắng về rủi ro của họ, tách giải pháp thành các chốt kiểm soát an toàn và đề xuất một buổi làm việc riêng (co-design) cùng số liệu thực tế.",
        options: [
          {
            key: "A",
            text: "Lắng nghe, đồng cảm với lo ngại về rủi ro; đề xuất giữ ngưỡng an toàn (audit trail & rollback), đồng thời hẹn buổi làm việc riêng để cùng Trưởng phòng tinh chỉnh các điều kiện kiểm soát trước khi chốt.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Giải thích rằng tự động hóa là chỉ đạo từ Ban Giám đốc và hệ thống đã được tính toán kỹ, yêu cầu Vận hành tuân thủ theo định hướng chuyển đổi số.",
            isBest: false,
            score: 50
          },
          {
            key: "C",
            text: "Lùi bước ngay lập tức và đồng ý giữ nguyên quy trình thủ công 100% để làm vừa lòng Trưởng phòng Vận hành, tránh xung đột.",
            isBest: false,
            score: 40
          },
          {
            key: "D",
            text: "Gửi email toàn công ty kèm tài liệu BRD dài 60 trang và yêu cầu Trưởng phòng Vận hành chỉ ra điểm chưa đúng bằng văn bản trong vòng 48h.",
            isBest: false,
            score: 45
          }
        ]
      },
      {
        turnIndex: 2,
        question: "Trong buổi làm việc riêng sau đó, Trưởng phòng Vận hành vẫn khăng khăng: 'Đội của tôi chỉ quen làm việc trên giấy tờ, nhân viên không có kỹ năng công nghệ, áp dụng phần mềm chắc chắn hỏng việc!'. Bạn giải quyết lo ngại về năng lực con người (change management) này ra sao?",
        hint: "Tập trung vào Change Management & Pilot Testing: Đề xuất kế hoạch đào tạo thực chiến cầm tay chỉ việc, chạy thử nghiệm song song (parallel run / pilot) trên 1 ca trực mẫu trước khi nhân rộng, và cho họ quyền phê duyệt cuối cùng sau giai đoạn pilot.",
        options: [
          {
            key: "A",
            text: "Đề xuất lộ trình Pilot 2 tuần trên 1 nhóm trực nhỏ có BA đồng hành; thiết kế giao diện tối giản thân thiện, tổ chức đào tạo kèm checklist đơn giản và đánh giá hiệu quả trước khi triển khai toàn diện.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Khuyên Trưởng phòng nên thay thế những nhân sự không biết dùng máy tính bằng nhân sự trẻ hơn để bắt kịp công nghệ.",
            isBest: false,
            score: 30
          },
          {
            key: "C",
            text: "Yêu cầu phòng Nhân sự mở lớp học tin học bắt buộc cho toàn bộ đội ngũ vận hành.",
            isBest: false,
            score: 55
          },
          {
            key: "D",
            text: "Đề xuất hủy bỏ phân hệ tự động dành cho ca trực và chỉ áp dụng cho khối văn phòng ban ngày.",
            isBest: false,
            score: 45
          }
        ]
      }
    ],
    modelAnswer: {
      situation: "Dự án số hóa quy trình phê duyệt đơn hàng bán lẻ nhằm cắt giảm thời gian xử lý từ 4 giờ xuống 15 phút bị Trưởng phòng Vận hành kịch liệt phản đối vì lo ngại mất kiểm soát rủi ro và nhân viên không quen dùng phần mềm.",
      task: "Là BA chịu trách nhiệm giải pháp, nhiệm vụ của tôi là biến sự kháng cự thành sự đồng thuận, bảo vệ mục tiêu kinh doanh nhưng đồng thời thiết kế cơ chế kiểm soát rủi ro thỏa đáng cho bộ phận vận hành.",
      action: "1) Ngay tại cuộc họp: Tôi không tranh cãi mà ghi nhận sự quan ngại sâu sắc của Operations; 2) Phân tích dữ liệu: Thống kê 80% đơn hàng là giao dịch dưới 10 triệu với tỉ lệ sai sót lịch sử chỉ 0.2%; 3) Giải pháp dung hòa: Thiết kế cơ chế Threshold & Override (đơn nhỏ tự động, đơn bất thường vẫn qua duyệt tay), kèm tính năng Audit Trail 100%; 4) Kế hoạch chuyển đổi: Tổ chức Pilot 2 tuần trên 1 ca trực, đào tạo trực tiếp và cho phép Vận hành đánh giá lại trước khi Go-live.",
      result: "Trưởng phòng Vận hành chuyển từ trạng thái phản đối sang làm nhà bảo trợ tích cực; dự án triển khai thành công giúp giảm 82% thời gian chờ duyệt và không phát sinh lỗi thất thoát."
    },
    rubricCriteria: [
      { name: "Phân tích vấn đề", score: 92, desc: "Xác định đúng nguyên nhân gốc rễ là nỗi sợ rủi ro và sự e dè thay đổi, không phải vì giải pháp kém." },
      { name: "Tư duy logic", score: 90, desc: "Biết sử dụng dữ liệu định lượng (80/20 rule, tỉ lệ sai sót) để chứng minh tính an toàn." },
      { name: "Kỹ năng giao tiếp", score: 95, desc: "Bình tĩnh, biết lắng nghe chủ động (Active Listening) và không gây căng thẳng chính trị." },
      { name: "Quản lý Stakeholder", score: 94, desc: "Tạo cơ hội Co-design để đối phương cảm thấy mình là một phần của giải pháp." },
      { name: "Giải pháp đề xuất", score: 90, desc: "Cơ chế phân tầng rủi ro (Threshold), Rollback và lộ trình Pilot rất thực tế." },
      { name: "Tính thuyết phục", score: 93, desc: "Lập luận mạch lạc, gắn liền với quyền lợi và sự an toàn của các bên liên quan." }
    ],
    strengths: [
      "Biết hạ nhiệt xung đột trong cuộc họp chung và chuyển sang giải quyết bằng trao đổi 1-on-1.",
      "Có tư duy quản trị sự thay đổi (Change Management) và đề xuất bước đệm Pilot an toàn.",
      "Sử dụng số liệu kinh doanh thuyết phục thay vì lý thuyết suông."
    ],
    weaknesses: [
      "Cần chú ý làm rõ chi phí và thời gian dự kiến cho giai đoạn đào tạo nhân sự.",
      "Nên định nghĩa rõ tiêu chí nghiệm thu (Exit Criteria) cụ thể cho đợt Pilot 2 tuần."
    ],
    pitfalls: [
      "Tranh cãi gay gắt trước mặt nhiều người khiến stakeholder cảm thấy mất uy tín và càng cố thủ.",
      "Mang quyền lực của Sếp hoặc Ban Giám đốc ra để ép buộc các phòng ban nghiệp vụ.",
      "Nhượng bộ hoàn toàn khiến dự án thất bại trong việc đạt ROI chuyển đổi số."
    ]
  },
  {
    id: "sc-2",
    title: "Dev từ chối làm vì yêu cầu trong BRD không rõ ràng",
    level: "Junior",
    skill: "Viết tài liệu (BRD/SRS)",
    duration: "10 phút",
    brief: "Tech Lead trả lại tài liệu BRD trong Sprint Planning với lý do thiếu edge cases, luồng xử lý lỗi mơ hồ khiến dev không thể ước lượng và lập trình.",
    context: "Trong buổi Sprint Planning cho module 'Đăng ký tài khoản & Xác thực OTP', Tech Lead dừng buổi họp và thông báo: 'Tài liệu viết chung chung, không có edge cases khi OTP hết hạn, không rõ xử lý khi SMS gateway mất kết nối. Đội dev không thể estimate point và từ chối nhận story này!'.",
    interviewer: {
      name: "Nguyễn Hải Nam",
      role: "Lead BA & Agile Coach",
      avatar: "👨‍💻"
    },
    turns: [
      {
        turnIndex: 1,
        question: "Bạn phản ứng thế nào ngay tại buổi Sprint Planning khi bị Tech Lead từ chối yêu cầu trước toàn đội?",
        hint: "Chấp nhận feedback trên tinh thần xây dựng, tập trung vào giải pháp cho Sprint thay vì tìm lý do bào chữa. Cùng Tech Lead chỉ ra các điểm nghẽn cụ thể và cam kết thời gian hoàn thiện.",
        options: [
          {
            key: "A",
            text: "Cảm ơn Tech Lead đã chỉ ra lỗ hổng kỹ thuật; nhanh chóng rà soát các user story đã đủ tiêu chí Definition of Ready (DoR) để dev kéo vào làm trước, hẹn Tech Lead 30 phút sau họp để làm rõ toàn bộ edge cases còn thiếu.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Phản bác rằng BA chỉ cần viết nghiệp vụ chung, việc nghĩ edge case kỹ thuật và gateway down là việc của Developer.",
            isBest: false,
            score: 40
          },
          {
            key: "C",
            text: "Hủy toàn bộ Sprint Planning và xin lùi Sprint sang tuần sau để viết lại tài liệu từ đầu.",
            isBest: false,
            score: 50
          },
          {
            key: "D",
            text: "Yêu cầu Scrum Master đứng ra phân xử và ép Tech Lead phải nhận story vì deadline release đã ấn định.",
            isBest: false,
            score: 35
          }
        ]
      },
      {
        turnIndex: 2,
        question: "Làm thế nào bạn thiết lập quy trình làm việc lâu dài cùng Tech team để hiện tượng thiếu sót này không bao giờ tái diễn trong các Sprint sau?",
        hint: "Thiết lập các buổi 3 Amigos (BA - Dev - QA) trước Sprint Planning và thống nhất bộ tiêu chí Definition of Ready (DoR) chuẩn.",
        options: [
          {
            key: "A",
            text: "Thiết lập thói quen tổ chức buổi '3 Amigos' (BA, Tech Lead, QA) trước Sprint Planning 2 ngày để mổ xẻ edge case; đồng thời ban hành tiêu chuẩn Definition of Ready (DoR) rõ ràng.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Yêu cầu Tech Lead phải viết tài liệu kỹ thuật thay cho BA từ nay về sau.",
            isBest: false,
            score: 30
          },
          {
            key: "C",
            text: "Chỉ viết User Story 1 dòng đơn giản và để Dev tự trao đổi miệng trực tiếp với khách hàng khi làm.",
            isBest: false,
            score: 45
          },
          {
            key: "D",
            text: "Gửi tài liệu BRD qua email trước 1 tuần và quy định nếu Dev không đọc thì coi như tự chịu trách nhiệm.",
            isBest: false,
            score: 35
          }
        ]
      }
    ],
    modelAnswer: {
      situation: "Trong buổi Sprint Planning, Tech Lead từ chối nhận story xác thực OTP vì tài liệu BRD thiếu kịch bản ngoại lệ (edge cases) và xử lý sự cố gateway.",
      task: "Là BA, tôi cần đảm bảo tiến độ của Sprint không bị gián đoạn, nhanh chóng bổ sung chi tiết kỹ thuật cần thiết và xây dựng cơ chế phối hợp bền vững với team Dev.",
      action: "1) Phản ứng tức thì: Giữ thái độ hợp tác, cùng team chọn các story đã rõ ràng để bắt đầu Sprint đúng giờ; 2) Bổ sung tài liệu: Trong 2 giờ sau họp, tôi ngồi lại cùng Tech Lead và QA để phác thảo sơ đồ State Transition cho OTP (timeout, retry limit, 3rd party outage); 3) Hoàn thiện Acceptance Criteria theo chuẩn Given-When-Then; 4) Quy trình hóa: Thiết lập nghi thức '3 Amigos' trước mỗi đợt Backlog Refinement.",
      result: "Sprint vẫn hoàn thành đúng cam kết; chất lượng tài liệu tăng vượt bậc, không còn tình trạng tranh cãi về edge case trong suốt 6 sprint liên tiếp."
    },
    rubricCriteria: [
      { name: "Phân tích vấn đề", score: 94, desc: "Hiểu rõ sự khác biệt giữa Business Flow cơ bản và Edge/Negative Cases trong hệ sinh thái kỹ thuật." },
      { name: "Tư duy logic", score: 92, desc: "Sử dụng ma trận trạng thái (State Diagram) để bao quát hết các kịch bản ngoại lệ." },
      { name: "Kỹ năng giao tiếp", score: 90, desc: "Tiếp nhận phê bình chuyên nghiệp, cầu thị và hướng tới kết quả chung của team." },
      { name: "Quản lý Stakeholder", score: 88, desc: "Kết nối nhịp nhàng bộ ba BA - Dev - QA trong quy trình Agile." },
      { name: "Giải pháp đề xuất", score: 95, desc: "Ứng dụng Definition of Ready (DoR) và 3 Amigos là best practice chuẩn quốc tế." },
      { name: "Tính thuyết phục", score: 91, desc: "Giải quyết gọn gàng cả bài toán ngắn hạn (cứu Sprint) và dài hạn (cải tiến quy trình)." }
    ],
    strengths: [
      "Tác phong nhanh nhẹn, biết bảo vệ nhịp độ Sprint của toàn đội ngũ.",
      "Áp dụng chuẩn xác kỹ thuật 3 Amigos và Acceptance Criteria theo Given-When-Then."
    ],
    weaknesses: [
      "Cần rèn luyện thêm thói quen tư duy kiểm thử (QA mindset) khi viết tài liệu ban đầu."
    ],
    pitfalls: [
      "Đổ lỗi cho Dev bắt bẻ, gây chia rẽ nội bộ giữa đội ngũ nghiệp vụ và kỹ thuật.",
      "Chỉ sửa chữa đối phó cho qua chuyện mà không thiết lập DoR ngăn ngừa tái diễn."
    ]
  },
  {
    id: "sc-3",
    title: "Scope creep xuất hiện ngay trước ngày release",
    level: "Middle",
    skill: "Agile / Scrum",
    duration: "15 phút",
    brief: "Chỉ còn 3 ngày trước ngày ra mắt chính thức, Giám đốc Kinh doanh yêu cầu chèn thêm cổng thanh toán ví điện tử mới vì đối tác vừa ký hợp đồng tài trợ lớn.",
    context: "Ứng dụng mobile app đã hoàn thành toàn bộ vòng kiểm thử UAT và sẵn sàng phát hành cho 50.000 khách hàng sau 72 giờ. Giám đốc Kinh doanh bất ngờ gửi yêu cầu khẩn cấp: 'Cần bổ sung ngay cổng thanh toán ShopeePay/MoMo mới vào đợt release này vì đối tác đã ký hợp đồng độc quyền với hoa hồng cực cao'. Tech Lead khẳng định làm gấp sẽ phá hỏng toàn bộ kiểm thử hồi quy và đối mặt rủi ro crash app.",
    interviewer: {
      name: "Lê Hoàng Yến",
      role: "Senior Project Director",
      avatar: "👩‍💼"
    },
    turns: [
      {
        turnIndex: 1,
        question: "Là BA, bạn làm thế nào để cân bằng giữa cơ hội kinh doanh hấp dẫn và rủi ro kỹ thuật cực lớn của dự án tại thời điểm nhạy cảm này?",
        hint: "Phân tích tác động (Impact Analysis) toàn diện: Chi phí - Thời gian - Phạm vi - Rủi ro. Đề xuất chiến lược Phasing (Phát hành theo giai đoạn): Release v1.0 đúng hẹn, khởi động v1.1 tích hợp ví sau 2 tuần.",
        options: [
          {
            key: "A",
            text: "Thực hiện Impact Analysis khẩn cấp; đề xuất chia 2 giai đoạn: release v1.0 đúng hạn với các cổng sẵn có, đồng thời khởi động ngay Sprint đặc biệt cho v1.1 tích hợp ví mới để release sau 10 ngày.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Ép đội Dev làm việc thâu đêm 3 ngày cuối để tích hợp cho kịp, chấp nhận bỏ bớt một số bước test bảo mật thanh toán.",
            isBest: false,
            score: 30
          },
          {
            key: "C",
            text: "Thẳng thừng từ chối Giám đốc Kinh doanh vì Agile quy định không được thay đổi phạm vi khi Sprint đã kết thúc.",
            isBest: false,
            score: 45
          },
          {
            key: "D",
            text: "Hoãn ngày ra mắt ứng dụng vô thời hạn cho tới khi hoàn tất tích hợp ví mới.",
            isBest: false,
            score: 40
          }
        ]
      },
      {
        turnIndex: 2,
        question: "Nếu Giám đốc Kinh doanh gây áp lực: 'Nếu không có ví này lúc ra mắt, công ty sẽ mất hợp đồng tài trợ 500 triệu!', bạn hỗ trợ PO đưa ra quyết định dựa trên dữ liệu gì?",
        hint: "Định lượng rủi ro: So sánh giá trị tài trợ 500 triệu với thiệt hại nếu app bị crash (mất uy tín 50k user, chi phí bồi thường lỗi thanh toán, đánh giá 1 sao trên App Store). Đưa ra phương án truyền thông marketing: 'Coming soon teaser' để giữ hợp đồng tài trợ.",
        options: [
          {
            key: "A",
            text: "Lập bảng so sánh Trade-off định lượng (500tr tài trợ vs nguy cơ mất 50k users nếu lỗi thanh toán); đề xuất giải pháp thỏa hiệp với đối tác: treo banner 'Coming Soon - Nhận voucher khủng cùng ví X' ngay trên v1.0.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Đồng ý chịu trách nhiệm cá nhân nếu hệ thống sập khi release.",
            isBest: false,
            score: 25
          },
          {
            key: "C",
            text: "Báo cáo lên Hội đồng quản trị đề nghị kỷ luật Giám đốc Kinh doanh.",
            isBest: false,
            score: 30
          },
          {
            key: "D",
            text: "Âm thầm bỏ bớt tính năng thông báo (Push notification) để nhường tài nguyên cho ví mới.",
            isBest: false,
            score: 35
          }
        ]
      }
    ],
    modelAnswer: {
      situation: "Chỉ 3 ngày trước release v1.0 cho 50k người dùng, Giám đốc Kinh doanh yêu cầu chèn thêm cổng ví điện tử mới do có hợp đồng tài trợ 500 triệu.",
      task: "Tôi cần bảo vệ sự ổn định của hệ thống trước rủi ro sập ứng dụng, nhưng đồng thời tìm phương án sáng tạo để doanh nghiệp không bỏ lỡ hợp đồng tài trợ giá trị.",
      action: "1) Đánh giá tác động (Impact Analysis): Chỉ rõ việc tích hợp cổng thanh toán cần tối thiểu 5 ngày dev và 3 ngày kiểm thử bảo mật PCI-DSS; 2) Phương án Phasing: v1.0 phát hành đúng hẹn, v1.1 ra mắt sau 12 ngày; 3) Chiến lược kinh doanh sáng tạo: Đề xuất gắn banner truyền thông 'Coming Soon - Tặng 100k khi liên kết ví X' trong phiên bản ra mắt, vừa giữ được điều khoản hợp đồng tài trợ vừa không đụng vào code thanh toán nhạy cảm.",
      result: "Đối tác tài trợ hài lòng với chiến dịch Teaser; đợt release v1.0 đạt 99.9% uptime, và bản v1.1 ra mắt hoàn hảo 2 tuần sau đó."
    },
    rubricCriteria: [
      { name: "Phân tích vấn đề", score: 95, desc: "Thấy rõ rủi ro bảo mật tài chính và sự ổn định hệ thống quan trọng hơn việc nhồi nhét tính năng." },
      { name: "Tư duy logic", score: 94, desc: "Biết cân đo giữa giá trị kinh tế trước mắt và chi phí rủi ro tiềm ẩn (Risk-Reward Tradeoff)." },
      { name: "Kỹ năng giao tiếp", score: 92, desc: "Giao tiếp bằng ngôn ngữ kinh doanh (ROI, uy tín thương hiệu) thay vì thuật ngữ kỹ thuật khó hiểu." },
      { name: "Quản lý Stakeholder", score: 93, desc: "Tìm được điểm dung hòa giúp cả Business và Tech đều đạt được mục tiêu cốt lõi." },
      { name: "Giải pháp đề xuất", score: 96, desc: "Ý tưởng 'Coming soon banner' giải quyết xuất sắc bài toán pháp lý của hợp đồng tài trợ." },
      { name: "Tính thuyết phục", score: 94, desc: "Lập luận chắc chắn, có căn cứ và nhận được sự tôn trọng từ cả hai khối." }
    ],
    strengths: [
      "Tư duy Product Mindset trưởng thành: không nói 'Không' một cách máy móc mà luôn đi kèm phương án thay thế khả thi (Yes, and...).",
      "Kỹ năng lượng hóa rủi ro và bảo vệ tính toàn vẹn của sản phẩm công nghệ."
    ],
    weaknesses: [
      "Cần chuẩn bị sẵn quy trình Change Request (CR) có chữ ký cam kết để chuẩn hóa việc phát sinh yêu cầu đột xuất."
    ],
    pitfalls: [
      "Nhượng bộ vội vã dẫn đến lỗi thanh toán nghiêm trọng khi lên môi trường Production.",
      "Đối đầu gay gắt với bộ phận Kinh doanh khiến BA bị đánh giá là rào cản cản trở doanh thu."
    ]
  },
  {
    id: "sc-4",
    title: "Hai Product Owner đưa ra 2 yêu cầu mâu thuẫn nhau",
    level: "Senior",
    skill: "Xử lý xung đột",
    duration: "15 phút",
    brief: "PO kênh Bán lẻ muốn quy trình mua hàng siêu nhanh 1-click; PO khối Tuân thủ (Compliance) bắt buộc 5 bước xác thực và quét căn cước công dân.",
    context: "Trong dự án ví tài chính cho chuỗi bán lẻ, PO phụ trách Kinh doanh (Commercial PO) yêu cầu luồng thanh toán phải tối giản chỉ 1-click để đạt tỉ lệ chuyển đổi (conversion rate) cao nhất. Ngược lại, PO phụ trách Tuân thủ (Compliance PO) yêu cầu mọi giao dịch phải trải qua 5 bước eKYC, xác thực sinh trắc học và kiểm tra nguồn tiền để tránh rửa tiền. Hai bên kiên quyết giữ quan điểm và đe dọa rút khỏi ban chỉ đạo dự án.",
    interviewer: {
      name: "Phạm Quốc Tuấn",
      role: "VP of Engineering & Solution Architect",
      avatar: "👨‍💼"
    },
    turns: [
      {
        turnIndex: 1,
        question: "Khi đối mặt với sự mâu thuẫn trực tiếp giữa mục tiêu Tăng trưởng Doanh số và Tuân thủ Pháp chế, giải pháp kiến trúc nghiệp vụ của bạn là gì?",
        hint: "Phân tầng rủi ro dựa trên ngưỡng giao dịch (Risk-based Tiered Approach): Giao dịch nhỏ (< 500k) cho phép thanh toán 1 chạm với hạn mức ngày; giao dịch lớn hoặc khả nghi mới kích hoạt eKYC đầy đủ.",
        options: [
          {
            key: "A",
            text: "Thiết kế giải pháp phân tầng theo mức độ rủi ro (Risk-based Tiers): Miễn eKYC cho giao dịch nhỏ dưới hạn mức an toàn; chỉ kích hoạt xác thực sinh trắc học từng bước khi vượt ngưỡng hoặc có dấu hiệu bất thường.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Chọn ủng hộ Commercial PO vì mục tiêu sống còn của công ty là doanh thu, rủi ro pháp lý tính sau.",
            isBest: false,
            score: 30
          },
          {
            key: "C",
            text: "Chọn ủng hộ Compliance PO và biến mọi giao dịch thành 5 bước xác thực phức tạp.",
            isBest: false,
            score: 45
          },
          {
            key: "D",
            text: "Xây dựng 2 ứng dụng hoàn toàn riêng biệt để chiều lòng cả hai vị Product Owner.",
            isBest: false,
            score: 35
          }
        ]
      },
      {
        turnIndex: 2,
        question: "Làm thế nào bạn tổ chức buổi Alignment Workshop để cả 2 PO thống nhất các con số hạn mức cụ thể mà không làm cuộc họp biến thành tranh cãi cá nhân?",
        hint: "Chuẩn bị ma trận quy định pháp luật thực tế từ Ngân hàng Nhà nước, đối chiếu với số liệu giao dịch trung bình trong ngành và dùng phương pháp Decision Matrix khách quan.",
        options: [
          {
            key: "A",
            text: "Thu thập dẫn chứng văn bản quy định của cơ quan nhà nước và dữ liệu 90% đơn hàng thực tế; lập ma trận tác động (Decision Matrix) để cả hai bên cùng nhìn vào số liệu khách quan thay vì cảm tính.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Để hai PO tự tranh luận trong phòng họp, ai nói to hơn và có lý hơn thì theo người đó.",
            isBest: false,
            score: 25
          },
          {
            key: "C",
            text: "Ủy quyền quyết định hoàn toàn cho bộ phận Tech tự chọn phương án dễ code nhất.",
            isBest: false,
            score: 30
          },
          {
            key: "D",
            text: "Bỏ phiếu kín giữa các thành viên dự án để quyết định phương án.",
            isBest: false,
            score: 50
          }
        ]
      }
    ],
    modelAnswer: {
      situation: "Dự án ví thanh toán bán lẻ rơi vào bế tắc khi PO Kinh doanh đòi hỏi 1-click checkout trong khi PO Tuân thủ yêu cầu bắt buộc 5 bước eKYC cho toàn bộ người dùng.",
      task: "Là Senior BA, tôi cần đưa ra giải pháp kiến trúc nghiệp vụ dung hòa cả hai tiêu chí: đảm bảo tuân thủ 100% khung pháp lý nhưng vẫn bảo vệ trải nghiệm mua sắm mượt mà.",
      action: "1) Nghiên cứu cơ sở pháp lý: Tìm hiểu thông tư của Ngân hàng Nhà nước, phát hiện quy định cho phép áp dụng hạn mức thanh toán nhỏ không cần định danh cấp 2; 2) Thiết kế kiến trúc phân tầng (Tiered Verification): Hạn mức bậc 1 (dưới 1 triệu/ngày) chỉ cần số điện thoại & OTP; Hạn mức bậc 2 mới yêu cầu CCCD và sinh trắc học; 3) Chủ trì Alignment Workshop: Trình bày giải pháp kèm prototype trực quan, chứng minh 85% người mua sắm thông thường sẽ được hưởng trải nghiệm 1-click an toàn.",
      result: "Cả hai PO hoàn toàn bị thuyết phục và cùng ký duyệt BRD; tỷ lệ hoàn tất đơn hàng tăng 24% so với phiên bản cũ trong khi vượt qua xuất sắc đợt thanh tra tuân thủ."
    },
    rubricCriteria: [
      { name: "Phân tích vấn đề", score: 96, desc: "Nắm bắt tường tận bản chất của quy định pháp lý và hành vi tâm lý người tiêu dùng." },
      { name: "Tư duy logic", score: 95, desc: "Khả năng phân tách nghiệp vụ thành các tầng logic (Tiered system) có điều kiện kích hoạt rõ ràng." },
      { name: "Kỹ năng giao tiếp", score: 93, desc: "Kỹ năng điều phối cuộc họp (Facilitation) xuất sắc, điều hướng tranh cãi về dữ liệu thực chứng." },
      { name: "Quản lý Stakeholder", score: 94, desc: "Tạo được vị thế Win-Win: Pháp chế an tâm, Kinh doanh đạt chỉ tiêu doanh số." },
      { name: "Giải pháp đề xuất", score: 97, desc: "Giải pháp tiêu chuẩn ngành Fintech, thể hiện đẳng cấp của một Senior BA." },
      { name: "Tính thuyết phục", score: 95, desc: "Đưa ra bằng chứng pháp luật cụ thể, giải tỏa triệt để mối băn khoăn của bên tuân thủ." }
    ],
    strengths: [
      "Kiến thức sâu rộng về lĩnh vực tài chính và quy chuẩn tuân thủ.",
      "Kỹ năng điều phối hội thảo (Workshop Facilitation) vững vàng, sắc sảo."
    ],
    weaknesses: [
      "Cần thiết kế thêm cơ chế tự động cảnh báo gian lận (Fraud Detection Trigger) cho các giao dịch nhỏ lặp lại nhiều lần."
    ],
    pitfalls: [
      "Đứng về một phía làm rạn nứt niềm tin của bên còn lại đối với vai trò trung lập của BA.",
      "Tự ý đưa ra con số hạn mức mà không có căn cứ từ quy định pháp luật hiện hành."
    ]
  },
  {
    id: "sc-5",
    title: "Phát hiện thiếu yêu cầu quan trọng khi dev đã bắt đầu code",
    level: "Middle",
    skill: "Thu thập yêu cầu",
    duration: "12 phút",
    brief: "Dev team đã code được 40% tính năng hoàn tiền thì bạn nhận ra trong BRD đã bỏ quên trường hợp hoàn tiền cho đơn thanh toán bằng Voucher kết hợp Điểm thưởng.",
    context: "Trong dự án Thương mại điện tử, team Dev đã lập trình được 40% module Hoàn tiền tự động (Refund). Khi viết tài liệu hướng dẫn cho đội QA, bạn giật mình phát hiện mình đã hoàn toàn bỏ quên trường hợp: 'Khách hàng áp dụng mã voucher 50k kết hợp thanh toán 20k điểm thưởng và 100k tiền mặt, nếu trả 1 trong 3 món hàng thì phân bổ hoàn trả ra sao?'. Nếu không xử lý ngay, hệ thống sẽ tính sai doanh thu kế toán.",
    interviewer: {
      name: "Đặng Thu Trang",
      role: "Product Lead",
      avatar: "👩‍💻"
    },
    turns: [
      {
        turnIndex: 1,
        question: "Bạn xử lý sai sót của chính mình như thế nào đối với Tech Lead và Product Owner mà không gây hoảng loạn?",
        hint: "Nhận trách nhiệm minh bạch, lập tức phác thảo ma trận phân bổ hoàn tiền (Prorated Refund Matrix) và họp nhanh 15 phút với Tech Lead để đánh giá phần code bị ảnh hưởng.",
        options: [
          {
            key: "A",
            text: "Chủ động nhận lỗi một cách minh bạch; lập tức làm việc với Kế toán để chốt công thức phân bổ hoàn trả theo tỷ lệ (Prorated Rule), họp nhanh với Tech Lead để đánh giá khối lượng điều chỉnh code trước khi báo cáo PO.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Âm thầm sửa tài liệu BRD mà không nói với ai, hy vọng Dev sẽ tự hiểu và viết code đúng.",
            isBest: false,
            score: 20
          },
          {
            key: "C",
            text: "Đổ lỗi cho bộ phận Kế toán vì lúc đầu không cung cấp công thức hoàn trả voucher.",
            isBest: false,
            score: 25
          },
          {
            key: "D",
            text: "Bỏ qua kịch bản này và chờ tới khi khách hàng khiếu nại thì mở ticket bug sau.",
            isBest: false,
            score: 15
          }
        ]
      },
      {
        turnIndex: 2,
        question: "Tech Lead phản hồi: 'Sửa logic phân bổ tiền này sẽ mất thêm 2 ngày và có thể trễ ngày bàn giao cho QA'. Bạn điều chỉnh kế hoạch Sprint ra sao?",
        hint: "Đề xuất kỹ thuật cắt lát phạm vi (Scope slicing): Ưu tiên hoàn thiện luồng hoàn tiền mặt chuẩn trước để QA test, phần voucher phức tạp hoàn thiện sau 1 ngày.",
        options: [
          {
            key: "A",
            text: "Tách nhỏ User Story: Bàn giao luồng hoàn tiền mặt cơ bản cho QA kiểm thử trước, trong khi Dev hoàn thiện nốt phân hệ phân bổ điểm/voucher phức tạp; tự nguyện hỗ trợ QA viết test scenarios.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Yêu cầu hủy toàn bộ tính năng hoàn tiền khỏi Sprint này.",
            isBest: false,
            score: 35
          },
          {
            key: "C",
            text: "Cắt ngắn thời gian kiểm thử của QA từ 4 ngày xuống còn 1 ngày để bù vào thời gian trễ.",
            isBest: false,
            score: 30
          },
          {
            key: "D",
            text: "Báo cáo Scrum Master yêu cầu Dev team làm thêm giờ thứ 7, chủ nhật.",
            isBest: false,
            score: 40
          }
        ]
      }
    ],
    modelAnswer: {
      situation: "Khi dev đang lập trình module Hoàn tiền tự động, tôi phát hiện tài liệu BRD của mình thiếu kịch bản hoàn tiền cho đơn thanh toán kết hợp voucher và điểm thưởng.",
      task: "Tôi cần thừa nhận sai sót một cách chuyên nghiệp, tìm ra công thức nghiệp vụ chuẩn xác từ Kế toán và phối hợp cùng Tech Lead để giảm thiểu tối đa tác động lên deadline của Sprint.",
      action: "1) Minh bạch & Chịu trách nhiệm: Tôi chủ động thông báo cho PO và Tech Lead ngay trong sáng hôm đó; 2) Làm rõ nghiệp vụ: Làm việc trực tiếp với Kế toán trưởng để xác định nguyên tắc phân bổ theo tỷ lệ giá trị mặt hàng (Prorated Ratio); 3) Slicing giải pháp: Phối hợp cùng Dev để bàn giao phần code hoàn trả đơn giản cho QA test trước; 4) Hỗ trợ test: Tự tay tạo 20 bộ test data cho trường hợp phức tạp để đẩy nhanh tiến độ cho QA.",
      result: "Module ra mắt đúng thời hạn dự kiến; dữ liệu đối soát kế toán chuẩn xác 100% và tôi nhận được sự tôn trọng từ team vì tinh thần trách nhiệm cao."
    },
    rubricCriteria: [
      { name: "Phân tích vấn đề", score: 92, desc: "Phát hiện kịp thời lỗ hổng logic nghiệp vụ nhạy cảm liên quan đến tài chính kế toán." },
      { name: "Tư duy logic", score: 93, desc: "Khả năng xây dựng ma trận phân bổ (Prorated Matrix) chuẩn xác và chặt chẽ." },
      { name: "Kỹ năng giao tiếp", score: 94, desc: "Minh bạch, trung thực và dám chịu trách nhiệm cá nhân (Accountability)." },
      { name: "Quản lý Stakeholder", score: 91, desc: "Phối hợp ăn ý giữa Kế toán, Dev và QA trong tình huống gấp gáp." },
      { name: "Giải pháp đề xuất", score: 95, desc: "Kỹ thuật phân tách story (Story Slicing) giúp giữ vững cam kết Sprint." },
      { name: "Tính thuyết phục", score: 92, desc: "Hành động bằng giải pháp thực tế thay vì tìm lý do bao biện." }
    ],
    strengths: [
      "Tính chính trực và phong thái bình tĩnh khi đối mặt với sai sót cá nhân.",
      "Kỹ năng phân bổ và tính toán bài toán nghiệp vụ tài chính rất tốt."
    ],
    weaknesses: [
      "Cần thiết kế thêm Checklist các kịch bản khuyến mãi/thanh toán để áp dụng cho mọi dự án sau này."
    ],
    pitfalls: [
      "Cố tình che giấu sai sót khiến lỗi lọt lên môi trường thật gây thất thoát tài chính lớn.",
      "Đổ lỗi cho các bên khác làm đánh mất niềm tin và tinh thần đồng đội."
    ]
  },
  {
    id: "sc-6",
    title: "Khách hàng hỏi: 'Dự án trước em đã làm gì cụ thể?' (Phỏng vấn hành vi)",
    level: "Junior",
    skill: "Giao tiếp với Stakeholder",
    duration: "10 phút",
    brief: "Nhà tuyển dụng muốn kiểm tra kinh nghiệm thực tế của bạn bằng câu hỏi mở về vai trò và đóng góp cụ thể trong dự án gần nhất.",
    context: "Người phỏng vấn nhìn vào CV của bạn và hỏi: 'Trong CV em ghi đã tham gia xây dựng hệ thống CRM cho chuỗi bán lẻ 50 cửa hàng. Em hãy mô tả chi tiết một bài toán phức tạp nhất em đã tự tay phân tích và giải quyết, vai trò cụ thể từ đầu đến cuối của em là gì?'.",
    interviewer: {
      name: "Hoàng Mai Chi",
      role: "Talent Acquisition Director",
      avatar: "👩‍💼"
    },
    turns: [
      {
        turnIndex: 1,
        question: "Bạn cấu trúc câu trả lời của mình như thế nào để vừa rõ ràng, mạch lạc vừa nêu bật được năng lực phân tích của một Business Analyst?",
        hint: "Sử dụng mô hình STAR (Situation, Task, Action, Result). Nhấn mạnh hành động cụ thể của cá nhân (dùng từ 'Tôi' thay vì 'Chúng tôi' chung chung), chỉ rõ phương pháp phân tích và số liệu kết quả định lượng.",
        options: [
          {
            key: "A",
            text: "Áp dụng khung STAR: Giới thiệu ngắn gọn bối cảnh dự án CRM; nêu bật nhiệm vụ tối ưu luồng tích điểm đa kênh; mô tả các hành động phân tích (BPMN, User Interview, Data Mapping); và kết thúc bằng kết quả định lượng (giảm 40% khiếu nại, tăng 15% khách quay lại).",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Kể lể chung chung: 'Dự án đó team em có 10 người, em tham gia viết tài liệu, họp khách hàng và test phần mềm khi dev xong'.",
            isBest: false,
            score: 45
          },
          {
            key: "C",
            text: "Tập trung giải thích về kiến trúc công nghệ như dùng React, Nodejs, Microservices dù vị trí ứng tuyển là BA.",
            isBest: false,
            score: 50
          },
          {
            key: "D",
            text: "Nói rằng dự án bảo mật nên không thể chia sẻ bất cứ chi tiết nào.",
            isBest: false,
            score: 30
          }
        ]
      },
      {
        turnIndex: 2,
        question: "Người phỏng vấn hỏi vặn tiếp: 'Trong dự án đó, có điều gì em cảm thấy mình làm chưa tốt và nếu được làm lại từ đầu em sẽ thay đổi điều gì?'. Bạn trả lời ra sao?",
        hint: "Không bao giờ trả lời 'Em không có gì hối tiếc' hoặc nhận những lỗi sơ đẳng không thể khắc phục. Hãy chọn một bài học về quản lý kỳ vọng (Expectation Management) hoặc đo lường chỉ số sớm hơn, kèm theo hành động cải thiện đã làm.",
        options: [
          {
            key: "A",
            text: "Chia sẻ bài học thực tế: Ban đầu chưa tham gia sớm vào giai đoạn đào tạo người dùng cuối (End-user training), dẫn đến tuần đầu tỷ lệ bỡ ngỡ cao; nếu làm lại sẽ thiết lập sớm tài liệu Micro-learning và User Champion tại mỗi cửa hàng.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Trả lời: 'Dự án đó em thấy bản thân đã làm hoàn hảo 100%, không có điểm gì cần cải thiện'.",
            isBest: false,
            score: 25
          },
          {
            key: "C",
            text: "Kể rằng mình thường xuyên viết sai tài liệu và làm dev phải sửa code liên tục.",
            isBest: false,
            score: 20
          },
          {
            key: "D",
            text: "Chê trách năng lực của Quản lý dự án cũ vì giao việc quá gấp.",
            isBest: false,
            score: 15
          }
        ]
      }
    ],
    modelAnswer: {
      situation: "Tại chuỗi bán lẻ 50 cửa hàng, dữ liệu khách hàng bị phân mảnh giữa kênh Offline tại quầy POS và kênh Online trên website, dẫn đến việc tích điểm bị sai lệch và tỷ lệ khách bỏ rơi giỏ hàng cao.",
      task: "Vai trò của tôi là Lead BA cho phân hệ 'Hợp nhất dữ liệu thành viên (Omnichannel Loyalty Engine)' nhằm kết nối real-time giữa 50 máy POS và cổng mua sắm trực tuyến.",
      action: "1) Thu thập: Phỏng vấn 12 cửa hàng trưởng và khảo sát 100 khách hàng; 2) Mô hình hóa: Thiết kế sơ đồ luồng quy trình BPMN cho 8 kịch bản tích/tiêu điểm và hoàn điểm khi đổi trả; 3) Data Mapping: Thiết lập ma trận ánh xạ 45 trường dữ liệu giữa POS và CRM; 4) Phối hợp: Tổ chức các buổi Grooming hàng tuần và trực tiếp nghiệm thu UAT tại 3 cửa hàng điểm.",
      result: "Hệ thống ra mắt đúng hẹn; giảm 65% thời gian xử lý tích điểm tại quầy và nâng tỷ lệ giữ chân khách hàng (Retention Rate) thêm 18% sau 3 tháng."
    },
    rubricCriteria: [
      { name: "Phân tích vấn đề", score: 94, desc: "Trình bày rõ ràng bài toán kinh doanh đằng sau dự án thay vì chỉ kể đầu việc chân tay." },
      { name: "Tư duy logic", score: 95, desc: "Cấu trúc STAR chặt chẽ, dẫn dắt câu chuyện mạch lạc từ nguyên nhân đến kết quả." },
      { name: "Kỹ năng giao tiếp", score: 96, desc: "Phong thái tự tin, từ ngữ chuyên nghiệp và giàu tính thuyết phục." },
      { name: "Quản lý Stakeholder", score: 90, desc: "Thể hiện được kỹ năng phối hợp giữa nhiều nhóm đối tượng (Cửa hàng, Khách hàng, Tech)." },
      { name: "Giải pháp đề xuất", score: 92, desc: "Phương pháp phân tích bài bản (BPMN, Data Mapping, Prototype)." },
      { name: "Tính thuyết phục", score: 95, desc: "Minh chứng kết quả bằng các chỉ số đo lường hiệu quả (KPI/Metrics) rõ ràng." }
    ],
    strengths: [
      "Sử dụng chuẩn xác mô hình STAR với số liệu định lượng ấn tượng.",
      "Biết tự nhìn nhận điểm hạn chế (Self-reflection) một cách chín chắn và có tư duy cầu tiến."
    ],
    weaknesses: [
      "Có thể mở rộng thêm một chút về cách đánh giá ROI (Return on Investment) cho khách hàng."
    ],
    pitfalls: [
      "Dùng từ 'chúng em làm' xuyên suốt khiến nhà tuyển dụng không biết thực chất bạn đóng góp bao nhiêu phần trăm.",
      "Tỏ ra kiêu ngạo hoặc ngược lại tự ti, không thể hiện được dấu ấn cá nhân."
    ]
  },
  {
    id: "sc-7",
    title: "Làm sao để phân tích yêu cầu khi tài liệu hệ thống cũ không còn?",
    level: "Senior",
    skill: "Thu thập yêu cầu",
    duration: "15 phút",
    brief: "Dự án chuyển đổi hệ thống Core kế toán 10 năm tuổi, toàn bộ tài liệu thiết kế ban đầu đã thất lạc và dev cũ đều đã nghỉ việc.",
    context: "Bạn được giao làm BA chính cho dự án hiện đại hóa hệ thống Quản lý Chuỗi cung ứng (SCM) của một tập đoàn xuất nhập khẩu. Hệ thống cũ viết trên nền tảng cũ từ năm 2014, không còn bất kỳ tài liệu thiết kế hay tài liệu yêu cầu nào. Nhân sự IT viết hệ thống đó đều đã rời đi. Người dùng hiện tại chỉ biết thao tác quen tay trên màn hình.",
    interviewer: {
      name: "Vũ Đình Trọng",
      role: "Enterprise Architect",
      avatar: "👨‍💻"
    },
    turns: [
      {
        turnIndex: 1,
        question: "Chiến lược và các bước tiếp cận (Reverse Engineering) của bạn để tái tạo lại toàn bộ quy trình và business rules là gì?",
        hint: "Kết hợp 4 mũi nhọn: 1) Quan sát người dùng trực tiếp (Job Shadowing/Observation); 2) Khảo sát cấu trúc Database & Logs cũ (Data Archeology); 3) Thu thập báo cáo đầu ra (Output Artifacts: hóa đơn, phiếu xuất kho, báo cáo thuế); 4) Lập mô hình As-Is và tổ chức Alignment workshop xác nhận giả định.",
        options: [
          {
            key: "A",
            text: "Áp dụng phương pháp 4 bước: 1. Job Shadowing quan sát trực tiếp thao tác người dùng; 2. Khảo sát cấu trúc Database & dữ liệu lịch sử; 3. Thu thập toàn bộ biểu mẫu/báo cáo đầu ra để suy ngược quy tắc nghiệp vụ; 4. Vẽ lại luồng As-Is và phỏng vấn xác nhận giả định.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Yêu cầu lãnh đạo công ty thuê lại lập trình viên cũ với giá cao để họ ngồi viết lại tài liệu từ đầu.",
            isBest: false,
            score: 35
          },
          {
            key: "C",
            text: "Bỏ qua toàn bộ hệ thống cũ và tự sáng tạo ra một hệ thống mới theo ý thích của mình.",
            isBest: false,
            score: 40
          },
          {
            key: "D",
            text: "Chỉ gửi một bản khảo sát qua Google Forms để người dùng tự gõ các chức năng họ hay dùng.",
            isBest: false,
            score: 45
          }
        ]
      },
      {
        turnIndex: 2,
        question: "Khi người dùng nói: 'Chúng tôi chỉ biết bấm nút này thì ra bảng kê, không biết tại sao công thức lại tính ra số tiền như vậy', bạn làm sao để bóc tách chính xác công thức logic ẩn bên dưới?",
        hint: "Thực hiện Black-box Testing với các mẫu dữ liệu thực tế: Đưa các bộ dữ liệu đầu vào (Input) khác nhau, quan sát đầu ra (Output), đối chiếu với các quy chế tài chính của công ty và nhờ Dev dịch ngược đoạn mã SQL/Stored Procedure tương ứng.",
        options: [
          {
            key: "A",
            text: "Cùng Tech Lead soi các Stored Procedure/Code liên quan đến nút bấm đó; đồng thời lấy 50 bộ mẫu dữ liệu lịch sử đối chiếu với quy chế tính giá của công ty để giải mã và chuẩn hóa công thức.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Bỏ qua công thức đó và tự đặt ra một công thức tính tiền mới đơn giản hơn.",
            isBest: false,
            score: 25
          },
          {
            key: "C",
            text: "Bắt người dùng phải tự tính tay trên Excel để chứng minh công thức đúng.",
            isBest: false,
            score: 30
          },
          {
            key: "D",
            text: "Quy kết rằng hệ thống cũ bị lỗi và xóa bỏ chức năng này.",
            isBest: false,
            score: 20
          }
        ]
      }
    ],
    modelAnswer: {
      situation: "Dự án thay thế hệ thống Core SCM 10 năm tuổi không có bất kỳ tài liệu nào, lập trình viên cũ đã nghỉ và người dùng chỉ biết thao tác theo thói quen máy móc.",
      task: "Nhiệm vụ của tôi là giải mã toàn bộ logic nghiệp vụ (Reverse Engineering), xây dựng lại bức tranh quy trình As-Is chính xác và thiết kế tài liệu chuẩn hóa cho hệ thống To-Be.",
      action: "1) Triển khai Job Shadowing: Dành 1 tuần ngồi cùng các nhân viên kho và điều phối để ghi hình và ghi chép từng bước thao tác; 2) Data-driven Archaeology: Phân tích 120 bảng trong cơ sở dữ liệu để tìm quan hệ khóa ngoại (Foreign Keys) và quy tắc ràng buộc; 3) Khảo sát ngược từ Báo cáo: Gom toàn bộ mẫu hóa đơn, phiếu nhập/xuất để truy vết công thức nghiệp vụ; 4) Phối hợp Tech: Đọc ngược mã nguồn của các Stored Procedure nhạy cảm; 5) Thẩm định: Vẽ sơ đồ BPMN As-Is và tổ chức 3 buổi workshop để các phòng ban cùng ký xác nhận.",
      result: "Tái hiện thành công 100% quy trình cốt lõi và phát hiện 4 lỗ hổng thất thoát hàng tồn kho từ hệ thống cũ; bộ tài liệu SRS mới được dùng làm nền tảng cho việc đấu thầu hệ thống mới."
    },
    rubricCriteria: [
      { name: "Phân tích vấn đề", score: 97, desc: "Tư duy điều tra nghiệp vụ (Investigative Mindset) sâu sắc, không ngại khó khăn khi thiếu tài liệu." },
      { name: "Tư duy logic", score: 96, desc: "Phương pháp suy ngược (Reverse Engineering) từ Output $\\rightarrow$ Database $\\rightarrow$ Business Rules rất khoa học." },
      { name: "Kỹ năng giao tiếp", score: 92, desc: "Kiên nhẫn và biết cách đặt câu hỏi khơi gợi (Probing Questions) với đối tượng người dùng không rành công nghệ." },
      { name: "Quản lý Stakeholder", score: 94, desc: "Biết cách tạo sự an tâm cho người dùng khi đối mặt với sự thay đổi hệ thống thâm niên." },
      { name: "Giải pháp đề xuất", score: 96, desc: "Sử dụng đồng thời 4 kỹ thuật khai thác: Shadowing, Data Profiling, Code Inspection và Workshop." },
      { name: "Tính thuyết phục", score: 95, desc: "Kế hoạch hành động chi tiết, thực tế và đã được chứng minh hiệu quả trong các dự án Legacy." }
    ],
    strengths: [
      "Khả năng làm việc độc lập và xử lý các bài toán thiếu thông tin (Ambiguity) cực kỳ xuất sắc.",
      "Kết hợp nhuần nhuyễn giữa kỹ năng nghiệp vụ mềm và kỹ năng phân tích dữ liệu kỹ thuật."
    ],
    weaknesses: [
      "Cần lưu ý kiểm soát thời gian phân tích As-Is (tránh tình trạng Analysis Paralysis - tê liệt vì phân tích quá sâu)."
    ],
    pitfalls: [
      "Quá phụ thuộc vào lời kể của người dùng mà không kiểm chứng lại qua dữ liệu thực tế trên Database.",
      "Vội vàng kết luận hệ thống cũ vô dụng mà bỏ sót các business rules ngầm tích lũy qua nhiều năm."
    ]
  },
  {
    id: "sc-8",
    title: "Xung đột giữa Tech muốn refactor và Business muốn tính năng mới",
    level: "Senior",
    skill: "Xử lý xung đột",
    duration: "15 phút",
    brief: "Tech team kiên quyết đòi dành 2 Sprint để refactor hạ tầng cơ sở dữ liệu; Business đòi ra mắt tính năng Loyalty kịp mùa kinh doanh Tết.",
    context: "Trong cuộc họp lập kế hoạch quý 4, Tech Lead tuyên bố: 'Cơ sở dữ liệu đang quá tải, nợ kỹ thuật (technical debt) ở mức báo động đỏ, nếu không dành trọn 2 Sprint sắp tới để refactor thì hệ thống chắc chắn sẽ sập trong mùa khuyến mãi Tết'. Trong khi đó, Giám đốc Marketing phản đối kịch liệt: 'Tết là mùa kiếm 40% doanh thu cả năm, nếu không ra mắt tính năng Vòng quay may mắn & Điểm thưởng mới, chúng ta sẽ thua trắng đối thủ!'. Cả hai bên đều giữ quyền phủ quyết.",
    interviewer: {
      name: "Ngô Đức Trọng",
      role: "Chief Technology Officer (CTO)",
      avatar: "👨‍💼"
    },
    turns: [
      {
        turnIndex: 1,
        question: "Là cầu nối giữa Tech và Business, bạn làm thế nào để dung hòa hai yêu cầu sống còn này mà không làm mất đi mùa kinh doanh Tết?",
        hint: "Áp dụng kỹ thuật Capacity Allocation (Phân bổ dung lượng Sprint) và phân tích rủi ro định lượng: Chia tỷ trọng Sprint (ví dụ 60% tính năng mới, 40% refactor các điểm nóng có rủi ro sập cao nhất); giải thích rủi ro sập hệ thống theo ngôn ngữ doanh thu bị mất.",
        options: [
          {
            key: "A",
            text: "Đề xuất giải pháp phân bổ dung lượng Sprint (Sprint Capacity Allocation: 60% Business, 40% Tech Debt); ưu tiên refactor có chọn lọc các 'điểm nóng' chịu tải mùa Tết (Indexing, Caching) thay vì đập đi xây lại toàn bộ.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Đồng ý với Tech Lead dừng toàn bộ tính năng mới trong 2 tháng để dev làm cho chuẩn kỹ thuật.",
            isBest: false,
            score: 40
          },
          {
            key: "C",
            text: "Đồng ý với Marketing gạt bỏ hoàn toàn việc refactor để chạy theo doanh thu trước mắt.",
            isBest: false,
            score: 35
          },
          {
            key: "D",
            text: "Để hai bên tự giải quyết, BA chỉ ghi chép biên bản cuộc họp.",
            isBest: false,
            score: 20
          }
        ]
      },
      {
        turnIndex: 2,
        question: "Làm sao bạn giải thích cho Giám đốc Marketing hiểu rằng nợ kỹ thuật không phải là 'việc nội bộ của dev' mà thực chất là rủi ro mất tiền trực tiếp của Marketing?",
        hint: "Dịch thuật ngữ nợ kỹ thuật sang ngôn ngữ kinh doanh: 'Nếu hệ thống sập 2 giờ đêm Giao thừa, chi phí marketing 2 tỷ sẽ đổ sông đổ biển, tỷ lệ mất khách sang đối thủ là 70%'. Sử dụng kịch bản stress-test thực tế.",
        options: [
          {
            key: "A",
            text: "Quy đổi rủi ro kỹ thuật thành con số tài chính: Ước tính nếu web sập 2 giờ cao điểm Tết sẽ gây thiệt hại 1.5 tỷ doanh thu và mất trắng ngân sách quảng cáo; chỉ ra refactor là bảo hiểm bắt buộc để chiến dịch Tết thắng lợi.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Mở tài liệu cấu trúc dữ liệu và code SQL phức tạp cho Giám đốc Marketing xem để chứng minh dev đang khổ sở.",
            isBest: false,
            score: 30
          },
          {
            key: "C",
            text: "Nói rằng nếu sập web thì lỗi hoàn toàn thuộc về phòng Marketing vì đã không nghe lời khuyên.",
            isBest: false,
            score: 25
          },
          {
            key: "D",
            text: "Khuyên Marketing giảm bớt ngân sách quảng cáo xuống để người dùng không vào web đông quá.",
            isBest: false,
            score: 20
          }
        ]
      }
    ],
    modelAnswer: {
      situation: "Cuộc chiến căng thẳng giữa Tech (đòi 2 Sprint chỉ refactor để tránh sập hệ thống) và Marketing (đòi tính năng Loyalty mới kịp chiến dịch Tết chiếm 40% doanh thu).",
      task: "Là Senior BA, vai trò của tôi là chuyển dịch cuộc tranh luận từ đối đầu sang hợp tác, định lượng hóa rủi ro và tìm ra cơ chế phân bổ tài nguyên tối ưu.",
      action: "1) Định lượng rủi ro kinh doanh: Phân tích số liệu cho thấy nếu hệ thống chết trong đợt sale Tết, thiệt hại doanh thu lên tới 2.4 tỷ đồng, lớn hơn nhiều so với giá trị một tính năng đơn lẻ; 2) Tinh chỉnh phạm vi Refactor: Cùng Tech Lead xác định 20% nút thắt gây nghẽn 80% (tập trung vào Caching và Database Read Replicas); 3) Cơ chế Sprint 70/30: Dành 70% tài nguyên cho tính năng Loyalty rút gọn (MVP) và 30% cho Refactor cấp thiết; 4) Giám sát: Thiết lập dashboard đo tải thời gian thực.",
      result: "Cả hai phòng ban đều đạt được mục tiêu cốt lõi; chiến dịch Tết đạt doanh số kỷ lục 12 tỷ với uptime 99.98% mà không hề xảy ra sự cố gián đoạn dịch vụ."
    },
    rubricCriteria: [
      { name: "Phân tích vấn đề", score: 96, desc: "Nhìn thấu bức tranh toàn cảnh (Big Picture): Công nghệ phục vụ Kinh doanh, nhưng Kinh doanh cần nền tảng Công nghệ vững chắc." },
      { name: "Tư duy logic", score: 95, desc: "Ứng dụng nguyên lý Pareto (20/80) xuất sắc để xác định trọng tâm refactor." },
      { name: "Kỹ năng giao tiếp", score: 97, desc: "Biết 'phiên dịch' khái niệm Technical Debt thành Business Value & Risk một cách thuyết phục." },
      { name: "Quản lý Stakeholder", score: 95, desc: "Kỹ năng đàm phán cấp cao (High-stakes Negotiation) và dung hòa lợi ích xuất sắc." },
      { name: "Giải pháp đề xuất", score: 94, desc: "Phân bổ Sprint Capacity và tinh gọn tính năng MVP là giải pháp mẫu mực trong Agile." },
      { name: "Tính thuyết phục", score: 96, desc: "Lập luận dựa trên số liệu doanh thu thực tế khiến cả CTO lẫn CMO đều tâm phục khẩu phục." }
    ],
    strengths: [
      "Khả năng thấu hiểu cả hai thế giới: Ngôn ngữ Kỹ thuật của Dev và Ngôn ngữ Tiền tệ của Business.",
      "Kỹ năng thương lượng và phân chia phạm vi sản phẩm (Scope Slicing) cực kỳ điêu luyện."
    ],
    weaknesses: [
      "Cần bổ sung thêm kế hoạch quản lý rủi ro dự phòng (Contingency Plan) nếu giai đoạn refactor gặp sự cố ngoài dự tính."
    ],
    pitfalls: [
      "Xem nhẹ nợ kỹ thuật, chiều chuộng business mù quáng dẫn đến thảm họa sập hệ thống khi ra biển lớn.",
      "Ủng hộ dev dừng toàn bộ kinh doanh làm công ty mất thị phần vào tay đối thủ."
    ]
  },
  {
    id: "sc-9",
    title: "UAT phát sinh lỗi nghiêm trọng trước 2 ngày go-live",
    level: "Middle",
    skill: "Testing & UAT",
    duration: "12 phút",
    brief: "Ngày cuối của UAT, người dùng phát hiện lỗi tính sai thuế VAT cho các đơn xuất khẩu; ngày go-live toàn quốc đã được ấn định sau 48 giờ.",
    context: "Hệ thống Bán hàng Đa kênh chuẩn bị Golive trên toàn bộ 30 chi nhánh sau 48 giờ nữa, thư mời khách hàng VIP đã phát đi. Trong buổi kiểm thử nghiệm thu UAT cuối cùng, Kế toán trưởng phát hiện khi tạo đơn hàng xuất khẩu có nhiều thuế suất khác nhau, hệ thống đang làm tròn sai số tiền thuế 1-2 đồng, vi phạm nghiêm trọng quy định hóa đơn điện tử của Tổng cục Thuế. Dev báo cần 24 giờ để sửa và kiểm thử lại.",
    interviewer: {
      name: "Lê Văn Hùng",
      role: "Quality Assurance Director",
      avatar: "🧐"
    },
    turns: [
      {
        turnIndex: 1,
        question: "Quy trình phối hợp giữa bạn, QA, Dev, Kế toán và Ban chỉ đạo để đánh giá mức độ nghiêm trọng và ra quyết định Go / No-Go là gì?",
        hint: "Tổ chức họp Triage khẩn cấp (Defect Triage Meeting): Đánh giá phân loại mức độ nghiêm trọng (Severity: Critical vì liên quan đến pháp lý thuế). Đưa ra các kịch bản lựa chọn cụ thể (Option Matrix) kèm rủi ro để Ban chỉ đạo quyết định.",
        options: [
          {
            key: "A",
            text: "Triệu tập cuộc họp Defect Triage khẩn cấp; xác định lỗi này là Show-stopper (chặn release) do rủi ro vi phạm pháp luật thuế; đề xuất 2 kịch bản: Fix khẩn cấp trong 24h & kiểm thử hồi quy hẹp; hoặc lùi Go-live 3 ngày để đảm bảo an toàn tuyệt đối.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Khuyên Kế toán trưởng cứ ký nghiệm thu tạm đi, sau khi Go-live sẽ mở ticket sửa lỗi sau vài tuần.",
            isBest: false,
            score: 20
          },
          {
            key: "C",
            text: "Tự ý yêu cầu Dev sửa code thẳng trên server Production để tiết kiệm thời gian.",
            isBest: false,
            score: 15
          },
          {
            key: "D",
            text: "Đổ lỗi cho đội QA vì đã không phát hiện ra lỗi thuế này từ 2 tuần trước.",
            isBest: false,
            score: 25
          }
        ]
      },
      {
        turnIndex: 2,
        question: "Nếu Ban Giám đốc quyết định: 'Không được hoãn ngày Go-live vì sự kiện đã truyền thông rộng rãi', giải pháp tình thế (Workaround / Fallback Plan) của bạn là gì?",
        hint: "Thiết kế giải pháp dự phòng (Workaround): Tạm thời tắt tính năng xuất hóa đơn đơn hàng xuất khẩu trên hệ thống tự động, chuyển sang xuất thủ công qua cổng portal của cơ quan thuế trong 48 giờ đầu trong khi dev hoàn thiện hotfix an toàn.",
        options: [
          {
            key: "A",
            text: "Thiết lập giải pháp tình thế an toàn (Feature Toggle & Manual Workaround): Tạm thời khóa luồng xuất khẩu tự động, áp dụng quy trình xuất hóa đơn thủ công dự phòng cho số ít đơn xuất khẩu; tiến hành hotfix có kiểm soát và mở lại sau 48h.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Từ chối phục vụ toàn bộ khách hàng mua đơn hàng có thuế VAT.",
            isBest: false,
            score: 25
          },
          {
            key: "C",
            text: "Chấp nhận phát hành hóa đơn sai và cam kết chịu phạt tiền thay công ty.",
            isBest: false,
            score: 15
          },
          {
            key: "D",
            text: "Viết script tự động sửa trực tiếp vào cơ sở dữ liệu mỗi khi có đơn hàng sai.",
            isBest: false,
            score: 20
          }
        ]
      }
    ],
    modelAnswer: {
      situation: "Chỉ 48 giờ trước Go-live toàn quốc, phát hiện lỗi tính sai tiền thuế VAT xuất khẩu trên hệ thống mới, có nguy cơ bị cơ quan Thuế xử phạt nặng.",
      task: "Là BA phụ trách, tôi phải phân loại chính xác mức độ rủi ro, xây dựng ma trận quyết định cho Ban điều hành và thiết lập giải pháp dự phòng an toàn nếu không thể hoãn ngày ra mắt.",
      action: "1) Triage khẩn cấp: Xác định lỗi ở mức Blocker/Show-stopper; 2) Đánh giá dữ liệu thực tế: Phát hiện đơn xuất khẩu chỉ chiếm 3% tổng lượng đơn trong tuần đầu; 3) Giải pháp Feature Toggle: Đề xuất đóng tạm thời luồng xuất khẩu trên app, áp dụng quy trình xuất hóa đơn tay qua portal điện tử có sẵn; 4) Kế hoạch Hotfix: Tạo môi trường Staging cách ly để Dev sửa thuật toán làm tròn (Rounding algorithm), tổ chức kiểm thử hồi quy 100 test case thuế; 5) Truyền thông nội bộ: Cung cấp kịch bản phản hồi cho bộ phận Chăm sóc khách hàng và Kế toán.",
      result: "Ngày Go-live diễn ra thuận lợi cho 97% đơn hàng nội địa; bản Hotfix an toàn được triển khai 36 giờ sau đó mà không phát sinh bất kỳ rủi ro pháp lý hay khiếu nại nào."
    },
    rubricCriteria: [
      { name: "Phân tích vấn đề", score: 95, desc: "Đánh giá đúng mức độ nghiêm trọng liên quan đến tính pháp lý tài chính, không xem thường lỗi nhỏ." },
      { name: "Tư duy logic", score: 94, desc: "Khả năng phân tích tỷ trọng dữ liệu (3% đơn xuất khẩu) để tìm ra điểm nghẽn thực sự." },
      { name: "Kỹ năng giao tiếp", score: 93, desc: "Báo cáo rõ ràng, trung thực, đưa ra giải pháp đi kèm thay vì chỉ mang đến tin xấu." },
      { name: "Quản lý Stakeholder", score: 92, desc: "Trấn an được Ban Giám đốc và có phương án bảo hộ trách nhiệm cho Kế toán." },
      { name: "Giải pháp đề xuất", score: 96, desc: "Ứng dụng Feature Toggle và quy trình Fallback thủ công cực kỳ thông minh." },
      { name: "Tính thuyết phục", score: 94, desc: "Quy trình xử lý khủng hoảng bài bản, đúng chuẩn quản trị rủi ro dự án IT." }
    ],
    strengths: [
      "Bình tĩnh và sắc bén trong tình huống khủng hoảng sát giờ Go-live.",
      "Tư duy ứng biến linh hoạt: Biết sử dụng giải pháp quy trình (Workaround) để cứu giải pháp công nghệ."
    ],
    weaknesses: [
      "Cần rút kinh nghiệm đưa các chuyên gia Kế toán và Thuế vào kiểm thử ở các giai đoạn sớm hơn (Sprint Testing) thay vì đợi đến UAT cuối."
    ],
    pitfalls: [
      "Thỏa hiệp với lỗi pháp lý thuế để giữ thể diện ngày Go-live.",
      "Sửa code nóng vội không qua kiểm thử hồi quy làm phát sinh lỗi chéo ở các module khác."
    ]
  },
  {
    id: "sc-10",
    title: "Phỏng vấn về hệ thống phân tán khi chưa có kinh nghiệm thực tế",
    level: "Middle",
    skill: "Giải quyết vấn đề kỹ thuật",
    duration: "10 phút",
    brief: "Nhà tuyển dụng hỏi về thiết kế yêu cầu phi chức năng (NFR) cho hệ thống chịu tải 100k CCU khi CV của bạn chủ yếu làm web doanh nghiệp vừa.",
    context: "Bạn ứng tuyển vào vị trí BA cho một nền tảng Thương mại điện tử lớn. Nhà tuyển dụng hỏi thẳng: 'Trong CV của em chủ yếu làm các hệ thống quản trị nội bộ. Nền tảng của chúng tôi phục vụ 100.000 người dùng đồng thời trong các đợt Flash Sale. Em đã từng xác định và mô hình hóa các yêu cầu phi chức năng (NFR) như Caching, Cân bằng tải, Độ trễ mạng và Xử lý bất đồng bộ bao giờ chưa?'.",
    interviewer: {
      name: "Đỗ Tuấn Khang",
      role: "VP of Product Architecture",
      avatar: "👨‍💻"
    },
    turns: [
      {
        turnIndex: 1,
        question: "Cách bạn trả lời trung thực nhưng vẫn thể hiện được tư duy kiến trúc, khả năng tự học và tiềm năng đảm đương công việc của bạn là gì?",
        hint: "Áp dụng công thức: Trung thực về phạm vi kinh nghiệm cũ + Chứng minh hiểu biết nền tảng vững chắc (tự học, chứng chỉ, bài học Designed to Scale) + Liên hệ bài toán kinh doanh của NFR (độ trễ ảnh hưởng thế nào đến doanh số) + Sẵn sàng học hỏi.",
        options: [
          {
            key: "A",
            text: "Thừa nhận trung thực mình chưa trực tiếp vận hành hệ thống 100k CCU ở dự án cũ; nhưng chủ động trình bày kiến thức sâu sắc đã tích lũy về NFR: cách Caching giảm tải DB, cách hàng đợi MQ làm mịn lưu lượng và cam kết làm việc chặt chẽ cùng Solution Architect.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Nói dối rằng mình đã từng tự tay thiết kế hệ thống triệu người dùng cho dự án trước để lấy điểm.",
            isBest: false,
            score: 10
          },
          {
            key: "C",
            text: "Phản bác rằng BA chỉ cần lo logic nghiệp vụ trên màn hình, còn Caching hay chịu tải là việc của Dev và Infra.",
            isBest: false,
            score: 35
          },
          {
            key: "D",
            text: "Lúng túng im lặng và thừa nhận mình không biết gì về kiến trúc phân tán.",
            isBest: false,
            score: 25
          }
        ]
      },
      {
        turnIndex: 2,
        question: "Người phỏng vấn gật đầu và hỏi sâu tiếp: 'Vậy theo em, khi một giao dịch mua hàng Flash Sale diễn ra, BA cần định nghĩa các kịch bản ngoại lệ (failure scenarios) nào giữa hệ thống Giỏ hàng, Cổng thanh toán và Kho vận?'. Bạn phân tích thế nào?",
        hint: "Phân tích 3 trạng thái bất đồng bộ nhạy cảm: 1) Thanh toán trừ tiền nhưng kho hết hàng (Out-of-stock); 2) Mạng timeout khi đang trừ tiền (Double-charge risk); 3) Hoàn tiền tự động và giải phóng tồn kho ảo.",
        options: [
          {
            key: "A",
            text: "Chỉ ra 3 kịch bản cốt lõi: 1. Khách bị trừ tiền nhưng mạng đứt trước khi hệ thống tạo đơn; 2. Tranh chấp tồn kho khi 10 người cùng bấm mua 1 món hàng cuối cùng; 3. Cơ chế Idempotency & Tự động hoàn tiền/hủy giữ chỗ khi quá thời gian thanh toán.",
            isBest: true,
            score: 95
          },
          {
            key: "B",
            text: "Trả lời rằng hệ thống thanh toán tự động xử lý hết nên BA không cần viết tài liệu cho các trường hợp này.",
            isBest: false,
            score: 25
          },
          {
            key: "C",
            text: "Chỉ quan tâm luồng chạy thành công (Happy Path) vì tỉ lệ lỗi mạng là rất thấp.",
            isBest: false,
            score: 20
          },
          {
            key: "D",
            text: "Khuyên khách hàng nếu bị trừ tiền oan thì gọi điện lên tổng đài hỗ trợ sau.",
            isBest: false,
            score: 30
          }
        ]
      }
    ],
    modelAnswer: {
      situation: "Nhà tuyển dụng chất vấn về khoảng trống kinh nghiệm khi tôi chưa từng trực tiếp làm việc trên các hệ thống phân tán chịu tải lớn 100.000 CCU.",
      task: "Tôi cần biến câu hỏi mang tính thử thách này thành cơ hội để thể hiện tư duy kiến trúc hệ thống, sự chủ động học hỏi bài bản và khả năng tư duy nghiệp vụ gắn liền với hạ tầng kỹ thuật.",
      action: "1) Chân thành: Khẳng định các dự án trước quy mô 5.000 CCU; 2) Chứng minh năng lực tự thân: Trình bày các mô hình kiến trúc phân tán tôi đã chủ động nghiên cứu và thực hành (như cơ chế Read/Write Replicas, Redis Caching phân tầng, Message Queue Kafka xử lý đặt hàng không nghẽn); 3) Bóc tách NFR: Đưa ra ví dụ cụ thể về việc xác định chỉ số p99 dưới 200ms cho trang thanh toán để ngăn rủi ro khách bỏ rơi đơn; 4) Phân tích Failure Mode: Mô tả chi tiết kịch bản Idempotency tránh trừ tiền 2 lần trong Flash Sale.",
      result: "Người phỏng vấn đánh giá rất cao sự trung thực, thái độ cầu tiến và tư duy hệ thống vững vàng; tôi vượt qua vòng phỏng vấn kỹ thuật và nhận được offer chính thức."
    },
    rubricCriteria: [
      { name: "Phân tích vấn đề", score: 95, desc: "Hiểu sâu sắc mối quan hệ hữu cơ giữa NFR kỹ thuật và trải nghiệm mua sắm của người dùng." },
      { name: "Tư duy logic", score: 94, desc: "Phân tích sắc sảo các kịch bản bất đồng bộ và tranh chấp tài nguyên (Concurrency & Race Conditions)." },
      { name: "Kỹ năng giao tiếp", score: 96, desc: "Trung thực, tự tin, không giấu dốt và biết cách tôn vinh năng lực học tập của bản thân." },
      { name: "Quản lý Stakeholder", score: 90, desc: "Ý thức rõ vai trò cộng tác chặt chẽ cùng Solution Architect và DevOps." },
      { name: "Giải pháp đề xuất", score: 95, desc: "Đề xuất các cơ chế kỹ thuật chuẩn mực: Idempotency Key, Inventory Reservation, Event-driven." },
      { name: "Tính thuyết phục", score: 96, desc: "Biến điểm yếu thành điểm mạnh nhờ vốn hiểu biết lý thuyết chuyên sâu và đam mê công nghệ." }
    ],
    strengths: [
      "Thái độ phỏng vấn điểm 10: Minh bạch, khiêm tốn nhưng sở hữu nền tảng kiến trúc vững chắc.",
      "Tư duy phòng ngừa rủi ro ngoại lệ (Defensive Design) rất phù hợp cho các hệ thống quy mô lớn."
    ],
    weaknesses: [
      "Có thể tìm hiểu thêm về các công cụ giám sát hiệu năng thực tế (APM tools như Datadog, Prometheus) để trả lời trọn vẹn hơn."
    ],
    pitfalls: [
      "Nói dối về kinh nghiệm thực tế - các chuyên gia kỹ thuật chỉ cần hỏi 2 câu sâu là phát hiện ngay.",
      "Tự giới hạn bản thân trong vai trò 'BA vẽ giao diện', xem nhẹ các yêu cầu phi chức năng (NFR)."
    ]
  }
];

// Trạng thái của module Phỏng vấn
const interviewState = {
  mode: "mock", // 'mock' (thi thật, đánh giá cuối) | 'guided' (hướng dẫn từng bước)
  filterLevel: "all", // 'all' | 'Junior' | 'Middle' | 'Senior'
  filterSkill: "all", // 'all' | 'Thu thập yêu cầu' | 'Xử lý xung đột' | 'Viết tài liệu' | 'Agile / Scrum' | 'Giao tiếp với Stakeholder' | 'Giải quyết vấn đề kỹ thuật'
  searchQuery: "",
  activeScenarioId: null,
  currentTurnIndex: 1, // 1 hoặc 2
  answers: {}, // { 'sc-1': { turn1: { type: 'text'|'option', content: '', score: 90 }, turn2: ... } }
  showHint: false,
  answerTab: "text", // 'text' | 'option'
  selectedOptionKey: null,
  isFinished: false,
  completedScenarios: []
};

// Khởi tạo và đồng bộ LocalStorage
try {
  const saved = localStorage.getItem("vy-interview-completed");
  if (saved) interviewState.completedScenarios = JSON.parse(saved);
} catch (e) {}

// Hàm render chính cho trang Phỏng vấn
function interviewPage() {
  if (interviewState.activeScenarioId) {
    return renderInterviewStudio();
  }
  return renderInterviewHome();
}

// Render trang danh sách kịch bản phỏng vấn
function renderInterviewHome() {
  const skills = [
    "Tất cả",
    "Thu thập yêu cầu",
    "Xử lý xung đột",
    "Viết tài liệu (BRD/SRS)",
    "Agile / Scrum",
    "Giao tiếp với Stakeholder",
    "Giải quyết vấn đề kỹ thuật"
  ];

  // Lọc kịch bản
  const filtered = interviewScenariosData.filter(sc => {
    if (interviewState.filterLevel !== "all" && sc.level !== interviewState.filterLevel) return false;
    if (interviewState.filterSkill !== "all") {
      if (interviewState.filterSkill === "Viết tài liệu (BRD/SRS)") {
        if (!sc.skill.includes("Viết tài liệu")) return false;
      } else if (!sc.skill.includes(interviewState.filterSkill)) {
        return false;
      }
    }
    if (interviewState.searchQuery) {
      const q = interviewState.searchQuery.toLowerCase();
      const match = sc.title.toLowerCase().includes(q) || sc.brief.toLowerCase().includes(q) || sc.skill.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  return `
    <div class="interview-container">
      <!-- 1. Header & Mode Switcher -->
      <div class="interview-header-card">
        <div class="interview-header-left">
          <h1><span>♧</span> Phòng phỏng vấn mô phỏng BA</h1>
          <p>Luyện tập phản xạ thực tế trước các câu hỏi tình huống hóc búa từ Hiring Manager, Tech Lead & PO.</p>
        </div>

        <div class="interview-modes" role="radiogroup" aria-label="Chế độ phỏng vấn">
          <button class="interview-mode-btn ${interviewState.mode === 'mock' ? 'active' : ''}" 
                  data-interview-action="set-mode" data-mode="mock">
            <span>🎯</span> Phỏng vấn thử (Mock)
          </button>
          <button class="interview-mode-btn ${interviewState.mode === 'guided' ? 'active' : ''}" 
                  data-interview-action="set-mode" data-mode="guided">
            <span>💡</span> Luyện tập có hướng dẫn
          </button>
        </div>
      </div>

      <!-- 2. Search & Filter Bar -->
      <div class="interview-toolbar">
        <div class="interview-search-row">
          <div class="interview-search-input-wrap">
            <span class="interview-search-icon">⌕</span>
            <input type="text" class="interview-search-input" id="interview-search-input" 
                   placeholder="Tìm kiếm tình huống, từ khóa kỹ năng (xung đột, scope creep, dev)..."
                   value="${escInterview(interviewState.searchQuery)}" />
          </div>

          <div class="interview-level-filters">
            ${['all', 'Junior', 'Middle', 'Senior'].map(lvl => `
              <button class="level-pill ${interviewState.filterLevel === lvl ? 'active' : ''}"
                      data-interview-action="filter-level" data-level="${lvl}">
                ${lvl === 'all' ? 'Tất cả cấp độ' : lvl}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="interview-skill-pills">
          ${skills.map(sk => {
            const val = sk === 'Tất cả' ? 'all' : sk;
            const isActive = interviewState.filterSkill === val;
            return `
              <button class="skill-pill ${isActive ? 'active' : ''}"
                      data-interview-action="filter-skill" data-skill="${val}">
                ${escInterview(sk)}
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 3. Scenario Cards Grid -->
      <div class="interview-scenarios-grid">
        ${filtered.length ? filtered.map((sc, idx) => {
          const isDone = interviewState.completedScenarios.includes(sc.id);
          const lvlClass = sc.level.toLowerCase();

          return `
            <article class="scenario-card">
              <div class="scenario-top">
                <div class="scenario-badges">
                  <span class="badge-level ${lvlClass}">${sc.level}</span>
                  <span class="badge-skill">${escInterview(sc.skill)}</span>
                </div>
                <span class="scenario-duration">⏱ ${sc.duration}</span>
              </div>

              <div>
                <h3 class="scenario-title">${idx + 1}. ${escInterview(sc.title)}</h3>
                <p class="scenario-brief">${escInterview(sc.brief)}</p>
              </div>

              <div class="scenario-footer">
                <span class="scenario-status ${isDone ? 'completed' : ''}">
                  ${isDone ? '✓ Đã hoàn thành' : '○ Chưa thực hành'}
                </span>

                <button class="btn-start-interview" data-interview-action="start-scenario" data-scenario-id="${sc.id}">
                  <span>Bắt đầu phỏng vấn</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          `;
        }).join('') : `
          <div class="empty-state" style="grid-column: 1 / -1; padding: 48px; text-align: center; background: #FFFFFF; border-radius: 12px; border: 1px dashed #E2E8F0;">
            <p style="font-size: 16px; color: #64748B; margin-bottom: 12px;">Không tìm thấy tình huống phù hợp với bộ lọc hiện tại.</p>
            <button class="btn-start-interview" data-interview-action="reset-filters">Đặt lại bộ lọc</button>
          </div>
        `}
      </div>
    </div>
  `;
}

// Render phòng mô phỏng phỏng vấn (Studio View)
function renderInterviewStudio() {
  const scenario = interviewScenariosData.find(s => s.id === interviewState.activeScenarioId);
  if (!scenario) return renderInterviewHome();

  // Nếu đã kết thúc -> Render Báo cáo đánh giá (Rubric & Feedback)
  if (interviewState.isFinished) {
    return renderInterviewEvaluation(scenario);
  }

  const turn = scenario.turns[interviewState.currentTurnIndex - 1] || scenario.turns[0];
  const userAnswersForScenario = interviewState.answers[scenario.id] || {};
  const currentTurnAnswer = userAnswersForScenario[`turn${interviewState.currentTurnIndex}`] || {};
  const textVal = currentTurnAnswer.content || "";
  const wordCount = textVal.trim() ? textVal.trim().split(/\s+/).length : 0;
  const isGuided = interviewState.mode === "guided";

  return `
    <div class="interview-container">
      <div class="simulation-studio">
        <!-- Studio Header -->
        <div class="studio-header">
          <button class="btn-back-scenario" data-interview-action="back-home">
            <span>←</span> Quay lại danh sách tình huống
          </button>

          <div class="studio-progress">
            <span class="mode-tag">${isGuided ? '💡 Hướng dẫn từng bước' : '🎯 Thi thử (Mock)'}</span>
            <span class="step-indicator">Vòng ${interviewState.currentTurnIndex} / ${scenario.turns.length}: ${interviewState.currentTurnIndex === 1 ? 'Câu hỏi tình huống' : 'Câu hỏi vặn (Counter-question)'}</span>
          </div>
        </div>

        <!-- 1. Bối cảnh tình huống (Scenario Context) -->
        <div class="scenario-context-card">
          <div class="context-header">
            <span>📋</span> Bối cảnh dự án & Vấn đề phát sinh
          </div>
          <h2 class="context-title">${escInterview(scenario.title)}</h2>
          <p class="context-text">${escInterview(scenario.context)}</p>
        </div>

        <!-- 2. Người phỏng vấn đặt câu hỏi -->
        <div class="dialogue-turn">
          <div class="interviewer-avatar" title="${escInterview(scenario.interviewer.name)}">
            ${scenario.interviewer.avatar}
          </div>
          <div class="interviewer-bubble">
            <span class="speaker-role">${escInterview(scenario.interviewer.name)} · ${escInterview(scenario.interviewer.role)}</span>
            <p class="question-text">${escInterview(turn.question)}</p>
          </div>
        </div>

        <!-- 3. Khu vực trả lời của Ứng viên -->
        <div class="candidate-answer-section">
          <div class="answer-mode-tabs">
            <button class="answer-tab-btn ${interviewState.answerTab === 'text' ? 'active' : ''}" 
                    data-interview-action="set-tab" data-tab="text">
              ✏️ Nhập câu trả lời tự do (Chuẩn STAR)
            </button>
            <button class="answer-tab-btn ${interviewState.answerTab === 'option' ? 'active' : ''}" 
                    data-interview-action="set-tab" data-tab="option">
              🎯 Chọn chiến lược nhanh (Trắc nghiệm thực chiến)
            </button>
          </div>

          ${interviewState.answerTab === 'text' ? `
            <div class="star-helper-strip">
              <span><strong>S</strong>ituation (Bối cảnh)</span>
              <span><strong>T</strong>ask (Nhiệm vụ)</span>
              <span><strong>A</strong>ction (Hành động cụ thể)</span>
              <span><strong>R</strong>esult (Kết quả đo lường)</span>
            </div>

            <div class="answer-textarea-wrap">
              <textarea class="answer-textarea" id="candidate-text-answer" 
                        placeholder="Trình bày giải pháp và cách xử lý của bạn theo cấu trúc rõ ràng...">${escInterview(textVal)}</textarea>
              <div class="word-counter">
                <span>${wordCount} từ</span>
              </div>
            </div>
          ` : `
            <div class="strategy-options-list">
              ${turn.options.map(opt => {
                const isSelected = interviewState.selectedOptionKey === opt.key;
                return `
                  <div class="strategy-option ${isSelected ? 'selected' : ''}" 
                       data-interview-action="select-option" data-key="${opt.key}">
                    <span class="option-key">${opt.key}</span>
                    <p class="option-desc">${escInterview(opt.text)}</p>
                  </div>
                `;
              }).join('')}
            </div>
          `}

          <!-- Gợi ý (Hint) trong chế độ Guided hoặc khi bấm xem -->
          ${(isGuided || interviewState.showHint) ? `
            <div class="hint-box">
              <strong>💡 Gợi ý tư duy BA:</strong> ${escInterview(turn.hint)}
            </div>
          ` : ''}

          <!-- Controls -->
          <div class="simulation-actions">
            <div>
              ${!isGuided ? `
                <button class="btn-hint-toggle" data-interview-action="toggle-hint">
                  <span>${interviewState.showHint ? 'Ẩn gợi ý' : '💡 Xem gợi ý tư duy'}</span>
                </button>
              ` : '<span></span>'}
            </div>

            <button class="btn-submit-answer" data-interview-action="submit-turn">
              <span>${interviewState.currentTurnIndex < scenario.turns.length ? 'Tiếp tục câu hỏi vặn →' : 'Hoàn thành & Xem đánh giá ✓'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render báo cáo đánh giá & Rubric kết quả
function renderInterviewEvaluation(scenario) {
  const avgScore = Math.round(scenario.rubricCriteria.reduce((sum, c) => sum + c.score, 0) / scenario.rubricCriteria.length);
  const isHigh = avgScore >= 90;

  return `
    <div class="interview-container">
      <div class="simulation-studio rubric-summary-card">
        <!-- Top Action Bar -->
        <div class="studio-header">
          <button class="btn-back-scenario" data-interview-action="back-home">
            <span>←</span> Quay lại danh sách tình huống
          </button>
          <span class="mode-tag">✓ ĐÃ HOÀN THÀNH PHỎNG VẤN</span>
        </div>

        <!-- 1. Hero Score Banner -->
        <div class="summary-score-hero">
          <div class="score-hero-left">
            <h2>${isHigh ? '🌟 Kết quả xuất sắc! Bạn thể hiện tư duy BA chuẩn mực.' : '👍 Hoàn thành tốt! Hãy xem các điểm cần cải thiện bên dưới.'}</h2>
            <p>Tình huống: <strong>${escInterview(scenario.title)}</strong> (${scenario.level} · ${escInterview(scenario.skill)})</p>
          </div>
          <div class="score-circle">
            ${avgScore}/100
          </div>
        </div>

        <!-- 2. Rubric 6 Criteria Grid -->
        <div>
          <h3 style="font-size: 16px; font-weight: 700; color: #0F172A; margin: 0 0 14px 0;">
            📊 Đánh giá chi tiết theo 6 tiêu chí tuyển dụng BA
          </h3>
          <div class="rubric-criteria-grid">
            ${scenario.rubricCriteria.map(c => `
              <div class="criteria-cell">
                <div class="criteria-name">
                  <span>${escInterview(c.name)}</span>
                  <span class="criteria-score">${c.score}/100</span>
                </div>
                <div class="criteria-bar">
                  <div class="criteria-bar-fill" style="width: ${c.score}%"></div>
                </div>
                <p class="criteria-desc">${escInterview(c.desc)}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3. Strengths & Weaknesses -->
        <div class="rubric-feedback-row">
          <div class="feedback-card strengths">
            <h3><span>✓</span> Điểm mạnh nổi bật</h3>
            <ul>
              ${scenario.strengths.map(s => `<li>${escInterview(s)}</li>`).join('')}
            </ul>
          </div>

          <div class="feedback-card weaknesses">
            <h3><span>⚠️</span> Điểm cần hoàn thiện thêm</h3>
            <ul>
              ${scenario.weaknesses.map(w => `<li>${escInterview(w)}</li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- 4. Model Answer (STAR) -->
        <div class="model-answer-card">
          <div class="model-answer-head">
            <span class="model-badge">MẪU CHUẨN</span>
            <h3>Câu trả lời mẫu theo phương pháp STAR</h3>
          </div>

          <div class="star-breakdown">
            <div class="star-block">
              <strong>S - Situation (Bối cảnh thực tế):</strong>
              <p style="margin:0">${escInterview(scenario.modelAnswer.situation)}</p>
            </div>
            <div class="star-block">
              <strong>T - Task (Nhiệm vụ của BA):</strong>
              <p style="margin:0">${escInterview(scenario.modelAnswer.task)}</p>
            </div>
            <div class="star-block">
              <strong>A - Action (Hành động chiến lược):</strong>
              <p style="margin:0">${escInterview(scenario.modelAnswer.action)}</p>
            </div>
            <div class="star-block">
              <strong>R - Result (Kết quả & Giá trị kinh doanh):</strong>
              <p style="margin:0">${escInterview(scenario.modelAnswer.result)}</p>
            </div>
          </div>
        </div>

        <!-- 5. Common Pitfalls -->
        <div class="pitfalls-card">
          <h3>🚫 Các lỗi thường gặp (Common Pitfalls) cần tuyệt đối tránh</h3>
          <ul>
            ${scenario.pitfalls.map(p => `<li>${escInterview(p)}</li>`).join('')}
          </ul>
        </div>

        <!-- 6. Footer Actions -->
        <div class="evaluation-footer-actions">
          <button class="btn-hint-toggle" data-interview-action="restart-scenario">
            <span>↺</span> Luyện tập lại tình huống này
          </button>
          <button class="btn-start-interview" data-interview-action="back-home">
            <span>Chọn tình huống khác →</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// =========================================================================
// EVENT HANDLERS & DELEGATION FOR INTERVIEW MODULE
// =========================================================================

function bindInterviewEvents() {
  // Input search handler
  const searchInput = document.querySelector('#interview-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      interviewState.searchQuery = e.target.value.trim();
      const main = document.querySelector('#main');
      if (main && typeof render === 'function' && window.page === 'Phỏng vấn') {
        render();
        const newIn = document.querySelector('#interview-search-input');
        if (newIn) {
          newIn.focus();
          newIn.setSelectionRange(newIn.value.length, newIn.value.length);
        }
      }
    });
  }

  // Textarea input auto-save
  const answerArea = document.querySelector('#candidate-text-answer');
  if (answerArea) {
    answerArea.addEventListener('input', e => {
      const val = e.target.value;
      const scId = interviewState.activeScenarioId;
      if (!scId) return;
      if (!interviewState.answers[scId]) interviewState.answers[scId] = {};
      const turnKey = `turn${interviewState.currentTurnIndex}`;
      interviewState.answers[scId][turnKey] = {
        type: 'text',
        content: val
      };
      const counter = document.querySelector('.word-counter span');
      if (counter) {
        const words = val.trim() ? val.trim().split(/\s+/).length : 0;
        counter.textContent = `${words} từ`;
      }
    });
  }
}

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-interview-action]');
  if (!btn) return;
  e.preventDefault();

  const action = btn.dataset.interviewAction;

  // 1. Chuyển chế độ: Mock vs Guided
  if (action === 'set-mode') {
    interviewState.mode = btn.dataset.mode;
    if (typeof render === 'function') render();
    return;
  }

  // 2. Lọc theo Level
  if (action === 'filter-level') {
    interviewState.filterLevel = btn.dataset.level;
    if (typeof render === 'function') render();
    return;
  }

  // 3. Lọc theo Kỹ năng
  if (action === 'filter-skill') {
    interviewState.filterSkill = btn.dataset.skill;
    if (typeof render === 'function') render();
    return;
  }

  // 4. Reset bộ lọc
  if (action === 'reset-filters') {
    interviewState.filterLevel = 'all';
    interviewState.filterSkill = 'all';
    interviewState.searchQuery = '';
    if (typeof render === 'function') render();
    return;
  }

  // 5. Bắt đầu phỏng vấn tình huống
  if (action === 'start-scenario') {
    interviewState.activeScenarioId = btn.dataset.scenarioId;
    interviewState.currentTurnIndex = 1;
    interviewState.isFinished = false;
    interviewState.showHint = false;
    interviewState.answerTab = 'text';
    interviewState.selectedOptionKey = null;
    if (typeof render === 'function') render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // 6. Quay lại trang danh sách tình huống
  if (action === 'back-home') {
    interviewState.activeScenarioId = null;
    interviewState.isFinished = false;
    if (typeof render === 'function') render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // 7. Chuyển tab trả lời: Text vs Option
  if (action === 'set-tab') {
    interviewState.answerTab = btn.dataset.tab;
    if (typeof render === 'function') render();
    return;
  }

  // 8. Chọn phương án trắc nghiệm chiến lược
  if (action === 'select-option') {
    interviewState.selectedOptionKey = btn.dataset.key;
    const scId = interviewState.activeScenarioId;
    if (scId) {
      if (!interviewState.answers[scId]) interviewState.answers[scId] = {};
      const turnKey = `turn${interviewState.currentTurnIndex}`;
      interviewState.answers[scId][turnKey] = {
        type: 'option',
        key: btn.dataset.key
      };
    }
    if (typeof render === 'function') render();
    return;
  }

  // 9. Bật/Tắt gợi ý trong Mock mode
  if (action === 'toggle-hint') {
    interviewState.showHint = !interviewState.showHint;
    if (typeof render === 'function') render();
    return;
  }

  // 10. Nộp câu trả lời & Chuyển vòng / Hoàn thành
  if (action === 'submit-turn') {
    const scenario = interviewScenariosData.find(s => s.id === interviewState.activeScenarioId);
    if (!scenario) return;

    if (interviewState.currentTurnIndex < scenario.turns.length) {
      interviewState.currentTurnIndex++;
      interviewState.selectedOptionKey = null;
      interviewState.showHint = false;
      if (typeof toast === 'function') {
        toast('Đã ghi nhận câu trả lời. Người phỏng vấn đặt câu hỏi vặn!');
      }
    } else {
      // Đã hoàn thành 2 vòng
      interviewState.isFinished = true;
      if (!interviewState.completedScenarios.includes(scenario.id)) {
        interviewState.completedScenarios.push(scenario.id);
        try {
          localStorage.setItem('vy-interview-completed', JSON.stringify(interviewState.completedScenarios));
        } catch (e) {}
      }
      if (typeof toast === 'function') {
        toast('Chúc mừng! Bạn đã hoàn thành phiên phỏng vấn mô phỏng.');
      }
    }
    if (typeof render === 'function') render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // 11. Làm lại kịch bản
  if (action === 'restart-scenario') {
    interviewState.currentTurnIndex = 1;
    interviewState.isFinished = false;
    interviewState.showHint = false;
    interviewState.selectedOptionKey = null;
    if (typeof render === 'function') render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { interviewScenariosData, interviewState, interviewPage, renderInterviewHome, renderInterviewStudio, renderInterviewEvaluation };
}
