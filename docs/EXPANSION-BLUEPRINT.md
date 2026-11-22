# Blueprint mở rộng 4 mục học tập BA

> Nguồn và bản quyền: xem `docs/SOURCE-POLICY.md`. Mọi nội dung phải tuân theo nguyên tắc và danh sách nguồn trong tài liệu `Danh mục nguồn tài liệu Business Analyst (BA) (1).docx`: chỉ tóm tắt ý chính, không copy nguyên văn, luôn có link "Nguồn tham khảo".

Mục tiêu: mỗi mục đạt **200 nội dung**, giữ nội dung cũ, không trùng tình huống và không trùng mục tiêu học.

## 0. Tổng quan

| Mục | Hiện có | Mục tiêu | Cần bổ sung | ID mới | Route dự kiến |
|---|---:|---:|---:|---|---|
| Phỏng vấn | 10 | 200 | 190 | `iv-011` → `iv-200` | `#/interview` |
| Case study | 12 | 200 | 188 | `case-013` → `case-200` | `#/cases` |
| Glossary | 12 | 200 | 188 | slug thuật ngữ | `#/glossary` |
| Kỹ thuật cho BA | 1 bài | 200 | 199 | `tech-001` → `tech-199` | `#/ba-tech` |

- Tổng sau mở rộng: **800 nội dung**.
- Nếu muốn **200 nội dung mới/mục** (tổng 835), đổi cột "Mục tiêu" thành 210/212/212/201. Khuyến nghị giữ tổng 200/mục để tránh nội dung sát nghĩa với 10-12 bài cũ.

---

## 1. Phỏng vấn — 200 tình huống

### Phân bổ module con (tổng 200)

| Mã | Module con | Số lượng | Cấp độ |
|---|---|---:|---|
| IV-REQ | Khai thác & phân tích yêu cầu | 36 | 12 J / 16 M / 8 S |
| IV-STK | Stakeholder & xung đột | 34 | 10 J / 16 M / 8 S |
| IV-AGI | Agile/Scrum & delivery | 30 | 10 J / 14 M / 6 S |
| IV-PRB | Giải quyết vấn đề & root cause | 30 | 8 J / 14 M / 8 S |
| IV-COM | Giao tiếp, facilitation, viết | 30 | 10 J / 12 M / 8 S |
| IV-TEC | Tư duy kỹ thuật & hệ thống | 24 | 6 J / 12 M / 6 S |
| IV-BEH | Hành vi & phỏng vấn STAR | 16 | 4 J / 6 M / 6 S |
| **Tổng** | | **200** | **60 J / 90 M / 50 S** |

### Tình huống theo module con

**IV-REQ — 36**
1. Yêu cầu mơ hồ, thiếu ngữ cảnh — 6
2. Tài liệu cũ, không có tài liệu — 6
3. Yêu cầu thay đổi giữa sprint — 6
4. Quy tắc nghiệp vụ xung đột — 6
5. Thiếu NFR, không đo được — 6
6. Dữ liệu, báo cáo, di trú — 6

**IV-STK — 34**
1. Phản đối giải pháp — 6
2. Ưu tiên xung đột giữa các phòng ban — 6
3. Sponsor vắng mặt, quyết định chậm — 6
4. SME không hợp tác, không có thời gian — 6
5. Chính trị nội bộ, mất niềm tin — 5
6. Vendor/đối tác không đáp ứng — 5

**IV-AGI — 30**
1. Scope creep sát release — 5
2. Sprint spillover, cam kết trượt — 5
3. DoR/DoD và backlog rối — 5
4. Ước lượng, story point, cam kết — 5
5. Áp lực release, cắt phạm vi — 5
6. Retro, cải tiến quy trình — 5

**IV-PRB — 30**
1. Sự cố production — 5
2. UAT fail sát go-live — 5
3. Chẩn đoán sai root cause — 5
4. Nút thắt quy trình — 5
5. Chất lượng dữ liệu — 5
6. Adoption thấp sau go-live — 5

**IV-COM — 30**
1. Hội thoại khó, thông báo tin xấu — 5
2. Facilitation workshop — 5
3. Executive summary, báo cáo lãnh đạo — 5
4. Viết đặc tả, BRD, user story — 5
5. Làm việc remote/đa văn hóa — 5
6. Feedback, mentoring, review tài liệu — 5

**IV-TEC — 24**
1. API & tích hợp — 4
2. Mô hình dữ liệu — 4
3. Bảo mật & tuân thủ — 4
4. Hiệu năng & NFR — 4
5. Legacy & migration — 4
6. Cloud & vận hành — 4

**IV-BEH — 16**
1. Thất bại và bài học — 3
2. Xung đột và thuyết phục — 3
3. Leadership không chức danh — 3
4. Học nhanh domain mới — 3
5. Ưu tiên và đánh đổi — 2
6. Tác động và kết quả — 2

### Khóa chống trùng
- `situationKey = "iv|" + submodule + "|" + family + "|" + domain + "|" + level`
- `objectiveKey = normalize(learningObjective)`
- `titleNormalized` không trùng sau khi bỏ dấu, lowercase, gộp khoảng trắng.
- Từ chối nếu độ giống tiêu đề ≥ 0.85 (Jaccard token) hoặc trùng `situationKey`/`objectiveKey`.

### Schema một tình huống
```js
{
  id: "iv-011",
  title: "...",
  level: "Junior | Middle | Senior",
  category: "Requirement | Stakeholder | Agile/Scrum | Technical | Communication | Problem Solving",
  submodule: "IV-REQ",
  family: "ambiguous-requirement",
  domain: "ecommerce",
  skill: "...",
  estimatedDuration: "12 phút",
  learningObjective: "...",
  situationKey: "iv|IV-REQ|ambiguous-requirement|ecommerce|Junior",
  objectiveKey: "...",
  brief: "...",                 // 2-3 câu tóm tắt
  context: "...",               // bối cảnh + số liệu
  scenarioContext: "...",
  candidateRole: "...",
  interviewerRole: "...",
  interviewer: { name, role, avatar },
  initialQuestion: "...",
  followUpQuestions: ["..."],
  branchingRules: ["..."],
  turns: [                      // 2-3 vòng
    {
      turnIndex: 1,
      question: "...",
      hint: "...",
      options: [
        { key: "A", text: "...", isBest: true, score: 95 },
        { key: "B", text: "...", isBest: false, score: 50 },
        { key: "C", text: "...", isBest: false, score: 40 },
        { key: "D", text: "...", isBest: false, score: 35 }
      ]
    }
  ],
  modelAnswer: { situation, task, action, result },
  rubricCriteria: [             // đúng 6 tiêu chí
    { name, score, desc }
  ],
  strengths: ["..."],
  weaknesses: ["..."],
  pitfalls: ["..."],
  tags: ["..."],
  sourceRefs: ["..."]
}
```

---

## 2. Case study — 200 case

### Phân bổ theo lĩnh vực (10 × 20)

| Mã | Lĩnh vực | Số lượng |
|---|---|---:|
| CS-RET | Bán lẻ & TMĐT | 20 |
| CS-FIN | Fintech & thanh toán | 20 |
| CS-BNK | Ngân hàng & tín dụng | 20 |
| CS-INS | Bảo hiểm | 20 |
| CS-HLT | Y tế & dược | 20 |
| CS-LOG | Logistics & chuỗi cung ứng | 20 |
| CS-EDU | Giáo dục & EdTech | 20 |
| CS-SAS | SaaS & B2B | 20 |
| CS-MFG | Sản xuất & IoT | 20 |
| CS-PUB | Khu vực công & tuân thủ | 20 |
| **Tổng** | | **200** |

Mỗi lĩnh vực chia 5 nhóm vấn đề × 4 biến thể:
- Quy trình & vận hành — 4
- Dữ liệu & báo cáo — 4
- Tích hợp & API — 4
- Trải nghiệm & kênh — 4
- Tuân thủ & rủi ro — 4

Biến thể: happy path, ngoại lệ, tăng quy mô, migration/tuân thủ.
Cấp độ: **60 Junior / 80 Mid / 60 Senior** (6/8/6 mỗi lĩnh vực).

### Khóa chống trùng
- `situationKey = "cs|" + domain + "|" + problemFamily + "|" + variant + "|" + level`
- `objectiveKey = normalize(learningObjective)`
- Không trùng `titleNormalized`; không trùng bộ `facts` (Jaccard ≥ 0.8).

### Schema một case
```js
{
  id: "case-013",
  title: "...",
  level: "Junior | Mid | Senior",
  domain: "...",
  submodule: "CS-RET",
  problemFamily: "process",
  variant: "exception",
  skill: "...",
  minutes: 40,
  accent: "#7c68d7",
  icon: "case",
  learningObjective: "...",
  situationKey: "...",
  objectiveKey: "...",
  summary: "...",
  context: "...",
  facts: ["...", "...", "...", "..."],   // 4-6 dữ kiện, có số liệu
  twist: "...",
  hint: "...",
  models: ["...", "...", "...", "...", "...", "...", "..."], // đúng 7 bước
  exercise: ["..."],                      // bài tập bổ sung
  rubric: {
    criteria: [
      { name, desc, anchors: { 0: "...", 3: "...", 5: "..." } }
    ]
  },
  sourceRefs: ["..."]
}
```

---

## 3. Glossary — 200 thuật ngữ

| Mã | Nhóm | Số lượng |
|---|---|---:|
| GL-FND | Nền tảng BA | 30 |
| GL-DOC | Tài liệu BA | 30 |
| GL-ELI | Khai thác yêu cầu | 30 |
| GL-MOD | Mô hình hóa & phân tích | 35 |
| GL-AGI | Agile/Scrum | 30 |
| GL-TST | Kiểm thử & nghiệm thu | 25 |
| GL-TEC | Kỹ thuật cho BA | 20 |
| **Tổng** | | **200** |

### Khóa chống trùng
- `id = slug(abbr || name)`; không trùng slug.
- Không trùng `normalize(abbr)` và `normalize(name)`.
- Độ giống `definition` < 0.80 (Jaccard) với mọi thuật ngữ khác.

### Schema
```js
{
  id: "business-rule",
  abbr: "Business Rule (BR)",
  name: "Quy tắc nghiệp vụ",
  letter: "B",
  category: "modeling",
  categoryName: "Mô hình hóa",
  definition: "...",          // 1 câu, chính xác
  fullDefinition: "...",      // 2-3 câu, bối cảnh BA
  practical: "...",           // dùng khi nào, ở đâu
  related: ["...", "..."],
  comparison: { title, term1: {name, desc}, term2: {name, desc} },
  proTip: "...",
  lesson: { track, lesson, title } | null,
  sourceRefs: ["..."]          // bắt buộc, link "Nguồn tham khảo"
}
```

---

## 4. Kỹ thuật cho BA — 200 bài, focus theo domain BA

Mục tiêu: mỗi bài là một tình huống BA thật, kỹ thuật đóng vai trò công cụ để ra quyết định. Không dạy kiến trúc hệ thống thuần túy, không tách rời công việc BA.

> Các bài hạ tầng cũ (caching, sharding, CAP, load balancing...) được giữ ở mục "Tham khảo kỹ thuật nâng cao", không tính vào 200 bài domain BA.

### 10 domain BA (10 × 20)

| Mã | Domain BA | Trọng tâm kỹ thuật | SL |
|---|---|---|---:|
| TB-STR | Chiến lược & kiến trúc nghiệp vụ | capability map, value stream, build-vs-buy, KPI tree, tech debt, roadmap dependency | 20 |
| TB-PRC | Quy trình & mô hình vận hành | BPMN, process mining, workflow, RPA, SLA, queue/capacity, straight-through processing | 20 |
| TB-REQ | Yêu cầu & thiết kế giải pháp | NFR, acceptance criteria, API contract, state model, business rule, traceability | 20 |
| TB-DAT | Dữ liệu, báo cáo & phân tích | data model, data dictionary, lineage, quality, reconciliation, warehouse/lake, metric | 20 |
| TB-INT | Tích hợp & API | REST/GraphQL/gRPC, event, webhook, idempotency, retry, mapping, error contract | 20 |
| TB-UX | Sản phẩm số & trải nghiệm | user journey, accessibility, responsive, analytics event, experimentation, offline | 20 |
| TB-SEC | Bảo mật, rủi ro & tuân thủ | authN/authZ, OAuth/OIDC, encryption, PII, audit trail, consent, fraud | 20 |
| TB-CHG | Thay đổi & adoption | change impact, training, feature flag, rollout/rollback, cutover, adoption metric | 20 |
| TB-EVL | Đánh giá giải pháp & nghiệm thu | test strategy, UAT, observability, SLI/SLO, incident review, benefits realization | 20 |
| TB-DOM | Domain immersion theo ngành | 10 ngành × 2 bài capstone, xoay vòng 4 nhóm bài | 20 |
| **Tổng** | | | **200** |

- Mỗi domain = 4 nhóm bài × 5 biến thể:
  - Chẩn đoán yêu cầu thiếu
  - Viết đặc tả/AC
  - Thiết kế dữ liệu kiểm thử
  - Đánh giá phương án & đánh đổi
- Biến thể: happy, exception, scale, migration, compliance.
- Cấp độ mỗi domain: **6 Junior / 8 Middle / 6 Senior** → tổng **60 J / 80 M / 60 S**.
- Mỗi bài gắn 1 `industry` luân phiên trong 10 ngành; riêng `TB-DOM` là capstone theo ngành, 2 bài/ngành.
- Kỹ thuật cụ thể nằm trong `technicalFocus` (1-3 tag), lấy từ danh mục trong manifest.

### Khóa chống trùng
- `situationKey = "tb|" + baDomain + "|" + exerciseFamily + "|" + variant + "|" + level`
- `objectiveKey = normalize(learningObjective)`
- `industry` là ngữ cảnh, không tham gia khóa trùng.
- Không trùng `titleNormalized`; không trùng bộ `questions`.

### Schema một bài
```js
{
  id: "tech-001",
  slug: "tech-001",
  title: "...",
  baDomain: "TB-REQ",
  baDomainName: "Yêu cầu & thiết kế giải pháp",
  technicalFocus: ["NFR", "API contract"],
  industry: "Fintech & thanh toán",
  level: "Junior | Middle | Senior",
  exerciseFamily: "diagnose",
  variant: "exception",
  learningObjective: "...",
  situationKey: "tb|TB-REQ|diagnose|exception|Junior",
  objectiveKey: "...",
  context: "...",
  facts: ["..."],
  dataSample: "bảng hoặc JSON ngắn",
  questions: ["..."],
  expectedArtifacts: ["..."],
  solutionSteps: ["..."],
  acceptanceCriteria: ["..."],
  rubric: [
    { name, desc, weight: 25 }
  ],
  relatedLessons: ["..."],
  sourceRefs: ["..."]
}
```

### UI và điều hướng
- Catalog nhóm theo 10 domain, 20 bài/trang.
- Filter theo domain BA, `technicalFocus`, ngành.
- Route: `#/ba-tech`, `#/ba-tech/<domain>`, `#/ba-tech/<id>`.

## 4b. Nguồn và bản quyền cho nội dung mới

- Tuân theo `docs/SOURCE-POLICY.md`.
- `sourceRefs` bắt buộc, không rỗng, lấy từ danh sách nguồn được phép.
- Không copy nguyên văn; chỉ tóm tắt ý chính + link.
- Kiểm tra robots.txt, ToS, giấy phép trước khi dùng nguồn mới.
- Luôn hiển thị link "Nguồn tham khảo" cuối mỗi bài.
- Case study dùng khung 7 bước và rubric 4 tiêu chí theo tài liệu.

---

## 5. Kiến trúc tích hợp

### File dữ liệu
```
dist/exp-data-interview.js   // 190 tình huống mới
dist/exp-data-cases.js       // 188 case mới
dist/exp-data-glossary.js    // 188 thuật ngữ mới
dist/exp-data-tech.js        // 199 bài mới
dist/exp-core.js             // helper phân trang + kiểm tra trùng
```

- Nạp sau dữ liệu gốc, trước `app.js` và `scale-views.js`.
- Mỗi file đăng ký vào mảng gốc bằng `push`, không sửa dữ liệu cũ.
- ID cũ giữ nguyên; ID mới theo đúng pattern ở trên.

### Phân trang
| Màn hình | Kích thước trang | Ghi chú |
|---|---:|---|
| Phỏng vấn | 12 | Reset về trang 1 khi đổi filter/search |
| Case study | 9 | Reset về trang 1 khi đổi level/domain |
| Glossary | 30 | Bấm chữ cái nhảy tới trang chứa chữ đó |
| Kỹ thuật cho BA | 20 | Danh mục theo 10 domain BA, mỗi domain 20 bài |

- Nút phân trang có `aria-label`, trạng thái `aria-current`.
- Giữ nguyên bộ lọc, tìm kiếm, draft và session tracker.

### Deep link
- `#/interview/<id>`
- `#/cases/<id>`
- `#/glossary/<id>`
- `#/ba-tech`
- `#/ba-tech/<domain>`
- `#/ba-tech/<id>`

### Kiểm tra tự động
Tạo `verify-expansion.cjs`:
1. Đếm đúng 200/mục (hoặc 200 mới nếu chọn phương án 835).
2. ID duy nhất, đúng pattern.
3. `situationKey`, `objectiveKey`, `titleNormalized` duy nhất.
4. Không trùng slug/abbr/name ở glossary.
5. Đủ trường bắt buộc, đúng số turn/option/rubric.
6. Mỗi tình huống có dữ kiện, bài tập/hướng giải, rubric.
7. 10 domain BA đủ 20 bài/domain; 10 ngành trong `TB-DOM` đủ 2 bài/ngành.
8. Trang render được với 200 phần tử và không render quá page size.

---

## 6. Kế hoạch làm theo lô

| Lô | Nội dung | Số lượng |
|---|---|---:|
| 0 | Helper, validator, phân trang, deep link | hạ tầng |
| 1 | 20 mới/mục + chạy validator | 80 |
| 2-9 | 20 mới/mục mỗi lô | 640 |
| 10 | 10-20 mới/mục + dedupe toàn bộ + UAT | 80 |

Sau mỗi lô:
- Chạy `node verify-expansion.cjs`.
- Chạy `npm test`.
- Kiểm tra thủ công 5 mẫu ngẫu nhiên/mục.
- Không commit nội dung chưa qua dedupe.

---

## 7. Tiêu chí nghiệm thu

- [ ] Đủ 200/mục, tổng 800.
- [ ] 10 domain BA đủ 20 bài/domain; `TB-DOM` đủ 2 bài/ngành.
- [ ] 0 trùng `situationKey`, `objectiveKey`, tiêu đề chuẩn hóa.
- [ ] Mỗi case/interview/tech có dữ kiện, bài tập, hướng giải, rubric.
- [ ] Glossary có định nghĩa, ứng dụng, so sánh, pro tip.
- [ ] Phân trang hoạt động, không render quá 30 thẻ/lần.
- [ ] Deep link mở đúng nội dung, F5 không mất trạng thái.
- [ ] `npm test` và `verify-expansion.cjs` xanh.
- [ ] Nội dung giả lập được ghi rõ, không tuyên bố là dữ liệu thật.
