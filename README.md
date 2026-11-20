# BA Academy

## Cập nhật thư viện & case study

- Thư viện theo module có filter Tất cả/Cơ bản/Nâng cao/Đang học/Chưa học, chế độ Grid/List, trạng thái từng bài và tiến độ từ các bài đã đánh dấu hoàn thành. Có 10 module, mỗi module 6 tiêu đề bài mẫu, hiển thị trước 4 bài.
- Nút menu cạnh tìm kiếm: thu gọn/mở rộng trên desktop; mở drawer trên tablet/mobile. Đóng bằng nút ×, click nền hoặc Escape. Có giữ focus trong drawer và ghi nhớ trạng thái thu gọn desktop.
- 12 case tự biên soạn: bán lẻ/tồn kho, lịch dịch vụ, phê duyệt mua sắm, thanh toán bất đồng bộ, đối soát dashboard pilot AI CSKH, CRM trùng hồ sơ, EdTech, SLA hỗ trợ CNTT, đổi trả, billing thuê bao B2B và chuyển đổi API. Tình huống, chính sách và số liệu đều giả lập.
- Mỗi case có 7 bước, gợi ý, hướng giải riêng, rubric 4 tiêu chí, bản nháp tự lưu, lịch sử các lần tự chấm và tải bài làm Markdown. Dữ liệu chỉ ở localStorage trên trình duyệt; tải file để sao lưu.
- Nguồn tham khảo phương pháp được ghi cuối mỗi case; không coi đây là bài dự án thực tế hoặc đáp án của tổ chức tham khảo.
- `node verify-cases.cjs` kiểm tra điều kiện nộp, quy đổi điểm, snapshot lịch sử, lưu dữ liệu và escape nội dung người dùng.

Giao diện LMS tiếng Việt bằng HTML, CSS và JavaScript thuần.

Mở `dist/index.html` bằng trình duyệt hoặc chạy `python -m http.server 5174 --directory dist` từ thư mục dự án.

Bao gồm dashboard, 10 track, trang bài học 3 tab, flashcard 3D, quiz mở khóa từ 70%, tìm kiếm, dark mode. Tiến độ lưu bằng localStorage trên trình duyệt hiện tại.

Đây là bản mẫu giao diện có tương tác. Các thống kê, lịch học và nội dung chuyên môn là dữ liệu minh họa; mỗi track hiện có 6 bài mẫu dùng chung, chưa phải giáo trình đầy đủ theo số lượng trên thẻ. Chưa có máy chủ, tài khoản đăng nhập hay đồng bộ tiến độ giữa thiết bị. Font Google Fonts cần kết nối mạng; nếu không có, trình duyệt dùng sans-serif.

Đã kiểm tra cú pháp JavaScript và xem giao diện desktop, tablet, mobile; kiểm tra mở bài học, chuyển tab và flashcard. Chưa kiểm thử toàn bộ chức năng đầu cuối.



Đã bỏ mục Template khỏi menu, trang nội dung và chức năng tải mẫu. Tìm kiếm trên header có thể tìm case study theo tiêu đề, mô tả, lĩnh vực và kỹ năng.
