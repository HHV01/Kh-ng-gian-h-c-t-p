module.exports = [
  // Level 0: Nền tảng (Q3-01 -> Q3-05)
  {
    track: 3,
    id: "Q3-01",
    level: 0,
    q: "Trong chuẩn ký hiệu mô hình hóa quy trình nghiệp vụ BPMN 2.0, nhóm 'Flow Objects' (Đối tượng luồng) bao gồm 3 thành phần cốt lõi nào?",
    opts: [
      "Database, Table, Field.",
      "Events (Sự kiện), Activities (Hoạt động/Công việc) và Gateways (Cổng rẽ nhánh).",
      "Actor, Use Case, System Boundary.",
      "Class, Object, Interface."
    ],
    ans: 1,
    exp: "Đáp án đúng là B theo chuẩn OMG BPMN 2.0. Flow Objects gồm Events (hình tròn), Activities (hình chữ nhật bo góc) và Gateways (hình thoi). Phương án A thuộc về cơ sở dữ liệu, C thuộc Use Case Diagram, D thuộc Class Diagram."
  },
  {
    track: 3,
    id: "Q3-02",
    level: 0,
    q: "Phân biệt giữa Exclusive Gateway (XOR - ký hiệu hình thoi có dấu X) và Parallel Gateway (AND - ký hiệu hình thoi có dấu +) trong BPMN 2.0:",
    opts: [
      "Exclusive Gateway kích hoạt tất cả các nhánh đi ra; Parallel Gateway chỉ kích hoạt duy nhất một nhánh thỏa mãn điều kiện.",
      "Exclusive Gateway chỉ kích hoạt duy nhất một nhánh đi ra dựa trên điều kiện đánh giá; Parallel Gateway kích hoạt đồng thời tất cả các nhánh đi ra mà không cần đánh giá điều kiện.",
      "Hai loại Gateway này hoàn toàn tương đương nhau và có thể thay thế tùy ý theo sở thích người vẽ.",
      "Exclusive Gateway dùng để kết thúc quy trình, còn Parallel Gateway dùng để bắt đầu quy trình."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Exclusive Gateway (XOR) mang tính loại trừ lẫn nhau: chỉ 1 nhánh được chọn dựa trên điều kiện (True/False). Parallel Gateway (AND) dùng để phân tách luồng thành nhiều nhánh chạy song song độc lập."
  },
  {
    track: 3,
    id: "Q3-03",
    level: 0,
    q: "Ý nghĩa và quy tắc sử dụng Swimlane (Pools và Lanes) trong biểu đồ BPMN 2.0 là gì?",
    opts: [
      "Pool đại diện cho một vai trò nhân viên cụ thể, còn Lane đại diện cho toàn bộ công ty đối tác bên ngoài.",
      "Pool đại diện cho một thực thể hoặc tổ chức độc lập (Participant/Process Boundary); Lane phân chia không gian bên trong một Pool để chỉ định phòng ban hoặc vai trò chịu trách nhiệm thực thi công việc.",
      "Chỉ được phép sử dụng tối đa 1 Lane trong một biểu đồ BPMN.",
      "Swimlane chỉ dùng để trang trí màu sắc cho biểu đồ thêm sinh động, không có ý nghĩa ngữ nghĩa."
    ],
    ans: 1,
    exp: "Đáp án đúng là B theo chuẩn BPMN 2.0. Pool định nghĩa ranh giới quy trình của một thực thể tham gia (ví dụ: Khách hàng vs Doanh nghiệp); Lane là sự phân chia nội bộ trong Pool theo vai trò (ví dụ: Kế toán, Thủ kho, Trưởng phòng)."
  },
  {
    track: 3,
    id: "Q3-04",
    level: 0,
    q: "Trong BPMN 2.0, sự khác biệt giữa 'None End Event' (vòng tròn viền đậm rỗng) và 'Terminate End Event' (vòng tròn viền đậm có chấm đen đặc ở giữa) là gì?",
    opts: [
      "None End Event dừng toàn bộ hệ thống máy chủ; Terminate End Event chỉ dừng một nhánh công việc.",
      "None End Event chỉ kết thúc nhánh luồng công việc hiện tại; Terminate End Event lập tức hủy bỏ và chấm dứt toàn bộ tất cả các nhánh đang chạy song song trong phiên quy trình đó.",
      "Hai sự kiện này hoàn toàn giống nhau về mặt hành vi ngữ nghĩa.",
      "Terminate End Event tự động khởi động lại quy trình từ đầu."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Terminate End Event có sức mạnh chấm dứt cưỡng bức (Kill switch): nếu có 3 nhánh đang chạy song song, chỉ cần 1 nhánh chạm vào Terminate End Event là toàn bộ 2 nhánh kia bị hủy bỏ lập tức."
  },
  {
    track: 3,
    id: "Q3-05",
    level: 0,
    q: "Mục đích chính của việc lập mô hình quy trình Hiện trạng (As-Is Process) trước khi xây dựng quy trình Tương lai (To-Be Process) là gì?",
    opts: [
      "Để chỉ trích và quy trách nhiệm cá nhân cho các nhân viên đang làm sai quy trình.",
      "Hiểu rõ cách thức tổ chức đang vận hành, phát hiện các điểm nghẽn (Bottlenecks), lãng phí (Waste), rủi ro kiểm soát và các nguyên nhân gốc rễ cần khắc phục.",
      "Sao chép nguyên vẹn quy trình thủ công hiện tại đưa vào phần mềm mà không cần thay đổi bất cứ điều gì.",
      "Để kéo dài thời gian dự án và tính thêm giờ công tư vấn cho khách hàng."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Mô hình As-Is giúp thiết lập đường cơ sở (Baseline) để hiểu hiện trạng, từ đó xác định khoảng trống (GAP) và các cơ hội tối ưu hóa nghiệp vụ trước khi thiết kế To-Be."
  },

  // Level 1: Vận dụng (Q3-06 -> Q3-13)
  {
    track: 3,
    id: "Q3-06",
    level: 1,
    q: "Khi kiểm tra sơ đồ BPMN do một Junior BA vẽ, bạn thấy một đường 'Sequence Flow' (mũi tên nét liền) nối từ một Activity bên trong Pool 'Khách hàng' sang một Activity bên trong Pool 'Ngân hàng'. Lỗi cú pháp này được sửa lại như thế nào cho đúng chuẩn?",
    opts: [
      "Đổi Sequence Flow thành Message Flow (đường nét đứt, đầu có vòng tròn rỗng và mũi tên hở) vì Sequence Flow không được phép vượt qua ranh giới giữa hai Pool độc lập.",
      "Xóa bỏ Pool 'Khách hàng' và gộp tất cả công việc của khách hàng vào làm một Lane của 'Ngân hàng'.",
      "Giữ nguyên vì BPMN 2.0 hoàn toàn cho phép Sequence Flow nối tự do giữa các Pool khác nhau.",
      "Thay thế bằng đường Data Association nối với một cơ sở dữ liệu chung."
    ],
    ans: 0,
    exp: "Đáp án đúng là A. Quy tắc bất di bất dịch của BPMN 2.0: Sequence Flow chỉ điều phối luồng bên trong cùng 1 Pool; giao tiếp thông điệp giữa hai Pool độc lập bắt buộc phải dùng Message Flow (nét đứt)."
  },
  {
    track: 3,
    id: "Q3-07",
    level: 1,
    q: "Mô hình hóa quy trình duyệt đơn xin nghỉ phép: 'Nếu số ngày nghỉ <= 2 ngày thì chỉ cần Trưởng nhóm duyệt; Nếu số ngày nghỉ > 2 ngày thì bắt buộc phải có cả Trưởng nhóm và Trưởng phòng nhân sự cùng duyệt độc lập'. Sau Gateway rẽ nhánh, BA nên sử dụng cấu trúc cổng nào là chuẩn xác nhất?",
    opts: [
      "Sử dụng 1 Exclusive Gateway để rẽ 2 nhánh: Nhánh 1 (<= 2 ngày) đi đến Activity 'Trưởng nhóm duyệt'; Nhánh 2 (> 2 ngày) đi vào 1 Parallel Gateway (AND) để kích hoạt song song cả 'Trưởng nhóm duyệt' và 'Trưởng phòng duyệt'.",
      "Sử dụng một Start Event mới cho mỗi loại đơn nghỉ phép.",
      "Chỉ sử dụng 1 Exclusive Gateway duy nhất và nối thẳng vào 1 Activity gộp chung.",
      "Sử dụng một Terminate Event để kết thúc quy trình nếu nhân viên nghỉ quá 2 ngày."
    ],
    ans: 0,
    exp: "Đáp án đúng là A. Phân nhánh logic theo số ngày nghỉ là loại trừ nhau (<=2 hoặc >2) nên dùng Exclusive Gateway (XOR). Ở nhánh > 2 ngày cần cả hai người cùng duyệt độc lập nên dùng Parallel Gateway (AND) để kích hoạt 2 luồng song song."
  },
  {
    track: 3,
    id: "Q3-08",
    level: 1,
    q: "Quy trình thanh toán trực tuyến: Khách hàng có tối đa 15 phút để quét mã QR thanh toán; nếu sau 15 phút chưa nhận được tiền, hệ thống tự động hủy đơn và hoàn lại tồn kho. Trong BPMN 2.0, cơ chế xử lý ngoại lệ này được biểu diễn chuẩn xác nhất bằng ký hiệu nào?",
    opts: [
      "Một Start Event hình tròn rỗng nối trực tiếp vào Database.",
      "Một Intermediate Timer Boundary Event (Sự kiện đồng hồ đo thời gian gắn trên đường biên của Subprocess hoặc Activity thanh toán) kích hoạt luồng hủy đơn khi hết hạn 15 phút.",
      "Một End Event có biểu tượng dấu chéo màu đỏ ở góc màn hình.",
      "Một Sequence Flow nét đứt chạy vòng quanh toàn bộ Pool."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Boundary Timer Event gắn trên đường viền của Activity/Subprocess là mẫu thiết kế chuẩn (Pattern) trong BPMN để xử lý Timeout: nếu sự kiện chính chưa xong trong thời hạn quy định, luồng ngoại lệ sẽ bị ngắt và kích hoạt hành động xử lý quá hạn."
  },
  {
    track: 3,
    id: "Q3-09",
    level: 1,
    q: "Trong quy trình tiếp nhận hàng nhập kho: Khi kiện hàng đến, nhân viên A thực hiện 'Kiểm đếm số lượng vật lý' và nhân viên B thực hiện 'Quét mã vạch kiểm tra hạn sử dụng'. Hai công việc này diễn ra hoàn toàn độc lập cùng lúc. Sau khi cả hai hoàn thành xong, kiện hàng mới được 'Cập nhật trạng thái nhập kho'. Cặp Gateway nào được sử dụng?",
    opts: [
      "Một Exclusive Gateway để tách nhánh và một Inclusive Gateway để gộp nhánh.",
      "Một Parallel Gateway (AND-Split) để phân tách thành 2 luồng song song và một Parallel Gateway (AND-Join) để đồng bộ hóa, chờ cả hai nhánh cùng xong mới đi tiếp.",
      "Một Event-based Gateway để chờ khách hàng gọi điện xác nhận.",
      "Không cần dùng Gateway nào, chỉ cần vẽ 2 mũi tên xuất phát từ cùng 1 Activity."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Mô hình Fork-Join kinh điển: Parallel Gateway (AND-Split) chia luồng song song, và Parallel Gateway (AND-Join) đóng vai trò điểm đồng bộ (Synchronization Barrier) chờ đủ tất cả nhánh hoàn thành mới mở luồng tiếp theo."
  },
  {
    track: 3,
    id: "Q3-10",
    level: 1,
    q: "Sự khác biệt giữa một 'Embedded Sub-process' (Quy trình con nhúng cục bộ) và một 'Call Activity / Reusable Sub-process' (Quy trình con tái sử dụng toàn cục) trong BPMN 2.0 là gì?",
    opts: [
      "Embedded Sub-process có viền nét đậm hơn Call Activity.",
      "Embedded Sub-process phụ thuộc hoàn toàn vào ngữ cảnh và dữ liệu của quy trình cha (không thể gọi độc lập từ nơi khác); Call Activity đại diện cho một quy trình độc lập được định nghĩa toàn cục, có thể được tái sử dụng bởi nhiều quy trình nghiệp vụ khác nhau.",
      "Call Activity chỉ dùng để gọi điện thoại cho khách hàng, không thể chứa các hoạt động phần mềm.",
      "Embedded Sub-process bắt buộc phải vẽ trên một trang giấy riêng biệt."
    ],
    ans: 1,
    exp: "Đáp án đúng là B theo chuẩn BPMN 2.0. Call Activity (viền đậm) là thực thể quy trình tái sử dụng (như quy trình 'Xác thực OTP' hay 'Thanh toán' dùng chung cho nhiều ứng dụng). Embedded Sub-process chỉ tồn tại cục bộ trong lòng quy trình cha."
  },
  {
    track: 3,
    id: "Q3-11",
    level: 1,
    q: "Khi phân tích biểu đồ As-Is của quy trình cấp phép xây dựng, BA nhận thấy: Tại bước 'Thẩm định hồ sơ kỹ thuật', thời gian chờ đợi (Queue Time) trung bình là 18 ngày, trong khi thời gian xử lý thực tế (Processing Time) của chuyên viên chỉ mất 4 tiếng. Đây là dấu hiệu của hiện tượng gì?",
    opts: [
      "Quy trình đang hoạt động với hiệu suất tối ưu tuyệt đối.",
      "Nút thắt cổ chai nghiêm trọng (Bottleneck) do quá tải nguồn lực thẩm định, thiếu cơ chế cân bằng tải hoặc quy trình chuyển giao hồ sơ thủ công bị ứ đọng.",
      "Lập trình viên viết mã nguồn phần mềm bị lỗi rò rỉ bộ nhớ (Memory Leak).",
      "Dữ liệu bản đồ quy hoạch bị sai lệch tọa độ địa lý."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Trong phân tích quy trình (Value Stream Mapping), tỷ lệ thời gian gia tăng giá trị (4h) quá nhỏ so với thời gian chờ lãng phí (18 ngày) là bằng chứng rõ ràng của điểm nghẽn năng lực (Resource Bottleneck) hoặc độ trễ chuyển giao hồ sơ."
  },
  {
    track: 3,
    id: "Q3-12",
    level: 1,
    q: "Trong BPMN 2.0, khi nào BA sử dụng 'Message Flow' thay vì 'Data Association'?",
    opts: [
      "Khi muốn lưu trữ dữ liệu vào đĩa cứng máy chủ.",
      "Khi mô tả sự trao đổi thông điệp/tín hiệu giao tiếp giữa hai đối tượng tham gia độc lập thuộc hai Pool khác nhau; còn Data Association dùng để liên kết giữa Activity và Kho dữ liệu (Data Store / Data Object) bên trong cùng quy trình.",
      "Hai ký hiệu này hoàn toàn đồng nghĩa và có thể dùng thay thế tự do.",
      "Khi vẽ sơ đồ mạng máy tính cục bộ LAN trong văn phòng."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Message Flow thể hiện sự tương tác liên tổ chức giữa các Pool. Data Association (đường chấm có mũi tên hở) kết nối luồng công việc với Data Objects hoặc Data Stores nội bộ."
  },
  {
    track: 3,
    id: "Q3-13",
    level: 1,
    q: "Khi mô hình hóa vòng đời đơn hàng thương mại điện tử bằng Biểu đồ Chuyển trạng thái (State Machine Diagram), thứ tự chuyển dịch trạng thái nào sau đây là hợp lệ và chặt chẽ nhất?",
    opts: [
      "Đã giao hàng ➔ Chờ thanh toán ➔ Đang vận chuyển ➔ Đã tạo đơn.",
      "Tạo mới (Created) ➔ Chờ thanh toán (Pending Payment) ➔ Đã thanh toán (Paid) ➔ Đang đóng gói (Processing) ➔ Đang giao (In Transit) ➔ Giao thành công (Delivered) / Hoàn hàng (Returned).",
      "Đã hủy (Cancelled) ➔ Đã thanh toán (Paid) ➔ Tạo mới (Created).",
      "Đang giao hàng ➔ Chờ phê duyệt ngân sách ➔ Đóng tài khoản."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Vòng đời đơn hàng phản ánh tính logic thời gian của nghiệp vụ: từ khởi tạo, xác nhận thanh toán, xử lý kho, vận chuyển đến giao thành công hoặc kích hoạt luồng trả hàng ngoại lệ."
  },

  // Level 2: Nâng cao (Q3-14 -> Q3-20)
  {
    track: 3,
    id: "Q3-14",
    level: 2,
    q: "Quy trình xử lý đơn hàng đa kho phức tạp: Khi nhận đơn hàng lớn, hệ thống kiểm tra Kho gần nhất; nếu thiếu hàng, hệ thống kích hoạt đồng thời kiểm tra 2 kho vệ tinh A và B. Ràng buộc: Chỉ cần 1 trong 2 kho vệ tinh xác nhận có đủ hàng trước là chốt đơn điều phối từ kho đó ngay, đồng thời lệnh kiểm tra tại kho vệ tinh còn lại phải bị hủy lập tức để tránh khóa hàng trùng lặp. Mô hình BPMN chuẩn xác nhất là gì?",
    opts: [
      "Sử dụng 1 Exclusive Gateway thông thường nối tuần tự qua từng kho.",
      "Bọc việc kiểm tra hai kho vệ tinh trong một Sub-process chạy song song, sử dụng Event-based Gateway hoặc Intermediary Message Event kích hoạt một Terminate End Event bên trong Sub-process đó ngay khi một kho xác nhận thành công.",
      "Vẽ 2 Pool riêng cho 2 kho vệ tinh và dùng 10 đường Sequence Flow nối đan chéo qua lại.",
      "Yêu cầu nhân viên kho gọi điện thoại cho nhau để tự thương lượng."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Mẫu thiết kế 'Race Condition / First-come First-served' trong BPMN: luồng chạy song song nhưng bị ngắt và hủy bỏ nhánh thua cuộc ngay khi nhánh đầu tiên chạm mốc thành công, đảm bảo giải phóng tài nguyên hàng hóa tức thì."
  },
  {
    track: 3,
    id: "Q3-15",
    level: 2,
    q: "Quy trình giải quyết chế độ tai nạn lao động liên cơ quan: Doanh nghiệp gửi hồ sơ sang Cơ quan Bảo hiểm Xã hội (BHXH); BHXH gửi yêu cầu xác nhận thương tật sang Bệnh viện; Bệnh viện gửi kết quả giám định y khoa về BHXH; BHXH duyệt chi và gửi thông báo cho Sở LĐTB&XH. Quá trình trao đổi này có thể bị trì hoãn hàng tuần và hồ sơ có thể bị trả về yêu cầu bổ sung nhiều lần. Kiến trúc mô hình BPMN nào là phù hợp nhất?",
    opts: [
      "Gộp tất cả 4 cơ quan vào làm 4 Lane trong cùng 1 Pool duy nhất và dùng Sequence Flow nối tuần tự.",
      "Mô hình hóa dưới dạng sơ đồ Cộng tác (Collaboration Diagram) gồm 4 Pool độc lập đại diện cho 4 pháp nhân; sử dụng Message Flow để trao đổi thông điệp bất đồng bộ kèm các Intermediate Message Catching Event và Timer Event để quản lý thời hạn SLA phản hồi và vòng lặp bổ sung hồ sơ.",
      "Vẽ 1 hình chữ nhật lớn duy nhất ghi tên cả 4 cơ quan rồi dùng mũi tên chỉ thẳng vào ô 'Kết thúc'.",
      "Không thể mô hình hóa được vì các cơ quan nhà nước không dùng phần mềm chung."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Do 4 cơ quan là 4 pháp nhân độc lập có thẩm quyền và hệ thống riêng, bắt buộc phải dùng 4 Pool độc lập giao tiếp qua Message Flow bất đồng bộ. Gộp chung vào 1 Pool (A) là vi phạm nghiêm trọng chuẩn BPMN."
  },
  {
    track: 3,
    id: "Q3-16",
    level: 2,
    q: "Trong quy trình thanh toán vé xem phim trực tuyến: Khách hàng đã bị trừ tiền từ tài khoản ví điện tử, nhưng rạp chiếu phim phản hồi hết ghế do xung đột phút chót. Hệ thống phải kích hoạt 'Bù trừ giao dịch' (Compensation) để hoàn tiền tự động và hủy mã giữ chỗ. BPMN 2.0 cung cấp cơ chế chuẩn nào cho kịch bản giao dịch nghiệp vụ này?",
    opts: [
      "Một Start Event loại lỗi.",
      "Sử dụng Transaction Subprocess có gắn Compensation Boundary Event kết nối với Compensation Activity (Hoàn tiền vào ví điện tử) khi nhận được Cancel End Event.",
      "Vẽ một mũi tên quay ngược trở lại bước đầu tiên của quy trình mà không làm gì thêm.",
      "Tắt máy chủ thanh toán để hệ thống tự khởi động lại vào ngày hôm sau."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Transaction Subprocess và Compensation Mechanism (ký hiệu hai tam giác tua ngược ⯬⯬) là mẫu thiết kế chuẩn trong BPMN 2.0 dành cho bài toán Saga / Bù trừ giao dịch phân tán khi một bước nghiệp vụ thất bại cần hoàn tác các bước trước đó."
  },
  {
    track: 3,
    id: "Q3-17",
    level: 2,
    q: "Quy trình xử lý hồ sơ hành chính công một cửa: Khi có một 'Công văn hỏa tốc' gửi đến từ Văn phòng Ủy ban Nhân dân Tỉnh, toàn bộ quy trình xử lý văn bản thông thường đang diễn ra tại phòng ban phải bị tạm ngắt ngay lập tức để ưu tiên xử lý công văn hỏa tốc trong vòng 2 giờ. Ký hiệu BPMN nào thể hiện chính xác hành vi này?",
    opts: [
      "Một đường Sequence Flow nét đứt nối vào góc dưới màn hình.",
      "Một Interrupting Escalation (hoặc Signal) Boundary Event gắn trên Subprocess xử lý văn bản thông thường, khi sự kiện xảy ra sẽ lập tức ngắt luồng hiện tại và chuyển hướng điều khiển sang luồng xử lý ưu tiên hỏa tốc.",
      "Một End Event loại Terminate để xóa bỏ vĩnh viễn toàn bộ công văn thông thường trong hệ thống.",
      "Không thể vẽ được trên sơ đồ BPMN mà phải ghi chú bằng văn bản giấy đính kèm."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Interrupting Boundary Event (viền kép nét liền) có cơ chế ngắt cưỡng bức luồng công việc đang thực thi để chuyển sang luồng xử lý khẩn cấp (Escalation/Priority Handling), đúng bản chất nghiệp vụ công văn hỏa tốc."
  },
  {
    track: 3,
    id: "Q3-18",
    level: 2,
    q: "Smart Factory: Dây chuyền robot AGV vận chuyển linh kiện tự động gặp chướng ngại vật vật lý bất ngờ trên đường ray (vỡ hộp hàng rơi vãi). Cảm biến an toàn phát hiện sự cố. Hệ thống WCS phải: (1) Dừng khẩn cấp robot gặp sự cố; (2) Phát tín hiệu cô lập khu vực đường ray đó; (3) Tự động tái định tuyến (Reroute) các robot khác đi theo đường tránh mà không làm tê liệt toàn bộ dây chuyền. Mô hình hóa logic này bằng BPMN đòi hỏi sự kết hợp nào?",
    opts: [
      "Chỉ dùng một Exclusive Gateway thông thường.",
      "Sử dụng Non-interrupting Error Boundary Event kết hợp với Parallel Gateway để phân nhánh đồng thời: một nhánh cô lập và gọi kỹ thuật viên hiện trường, một nhánh gửi tín hiệu Message Broadcast cập nhật bản đồ định tuyến mới cho các robot đang hoạt động.",
      "Vẽ sơ đồ nối trực tiếp từ cảm biến vào nút tắt nguồn điện nhà máy.",
      "Dùng 100 User Task thủ công để công nhân tự điều khiển robot bằng tay."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Sự cố cục bộ của 1 robot không được phép làm dừng toàn nhà máy. Dùng Parallel Gateway phân nhánh xử lý song song (vừa cô lập sửa chữa vừa phát lệnh Reroute cho các robot khác) duy trì tính sẵn sàng liên tục của dây chuyền."
  },
  {
    track: 3,
    id: "Q3-19",
    level: 2,
    q: "Tái thiết kế quy trình To-Be cho chuỗi cung ứng dược phẩm: Quy trình As-Is yêu cầu Dược sĩ trưởng phải ký duyệt thủ công 100% đơn đặt hàng thuốc cảm sốt thông thường của 500 nhà thuốc chi nhánh mỗi ngày (trung bình 3.000 đơn/ngày), gây trễ hạn giao thuốc nghiêm trọng. BA đề xuất nguyên tắc tối ưu hóa quy trình nào trong mô hình To-Be?",
    opts: [
      "Thuê thêm 10 Dược sĩ trưởng nữa để cùng ngồi ký duyệt đơn hàng thủ công cả ngày.",
      "Áp dụng nguyên tắc 'Quản lý theo ngoại lệ' (Management by Exception): Hệ thống tự động phê duyệt và đẩy thẳng xuống kho xuất hàng đối với 95% đơn hàng thuốc thông thường nằm trong hạn mức và không có cảnh báo; chỉ chuyển hướng (Route) đến Dược sĩ trưởng phê duyệt đối với các đơn hàng chứa thuốc kiểm soát đặc biệt (gây nghiện, hướng thần) hoặc đơn có số lượng tăng đột biến >300%.",
      "Bỏ hoàn toàn khâu kiểm soát dược phẩm và cho phép nhà thuốc tự do xuất kho tùy ý.",
      "Bắt các nhà thuốc chỉ được đặt hàng 1 lần duy nhất trong tháng."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. 'Management by Exception' (STP - Straight-Through Processing) là nguyên lý tái thiết kế quy trình kinh điển: giải phóng 95% khối lượng công việc thông thường cho máy tính xử lý tự động, chỉ đưa chuyên gia vào các trường hợp ngoại lệ rủi ro cao."
  },
  {
    track: 3,
    id: "Q3-20",
    level: 2,
    q: "Khi rà soát một sơ đồ BPMN quy trình mua sắm do đội nghiệp vụ vẽ, BA nhận thấy: Sơ đồ có hơn 50 Activity, 20 Gateway đan chéo chằng chịt không theo cấu trúc phân tầng (hiện tượng 'Spaghetti Process'), không ai có thể đọc hiểu được toàn cục. Chiến lược tái cấu trúc (Refactoring) mô hình quy trình nào là chuẩn mực nhất?",
    opts: [
      "Xóa bỏ sơ đồ và chuyển toàn bộ sang viết văn xuôi dài 50 trang.",
      "Thu nhỏ kích thước font chữ và nén toàn bộ sơ đồ vào một trang giấy A0.",
      "Áp dụng nguyên tắc Phân rã theo cấp độ (Hierarchical Process Modeling): Xây dựng biểu đồ Cấp 0 (Level 0 - Value Chain / Quy trình tổng quan 5-7 bước chính); sau đó đóng gói các cụm hoạt động phức tạp thành các Sub-process / Call Activity ở Cấp 1 và Cấp 2, tuân thủ nguyên tắc 7±2 phần tử trên một màn hình hiển thị.",
      "Chỉ giữ lại 3 bước đầu tiên và cắt bỏ toàn bộ phần sau của quy trình."
    ],
    ans: 2,
    exp: "Đáp án đúng là C. Kỹ thuật Hierarchical Decomposition (Phân rã đa cấp độ) là chìa khóa quản trị độ phức tạp trong BPMN: tầng cao nhất nhìn tổng thể (Executive view), các tầng con đi sâu vào chi tiết kỹ thuật (Operational view), đảm bảo tính công thái học và khả năng bảo trì."
  }
];
