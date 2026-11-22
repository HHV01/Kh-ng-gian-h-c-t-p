caseStudies.push(...[
  {
    "id": "case-013",
    "title": "Quy trình & vận hành – Bán lẻ & TMĐT (happy)",
    "level": "Junior",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "process",
    "variant": "happy",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong bán lẻ & tmđt (happy).",
    "situationKey": "cs|ret|process|happy|Junior",
    "objectiveKey": "luyen case quy trinh & van hanh trong ban le & tmdt (happy).",
    "summary": "Giảm rủi ro quy trình & vận hành trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 9000 giao dịch bán lẻ & tmđt; 500 case phát sinh do quy trình & vận hành (happy).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-014",
    "title": "Quy trình & vận hành – Fintech & thanh toán (happy)",
    "level": "Mid",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "process",
    "variant": "happy",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong fintech & thanh toán (happy).",
    "situationKey": "cs|fin|process|happy|Mid",
    "objectiveKey": "luyen case quy trinh & van hanh trong fintech & thanh toan (happy).",
    "summary": "Giảm rủi ro quy trình & vận hành trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 9137 giao dịch fintech & thanh toán; 523 case phát sinh do quy trình & vận hành (happy).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-015",
    "title": "Quy trình & vận hành – Ngân hàng & tín dụng (happy)",
    "level": "Senior",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "process",
    "variant": "happy",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong ngân hàng & tín dụng (happy).",
    "situationKey": "cs|bnk|process|happy|Senior",
    "objectiveKey": "luyen case quy trinh & van hanh trong ngan hang & tin dung (happy).",
    "summary": "Giảm rủi ro quy trình & vận hành trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 9274 giao dịch ngân hàng & tín dụng; 546 case phát sinh do quy trình & vận hành (happy).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-016",
    "title": "Quy trình & vận hành – Bảo hiểm (happy)",
    "level": "Junior",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "process",
    "variant": "happy",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong bảo hiểm (happy).",
    "situationKey": "cs|ins|process|happy|Junior",
    "objectiveKey": "luyen case quy trinh & van hanh trong bao hiem (happy).",
    "summary": "Giảm rủi ro quy trình & vận hành trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 9411 giao dịch bảo hiểm; 569 case phát sinh do quy trình & vận hành (happy).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-017",
    "title": "Quy trình & vận hành – Y tế & dược (happy)",
    "level": "Mid",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "process",
    "variant": "happy",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong y tế & dược (happy).",
    "situationKey": "cs|hlt|process|happy|Mid",
    "objectiveKey": "luyen case quy trinh & van hanh trong y te & duoc (happy).",
    "summary": "Giảm rủi ro quy trình & vận hành trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 9548 giao dịch y tế & dược; 592 case phát sinh do quy trình & vận hành (happy).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-018",
    "title": "Quy trình & vận hành – Logistics & chuỗi cung ứng (happy)",
    "level": "Senior",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "process",
    "variant": "happy",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong logistics & chuỗi cung ứng (happy).",
    "situationKey": "cs|log|process|happy|Senior",
    "objectiveKey": "luyen case quy trinh & van hanh trong logistics & chuoi cung ung (happy).",
    "summary": "Giảm rủi ro quy trình & vận hành trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 9685 giao dịch logistics & chuỗi cung ứng; 615 case phát sinh do quy trình & vận hành (happy).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-019",
    "title": "Quy trình & vận hành – Giáo dục & EdTech (happy)",
    "level": "Junior",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "process",
    "variant": "happy",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong giáo dục & edtech (happy).",
    "situationKey": "cs|edu|process|happy|Junior",
    "objectiveKey": "luyen case quy trinh & van hanh trong giao duc & edtech (happy).",
    "summary": "Giảm rủi ro quy trình & vận hành trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 9822 giao dịch giáo dục & edtech; 638 case phát sinh do quy trình & vận hành (happy).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-020",
    "title": "Quy trình & vận hành – SaaS & B2B (happy)",
    "level": "Mid",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "process",
    "variant": "happy",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong saas & b2b (happy).",
    "situationKey": "cs|sas|process|happy|Mid",
    "objectiveKey": "luyen case quy trinh & van hanh trong saas & b2b (happy).",
    "summary": "Giảm rủi ro quy trình & vận hành trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 9959 giao dịch saas & b2b; 661 case phát sinh do quy trình & vận hành (happy).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-021",
    "title": "Quy trình & vận hành – Sản xuất & IoT (happy)",
    "level": "Senior",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "process",
    "variant": "happy",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong sản xuất & iot (happy).",
    "situationKey": "cs|mfg|process|happy|Senior",
    "objectiveKey": "luyen case quy trinh & van hanh trong san xuat & iot (happy).",
    "summary": "Giảm rủi ro quy trình & vận hành trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 10096 giao dịch sản xuất & iot; 684 case phát sinh do quy trình & vận hành (happy).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-022",
    "title": "Quy trình & vận hành – Khu vực công & tuân thủ (happy)",
    "level": "Junior",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "process",
    "variant": "happy",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong khu vực công & tuân thủ (happy).",
    "situationKey": "cs|pub|process|happy|Junior",
    "objectiveKey": "luyen case quy trinh & van hanh trong khu vuc cong & tuan thu (happy).",
    "summary": "Giảm rủi ro quy trình & vận hành trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 10233 giao dịch khu vực công & tuân thủ; 707 case phát sinh do quy trình & vận hành (happy).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-023",
    "title": "Dữ liệu & báo cáo – Bán lẻ & TMĐT (happy)",
    "level": "Mid",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "data-reporting",
    "variant": "happy",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong bán lẻ & tmđt (happy).",
    "situationKey": "cs|ret|data-reporting|happy|Mid",
    "objectiveKey": "luyen case du lieu & bao cao trong ban le & tmdt (happy).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 10370 giao dịch bán lẻ & tmđt; 730 case phát sinh do dữ liệu & báo cáo (happy).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-024",
    "title": "Dữ liệu & báo cáo – Fintech & thanh toán (happy)",
    "level": "Senior",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "data-reporting",
    "variant": "happy",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong fintech & thanh toán (happy).",
    "situationKey": "cs|fin|data-reporting|happy|Senior",
    "objectiveKey": "luyen case du lieu & bao cao trong fintech & thanh toan (happy).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 10507 giao dịch fintech & thanh toán; 753 case phát sinh do dữ liệu & báo cáo (happy).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-025",
    "title": "Dữ liệu & báo cáo – Ngân hàng & tín dụng (happy)",
    "level": "Junior",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "data-reporting",
    "variant": "happy",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong ngân hàng & tín dụng (happy).",
    "situationKey": "cs|bnk|data-reporting|happy|Junior",
    "objectiveKey": "luyen case du lieu & bao cao trong ngan hang & tin dung (happy).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 10644 giao dịch ngân hàng & tín dụng; 776 case phát sinh do dữ liệu & báo cáo (happy).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-026",
    "title": "Dữ liệu & báo cáo – Bảo hiểm (happy)",
    "level": "Mid",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "data-reporting",
    "variant": "happy",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong bảo hiểm (happy).",
    "situationKey": "cs|ins|data-reporting|happy|Mid",
    "objectiveKey": "luyen case du lieu & bao cao trong bao hiem (happy).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 10781 giao dịch bảo hiểm; 799 case phát sinh do dữ liệu & báo cáo (happy).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-027",
    "title": "Dữ liệu & báo cáo – Y tế & dược (happy)",
    "level": "Senior",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "data-reporting",
    "variant": "happy",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong y tế & dược (happy).",
    "situationKey": "cs|hlt|data-reporting|happy|Senior",
    "objectiveKey": "luyen case du lieu & bao cao trong y te & duoc (happy).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 10918 giao dịch y tế & dược; 822 case phát sinh do dữ liệu & báo cáo (happy).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-028",
    "title": "Dữ liệu & báo cáo – Logistics & chuỗi cung ứng (happy)",
    "level": "Junior",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "data-reporting",
    "variant": "happy",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong logistics & chuỗi cung ứng (happy).",
    "situationKey": "cs|log|data-reporting|happy|Junior",
    "objectiveKey": "luyen case du lieu & bao cao trong logistics & chuoi cung ung (happy).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 11055 giao dịch logistics & chuỗi cung ứng; 845 case phát sinh do dữ liệu & báo cáo (happy).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-029",
    "title": "Dữ liệu & báo cáo – Giáo dục & EdTech (happy)",
    "level": "Mid",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "data-reporting",
    "variant": "happy",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong giáo dục & edtech (happy).",
    "situationKey": "cs|edu|data-reporting|happy|Mid",
    "objectiveKey": "luyen case du lieu & bao cao trong giao duc & edtech (happy).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 11192 giao dịch giáo dục & edtech; 868 case phát sinh do dữ liệu & báo cáo (happy).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-030",
    "title": "Dữ liệu & báo cáo – SaaS & B2B (happy)",
    "level": "Senior",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "data-reporting",
    "variant": "happy",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong saas & b2b (happy).",
    "situationKey": "cs|sas|data-reporting|happy|Senior",
    "objectiveKey": "luyen case du lieu & bao cao trong saas & b2b (happy).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 11329 giao dịch saas & b2b; 891 case phát sinh do dữ liệu & báo cáo (happy).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-031",
    "title": "Dữ liệu & báo cáo – Sản xuất & IoT (happy)",
    "level": "Junior",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "data-reporting",
    "variant": "happy",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong sản xuất & iot (happy).",
    "situationKey": "cs|mfg|data-reporting|happy|Junior",
    "objectiveKey": "luyen case du lieu & bao cao trong san xuat & iot (happy).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 11466 giao dịch sản xuất & iot; 914 case phát sinh do dữ liệu & báo cáo (happy).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-032",
    "title": "Dữ liệu & báo cáo – Khu vực công & tuân thủ (happy)",
    "level": "Mid",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "data-reporting",
    "variant": "happy",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong khu vực công & tuân thủ (happy).",
    "situationKey": "cs|pub|data-reporting|happy|Mid",
    "objectiveKey": "luyen case du lieu & bao cao trong khu vuc cong & tuan thu (happy).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 11603 giao dịch khu vực công & tuân thủ; 937 case phát sinh do dữ liệu & báo cáo (happy).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-033",
    "title": "Tích hợp & API – Bán lẻ & TMĐT (happy)",
    "level": "Senior",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "integration",
    "variant": "happy",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong bán lẻ & tmđt (happy).",
    "situationKey": "cs|ret|integration|happy|Senior",
    "objectiveKey": "luyen case tich hop & api trong ban le & tmdt (happy).",
    "summary": "Giảm rủi ro tích hợp & api trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 11740 giao dịch bán lẻ & tmđt; 960 case phát sinh do tích hợp & api (happy).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-034",
    "title": "Tích hợp & API – Fintech & thanh toán (happy)",
    "level": "Junior",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "integration",
    "variant": "happy",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong fintech & thanh toán (happy).",
    "situationKey": "cs|fin|integration|happy|Junior",
    "objectiveKey": "luyen case tich hop & api trong fintech & thanh toan (happy).",
    "summary": "Giảm rủi ro tích hợp & api trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 11877 giao dịch fintech & thanh toán; 983 case phát sinh do tích hợp & api (happy).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-035",
    "title": "Tích hợp & API – Ngân hàng & tín dụng (happy)",
    "level": "Mid",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "integration",
    "variant": "happy",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong ngân hàng & tín dụng (happy).",
    "situationKey": "cs|bnk|integration|happy|Mid",
    "objectiveKey": "luyen case tich hop & api trong ngan hang & tin dung (happy).",
    "summary": "Giảm rủi ro tích hợp & api trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 12014 giao dịch ngân hàng & tín dụng; 1006 case phát sinh do tích hợp & api (happy).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-036",
    "title": "Tích hợp & API – Bảo hiểm (happy)",
    "level": "Senior",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "integration",
    "variant": "happy",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong bảo hiểm (happy).",
    "situationKey": "cs|ins|integration|happy|Senior",
    "objectiveKey": "luyen case tich hop & api trong bao hiem (happy).",
    "summary": "Giảm rủi ro tích hợp & api trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 12151 giao dịch bảo hiểm; 1029 case phát sinh do tích hợp & api (happy).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-037",
    "title": "Tích hợp & API – Y tế & dược (happy)",
    "level": "Junior",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "integration",
    "variant": "happy",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong y tế & dược (happy).",
    "situationKey": "cs|hlt|integration|happy|Junior",
    "objectiveKey": "luyen case tich hop & api trong y te & duoc (happy).",
    "summary": "Giảm rủi ro tích hợp & api trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 12288 giao dịch y tế & dược; 1052 case phát sinh do tích hợp & api (happy).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-038",
    "title": "Tích hợp & API – Logistics & chuỗi cung ứng (happy)",
    "level": "Mid",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "integration",
    "variant": "happy",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong logistics & chuỗi cung ứng (happy).",
    "situationKey": "cs|log|integration|happy|Mid",
    "objectiveKey": "luyen case tich hop & api trong logistics & chuoi cung ung (happy).",
    "summary": "Giảm rủi ro tích hợp & api trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 12425 giao dịch logistics & chuỗi cung ứng; 1075 case phát sinh do tích hợp & api (happy).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-039",
    "title": "Tích hợp & API – Giáo dục & EdTech (happy)",
    "level": "Senior",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "integration",
    "variant": "happy",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong giáo dục & edtech (happy).",
    "situationKey": "cs|edu|integration|happy|Senior",
    "objectiveKey": "luyen case tich hop & api trong giao duc & edtech (happy).",
    "summary": "Giảm rủi ro tích hợp & api trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 12562 giao dịch giáo dục & edtech; 1098 case phát sinh do tích hợp & api (happy).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-040",
    "title": "Tích hợp & API – SaaS & B2B (happy)",
    "level": "Junior",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "integration",
    "variant": "happy",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong saas & b2b (happy).",
    "situationKey": "cs|sas|integration|happy|Junior",
    "objectiveKey": "luyen case tich hop & api trong saas & b2b (happy).",
    "summary": "Giảm rủi ro tích hợp & api trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 12699 giao dịch saas & b2b; 1121 case phát sinh do tích hợp & api (happy).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-041",
    "title": "Tích hợp & API – Sản xuất & IoT (happy)",
    "level": "Mid",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "integration",
    "variant": "happy",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong sản xuất & iot (happy).",
    "situationKey": "cs|mfg|integration|happy|Mid",
    "objectiveKey": "luyen case tich hop & api trong san xuat & iot (happy).",
    "summary": "Giảm rủi ro tích hợp & api trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 12836 giao dịch sản xuất & iot; 1144 case phát sinh do tích hợp & api (happy).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-042",
    "title": "Tích hợp & API – Khu vực công & tuân thủ (happy)",
    "level": "Senior",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "integration",
    "variant": "happy",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong khu vực công & tuân thủ (happy).",
    "situationKey": "cs|pub|integration|happy|Senior",
    "objectiveKey": "luyen case tich hop & api trong khu vuc cong & tuan thu (happy).",
    "summary": "Giảm rủi ro tích hợp & api trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 12973 giao dịch khu vực công & tuân thủ; 1167 case phát sinh do tích hợp & api (happy).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-043",
    "title": "Trải nghiệm & kênh – Bán lẻ & TMĐT (happy)",
    "level": "Junior",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "experience-channel",
    "variant": "happy",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong bán lẻ & tmđt (happy).",
    "situationKey": "cs|ret|experience-channel|happy|Junior",
    "objectiveKey": "luyen case trai nghiem & kenh trong ban le & tmdt (happy).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 13110 giao dịch bán lẻ & tmđt; 1190 case phát sinh do trải nghiệm & kênh (happy).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-044",
    "title": "Trải nghiệm & kênh – Fintech & thanh toán (happy)",
    "level": "Mid",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "experience-channel",
    "variant": "happy",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong fintech & thanh toán (happy).",
    "situationKey": "cs|fin|experience-channel|happy|Mid",
    "objectiveKey": "luyen case trai nghiem & kenh trong fintech & thanh toan (happy).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 13247 giao dịch fintech & thanh toán; 1213 case phát sinh do trải nghiệm & kênh (happy).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-045",
    "title": "Trải nghiệm & kênh – Ngân hàng & tín dụng (happy)",
    "level": "Senior",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "experience-channel",
    "variant": "happy",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong ngân hàng & tín dụng (happy).",
    "situationKey": "cs|bnk|experience-channel|happy|Senior",
    "objectiveKey": "luyen case trai nghiem & kenh trong ngan hang & tin dung (happy).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 13384 giao dịch ngân hàng & tín dụng; 1236 case phát sinh do trải nghiệm & kênh (happy).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-046",
    "title": "Trải nghiệm & kênh – Bảo hiểm (happy)",
    "level": "Junior",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "experience-channel",
    "variant": "happy",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong bảo hiểm (happy).",
    "situationKey": "cs|ins|experience-channel|happy|Junior",
    "objectiveKey": "luyen case trai nghiem & kenh trong bao hiem (happy).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 13521 giao dịch bảo hiểm; 1259 case phát sinh do trải nghiệm & kênh (happy).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-047",
    "title": "Trải nghiệm & kênh – Y tế & dược (happy)",
    "level": "Mid",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "experience-channel",
    "variant": "happy",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong y tế & dược (happy).",
    "situationKey": "cs|hlt|experience-channel|happy|Mid",
    "objectiveKey": "luyen case trai nghiem & kenh trong y te & duoc (happy).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 13658 giao dịch y tế & dược; 1282 case phát sinh do trải nghiệm & kênh (happy).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-048",
    "title": "Trải nghiệm & kênh – Logistics & chuỗi cung ứng (happy)",
    "level": "Senior",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "experience-channel",
    "variant": "happy",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong logistics & chuỗi cung ứng (happy).",
    "situationKey": "cs|log|experience-channel|happy|Senior",
    "objectiveKey": "luyen case trai nghiem & kenh trong logistics & chuoi cung ung (happy).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 13795 giao dịch logistics & chuỗi cung ứng; 1305 case phát sinh do trải nghiệm & kênh (happy).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-049",
    "title": "Trải nghiệm & kênh – Giáo dục & EdTech (happy)",
    "level": "Junior",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "experience-channel",
    "variant": "happy",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong giáo dục & edtech (happy).",
    "situationKey": "cs|edu|experience-channel|happy|Junior",
    "objectiveKey": "luyen case trai nghiem & kenh trong giao duc & edtech (happy).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 13932 giao dịch giáo dục & edtech; 1328 case phát sinh do trải nghiệm & kênh (happy).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-050",
    "title": "Trải nghiệm & kênh – SaaS & B2B (happy)",
    "level": "Mid",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "experience-channel",
    "variant": "happy",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong saas & b2b (happy).",
    "situationKey": "cs|sas|experience-channel|happy|Mid",
    "objectiveKey": "luyen case trai nghiem & kenh trong saas & b2b (happy).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 14069 giao dịch saas & b2b; 1351 case phát sinh do trải nghiệm & kênh (happy).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-051",
    "title": "Trải nghiệm & kênh – Sản xuất & IoT (happy)",
    "level": "Senior",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "experience-channel",
    "variant": "happy",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong sản xuất & iot (happy).",
    "situationKey": "cs|mfg|experience-channel|happy|Senior",
    "objectiveKey": "luyen case trai nghiem & kenh trong san xuat & iot (happy).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 14206 giao dịch sản xuất & iot; 1374 case phát sinh do trải nghiệm & kênh (happy).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-052",
    "title": "Trải nghiệm & kênh – Khu vực công & tuân thủ (happy)",
    "level": "Junior",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "experience-channel",
    "variant": "happy",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong khu vực công & tuân thủ (happy).",
    "situationKey": "cs|pub|experience-channel|happy|Junior",
    "objectiveKey": "luyen case trai nghiem & kenh trong khu vuc cong & tuan thu (happy).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 14343 giao dịch khu vực công & tuân thủ; 1397 case phát sinh do trải nghiệm & kênh (happy).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-053",
    "title": "Tuân thủ & rủi ro – Bán lẻ & TMĐT (happy)",
    "level": "Mid",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "compliance-risk",
    "variant": "happy",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong bán lẻ & tmđt (happy).",
    "situationKey": "cs|ret|compliance-risk|happy|Mid",
    "objectiveKey": "luyen case tuan thu & rui ro trong ban le & tmdt (happy).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 14480 giao dịch bán lẻ & tmđt; 1420 case phát sinh do tuân thủ & rủi ro (happy).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-054",
    "title": "Tuân thủ & rủi ro – Fintech & thanh toán (happy)",
    "level": "Senior",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "compliance-risk",
    "variant": "happy",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong fintech & thanh toán (happy).",
    "situationKey": "cs|fin|compliance-risk|happy|Senior",
    "objectiveKey": "luyen case tuan thu & rui ro trong fintech & thanh toan (happy).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 14617 giao dịch fintech & thanh toán; 1443 case phát sinh do tuân thủ & rủi ro (happy).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-055",
    "title": "Tuân thủ & rủi ro – Ngân hàng & tín dụng (happy)",
    "level": "Junior",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "compliance-risk",
    "variant": "happy",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong ngân hàng & tín dụng (happy).",
    "situationKey": "cs|bnk|compliance-risk|happy|Junior",
    "objectiveKey": "luyen case tuan thu & rui ro trong ngan hang & tin dung (happy).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 14754 giao dịch ngân hàng & tín dụng; 1466 case phát sinh do tuân thủ & rủi ro (happy).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-056",
    "title": "Tuân thủ & rủi ro – Bảo hiểm (happy)",
    "level": "Mid",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "compliance-risk",
    "variant": "happy",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong bảo hiểm (happy).",
    "situationKey": "cs|ins|compliance-risk|happy|Mid",
    "objectiveKey": "luyen case tuan thu & rui ro trong bao hiem (happy).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 14891 giao dịch bảo hiểm; 1489 case phát sinh do tuân thủ & rủi ro (happy).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-057",
    "title": "Tuân thủ & rủi ro – Y tế & dược (happy)",
    "level": "Senior",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "compliance-risk",
    "variant": "happy",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong y tế & dược (happy).",
    "situationKey": "cs|hlt|compliance-risk|happy|Senior",
    "objectiveKey": "luyen case tuan thu & rui ro trong y te & duoc (happy).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 15028 giao dịch y tế & dược; 1512 case phát sinh do tuân thủ & rủi ro (happy).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-058",
    "title": "Tuân thủ & rủi ro – Logistics & chuỗi cung ứng (happy)",
    "level": "Junior",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "compliance-risk",
    "variant": "happy",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong logistics & chuỗi cung ứng (happy).",
    "situationKey": "cs|log|compliance-risk|happy|Junior",
    "objectiveKey": "luyen case tuan thu & rui ro trong logistics & chuoi cung ung (happy).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 15165 giao dịch logistics & chuỗi cung ứng; 1535 case phát sinh do tuân thủ & rủi ro (happy).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-059",
    "title": "Tuân thủ & rủi ro – Giáo dục & EdTech (happy)",
    "level": "Mid",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "compliance-risk",
    "variant": "happy",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong giáo dục & edtech (happy).",
    "situationKey": "cs|edu|compliance-risk|happy|Mid",
    "objectiveKey": "luyen case tuan thu & rui ro trong giao duc & edtech (happy).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 15302 giao dịch giáo dục & edtech; 1558 case phát sinh do tuân thủ & rủi ro (happy).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-060",
    "title": "Tuân thủ & rủi ro – SaaS & B2B (happy)",
    "level": "Senior",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "compliance-risk",
    "variant": "happy",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong saas & b2b (happy).",
    "situationKey": "cs|sas|compliance-risk|happy|Senior",
    "objectiveKey": "luyen case tuan thu & rui ro trong saas & b2b (happy).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 15439 giao dịch saas & b2b; 1581 case phát sinh do tuân thủ & rủi ro (happy).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-061",
    "title": "Tuân thủ & rủi ro – Sản xuất & IoT (happy)",
    "level": "Junior",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "compliance-risk",
    "variant": "happy",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong sản xuất & iot (happy).",
    "situationKey": "cs|mfg|compliance-risk|happy|Junior",
    "objectiveKey": "luyen case tuan thu & rui ro trong san xuat & iot (happy).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 15576 giao dịch sản xuất & iot; 1604 case phát sinh do tuân thủ & rủi ro (happy).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-062",
    "title": "Tuân thủ & rủi ro – Khu vực công & tuân thủ (happy)",
    "level": "Mid",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "compliance-risk",
    "variant": "happy",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong khu vực công & tuân thủ (happy).",
    "situationKey": "cs|pub|compliance-risk|happy|Mid",
    "objectiveKey": "luyen case tuan thu & rui ro trong khu vuc cong & tuan thu (happy).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 15713 giao dịch khu vực công & tuân thủ; 1627 case phát sinh do tuân thủ & rủi ro (happy).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-063",
    "title": "Quy trình & vận hành – Bán lẻ & TMĐT (exception)",
    "level": "Senior",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "process",
    "variant": "exception",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong bán lẻ & tmđt (exception).",
    "situationKey": "cs|ret|process|exception|Senior",
    "objectiveKey": "luyen case quy trinh & van hanh trong ban le & tmdt (exception).",
    "summary": "Giảm rủi ro quy trình & vận hành trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 15850 giao dịch bán lẻ & tmđt; 1650 case phát sinh do quy trình & vận hành (exception).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-064",
    "title": "Quy trình & vận hành – Fintech & thanh toán (exception)",
    "level": "Junior",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "process",
    "variant": "exception",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong fintech & thanh toán (exception).",
    "situationKey": "cs|fin|process|exception|Junior",
    "objectiveKey": "luyen case quy trinh & van hanh trong fintech & thanh toan (exception).",
    "summary": "Giảm rủi ro quy trình & vận hành trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 15987 giao dịch fintech & thanh toán; 1673 case phát sinh do quy trình & vận hành (exception).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-065",
    "title": "Quy trình & vận hành – Ngân hàng & tín dụng (exception)",
    "level": "Mid",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "process",
    "variant": "exception",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong ngân hàng & tín dụng (exception).",
    "situationKey": "cs|bnk|process|exception|Mid",
    "objectiveKey": "luyen case quy trinh & van hanh trong ngan hang & tin dung (exception).",
    "summary": "Giảm rủi ro quy trình & vận hành trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 16124 giao dịch ngân hàng & tín dụng; 1696 case phát sinh do quy trình & vận hành (exception).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-066",
    "title": "Quy trình & vận hành – Bảo hiểm (exception)",
    "level": "Senior",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "process",
    "variant": "exception",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong bảo hiểm (exception).",
    "situationKey": "cs|ins|process|exception|Senior",
    "objectiveKey": "luyen case quy trinh & van hanh trong bao hiem (exception).",
    "summary": "Giảm rủi ro quy trình & vận hành trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 16261 giao dịch bảo hiểm; 1719 case phát sinh do quy trình & vận hành (exception).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-067",
    "title": "Quy trình & vận hành – Y tế & dược (exception)",
    "level": "Junior",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "process",
    "variant": "exception",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong y tế & dược (exception).",
    "situationKey": "cs|hlt|process|exception|Junior",
    "objectiveKey": "luyen case quy trinh & van hanh trong y te & duoc (exception).",
    "summary": "Giảm rủi ro quy trình & vận hành trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 16398 giao dịch y tế & dược; 1742 case phát sinh do quy trình & vận hành (exception).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-068",
    "title": "Quy trình & vận hành – Logistics & chuỗi cung ứng (exception)",
    "level": "Mid",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "process",
    "variant": "exception",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong logistics & chuỗi cung ứng (exception).",
    "situationKey": "cs|log|process|exception|Mid",
    "objectiveKey": "luyen case quy trinh & van hanh trong logistics & chuoi cung ung (exception).",
    "summary": "Giảm rủi ro quy trình & vận hành trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 16535 giao dịch logistics & chuỗi cung ứng; 1765 case phát sinh do quy trình & vận hành (exception).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-069",
    "title": "Quy trình & vận hành – Giáo dục & EdTech (exception)",
    "level": "Senior",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "process",
    "variant": "exception",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong giáo dục & edtech (exception).",
    "situationKey": "cs|edu|process|exception|Senior",
    "objectiveKey": "luyen case quy trinh & van hanh trong giao duc & edtech (exception).",
    "summary": "Giảm rủi ro quy trình & vận hành trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 16672 giao dịch giáo dục & edtech; 1788 case phát sinh do quy trình & vận hành (exception).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-070",
    "title": "Quy trình & vận hành – SaaS & B2B (exception)",
    "level": "Junior",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "process",
    "variant": "exception",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong saas & b2b (exception).",
    "situationKey": "cs|sas|process|exception|Junior",
    "objectiveKey": "luyen case quy trinh & van hanh trong saas & b2b (exception).",
    "summary": "Giảm rủi ro quy trình & vận hành trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 16809 giao dịch saas & b2b; 1811 case phát sinh do quy trình & vận hành (exception).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-071",
    "title": "Quy trình & vận hành – Sản xuất & IoT (exception)",
    "level": "Mid",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "process",
    "variant": "exception",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong sản xuất & iot (exception).",
    "situationKey": "cs|mfg|process|exception|Mid",
    "objectiveKey": "luyen case quy trinh & van hanh trong san xuat & iot (exception).",
    "summary": "Giảm rủi ro quy trình & vận hành trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 16946 giao dịch sản xuất & iot; 1834 case phát sinh do quy trình & vận hành (exception).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-072",
    "title": "Quy trình & vận hành – Khu vực công & tuân thủ (exception)",
    "level": "Senior",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "process",
    "variant": "exception",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong khu vực công & tuân thủ (exception).",
    "situationKey": "cs|pub|process|exception|Senior",
    "objectiveKey": "luyen case quy trinh & van hanh trong khu vuc cong & tuan thu (exception).",
    "summary": "Giảm rủi ro quy trình & vận hành trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 17083 giao dịch khu vực công & tuân thủ; 1857 case phát sinh do quy trình & vận hành (exception).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-073",
    "title": "Dữ liệu & báo cáo – Bán lẻ & TMĐT (exception)",
    "level": "Junior",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "data-reporting",
    "variant": "exception",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong bán lẻ & tmđt (exception).",
    "situationKey": "cs|ret|data-reporting|exception|Junior",
    "objectiveKey": "luyen case du lieu & bao cao trong ban le & tmdt (exception).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 17220 giao dịch bán lẻ & tmđt; 1880 case phát sinh do dữ liệu & báo cáo (exception).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-074",
    "title": "Dữ liệu & báo cáo – Fintech & thanh toán (exception)",
    "level": "Mid",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "data-reporting",
    "variant": "exception",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong fintech & thanh toán (exception).",
    "situationKey": "cs|fin|data-reporting|exception|Mid",
    "objectiveKey": "luyen case du lieu & bao cao trong fintech & thanh toan (exception).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 17357 giao dịch fintech & thanh toán; 1903 case phát sinh do dữ liệu & báo cáo (exception).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-075",
    "title": "Dữ liệu & báo cáo – Ngân hàng & tín dụng (exception)",
    "level": "Senior",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "data-reporting",
    "variant": "exception",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong ngân hàng & tín dụng (exception).",
    "situationKey": "cs|bnk|data-reporting|exception|Senior",
    "objectiveKey": "luyen case du lieu & bao cao trong ngan hang & tin dung (exception).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 17494 giao dịch ngân hàng & tín dụng; 1926 case phát sinh do dữ liệu & báo cáo (exception).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-076",
    "title": "Dữ liệu & báo cáo – Bảo hiểm (exception)",
    "level": "Junior",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "data-reporting",
    "variant": "exception",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong bảo hiểm (exception).",
    "situationKey": "cs|ins|data-reporting|exception|Junior",
    "objectiveKey": "luyen case du lieu & bao cao trong bao hiem (exception).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 17631 giao dịch bảo hiểm; 1949 case phát sinh do dữ liệu & báo cáo (exception).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-077",
    "title": "Dữ liệu & báo cáo – Y tế & dược (exception)",
    "level": "Mid",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "data-reporting",
    "variant": "exception",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong y tế & dược (exception).",
    "situationKey": "cs|hlt|data-reporting|exception|Mid",
    "objectiveKey": "luyen case du lieu & bao cao trong y te & duoc (exception).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 17768 giao dịch y tế & dược; 1972 case phát sinh do dữ liệu & báo cáo (exception).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-078",
    "title": "Dữ liệu & báo cáo – Logistics & chuỗi cung ứng (exception)",
    "level": "Senior",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "data-reporting",
    "variant": "exception",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong logistics & chuỗi cung ứng (exception).",
    "situationKey": "cs|log|data-reporting|exception|Senior",
    "objectiveKey": "luyen case du lieu & bao cao trong logistics & chuoi cung ung (exception).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 17905 giao dịch logistics & chuỗi cung ứng; 1995 case phát sinh do dữ liệu & báo cáo (exception).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-079",
    "title": "Dữ liệu & báo cáo – Giáo dục & EdTech (exception)",
    "level": "Junior",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "data-reporting",
    "variant": "exception",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong giáo dục & edtech (exception).",
    "situationKey": "cs|edu|data-reporting|exception|Junior",
    "objectiveKey": "luyen case du lieu & bao cao trong giao duc & edtech (exception).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 18042 giao dịch giáo dục & edtech; 2018 case phát sinh do dữ liệu & báo cáo (exception).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-080",
    "title": "Dữ liệu & báo cáo – SaaS & B2B (exception)",
    "level": "Mid",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "data-reporting",
    "variant": "exception",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong saas & b2b (exception).",
    "situationKey": "cs|sas|data-reporting|exception|Mid",
    "objectiveKey": "luyen case du lieu & bao cao trong saas & b2b (exception).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 18179 giao dịch saas & b2b; 2041 case phát sinh do dữ liệu & báo cáo (exception).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-081",
    "title": "Dữ liệu & báo cáo – Sản xuất & IoT (exception)",
    "level": "Senior",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "data-reporting",
    "variant": "exception",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong sản xuất & iot (exception).",
    "situationKey": "cs|mfg|data-reporting|exception|Senior",
    "objectiveKey": "luyen case du lieu & bao cao trong san xuat & iot (exception).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 18316 giao dịch sản xuất & iot; 2064 case phát sinh do dữ liệu & báo cáo (exception).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-082",
    "title": "Dữ liệu & báo cáo – Khu vực công & tuân thủ (exception)",
    "level": "Junior",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "data-reporting",
    "variant": "exception",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong khu vực công & tuân thủ (exception).",
    "situationKey": "cs|pub|data-reporting|exception|Junior",
    "objectiveKey": "luyen case du lieu & bao cao trong khu vuc cong & tuan thu (exception).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 18453 giao dịch khu vực công & tuân thủ; 2087 case phát sinh do dữ liệu & báo cáo (exception).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-083",
    "title": "Tích hợp & API – Bán lẻ & TMĐT (exception)",
    "level": "Mid",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "integration",
    "variant": "exception",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong bán lẻ & tmđt (exception).",
    "situationKey": "cs|ret|integration|exception|Mid",
    "objectiveKey": "luyen case tich hop & api trong ban le & tmdt (exception).",
    "summary": "Giảm rủi ro tích hợp & api trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 18590 giao dịch bán lẻ & tmđt; 2110 case phát sinh do tích hợp & api (exception).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-084",
    "title": "Tích hợp & API – Fintech & thanh toán (exception)",
    "level": "Senior",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "integration",
    "variant": "exception",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong fintech & thanh toán (exception).",
    "situationKey": "cs|fin|integration|exception|Senior",
    "objectiveKey": "luyen case tich hop & api trong fintech & thanh toan (exception).",
    "summary": "Giảm rủi ro tích hợp & api trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 18727 giao dịch fintech & thanh toán; 2133 case phát sinh do tích hợp & api (exception).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-085",
    "title": "Tích hợp & API – Ngân hàng & tín dụng (exception)",
    "level": "Junior",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "integration",
    "variant": "exception",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong ngân hàng & tín dụng (exception).",
    "situationKey": "cs|bnk|integration|exception|Junior",
    "objectiveKey": "luyen case tich hop & api trong ngan hang & tin dung (exception).",
    "summary": "Giảm rủi ro tích hợp & api trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 18864 giao dịch ngân hàng & tín dụng; 2156 case phát sinh do tích hợp & api (exception).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-086",
    "title": "Tích hợp & API – Bảo hiểm (exception)",
    "level": "Mid",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "integration",
    "variant": "exception",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong bảo hiểm (exception).",
    "situationKey": "cs|ins|integration|exception|Mid",
    "objectiveKey": "luyen case tich hop & api trong bao hiem (exception).",
    "summary": "Giảm rủi ro tích hợp & api trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 19001 giao dịch bảo hiểm; 2179 case phát sinh do tích hợp & api (exception).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-087",
    "title": "Tích hợp & API – Y tế & dược (exception)",
    "level": "Senior",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "integration",
    "variant": "exception",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong y tế & dược (exception).",
    "situationKey": "cs|hlt|integration|exception|Senior",
    "objectiveKey": "luyen case tich hop & api trong y te & duoc (exception).",
    "summary": "Giảm rủi ro tích hợp & api trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 19138 giao dịch y tế & dược; 2202 case phát sinh do tích hợp & api (exception).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-088",
    "title": "Tích hợp & API – Logistics & chuỗi cung ứng (exception)",
    "level": "Junior",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "integration",
    "variant": "exception",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong logistics & chuỗi cung ứng (exception).",
    "situationKey": "cs|log|integration|exception|Junior",
    "objectiveKey": "luyen case tich hop & api trong logistics & chuoi cung ung (exception).",
    "summary": "Giảm rủi ro tích hợp & api trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 19275 giao dịch logistics & chuỗi cung ứng; 2225 case phát sinh do tích hợp & api (exception).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-089",
    "title": "Tích hợp & API – Giáo dục & EdTech (exception)",
    "level": "Mid",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "integration",
    "variant": "exception",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong giáo dục & edtech (exception).",
    "situationKey": "cs|edu|integration|exception|Mid",
    "objectiveKey": "luyen case tich hop & api trong giao duc & edtech (exception).",
    "summary": "Giảm rủi ro tích hợp & api trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 19412 giao dịch giáo dục & edtech; 2248 case phát sinh do tích hợp & api (exception).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-090",
    "title": "Tích hợp & API – SaaS & B2B (exception)",
    "level": "Senior",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "integration",
    "variant": "exception",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong saas & b2b (exception).",
    "situationKey": "cs|sas|integration|exception|Senior",
    "objectiveKey": "luyen case tich hop & api trong saas & b2b (exception).",
    "summary": "Giảm rủi ro tích hợp & api trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 19549 giao dịch saas & b2b; 2271 case phát sinh do tích hợp & api (exception).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-091",
    "title": "Tích hợp & API – Sản xuất & IoT (exception)",
    "level": "Junior",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "integration",
    "variant": "exception",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong sản xuất & iot (exception).",
    "situationKey": "cs|mfg|integration|exception|Junior",
    "objectiveKey": "luyen case tich hop & api trong san xuat & iot (exception).",
    "summary": "Giảm rủi ro tích hợp & api trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 19686 giao dịch sản xuất & iot; 2294 case phát sinh do tích hợp & api (exception).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-092",
    "title": "Tích hợp & API – Khu vực công & tuân thủ (exception)",
    "level": "Mid",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "integration",
    "variant": "exception",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong khu vực công & tuân thủ (exception).",
    "situationKey": "cs|pub|integration|exception|Mid",
    "objectiveKey": "luyen case tich hop & api trong khu vuc cong & tuan thu (exception).",
    "summary": "Giảm rủi ro tích hợp & api trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 19823 giao dịch khu vực công & tuân thủ; 2317 case phát sinh do tích hợp & api (exception).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-093",
    "title": "Trải nghiệm & kênh – Bán lẻ & TMĐT (exception)",
    "level": "Senior",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "experience-channel",
    "variant": "exception",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong bán lẻ & tmđt (exception).",
    "situationKey": "cs|ret|experience-channel|exception|Senior",
    "objectiveKey": "luyen case trai nghiem & kenh trong ban le & tmdt (exception).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 19960 giao dịch bán lẻ & tmđt; 2340 case phát sinh do trải nghiệm & kênh (exception).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-094",
    "title": "Trải nghiệm & kênh – Fintech & thanh toán (exception)",
    "level": "Junior",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "experience-channel",
    "variant": "exception",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong fintech & thanh toán (exception).",
    "situationKey": "cs|fin|experience-channel|exception|Junior",
    "objectiveKey": "luyen case trai nghiem & kenh trong fintech & thanh toan (exception).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 20097 giao dịch fintech & thanh toán; 2363 case phát sinh do trải nghiệm & kênh (exception).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-095",
    "title": "Trải nghiệm & kênh – Ngân hàng & tín dụng (exception)",
    "level": "Mid",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "experience-channel",
    "variant": "exception",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong ngân hàng & tín dụng (exception).",
    "situationKey": "cs|bnk|experience-channel|exception|Mid",
    "objectiveKey": "luyen case trai nghiem & kenh trong ngan hang & tin dung (exception).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 20234 giao dịch ngân hàng & tín dụng; 2386 case phát sinh do trải nghiệm & kênh (exception).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-096",
    "title": "Trải nghiệm & kênh – Bảo hiểm (exception)",
    "level": "Senior",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "experience-channel",
    "variant": "exception",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong bảo hiểm (exception).",
    "situationKey": "cs|ins|experience-channel|exception|Senior",
    "objectiveKey": "luyen case trai nghiem & kenh trong bao hiem (exception).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 20371 giao dịch bảo hiểm; 2409 case phát sinh do trải nghiệm & kênh (exception).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-097",
    "title": "Trải nghiệm & kênh – Y tế & dược (exception)",
    "level": "Junior",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "experience-channel",
    "variant": "exception",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong y tế & dược (exception).",
    "situationKey": "cs|hlt|experience-channel|exception|Junior",
    "objectiveKey": "luyen case trai nghiem & kenh trong y te & duoc (exception).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 20508 giao dịch y tế & dược; 2432 case phát sinh do trải nghiệm & kênh (exception).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-098",
    "title": "Trải nghiệm & kênh – Logistics & chuỗi cung ứng (exception)",
    "level": "Mid",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "experience-channel",
    "variant": "exception",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong logistics & chuỗi cung ứng (exception).",
    "situationKey": "cs|log|experience-channel|exception|Mid",
    "objectiveKey": "luyen case trai nghiem & kenh trong logistics & chuoi cung ung (exception).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 20645 giao dịch logistics & chuỗi cung ứng; 2455 case phát sinh do trải nghiệm & kênh (exception).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-099",
    "title": "Trải nghiệm & kênh – Giáo dục & EdTech (exception)",
    "level": "Senior",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "experience-channel",
    "variant": "exception",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong giáo dục & edtech (exception).",
    "situationKey": "cs|edu|experience-channel|exception|Senior",
    "objectiveKey": "luyen case trai nghiem & kenh trong giao duc & edtech (exception).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 20782 giao dịch giáo dục & edtech; 2478 case phát sinh do trải nghiệm & kênh (exception).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-100",
    "title": "Trải nghiệm & kênh – SaaS & B2B (exception)",
    "level": "Junior",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "experience-channel",
    "variant": "exception",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong saas & b2b (exception).",
    "situationKey": "cs|sas|experience-channel|exception|Junior",
    "objectiveKey": "luyen case trai nghiem & kenh trong saas & b2b (exception).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 20919 giao dịch saas & b2b; 2501 case phát sinh do trải nghiệm & kênh (exception).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-101",
    "title": "Trải nghiệm & kênh – Sản xuất & IoT (exception)",
    "level": "Mid",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "experience-channel",
    "variant": "exception",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong sản xuất & iot (exception).",
    "situationKey": "cs|mfg|experience-channel|exception|Mid",
    "objectiveKey": "luyen case trai nghiem & kenh trong san xuat & iot (exception).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 21056 giao dịch sản xuất & iot; 2524 case phát sinh do trải nghiệm & kênh (exception).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-102",
    "title": "Trải nghiệm & kênh – Khu vực công & tuân thủ (exception)",
    "level": "Senior",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "experience-channel",
    "variant": "exception",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong khu vực công & tuân thủ (exception).",
    "situationKey": "cs|pub|experience-channel|exception|Senior",
    "objectiveKey": "luyen case trai nghiem & kenh trong khu vuc cong & tuan thu (exception).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 21193 giao dịch khu vực công & tuân thủ; 2547 case phát sinh do trải nghiệm & kênh (exception).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-103",
    "title": "Tuân thủ & rủi ro – Bán lẻ & TMĐT (exception)",
    "level": "Junior",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "compliance-risk",
    "variant": "exception",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong bán lẻ & tmđt (exception).",
    "situationKey": "cs|ret|compliance-risk|exception|Junior",
    "objectiveKey": "luyen case tuan thu & rui ro trong ban le & tmdt (exception).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 21330 giao dịch bán lẻ & tmđt; 2570 case phát sinh do tuân thủ & rủi ro (exception).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-104",
    "title": "Tuân thủ & rủi ro – Fintech & thanh toán (exception)",
    "level": "Mid",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "compliance-risk",
    "variant": "exception",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong fintech & thanh toán (exception).",
    "situationKey": "cs|fin|compliance-risk|exception|Mid",
    "objectiveKey": "luyen case tuan thu & rui ro trong fintech & thanh toan (exception).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 21467 giao dịch fintech & thanh toán; 2593 case phát sinh do tuân thủ & rủi ro (exception).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-105",
    "title": "Tuân thủ & rủi ro – Ngân hàng & tín dụng (exception)",
    "level": "Senior",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "compliance-risk",
    "variant": "exception",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong ngân hàng & tín dụng (exception).",
    "situationKey": "cs|bnk|compliance-risk|exception|Senior",
    "objectiveKey": "luyen case tuan thu & rui ro trong ngan hang & tin dung (exception).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 21604 giao dịch ngân hàng & tín dụng; 2616 case phát sinh do tuân thủ & rủi ro (exception).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-106",
    "title": "Tuân thủ & rủi ro – Bảo hiểm (exception)",
    "level": "Junior",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "compliance-risk",
    "variant": "exception",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong bảo hiểm (exception).",
    "situationKey": "cs|ins|compliance-risk|exception|Junior",
    "objectiveKey": "luyen case tuan thu & rui ro trong bao hiem (exception).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 21741 giao dịch bảo hiểm; 2639 case phát sinh do tuân thủ & rủi ro (exception).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-107",
    "title": "Tuân thủ & rủi ro – Y tế & dược (exception)",
    "level": "Mid",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "compliance-risk",
    "variant": "exception",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong y tế & dược (exception).",
    "situationKey": "cs|hlt|compliance-risk|exception|Mid",
    "objectiveKey": "luyen case tuan thu & rui ro trong y te & duoc (exception).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 21878 giao dịch y tế & dược; 2662 case phát sinh do tuân thủ & rủi ro (exception).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-108",
    "title": "Tuân thủ & rủi ro – Logistics & chuỗi cung ứng (exception)",
    "level": "Senior",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "compliance-risk",
    "variant": "exception",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong logistics & chuỗi cung ứng (exception).",
    "situationKey": "cs|log|compliance-risk|exception|Senior",
    "objectiveKey": "luyen case tuan thu & rui ro trong logistics & chuoi cung ung (exception).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 22015 giao dịch logistics & chuỗi cung ứng; 2685 case phát sinh do tuân thủ & rủi ro (exception).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-109",
    "title": "Tuân thủ & rủi ro – Giáo dục & EdTech (exception)",
    "level": "Junior",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "compliance-risk",
    "variant": "exception",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong giáo dục & edtech (exception).",
    "situationKey": "cs|edu|compliance-risk|exception|Junior",
    "objectiveKey": "luyen case tuan thu & rui ro trong giao duc & edtech (exception).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 22152 giao dịch giáo dục & edtech; 2708 case phát sinh do tuân thủ & rủi ro (exception).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-110",
    "title": "Tuân thủ & rủi ro – SaaS & B2B (exception)",
    "level": "Mid",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "compliance-risk",
    "variant": "exception",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong saas & b2b (exception).",
    "situationKey": "cs|sas|compliance-risk|exception|Mid",
    "objectiveKey": "luyen case tuan thu & rui ro trong saas & b2b (exception).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 22289 giao dịch saas & b2b; 2731 case phát sinh do tuân thủ & rủi ro (exception).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-111",
    "title": "Tuân thủ & rủi ro – Sản xuất & IoT (exception)",
    "level": "Senior",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "compliance-risk",
    "variant": "exception",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong sản xuất & iot (exception).",
    "situationKey": "cs|mfg|compliance-risk|exception|Senior",
    "objectiveKey": "luyen case tuan thu & rui ro trong san xuat & iot (exception).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 22426 giao dịch sản xuất & iot; 2754 case phát sinh do tuân thủ & rủi ro (exception).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-112",
    "title": "Tuân thủ & rủi ro – Khu vực công & tuân thủ (exception)",
    "level": "Junior",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "compliance-risk",
    "variant": "exception",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong khu vực công & tuân thủ (exception).",
    "situationKey": "cs|pub|compliance-risk|exception|Junior",
    "objectiveKey": "luyen case tuan thu & rui ro trong khu vuc cong & tuan thu (exception).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 22563 giao dịch khu vực công & tuân thủ; 2777 case phát sinh do tuân thủ & rủi ro (exception).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-113",
    "title": "Quy trình & vận hành – Bán lẻ & TMĐT (scale)",
    "level": "Mid",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "process",
    "variant": "scale",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong bán lẻ & tmđt (scale).",
    "situationKey": "cs|ret|process|scale|Mid",
    "objectiveKey": "luyen case quy trinh & van hanh trong ban le & tmdt (scale).",
    "summary": "Giảm rủi ro quy trình & vận hành trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 22700 giao dịch bán lẻ & tmđt; 2800 case phát sinh do quy trình & vận hành (scale).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-114",
    "title": "Quy trình & vận hành – Fintech & thanh toán (scale)",
    "level": "Senior",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "process",
    "variant": "scale",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong fintech & thanh toán (scale).",
    "situationKey": "cs|fin|process|scale|Senior",
    "objectiveKey": "luyen case quy trinh & van hanh trong fintech & thanh toan (scale).",
    "summary": "Giảm rủi ro quy trình & vận hành trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 22837 giao dịch fintech & thanh toán; 2823 case phát sinh do quy trình & vận hành (scale).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-115",
    "title": "Quy trình & vận hành – Ngân hàng & tín dụng (scale)",
    "level": "Junior",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "process",
    "variant": "scale",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong ngân hàng & tín dụng (scale).",
    "situationKey": "cs|bnk|process|scale|Junior",
    "objectiveKey": "luyen case quy trinh & van hanh trong ngan hang & tin dung (scale).",
    "summary": "Giảm rủi ro quy trình & vận hành trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 22974 giao dịch ngân hàng & tín dụng; 2846 case phát sinh do quy trình & vận hành (scale).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-116",
    "title": "Quy trình & vận hành – Bảo hiểm (scale)",
    "level": "Mid",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "process",
    "variant": "scale",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong bảo hiểm (scale).",
    "situationKey": "cs|ins|process|scale|Mid",
    "objectiveKey": "luyen case quy trinh & van hanh trong bao hiem (scale).",
    "summary": "Giảm rủi ro quy trình & vận hành trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 23111 giao dịch bảo hiểm; 2869 case phát sinh do quy trình & vận hành (scale).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-117",
    "title": "Quy trình & vận hành – Y tế & dược (scale)",
    "level": "Senior",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "process",
    "variant": "scale",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong y tế & dược (scale).",
    "situationKey": "cs|hlt|process|scale|Senior",
    "objectiveKey": "luyen case quy trinh & van hanh trong y te & duoc (scale).",
    "summary": "Giảm rủi ro quy trình & vận hành trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 23248 giao dịch y tế & dược; 2892 case phát sinh do quy trình & vận hành (scale).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-118",
    "title": "Quy trình & vận hành – Logistics & chuỗi cung ứng (scale)",
    "level": "Junior",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "process",
    "variant": "scale",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong logistics & chuỗi cung ứng (scale).",
    "situationKey": "cs|log|process|scale|Junior",
    "objectiveKey": "luyen case quy trinh & van hanh trong logistics & chuoi cung ung (scale).",
    "summary": "Giảm rủi ro quy trình & vận hành trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 23385 giao dịch logistics & chuỗi cung ứng; 2915 case phát sinh do quy trình & vận hành (scale).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-119",
    "title": "Quy trình & vận hành – Giáo dục & EdTech (scale)",
    "level": "Mid",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "process",
    "variant": "scale",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong giáo dục & edtech (scale).",
    "situationKey": "cs|edu|process|scale|Mid",
    "objectiveKey": "luyen case quy trinh & van hanh trong giao duc & edtech (scale).",
    "summary": "Giảm rủi ro quy trình & vận hành trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 23522 giao dịch giáo dục & edtech; 2938 case phát sinh do quy trình & vận hành (scale).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-120",
    "title": "Quy trình & vận hành – SaaS & B2B (scale)",
    "level": "Senior",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "process",
    "variant": "scale",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong saas & b2b (scale).",
    "situationKey": "cs|sas|process|scale|Senior",
    "objectiveKey": "luyen case quy trinh & van hanh trong saas & b2b (scale).",
    "summary": "Giảm rủi ro quy trình & vận hành trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 23659 giao dịch saas & b2b; 2961 case phát sinh do quy trình & vận hành (scale).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-121",
    "title": "Quy trình & vận hành – Sản xuất & IoT (scale)",
    "level": "Junior",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "process",
    "variant": "scale",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong sản xuất & iot (scale).",
    "situationKey": "cs|mfg|process|scale|Junior",
    "objectiveKey": "luyen case quy trinh & van hanh trong san xuat & iot (scale).",
    "summary": "Giảm rủi ro quy trình & vận hành trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 23796 giao dịch sản xuất & iot; 2984 case phát sinh do quy trình & vận hành (scale).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-122",
    "title": "Quy trình & vận hành – Khu vực công & tuân thủ (scale)",
    "level": "Mid",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "process",
    "variant": "scale",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong khu vực công & tuân thủ (scale).",
    "situationKey": "cs|pub|process|scale|Mid",
    "objectiveKey": "luyen case quy trinh & van hanh trong khu vuc cong & tuan thu (scale).",
    "summary": "Giảm rủi ro quy trình & vận hành trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 23933 giao dịch khu vực công & tuân thủ; 3007 case phát sinh do quy trình & vận hành (scale).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-123",
    "title": "Dữ liệu & báo cáo – Bán lẻ & TMĐT (scale)",
    "level": "Senior",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "data-reporting",
    "variant": "scale",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong bán lẻ & tmđt (scale).",
    "situationKey": "cs|ret|data-reporting|scale|Senior",
    "objectiveKey": "luyen case du lieu & bao cao trong ban le & tmdt (scale).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 24070 giao dịch bán lẻ & tmđt; 3030 case phát sinh do dữ liệu & báo cáo (scale).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-124",
    "title": "Dữ liệu & báo cáo – Fintech & thanh toán (scale)",
    "level": "Junior",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "data-reporting",
    "variant": "scale",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong fintech & thanh toán (scale).",
    "situationKey": "cs|fin|data-reporting|scale|Junior",
    "objectiveKey": "luyen case du lieu & bao cao trong fintech & thanh toan (scale).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 24207 giao dịch fintech & thanh toán; 3053 case phát sinh do dữ liệu & báo cáo (scale).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-125",
    "title": "Dữ liệu & báo cáo – Ngân hàng & tín dụng (scale)",
    "level": "Mid",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "data-reporting",
    "variant": "scale",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong ngân hàng & tín dụng (scale).",
    "situationKey": "cs|bnk|data-reporting|scale|Mid",
    "objectiveKey": "luyen case du lieu & bao cao trong ngan hang & tin dung (scale).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 24344 giao dịch ngân hàng & tín dụng; 3076 case phát sinh do dữ liệu & báo cáo (scale).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-126",
    "title": "Dữ liệu & báo cáo – Bảo hiểm (scale)",
    "level": "Senior",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "data-reporting",
    "variant": "scale",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong bảo hiểm (scale).",
    "situationKey": "cs|ins|data-reporting|scale|Senior",
    "objectiveKey": "luyen case du lieu & bao cao trong bao hiem (scale).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 24481 giao dịch bảo hiểm; 3099 case phát sinh do dữ liệu & báo cáo (scale).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-127",
    "title": "Dữ liệu & báo cáo – Y tế & dược (scale)",
    "level": "Junior",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "data-reporting",
    "variant": "scale",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong y tế & dược (scale).",
    "situationKey": "cs|hlt|data-reporting|scale|Junior",
    "objectiveKey": "luyen case du lieu & bao cao trong y te & duoc (scale).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 24618 giao dịch y tế & dược; 3122 case phát sinh do dữ liệu & báo cáo (scale).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-128",
    "title": "Dữ liệu & báo cáo – Logistics & chuỗi cung ứng (scale)",
    "level": "Mid",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "data-reporting",
    "variant": "scale",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong logistics & chuỗi cung ứng (scale).",
    "situationKey": "cs|log|data-reporting|scale|Mid",
    "objectiveKey": "luyen case du lieu & bao cao trong logistics & chuoi cung ung (scale).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 24755 giao dịch logistics & chuỗi cung ứng; 3145 case phát sinh do dữ liệu & báo cáo (scale).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-129",
    "title": "Dữ liệu & báo cáo – Giáo dục & EdTech (scale)",
    "level": "Senior",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "data-reporting",
    "variant": "scale",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong giáo dục & edtech (scale).",
    "situationKey": "cs|edu|data-reporting|scale|Senior",
    "objectiveKey": "luyen case du lieu & bao cao trong giao duc & edtech (scale).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 24892 giao dịch giáo dục & edtech; 3168 case phát sinh do dữ liệu & báo cáo (scale).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-130",
    "title": "Dữ liệu & báo cáo – SaaS & B2B (scale)",
    "level": "Junior",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "data-reporting",
    "variant": "scale",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong saas & b2b (scale).",
    "situationKey": "cs|sas|data-reporting|scale|Junior",
    "objectiveKey": "luyen case du lieu & bao cao trong saas & b2b (scale).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 25029 giao dịch saas & b2b; 3191 case phát sinh do dữ liệu & báo cáo (scale).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-131",
    "title": "Dữ liệu & báo cáo – Sản xuất & IoT (scale)",
    "level": "Mid",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "data-reporting",
    "variant": "scale",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong sản xuất & iot (scale).",
    "situationKey": "cs|mfg|data-reporting|scale|Mid",
    "objectiveKey": "luyen case du lieu & bao cao trong san xuat & iot (scale).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 25166 giao dịch sản xuất & iot; 3214 case phát sinh do dữ liệu & báo cáo (scale).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-132",
    "title": "Dữ liệu & báo cáo – Khu vực công & tuân thủ (scale)",
    "level": "Senior",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "data-reporting",
    "variant": "scale",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong khu vực công & tuân thủ (scale).",
    "situationKey": "cs|pub|data-reporting|scale|Senior",
    "objectiveKey": "luyen case du lieu & bao cao trong khu vuc cong & tuan thu (scale).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 25303 giao dịch khu vực công & tuân thủ; 3237 case phát sinh do dữ liệu & báo cáo (scale).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-133",
    "title": "Tích hợp & API – Bán lẻ & TMĐT (scale)",
    "level": "Junior",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "integration",
    "variant": "scale",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong bán lẻ & tmđt (scale).",
    "situationKey": "cs|ret|integration|scale|Junior",
    "objectiveKey": "luyen case tich hop & api trong ban le & tmdt (scale).",
    "summary": "Giảm rủi ro tích hợp & api trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 25440 giao dịch bán lẻ & tmđt; 3260 case phát sinh do tích hợp & api (scale).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-134",
    "title": "Tích hợp & API – Fintech & thanh toán (scale)",
    "level": "Mid",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "integration",
    "variant": "scale",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong fintech & thanh toán (scale).",
    "situationKey": "cs|fin|integration|scale|Mid",
    "objectiveKey": "luyen case tich hop & api trong fintech & thanh toan (scale).",
    "summary": "Giảm rủi ro tích hợp & api trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 25577 giao dịch fintech & thanh toán; 3283 case phát sinh do tích hợp & api (scale).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-135",
    "title": "Tích hợp & API – Ngân hàng & tín dụng (scale)",
    "level": "Senior",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "integration",
    "variant": "scale",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong ngân hàng & tín dụng (scale).",
    "situationKey": "cs|bnk|integration|scale|Senior",
    "objectiveKey": "luyen case tich hop & api trong ngan hang & tin dung (scale).",
    "summary": "Giảm rủi ro tích hợp & api trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 25714 giao dịch ngân hàng & tín dụng; 3306 case phát sinh do tích hợp & api (scale).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-136",
    "title": "Tích hợp & API – Bảo hiểm (scale)",
    "level": "Junior",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "integration",
    "variant": "scale",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong bảo hiểm (scale).",
    "situationKey": "cs|ins|integration|scale|Junior",
    "objectiveKey": "luyen case tich hop & api trong bao hiem (scale).",
    "summary": "Giảm rủi ro tích hợp & api trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 25851 giao dịch bảo hiểm; 3329 case phát sinh do tích hợp & api (scale).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-137",
    "title": "Tích hợp & API – Y tế & dược (scale)",
    "level": "Mid",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "integration",
    "variant": "scale",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong y tế & dược (scale).",
    "situationKey": "cs|hlt|integration|scale|Mid",
    "objectiveKey": "luyen case tich hop & api trong y te & duoc (scale).",
    "summary": "Giảm rủi ro tích hợp & api trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 25988 giao dịch y tế & dược; 3352 case phát sinh do tích hợp & api (scale).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-138",
    "title": "Tích hợp & API – Logistics & chuỗi cung ứng (scale)",
    "level": "Senior",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "integration",
    "variant": "scale",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong logistics & chuỗi cung ứng (scale).",
    "situationKey": "cs|log|integration|scale|Senior",
    "objectiveKey": "luyen case tich hop & api trong logistics & chuoi cung ung (scale).",
    "summary": "Giảm rủi ro tích hợp & api trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 26125 giao dịch logistics & chuỗi cung ứng; 3375 case phát sinh do tích hợp & api (scale).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-139",
    "title": "Tích hợp & API – Giáo dục & EdTech (scale)",
    "level": "Junior",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "integration",
    "variant": "scale",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong giáo dục & edtech (scale).",
    "situationKey": "cs|edu|integration|scale|Junior",
    "objectiveKey": "luyen case tich hop & api trong giao duc & edtech (scale).",
    "summary": "Giảm rủi ro tích hợp & api trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 26262 giao dịch giáo dục & edtech; 3398 case phát sinh do tích hợp & api (scale).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-140",
    "title": "Tích hợp & API – SaaS & B2B (scale)",
    "level": "Mid",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "integration",
    "variant": "scale",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong saas & b2b (scale).",
    "situationKey": "cs|sas|integration|scale|Mid",
    "objectiveKey": "luyen case tich hop & api trong saas & b2b (scale).",
    "summary": "Giảm rủi ro tích hợp & api trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 26399 giao dịch saas & b2b; 3421 case phát sinh do tích hợp & api (scale).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-141",
    "title": "Tích hợp & API – Sản xuất & IoT (scale)",
    "level": "Senior",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "integration",
    "variant": "scale",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong sản xuất & iot (scale).",
    "situationKey": "cs|mfg|integration|scale|Senior",
    "objectiveKey": "luyen case tich hop & api trong san xuat & iot (scale).",
    "summary": "Giảm rủi ro tích hợp & api trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 26536 giao dịch sản xuất & iot; 3444 case phát sinh do tích hợp & api (scale).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-142",
    "title": "Tích hợp & API – Khu vực công & tuân thủ (scale)",
    "level": "Junior",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "integration",
    "variant": "scale",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong khu vực công & tuân thủ (scale).",
    "situationKey": "cs|pub|integration|scale|Junior",
    "objectiveKey": "luyen case tich hop & api trong khu vuc cong & tuan thu (scale).",
    "summary": "Giảm rủi ro tích hợp & api trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 26673 giao dịch khu vực công & tuân thủ; 3467 case phát sinh do tích hợp & api (scale).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-143",
    "title": "Trải nghiệm & kênh – Bán lẻ & TMĐT (scale)",
    "level": "Mid",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "experience-channel",
    "variant": "scale",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong bán lẻ & tmđt (scale).",
    "situationKey": "cs|ret|experience-channel|scale|Mid",
    "objectiveKey": "luyen case trai nghiem & kenh trong ban le & tmdt (scale).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 26810 giao dịch bán lẻ & tmđt; 3490 case phát sinh do trải nghiệm & kênh (scale).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-144",
    "title": "Trải nghiệm & kênh – Fintech & thanh toán (scale)",
    "level": "Senior",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "experience-channel",
    "variant": "scale",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong fintech & thanh toán (scale).",
    "situationKey": "cs|fin|experience-channel|scale|Senior",
    "objectiveKey": "luyen case trai nghiem & kenh trong fintech & thanh toan (scale).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 26947 giao dịch fintech & thanh toán; 3513 case phát sinh do trải nghiệm & kênh (scale).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-145",
    "title": "Trải nghiệm & kênh – Ngân hàng & tín dụng (scale)",
    "level": "Junior",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "experience-channel",
    "variant": "scale",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong ngân hàng & tín dụng (scale).",
    "situationKey": "cs|bnk|experience-channel|scale|Junior",
    "objectiveKey": "luyen case trai nghiem & kenh trong ngan hang & tin dung (scale).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 27084 giao dịch ngân hàng & tín dụng; 3536 case phát sinh do trải nghiệm & kênh (scale).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-146",
    "title": "Trải nghiệm & kênh – Bảo hiểm (scale)",
    "level": "Mid",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "experience-channel",
    "variant": "scale",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong bảo hiểm (scale).",
    "situationKey": "cs|ins|experience-channel|scale|Mid",
    "objectiveKey": "luyen case trai nghiem & kenh trong bao hiem (scale).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 27221 giao dịch bảo hiểm; 3559 case phát sinh do trải nghiệm & kênh (scale).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-147",
    "title": "Trải nghiệm & kênh – Y tế & dược (scale)",
    "level": "Senior",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "experience-channel",
    "variant": "scale",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong y tế & dược (scale).",
    "situationKey": "cs|hlt|experience-channel|scale|Senior",
    "objectiveKey": "luyen case trai nghiem & kenh trong y te & duoc (scale).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 27358 giao dịch y tế & dược; 3582 case phát sinh do trải nghiệm & kênh (scale).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-148",
    "title": "Trải nghiệm & kênh – Logistics & chuỗi cung ứng (scale)",
    "level": "Junior",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "experience-channel",
    "variant": "scale",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong logistics & chuỗi cung ứng (scale).",
    "situationKey": "cs|log|experience-channel|scale|Junior",
    "objectiveKey": "luyen case trai nghiem & kenh trong logistics & chuoi cung ung (scale).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 27495 giao dịch logistics & chuỗi cung ứng; 3605 case phát sinh do trải nghiệm & kênh (scale).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-149",
    "title": "Trải nghiệm & kênh – Giáo dục & EdTech (scale)",
    "level": "Mid",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "experience-channel",
    "variant": "scale",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong giáo dục & edtech (scale).",
    "situationKey": "cs|edu|experience-channel|scale|Mid",
    "objectiveKey": "luyen case trai nghiem & kenh trong giao duc & edtech (scale).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 27632 giao dịch giáo dục & edtech; 3628 case phát sinh do trải nghiệm & kênh (scale).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-150",
    "title": "Trải nghiệm & kênh – SaaS & B2B (scale)",
    "level": "Senior",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "experience-channel",
    "variant": "scale",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong saas & b2b (scale).",
    "situationKey": "cs|sas|experience-channel|scale|Senior",
    "objectiveKey": "luyen case trai nghiem & kenh trong saas & b2b (scale).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 27769 giao dịch saas & b2b; 3651 case phát sinh do trải nghiệm & kênh (scale).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-151",
    "title": "Trải nghiệm & kênh – Sản xuất & IoT (scale)",
    "level": "Junior",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "experience-channel",
    "variant": "scale",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong sản xuất & iot (scale).",
    "situationKey": "cs|mfg|experience-channel|scale|Junior",
    "objectiveKey": "luyen case trai nghiem & kenh trong san xuat & iot (scale).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 27906 giao dịch sản xuất & iot; 3674 case phát sinh do trải nghiệm & kênh (scale).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-152",
    "title": "Trải nghiệm & kênh – Khu vực công & tuân thủ (scale)",
    "level": "Mid",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "experience-channel",
    "variant": "scale",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong khu vực công & tuân thủ (scale).",
    "situationKey": "cs|pub|experience-channel|scale|Mid",
    "objectiveKey": "luyen case trai nghiem & kenh trong khu vuc cong & tuan thu (scale).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 28043 giao dịch khu vực công & tuân thủ; 3697 case phát sinh do trải nghiệm & kênh (scale).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-153",
    "title": "Tuân thủ & rủi ro – Bán lẻ & TMĐT (scale)",
    "level": "Senior",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "compliance-risk",
    "variant": "scale",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong bán lẻ & tmđt (scale).",
    "situationKey": "cs|ret|compliance-risk|scale|Senior",
    "objectiveKey": "luyen case tuan thu & rui ro trong ban le & tmdt (scale).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 28180 giao dịch bán lẻ & tmđt; 3720 case phát sinh do tuân thủ & rủi ro (scale).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-154",
    "title": "Tuân thủ & rủi ro – Fintech & thanh toán (scale)",
    "level": "Junior",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "compliance-risk",
    "variant": "scale",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong fintech & thanh toán (scale).",
    "situationKey": "cs|fin|compliance-risk|scale|Junior",
    "objectiveKey": "luyen case tuan thu & rui ro trong fintech & thanh toan (scale).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 28317 giao dịch fintech & thanh toán; 3743 case phát sinh do tuân thủ & rủi ro (scale).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-155",
    "title": "Tuân thủ & rủi ro – Ngân hàng & tín dụng (scale)",
    "level": "Mid",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "compliance-risk",
    "variant": "scale",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong ngân hàng & tín dụng (scale).",
    "situationKey": "cs|bnk|compliance-risk|scale|Mid",
    "objectiveKey": "luyen case tuan thu & rui ro trong ngan hang & tin dung (scale).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 28454 giao dịch ngân hàng & tín dụng; 3766 case phát sinh do tuân thủ & rủi ro (scale).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-156",
    "title": "Tuân thủ & rủi ro – Bảo hiểm (scale)",
    "level": "Senior",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "compliance-risk",
    "variant": "scale",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong bảo hiểm (scale).",
    "situationKey": "cs|ins|compliance-risk|scale|Senior",
    "objectiveKey": "luyen case tuan thu & rui ro trong bao hiem (scale).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 28591 giao dịch bảo hiểm; 3789 case phát sinh do tuân thủ & rủi ro (scale).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-157",
    "title": "Tuân thủ & rủi ro – Y tế & dược (scale)",
    "level": "Junior",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "compliance-risk",
    "variant": "scale",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong y tế & dược (scale).",
    "situationKey": "cs|hlt|compliance-risk|scale|Junior",
    "objectiveKey": "luyen case tuan thu & rui ro trong y te & duoc (scale).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 28728 giao dịch y tế & dược; 3812 case phát sinh do tuân thủ & rủi ro (scale).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-158",
    "title": "Tuân thủ & rủi ro – Logistics & chuỗi cung ứng (scale)",
    "level": "Mid",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "compliance-risk",
    "variant": "scale",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong logistics & chuỗi cung ứng (scale).",
    "situationKey": "cs|log|compliance-risk|scale|Mid",
    "objectiveKey": "luyen case tuan thu & rui ro trong logistics & chuoi cung ung (scale).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 28865 giao dịch logistics & chuỗi cung ứng; 3835 case phát sinh do tuân thủ & rủi ro (scale).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-159",
    "title": "Tuân thủ & rủi ro – Giáo dục & EdTech (scale)",
    "level": "Senior",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "compliance-risk",
    "variant": "scale",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong giáo dục & edtech (scale).",
    "situationKey": "cs|edu|compliance-risk|scale|Senior",
    "objectiveKey": "luyen case tuan thu & rui ro trong giao duc & edtech (scale).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 29002 giao dịch giáo dục & edtech; 3858 case phát sinh do tuân thủ & rủi ro (scale).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-160",
    "title": "Tuân thủ & rủi ro – SaaS & B2B (scale)",
    "level": "Junior",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "compliance-risk",
    "variant": "scale",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong saas & b2b (scale).",
    "situationKey": "cs|sas|compliance-risk|scale|Junior",
    "objectiveKey": "luyen case tuan thu & rui ro trong saas & b2b (scale).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 29139 giao dịch saas & b2b; 3881 case phát sinh do tuân thủ & rủi ro (scale).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-161",
    "title": "Tuân thủ & rủi ro – Sản xuất & IoT (scale)",
    "level": "Mid",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "compliance-risk",
    "variant": "scale",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong sản xuất & iot (scale).",
    "situationKey": "cs|mfg|compliance-risk|scale|Mid",
    "objectiveKey": "luyen case tuan thu & rui ro trong san xuat & iot (scale).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 29276 giao dịch sản xuất & iot; 3904 case phát sinh do tuân thủ & rủi ro (scale).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-162",
    "title": "Tuân thủ & rủi ro – Khu vực công & tuân thủ (scale)",
    "level": "Senior",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "compliance-risk",
    "variant": "scale",
    "skill": "Tuân thủ & rủi ro",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tuân thủ & rủi ro trong khu vực công & tuân thủ (scale).",
    "situationKey": "cs|pub|compliance-risk|scale|Senior",
    "objectiveKey": "luyen case tuan thu & rui ro trong khu vuc cong & tuan thu (scale).",
    "summary": "Giảm rủi ro tuân thủ & rủi ro trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề tuân thủ & rủi ro. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 29413 giao dịch khu vực công & tuân thủ; 3927 case phát sinh do tuân thủ & rủi ro (scale).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-163",
    "title": "Quy trình & vận hành – Bán lẻ & TMĐT (migration)",
    "level": "Junior",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "process",
    "variant": "migration",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong bán lẻ & tmđt (migration).",
    "situationKey": "cs|ret|process|migration|Junior",
    "objectiveKey": "luyen case quy trinh & van hanh trong ban le & tmdt (migration).",
    "summary": "Giảm rủi ro quy trình & vận hành trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 29550 giao dịch bán lẻ & tmđt; 3950 case phát sinh do quy trình & vận hành (migration).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-164",
    "title": "Quy trình & vận hành – Fintech & thanh toán (migration)",
    "level": "Mid",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "process",
    "variant": "migration",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong fintech & thanh toán (migration).",
    "situationKey": "cs|fin|process|migration|Mid",
    "objectiveKey": "luyen case quy trinh & van hanh trong fintech & thanh toan (migration).",
    "summary": "Giảm rủi ro quy trình & vận hành trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 29687 giao dịch fintech & thanh toán; 3973 case phát sinh do quy trình & vận hành (migration).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-165",
    "title": "Quy trình & vận hành – Ngân hàng & tín dụng (migration)",
    "level": "Senior",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "process",
    "variant": "migration",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong ngân hàng & tín dụng (migration).",
    "situationKey": "cs|bnk|process|migration|Senior",
    "objectiveKey": "luyen case quy trinh & van hanh trong ngan hang & tin dung (migration).",
    "summary": "Giảm rủi ro quy trình & vận hành trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 29824 giao dịch ngân hàng & tín dụng; 3996 case phát sinh do quy trình & vận hành (migration).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-166",
    "title": "Quy trình & vận hành – Bảo hiểm (migration)",
    "level": "Junior",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "process",
    "variant": "migration",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong bảo hiểm (migration).",
    "situationKey": "cs|ins|process|migration|Junior",
    "objectiveKey": "luyen case quy trinh & van hanh trong bao hiem (migration).",
    "summary": "Giảm rủi ro quy trình & vận hành trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 29961 giao dịch bảo hiểm; 4019 case phát sinh do quy trình & vận hành (migration).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-167",
    "title": "Quy trình & vận hành – Y tế & dược (migration)",
    "level": "Mid",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "process",
    "variant": "migration",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong y tế & dược (migration).",
    "situationKey": "cs|hlt|process|migration|Mid",
    "objectiveKey": "luyen case quy trinh & van hanh trong y te & duoc (migration).",
    "summary": "Giảm rủi ro quy trình & vận hành trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 30098 giao dịch y tế & dược; 4042 case phát sinh do quy trình & vận hành (migration).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-168",
    "title": "Quy trình & vận hành – Logistics & chuỗi cung ứng (migration)",
    "level": "Senior",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "process",
    "variant": "migration",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong logistics & chuỗi cung ứng (migration).",
    "situationKey": "cs|log|process|migration|Senior",
    "objectiveKey": "luyen case quy trinh & van hanh trong logistics & chuoi cung ung (migration).",
    "summary": "Giảm rủi ro quy trình & vận hành trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 30235 giao dịch logistics & chuỗi cung ứng; 4065 case phát sinh do quy trình & vận hành (migration).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-169",
    "title": "Quy trình & vận hành – Giáo dục & EdTech (migration)",
    "level": "Junior",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "process",
    "variant": "migration",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong giáo dục & edtech (migration).",
    "situationKey": "cs|edu|process|migration|Junior",
    "objectiveKey": "luyen case quy trinh & van hanh trong giao duc & edtech (migration).",
    "summary": "Giảm rủi ro quy trình & vận hành trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 30372 giao dịch giáo dục & edtech; 4088 case phát sinh do quy trình & vận hành (migration).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-170",
    "title": "Quy trình & vận hành – SaaS & B2B (migration)",
    "level": "Mid",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "process",
    "variant": "migration",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong saas & b2b (migration).",
    "situationKey": "cs|sas|process|migration|Mid",
    "objectiveKey": "luyen case quy trinh & van hanh trong saas & b2b (migration).",
    "summary": "Giảm rủi ro quy trình & vận hành trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 30509 giao dịch saas & b2b; 4111 case phát sinh do quy trình & vận hành (migration).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-171",
    "title": "Quy trình & vận hành – Sản xuất & IoT (migration)",
    "level": "Senior",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "process",
    "variant": "migration",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong sản xuất & iot (migration).",
    "situationKey": "cs|mfg|process|migration|Senior",
    "objectiveKey": "luyen case quy trinh & van hanh trong san xuat & iot (migration).",
    "summary": "Giảm rủi ro quy trình & vận hành trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 30646 giao dịch sản xuất & iot; 4134 case phát sinh do quy trình & vận hành (migration).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-172",
    "title": "Quy trình & vận hành – Khu vực công & tuân thủ (migration)",
    "level": "Junior",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "process",
    "variant": "migration",
    "skill": "Quy trình & vận hành",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case quy trình & vận hành trong khu vực công & tuân thủ (migration).",
    "situationKey": "cs|pub|process|migration|Junior",
    "objectiveKey": "luyen case quy trinh & van hanh trong khu vuc cong & tuan thu (migration).",
    "summary": "Giảm rủi ro quy trình & vận hành trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề quy trình & vận hành. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 30783 giao dịch khu vực công & tuân thủ; 4157 case phát sinh do quy trình & vận hành (migration).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-173",
    "title": "Dữ liệu & báo cáo – Bán lẻ & TMĐT (migration)",
    "level": "Mid",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "data-reporting",
    "variant": "migration",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong bán lẻ & tmđt (migration).",
    "situationKey": "cs|ret|data-reporting|migration|Mid",
    "objectiveKey": "luyen case du lieu & bao cao trong ban le & tmdt (migration).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 30920 giao dịch bán lẻ & tmđt; 4180 case phát sinh do dữ liệu & báo cáo (migration).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-174",
    "title": "Dữ liệu & báo cáo – Fintech & thanh toán (migration)",
    "level": "Senior",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "data-reporting",
    "variant": "migration",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong fintech & thanh toán (migration).",
    "situationKey": "cs|fin|data-reporting|migration|Senior",
    "objectiveKey": "luyen case du lieu & bao cao trong fintech & thanh toan (migration).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 31057 giao dịch fintech & thanh toán; 4203 case phát sinh do dữ liệu & báo cáo (migration).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-175",
    "title": "Dữ liệu & báo cáo – Ngân hàng & tín dụng (migration)",
    "level": "Junior",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "data-reporting",
    "variant": "migration",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong ngân hàng & tín dụng (migration).",
    "situationKey": "cs|bnk|data-reporting|migration|Junior",
    "objectiveKey": "luyen case du lieu & bao cao trong ngan hang & tin dung (migration).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 31194 giao dịch ngân hàng & tín dụng; 4226 case phát sinh do dữ liệu & báo cáo (migration).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-176",
    "title": "Dữ liệu & báo cáo – Bảo hiểm (migration)",
    "level": "Mid",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "data-reporting",
    "variant": "migration",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong bảo hiểm (migration).",
    "situationKey": "cs|ins|data-reporting|migration|Mid",
    "objectiveKey": "luyen case du lieu & bao cao trong bao hiem (migration).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 31331 giao dịch bảo hiểm; 4249 case phát sinh do dữ liệu & báo cáo (migration).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-177",
    "title": "Dữ liệu & báo cáo – Y tế & dược (migration)",
    "level": "Senior",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "data-reporting",
    "variant": "migration",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong y tế & dược (migration).",
    "situationKey": "cs|hlt|data-reporting|migration|Senior",
    "objectiveKey": "luyen case du lieu & bao cao trong y te & duoc (migration).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 31468 giao dịch y tế & dược; 4272 case phát sinh do dữ liệu & báo cáo (migration).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-178",
    "title": "Dữ liệu & báo cáo – Logistics & chuỗi cung ứng (migration)",
    "level": "Junior",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "data-reporting",
    "variant": "migration",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong logistics & chuỗi cung ứng (migration).",
    "situationKey": "cs|log|data-reporting|migration|Junior",
    "objectiveKey": "luyen case du lieu & bao cao trong logistics & chuoi cung ung (migration).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 31605 giao dịch logistics & chuỗi cung ứng; 4295 case phát sinh do dữ liệu & báo cáo (migration).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-179",
    "title": "Dữ liệu & báo cáo – Giáo dục & EdTech (migration)",
    "level": "Mid",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "data-reporting",
    "variant": "migration",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong giáo dục & edtech (migration).",
    "situationKey": "cs|edu|data-reporting|migration|Mid",
    "objectiveKey": "luyen case du lieu & bao cao trong giao duc & edtech (migration).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 31742 giao dịch giáo dục & edtech; 4318 case phát sinh do dữ liệu & báo cáo (migration).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-180",
    "title": "Dữ liệu & báo cáo – SaaS & B2B (migration)",
    "level": "Senior",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "data-reporting",
    "variant": "migration",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong saas & b2b (migration).",
    "situationKey": "cs|sas|data-reporting|migration|Senior",
    "objectiveKey": "luyen case du lieu & bao cao trong saas & b2b (migration).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 31879 giao dịch saas & b2b; 4341 case phát sinh do dữ liệu & báo cáo (migration).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-181",
    "title": "Dữ liệu & báo cáo – Sản xuất & IoT (migration)",
    "level": "Junior",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "data-reporting",
    "variant": "migration",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong sản xuất & iot (migration).",
    "situationKey": "cs|mfg|data-reporting|migration|Junior",
    "objectiveKey": "luyen case du lieu & bao cao trong san xuat & iot (migration).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 32016 giao dịch sản xuất & iot; 4364 case phát sinh do dữ liệu & báo cáo (migration).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-182",
    "title": "Dữ liệu & báo cáo – Khu vực công & tuân thủ (migration)",
    "level": "Mid",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "data-reporting",
    "variant": "migration",
    "skill": "Dữ liệu & báo cáo",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case dữ liệu & báo cáo trong khu vực công & tuân thủ (migration).",
    "situationKey": "cs|pub|data-reporting|migration|Mid",
    "objectiveKey": "luyen case du lieu & bao cao trong khu vuc cong & tuan thu (migration).",
    "summary": "Giảm rủi ro dữ liệu & báo cáo trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề dữ liệu & báo cáo. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 32153 giao dịch khu vực công & tuân thủ; 4387 case phát sinh do dữ liệu & báo cáo (migration).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-183",
    "title": "Tích hợp & API – Bán lẻ & TMĐT (migration)",
    "level": "Senior",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "integration",
    "variant": "migration",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong bán lẻ & tmđt (migration).",
    "situationKey": "cs|ret|integration|migration|Senior",
    "objectiveKey": "luyen case tich hop & api trong ban le & tmdt (migration).",
    "summary": "Giảm rủi ro tích hợp & api trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 32290 giao dịch bán lẻ & tmđt; 4410 case phát sinh do tích hợp & api (migration).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-184",
    "title": "Tích hợp & API – Fintech & thanh toán (migration)",
    "level": "Junior",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "integration",
    "variant": "migration",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong fintech & thanh toán (migration).",
    "situationKey": "cs|fin|integration|migration|Junior",
    "objectiveKey": "luyen case tich hop & api trong fintech & thanh toan (migration).",
    "summary": "Giảm rủi ro tích hợp & api trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 32427 giao dịch fintech & thanh toán; 4433 case phát sinh do tích hợp & api (migration).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-185",
    "title": "Tích hợp & API – Ngân hàng & tín dụng (migration)",
    "level": "Mid",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "integration",
    "variant": "migration",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong ngân hàng & tín dụng (migration).",
    "situationKey": "cs|bnk|integration|migration|Mid",
    "objectiveKey": "luyen case tich hop & api trong ngan hang & tin dung (migration).",
    "summary": "Giảm rủi ro tích hợp & api trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 32564 giao dịch ngân hàng & tín dụng; 4456 case phát sinh do tích hợp & api (migration).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-186",
    "title": "Tích hợp & API – Bảo hiểm (migration)",
    "level": "Senior",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "integration",
    "variant": "migration",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong bảo hiểm (migration).",
    "situationKey": "cs|ins|integration|migration|Senior",
    "objectiveKey": "luyen case tich hop & api trong bao hiem (migration).",
    "summary": "Giảm rủi ro tích hợp & api trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 32701 giao dịch bảo hiểm; 4479 case phát sinh do tích hợp & api (migration).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-187",
    "title": "Tích hợp & API – Y tế & dược (migration)",
    "level": "Junior",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "integration",
    "variant": "migration",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong y tế & dược (migration).",
    "situationKey": "cs|hlt|integration|migration|Junior",
    "objectiveKey": "luyen case tich hop & api trong y te & duoc (migration).",
    "summary": "Giảm rủi ro tích hợp & api trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 32838 giao dịch y tế & dược; 4502 case phát sinh do tích hợp & api (migration).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-188",
    "title": "Tích hợp & API – Logistics & chuỗi cung ứng (migration)",
    "level": "Mid",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "integration",
    "variant": "migration",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong logistics & chuỗi cung ứng (migration).",
    "situationKey": "cs|log|integration|migration|Mid",
    "objectiveKey": "luyen case tich hop & api trong logistics & chuoi cung ung (migration).",
    "summary": "Giảm rủi ro tích hợp & api trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 32975 giao dịch logistics & chuỗi cung ứng; 4525 case phát sinh do tích hợp & api (migration).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-189",
    "title": "Tích hợp & API – Giáo dục & EdTech (migration)",
    "level": "Senior",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "integration",
    "variant": "migration",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong giáo dục & edtech (migration).",
    "situationKey": "cs|edu|integration|migration|Senior",
    "objectiveKey": "luyen case tich hop & api trong giao duc & edtech (migration).",
    "summary": "Giảm rủi ro tích hợp & api trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 33112 giao dịch giáo dục & edtech; 4548 case phát sinh do tích hợp & api (migration).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-190",
    "title": "Tích hợp & API – SaaS & B2B (migration)",
    "level": "Junior",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "integration",
    "variant": "migration",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong saas & b2b (migration).",
    "situationKey": "cs|sas|integration|migration|Junior",
    "objectiveKey": "luyen case tich hop & api trong saas & b2b (migration).",
    "summary": "Giảm rủi ro tích hợp & api trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 33249 giao dịch saas & b2b; 4571 case phát sinh do tích hợp & api (migration).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-191",
    "title": "Tích hợp & API – Sản xuất & IoT (migration)",
    "level": "Mid",
    "domain": "Sản xuất & IoT",
    "submodule": "CS-MFG",
    "problemFamily": "integration",
    "variant": "migration",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong sản xuất & iot (migration).",
    "situationKey": "cs|mfg|integration|migration|Mid",
    "objectiveKey": "luyen case tich hop & api trong san xuat & iot (migration).",
    "summary": "Giảm rủi ro tích hợp & api trong sản xuất & iot.",
    "context": "Một doanh nghiệp sản xuất & iot gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 33386 giao dịch sản xuất & iot; 4594 case phát sinh do tích hợp & api (migration).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại sản xuất & iot.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-192",
    "title": "Tích hợp & API – Khu vực công & tuân thủ (migration)",
    "level": "Senior",
    "domain": "Khu vực công & tuân thủ",
    "submodule": "CS-PUB",
    "problemFamily": "integration",
    "variant": "migration",
    "skill": "Tích hợp & API",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case tích hợp & api trong khu vực công & tuân thủ (migration).",
    "situationKey": "cs|pub|integration|migration|Senior",
    "objectiveKey": "luyen case tich hop & api trong khu vuc cong & tuan thu (migration).",
    "summary": "Giảm rủi ro tích hợp & api trong khu vực công & tuân thủ.",
    "context": "Một doanh nghiệp khu vực công & tuân thủ gặp vấn đề tích hợp & api. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 33523 giao dịch khu vực công & tuân thủ; 4617 case phát sinh do tích hợp & api (migration).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại khu vực công & tuân thủ.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-193",
    "title": "Trải nghiệm & kênh – Bán lẻ & TMĐT (migration)",
    "level": "Junior",
    "domain": "Bán lẻ & TMĐT",
    "submodule": "CS-RET",
    "problemFamily": "experience-channel",
    "variant": "migration",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong bán lẻ & tmđt (migration).",
    "situationKey": "cs|ret|experience-channel|migration|Junior",
    "objectiveKey": "luyen case trai nghiem & kenh trong ban le & tmdt (migration).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong bán lẻ & tmđt.",
    "context": "Một doanh nghiệp bán lẻ & tmđt gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 33660 giao dịch bán lẻ & tmđt; 4640 case phát sinh do trải nghiệm & kênh (migration).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bán lẻ & tmđt.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-194",
    "title": "Trải nghiệm & kênh – Fintech & thanh toán (migration)",
    "level": "Mid",
    "domain": "Fintech & thanh toán",
    "submodule": "CS-FIN",
    "problemFamily": "experience-channel",
    "variant": "migration",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong fintech & thanh toán (migration).",
    "situationKey": "cs|fin|experience-channel|migration|Mid",
    "objectiveKey": "luyen case trai nghiem & kenh trong fintech & thanh toan (migration).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong fintech & thanh toán.",
    "context": "Một doanh nghiệp fintech & thanh toán gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 33797 giao dịch fintech & thanh toán; 4663 case phát sinh do trải nghiệm & kênh (migration).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại fintech & thanh toán.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  },
  {
    "id": "case-195",
    "title": "Trải nghiệm & kênh – Ngân hàng & tín dụng (migration)",
    "level": "Senior",
    "domain": "Ngân hàng & tín dụng",
    "submodule": "CS-BNK",
    "problemFamily": "experience-channel",
    "variant": "migration",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong ngân hàng & tín dụng (migration).",
    "situationKey": "cs|bnk|experience-channel|migration|Senior",
    "objectiveKey": "luyen case trai nghiem & kenh trong ngan hang & tin dung (migration).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong ngân hàng & tín dụng.",
    "context": "Một doanh nghiệp ngân hàng & tín dụng gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 33934 giao dịch ngân hàng & tín dụng; 4686 case phát sinh do trải nghiệm & kênh (migration).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại ngân hàng & tín dụng.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Modern Analyst – https://www.modernanalyst.com/",
      "Stack Overflow – https://stackoverflow.com/"
    ]
  },
  {
    "id": "case-196",
    "title": "Trải nghiệm & kênh – Bảo hiểm (migration)",
    "level": "Junior",
    "domain": "Bảo hiểm",
    "submodule": "CS-INS",
    "problemFamily": "experience-channel",
    "variant": "migration",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong bảo hiểm (migration).",
    "situationKey": "cs|ins|experience-channel|migration|Junior",
    "objectiveKey": "luyen case trai nghiem & kenh trong bao hiem (migration).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong bảo hiểm.",
    "context": "Một doanh nghiệp bảo hiểm gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 34071 giao dịch bảo hiểm; 4709 case phát sinh do trải nghiệm & kênh (migration).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 11 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại bảo hiểm.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "BA Times – https://www.batimes.com/",
      "OMG – https://www.omg.org/"
    ]
  },
  {
    "id": "case-197",
    "title": "Trải nghiệm & kênh – Y tế & dược (migration)",
    "level": "Mid",
    "domain": "Y tế & dược",
    "submodule": "CS-HLT",
    "problemFamily": "experience-channel",
    "variant": "migration",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong y tế & dược (migration).",
    "situationKey": "cs|hlt|experience-channel|migration|Mid",
    "objectiveKey": "luyen case trai nghiem & kenh trong y te & duoc (migration).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong y tế & dược.",
    "context": "Một doanh nghiệp y tế & dược gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 34208 giao dịch y tế & dược; 4732 case phát sinh do trải nghiệm & kênh (migration).",
      "Hệ thống đồng bộ mỗi 15 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 12 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại y tế & dược.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 5% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Stack Overflow – https://stackoverflow.com/",
      "IIBA – https://www.iiba.org/"
    ]
  },
  {
    "id": "case-198",
    "title": "Trải nghiệm & kênh – Logistics & chuỗi cung ứng (migration)",
    "level": "Senior",
    "domain": "Logistics & chuỗi cung ứng",
    "submodule": "CS-LOG",
    "problemFamily": "experience-channel",
    "variant": "migration",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong logistics & chuỗi cung ứng (migration).",
    "situationKey": "cs|log|experience-channel|migration|Senior",
    "objectiveKey": "luyen case trai nghiem & kenh trong logistics & chuoi cung ung (migration).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong logistics & chuỗi cung ứng.",
    "context": "Một doanh nghiệp logistics & chuỗi cung ứng gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 34345 giao dịch logistics & chuỗi cung ứng; 4755 case phát sinh do trải nghiệm & kênh (migration).",
      "Hệ thống đồng bộ mỗi 30 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 4 giờ.",
      "Mỗi case cần trung bình 8 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại logistics & chuỗi cung ứng.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 6 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 6% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "OMG – https://www.omg.org/",
      "Bridging the Gap – https://www.bridging-the-gap.com/"
    ]
  },
  {
    "id": "case-199",
    "title": "Trải nghiệm & kênh – Giáo dục & EdTech (migration)",
    "level": "Junior",
    "domain": "Giáo dục & EdTech",
    "submodule": "CS-EDU",
    "problemFamily": "experience-channel",
    "variant": "migration",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong giáo dục & edtech (migration).",
    "situationKey": "cs|edu|experience-channel|migration|Junior",
    "objectiveKey": "luyen case trai nghiem & kenh trong giao duc & edtech (migration).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong giáo dục & edtech.",
    "context": "Một doanh nghiệp giáo dục & edtech gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 34482 giao dịch giáo dục & edtech; 4778 case phát sinh do trải nghiệm & kênh (migration).",
      "Hệ thống đồng bộ mỗi 45 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 2 giờ.",
      "Mỗi case cần trung bình 9 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại giáo dục & edtech.",
      "Đội triển khai gồm 2 developer, 1 QA; thời hạn MVP 4 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 7% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "IIBA – https://www.iiba.org/",
      "Modern Analyst – https://www.modernanalyst.com/"
    ]
  },
  {
    "id": "case-200",
    "title": "Trải nghiệm & kênh – SaaS & B2B (migration)",
    "level": "Mid",
    "domain": "SaaS & B2B",
    "submodule": "CS-SAS",
    "problemFamily": "experience-channel",
    "variant": "migration",
    "skill": "Trải nghiệm & kênh",
    "minutes": 40,
    "accent": "#7c68d7",
    "icon": "case",
    "learningObjective": "Luyện case trải nghiệm & kênh trong saas & b2b (migration).",
    "situationKey": "cs|sas|experience-channel|migration|Mid",
    "objectiveKey": "luyen case trai nghiem & kenh trong saas & b2b (migration).",
    "summary": "Giảm rủi ro trải nghiệm & kênh trong saas & b2b.",
    "context": "Một doanh nghiệp saas & b2b gặp vấn đề trải nghiệm & kênh. Giám đốc đề nghị giải pháp nhanh. Bạn là BA cần làm rõ trước khi chốt.",
    "facts": [
      "Tháng gần nhất: 34619 giao dịch saas & b2b; 4801 case phát sinh do trải nghiệm & kênh (migration).",
      "Hệ thống đồng bộ mỗi 60 phút; có bán trực tiếp trong khoảng chờ. SLA xử lý 3 giờ.",
      "Mỗi case cần trung bình 10 phút xử lý; đây là số trung bình theo mẫu đo hiện tại tại saas & b2b.",
      "Đội triển khai gồm 3 developer, 2 QA; thời hạn MVP 5 tuần. Chưa có số liệu tách theo SKU."
    ],
    "twist": "Quản lý không muốn khóa tồn kho quá lâu vì sợ mất cơ hội bán trực tiếp.",
    "hint": "Đừng kết luận nguyên nhân duy nhất. Kiểm tra đồng thời race condition, tồn thực tế, giữ chỗ, đơn treo.",
    "models": [
      "Vấn đề: 8% giao dịch bị ảnh hưởng. Đây là baseline, chưa chứng minh nguyên nhân.",
      "Dữ liệu nào tập trung ở SKU/cửa hàng? Tồn khả dụng tính thế nào? Có giữ chỗ trước thanh toán không?",
      "Khách hàng và thu ngân là người dùng; quản lý kho chịu trách nhiệm tồn; CSKH xử lý sự cố.",
      "Must: tồn khả dụng, giữ chỗ có thời hạn, xác nhận thanh toán. Should: cảnh báo sai lệch. Could: dự báo tồn.",
      "So sánh tăng tần suất đồng bộ với giữ tồn tập trung. Pilot nhóm SKU rủi ro cao.",
      "Rủi ro: mạng mất làm lệch trạng thái → retry, đối soát, audit log.",
      "KPI chính = case phát sinh / tổng giao dịch, đo theo tuần. Guardrail: chuyển đổi thanh toán, tồn bị giữ quá hạn."
    ],
    "exercise": [
      "Viết 5 trường dữ liệu đầu vào, kiểu dữ liệu, bắt buộc/không, người xác nhận."
    ],
    "rubric": {
      "criteria": [
        {
          "name": "Logic & lập luận",
          "desc": "Bám dữ kiện, phân biệt giả định và kết luận.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý, thiếu ngoại lệ",
            "5": "Chặt, nêu rõ đánh đổi"
          }
        },
        {
          "name": "Độ đầy đủ",
          "desc": "Có stakeholder, rules, NFR, ngoại lệ, rủi ro.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng thiếu",
            "5": "Đầy đủ"
          }
        },
        {
          "name": "Ưu tiên & đánh đổi",
          "desc": "Có lý do ưu tiên và so sánh phương án.",
          "anchors": {
            "0": "Chưa có",
            "3": "Có nhưng chung",
            "5": "Rõ ràng"
          }
        },
        {
          "name": "Giao tiếp & kiểm chứng",
          "desc": "Yêu cầu rõ, AC kiểm chứng được, KPI có định nghĩa.",
          "anchors": {
            "0": "Chưa có",
            "3": "Hợp lý",
            "5": "Kiểm chứng được"
          }
        }
      ]
    },
    "sourceRefs": [
      "Bridging the Gap – https://www.bridging-the-gap.com/",
      "BA Times – https://www.batimes.com/"
    ]
  }
]);
