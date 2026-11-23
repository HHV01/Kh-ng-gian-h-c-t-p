const quizBank = [
  {
    "track": 0,
    "id": "Q0-01",
    "level": 0,
    "q": "Business Analysis là gì?",
    "opts": [
      "Nghề lập trình",
      "Nghề phân tích và kết nối nhu cầu kinh doanh với giải pháp",
      "Nghề quản lý dự án"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Nghề phân tích và kết nối nhu cầu kinh doanh với giải pháp. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-02",
    "level": 0,
    "q": "Vai trò cốt lõi của BA là?",
    "opts": [
      "Viết code",
      "Hiểu nhu cầu, phân tích và đề xuất giải pháp",
      "Kiểm thử phần mềm"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiểu nhu cầu, phân tích và đề xuất giải pháp. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-03",
    "level": 0,
    "q": "Stakeholder là?",
    "opts": [
      "Chỉ người tài trợ",
      "Chỉ người dùng cuối",
      "Tất cả các bên ảnh hưởng hoặc chịu ảnh hưởng"
    ],
    "ans": 2,
    "exp": "Đáp án đúng: C. Tất cả các bên ảnh hưởng hoặc chịu ảnh hưởng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-04",
    "level": 0,
    "q": "Khi gặp yêu cầu mâu thuẫn, BA nên?",
    "opts": [
      "Tự chọn yêu cầu mình thích",
      "Bỏ qua cả hai",
      "Làm rõ mục tiêu, tác động và thống nhất ưu tiên"
    ],
    "ans": 2,
    "exp": "Đáp án đúng: C. Làm rõ mục tiêu, tác động và thống nhất ưu tiên. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-05",
    "level": 0,
    "q": "Bản đồ stakeholder nên cập nhật khi nào?",
    "opts": [
      "Chỉ đầu dự án",
      "Khi vai trò, ưu tiên hoặc bối cảnh thay đổi",
      "Không bao giờ"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Khi vai trò, ưu tiên hoặc bối cảnh thay đổi. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-06",
    "level": 1,
    "q": "KPI của BA thường đo?",
    "opts": [
      "Số dòng code",
      "Giá trị kinh doanh mang lại và chất lượng yêu cầu",
      "Số cuộc họp"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Giá trị kinh doanh mang lại và chất lượng yêu cầu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-07",
    "level": 1,
    "q": "BA cần kỹ năng gì nhất?",
    "opts": [
      "Lập trình",
      "Giao tiếp và phân tích",
      "Thiết kế đồ họa"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Giao tiếp và phân tích. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-08",
    "level": 1,
    "q": "Một BA giỏi cần?",
    "opts": [
      "Biết tất cả công nghệ",
      "Hiểu nghiệp vụ và giải quyết vấn đề"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiểu nghiệp vụ và giải quyết vấn đề. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-09",
    "level": 1,
    "q": "BA và PO khác nhau?",
    "opts": [
      "Không khác nhau",
      "BA tập trung phân tích, PO tập trung sản phẩm"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. BA tập trung phân tích, PO tập trung sản phẩm. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-10",
    "level": 1,
    "q": "BA nên đọc?",
    "opts": [
      "Chỉ tài liệu kỹ thuật",
      "Tài liệu nghiệp vụ và chuẩn BA"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Tài liệu nghiệp vụ và chuẩn BA. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-11",
    "level": 1,
    "q": "BA cần kỹ năng gì nhất?",
    "opts": [
      "Lập trình",
      "Giao tiếp và phân tích",
      "Thiết kế đồ họa"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Giao tiếp và phân tích. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-12",
    "level": 1,
    "q": "Một BA giỏi cần?",
    "opts": [
      "Biết tất cả công nghệ",
      "Hiểu nghiệp vụ và giải quyết vấn đề"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiểu nghiệp vụ và giải quyết vấn đề. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-13",
    "level": 1,
    "q": "BA và PO khác nhau?",
    "opts": [
      "Không khác nhau",
      "BA tập trung phân tích, PO tập trung sản phẩm"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. BA tập trung phân tích, PO tập trung sản phẩm. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-14",
    "level": 2,
    "q": "BA nên đọc?",
    "opts": [
      "Chỉ tài liệu kỹ thuật",
      "Tài liệu nghiệp vụ và chuẩn BA"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Tài liệu nghiệp vụ và chuẩn BA. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-15",
    "level": 2,
    "q": "BA cần kỹ năng gì nhất?",
    "opts": [
      "Lập trình",
      "Giao tiếp và phân tích",
      "Thiết kế đồ họa"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Giao tiếp và phân tích. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-16",
    "level": 2,
    "q": "Một BA giỏi cần?",
    "opts": [
      "Biết tất cả công nghệ",
      "Hiểu nghiệp vụ và giải quyết vấn đề"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiểu nghiệp vụ và giải quyết vấn đề. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-17",
    "level": 2,
    "q": "BA và PO khác nhau?",
    "opts": [
      "Không khác nhau",
      "BA tập trung phân tích, PO tập trung sản phẩm"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. BA tập trung phân tích, PO tập trung sản phẩm. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-18",
    "level": 2,
    "q": "BA nên đọc?",
    "opts": [
      "Chỉ tài liệu kỹ thuật",
      "Tài liệu nghiệp vụ và chuẩn BA"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Tài liệu nghiệp vụ và chuẩn BA. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-19",
    "level": 2,
    "q": "BA cần kỹ năng gì nhất?",
    "opts": [
      "Lập trình",
      "Giao tiếp và phân tích",
      "Thiết kế đồ họa"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Giao tiếp và phân tích. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 0,
    "id": "Q0-20",
    "level": 2,
    "q": "Một BA giỏi cần?",
    "opts": [
      "Biết tất cả công nghệ",
      "Hiểu nghiệp vụ và giải quyết vấn đề"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiểu nghiệp vụ và giải quyết vấn đề. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-01",
    "level": 0,
    "q": "Mục tiêu chính của khai thác yêu cầu là?",
    "opts": [
      "Viết càng nhiều tài liệu càng tốt",
      "Hiểu nhu cầu và vấn đề cần giải quyết",
      "Chốt công nghệ trước"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiểu nhu cầu và vấn đề cần giải quyết. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-02",
    "level": 0,
    "q": "Kỹ thuật phỏng vấn stakeholder hiệu quả là?",
    "opts": [
      "Hỏi câu hỏi đóng",
      "Hỏi mở, lắng nghe và xác nhận",
      "Đọc to tài liệu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hỏi mở, lắng nghe và xác nhận. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-03",
    "level": 0,
    "q": "Workshop khai thác yêu cầu nên?",
    "opts": [
      "Một người nói, nhiều người nghe",
      "Có facilitator, mục tiêu rõ và ghi nhận quyết định"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Có facilitator, mục tiêu rõ và ghi nhận quyết định. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-04",
    "level": 0,
    "q": "Khi stakeholder không có thời gian, BA nên?",
    "opts": [
      "Bỏ qua",
      "Gửi bảng câu hỏi ngắn và hẹn thời gian cụ thể"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Gửi bảng câu hỏi ngắn và hẹn thời gian cụ thể. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-05",
    "level": 0,
    "q": "Quan sát (observation) hữu ích khi?",
    "opts": [
      "Khi stakeholder bận",
      "Khi mô tả không khớp thực tế"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Khi mô tả không khớp thực tế. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-06",
    "level": 1,
    "q": "Tài liệu tham khảo quan trọng khi khai thác là?",
    "opts": [
      "Chỉ email",
      "Quy trình hiện tại, báo cáo, hệ thống cũ"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Quy trình hiện tại, báo cáo, hệ thống cũ. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-07",
    "level": 1,
    "q": "Khi phỏng vấn, BA nên?",
    "opts": [
      "Hỏi câu hỏi đóng",
      "Hỏi mở và lắng nghe"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hỏi mở và lắng nghe. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-08",
    "level": 1,
    "q": "Workshop nên có?",
    "opts": [
      "Không facilitator",
      "Facilitator và mục tiêu rõ"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Facilitator và mục tiêu rõ. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-09",
    "level": 1,
    "q": "Quan sát hữu ích khi?",
    "opts": [
      "Khi stakeholder bận",
      "Khi mô tả không khớp thực tế"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Khi mô tả không khớp thực tế. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-10",
    "level": 1,
    "q": "Tài liệu tham khảo quan trọng?",
    "opts": [
      "Chỉ email",
      "Quy trình, báo cáo, hệ thống cũ"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Quy trình, báo cáo, hệ thống cũ. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-11",
    "level": 1,
    "q": "Khi phỏng vấn, BA nên?",
    "opts": [
      "Hỏi câu hỏi đóng",
      "Hỏi mở và lắng nghe"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hỏi mở và lắng nghe. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-12",
    "level": 1,
    "q": "Workshop nên có?",
    "opts": [
      "Không facilitator",
      "Facilitator và mục tiêu rõ"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Facilitator và mục tiêu rõ. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-13",
    "level": 1,
    "q": "Quan sát hữu ích khi?",
    "opts": [
      "Khi stakeholder bận",
      "Khi mô tả không khớp thực tế"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Khi mô tả không khớp thực tế. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-14",
    "level": 2,
    "q": "Tài liệu tham khảo quan trọng?",
    "opts": [
      "Chỉ email",
      "Quy trình, báo cáo, hệ thống cũ"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Quy trình, báo cáo, hệ thống cũ. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-15",
    "level": 2,
    "q": "Khi phỏng vấn, BA nên?",
    "opts": [
      "Hỏi câu hỏi đóng",
      "Hỏi mở và lắng nghe"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hỏi mở và lắng nghe. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-16",
    "level": 2,
    "q": "Workshop nên có?",
    "opts": [
      "Không facilitator",
      "Facilitator và mục tiêu rõ"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Facilitator và mục tiêu rõ. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-17",
    "level": 2,
    "q": "Quan sát hữu ích khi?",
    "opts": [
      "Khi stakeholder bận",
      "Khi mô tả không khớp thực tế"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Khi mô tả không khớp thực tế. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-18",
    "level": 2,
    "q": "Tài liệu tham khảo quan trọng?",
    "opts": [
      "Chỉ email",
      "Quy trình, báo cáo, hệ thống cũ"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Quy trình, báo cáo, hệ thống cũ. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-19",
    "level": 2,
    "q": "Khi phỏng vấn, BA nên?",
    "opts": [
      "Hỏi câu hỏi đóng",
      "Hỏi mở và lắng nghe"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hỏi mở và lắng nghe. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 1,
    "id": "Q1-20",
    "level": 2,
    "q": "Workshop nên có?",
    "opts": [
      "Không facilitator",
      "Facilitator và mục tiêu rõ"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Facilitator và mục tiêu rõ. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-01",
    "level": 0,
    "q": "Yêu cầu chức năng (FR) là?",
    "opts": [
      "Ràng buộc hiệu năng",
      "Hành vi hệ thống phải thực hiện"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hành vi hệ thống phải thực hiện. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-02",
    "level": 0,
    "q": "Yêu cầu phi chức năng (NFR) là?",
    "opts": [
      "Tính năng mới",
      "Ràng buộc chất lượng như hiệu năng, bảo mật"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Ràng buộc chất lượng như hiệu năng, bảo mật. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-03",
    "level": 0,
    "q": "Ma trận truy vết (RTM) dùng để?",
    "opts": [
      "Vẽ giao diện",
      "Liên kết yêu cầu với thiết kế, test và triển khai"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Liên kết yêu cầu với thiết kế, test và triển khai. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-04",
    "level": 0,
    "q": "Khi yêu cầu thay đổi giữa sprint, BA nên?",
    "opts": [
      "Chấp nhận ngay",
      "Đánh giá tác động và thống nhất với PO/stakeholder"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đánh giá tác động và thống nhất với PO/stakeholder. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-05",
    "level": 0,
    "q": "Ưu tiên yêu cầu thường dùng?",
    "opts": [
      "MoSCoW, giá trị - chi phí"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. undefined. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-06",
    "level": 1,
    "q": "Acceptance Criteria nên?",
    "opts": [
      "Mơ hồ, để dev tự hiểu",
      "Rõ ràng, kiểm chứng được, có Given-When-Then"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Rõ ràng, kiểm chứng được, có Given-When-Then. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-07",
    "level": 1,
    "q": "FR là?",
    "opts": [
      "Ràng buộc hiệu năng",
      "Hành vi hệ thống phải thực hiện"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hành vi hệ thống phải thực hiện. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-08",
    "level": 1,
    "q": "NFR là?",
    "opts": [
      "Tính năng mới",
      "Ràng buộc chất lượng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Ràng buộc chất lượng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-09",
    "level": 1,
    "q": "RTM dùng để?",
    "opts": [
      "Vẽ giao diện",
      "Liên kết yêu cầu với test"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Liên kết yêu cầu với test. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-10",
    "level": 1,
    "q": "Khi yêu cầu thay đổi?",
    "opts": [
      "Chấp nhận ngay",
      "Đánh giá tác động"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đánh giá tác động. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-11",
    "level": 1,
    "q": "Ưu tiên yêu cầu thường dùng?",
    "opts": [
      "MoSCoW, giá trị - chi phí"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. undefined. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-12",
    "level": 1,
    "q": "AC nên?",
    "opts": [
      "Mơ hồ",
      "Rõ ràng, kiểm chứng được"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Rõ ràng, kiểm chứng được. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-13",
    "level": 1,
    "q": "FR là?",
    "opts": [
      "Ràng buộc hiệu năng",
      "Hành vi hệ thống phải thực hiện"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hành vi hệ thống phải thực hiện. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-14",
    "level": 2,
    "q": "NFR là?",
    "opts": [
      "Tính năng mới",
      "Ràng buộc chất lượng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Ràng buộc chất lượng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-15",
    "level": 2,
    "q": "RTM dùng để?",
    "opts": [
      "Vẽ giao diện",
      "Liên kết yêu cầu với test"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Liên kết yêu cầu với test. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-16",
    "level": 2,
    "q": "Khi yêu cầu thay đổi?",
    "opts": [
      "Chấp nhận ngay",
      "Đánh giá tác động"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đánh giá tác động. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-17",
    "level": 2,
    "q": "Ưu tiên yêu cầu thường dùng?",
    "opts": [
      "MoSCoW, giá trị - chi phí"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. undefined. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-18",
    "level": 2,
    "q": "AC nên?",
    "opts": [
      "Mơ hồ",
      "Rõ ràng, kiểm chứng được"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Rõ ràng, kiểm chứng được. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-19",
    "level": 2,
    "q": "FR là?",
    "opts": [
      "Ràng buộc hiệu năng",
      "Hành vi hệ thống phải thực hiện"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hành vi hệ thống phải thực hiện. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 2,
    "id": "Q2-20",
    "level": 2,
    "q": "NFR là?",
    "opts": [
      "Tính năng mới",
      "Ràng buộc chất lượng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Ràng buộc chất lượng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-01",
    "level": 0,
    "q": "BPMN dùng để?",
    "opts": [
      "Vẽ giao diện",
      "Mô hình hóa quy trình nghiệp vụ"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Mô hình hóa quy trình nghiệp vụ. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-02",
    "level": 0,
    "q": "Start Event trong BPMN là?",
    "opts": [
      "Hình tròn rỗng",
      "Hình vuông"
    ],
    "ans": 0,
    "exp": "Đáp án đúng: A. Hình tròn rỗng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-03",
    "level": 0,
    "q": "Gateway trong BPMN dùng để?",
    "opts": [
      "Kết thúc quy trình",
      "Rẽ nhánh/ghép luồng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Rẽ nhánh/ghép luồng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-04",
    "level": 0,
    "q": "Swimlane trong BPMN biểu thị?",
    "opts": [
      "Thời gian",
      "Vai trò/phòng ban chịu trách nhiệm"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Vai trò/phòng ban chịu trách nhiệm. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-05",
    "level": 0,
    "q": "As-Is và To-Be là?",
    "opts": [
      "Hai hệ thống khác nhau",
      "Quy trình hiện tại và quy trình mục tiêu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Quy trình hiện tại và quy trình mục tiêu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-06",
    "level": 1,
    "q": "Khi mô hình hóa, BA nên?",
    "opts": [
      "Chỉ vẽ happy path",
      "Bao gồm ngoại lệ và luồng lỗi"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Bao gồm ngoại lệ và luồng lỗi. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-07",
    "level": 1,
    "q": "BPMN là?",
    "opts": [
      "Ngôn ngữ lập trình",
      "Ký hiệu mô hình hóa quy trình"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Ký hiệu mô hình hóa quy trình. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-08",
    "level": 1,
    "q": "Start Event?",
    "opts": [
      "Hình tròn rỗng",
      "Hình vuông"
    ],
    "ans": 0,
    "exp": "Đáp án đúng: A. Hình tròn rỗng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-09",
    "level": 1,
    "q": "Gateway?",
    "opts": [
      "Kết thúc",
      "Rẽ nhánh/ghép luồng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Rẽ nhánh/ghép luồng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-10",
    "level": 1,
    "q": "Swimlane?",
    "opts": [
      "Thời gian",
      "Vai trò/phòng ban"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Vai trò/phòng ban. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-11",
    "level": 1,
    "q": "As-Is/To-Be?",
    "opts": [
      "Hai hệ thống",
      "Quy trình hiện tại và mục tiêu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Quy trình hiện tại và mục tiêu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-12",
    "level": 1,
    "q": "Khi mô hình hóa?",
    "opts": [
      "Chỉ happy path",
      "Bao gồm ngoại lệ"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Bao gồm ngoại lệ. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-13",
    "level": 1,
    "q": "BPMN là?",
    "opts": [
      "Ngôn ngữ lập trình",
      "Ký hiệu mô hình hóa quy trình"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Ký hiệu mô hình hóa quy trình. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-14",
    "level": 2,
    "q": "Start Event?",
    "opts": [
      "Hình tròn rỗng",
      "Hình vuông"
    ],
    "ans": 0,
    "exp": "Đáp án đúng: A. Hình tròn rỗng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-15",
    "level": 2,
    "q": "Gateway?",
    "opts": [
      "Kết thúc",
      "Rẽ nhánh/ghép luồng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Rẽ nhánh/ghép luồng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-16",
    "level": 2,
    "q": "Swimlane?",
    "opts": [
      "Thời gian",
      "Vai trò/phòng ban"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Vai trò/phòng ban. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-17",
    "level": 2,
    "q": "As-Is/To-Be?",
    "opts": [
      "Hai hệ thống",
      "Quy trình hiện tại và mục tiêu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Quy trình hiện tại và mục tiêu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-18",
    "level": 2,
    "q": "Khi mô hình hóa?",
    "opts": [
      "Chỉ happy path",
      "Bao gồm ngoại lệ"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Bao gồm ngoại lệ. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-19",
    "level": 2,
    "q": "BPMN là?",
    "opts": [
      "Ngôn ngữ lập trình",
      "Ký hiệu mô hình hóa quy trình"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Ký hiệu mô hình hóa quy trình. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 3,
    "id": "Q3-20",
    "level": 2,
    "q": "Start Event?",
    "opts": [
      "Hình tròn rỗng",
      "Hình vuông"
    ],
    "ans": 0,
    "exp": "Đáp án đúng: A. Hình tròn rỗng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-01",
    "level": 0,
    "q": "Phân tích giải pháp bắt đầu từ?",
    "opts": [
      "Chọn công nghệ ngay",
      "Hiểu vấn đề và mục tiêu kinh doanh"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiểu vấn đề và mục tiêu kinh doanh. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-02",
    "level": 0,
    "q": "Trade-off là?",
    "opts": [
      "Chọn phương án tốt nhất không cân nhắc",
      "Cân nhắc đánh đổi giữa các phương án"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Cân nhắc đánh đổi giữa các phương án. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-03",
    "level": 0,
    "q": "Khi đề xuất giải pháp, BA cần?",
    "opts": [
      "Chỉ nêu tính năng",
      "Nêu giá trị, rủi ro và cách đo thành công"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Nêu giá trị, rủi ro và cách đo thành công. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-04",
    "level": 0,
    "q": "Feasibility (khả thi) gồm?",
    "opts": [
      "Chỉ kỹ thuật",
      "Kỹ thuật, tài chính, thời gian, tổ chức"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Kỹ thuật, tài chính, thời gian, tổ chức. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-05",
    "level": 0,
    "q": "Giải pháp nên được?",
    "opts": [
      "Chốt một mình",
      "Đồng thiết kế với stakeholder"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đồng thiết kế với stakeholder. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-06",
    "level": 1,
    "q": "Bằng chứng cho giải pháp là?",
    "opts": [
      "Ý kiến cá nhân",
      "Dữ liệu, prototype, pilot"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Dữ liệu, prototype, pilot. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-07",
    "level": 1,
    "q": "Phân tích giải pháp bắt đầu từ?",
    "opts": [
      "Chọn công nghệ ngay",
      "Hiểu vấn đề và mục tiêu kinh doanh"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiểu vấn đề và mục tiêu kinh doanh. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-08",
    "level": 1,
    "q": "Trade-off là?",
    "opts": [
      "Chọn phương án tốt nhất không cân nhắc",
      "Cân nhắc đánh đổi giữa các phương án"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Cân nhắc đánh đổi giữa các phương án. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-09",
    "level": 1,
    "q": "Khi đề xuất giải pháp, BA cần?",
    "opts": [
      "Chỉ nêu tính năng",
      "Nêu giá trị, rủi ro và cách đo thành công"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Nêu giá trị, rủi ro và cách đo thành công. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-10",
    "level": 1,
    "q": "Feasibility gồm?",
    "opts": [
      "Chỉ kỹ thuật",
      "Kỹ thuật, tài chính, thời gian, tổ chức"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Kỹ thuật, tài chính, thời gian, tổ chức. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-11",
    "level": 1,
    "q": "Giải pháp nên được?",
    "opts": [
      "Chốt một mình",
      "Đồng thiết kế với stakeholder"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đồng thiết kế với stakeholder. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-12",
    "level": 1,
    "q": "Bằng chứng cho giải pháp là?",
    "opts": [
      "Ý kiến cá nhân",
      "Dữ liệu, prototype, pilot"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Dữ liệu, prototype, pilot. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-13",
    "level": 1,
    "q": "Phân tích giải pháp bắt đầu từ?",
    "opts": [
      "Chọn công nghệ ngay",
      "Hiểu vấn đề và mục tiêu kinh doanh"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiểu vấn đề và mục tiêu kinh doanh. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-14",
    "level": 2,
    "q": "Trade-off là?",
    "opts": [
      "Chọn phương án tốt nhất không cân nhắc",
      "Cân nhắc đánh đổi giữa các phương án"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Cân nhắc đánh đổi giữa các phương án. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-15",
    "level": 2,
    "q": "Khi đề xuất giải pháp, BA cần?",
    "opts": [
      "Chỉ nêu tính năng",
      "Nêu giá trị, rủi ro và cách đo thành công"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Nêu giá trị, rủi ro và cách đo thành công. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-16",
    "level": 2,
    "q": "Feasibility gồm?",
    "opts": [
      "Chỉ kỹ thuật",
      "Kỹ thuật, tài chính, thời gian, tổ chức"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Kỹ thuật, tài chính, thời gian, tổ chức. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-17",
    "level": 2,
    "q": "Giải pháp nên được?",
    "opts": [
      "Chốt một mình",
      "Đồng thiết kế với stakeholder"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đồng thiết kế với stakeholder. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-18",
    "level": 2,
    "q": "Bằng chứng cho giải pháp là?",
    "opts": [
      "Ý kiến cá nhân",
      "Dữ liệu, prototype, pilot"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Dữ liệu, prototype, pilot. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-19",
    "level": 2,
    "q": "Phân tích giải pháp bắt đầu từ?",
    "opts": [
      "Chọn công nghệ ngay",
      "Hiểu vấn đề và mục tiêu kinh doanh"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiểu vấn đề và mục tiêu kinh doanh. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 4,
    "id": "Q4-20",
    "level": 2,
    "q": "Trade-off là?",
    "opts": [
      "Chọn phương án tốt nhất không cân nhắc",
      "Cân nhắc đánh đổi giữa các phương án"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Cân nhắc đánh đổi giữa các phương án. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-01",
    "level": 0,
    "q": "SQL SELECT dùng để?",
    "opts": [
      "Xóa dữ liệu",
      "Truy vấn dữ liệu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Truy vấn dữ liệu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-02",
    "level": 0,
    "q": "JOIN trong SQL dùng để?",
    "opts": [
      "Gộp bảng theo điều kiện"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. undefined. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-03",
    "level": 0,
    "q": "GROUP BY dùng để?",
    "opts": [
      "Sắp xếp kết quả",
      "Nhóm dữ liệu để tổng hợp"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Nhóm dữ liệu để tổng hợp. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-04",
    "level": 0,
    "q": "BA cần SQL để?",
    "opts": [
      "Viết ứng dụng",
      "Đọc dữ liệu, kiểm chứng và ra quyết định"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đọc dữ liệu, kiểm chứng và ra quyết định. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-05",
    "level": 0,
    "q": "Khi dữ liệu thiếu, BA nên?",
    "opts": [
      "Bỏ qua",
      "Xác định nguồn, chất lượng và ảnh hưởng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Xác định nguồn, chất lượng và ảnh hưởng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-06",
    "level": 1,
    "q": "Dashboard nên?",
    "opts": [
      "Hiển thị mọi dữ liệu",
      "Hiển thị KPI quan trọng và có ngữ cảnh"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiển thị KPI quan trọng và có ngữ cảnh. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-07",
    "level": 1,
    "q": "SQL SELECT dùng để?",
    "opts": [
      "Xóa dữ liệu",
      "Truy vấn dữ liệu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Truy vấn dữ liệu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-08",
    "level": 1,
    "q": "JOIN?",
    "opts": [
      "Gộp bảng theo điều kiện"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. undefined. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-09",
    "level": 1,
    "q": "GROUP BY?",
    "opts": [
      "Sắp xếp",
      "Nhóm để tổng hợp"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Nhóm để tổng hợp. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-10",
    "level": 1,
    "q": "BA cần SQL?",
    "opts": [
      "Viết app",
      "Đọc dữ liệu, kiểm chứng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đọc dữ liệu, kiểm chứng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-11",
    "level": 1,
    "q": "Khi dữ liệu thiếu?",
    "opts": [
      "Bỏ qua",
      "Xác định nguồn, chất lượng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Xác định nguồn, chất lượng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-12",
    "level": 1,
    "q": "Dashboard?",
    "opts": [
      "Hiển thị mọi dữ liệu",
      "Hiển thị KPI quan trọng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiển thị KPI quan trọng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-13",
    "level": 1,
    "q": "SQL SELECT?",
    "opts": [
      "Xóa dữ liệu",
      "Truy vấn dữ liệu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Truy vấn dữ liệu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-14",
    "level": 2,
    "q": "JOIN?",
    "opts": [
      "Gộp bảng theo điều kiện"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. undefined. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-15",
    "level": 2,
    "q": "GROUP BY?",
    "opts": [
      "Sắp xếp",
      "Nhóm để tổng hợp"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Nhóm để tổng hợp. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-16",
    "level": 2,
    "q": "BA cần SQL?",
    "opts": [
      "Viết app",
      "Đọc dữ liệu, kiểm chứng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đọc dữ liệu, kiểm chứng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-17",
    "level": 2,
    "q": "Khi dữ liệu thiếu?",
    "opts": [
      "Bỏ qua",
      "Xác định nguồn, chất lượng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Xác định nguồn, chất lượng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-18",
    "level": 2,
    "q": "Dashboard?",
    "opts": [
      "Hiển thị mọi dữ liệu",
      "Hiển thị KPI quan trọng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiển thị KPI quan trọng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-19",
    "level": 2,
    "q": "SQL SELECT?",
    "opts": [
      "Xóa dữ liệu",
      "Truy vấn dữ liệu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Truy vấn dữ liệu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 5,
    "id": "Q5-20",
    "level": 2,
    "q": "JOIN?",
    "opts": [
      "Gộp bảng theo điều kiện"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. undefined. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-01",
    "level": 0,
    "q": "Scrum có mấy vai trò chính?",
    "opts": [
      "2",
      "3 (PO, SM, Dev Team)"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. 3 (PO, SM, Dev Team). Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-02",
    "level": 0,
    "q": "Sprint Planning mục đích?",
    "opts": [
      "Review sprint cũ",
      "Lên kế hoạch công việc cho sprint mới"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Lên kế hoạch công việc cho sprint mới. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-03",
    "level": 0,
    "q": "Definition of Done là?",
    "opts": [
      "Danh sách task",
      "Tiêu chí chung để coi story hoàn thành"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Tiêu chí chung để coi story hoàn thành. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-04",
    "level": 0,
    "q": "Retrospective mục đích?",
    "opts": [
      "Đánh giá sản phẩm",
      "Cải tiến quy trình và cách làm việc"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Cải tiến quy trình và cách làm việc. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-05",
    "level": 0,
    "q": "Backlog grooming là?",
    "opts": [
      "Xóa backlog",
      "Tinh chỉnh và ưu tiên backlog"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Tinh chỉnh và ưu tiên backlog. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-06",
    "level": 1,
    "q": "Velocity trong Scrum là?",
    "opts": [
      "Tốc độ viết code",
      "Lượng công việc team hoàn thành mỗi sprint"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Lượng công việc team hoàn thành mỗi sprint. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-07",
    "level": 1,
    "q": "Scrum có mấy vai trò?",
    "opts": [
      "2",
      "3 (PO, SM, Dev)"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. 3 (PO, SM, Dev). Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-08",
    "level": 1,
    "q": "Sprint Planning?",
    "opts": [
      "Review cũ",
      "Lên kế hoạch sprint mới"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Lên kế hoạch sprint mới. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-09",
    "level": 1,
    "q": "DoD?",
    "opts": [
      "Danh sách task",
      "Tiêu chí hoàn thành"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Tiêu chí hoàn thành. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-10",
    "level": 1,
    "q": "Retrospective?",
    "opts": [
      "Đánh giá sản phẩm",
      "Cải tiến cách làm việc"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Cải tiến cách làm việc. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-11",
    "level": 1,
    "q": "Backlog grooming?",
    "opts": [
      "Xóa backlog",
      "Tinh chỉnh và ưu tiên"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Tinh chỉnh và ưu tiên. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-12",
    "level": 1,
    "q": "Velocity?",
    "opts": [
      "Tốc độ viết code",
      "Lượng công việc mỗi sprint"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Lượng công việc mỗi sprint. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-13",
    "level": 1,
    "q": "Scrum có mấy vai trò?",
    "opts": [
      "2",
      "3 (PO, SM, Dev)"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. 3 (PO, SM, Dev). Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-14",
    "level": 2,
    "q": "Sprint Planning?",
    "opts": [
      "Review cũ",
      "Lên kế hoạch sprint mới"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Lên kế hoạch sprint mới. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-15",
    "level": 2,
    "q": "DoD?",
    "opts": [
      "Danh sách task",
      "Tiêu chí hoàn thành"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Tiêu chí hoàn thành. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-16",
    "level": 2,
    "q": "Retrospective?",
    "opts": [
      "Đánh giá sản phẩm",
      "Cải tiến cách làm việc"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Cải tiến cách làm việc. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-17",
    "level": 2,
    "q": "Backlog grooming?",
    "opts": [
      "Xóa backlog",
      "Tinh chỉnh và ưu tiên"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Tinh chỉnh và ưu tiên. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-18",
    "level": 2,
    "q": "Velocity?",
    "opts": [
      "Tốc độ viết code",
      "Lượng công việc mỗi sprint"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Lượng công việc mỗi sprint. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-19",
    "level": 2,
    "q": "Scrum có mấy vai trò?",
    "opts": [
      "2",
      "3 (PO, SM, Dev)"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. 3 (PO, SM, Dev). Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 6,
    "id": "Q6-20",
    "level": 2,
    "q": "Sprint Planning?",
    "opts": [
      "Review cũ",
      "Lên kế hoạch sprint mới"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Lên kế hoạch sprint mới. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-01",
    "level": 0,
    "q": "UX tốt bắt đầu từ?",
    "opts": [
      "Giao diện đẹp",
      "Hiểu người dùng và nhu cầu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiểu người dùng và nhu cầu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-02",
    "level": 0,
    "q": "User journey map biểu thị?",
    "opts": [
      "Sơ đồ database",
      "Hành trình trải nghiệm của người dùng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hành trình trải nghiệm của người dùng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-03",
    "level": 0,
    "q": "Khi thiết kế, BA nên?",
    "opts": [
      "Chỉ tập trung tính năng",
      "Cân nhắc khả năng sử dụng và truy cập"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Cân nhắc khả năng sử dụng và truy cập. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-04",
    "level": 0,
    "q": "Accessibility (a11y) là?",
    "opts": [
      "Tối ưu SEO",
      "Đảm bảo mọi người dùng đều truy cập được"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đảm bảo mọi người dùng đều truy cập được. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-05",
    "level": 0,
    "q": "Prototype giúp?",
    "opts": [
      "Thay thế code",
      "Kiểm chứng ý tưởng sớm với người dùng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Kiểm chứng ý tưởng sớm với người dùng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-06",
    "level": 1,
    "q": "BA và UX nên?",
    "opts": [
      "Làm việc độc lập",
      "Phối hợp liên tục"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Phối hợp liên tục. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-07",
    "level": 1,
    "q": "UX tốt bắt đầu từ?",
    "opts": [
      "Giao diện đẹp",
      "Hiểu người dùng và nhu cầu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiểu người dùng và nhu cầu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-08",
    "level": 1,
    "q": "User journey map?",
    "opts": [
      "Sơ đồ database",
      "Hành trình trải nghiệm"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hành trình trải nghiệm. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-09",
    "level": 1,
    "q": "Khi thiết kế?",
    "opts": [
      "Chỉ tính năng",
      "Cân nhắc khả năng sử dụng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Cân nhắc khả năng sử dụng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-10",
    "level": 1,
    "q": "Accessibility?",
    "opts": [
      "Tối ưu SEO",
      "Đảm bảo truy cập được"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đảm bảo truy cập được. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-11",
    "level": 1,
    "q": "Prototype?",
    "opts": [
      "Thay thế code",
      "Kiểm chứng ý tưởng sớm"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Kiểm chứng ý tưởng sớm. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-12",
    "level": 1,
    "q": "BA và UX?",
    "opts": [
      "Độc lập",
      "Phối hợp liên tục"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Phối hợp liên tục. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-13",
    "level": 1,
    "q": "UX tốt bắt đầu từ?",
    "opts": [
      "Giao diện đẹp",
      "Hiểu người dùng và nhu cầu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiểu người dùng và nhu cầu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-14",
    "level": 2,
    "q": "User journey map?",
    "opts": [
      "Sơ đồ database",
      "Hành trình trải nghiệm"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hành trình trải nghiệm. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-15",
    "level": 2,
    "q": "Khi thiết kế?",
    "opts": [
      "Chỉ tính năng",
      "Cân nhắc khả năng sử dụng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Cân nhắc khả năng sử dụng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-16",
    "level": 2,
    "q": "Accessibility?",
    "opts": [
      "Tối ưu SEO",
      "Đảm bảo truy cập được"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đảm bảo truy cập được. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-17",
    "level": 2,
    "q": "Prototype?",
    "opts": [
      "Thay thế code",
      "Kiểm chứng ý tưởng sớm"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Kiểm chứng ý tưởng sớm. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-18",
    "level": 2,
    "q": "BA và UX?",
    "opts": [
      "Độc lập",
      "Phối hợp liên tục"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Phối hợp liên tục. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-19",
    "level": 2,
    "q": "UX tốt bắt đầu từ?",
    "opts": [
      "Giao diện đẹp",
      "Hiểu người dùng và nhu cầu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hiểu người dùng và nhu cầu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 7,
    "id": "Q7-20",
    "level": 2,
    "q": "User journey map?",
    "opts": [
      "Sơ đồ database",
      "Hành trình trải nghiệm"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hành trình trải nghiệm. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-01",
    "level": 0,
    "q": "UAT là?",
    "opts": [
      "Kiểm thử đơn vị",
      "Kiểm thử nghiệm thu người dùng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Kiểm thử nghiệm thu người dùng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-02",
    "level": 0,
    "q": "Test case nên?",
    "opts": [
      "Mơ hồ",
      "Rõ ràng, có điều kiện và kết quả mong đợi"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Rõ ràng, có điều kiện và kết quả mong đợi. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-03",
    "level": 0,
    "q": "Khi phát hiện bug trong UAT, BA nên?",
    "opts": [
      "Bỏ qua",
      "Ghi nhận, phân loại và theo dõi đến khi đóng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Ghi nhận, phân loại và theo dõi đến khi đóng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-04",
    "level": 0,
    "q": "Regression test là?",
    "opts": [
      "Test tính năng mới",
      "Kiểm tra tính năng cũ không bị hỏng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Kiểm tra tính năng cũ không bị hỏng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-05",
    "level": 0,
    "q": "Acceptance Criteria dùng để?",
    "opts": [
      "Trang trí tài liệu",
      "Xác định điều kiện nghiệm thu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Xác định điều kiện nghiệm thu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-06",
    "level": 1,
    "q": "BA trong testing nên?",
    "opts": [
      "Không tham gia",
      "Hỗ trợ định nghĩa test và nghiệm thu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hỗ trợ định nghĩa test và nghiệm thu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-07",
    "level": 1,
    "q": "UAT là?",
    "opts": [
      "Kiểm thử đơn vị",
      "Kiểm thử nghiệm thu người dùng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Kiểm thử nghiệm thu người dùng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-08",
    "level": 1,
    "q": "Test case?",
    "opts": [
      "Mơ hồ",
      "Rõ ràng, có điều kiện"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Rõ ràng, có điều kiện. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-09",
    "level": 1,
    "q": "Bug trong UAT?",
    "opts": [
      "Bỏ qua",
      "Ghi nhận và theo dõi"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Ghi nhận và theo dõi. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-10",
    "level": 1,
    "q": "Regression?",
    "opts": [
      "Test tính năng mới",
      "Kiểm tra tính năng cũ"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Kiểm tra tính năng cũ. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-11",
    "level": 1,
    "q": "AC?",
    "opts": [
      "Trang trí",
      "Xác định điều kiện nghiệm thu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Xác định điều kiện nghiệm thu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-12",
    "level": 1,
    "q": "BA trong testing?",
    "opts": [
      "Không tham gia",
      "Hỗ trợ định nghĩa test"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hỗ trợ định nghĩa test. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-13",
    "level": 1,
    "q": "UAT là?",
    "opts": [
      "Kiểm thử đơn vị",
      "Kiểm thử nghiệm thu người dùng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Kiểm thử nghiệm thu người dùng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-14",
    "level": 2,
    "q": "Test case?",
    "opts": [
      "Mơ hồ",
      "Rõ ràng, có điều kiện"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Rõ ràng, có điều kiện. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-15",
    "level": 2,
    "q": "Bug trong UAT?",
    "opts": [
      "Bỏ qua",
      "Ghi nhận và theo dõi"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Ghi nhận và theo dõi. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-16",
    "level": 2,
    "q": "Regression?",
    "opts": [
      "Test tính năng mới",
      "Kiểm tra tính năng cũ"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Kiểm tra tính năng cũ. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-17",
    "level": 2,
    "q": "AC?",
    "opts": [
      "Trang trí",
      "Xác định điều kiện nghiệm thu"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Xác định điều kiện nghiệm thu. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-18",
    "level": 2,
    "q": "BA trong testing?",
    "opts": [
      "Không tham gia",
      "Hỗ trợ định nghĩa test"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Hỗ trợ định nghĩa test. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-19",
    "level": 2,
    "q": "UAT là?",
    "opts": [
      "Kiểm thử đơn vị",
      "Kiểm thử nghiệm thu người dùng"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Kiểm thử nghiệm thu người dùng. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 8,
    "id": "Q8-20",
    "level": 2,
    "q": "Test case?",
    "opts": [
      "Mơ hồ",
      "Rõ ràng, có điều kiện"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Rõ ràng, có điều kiện. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-01",
    "level": 0,
    "q": "Câu hỏi phỏng vấn BA thường kiểm tra?",
    "opts": [
      "Kiến thức lập trình",
      "Tư duy phân tích và giải quyết vấn đề"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Tư duy phân tích và giải quyết vấn đề. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-02",
    "level": 0,
    "q": "Khi chưa có kinh nghiệm domain, BA nên?",
    "opts": [
      "Giả vờ biết",
      "Đặt câu hỏi, học nhanh và dùng framework"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đặt câu hỏi, học nhanh và dùng framework. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-03",
    "level": 0,
    "q": "STAR trong phỏng vấn là?",
    "opts": [
      "Một công cụ vẽ sơ đồ",
      "Situation-Task-Action-Result"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Situation-Task-Action-Result. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-04",
    "level": 0,
    "q": "Điểm mạnh của BA tốt là?",
    "opts": [
      "Viết nhiều tài liệu",
      "Giao tiếp và giải quyết vấn đề"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Giao tiếp và giải quyết vấn đề. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-05",
    "level": 0,
    "q": "Khi stakeholder khó tính, BA nên?",
    "opts": [
      "Tránh mặt",
      "Lắng nghe, đồng cảm và đề xuất giải pháp"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Lắng nghe, đồng cảm và đề xuất giải pháp. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-06",
    "level": 1,
    "q": "BA nên chuẩn bị cho phỏng vấn bằng?",
    "opts": [
      "Học thuộc lòng",
      "Thực hành tình huống và case study"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Thực hành tình huống và case study. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-07",
    "level": 1,
    "q": "Câu hỏi phỏng vấn BA kiểm tra?",
    "opts": [
      "Lập trình",
      "Tư duy phân tích"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Tư duy phân tích. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-08",
    "level": 1,
    "q": "Khi chưa có kinh nghiệm domain?",
    "opts": [
      "Giả vờ biết",
      "Đặt câu hỏi, học nhanh"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đặt câu hỏi, học nhanh. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-09",
    "level": 1,
    "q": "STAR?",
    "opts": [
      "Công cụ vẽ sơ đồ",
      "Situation-Task-Action-Result"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Situation-Task-Action-Result. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-10",
    "level": 1,
    "q": "Điểm mạnh BA?",
    "opts": [
      "Viết nhiều tài liệu",
      "Giao tiếp và giải quyết vấn đề"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Giao tiếp và giải quyết vấn đề. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-11",
    "level": 1,
    "q": "Stakeholder khó tính?",
    "opts": [
      "Tránh mặt",
      "Lắng nghe, đồng cảm"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Lắng nghe, đồng cảm. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-12",
    "level": 1,
    "q": "Chuẩn bị phỏng vấn?",
    "opts": [
      "Học thuộc lòng",
      "Thực hành tình huống"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Thực hành tình huống. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-13",
    "level": 1,
    "q": "Câu hỏi phỏng vấn BA kiểm tra?",
    "opts": [
      "Lập trình",
      "Tư duy phân tích"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Tư duy phân tích. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-14",
    "level": 2,
    "q": "Khi chưa có kinh nghiệm domain?",
    "opts": [
      "Giả vờ biết",
      "Đặt câu hỏi, học nhanh"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đặt câu hỏi, học nhanh. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-15",
    "level": 2,
    "q": "STAR?",
    "opts": [
      "Công cụ vẽ sơ đồ",
      "Situation-Task-Action-Result"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Situation-Task-Action-Result. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-16",
    "level": 2,
    "q": "Điểm mạnh BA?",
    "opts": [
      "Viết nhiều tài liệu",
      "Giao tiếp và giải quyết vấn đề"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Giao tiếp và giải quyết vấn đề. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-17",
    "level": 2,
    "q": "Stakeholder khó tính?",
    "opts": [
      "Tránh mặt",
      "Lắng nghe, đồng cảm"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Lắng nghe, đồng cảm. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-18",
    "level": 2,
    "q": "Chuẩn bị phỏng vấn?",
    "opts": [
      "Học thuộc lòng",
      "Thực hành tình huống"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Thực hành tình huống. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-19",
    "level": 2,
    "q": "Câu hỏi phỏng vấn BA kiểm tra?",
    "opts": [
      "Lập trình",
      "Tư duy phân tích"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Tư duy phân tích. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  },
  {
    "track": 9,
    "id": "Q9-20",
    "level": 2,
    "q": "Khi chưa có kinh nghiệm domain?",
    "opts": [
      "Giả vờ biết",
      "Đặt câu hỏi, học nhanh"
    ],
    "ans": 1,
    "exp": "Đáp án đúng: B. Đặt câu hỏi, học nhanh. Lựa chọn khác thiếu căn cứ hoặc bỏ sót ràng buộc quan trọng."
  }
];
