# Vy Workspace - Nền tảng học tập & Case Study Business Analyst

Dự án cung cấp giao diện LMS, dashboard học tập, flashcard và 12 tình huống case study BA thực tế (HTML, CSS, JavaScript thuần).

---

## 🚀 Hướng dẫn Triển khai lên Render (render.com)

Render không hỗ trợ upload trực tiếp file `.zip` từ máy tính lên dashboard, mà triển khai code qua **GitHub/GitLab Repository**.

### Bước 1: Đưa mã nguồn lên GitHub
1. Tạo một repository mới trên GitHub (ví dụ: `vy-workspace`).
2. Tải/đẩy toàn bộ mã nguồn của thư mục này lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Vy Workspace"
   git branch -M main
   git remote add origin https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git
   git push -u origin main
   ```

---

### Bước 2: Triển khai trên Render

Bạn có thể chọn **1 trong 2 cách** sau:

#### 👉 Cách 1: Dùng Render Blueprint (Tự động - Khuyên dùng)
Dự án đã có sẵn file cấu hình chuẩn **`render.yaml`**:
1. Đăng nhập [render.com](https://dashboard.render.com).
2. Nhấn nút **New +** ở góc trên bên phải -> Chọn **Blueprint**.
3. Kết nối với repository GitHub vừa tạo.
4. Render sẽ tự động đọc file `render.yaml` và thiết lập mọi thông số (Tên: `vy-workspace`, Runtime: `static`, Build: `node verify-cases.cjs && node dist/test-scale-components.cjs && node dist/test-interview.cjs`, Publish: `./dist`).
5. Nhấn **Apply** để hoàn tất triển khai.

#### 👉 Cách 2: Tạo Static Site thủ công (Miễn phí 100%)
1. Trên Render Dashboard, nhấn **New +** -> Chọn **Static Site**.
2. Chọn repository của bạn.
3. Điền các thông số:
   - **Name**: `vy-workspace`
   - **Branch**: `main`
   - **Build Command**: `node verify-cases.cjs && node dist/test-scale-components.cjs && node dist/test-interview.cjs` (hoặc để trống)
   - **Publish Directory**: `dist`
4. Trong mục **Advanced** -> **Redirects/Rewrites**:
   - Chọn **Add Rule**: `Rewrite` | Source: `/*` | Destination: `/index.html`
5. Nhấn **Create Static Site**.

*(Nếu bạn muốn chạy dạng Node.js Web Service: Dự án đã được bổ sung sẵn file `package.json` và `server.js`. Render sẽ tự chạy lệnh `node server.js` và lắng nghe cổng $PORT).*

---

## 💻 Chạy thử nghiệm ở máy local

- Mở trực tiếp file `dist/index.html` bằng trình duyệt web.
- Hoặc chạy server nội bộ:
  ```bash
  npm start
  # Hoặc: python -m http.server 5174 --directory dist
  ```
- Chạy kiểm tra tính đúng đắn của dữ liệu case study:
  ```bash
  npm test
  # Hoặc: node verify-cases.cjs
  ```

---

## 📂 Cấu trúc thư mục

- `dist/`: Toàn bộ giao diện web tĩnh (HTML, CSS, JS, icon, UI).
  - `dist/index.html`: Trang chính LMS.
  - `dist/interview.js`, `dist/interview.css`: Phòng phỏng vấn mô phỏng BA với 10 tình huống thực tế, hỗ trợ Mock & Guided mode, câu hỏi vặn và rubric đánh giá 6 tiêu chí STAR.
  - `dist/test-interview.cjs`: Bộ kiểm thử tự động phòng phỏng vấn BA.
  - `dist/scale-data.js`: Dữ liệu 9 module, 40 bài học kiến trúc phân tán (100% miễn phí, đã bỏ bảng giá) và pháp lý.
  - `dist/scale-components.js`: Hệ thống 16+ UI components tương tác (Learning Header, Explanation, Sơ đồ SVG, MetricsPanel, Inspector, Navigation...).
  - `dist/scale-views.js`: Điều hướng và bộ điều khiển các trang Designed to Scale (#/scale, #/about, #/contact, #/caching...).
  - `dist/scale.css`: Toàn bộ phong cách thiết kế hiện đại, animation luồng dữ liệu, hỗ trợ Dark/Light mode và trợ năng ARIA.
  - `dist/test-scale-components.cjs`: Bộ kiểm thử tự động toàn diện cho hệ thống Designed to Scale.
  - `dist/cases.js`, `dist/cases-extra.js`: 12 case study BA có giải pháp & rubric chấm điểm.
  - `dist/app.js`, `dist/library.js`: Logic điều hướng, flashcard, bài học trực quan từng bước.
- `render.yaml`: File cấu hình kết nối tự động với Render (Blueprint).
- `package.json`: Khai báo dự án, scripts build/test/start.
- `server.js`: Server Node.js tĩnh nhẹ (zero-dependency) dự phòng cho Web Service.
- `verify-cases.cjs`: Bộ test tự động kiểm thử logic case study.
