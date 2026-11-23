module.exports = [
  // Level 0: Nền tảng (Q5-01 -> Q5-05)
  {
    track: 5,
    id: "Q5-01",
    level: 0,
    q: "Trong ngôn ngữ truy vấn SQL tiêu chuẩn, sự khác biệt căn bản giữa phép nối 'INNER JOIN' và 'LEFT JOIN' là gì?",
    opts: [
      "INNER JOIN chạy nhanh gấp 10 lần LEFT JOIN trong mọi trường hợp.",
      "INNER JOIN chỉ trả về các bản ghi có sự trùng khớp khóa ở cả hai bảng; LEFT JOIN trả về toàn bộ bản ghi từ bảng bên trái kèm dữ liệu trùng khớp từ bảng bên phải (nếu không có khớp thì các cột bảng phải nhận giá trị NULL).",
      "LEFT JOIN bắt buộc phải xóa bỏ các bản ghi trùng lặp trong cơ sở dữ liệu.",
      "INNER JOIN chỉ áp dụng cho bảng có ít hơn 100 dòng dữ liệu."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. INNER JOIN là phép giao (Intersection) giữa hai bảng; LEFT JOIN giữ lại 100% bản ghi của bảng bên trái (Left table), điền NULL cho các trường không tìm thấy đối ứng bên bảng phải."
  },
  {
    track: 5,
    id: "Q5-02",
    level: 0,
    q: "Mệnh đề 'WHERE' và mệnh đề 'HAVING' trong câu lệnh SQL khác nhau như thế nào khi làm việc với phép nhóm dữ liệu (GROUP BY)?",
    opts: [
      "WHERE lọc dữ liệu trên từng hàng riêng lẻ trước khi thực hiện nhóm dữ liệu; HAVING lọc dữ liệu trên các giá trị tổng hợp (Aggregate values) sau khi đã nhóm dữ liệu bằng GROUP BY.",
      "WHERE chỉ dùng cho số, còn HAVING chỉ dùng cho chuỗi ký tự văn bản.",
      "HAVING bắt buộc phải đứng trước mệnh đề FROM.",
      "Hai mệnh đề này hoàn toàn giống nhau và có thể đổi chỗ tự do cho nhau."
    ],
    ans: 0,
    exp: "Đáp án đúng là A. Thứ tự thực thi logic trong SQL: FROM ➔ WHERE (lọc từng dòng) ➔ GROUP BY ➔ HAVING (lọc trên kết quả hàm tổng hợp như SUM, COUNT, AVG) ➔ SELECT ➔ ORDER BY."
  },
  {
    track: 5,
    id: "Q5-03",
    level: 0,
    q: "Khái niệm 'Khóa ngoại' (Foreign Key) và 'Tính toàn vẹn tham chiếu' (Referential Integrity) trong cơ sở dữ liệu quan hệ có ý nghĩa gì?",
    opts: [
      "Dùng để dịch các câu lệnh SQL sang tiếng nước ngoài.",
      "Khóa ngoại là một trường trong một bảng liên kết với Khóa chính của bảng khác; Tính toàn vẹn tham chiếu đảm bảo không thể tạo ra bản ghi con tham chiếu đến một bản ghi cha không tồn tại, và ngăn chặn việc vô tình xóa bản ghi cha khi dữ liệu con vẫn còn phụ thuộc.",
      "Khóa ngoại chỉ dùng để mã hóa mật khẩu người dùng trong bảng Users.",
      "Khóa ngoại cho phép người dùng nhập tự do bất kỳ giá trị nào mà không cần kiểm tra tính hợp lệ."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Ràng buộc toàn vẹn tham chiếu (Foreign Key Constraint) ngăn chặn hiện tượng dữ liệu mồ côi (Orphan records), ví dụ không thể tạo đơn hàng cho một `customer_id` không hề tồn tại trong bảng Customers."
  },
  {
    track: 5,
    id: "Q5-04",
    level: 0,
    q: "Sự khác biệt cốt lõi giữa hệ thống Cơ sở dữ liệu Giao dịch (OLTP) và Kho dữ liệu Phân tích (OLAP / Data Warehouse) là gì?",
    opts: [
      "OLTP dùng để in báo cáo cuối năm, còn OLAP dùng để khách hàng bấm mua hàng trên website.",
      "OLTP (Online Transaction Processing) tối ưu hóa cho các thao tác đọc/ghi giao dịch nhanh, tần suất cao, dữ liệu chuẩn hóa chi tiết; OLAP (Online Analytical Processing) tối ưu hóa cho các truy vấn phức tạp, tổng hợp dữ liệu lịch sử lớn phục vụ báo cáo quản trị và BI.",
      "OLTP chỉ hoạt động trên mạng nội bộ, còn OLAP chỉ chạy trên điện thoại di động.",
      "OLTP không cần sao lưu dữ liệu, còn OLAP bắt buộc phải sao lưu từng giây."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. OLTP (như MySQL, PostgreSQL cho đơn hàng) cần tốc độ commit giao dịch nhanh và chuẩn hóa (Normalized 3NF). OLAP (như BigQuery, Snowflake) phi chuẩn hóa (Star/Snowflake Schema) để quét hàng triệu dòng phục vụ phân tích xu hướng."
  },
  {
    track: 5,
    id: "Q5-05",
    level: 0,
    q: "Giá trị 'NULL' trong ngôn ngữ SQL được định nghĩa chính xác như thế nào và nó ảnh hưởng ra sao đến hàm đếm COUNT?",
    opts: [
      "NULL tương đương với số 0 hoặc chuỗi ký tự rỗng ''; hàm COUNT(column) luôn đếm cả giá trị NULL.",
      "NULL đại diện cho giá trị chưa biết hoặc dữ liệu bị thiếu (Unknown/Missing value); hàm COUNT(column) sẽ bỏ qua (không đếm) các giá trị NULL, trong khi COUNT(*) đếm toàn bộ số lượng hàng bất kể có NULL hay không.",
      "NULL là một lỗi cú pháp khiến câu truy vấn SQL bị dừng hoạt động ngay lập tức.",
      "Phép so sánh `column = NULL` luôn luôn trả về kết quả TRUE trong SQL."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. NULL không phải số 0 hay rỗng. `COUNT(column_name)` chỉ đếm các dòng non-null; `COUNT(*)` đếm tổng số dòng. Ngoài ra, phép so sánh với NULL phải dùng `IS NULL` hoặc `IS NOT NULL`, dùng toán tử `=` luôn trả về Unknown."
  },

  // Level 1: Vận dụng (Q5-06 -> Q5-13)
  {
    track: 5,
    id: "Q5-06",
    level: 1,
    q: "BA cần xuất danh sách các khách hàng đã đăng ký tài khoản nhưng chưa từng phát sinh bất kỳ đơn hàng nào trong hệ thống. Câu lệnh SQL nào thể hiện logic chuẩn xác nhất?",
    opts: [
      "SELECT * FROM Customers INNER JOIN Orders ON Customers.id = Orders.customer_id;",
      "SELECT Customers.id, Customers.name FROM Customers LEFT JOIN Orders ON Customers.id = Orders.customer_id WHERE Orders.id IS NULL;",
      "SELECT * FROM Customers WHERE id IN (SELECT customer_id FROM Orders);",
      "DELETE FROM Customers WHERE Orders.id IS NULL;"
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Đây là mẫu truy vấn Anti-Join kinh điển trong SQL: dùng `LEFT JOIN` với bảng Orders rồi lọc những dòng có `Orders.id IS NULL` để tìm các bản ghi bên trái không có bất kỳ liên kết nào bên phải."
  },
  {
    track: 5,
    id: "Q5-07",
    level: 1,
    q: "BA muốn tính giá trị đơn hàng trung bình (AOV) theo từng danh mục sản phẩm trong tháng 10/2026, nhưng chỉ hiển thị các danh mục có tổng số đơn hàng lớn hơn 50 đơn. Đoạn truy vấn nào sắp xếp đúng các mệnh đề?",
    opts: [
      "SELECT category_id, AVG(total_amount) FROM Orders WHERE order_date >= '2026-10-01' AND order_date < '2026-11-01' GROUP BY category_id HAVING COUNT(id) > 50;",
      "SELECT category_id, AVG(total_amount) FROM Orders HAVING COUNT(id) > 50 WHERE order_date = '10/2026' GROUP BY category_id;",
      "SELECT category_id, AVG(total_amount) FROM Orders GROUP BY category_id WHERE COUNT(id) > 50;",
      "SELECT category_id, SUM(total_amount) FROM Orders WHERE COUNT(id) > 50 GROUP BY category_id;"
    ],
    ans: 0,
    exp: "Đáp án đúng là A. Mệnh đề `WHERE` lọc theo khoảng thời gian trước khi nhóm dòng; `GROUP BY category_id` thực hiện gom nhóm; và `HAVING COUNT(id) > 50` lọc các nhóm có số lượng thỏa mãn điều kiện tổng hợp."
  },
  {
    track: 5,
    id: "Q5-08",
    level: 1,
    q: "Một báo cáo kinh doanh ghi nhận chỉ số Người dùng hoạt động hàng tháng (Monthly Active Users - MAU). BA phát hiện câu lệnh SQL đang dùng là `SELECT COUNT(user_id) FROM User_Activity_Log WHERE activity_month = '2026-10'`. Lỗi sai logic nghiêm trọng ở đây là gì?",
    opts: [
      "Không có lỗi nào, câu lệnh đã hoàn hảo.",
      "Câu lệnh này đếm tổng số lượt hành động (Events) chứ không đếm số lượng người dùng độc nhất; một người dùng đăng nhập 50 lần sẽ bị đếm thành 50 người, làm thổi phồng chỉ số MAU. Cần sửa thành `COUNT(DISTINCT user_id)`.",
      "Phải đổi thành hàm `SUM(user_id)` mới tính đúng số người dùng.",
      "Phải xóa mệnh đề WHERE để lấy dữ liệu toàn bộ các năm trước."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Đây là lỗi phổ biến nhất của người mới học SQL: dùng `COUNT(user_id)` trên bảng log giao dịch dẫn đến việc trùng lặp người dùng. Đo lường MAU/DAU bắt buộc phải dùng `COUNT(DISTINCT user_id)`."
  },
  {
    track: 5,
    id: "Q5-09",
    level: 1,
    q: "Để kiểm tra tính toàn vẹn dữ liệu đơn hàng, BA chạy truy vấn đối chiếu giữa giá bán thực tế lưu trong chi tiết đơn hàng (`Order_Items.unit_price`) và giá niêm yết của sản phẩm (`Products.price`). Phát hiện có sự sai lệch ở 5% số dòng đơn hàng cũ. Kết luận phân tích nào là hợp lý nhất?",
    opts: [
      "Cơ sở dữ liệu bị hỏng hoàn toàn, cần xóa bảng Order_Items đi tạo lại.",
      "Đây là đặc thù nghiệp vụ đúng: Bảng `Order_Items` phải lưu lại giá lịch sử tại thời điểm mua (Snapshot Price), trong khi `Products.price` là giá hiện hành đã bị thay đổi theo thời gian; nếu có chênh lệch ở các đơn hàng phát sinh sau khi đổi giá niêm yết thì đó là hành vi chuẩn xác.",
      "Lập trình viên đã ăn cắp tiền của công ty bằng cách sửa giá trong cơ sở dữ liệu.",
      "Tất cả các sản phẩm có giá sai lệch đều là hàng giả."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Trong thiết kế CSDL thương mại điện tử, chi tiết đơn hàng bắt buộc phải lưu giá tại thời điểm giao dịch (`historical_price`). Giá trong bảng Products thay đổi trong tương lai không được phép làm thay đổi số tiền của các hóa đơn lịch sử."
  },
  {
    track: 5,
    id: "Q5-10",
    level: 1,
    q: "Khi lập tài liệu Từ điển Dữ liệu (Data Dictionary) cho bảng `Inventory_Transactions` (Giao dịch kho hàng), trường `quantity` (Số lượng xuất nhập) nên được định nghĩa kiểu dữ liệu và ràng buộc nào là chặt chẽ nhất đối với hàng hóa bán theo đơn vị chiếc?",
    opts: [
      "Kiểu dữ liệu VARCHAR(255) cho phép nhập tùy ý chữ và số.",
      "Kiểu dữ liệu INTEGER, ràng buộc NOT NULL, kết hợp kiểm tra CHECK (quantity != 0) để đảm bảo mọi giao dịch đều phải có số lượng cụ thể và không chấp nhận giá trị bằng 0.",
      "Kiểu dữ liệu BOOLEAN chỉ lưu giá trị Đúng/Sai.",
      "Không cần định nghĩa kiểu dữ liệu để hệ quản trị tự động đoán."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Số lượng hàng hóa đếm được phải là số nguyên (INTEGER), bắt buộc có giá trị (NOT NULL) và giao dịch kho phải có số lượng khác 0 (CHECK constraint)."
  },
  {
    track: 5,
    id: "Q5-11",
    level: 1,
    q: "BA muốn phân loại khách hàng thành 3 nhóm dựa trên tổng số tiền đã chi tiêu: 'VIP' (từ 50 triệu trở lên), 'Thân thiết' (từ 10 triệu đến dưới 50 triệu), và 'Tiêu chuẩn' (dưới 10 triệu). Cú pháp mệnh đề SQL nào thực hiện chuẩn xác?",
    opts: [
      "IF total_spent >= 50000000 THEN 'VIP' ELSE 'Tiêu chuẩn';",
      "CASE WHEN total_spent >= 50000000 THEN 'VIP' WHEN total_spent >= 10000000 THEN 'Thân thiết' ELSE 'Tiêu chuẩn' END AS customer_tier",
      "SWITCH(total_spent) CASE 50000000: 'VIP';",
      "WHERE total_spent BETWEEN 'VIP' AND 'Thân thiết'"
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Cú pháp `CASE WHEN ... THEN ... ELSE ... END` là cấu trúc điều kiện chuẩn hóa của ngôn ngữ SQL để biến đổi và gắn nhãn phân đoạn dữ liệu một cách linh hoạt."
  },
  {
    track: 5,
    id: "Q5-12",
    level: 1,
    q: "Khi hợp nhất dữ liệu danh sách khách hàng từ hai công ty sáp nhập bằng SQL, sự khác biệt giữa toán tử `UNION` và `UNION ALL` là gì?",
    opts: [
      "UNION xóa bảng dữ liệu cũ, còn UNION ALL giữ lại bảng cũ.",
      "UNION tự động lọc bỏ các bản ghi trùng lặp hoàn toàn giữa hai tập kết quả (kèm chi phí sắp xếp dữ liệu); UNION ALL giữ nguyên toàn bộ các bản ghi kể cả trùng lặp và có tốc độ thực thi nhanh hơn.",
      "UNION ALL chỉ lấy các khách hàng có tên bắt đầu bằng chữ A.",
      "Hai toán tử này hoàn toàn giống nhau 100%."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. `UNION` thực hiện thao tác loại bỏ trùng lặp (Deduplication) nên tốn tài nguyên sắp xếp (Sort/Distinct). `UNION ALL` ghép nối thuần túy (Concatenate) nhanh hơn nhiều, phù hợp khi chắc chắn hai tập dữ liệu độc lập hoặc cần giữ nguyên bản ghi trùng."
  },
  {
    track: 5,
    id: "Q5-13",
    level: 1,
    q: "Một BA thực hiện câu lệnh: `SELECT * FROM Customers JOIN Orders ON Customers.id = Orders.customer_id JOIN Addresses ON Customers.id = Addresses.customer_id`. Biết một khách hàng có 3 đơn hàng và 2 địa chỉ nhận hàng. Kết quả trả về cho khách hàng này sẽ có bao nhiêu dòng dữ liệu và hiện tượng này gọi là gì?",
    opts: [
      "Trả về đúng 1 dòng dữ liệu duy nhất.",
      "Trả về 6 dòng dữ liệu (3 đơn hàng x 2 địa chỉ); đây là hiện tượng Nhân tích Đề-các / Thổi phồng dữ liệu (Cartesian Product / Data Fan-out) do JOIN đồng thời nhiều mối quan hệ 1-Nhiều.",
      "Trả về đúng 5 dòng dữ liệu (3 + 2).",
      "Hệ thống báo lỗi cú pháp và không trả về dòng nào."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Khi JOIN đồng thời hai bảng con quan hệ 1-N (Orders và Addresses) vào cùng một bảng cha (Customers), số dòng bị nhân lên theo cấp số nhân (3 x 2 = 6). Hiện tượng Data Fan-out này làm sai lệch hoàn toàn các phép tính tổng SUM/COUNT nếu không gom nhóm cẩn thận."
  },

  // Level 2: Nâng cao (Q5-14 -> Q5-20)
  {
    track: 5,
    id: "Q5-14",
    level: 2,
    q: "Phân tích Tỷ lệ Giữ chân Khách hàng theo đoàn hệ (Retention Cohort Analysis): BA muốn tính tỷ lệ người dùng đăng ký vào Tháng 1/2026 có quay lại thực hiện giao dịch vào Tháng 2 và Tháng 3. Logic truy vấn SQL nâng cao nào là chuẩn xác nhất?",
    opts: [
      "Dùng lệnh SELECT * FROM Users WHERE register_date = 'Tháng 1' rồi đếm bằng tay trên Excel.",
      "Sử dụng bảng tạm / CTE (Common Table Expression): CTE 1 xác định ngày giao dịch đầu tiên (First Purchase Cohort) của từng `user_id`; CTE 2 nối với các giao dịch tiếp theo; dùng hàm phân tích thời gian DATE_DIFF để tính số tháng chênh lệch (Month 0, Month 1, Month 2); sau đó dùng hàm COUNT(DISTINCT user_id) kết hợp GROUP BY cohort_month và pivot tỷ lệ phần trăm.",
      "Dùng lệnh DELETE xóa toàn bộ người dùng không giao dịch ở Tháng 2 để lấy danh sách Tháng 3.",
      "Chỉ cần tính tổng số tiền của toàn công ty chia cho 12 tháng."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Phân tích Cohort đòi hỏi kỹ thuật CTE / Subquery xác định mốc First-touch của từng khách hàng, sau đó đo lường hoạt động tái mua ở các chu kỳ tiếp theo (Period Offset) bằng hàm thời gian và COUNT DISTINCT."
  },
  {
    track: 5,
    id: "Q5-15",
    level: 2,
    q: "Bài toán Đối soát Tài chính tự động: Bảng `OMS_Orders` ghi nhận trạng thái đơn hàng nội bộ, bảng `Bank_Transactions` ghi nhận sao kê tiền về từ cổng thanh toán. Cần tìm các giao dịch sai lệch rủi ro cao: (1) OMS ghi nhận 'Đã thanh toán' nhưng Bank không có tiền về; (2) Bank đã trừ tiền của khách nhưng OMS lại ghi nhận 'Đã hủy'. Mẫu truy vấn SQL nào khoanh vùng được cả hai trường hợp sai lệch này?",
    opts: [
      "Sử dụng phép nối toàn phần `FULL OUTER JOIN OMS_Orders O ON O.trans_id = B.trans_id FULL OUTER JOIN Bank_Transactions B` kết hợp điều kiện `WHERE (O.status = 'PAID' AND B.trans_id IS NULL) OR (B.status = 'SUCCESS' AND (O.status = 'CANCELLED' OR O.trans_id IS NULL))`.",
      "Chỉ dùng INNER JOIN để lấy các giao dịch hoàn toàn khớp nhau.",
      "Dùng lệnh DROP TABLE để xóa hai bảng và tải lại file sao kê mới.",
      "Chỉ cần kiểm tra tổng số tiền của hai bảng có bằng nhau hay không mà không cần soi từng giao dịch."
    ],
    ans: 0,
    exp: "Đáp án đúng là A. Phép nối `FULL OUTER JOIN` giữ lại dữ liệu của cả hai phía, cho phép dùng mệnh đề `WHERE` để bắt trọn vẹn cả 2 trường hợp bất thường đối soát: lệch phía OMS (bán hàng nhưng không có tiền) và lệch phía Bank (thu tiền khách nhưng hủy đơn)."
  },
  {
    track: 5,
    id: "Q5-16",
    level: 2,
    q: "Hệ thống IoT quan trắc môi trường thông minh: Hàng nghìn cảm biến gửi dữ liệu nhiệt độ mỗi 10 giây. Do hiện tượng nhiễu sóng vô tuyến, thỉnh thoảng xuất hiện các giá trị dị biệt ảo (Spikes: nhiệt độ nhảy vọt lên 999°C trong đúng 10 giây rồi quay về 25°C). Để vẽ biểu đồ xu hướng chính xác cho nhà máy, BA cần hướng dẫn kỹ sư dữ liệu xử lý truy vấn SQL như thế nào?",
    opts: [
      "Tính trung bình cộng AVG toàn bộ dữ liệu bao gồm cả các điểm 999°C.",
      "Sử dụng hàm cửa sổ phân tích (Window Function: `AVG() OVER (PARTITION BY sensor_id ORDER BY timestamp ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING)`) để tính trung bình trượt (Moving Average); hoặc kết hợp lọc bỏ ngoại lệ bằng ngưỡng giá trị vật lý khả thi (ví dụ WHERE temperature BETWEEN -10 AND 60) trước khi tổng hợp.",
      "Xóa bỏ hoàn toàn cảm biến đó khỏi hệ thống và mua cảm biến mới.",
      "Làm tròn tất cả nhiệt độ về số 0°C để tránh sai lệch."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Kỹ thuật lọc nhiễu chuỗi thời gian (Time-series Noise Filtering) bằng ngưỡng vật lý (Domain boundaries) và hàm cửa sổ tính trung bình trượt (Moving Average) giúp triệt tiêu các gai nhọn ảo (Spikes) mà không làm mất tính liên tục của dữ liệu."
  },
  {
    track: 5,
    id: "Q5-17",
    level: 2,
    q: "Báo cáo Dashboard phân tích doanh số của Tổng Giám đốc bị phản ánh tải quá chậm (mất 45 giây và thường xuyên bị timeout), do câu lệnh SQL phải thực hiện quét toàn bộ (Full Table Scan) và JOIN 7 bảng giao dịch lớn với hơn 100 triệu dòng mỗi lần người dùng mở trang. Là BA phân tích dữ liệu, giải pháp thiết kế nào bền vững nhất?",
    opts: [
      "Khuyên Tổng Giám đốc kiên nhẫn ngồi chờ 45 giây mỗi khi xem báo cáo.",
      "Đề xuất xây dựng Bảng Tổng hợp Tinh gọn (Data Mart / Pre-aggregated Summary Table): Sử dụng một tiến trình ETL/ELT tự động tính toán sẵn các chỉ số doanh thu theo ngày, theo danh mục và chi nhánh vào ban đêm lúc 2h00 sáng; câu truy vấn Dashboard ban ngày chỉ cần SELECT trực tiếp từ bảng tổng hợp này trong thời gian dưới 0.2 giây.",
      "Xóa bớt 90 triệu dòng dữ liệu lịch sử của công ty đi để bảng nhẹ bớt.",
      "Cắt giảm báo cáo của Tổng Giám đốc và chỉ gửi báo cáo giấy hàng tháng."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Đây là nguyên lý cốt lõi của Kiến trúc Kho Dữ liệu (Data Warehousing): tách biệt tầng dữ liệu giao dịch chi tiết (Raw Details) với tầng dữ liệu phân tích tổng hợp (Pre-aggregated Data Marts) để đáp ứng thời gian phản hồi tức thì cho Dashboard lãnh đạo."
  },
  {
    track: 5,
    id: "Q5-18",
    level: 2,
    q: "Hệ thống quản lý biến động giá sản phẩm lịch sử (Slowly Changing Dimensions - SCD Type 2): Giá niêm yết của sản phẩm thay đổi 4 lần trong năm 2026. Khi BA viết câu truy vấn tính tổng doanh thu lịch sử chính xác của các đơn hàng phát sinh trong năm, logic kết nối dữ liệu giữa bảng `Orders` và bảng lịch sử giá `Product_Price_History` phải thỏa mãn điều kiện nào?",
    opts: [
      "Luôn luôn nhân số lượng đơn hàng với mức giá đắt nhất của sản phẩm.",
      "Kết nối bằng điều kiện khoảng thời gian hiệu lực của mức giá: `ON Orders.product_id = Price_History.product_id AND Orders.order_date >= Price_History.start_date AND (Orders.order_date < Price_History.end_date OR Price_History.end_date IS NULL)`.",
      "Chỉ lấy mức giá hiện tại của ngày hôm nay để nhân ngược lại cho toàn bộ đơn hàng trong quá khứ.",
      "Không cần kết nối giá, chỉ cần cộng tổng số lượng sản phẩm bán được."
    ],
    ans: 1,
    exp: "Đáp án đúng là B theo chuẩn thiết kế kho dữ liệu Kimball (SCD Type 2): mỗi mức giá lịch sử có một khoảng hiệu lực (`start_date` đến `end_date`), đơn hàng phát sinh vào ngày nào bắt buộc phải ánh xạ đúng mức giá có hiệu lực tại thời điểm đó."
  },
  {
    track: 5,
    id: "Q5-19",
    level: 2,
    q: "Bài toán làm sạch dữ liệu định danh công dân trong Cổng dịch vụ công: Do lịch sử chuyển đổi giấy tờ, một công dân có thể xuất hiện nhiều tài khoản trùng lặp (lúc đăng ký bằng CMND 9 số cũ, lúc đăng ký bằng CCCD 12 số mới). Làm thế nào để BA thiết kế truy vấn và quy tắc đối soát tự động để hợp nhất định danh (Identity Deduplication) mà không bị gộp nhầm?",
    opts: [
      "Cứ thấy trùng Họ và Tên là tự động gộp tất cả làm một người duy nhất.",
      "Sử dụng kỹ thuật đối khớp đa tầng (Multi-tier Deterministic & Probabilistic Matching): Tầng 1 đối chiếu bảng ánh xạ lịch sử cấp đổi từ Bộ Công an (CMND cũ ➔ CCCD mới); Tầng 2 kiểm tra kết hợp đồng thời [Số điện thoại chính chủ + Ngày tháng năm sinh + Mã thẻ BHYT]; các trường hợp chỉ trùng họ tên nhưng lệch ngày sinh hoặc lệch số điện thoại phải được đẩy ra hàng đợi xác thực thủ công.",
      "Xóa toàn bộ các tài khoản đăng ký bằng CMND cũ và bắt người dân đăng ký lại từ đầu.",
      "Để nguyên dữ liệu trùng lặp và không làm gì cả."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Hợp nhất định danh (Entity Resolution) trong hệ thống hành chính công đòi hỏi thuật toán đối chiếu đa thuộc tính kết hợp bảng ánh xạ lịch sử chính thống; tuyệt đối không được gộp thuần túy theo họ tên (A) vì tỷ lệ trùng tên ở Việt Nam cực kỳ cao."
  },
  {
    track: 5,
    id: "Q5-20",
    level: 2,
    q: "Phân tích Phễu Chuyển đổi (Conversion Funnel) của sàn thương mại điện tử: Tỷ lệ người dùng bỏ cuộc (Drop-off Rate) tại bước 'Xác nhận Địa chỉ giao hàng' tăng đột biến từ 14% lên 48% ngay sau bản phát hành ứng dụng phiên bản mới. BA kết hợp phân tích dữ liệu SQL và điều tra như thế nào để tìm ra nguyên nhân gốc rễ?",
    opts: [
      "Khẳng định do người dùng tháng này hết tiền nên không muốn mua hàng nữa.",
      "Truy vấn bảng Log lỗi ứng dụng (`App_Error_Logs`) nhóm theo phiên bản ứng dụng và thiết bị: Phát hiện bản cập nhật mới có lỗi Crash hoặc không hiển thị danh sách Quận/Huyện trên các dòng máy Android đời cũ; đồng thời đo lường thời gian phản hồi API gợi ý địa chỉ (Latency > 10s gây timeout) để phối hợp với đội Dev vá lỗi khẩn cấp.",
      "Tăng gấp đôi ngân sách quảng cáo Facebook để bù đắp số người dùng bỏ cuộc.",
      "Xóa bỏ hoàn toàn bước nhập địa chỉ giao hàng khỏi ứng dụng."
    ],
    ans: 1,
    exp: "Đáp án đúng là B. Khi một bước trong phễu chuyển đổi sụt giảm đột biến sau bản cập nhật, BA dữ liệu phải đào sâu vào log lỗi kỹ thuật (Error logs phân rã theo Device/OS) và độ trễ API để tìm ra bug chức năng hoặc sự cố hiệu năng gây rào cản người dùng."
  }
];
