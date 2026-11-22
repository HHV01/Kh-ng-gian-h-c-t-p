const techPractices = [
  {
    "id": "tech-001",
    "slug": "tech-001",
    "title": "Chiến lược & kiến trúc nghiệp vụ – diagnose (happy)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "diagnose"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống diagnose (happy) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|diagnose|happy|Junior",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong diagnose (happy) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 5000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 5000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh happy của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-002",
    "slug": "tech-002",
    "title": "Quy trình & mô hình vận hành – diagnose (happy)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "diagnose"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống diagnose (happy) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|diagnose|happy|Middle",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong diagnose (happy) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 5100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 5100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh happy của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-003",
    "slug": "tech-003",
    "title": "Yêu cầu & thiết kế giải pháp – diagnose (happy)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "diagnose"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống diagnose (happy) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|diagnose|happy|Senior",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong diagnose (happy) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 5200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 5200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh happy của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-004",
    "slug": "tech-004",
    "title": "Dữ liệu, báo cáo & phân tích – diagnose (happy)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "diagnose"
    ],
    "industry": "Bảo hiểm",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống diagnose (happy) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|diagnose|happy|Junior",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong diagnose (happy) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 5300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 5300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh happy của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-005",
    "slug": "tech-005",
    "title": "Tích hợp & API – diagnose (happy)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "diagnose"
    ],
    "industry": "Y tế & dược",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống diagnose (happy) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|diagnose|happy|Middle",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong diagnose (happy) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 5400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 5400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh happy của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-006",
    "slug": "tech-006",
    "title": "Sản phẩm số & trải nghiệm – diagnose (happy)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "diagnose"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống diagnose (happy) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|diagnose|happy|Senior",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong diagnose (happy) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 5500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 5500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh happy của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-007",
    "slug": "tech-007",
    "title": "Bảo mật, rủi ro & tuân thủ – diagnose (happy)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "diagnose"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống diagnose (happy) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|diagnose|happy|Junior",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong diagnose (happy) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 5600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 5600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh happy của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-008",
    "slug": "tech-008",
    "title": "Thay đổi & adoption – diagnose (happy)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "diagnose"
    ],
    "industry": "SaaS & B2B",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống diagnose (happy) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|diagnose|happy|Middle",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong diagnose (happy) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 5700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 5700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh happy của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-009",
    "slug": "tech-009",
    "title": "Đánh giá giải pháp & nghiệm thu – diagnose (happy)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "diagnose"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống diagnose (happy) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|diagnose|happy|Senior",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong diagnose (happy) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 5800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 5800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh happy của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-010",
    "slug": "tech-010",
    "title": "Domain immersion theo ngành – diagnose (happy)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "diagnose"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống diagnose (happy) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-DOM|diagnose|happy|Junior",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong diagnose (happy) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 5900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 5900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh happy của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-011",
    "slug": "tech-011",
    "title": "Chiến lược & kiến trúc nghiệp vụ – specify (happy)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "specify"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống specify (happy) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|specify|happy|Middle",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong specify (happy) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 6000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 6000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh happy của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-012",
    "slug": "tech-012",
    "title": "Quy trình & mô hình vận hành – specify (happy)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "specify"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống specify (happy) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|specify|happy|Senior",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong specify (happy) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 6100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 6100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh happy của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-013",
    "slug": "tech-013",
    "title": "Yêu cầu & thiết kế giải pháp – specify (happy)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "specify"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống specify (happy) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|specify|happy|Junior",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong specify (happy) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 6200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 6200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh happy của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-014",
    "slug": "tech-014",
    "title": "Dữ liệu, báo cáo & phân tích – specify (happy)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "specify"
    ],
    "industry": "Bảo hiểm",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống specify (happy) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|specify|happy|Middle",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong specify (happy) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 6300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 6300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh happy của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-015",
    "slug": "tech-015",
    "title": "Tích hợp & API – specify (happy)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "specify"
    ],
    "industry": "Y tế & dược",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống specify (happy) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|specify|happy|Senior",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong specify (happy) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 6400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 6400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh happy của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-016",
    "slug": "tech-016",
    "title": "Sản phẩm số & trải nghiệm – specify (happy)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "specify"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống specify (happy) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|specify|happy|Junior",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong specify (happy) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 6500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 6500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh happy của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-017",
    "slug": "tech-017",
    "title": "Bảo mật, rủi ro & tuân thủ – specify (happy)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "specify"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống specify (happy) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|specify|happy|Middle",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong specify (happy) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 6600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 6600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh happy của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-018",
    "slug": "tech-018",
    "title": "Thay đổi & adoption – specify (happy)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "specify"
    ],
    "industry": "SaaS & B2B",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống specify (happy) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|specify|happy|Senior",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong specify (happy) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 6700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 6700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh happy của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-019",
    "slug": "tech-019",
    "title": "Đánh giá giải pháp & nghiệm thu – specify (happy)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "specify"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống specify (happy) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|specify|happy|Junior",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong specify (happy) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 6800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 6800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh happy của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-020",
    "slug": "tech-020",
    "title": "Domain immersion theo ngành – specify (happy)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "specify"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống specify (happy) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-DOM|specify|happy|Middle",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong specify (happy) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 6900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 6900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh happy của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-021",
    "slug": "tech-021",
    "title": "Chiến lược & kiến trúc nghiệp vụ – design-tests (happy)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "design-tests"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống design-tests (happy) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|design-tests|happy|Senior",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong design-tests (happy) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 7000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 7000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh happy của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-022",
    "slug": "tech-022",
    "title": "Quy trình & mô hình vận hành – design-tests (happy)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "design-tests"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống design-tests (happy) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|design-tests|happy|Junior",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong design-tests (happy) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 7100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 7100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh happy của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-023",
    "slug": "tech-023",
    "title": "Yêu cầu & thiết kế giải pháp – design-tests (happy)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "design-tests"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống design-tests (happy) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|design-tests|happy|Middle",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong design-tests (happy) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 7200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 7200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh happy của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-024",
    "slug": "tech-024",
    "title": "Dữ liệu, báo cáo & phân tích – design-tests (happy)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "design-tests"
    ],
    "industry": "Bảo hiểm",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống design-tests (happy) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|design-tests|happy|Senior",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong design-tests (happy) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 7300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 7300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh happy của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-025",
    "slug": "tech-025",
    "title": "Tích hợp & API – design-tests (happy)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "design-tests"
    ],
    "industry": "Y tế & dược",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống design-tests (happy) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|design-tests|happy|Junior",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong design-tests (happy) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 7400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 7400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh happy của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-026",
    "slug": "tech-026",
    "title": "Sản phẩm số & trải nghiệm – design-tests (happy)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "design-tests"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống design-tests (happy) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|design-tests|happy|Middle",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong design-tests (happy) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 7500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 7500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh happy của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-027",
    "slug": "tech-027",
    "title": "Bảo mật, rủi ro & tuân thủ – design-tests (happy)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "design-tests"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống design-tests (happy) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|design-tests|happy|Senior",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong design-tests (happy) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 7600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 7600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh happy của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-028",
    "slug": "tech-028",
    "title": "Thay đổi & adoption – design-tests (happy)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "design-tests"
    ],
    "industry": "SaaS & B2B",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống design-tests (happy) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|design-tests|happy|Junior",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong design-tests (happy) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 7700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 7700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh happy của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-029",
    "slug": "tech-029",
    "title": "Đánh giá giải pháp & nghiệm thu – design-tests (happy)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "design-tests"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống design-tests (happy) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|design-tests|happy|Middle",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong design-tests (happy) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 7800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 7800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh happy của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-030",
    "slug": "tech-030",
    "title": "Domain immersion theo ngành – design-tests (happy)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "design-tests"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống design-tests (happy) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-DOM|design-tests|happy|Senior",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong design-tests (happy) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 7900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 7900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh happy của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-031",
    "slug": "tech-031",
    "title": "Chiến lược & kiến trúc nghiệp vụ – trade-off (happy)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "trade-off"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống trade-off (happy) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|trade-off|happy|Junior",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong trade-off (happy) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 8000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 8000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh happy của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-032",
    "slug": "tech-032",
    "title": "Quy trình & mô hình vận hành – trade-off (happy)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "trade-off"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống trade-off (happy) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|trade-off|happy|Middle",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong trade-off (happy) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 8100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 8100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh happy của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-033",
    "slug": "tech-033",
    "title": "Yêu cầu & thiết kế giải pháp – trade-off (happy)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "trade-off"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống trade-off (happy) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|trade-off|happy|Senior",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong trade-off (happy) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 8200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 8200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh happy của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-034",
    "slug": "tech-034",
    "title": "Dữ liệu, báo cáo & phân tích – trade-off (happy)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "trade-off"
    ],
    "industry": "Bảo hiểm",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống trade-off (happy) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|trade-off|happy|Junior",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong trade-off (happy) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 8300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 8300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh happy của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-035",
    "slug": "tech-035",
    "title": "Tích hợp & API – trade-off (happy)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "trade-off"
    ],
    "industry": "Y tế & dược",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống trade-off (happy) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|trade-off|happy|Middle",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong trade-off (happy) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 8400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 8400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh happy của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-036",
    "slug": "tech-036",
    "title": "Sản phẩm số & trải nghiệm – trade-off (happy)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "trade-off"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống trade-off (happy) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|trade-off|happy|Senior",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong trade-off (happy) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 8500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 8500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh happy của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-037",
    "slug": "tech-037",
    "title": "Bảo mật, rủi ro & tuân thủ – trade-off (happy)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "trade-off"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống trade-off (happy) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|trade-off|happy|Junior",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong trade-off (happy) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 8600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 8600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh happy của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-038",
    "slug": "tech-038",
    "title": "Thay đổi & adoption – trade-off (happy)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "trade-off"
    ],
    "industry": "SaaS & B2B",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống trade-off (happy) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|trade-off|happy|Middle",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong trade-off (happy) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 8700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 8700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh happy của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-039",
    "slug": "tech-039",
    "title": "Đánh giá giải pháp & nghiệm thu – trade-off (happy)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "trade-off"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống trade-off (happy) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|trade-off|happy|Senior",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong trade-off (happy) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 8800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 8800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh happy của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-040",
    "slug": "tech-040",
    "title": "Domain immersion theo ngành – trade-off (happy)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "trade-off"
    ],
    "industry": "Bảo hiểm",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "happy",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống trade-off (happy) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DOM|trade-off|happy|Junior",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong trade-off (happy) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh happy.",
    "facts": [
      "Hệ thống hiện có 8900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 8900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh happy của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống happy?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (happy) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-041",
    "slug": "tech-041",
    "title": "Chiến lược & kiến trúc nghiệp vụ – diagnose (exception)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "diagnose"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống diagnose (exception) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|diagnose|exception|Middle",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong diagnose (exception) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 9000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 9000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh exception của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-042",
    "slug": "tech-042",
    "title": "Quy trình & mô hình vận hành – diagnose (exception)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "diagnose"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống diagnose (exception) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|diagnose|exception|Senior",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong diagnose (exception) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 9100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 9100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh exception của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-043",
    "slug": "tech-043",
    "title": "Yêu cầu & thiết kế giải pháp – diagnose (exception)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "diagnose"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống diagnose (exception) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|diagnose|exception|Junior",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong diagnose (exception) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 9200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 9200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh exception của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-044",
    "slug": "tech-044",
    "title": "Dữ liệu, báo cáo & phân tích – diagnose (exception)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "diagnose"
    ],
    "industry": "Bảo hiểm",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống diagnose (exception) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|diagnose|exception|Middle",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong diagnose (exception) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 9300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 9300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh exception của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-045",
    "slug": "tech-045",
    "title": "Tích hợp & API – diagnose (exception)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "diagnose"
    ],
    "industry": "Y tế & dược",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống diagnose (exception) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|diagnose|exception|Senior",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong diagnose (exception) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 9400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 9400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh exception của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-046",
    "slug": "tech-046",
    "title": "Sản phẩm số & trải nghiệm – diagnose (exception)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "diagnose"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống diagnose (exception) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|diagnose|exception|Junior",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong diagnose (exception) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 9500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 9500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh exception của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-047",
    "slug": "tech-047",
    "title": "Bảo mật, rủi ro & tuân thủ – diagnose (exception)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "diagnose"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống diagnose (exception) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|diagnose|exception|Middle",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong diagnose (exception) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 9600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 9600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh exception của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-048",
    "slug": "tech-048",
    "title": "Thay đổi & adoption – diagnose (exception)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "diagnose"
    ],
    "industry": "SaaS & B2B",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống diagnose (exception) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|diagnose|exception|Senior",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong diagnose (exception) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 9700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 9700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh exception của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-049",
    "slug": "tech-049",
    "title": "Đánh giá giải pháp & nghiệm thu – diagnose (exception)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "diagnose"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống diagnose (exception) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|diagnose|exception|Junior",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong diagnose (exception) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 9800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 9800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh exception của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-050",
    "slug": "tech-050",
    "title": "Domain immersion theo ngành – diagnose (exception)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "diagnose"
    ],
    "industry": "Y tế & dược",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống diagnose (exception) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-DOM|diagnose|exception|Middle",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong diagnose (exception) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 9900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 9900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh exception của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-051",
    "slug": "tech-051",
    "title": "Chiến lược & kiến trúc nghiệp vụ – specify (exception)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "specify"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống specify (exception) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|specify|exception|Senior",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong specify (exception) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 10000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 10000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh exception của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-052",
    "slug": "tech-052",
    "title": "Quy trình & mô hình vận hành – specify (exception)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "specify"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống specify (exception) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|specify|exception|Junior",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong specify (exception) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 10100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 10100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh exception của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-053",
    "slug": "tech-053",
    "title": "Yêu cầu & thiết kế giải pháp – specify (exception)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "specify"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống specify (exception) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|specify|exception|Middle",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong specify (exception) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 10200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 10200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh exception của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-054",
    "slug": "tech-054",
    "title": "Dữ liệu, báo cáo & phân tích – specify (exception)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "specify"
    ],
    "industry": "Bảo hiểm",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống specify (exception) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|specify|exception|Senior",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong specify (exception) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 10300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 10300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh exception của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-055",
    "slug": "tech-055",
    "title": "Tích hợp & API – specify (exception)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "specify"
    ],
    "industry": "Y tế & dược",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống specify (exception) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|specify|exception|Junior",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong specify (exception) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 10400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 10400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh exception của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-056",
    "slug": "tech-056",
    "title": "Sản phẩm số & trải nghiệm – specify (exception)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "specify"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống specify (exception) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|specify|exception|Middle",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong specify (exception) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 10500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 10500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh exception của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-057",
    "slug": "tech-057",
    "title": "Bảo mật, rủi ro & tuân thủ – specify (exception)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "specify"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống specify (exception) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|specify|exception|Senior",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong specify (exception) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 10600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 10600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh exception của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-058",
    "slug": "tech-058",
    "title": "Thay đổi & adoption – specify (exception)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "specify"
    ],
    "industry": "SaaS & B2B",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống specify (exception) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|specify|exception|Junior",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong specify (exception) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 10700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 10700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh exception của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-059",
    "slug": "tech-059",
    "title": "Đánh giá giải pháp & nghiệm thu – specify (exception)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "specify"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống specify (exception) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|specify|exception|Middle",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong specify (exception) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 10800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 10800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh exception của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-060",
    "slug": "tech-060",
    "title": "Domain immersion theo ngành – specify (exception)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "specify"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống specify (exception) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-DOM|specify|exception|Senior",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong specify (exception) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 10900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 10900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh exception của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-061",
    "slug": "tech-061",
    "title": "Chiến lược & kiến trúc nghiệp vụ – design-tests (exception)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "design-tests"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống design-tests (exception) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|design-tests|exception|Junior",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong design-tests (exception) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 11000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 11000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh exception của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-062",
    "slug": "tech-062",
    "title": "Quy trình & mô hình vận hành – design-tests (exception)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "design-tests"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống design-tests (exception) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|design-tests|exception|Middle",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong design-tests (exception) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 11100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 11100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh exception của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-063",
    "slug": "tech-063",
    "title": "Yêu cầu & thiết kế giải pháp – design-tests (exception)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "design-tests"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống design-tests (exception) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|design-tests|exception|Senior",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong design-tests (exception) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 11200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 11200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh exception của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-064",
    "slug": "tech-064",
    "title": "Dữ liệu, báo cáo & phân tích – design-tests (exception)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "design-tests"
    ],
    "industry": "Bảo hiểm",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống design-tests (exception) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|design-tests|exception|Junior",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong design-tests (exception) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 11300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 11300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh exception của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-065",
    "slug": "tech-065",
    "title": "Tích hợp & API – design-tests (exception)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "design-tests"
    ],
    "industry": "Y tế & dược",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống design-tests (exception) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|design-tests|exception|Middle",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong design-tests (exception) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 11400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 11400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh exception của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-066",
    "slug": "tech-066",
    "title": "Sản phẩm số & trải nghiệm – design-tests (exception)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "design-tests"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống design-tests (exception) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|design-tests|exception|Senior",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong design-tests (exception) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 11500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 11500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh exception của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-067",
    "slug": "tech-067",
    "title": "Bảo mật, rủi ro & tuân thủ – design-tests (exception)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "design-tests"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống design-tests (exception) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|design-tests|exception|Junior",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong design-tests (exception) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 11600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 11600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh exception của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-068",
    "slug": "tech-068",
    "title": "Thay đổi & adoption – design-tests (exception)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "design-tests"
    ],
    "industry": "SaaS & B2B",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống design-tests (exception) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|design-tests|exception|Middle",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong design-tests (exception) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 11700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 11700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh exception của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-069",
    "slug": "tech-069",
    "title": "Đánh giá giải pháp & nghiệm thu – design-tests (exception)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "design-tests"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống design-tests (exception) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|design-tests|exception|Senior",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong design-tests (exception) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 11800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 11800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh exception của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-070",
    "slug": "tech-070",
    "title": "Domain immersion theo ngành – design-tests (exception)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "design-tests"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống design-tests (exception) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-DOM|design-tests|exception|Junior",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong design-tests (exception) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 11900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 11900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh exception của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-071",
    "slug": "tech-071",
    "title": "Chiến lược & kiến trúc nghiệp vụ – trade-off (exception)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "trade-off"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống trade-off (exception) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|trade-off|exception|Middle",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong trade-off (exception) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 12000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 12000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh exception của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-072",
    "slug": "tech-072",
    "title": "Quy trình & mô hình vận hành – trade-off (exception)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "trade-off"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống trade-off (exception) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|trade-off|exception|Senior",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong trade-off (exception) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 12100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 12100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh exception của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-073",
    "slug": "tech-073",
    "title": "Yêu cầu & thiết kế giải pháp – trade-off (exception)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "trade-off"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống trade-off (exception) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|trade-off|exception|Junior",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong trade-off (exception) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 12200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 12200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh exception của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-074",
    "slug": "tech-074",
    "title": "Dữ liệu, báo cáo & phân tích – trade-off (exception)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "trade-off"
    ],
    "industry": "Bảo hiểm",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống trade-off (exception) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|trade-off|exception|Middle",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong trade-off (exception) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 12300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 12300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh exception của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-075",
    "slug": "tech-075",
    "title": "Tích hợp & API – trade-off (exception)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "trade-off"
    ],
    "industry": "Y tế & dược",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống trade-off (exception) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|trade-off|exception|Senior",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong trade-off (exception) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 12400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 12400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh exception của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-076",
    "slug": "tech-076",
    "title": "Sản phẩm số & trải nghiệm – trade-off (exception)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "trade-off"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống trade-off (exception) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|trade-off|exception|Junior",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong trade-off (exception) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 12500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 12500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh exception của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-077",
    "slug": "tech-077",
    "title": "Bảo mật, rủi ro & tuân thủ – trade-off (exception)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "trade-off"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống trade-off (exception) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|trade-off|exception|Middle",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong trade-off (exception) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 12600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 12600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh exception của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-078",
    "slug": "tech-078",
    "title": "Thay đổi & adoption – trade-off (exception)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "trade-off"
    ],
    "industry": "SaaS & B2B",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống trade-off (exception) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|trade-off|exception|Senior",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong trade-off (exception) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 12700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 12700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh exception của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-079",
    "slug": "tech-079",
    "title": "Đánh giá giải pháp & nghiệm thu – trade-off (exception)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "trade-off"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống trade-off (exception) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|trade-off|exception|Junior",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong trade-off (exception) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 12800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 12800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh exception của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-080",
    "slug": "tech-080",
    "title": "Domain immersion theo ngành – trade-off (exception)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "trade-off"
    ],
    "industry": "SaaS & B2B",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "exception",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống trade-off (exception) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-DOM|trade-off|exception|Middle",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong trade-off (exception) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh exception.",
    "facts": [
      "Hệ thống hiện có 12900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 12900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh exception của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống exception?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (exception) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-081",
    "slug": "tech-081",
    "title": "Chiến lược & kiến trúc nghiệp vụ – diagnose (scale)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "diagnose"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống diagnose (scale) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|diagnose|scale|Senior",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong diagnose (scale) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 13000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 13000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh scale của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-082",
    "slug": "tech-082",
    "title": "Quy trình & mô hình vận hành – diagnose (scale)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "diagnose"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống diagnose (scale) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|diagnose|scale|Junior",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong diagnose (scale) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 13100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 13100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh scale của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-083",
    "slug": "tech-083",
    "title": "Yêu cầu & thiết kế giải pháp – diagnose (scale)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "diagnose"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống diagnose (scale) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|diagnose|scale|Middle",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong diagnose (scale) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 13200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 13200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh scale của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-084",
    "slug": "tech-084",
    "title": "Dữ liệu, báo cáo & phân tích – diagnose (scale)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "diagnose"
    ],
    "industry": "Bảo hiểm",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống diagnose (scale) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|diagnose|scale|Senior",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong diagnose (scale) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 13300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 13300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh scale của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-085",
    "slug": "tech-085",
    "title": "Tích hợp & API – diagnose (scale)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "diagnose"
    ],
    "industry": "Y tế & dược",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống diagnose (scale) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|diagnose|scale|Junior",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong diagnose (scale) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 13400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 13400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh scale của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-086",
    "slug": "tech-086",
    "title": "Sản phẩm số & trải nghiệm – diagnose (scale)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "diagnose"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống diagnose (scale) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|diagnose|scale|Middle",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong diagnose (scale) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 13500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 13500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh scale của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-087",
    "slug": "tech-087",
    "title": "Bảo mật, rủi ro & tuân thủ – diagnose (scale)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "diagnose"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống diagnose (scale) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|diagnose|scale|Senior",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong diagnose (scale) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 13600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 13600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh scale của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-088",
    "slug": "tech-088",
    "title": "Thay đổi & adoption – diagnose (scale)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "diagnose"
    ],
    "industry": "SaaS & B2B",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống diagnose (scale) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|diagnose|scale|Junior",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong diagnose (scale) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 13700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 13700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh scale của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-089",
    "slug": "tech-089",
    "title": "Đánh giá giải pháp & nghiệm thu – diagnose (scale)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "diagnose"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống diagnose (scale) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|diagnose|scale|Middle",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong diagnose (scale) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 13800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 13800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh scale của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-090",
    "slug": "tech-090",
    "title": "Domain immersion theo ngành – diagnose (scale)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "diagnose"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống diagnose (scale) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-DOM|diagnose|scale|Senior",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong diagnose (scale) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 13900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 13900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh scale của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-091",
    "slug": "tech-091",
    "title": "Chiến lược & kiến trúc nghiệp vụ – specify (scale)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "specify"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống specify (scale) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|specify|scale|Junior",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong specify (scale) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 14000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 14000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh scale của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-092",
    "slug": "tech-092",
    "title": "Quy trình & mô hình vận hành – specify (scale)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "specify"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống specify (scale) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|specify|scale|Middle",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong specify (scale) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 14100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 14100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh scale của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-093",
    "slug": "tech-093",
    "title": "Yêu cầu & thiết kế giải pháp – specify (scale)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "specify"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống specify (scale) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|specify|scale|Senior",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong specify (scale) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 14200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 14200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh scale của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-094",
    "slug": "tech-094",
    "title": "Dữ liệu, báo cáo & phân tích – specify (scale)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "specify"
    ],
    "industry": "Bảo hiểm",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống specify (scale) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|specify|scale|Junior",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong specify (scale) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 14300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 14300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh scale của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-095",
    "slug": "tech-095",
    "title": "Tích hợp & API – specify (scale)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "specify"
    ],
    "industry": "Y tế & dược",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống specify (scale) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|specify|scale|Middle",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong specify (scale) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 14400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 14400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh scale của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-096",
    "slug": "tech-096",
    "title": "Sản phẩm số & trải nghiệm – specify (scale)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "specify"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống specify (scale) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|specify|scale|Senior",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong specify (scale) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 14500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 14500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh scale của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-097",
    "slug": "tech-097",
    "title": "Bảo mật, rủi ro & tuân thủ – specify (scale)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "specify"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống specify (scale) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|specify|scale|Junior",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong specify (scale) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 14600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 14600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh scale của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-098",
    "slug": "tech-098",
    "title": "Thay đổi & adoption – specify (scale)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "specify"
    ],
    "industry": "SaaS & B2B",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống specify (scale) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|specify|scale|Middle",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong specify (scale) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 14700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 14700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh scale của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-099",
    "slug": "tech-099",
    "title": "Đánh giá giải pháp & nghiệm thu – specify (scale)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "specify"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống specify (scale) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|specify|scale|Senior",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong specify (scale) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 14800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 14800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh scale của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-100",
    "slug": "tech-100",
    "title": "Domain immersion theo ngành – specify (scale)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "specify"
    ],
    "industry": "Khu vực công & tuân thủ",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống specify (scale) thuộc ngành khu vực công & tuân thủ.",
    "situationKey": "tb|TB-DOM|specify|scale|Junior",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong specify (scale) thuoc nganh khu vuc cong & tuan thu.",
    "context": "Dự án khu vực công & tuân thủ cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 14900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 14900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh scale của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-101",
    "slug": "tech-101",
    "title": "Chiến lược & kiến trúc nghiệp vụ – design-tests (scale)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "design-tests"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống design-tests (scale) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|design-tests|scale|Middle",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong design-tests (scale) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 15000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 15000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh scale của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-102",
    "slug": "tech-102",
    "title": "Quy trình & mô hình vận hành – design-tests (scale)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "design-tests"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống design-tests (scale) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|design-tests|scale|Senior",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong design-tests (scale) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 15100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 15100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh scale của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-103",
    "slug": "tech-103",
    "title": "Yêu cầu & thiết kế giải pháp – design-tests (scale)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "design-tests"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống design-tests (scale) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|design-tests|scale|Junior",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong design-tests (scale) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 15200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 15200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh scale của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-104",
    "slug": "tech-104",
    "title": "Dữ liệu, báo cáo & phân tích – design-tests (scale)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "design-tests"
    ],
    "industry": "Bảo hiểm",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống design-tests (scale) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|design-tests|scale|Middle",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong design-tests (scale) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 15300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 15300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh scale của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-105",
    "slug": "tech-105",
    "title": "Tích hợp & API – design-tests (scale)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "design-tests"
    ],
    "industry": "Y tế & dược",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống design-tests (scale) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|design-tests|scale|Senior",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong design-tests (scale) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 15400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 15400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh scale của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-106",
    "slug": "tech-106",
    "title": "Sản phẩm số & trải nghiệm – design-tests (scale)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "design-tests"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống design-tests (scale) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|design-tests|scale|Junior",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong design-tests (scale) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 15500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 15500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh scale của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-107",
    "slug": "tech-107",
    "title": "Bảo mật, rủi ro & tuân thủ – design-tests (scale)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "design-tests"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống design-tests (scale) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|design-tests|scale|Middle",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong design-tests (scale) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 15600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 15600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh scale của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-108",
    "slug": "tech-108",
    "title": "Thay đổi & adoption – design-tests (scale)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "design-tests"
    ],
    "industry": "SaaS & B2B",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống design-tests (scale) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|design-tests|scale|Senior",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong design-tests (scale) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 15700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 15700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh scale của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-109",
    "slug": "tech-109",
    "title": "Đánh giá giải pháp & nghiệm thu – design-tests (scale)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "design-tests"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống design-tests (scale) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|design-tests|scale|Junior",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong design-tests (scale) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 15800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 15800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh scale của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-110",
    "slug": "tech-110",
    "title": "Domain immersion theo ngành – design-tests (scale)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "design-tests"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống design-tests (scale) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-DOM|design-tests|scale|Middle",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong design-tests (scale) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 15900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 15900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh scale của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-111",
    "slug": "tech-111",
    "title": "Chiến lược & kiến trúc nghiệp vụ – trade-off (scale)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "trade-off"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống trade-off (scale) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|trade-off|scale|Senior",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong trade-off (scale) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 16000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 16000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh scale của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-112",
    "slug": "tech-112",
    "title": "Quy trình & mô hình vận hành – trade-off (scale)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "trade-off"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống trade-off (scale) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|trade-off|scale|Junior",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong trade-off (scale) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 16100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 16100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh scale của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-113",
    "slug": "tech-113",
    "title": "Yêu cầu & thiết kế giải pháp – trade-off (scale)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "trade-off"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống trade-off (scale) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|trade-off|scale|Middle",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong trade-off (scale) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 16200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 16200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh scale của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-114",
    "slug": "tech-114",
    "title": "Dữ liệu, báo cáo & phân tích – trade-off (scale)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "trade-off"
    ],
    "industry": "Bảo hiểm",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống trade-off (scale) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|trade-off|scale|Senior",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong trade-off (scale) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 16300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 16300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh scale của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-115",
    "slug": "tech-115",
    "title": "Tích hợp & API – trade-off (scale)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "trade-off"
    ],
    "industry": "Y tế & dược",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống trade-off (scale) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|trade-off|scale|Junior",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong trade-off (scale) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 16400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 16400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh scale của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-116",
    "slug": "tech-116",
    "title": "Sản phẩm số & trải nghiệm – trade-off (scale)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "trade-off"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống trade-off (scale) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|trade-off|scale|Middle",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong trade-off (scale) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 16500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 16500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh scale của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-117",
    "slug": "tech-117",
    "title": "Bảo mật, rủi ro & tuân thủ – trade-off (scale)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "trade-off"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống trade-off (scale) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|trade-off|scale|Senior",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong trade-off (scale) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 16600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 16600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh scale của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-118",
    "slug": "tech-118",
    "title": "Thay đổi & adoption – trade-off (scale)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "trade-off"
    ],
    "industry": "SaaS & B2B",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống trade-off (scale) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|trade-off|scale|Junior",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong trade-off (scale) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 16700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 16700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh scale của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-119",
    "slug": "tech-119",
    "title": "Đánh giá giải pháp & nghiệm thu – trade-off (scale)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "trade-off"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống trade-off (scale) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|trade-off|scale|Middle",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong trade-off (scale) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 16800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 16800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh scale của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-120",
    "slug": "tech-120",
    "title": "Domain immersion theo ngành – trade-off (scale)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "trade-off"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "scale",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống trade-off (scale) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-DOM|trade-off|scale|Senior",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong trade-off (scale) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh scale.",
    "facts": [
      "Hệ thống hiện có 16900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 16900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh scale của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống scale?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (scale) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-121",
    "slug": "tech-121",
    "title": "Chiến lược & kiến trúc nghiệp vụ – diagnose (migration)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "diagnose"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống diagnose (migration) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|diagnose|migration|Junior",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong diagnose (migration) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 17000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 17000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh migration của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-122",
    "slug": "tech-122",
    "title": "Quy trình & mô hình vận hành – diagnose (migration)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "diagnose"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống diagnose (migration) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|diagnose|migration|Middle",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong diagnose (migration) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 17100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 17100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh migration của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-123",
    "slug": "tech-123",
    "title": "Yêu cầu & thiết kế giải pháp – diagnose (migration)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "diagnose"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống diagnose (migration) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|diagnose|migration|Senior",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong diagnose (migration) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 17200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 17200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh migration của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-124",
    "slug": "tech-124",
    "title": "Dữ liệu, báo cáo & phân tích – diagnose (migration)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "diagnose"
    ],
    "industry": "Bảo hiểm",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống diagnose (migration) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|diagnose|migration|Junior",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong diagnose (migration) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 17300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 17300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh migration của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-125",
    "slug": "tech-125",
    "title": "Tích hợp & API – diagnose (migration)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "diagnose"
    ],
    "industry": "Y tế & dược",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống diagnose (migration) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|diagnose|migration|Middle",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong diagnose (migration) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 17400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 17400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh migration của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-126",
    "slug": "tech-126",
    "title": "Sản phẩm số & trải nghiệm – diagnose (migration)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "diagnose"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống diagnose (migration) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|diagnose|migration|Senior",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong diagnose (migration) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 17500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 17500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh migration của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-127",
    "slug": "tech-127",
    "title": "Bảo mật, rủi ro & tuân thủ – diagnose (migration)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "diagnose"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống diagnose (migration) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|diagnose|migration|Junior",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong diagnose (migration) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 17600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 17600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh migration của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-128",
    "slug": "tech-128",
    "title": "Thay đổi & adoption – diagnose (migration)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "diagnose"
    ],
    "industry": "SaaS & B2B",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống diagnose (migration) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|diagnose|migration|Middle",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong diagnose (migration) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 17700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 17700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh migration của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-129",
    "slug": "tech-129",
    "title": "Đánh giá giải pháp & nghiệm thu – diagnose (migration)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "diagnose"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống diagnose (migration) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|diagnose|migration|Senior",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong diagnose (migration) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 17800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 17800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh migration của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-130",
    "slug": "tech-130",
    "title": "Domain immersion theo ngành – diagnose (migration)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "diagnose"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống diagnose (migration) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-DOM|diagnose|migration|Junior",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong diagnose (migration) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 17900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 17900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh migration của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-131",
    "slug": "tech-131",
    "title": "Chiến lược & kiến trúc nghiệp vụ – specify (migration)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "specify"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống specify (migration) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|specify|migration|Middle",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong specify (migration) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 18000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 18000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh migration của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-132",
    "slug": "tech-132",
    "title": "Quy trình & mô hình vận hành – specify (migration)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "specify"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống specify (migration) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|specify|migration|Senior",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong specify (migration) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 18100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 18100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh migration của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-133",
    "slug": "tech-133",
    "title": "Yêu cầu & thiết kế giải pháp – specify (migration)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "specify"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống specify (migration) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|specify|migration|Junior",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong specify (migration) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 18200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 18200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh migration của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-134",
    "slug": "tech-134",
    "title": "Dữ liệu, báo cáo & phân tích – specify (migration)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "specify"
    ],
    "industry": "Bảo hiểm",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống specify (migration) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|specify|migration|Middle",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong specify (migration) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 18300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 18300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh migration của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-135",
    "slug": "tech-135",
    "title": "Tích hợp & API – specify (migration)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "specify"
    ],
    "industry": "Y tế & dược",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống specify (migration) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|specify|migration|Senior",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong specify (migration) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 18400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 18400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh migration của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-136",
    "slug": "tech-136",
    "title": "Sản phẩm số & trải nghiệm – specify (migration)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "specify"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống specify (migration) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|specify|migration|Junior",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong specify (migration) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 18500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 18500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh migration của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-137",
    "slug": "tech-137",
    "title": "Bảo mật, rủi ro & tuân thủ – specify (migration)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "specify"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống specify (migration) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|specify|migration|Middle",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong specify (migration) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 18600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 18600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh migration của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-138",
    "slug": "tech-138",
    "title": "Thay đổi & adoption – specify (migration)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "specify"
    ],
    "industry": "SaaS & B2B",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống specify (migration) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|specify|migration|Senior",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong specify (migration) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 18700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 18700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh migration của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-139",
    "slug": "tech-139",
    "title": "Đánh giá giải pháp & nghiệm thu – specify (migration)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "specify"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống specify (migration) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|specify|migration|Junior",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong specify (migration) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 18800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 18800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh migration của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-140",
    "slug": "tech-140",
    "title": "Domain immersion theo ngành – specify (migration)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "specify"
    ],
    "industry": "Bảo hiểm",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống specify (migration) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DOM|specify|migration|Middle",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong specify (migration) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 18900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 18900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh migration của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-141",
    "slug": "tech-141",
    "title": "Chiến lược & kiến trúc nghiệp vụ – design-tests (migration)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "design-tests"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống design-tests (migration) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|design-tests|migration|Senior",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong design-tests (migration) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 19000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 19000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh migration của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-142",
    "slug": "tech-142",
    "title": "Quy trình & mô hình vận hành – design-tests (migration)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "design-tests"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống design-tests (migration) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|design-tests|migration|Junior",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong design-tests (migration) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 19100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 19100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh migration của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-143",
    "slug": "tech-143",
    "title": "Yêu cầu & thiết kế giải pháp – design-tests (migration)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "design-tests"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống design-tests (migration) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|design-tests|migration|Middle",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong design-tests (migration) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 19200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 19200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh migration của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-144",
    "slug": "tech-144",
    "title": "Dữ liệu, báo cáo & phân tích – design-tests (migration)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "design-tests"
    ],
    "industry": "Bảo hiểm",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống design-tests (migration) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|design-tests|migration|Senior",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong design-tests (migration) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 19300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 19300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh migration của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-145",
    "slug": "tech-145",
    "title": "Tích hợp & API – design-tests (migration)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "design-tests"
    ],
    "industry": "Y tế & dược",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống design-tests (migration) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|design-tests|migration|Junior",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong design-tests (migration) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 19400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 19400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh migration của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-146",
    "slug": "tech-146",
    "title": "Sản phẩm số & trải nghiệm – design-tests (migration)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "design-tests"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống design-tests (migration) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|design-tests|migration|Middle",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong design-tests (migration) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 19500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 19500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh migration của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-147",
    "slug": "tech-147",
    "title": "Bảo mật, rủi ro & tuân thủ – design-tests (migration)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "design-tests"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống design-tests (migration) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|design-tests|migration|Senior",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong design-tests (migration) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 19600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 19600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh migration của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-148",
    "slug": "tech-148",
    "title": "Thay đổi & adoption – design-tests (migration)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "design-tests"
    ],
    "industry": "SaaS & B2B",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống design-tests (migration) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|design-tests|migration|Junior",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong design-tests (migration) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 19700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 19700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh migration của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-149",
    "slug": "tech-149",
    "title": "Đánh giá giải pháp & nghiệm thu – design-tests (migration)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "design-tests"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống design-tests (migration) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|design-tests|migration|Middle",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong design-tests (migration) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 19800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 19800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh migration của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-150",
    "slug": "tech-150",
    "title": "Domain immersion theo ngành – design-tests (migration)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "design-tests"
    ],
    "industry": "Y tế & dược",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống design-tests (migration) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-DOM|design-tests|migration|Senior",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong design-tests (migration) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 19900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 19900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh migration của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-151",
    "slug": "tech-151",
    "title": "Chiến lược & kiến trúc nghiệp vụ – trade-off (migration)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "trade-off"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống trade-off (migration) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|trade-off|migration|Junior",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong trade-off (migration) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 20000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 20000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh migration của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-152",
    "slug": "tech-152",
    "title": "Quy trình & mô hình vận hành – trade-off (migration)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "trade-off"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống trade-off (migration) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|trade-off|migration|Middle",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong trade-off (migration) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 20100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 20100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh migration của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-153",
    "slug": "tech-153",
    "title": "Yêu cầu & thiết kế giải pháp – trade-off (migration)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "trade-off"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống trade-off (migration) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|trade-off|migration|Senior",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong trade-off (migration) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 20200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 20200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh migration của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-154",
    "slug": "tech-154",
    "title": "Dữ liệu, báo cáo & phân tích – trade-off (migration)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "trade-off"
    ],
    "industry": "Bảo hiểm",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống trade-off (migration) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|trade-off|migration|Junior",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong trade-off (migration) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 20300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 20300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh migration của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-155",
    "slug": "tech-155",
    "title": "Tích hợp & API – trade-off (migration)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "trade-off"
    ],
    "industry": "Y tế & dược",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống trade-off (migration) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|trade-off|migration|Middle",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong trade-off (migration) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 20400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 20400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh migration của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-156",
    "slug": "tech-156",
    "title": "Sản phẩm số & trải nghiệm – trade-off (migration)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "trade-off"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống trade-off (migration) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|trade-off|migration|Senior",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong trade-off (migration) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 20500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 20500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh migration của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-157",
    "slug": "tech-157",
    "title": "Bảo mật, rủi ro & tuân thủ – trade-off (migration)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "trade-off"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống trade-off (migration) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|trade-off|migration|Junior",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong trade-off (migration) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 20600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 20600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh migration của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-158",
    "slug": "tech-158",
    "title": "Thay đổi & adoption – trade-off (migration)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "trade-off"
    ],
    "industry": "SaaS & B2B",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống trade-off (migration) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|trade-off|migration|Middle",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong trade-off (migration) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 20700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 20700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh migration của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-159",
    "slug": "tech-159",
    "title": "Đánh giá giải pháp & nghiệm thu – trade-off (migration)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "trade-off"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống trade-off (migration) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|trade-off|migration|Senior",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong trade-off (migration) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 20800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 20800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh migration của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-160",
    "slug": "tech-160",
    "title": "Domain immersion theo ngành – trade-off (migration)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "trade-off"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "migration",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống trade-off (migration) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-DOM|trade-off|migration|Junior",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong trade-off (migration) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh migration.",
    "facts": [
      "Hệ thống hiện có 20900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 20900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh migration của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống migration?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (migration) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-161",
    "slug": "tech-161",
    "title": "Chiến lược & kiến trúc nghiệp vụ – diagnose (compliance)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "diagnose"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống diagnose (compliance) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|diagnose|compliance|Middle",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong diagnose (compliance) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 21000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 21000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh compliance của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-162",
    "slug": "tech-162",
    "title": "Quy trình & mô hình vận hành – diagnose (compliance)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "diagnose"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống diagnose (compliance) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|diagnose|compliance|Senior",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong diagnose (compliance) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 21100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 21100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh compliance của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-163",
    "slug": "tech-163",
    "title": "Yêu cầu & thiết kế giải pháp – diagnose (compliance)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "diagnose"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống diagnose (compliance) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|diagnose|compliance|Junior",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong diagnose (compliance) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 21200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 21200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh compliance của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-164",
    "slug": "tech-164",
    "title": "Dữ liệu, báo cáo & phân tích – diagnose (compliance)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "diagnose"
    ],
    "industry": "Bảo hiểm",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống diagnose (compliance) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|diagnose|compliance|Middle",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong diagnose (compliance) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 21300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 21300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh compliance của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-165",
    "slug": "tech-165",
    "title": "Tích hợp & API – diagnose (compliance)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "diagnose"
    ],
    "industry": "Y tế & dược",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống diagnose (compliance) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|diagnose|compliance|Senior",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong diagnose (compliance) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 21400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 21400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh compliance của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-166",
    "slug": "tech-166",
    "title": "Sản phẩm số & trải nghiệm – diagnose (compliance)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "diagnose"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống diagnose (compliance) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|diagnose|compliance|Junior",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong diagnose (compliance) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 21500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 21500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh compliance của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-167",
    "slug": "tech-167",
    "title": "Bảo mật, rủi ro & tuân thủ – diagnose (compliance)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "diagnose"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống diagnose (compliance) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|diagnose|compliance|Middle",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong diagnose (compliance) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 21600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 21600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh compliance của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-168",
    "slug": "tech-168",
    "title": "Thay đổi & adoption – diagnose (compliance)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "diagnose"
    ],
    "industry": "SaaS & B2B",
    "level": "Senior",
    "exerciseFamily": "diagnose",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống diagnose (compliance) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|diagnose|compliance|Senior",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong diagnose (compliance) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 21700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 21700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh compliance của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-169",
    "slug": "tech-169",
    "title": "Đánh giá giải pháp & nghiệm thu – diagnose (compliance)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "diagnose"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Junior",
    "exerciseFamily": "diagnose",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống diagnose (compliance) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|diagnose|compliance|Junior",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong diagnose (compliance) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 21800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 21800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh compliance của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-170",
    "slug": "tech-170",
    "title": "Domain immersion theo ngành – diagnose (compliance)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "diagnose"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Middle",
    "exerciseFamily": "diagnose",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống diagnose (compliance) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-DOM|diagnose|compliance|Middle",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong diagnose (compliance) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 21900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 21900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh compliance của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-171",
    "slug": "tech-171",
    "title": "Chiến lược & kiến trúc nghiệp vụ – specify (compliance)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "specify"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống specify (compliance) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|specify|compliance|Senior",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong specify (compliance) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 22000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 22000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh compliance của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-172",
    "slug": "tech-172",
    "title": "Quy trình & mô hình vận hành – specify (compliance)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "specify"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống specify (compliance) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|specify|compliance|Junior",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong specify (compliance) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 22100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 22100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh compliance của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-173",
    "slug": "tech-173",
    "title": "Yêu cầu & thiết kế giải pháp – specify (compliance)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "specify"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống specify (compliance) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|specify|compliance|Middle",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong specify (compliance) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 22200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 22200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh compliance của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-174",
    "slug": "tech-174",
    "title": "Dữ liệu, báo cáo & phân tích – specify (compliance)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "specify"
    ],
    "industry": "Bảo hiểm",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống specify (compliance) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|specify|compliance|Senior",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong specify (compliance) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 22300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 22300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh compliance của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-175",
    "slug": "tech-175",
    "title": "Tích hợp & API – specify (compliance)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "specify"
    ],
    "industry": "Y tế & dược",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống specify (compliance) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|specify|compliance|Junior",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong specify (compliance) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 22400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 22400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh compliance của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-176",
    "slug": "tech-176",
    "title": "Sản phẩm số & trải nghiệm – specify (compliance)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "specify"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống specify (compliance) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|specify|compliance|Middle",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong specify (compliance) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 22500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 22500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh compliance của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-177",
    "slug": "tech-177",
    "title": "Bảo mật, rủi ro & tuân thủ – specify (compliance)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "specify"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống specify (compliance) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|specify|compliance|Senior",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong specify (compliance) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 22600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 22600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh compliance của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-178",
    "slug": "tech-178",
    "title": "Thay đổi & adoption – specify (compliance)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "specify"
    ],
    "industry": "SaaS & B2B",
    "level": "Junior",
    "exerciseFamily": "specify",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống specify (compliance) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|specify|compliance|Junior",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong specify (compliance) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 22700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 22700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh compliance của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-179",
    "slug": "tech-179",
    "title": "Đánh giá giải pháp & nghiệm thu – specify (compliance)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "specify"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Middle",
    "exerciseFamily": "specify",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống specify (compliance) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|specify|compliance|Middle",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong specify (compliance) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 22800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 22800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh compliance của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-180",
    "slug": "tech-180",
    "title": "Domain immersion theo ngành – specify (compliance)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "specify"
    ],
    "industry": "SaaS & B2B",
    "level": "Senior",
    "exerciseFamily": "specify",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống specify (compliance) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-DOM|specify|compliance|Senior",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong specify (compliance) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 22900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 22900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh compliance của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-181",
    "slug": "tech-181",
    "title": "Chiến lược & kiến trúc nghiệp vụ – design-tests (compliance)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "design-tests"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống design-tests (compliance) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|design-tests|compliance|Junior",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong design-tests (compliance) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 23000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 23000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh compliance của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-182",
    "slug": "tech-182",
    "title": "Quy trình & mô hình vận hành – design-tests (compliance)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "design-tests"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống design-tests (compliance) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|design-tests|compliance|Middle",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong design-tests (compliance) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 23100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 23100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh compliance của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-183",
    "slug": "tech-183",
    "title": "Yêu cầu & thiết kế giải pháp – design-tests (compliance)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "design-tests"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống design-tests (compliance) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|design-tests|compliance|Senior",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong design-tests (compliance) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 23200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 23200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh compliance của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-184",
    "slug": "tech-184",
    "title": "Dữ liệu, báo cáo & phân tích – design-tests (compliance)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "design-tests"
    ],
    "industry": "Bảo hiểm",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống design-tests (compliance) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|design-tests|compliance|Junior",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong design-tests (compliance) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 23300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 23300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh compliance của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-185",
    "slug": "tech-185",
    "title": "Tích hợp & API – design-tests (compliance)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "design-tests"
    ],
    "industry": "Y tế & dược",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống design-tests (compliance) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|design-tests|compliance|Middle",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong design-tests (compliance) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 23400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 23400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh compliance của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-186",
    "slug": "tech-186",
    "title": "Sản phẩm số & trải nghiệm – design-tests (compliance)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "design-tests"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống design-tests (compliance) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|design-tests|compliance|Senior",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong design-tests (compliance) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 23500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 23500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh compliance của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-187",
    "slug": "tech-187",
    "title": "Bảo mật, rủi ro & tuân thủ – design-tests (compliance)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "design-tests"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống design-tests (compliance) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|design-tests|compliance|Junior",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong design-tests (compliance) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 23600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 23600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh compliance của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-188",
    "slug": "tech-188",
    "title": "Thay đổi & adoption – design-tests (compliance)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "design-tests"
    ],
    "industry": "SaaS & B2B",
    "level": "Middle",
    "exerciseFamily": "design-tests",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống design-tests (compliance) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|design-tests|compliance|Middle",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong design-tests (compliance) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 23700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 23700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh compliance của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-189",
    "slug": "tech-189",
    "title": "Đánh giá giải pháp & nghiệm thu – design-tests (compliance)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "design-tests"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Senior",
    "exerciseFamily": "design-tests",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống design-tests (compliance) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|design-tests|compliance|Senior",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong design-tests (compliance) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 23800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 23800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh compliance của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-190",
    "slug": "tech-190",
    "title": "Domain immersion theo ngành – design-tests (compliance)",
    "baDomain": "TB-DOM",
    "baDomainName": "Domain immersion theo ngành",
    "technicalFocus": [
      "dom",
      "design-tests"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Junior",
    "exerciseFamily": "design-tests",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng domain immersion theo ngành trong tình huống design-tests (compliance) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-DOM|design-tests|compliance|Junior",
    "objectiveKey": "luyen ky nang domain immersion theo nganh trong tinh huong design-tests (compliance) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần domain immersion theo ngành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 23900 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 23900, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh compliance của Domain immersion theo ngành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Domain immersion theo ngành trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Domain immersion theo ngành (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DOM"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-191",
    "slug": "tech-191",
    "title": "Chiến lược & kiến trúc nghiệp vụ – trade-off (compliance)",
    "baDomain": "TB-STR",
    "baDomainName": "Chiến lược & kiến trúc nghiệp vụ",
    "technicalFocus": [
      "str",
      "trade-off"
    ],
    "industry": "Bán lẻ & TMĐT",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng chiến lược & kiến trúc nghiệp vụ trong tình huống trade-off (compliance) thuộc ngành bán lẻ & tmđt.",
    "situationKey": "tb|TB-STR|trade-off|compliance|Middle",
    "objectiveKey": "luyen ky nang chien luoc & kien truc nghiep vu trong tinh huong trade-off (compliance) thuoc nganh ban le & tmdt.",
    "context": "Dự án bán lẻ & tmđt cần chiến lược & kiến trúc nghiệp vụ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 24000 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 24000, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh compliance của Chiến lược & kiến trúc nghiệp vụ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Chiến lược & kiến trúc nghiệp vụ trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Chiến lược & kiến trúc nghiệp vụ (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-STR"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-192",
    "slug": "tech-192",
    "title": "Quy trình & mô hình vận hành – trade-off (compliance)",
    "baDomain": "TB-PRC",
    "baDomainName": "Quy trình & mô hình vận hành",
    "technicalFocus": [
      "prc",
      "trade-off"
    ],
    "industry": "Fintech & thanh toán",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng quy trình & mô hình vận hành trong tình huống trade-off (compliance) thuộc ngành fintech & thanh toán.",
    "situationKey": "tb|TB-PRC|trade-off|compliance|Senior",
    "objectiveKey": "luyen ky nang quy trinh & mo hinh van hanh trong tinh huong trade-off (compliance) thuoc nganh fintech & thanh toan.",
    "context": "Dự án fintech & thanh toán cần quy trình & mô hình vận hành. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 24100 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 24100, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh compliance của Quy trình & mô hình vận hành, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Quy trình & mô hình vận hành trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Quy trình & mô hình vận hành (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-PRC"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-193",
    "slug": "tech-193",
    "title": "Yêu cầu & thiết kế giải pháp – trade-off (compliance)",
    "baDomain": "TB-REQ",
    "baDomainName": "Yêu cầu & thiết kế giải pháp",
    "technicalFocus": [
      "req",
      "trade-off"
    ],
    "industry": "Ngân hàng & tín dụng",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng yêu cầu & thiết kế giải pháp trong tình huống trade-off (compliance) thuộc ngành ngân hàng & tín dụng.",
    "situationKey": "tb|TB-REQ|trade-off|compliance|Junior",
    "objectiveKey": "luyen ky nang yeu cau & thiet ke giai phap trong tinh huong trade-off (compliance) thuoc nganh ngan hang & tin dung.",
    "context": "Dự án ngân hàng & tín dụng cần yêu cầu & thiết kế giải pháp. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 24200 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 24200, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh compliance của Yêu cầu & thiết kế giải pháp, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Yêu cầu & thiết kế giải pháp trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Yêu cầu & thiết kế giải pháp (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-REQ"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "tech-194",
    "slug": "tech-194",
    "title": "Dữ liệu, báo cáo & phân tích – trade-off (compliance)",
    "baDomain": "TB-DAT",
    "baDomainName": "Dữ liệu, báo cáo & phân tích",
    "technicalFocus": [
      "dat",
      "trade-off"
    ],
    "industry": "Bảo hiểm",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng dữ liệu, báo cáo & phân tích trong tình huống trade-off (compliance) thuộc ngành bảo hiểm.",
    "situationKey": "tb|TB-DAT|trade-off|compliance|Middle",
    "objectiveKey": "luyen ky nang du lieu, bao cao & phan tich trong tinh huong trade-off (compliance) thuoc nganh bao hiem.",
    "context": "Dự án bảo hiểm cần dữ liệu, báo cáo & phân tích. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 24300 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 24300, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh compliance của Dữ liệu, báo cáo & phân tích, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Dữ liệu, báo cáo & phân tích trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Dữ liệu, báo cáo & phân tích (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-DAT"
    ],
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "Scrum Guide – https://scrumguides.org/"
    ]
  },
  {
    "id": "tech-195",
    "slug": "tech-195",
    "title": "Tích hợp & API – trade-off (compliance)",
    "baDomain": "TB-INT",
    "baDomainName": "Tích hợp & API",
    "technicalFocus": [
      "int",
      "trade-off"
    ],
    "industry": "Y tế & dược",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng tích hợp & api trong tình huống trade-off (compliance) thuộc ngành y tế & dược.",
    "situationKey": "tb|TB-INT|trade-off|compliance|Senior",
    "objectiveKey": "luyen ky nang tich hop & api trong tinh huong trade-off (compliance) thuoc nganh y te & duoc.",
    "context": "Dự án y tế & dược cần tích hợp & api. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 24400 user, SLA 99.9%, thời gian phản hồi p95 < 400ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 24400, \"sla\": \"99.9%\", \"p95_ms\": 400 }",
    "questions": [
      "Trong bối cảnh compliance của Tích hợp & API, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Tích hợp & API trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Tích hợp & API (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-INT"
    ],
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Atlassian Agile Coach – https://www.atlassian.com/agile"
    ]
  },
  {
    "id": "tech-196",
    "slug": "tech-196",
    "title": "Sản phẩm số & trải nghiệm – trade-off (compliance)",
    "baDomain": "TB-UX",
    "baDomainName": "Sản phẩm số & trải nghiệm",
    "technicalFocus": [
      "ux",
      "trade-off"
    ],
    "industry": "Logistics & chuỗi cung ứng",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng sản phẩm số & trải nghiệm trong tình huống trade-off (compliance) thuộc ngành logistics & chuỗi cung ứng.",
    "situationKey": "tb|TB-UX|trade-off|compliance|Junior",
    "objectiveKey": "luyen ky nang san pham so & trai nghiem trong tinh huong trade-off (compliance) thuoc nganh logistics & chuoi cung ung.",
    "context": "Dự án logistics & chuỗi cung ứng cần sản phẩm số & trải nghiệm. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 24500 user, SLA 99.9%, thời gian phản hồi p95 < 200ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 24500, \"sla\": \"99.9%\", \"p95_ms\": 200 }",
    "questions": [
      "Trong bối cảnh compliance của Sản phẩm số & trải nghiệm, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Sản phẩm số & trải nghiệm trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Sản phẩm số & trải nghiệm (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-UX"
    ],
    "sourceRefs": [
      "Scrum Guide – https://scrumguides.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "tech-197",
    "slug": "tech-197",
    "title": "Bảo mật, rủi ro & tuân thủ – trade-off (compliance)",
    "baDomain": "TB-SEC",
    "baDomainName": "Bảo mật, rủi ro & tuân thủ",
    "technicalFocus": [
      "sec",
      "trade-off"
    ],
    "industry": "Giáo dục & EdTech",
    "level": "Middle",
    "exerciseFamily": "trade-off",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng bảo mật, rủi ro & tuân thủ trong tình huống trade-off (compliance) thuộc ngành giáo dục & edtech.",
    "situationKey": "tb|TB-SEC|trade-off|compliance|Middle",
    "objectiveKey": "luyen ky nang bao mat, rui ro & tuan thu trong tinh huong trade-off (compliance) thuoc nganh giao duc & edtech.",
    "context": "Dự án giáo dục & edtech cần bảo mật, rủi ro & tuân thủ. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 24600 user, SLA 99.9%, thời gian phản hồi p95 < 250ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 4 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 24600, \"sla\": \"99.9%\", \"p95_ms\": 250 }",
    "questions": [
      "Trong bối cảnh compliance của Bảo mật, rủi ro & tuân thủ, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Bảo mật, rủi ro & tuân thủ trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Bảo mật, rủi ro & tuân thủ (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-SEC"
    ],
    "sourceRefs": [
      "Atlassian Agile Coach – https://www.atlassian.com/agile",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "tech-198",
    "slug": "tech-198",
    "title": "Thay đổi & adoption – trade-off (compliance)",
    "baDomain": "TB-CHG",
    "baDomainName": "Thay đổi & adoption",
    "technicalFocus": [
      "chg",
      "trade-off"
    ],
    "industry": "SaaS & B2B",
    "level": "Senior",
    "exerciseFamily": "trade-off",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng thay đổi & adoption trong tình huống trade-off (compliance) thuộc ngành saas & b2b.",
    "situationKey": "tb|TB-CHG|trade-off|compliance|Senior",
    "objectiveKey": "luyen ky nang thay doi & adoption trong tinh huong trade-off (compliance) thuoc nganh saas & b2b.",
    "context": "Dự án saas & b2b cần thay đổi & adoption. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 24700 user, SLA 99.9%, thời gian phản hồi p95 < 300ms.",
      "Đội ngũ: 3 dev, 2 QA, 1 BA. Thời hạn MVP 5 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 24700, \"sla\": \"99.9%\", \"p95_ms\": 300 }",
    "questions": [
      "Trong bối cảnh compliance của Thay đổi & adoption, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Thay đổi & adoption trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Thay đổi & adoption (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-CHG"
    ],
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "tech-199",
    "slug": "tech-199",
    "title": "Đánh giá giải pháp & nghiệm thu – trade-off (compliance)",
    "baDomain": "TB-EVL",
    "baDomainName": "Đánh giá giải pháp & nghiệm thu",
    "technicalFocus": [
      "evl",
      "trade-off"
    ],
    "industry": "Sản xuất & IoT",
    "level": "Junior",
    "exerciseFamily": "trade-off",
    "variant": "compliance",
    "learningObjective": "Luyện kỹ năng đánh giá giải pháp & nghiệm thu trong tình huống trade-off (compliance) thuộc ngành sản xuất & iot.",
    "situationKey": "tb|TB-EVL|trade-off|compliance|Junior",
    "objectiveKey": "luyen ky nang danh gia giai phap & nghiem thu trong tinh huong trade-off (compliance) thuoc nganh san xuat & iot.",
    "context": "Dự án sản xuất & iot cần đánh giá giải pháp & nghiệm thu. Bạn là BA phải đưa ra quyết định kỹ thuật trong bối cảnh compliance.",
    "facts": [
      "Hệ thống hiện có 24800 user, SLA 99.9%, thời gian phản hồi p95 < 350ms.",
      "Đội ngũ: 2 dev, 1 QA, 1 BA. Thời hạn MVP 3 tuần.",
      "Dữ liệu giả lập, cần xác nhận với stakeholder trước khi áp dụng."
    ],
    "dataSample": "{ \"users\": 24800, \"sla\": \"99.9%\", \"p95_ms\": 350 }",
    "questions": [
      "Trong bối cảnh compliance của Đánh giá giải pháp & nghiệm thu, yêu cầu nào đang thiếu?",
      "Dữ kiện nào cần thêm để ra quyết định cho Đánh giá giải pháp & nghiệm thu trong tình huống compliance?",
      "Tiêu chí nghiệm thu cho Đánh giá giải pháp & nghiệm thu (compliance) là gì?"
    ],
    "expectedArtifacts": [
      "Yêu cầu phi chức năng",
      "Acceptance criteria",
      "Bảng quyết định"
    ],
    "solutionSteps": [
      "1. Xác định bối cảnh và stakeholder.",
      "2. Thu thập dữ kiện và ràng buộc.",
      "3. Đề xuất phương án và so sánh.",
      "4. Viết acceptance criteria kiểm chứng được."
    ],
    "acceptanceCriteria": [
      "Given điều kiện hiện tại, When thực hiện hành động, Then kết quả mong đợi.",
      "NFR có ngưỡng đo được và chủ sở hữu rõ ràng."
    ],
    "rubric": [
      {
        "name": "Phân tích vấn đề",
        "desc": "Xác định đúng vấn đề và dữ kiện thiếu.",
        "weight": 25
      },
      {
        "name": "Độ đầy đủ",
        "desc": "Có NFR, AC, rủi ro, phương án.",
        "weight": 25
      },
      {
        "name": "Ưu tiên & đánh đổi",
        "desc": "So sánh phương án với lý do.",
        "weight": 25
      },
      {
        "name": "Giao tiếp & kiểm chứng",
        "desc": "AC kiểm chứng được, KPI rõ.",
        "weight": 25
      }
    ],
    "relatedLessons": [
      "Lesson TB-EVL"
    ],
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "OMG – https://www.omg.org/"
    ]
  }
];
