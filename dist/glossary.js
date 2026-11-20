/**
 * BA GLOSSARY - TỪ ĐIỂN THUẬT NGỮ CHUYÊN NGÀNH BUSINESS ANALYST
 * Thiết kế chuẩn Modern EdTech / SaaS tối giản
 */

const glossaryCategories = [
  { id: 'all', name: 'Tất cả' },
  { id: 'foundation', name: 'Nền tảng BA' },
  { id: 'documentation', name: 'Tài liệu BA' },
  { id: 'elicitation', name: 'Khai thác yêu cầu' },
  { id: 'modeling', name: 'Mô hình hóa' },
  { id: 'agile', name: 'Agile/Scrum' },
  { id: 'testing', name: 'Kiểm thử & Nghiệm thu' }
];

const glossaryData = [
  {
    id: 'acceptance-criteria',
    abbr: 'Acceptance Criteria (AC)',
    name: 'Tiêu chí chấp nhận',
    letter: 'A',
    category: 'agile',
    categoryName: 'Agile/Scrum',
    definition: 'Tập hợp các điều kiện và quy tắc nghiệp vụ mà một User Story bắt buộc phải thỏa mãn để được Product Owner và QA nghiệm thu hoàn thành.',
    fullDefinition: 'Acceptance Criteria đóng vai trò như bản hợp đồng mini giữa BA, Developer và Tester. AC biến mong muốn định tính của người dùng thành các tiêu chuẩn có thể kiểm thử (Testable), loại bỏ hoàn toàn sự mập mờ khi đội ngũ kỹ thuật bắt tay vào lập trình.',
    practical: 'Được BA soạn thảo ngay dưới mỗi User Story trước buổi Sprint Planning, giúp Developer nắm rõ phạm vi và QA viết kịch bản kiểm thử.',
    related: ['User Story', 'UAT', 'Backlog'],
    comparison: {
      title: 'Acceptance Criteria vs Definition of Done (DoD)',
      term1: { name: 'Acceptance Criteria (AC)', desc: 'Điều kiện riêng cho từng User Story cụ thể (VD: mật khẩu phải chứa ít nhất 8 ký tự và 1 số).' },
      term2: { name: 'Definition of Done (DoD)', desc: 'Tiêu chuẩn chất lượng chung cho mọi Story trong Sprint (VD: code đã review, đạt 80% unit test, deploy lên Staging).' }
    },
    proTip: 'Áp dụng định dạng Given-When-Then cho AC để vừa dễ hiểu cho nghiệp vụ, vừa là tiền đề viết Test Case tự động (BDD). Luôn kèm cả Happy Case lẫn Negative Case.',
    lesson: { track: 4, lesson: 1, title: 'User story & acceptance criteria' }
  },
  {
    id: 'backlog',
    abbr: 'Backlog',
    name: 'Product Backlog · Danh sách tồn đọng sản phẩm',
    letter: 'B',
    category: 'agile',
    categoryName: 'Agile/Scrum',
    definition: 'Danh sách sống chứa toàn bộ các ý tưởng, tính năng, yêu cầu kỹ thuật và lỗi cần thực hiện cho sản phẩm, được sắp xếp liên tục theo thứ tự ưu tiên.',
    fullDefinition: 'Product Backlog là nguồn sự thật duy nhất (Single Source of Truth) cho mọi công việc của đội phát triển Scrum. Backlog không bao giờ cố định mà liên tục được cập nhật theo phản hồi của thị trường và người dùng.',
    practical: 'BA cùng Product Owner liên tục rà soát, làm mịn (Backlog Refinement), chẻ nhỏ Epic thành User Story và ước lượng trước mỗi kỳ Sprint.',
    related: ['User Story', 'Acceptance Criteria', 'Traceability Matrix'],
    comparison: {
      title: 'Product Backlog vs Sprint Backlog',
      term1: { name: 'Product Backlog', desc: 'Danh sách toàn diện, dài hạn của toàn bộ sản phẩm, liên tục biến đổi (Emergent).' },
      term2: { name: 'Sprint Backlog', desc: 'Tập hợp con các mục được đội ngũ cam kết làm trong 1 Sprint ngắn (2-3 tuần), không thay đổi giữa chừng.' }
    },
    proTip: 'Duy trì Backlog theo nguyên tắc DEEP (Detailed appropriately, Estimated, Emergent, Prioritized). 2-3 Sprint kế tiếp phải có Story sẵn sàng (Definition of Ready).',
    lesson: { track: 6, lesson: 2, title: 'Product Backlog & refinement' }
  },
  {
    id: 'bpmn',
    abbr: 'BPMN',
    name: 'Business Process Model and Notation · Mô hình hóa quy trình',
    letter: 'B',
    category: 'modeling',
    categoryName: 'Mô hình hóa',
    definition: 'Bộ quy chuẩn ký hiệu đồ họa trực quan tiêu chuẩn quốc tế (Tasks, Gateways, Events) giúp mô tả luồng quy trình nghiệp vụ rõ ràng, chính xác.',
    fullDefinition: 'BPMN 2.0 cung cấp một ngôn ngữ chung dễ hiểu cho cả người làm kinh doanh lẫn đội ngũ kỹ thuật. Nó giúp nhận diện các nút thắt cổ chai (bottlenecks), sự lãng phí và các ngoại lệ tiềm ẩn trong vận hành.',
    practical: 'Vẽ sơ đồ quy trình hiện trạng (As-Is) để tìm điểm nghẽn, và thiết kế quy trình tương lai (To-Be) với làn phân vai (Swimlanes) rõ trách nhiệm từng phòng ban.',
    related: ['User Story', 'SRS', 'UAT'],
    comparison: {
      title: 'BPMN vs Flowchart truyền thống',
      term1: { name: 'BPMN 2.0', desc: 'Quy chuẩn quốc tế chặt chẽ, hỗ trợ sự kiện ngoại lệ (Events), rẽ nhánh điều kiện (Gateways) và phân định trách nhiệm đa hệ thống (Swimlanes).' },
      term2: { name: 'Flowchart', desc: 'Sơ đồ luồng cơ bản tự do, chỉ có hình chữ nhật và thoi, thiếu khả năng mô tả tương tác bất đồng bộ và xử lý ngoại lệ phức tạp.' }
    },
    proTip: 'Luôn đặt tên Task theo cấu trúc [Động từ] + [Danh từ] (VD: "Phê duyệt đơn hàng", "Gửi mã OTP"). Phân biệt rõ Exclusive Gateway (XOR) và Parallel Gateway (AND).',
    lesson: { track: 3, lesson: 1, title: 'BPMN: Event, Task & Gateway' }
  },
  {
    id: 'brd',
    abbr: 'BRD',
    name: 'Business Requirements Document · Tài liệu yêu cầu kinh doanh',
    letter: 'B',
    category: 'documentation',
    categoryName: 'Tài liệu BA',
    definition: 'Tài liệu cấp cao mô tả bài toán kinh doanh, mục tiêu và giá trị kỳ vọng của dự án, chưa đi sâu vào giải pháp hay thiết kế kỹ thuật.',
    fullDefinition: 'BRD trả lời hai câu hỏi lớn nhất của dự án: "TẠI SAO chúng ta phải làm dự án này?" và "LỢI ÍCH kinh doanh thu lại là gì?". Đây là bản cam kết giữa Business Owner / Sponsor và đội ngũ thực hiện trước khi phê duyệt ngân sách.',
    practical: 'Được BA soạn thảo trong giai đoạn khởi động dự án (Inception / Discovery) để thống nhất kỳ vọng với Sponsor và các bên liên quan.',
    related: ['SRS', 'Scope Creep', 'MoSCoW'],
    comparison: {
      title: 'BRD vs SRS',
      term1: { name: 'BRD (Business Requirements)', desc: 'Tập trung vào WHY & WHAT cho kinh doanh: mục tiêu doanh thu, chi phí, chỉ số KPI. Dành cho Sponsor và cấp quản lý.' },
      term2: { name: 'SRS (Software Requirements)', desc: 'Tập trung vào HOW: giao diện màn hình, luồng dữ liệu, API và logic tính năng. Dành cho Developer và QA.' }
    },
    proTip: 'Tuyệt đối không đưa chi tiết công nghệ (React, SQL, API) vào BRD. Hãy định lượng mục tiêu cụ thể, ví dụ: "Giảm thời gian xử lý đơn từ 24h xuống 2h".',
    lesson: { track: 2, lesson: 0, title: 'Vòng đời của yêu cầu' }
  },
  {
    id: 'elicitation',
    abbr: 'Elicitation',
    name: 'Requirements Elicitation · Khai thác yêu cầu',
    letter: 'E',
    category: 'elicitation',
    categoryName: 'Khai thác yêu cầu',
    definition: 'Quá trình chủ động tìm hiểu, khơi gợi và làm sáng tỏ những nhu cầu, kỳ vọng và khó khăn tiềm ẩn từ stakeholder thay vì chỉ tiếp nhận thụ động.',
    fullDefinition: 'Khách hàng thường chỉ nói ra giải pháp họ tự nghĩ hoặc triệu chứng bề nổi. Elicitation là nghệ thuật đặt câu hỏi sâu của BA để phát hiện ra bài toán thật sự (Underlying Problem) mà chính stakeholder chưa nhận thức hết.',
    practical: 'Thực hiện qua phỏng vấn 1-1, workshop brainstorming, quan sát thực địa (Job Shadowing) và phân tích giao diện hệ thống cũ.',
    related: ['Stakeholder', 'BPMN', 'User Story'],
    comparison: {
      title: 'Elicitation vs Requirements Gathering',
      term1: { name: 'Elicitation (Khai thác)', desc: 'Chủ động đào sâu: Đặt câu hỏi "Tại sao?", phát hiện điểm mù và khơi gợi nhu cầu thật sự chưa được nói ra.' },
      term2: { name: 'Gathering (Thu thập)', desc: 'Tiếp nhận thụ động: Khách hàng yêu cầu gì thì ghi nấy, dẫn đến việc xây dựng phần mềm không ai sử dụng.' }
    },
    proTip: 'Áp dụng kỹ thuật 5 Whys. Luôn chuẩn bị trước kế hoạch phỏng vấn và gửi agenda cho stakeholder ít nhất 24 giờ trước buổi họp.',
    lesson: { track: 1, lesson: 1, title: 'Kỹ thuật phỏng vấn' }
  },
  {
    id: 'moscow',
    abbr: 'MoSCoW',
    name: 'MoSCoW Method · Kỹ thuật ưu tiên yêu cầu',
    letter: 'M',
    category: 'foundation',
    categoryName: 'Nền tảng BA',
    definition: 'Khung phương pháp phân loại mức độ ưu tiên của yêu cầu thành 4 nhóm: Must have, Should have, Could have và Won\'t have.',
    fullDefinition: 'MoSCoW giúp đội ngũ dự án và khách hàng đồng thuận về phạm vi bàn giao trong điều kiện giới hạn thời gian và ngân sách, tránh tranh cãi tính năng nào là quan trọng nhất.',
    practical: 'BA tổ chức workshop ưu tiên cùng Sponsor và Product Owner để chốt phạm vi sản phẩm khả dụng tối thiểu (MVP) hoặc kế hoạch Release.',
    related: ['Backlog', 'BRD', 'User Story'],
    comparison: {
      title: 'MoSCoW vs Kano Model',
      term1: { name: 'MoSCoW Method', desc: 'Tập trung vào tính sống còn và thời hạn bàn giao: phân định rõ cái gì bắt buộc có và cái gì có thể hy sinh nếu trễ hạn.' },
      term2: { name: 'Kano Model', desc: 'Tập trung vào cảm xúc và mức độ hài lòng của khách hàng: Phân loại tính năng Cơ bản, Hiệu năng và Gây thích thú (Delighters).' }
    },
    proTip: 'Quy tắc vàng: Nhóm Must-have không được vượt quá 60% tổng khối lượng công việc. Nếu mọi thứ đều là "Must", nghĩa là chưa có gì được ưu tiên.',
    lesson: { track: 2, lesson: 1, title: 'Ưu tiên với MoSCoW' }
  },
  {
    id: 'scope-creep',
    abbr: 'Scope Creep',
    name: 'Phình phạm vi dự án',
    letter: 'S',
    category: 'foundation',
    categoryName: 'Nền tảng BA',
    definition: 'Sự mở rộng không kiểm soát của phạm vi dự án mà không có sự điều chỉnh tương ứng về ngân sách, tiến độ hoặc nguồn lực.',
    fullDefinition: 'Scope Creep thường xuất phát từ những thay đổi nhỏ, tưởng chừng vô hại như "tiện thể làm thêm nút này", dần dần tích tụ khiến dự án trễ hạn nghiêm trọng và đội ngũ kiệt sức.',
    practical: 'BA nhận diện khi stakeholder liên tục đưa ra yêu cầu mới giữa chừng; BA kích hoạt quy trình Đề xuất thay đổi (Change Request) để đánh giá tác động.',
    related: ['BRD', 'Traceability Matrix', 'Backlog'],
    comparison: {
      title: 'Scope Creep vs Scope Discovery',
      term1: { name: 'Scope Creep', desc: 'Sự phình to vô tổ chức do các yêu cầu vụn vặt len lỏi trong lúc phát triển mà không qua đánh giá tác động.' },
      term2: { name: 'Scope Discovery', desc: 'Quá trình tự nhiên khi đào sâu nghiên cứu bài toán ban đầu và chủ động tái định hình phạm vi một cách minh bạch.' }
    },
    proTip: 'Đừng nói "Không" một cách thô lỗ. Hãy nói: "Ý tưởng này rất hay, chúng ta sẽ đưa vào Backlog cho Release tiếp theo sau khi mục tiêu hiện tại hoàn tất".',
    lesson: { track: 2, lesson: 3, title: 'Quản lý thay đổi yêu cầu' }
  },
  {
    id: 'srs',
    abbr: 'SRS',
    name: 'Software Requirements Specification · Đặc tả yêu cầu phần mềm',
    letter: 'S',
    category: 'documentation',
    categoryName: 'Tài liệu BA',
    definition: 'Tài liệu kỹ thuật chi tiết hóa các yêu cầu chức năng (FR), phi chức năng (NFR), giao diện và ràng buộc hệ thống cho đội phát triển và kiểm thử.',
    fullDefinition: 'SRS đóng vai trò kim chỉ nam kỹ thuật cho toàn bộ giai đoạn hiện thực hóa giải pháp. Nó chuyển thể các mục tiêu kinh doanh trừu tượng từ BRD thành các đặc tả cụ thể về dữ liệu, logic xử lý và kịch bản tương tác.',
    practical: 'Bàn giao trực tiếp cho Tech Lead, Developer và QA làm căn cứ lập trình kiến trúc, thiết kế cơ sở dữ liệu và viết Test Cases.',
    related: ['BRD', 'UAT', 'Traceability Matrix'],
    comparison: {
      title: 'SRS vs FRD',
      term1: { name: 'SRS (Software Requirements Spec)', desc: 'Đặc tả toàn diện bao gồm cả Functional, Non-Functional (hiệu năng, tải, bảo mật), kiến trúc kỹ thuật và API.' },
      term2: { name: 'FRD (Functional Requirements Doc)', desc: 'Chỉ tập trung thuần túy vào logic chức năng và quy tắc nghiệp vụ (Business Rules), không chứa yêu cầu kiến trúc kỹ thuật.' }
    },
    proTip: 'Luôn đính kèm sơ đồ luồng dữ liệu (Data Flow) và bảng ma trận Business Rules để Developer không phải tự đoán logic xử lý ngoại lệ.',
    lesson: { track: 4, lesson: 0, title: 'Từ nhu cầu đến giải pháp' }
  },
  {
    id: 'stakeholder',
    abbr: 'Stakeholder',
    name: 'Các bên liên quan',
    letter: 'S',
    category: 'foundation',
    categoryName: 'Nền tảng BA',
    definition: 'Bất kỳ cá nhân, nhóm người hoặc tổ chức nào có thể ảnh hưởng, chịu ảnh hưởng hoặc tự nhận thấy chịu ảnh hưởng bởi kết quả của dự án.',
    fullDefinition: 'Stakeholder không chỉ là khách hàng trả tiền mà bao gồm mọi đối tượng có tiếng nói hoặc quyền lợi gắn liền với dự án. Thành công của BA đo lường bằng việc dung hòa kỳ vọng giữa các bên.',
    practical: 'BA nhận diện và lập Ma trận Stakeholder (Power-Interest Grid) ngay từ tuần đầu để lên kế hoạch giao tiếp phù hợp cho từng nhóm.',
    related: ['Elicitation', 'BRD', 'UAT'],
    comparison: {
      title: 'Stakeholder vs End User',
      term1: { name: 'Stakeholder', desc: 'Khái niệm bao trùm: gồm Sponsor, Khách hàng, Giám đốc, Đội vận hành, Pháp lý (Compliance), Đội kỹ thuật và Người dùng cuối.' },
      term2: { name: 'End User', desc: 'Là tập con của Stakeholder, trực tiếp thao tác trên phần mềm mỗi ngày để giải quyết công việc.' }
    },
    proTip: 'Áp dụng nguyên tắc "Manage Closely" với nhóm Quyền lực cao - Quan tâm cao. Đừng chỉ nghe người nói to nhất mà bỏ quên người dùng trực tiếp hằng ngày.',
    lesson: { track: 0, lesson: 3, title: 'Stakeholder Analysis & Mapping' }
  },
  {
    id: 'traceability-matrix',
    abbr: 'Traceability Matrix (RTM)',
    name: 'Ma trận truy vết yêu cầu',
    letter: 'T',
    category: 'documentation',
    categoryName: 'Tài liệu BA',
    definition: 'Bảng đối chiếu hai chiều liên kết từng yêu cầu từ mục tiêu kinh doanh đến thiết kế, mã nguồn và kịch bản kiểm thử (Test Case).',
    fullDefinition: 'RTM đảm bảo tính toàn vẹn của dự án: chứng minh mọi yêu cầu kinh doanh đều được lập trình và kiểm thử (Forward Traceability), đồng thời đảm bảo không có mã thừa phát sinh ngoài phạm vi (Backward Traceability).',
    practical: 'Dùng khi phân tích tác động (Impact Analysis) khi có thay đổi yêu cầu, và kiểm tra độ phủ (Scope Coverage) trước khi release.',
    related: ['BRD', 'SRS', 'UAT'],
    comparison: {
      title: 'Traceability Matrix (RTM) vs WBS',
      term1: { name: 'RTM (Requirements Traceability)', desc: 'Theo dõi dấu vết sống giữa Yêu cầu kinh doanh - Thiết kế - Test Case xuyên suốt vòng đời phần mềm.' },
      term2: { name: 'WBS (Work Breakdown Structure)', desc: 'Phân rã phạm vi dự án thành các gói công việc (Work Packages) để quản lý tiến độ và chi phí của PM.' }
    },
    proTip: 'Nếu dự án dùng Jira, hãy tận dụng tính năng Issue Linking (is tested by, implements) để tạo ma trận truy vết tự động thay vì dùng Excel thủ công.',
    lesson: { track: 2, lesson: 2, title: 'Truy vết yêu cầu với RTM' }
  },
  {
    id: 'uat',
    abbr: 'UAT',
    name: 'User Acceptance Testing · Kiểm thử chấp nhận của người dùng',
    letter: 'U',
    category: 'testing',
    categoryName: 'Kiểm thử & Nghiệm thu',
    definition: 'Giai đoạn kiểm thử cuối cùng do người dùng kinh doanh hoặc khách hàng trực tiếp thao tác để xác nhận phần mềm đáp ứng đúng mục tiêu thực tế.',
    fullDefinition: 'UAT là "cánh cổng" quyết định phần mềm có được đưa vào vận hành thật (Go-live) hay không. Trọng tâm của UAT không phải là bắt lỗi kỹ thuật nhỏ, mà là xác nhận quy trình công việc có vận hành trơn tru hay không.',
    practical: 'BA đóng vai trò cầu nối: soạn UAT Test Cases theo kịch bản người dùng thật, điều phối buổi test và làm rõ giữa lỗi kỹ thuật (bug) và yêu cầu mới.',
    related: ['Acceptance Criteria', 'SRS', 'BRD'],
    comparison: {
      title: 'UAT vs System Testing',
      term1: { name: 'UAT (Kiểm thử chấp nhận)', desc: 'Do người dùng nghiệp vụ thực hiện: kiểm tra phần mềm có giải quyết được bài toán công việc thực tế hay không.' },
      term2: { name: 'System Testing (Kiểm thử hệ thống)', desc: 'Do QA/Tester chuyên nghiệp thực hiện: kiểm tra chi tiết từng chức năng, bảo mật, API và tìm lỗi kỹ thuật.' }
    },
    proTip: 'Không đưa Test Case kỹ thuật cho người dùng test UAT. Hãy viết dưới dạng "Kịch bản một ngày làm việc điển hình" (Day-in-the-life Scenarios).',
    lesson: { track: 8, lesson: 3, title: 'Lập kế hoạch UAT' }
  },
  {
    id: 'user-story',
    abbr: 'User Story',
    name: 'Câu chuyện người dùng',
    letter: 'U',
    category: 'agile',
    categoryName: 'Agile/Scrum',
    definition: 'Bản mô tả ngắn gọn tính năng từ góc nhìn người dùng theo mẫu: "Là một [Vai trò], tôi muốn [Hành động], để [Lợi ích]".',
    fullDefinition: 'User Story không phải là tài liệu đặc tả chi tiết, mà là một "vé mời tham gia thảo luận" (Invitation for a Conversation). Nó tập trung vào giá trị mang lại cho người dùng cuối thay vì chi tiết kỹ thuật.',
    practical: 'Được dùng làm đơn vị công việc chính trên Product Backlog, thảo luận trong các buổi Refinement và cam kết trong Sprint Planning.',
    related: ['Acceptance Criteria', 'Backlog', 'SRS'],
    comparison: {
      title: 'User Story vs Use Case',
      term1: { name: 'User Story', desc: 'Ngắn gọn, linh hoạt, tập trung vào "Giá trị mang lại cho người dùng" (Value-driven), tuân theo tiêu chuẩn INVEST.' },
      term2: { name: 'Use Case', desc: 'Có cấu trúc chi tiết: Actor, Tiền điều kiện, Luồng chính, Luồng ngoại lệ, thích hợp cho hệ thống lớn phức tạp.' }
    },
    proTip: 'Luôn tuân theo tiêu chuẩn INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable). Không viết Story từ góc nhìn của Developer.',
    lesson: { track: 4, lesson: 1, title: 'User story & acceptance criteria' }
  }
];

// State quản lý trang Glossary
let glossaryState = {
  filter: 'all',
  search: '',
  onlyBookmarked: false,
  activeDrawerId: null
};

// Quản lý Bookmark trong LocalStorage
function getGlossaryBookmarks() {
  try {
    return JSON.parse(localStorage.getItem('ba-glossary-bookmarks')) || [];
  } catch {
    return [];
  }
}

function isGlossaryBookmarked(id) {
  return getGlossaryBookmarks().includes(id);
}

function toggleGlossaryBookmark(id, event) {
  if (event) event.stopPropagation();
  let bookmarks = getGlossaryBookmarks();
  let index = bookmarks.indexOf(id);
  let isAdded = false;
  if (index > -1) {
    bookmarks.splice(index, 1);
  } else {
    bookmarks.push(id);
    isAdded = true;
  }
  localStorage.setItem('ba-glossary-bookmarks', JSON.stringify(bookmarks));
  
  // Hiển thị thông báo Toast nếu có
  if (typeof toast === 'function') {
    toast(isAdded ? 'Đã lưu thuật ngữ vào danh sách yêu thích ★' : 'Đã bỏ lưu thuật ngữ');
  }

  // Cập nhật giao diện
  updateGlossaryUI();
}

// Hàm highlight từ khóa khớp trong văn bản
function highlightGlossaryText(text, query) {
  if (!query || !text) return esc(text);
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  // Chạy escape HTML trước rồi mới bọc thẻ <mark>
  const escapedText = esc(text);
  return escapedText.replace(regex, '<mark class="glossary-mark">$1</mark>');
}

// Lọc dữ liệu theo điều kiện hiện tại
function getFilteredGlossary() {
  const query = glossaryState.search.trim().toLocaleLowerCase('vi');
  const bookmarks = getGlossaryBookmarks();

  return glossaryData.filter(term => {
    // 1. Lọc theo danh mục
    if (glossaryState.filter !== 'all' && term.category !== glossaryState.filter) {
      return false;
    }
    // 2. Lọc theo bookmark
    if (glossaryState.onlyBookmarked && !bookmarks.includes(term.id)) {
      return false;
    }
    // 3. Lọc theo từ khóa tìm kiếm (từ viết tắt, tên tiếng Anh/Việt, định nghĩa, ứng dụng)
    if (query) {
      const matchAbbr = term.abbr.toLocaleLowerCase('vi').includes(query);
      const matchName = term.name.toLocaleLowerCase('vi').includes(query);
      const matchDef = term.definition.toLocaleLowerCase('vi').includes(query);
      const matchPrac = term.practical.toLocaleLowerCase('vi').includes(query);
      const matchRelated = term.related.some(r => r.toLocaleLowerCase('vi').includes(query));
      if (!matchAbbr && !matchName && !matchDef && !matchPrac && !matchRelated) {
        return false;
      }
    }
    return true;
  });
}

// Tạo giao diện chính của trang Glossary
function glossaryPage() {
  const filtered = getFilteredGlossary();
  const bookmarks = getGlossaryBookmarks();
  const query = glossaryState.search.trim();

  // Gom nhóm theo chữ cái A-Z
  const groups = {};
  filtered.forEach(term => {
    const letter = term.letter.toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(term);
  });

  // Danh sách các chữ cái có dữ liệu hiện tại
  const availableLetters = new Set(filtered.map(t => t.letter.toUpperCase()));

  // Render Alphabet Bar A-Z
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const alphabetBarHTML = alphabet.map(letter => {
    const hasData = availableLetters.has(letter);
    return `<button class="alphabet-letter-btn ${hasData ? 'has-data' : 'no-data'}" 
      ${hasData ? `data-gl-letter="${letter}" title="Cuộn đến nhóm ${letter}"` : 'disabled'}
      aria-label="Chữ cái ${letter}">${letter}</button>`;
  }).join('');

  // Render Category Pills
  const categoryPillsHTML = glossaryCategories.map(cat => {
    const isActive = glossaryState.filter === cat.id && !glossaryState.onlyBookmarked;
    return `<button class="glossary-pill ${isActive ? 'active' : ''}" data-gl-cat="${cat.id}">
      ${cat.name}
    </button>`;
  }).join('');

  // Render Nút Đã lưu
  const bookmarkBtnHTML = `
    <button class="glossary-bookmark-toggle ${glossaryState.onlyBookmarked ? 'active' : ''}" data-gl-saved="true">
      <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      <span>Đã lưu</span>
      <span class="glossary-count-badge">${bookmarks.length}</span>
    </button>
  `;

  // Render danh sách thuật ngữ hoặc Empty State
  let contentHTML = '';
  if (filtered.length === 0) {
    contentHTML = `
      <div class="glossary-empty-state">
        <svg class="glossary-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3M8 11h6"/>
        </svg>
        <h3>Không tìm thấy thuật ngữ phù hợp</h3>
        <p>${glossaryState.onlyBookmarked ? 'Bạn chưa lưu thuật ngữ nào vào danh sách yêu thích. Hãy bấm vào biểu tượng ngôi sao trên thẻ thuật ngữ để lưu lại ôn tập.' : 'Thử tìm với từ khóa khác (ví dụ: BRD, UAT, Backlog...) hoặc xóa bộ lọc để hiển thị toàn bộ.'}</p>
        <button class="glossary-empty-btn" data-gl-reset="true">Xóa bộ lọc & Xem tất cả</button>
      </div>
    `;
  } else {
    // Sắp xếp các nhóm theo thứ tự bảng chữ cái
    const sortedLetters = Object.keys(groups).sort();
    contentHTML = sortedLetters.map(letter => {
      const terms = groups[letter];
      return `
        <section class="glossary-group" id="glossary-group-${letter}">
          <div class="glossary-group-header">
            <span class="glossary-group-letter">${letter}</span>
            <div class="glossary-group-line"></div>
            <span class="glossary-group-count">${terms.length} thuật ngữ</span>
          </div>
          <div class="glossary-grid">
            ${terms.map(term => renderTermCard(term, query)).join('')}
          </div>
        </section>
      `;
    }).join('');
  }

  // Active drawer nếu có
  const activeTerm = glossaryData.find(t => t.id === glossaryState.activeDrawerId);
  const drawerHTML = renderSideDrawer(activeTerm);

  return `
    <div class="glossary-page">
      <!-- 1. Header & Mô tả -->
      <div class="glossary-header">
        <div class="glossary-title-row">
          <h1>
            <span>Từ điển thuật ngữ BA</span>
            <span class="glossary-count-badge">${filtered.length} thuật ngữ</span>
          </h1>
        </div>
        <p>Tra cứu nhanh khái niệm, từ viết tắt và cách áp dụng thực tế trong dự án.</p>
      </div>

      <!-- 2. Thanh công cụ tra cứu & Tìm kiếm -->
      <div class="glossary-toolbar">
        <div class="glossary-search-box">
          <svg class="glossary-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <input type="text" 
                 class="glossary-search-input" 
                 id="glossary-search-input"
                 placeholder="Tìm theo từ viết tắt (BRD, UAT...), tiếng Anh hoặc tiếng Việt…" 
                 value="${esc(glossaryState.search)}"
                 autocomplete="off"
                 aria-label="Tìm kiếm thuật ngữ BA">
          ${glossaryState.search ? `<button class="glossary-search-clear" id="glossary-search-clear" title="Xóa tìm kiếm">×</button>` : ''}
        </div>

        <div class="glossary-filter-row">
          <div class="glossary-category-pills">
            ${categoryPillsHTML}
          </div>
          ${bookmarkBtnHTML}
        </div>
      </div>

      <!-- 3. Thanh chỉ mục bảng chữ cái A-Z -->
      <div class="glossary-alphabet-bar">
        ${alphabetBarHTML}
      </div>

      <!-- 4. Danh sách thuật ngữ -->
      <div id="glossary-list-container">
        ${contentHTML}
      </div>

      <!-- 5. Side Drawer chi tiết -->
      <div class="glossary-drawer-overlay ${activeTerm ? 'active' : ''}" id="glossary-drawer-overlay"></div>
      <div class="glossary-drawer ${activeTerm ? 'open' : ''}" id="glossary-drawer">
        ${drawerHTML}
      </div>
    </div>
  `;
}

// Render từng thẻ thuật ngữ (4 phần gọn gàng)
function renderTermCard(term, query) {
  const isBookmarked = isGlossaryBookmarked(term.id);
  const highlightedAbbr = highlightGlossaryText(term.abbr, query);
  const highlightedName = highlightGlossaryText(term.name, query);
  const highlightedDef = highlightGlossaryText(term.definition, query);
  const highlightedPrac = highlightGlossaryText(term.practical, query);

  return `
    <article class="glossary-card" data-gl-card="${term.id}" tabindex="0" role="button" aria-label="Xem chi tiết ${term.abbr}">
      <!-- Phần 1: Dòng tiêu đề -->
      <div class="term-card-header">
        <div class="term-title-wrap">
          <span class="term-abbr">${highlightedAbbr}</span>
          <span class="term-fullname">· ${highlightedName}</span>
        </div>
        <div class="term-actions-wrap">
          <span class="term-category-badge">${term.categoryName}</span>
          <button class="term-bookmark-btn ${isBookmarked ? 'active' : ''}" 
                  data-gl-bookmark="${term.id}" 
                  title="${isBookmarked ? 'Bỏ lưu' : 'Lưu lại thuật ngữ'}"
                  aria-label="Lưu thuật ngữ">
            <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </button>
        </div>
      </div>

      <!-- Phần 2: Giải thích cốt lõi -->
      <div class="term-core-definition">
        ${highlightedDef}
      </div>

      <!-- Phần 3: Khối Ứng dụng thực tế -->
      <div class="term-practical-box">
        <div class="term-practical-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
          <span>Ứng dụng thực tế:</span>
        </div>
        <div class="term-practical-text">${highlightedPrac}</div>
      </div>

      <!-- Phần 4: Chân thẻ (Footer) -->
      <div class="term-card-footer">
        <div class="term-related-chips">
          <span>Xem thêm:</span>
          ${term.related.map(rel => {
            const relTarget = glossaryData.find(t => t.abbr.toLowerCase().includes(rel.toLowerCase()) || rel.toLowerCase().includes(t.abbr.toLowerCase()));
            const targetId = relTarget ? relTarget.id : '';
            return `<button class="term-chip" data-gl-chip="${targetId || rel}">${rel}</button>`;
          }).join('')}
        </div>
        <button class="term-lesson-link" data-lesson="${term.lesson.track},${term.lesson.lesson}" title="Đến bài học ${term.lesson.title}">
          <span>Học chi tiết</span>
          <span>→</span>
        </button>
      </div>
    </article>
  `;
}

// Render nội dung Side Drawer
function renderSideDrawer(term) {
  if (!term) return '';
  const isBookmarked = isGlossaryBookmarked(term.id);

  return `
    <div class="glossary-drawer-header">
      <span class="drawer-term-badge">${term.categoryName}</span>
      <div style="display:flex;align-items:center;gap:8px;">
        <button class="term-bookmark-btn ${isBookmarked ? 'active' : ''}" 
                data-gl-bookmark="${term.id}" 
                title="${isBookmarked ? 'Bỏ lưu' : 'Lưu lại'}" 
                style="width:32px;height:32px;">
          <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </button>
        <button class="glossary-drawer-close" id="glossary-drawer-close" aria-label="Đóng ngăn chi tiết">×</button>
      </div>
    </div>

    <div class="glossary-drawer-body">
      <h2 class="drawer-term-title">${term.abbr}</h2>
      <div class="drawer-term-subtitle">${term.name}</div>

      <!-- 1. Định nghĩa chi tiết -->
      <div class="drawer-section">
        <div class="drawer-section-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          <span>Khái niệm & Ý nghĩa cốt lõi</span>
        </div>
        <p class="drawer-text">${term.fullDefinition}</p>
      </div>

      <!-- 2. Ứng dụng thực tế -->
      <div class="drawer-section">
        <div class="drawer-section-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span>Ứng dụng thực chiến trong dự án</span>
        </div>
        <p class="drawer-text">${term.practical}</p>
      </div>

      <!-- 3. So sánh nhanh thuật ngữ dễ nhầm lẫn -->
      ${term.comparison ? `
        <div class="drawer-section">
          <div class="drawer-section-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7M11 18H8a2 2 0 0 1-2-2V9"/></svg>
            <span>So sánh nhanh với khái niệm liên quan</span>
          </div>
          <div class="drawer-comparison-card">
            <div class="drawer-comparison-head">${term.comparison.title}</div>
            <div class="drawer-comparison-cols">
              <div class="drawer-comp-box">
                <div class="drawer-comp-title">${term.comparison.term1.name}</div>
                <p class="drawer-comp-desc">${term.comparison.term1.desc}</p>
              </div>
              <div class="drawer-comp-box">
                <div class="drawer-comp-title">${term.comparison.term2.name}</div>
                <p class="drawer-comp-desc">${term.comparison.term2.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- 4. Lời khuyên cho BA (Pro-Tip) -->
      <div class="drawer-section">
        <div class="drawer-protip-box">
          <b>💡 Mẹo thực chiến cho BA:</b>
          <p>${term.proTip}</p>
        </div>
      </div>

      <!-- 5. Bài học liên quan -->
      <div class="drawer-section">
        <div class="drawer-section-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          <span>Bài học liên quan trong lộ trình</span>
        </div>
        <div class="drawer-lesson-card">
          <div class="drawer-lesson-info">
            <b>${term.lesson.title}</b>
            <span>Lộ trình BA · Track ${term.lesson.track + 1}</span>
          </div>
          <button class="drawer-lesson-btn" data-lesson="${term.lesson.track},${term.lesson.lesson}">Đến bài học →</button>
        </div>
      </div>
    </div>
  `;
}

// Cập nhật lại giao diện và gán lại trạng thái khi thay đổi state
function updateGlossaryUI() {
  if (typeof page !== 'undefined' && page === 'Glossary') {
    const main = document.querySelector('#main');
    if (main) {
      main.innerHTML = glossaryPage();
      bindGlossaryEvents();
      // Giữ focus nếu đang gõ ô search
      const searchInput = document.querySelector('#glossary-search-input');
      if (searchInput && glossaryState.search) {
        searchInput.focus();
        searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
      }
    }
  }
}

// Mở và đóng Side Drawer
function openGlossaryDrawer(termId) {
  glossaryState.activeDrawerId = termId;
  const overlay = document.querySelector('#glossary-drawer-overlay');
  const drawer = document.querySelector('#glossary-drawer');
  const term = glossaryData.find(t => t.id === termId);
  if (drawer && term) {
    drawer.innerHTML = renderSideDrawer(term);
    drawer.classList.add('open');
    if (overlay) overlay.classList.add('active');
  } else {
    updateGlossaryUI();
  }
}

function closeGlossaryDrawer() {
  glossaryState.activeDrawerId = null;
  const overlay = document.querySelector('#glossary-drawer-overlay');
  const drawer = document.querySelector('#glossary-drawer');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
}

// Gán các sự kiện tương tác của Glossary
function bindGlossaryEvents() {
  const searchInput = document.querySelector('#glossary-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      glossaryState.search = e.target.value;
      updateGlossaryUI();
    });
  }

  const clearBtn = document.querySelector('#glossary-search-clear');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      glossaryState.search = '';
      updateGlossaryUI();
    });
  }
}

// Global click delegation cho các thành phần Glossary
document.addEventListener('click', e => {
  // Chỉ xử lý nếu đang ở trang Glossary hoặc thao tác liên quan
  if (typeof page !== 'undefined' && page !== 'Glossary') return;

  // 1. Chuyển đổi danh mục Category Pills
  const catBtn = e.target.closest('[data-gl-cat]');
  if (catBtn) {
    e.preventDefault();
    glossaryState.filter = catBtn.dataset.glCat;
    glossaryState.onlyBookmarked = false;
    updateGlossaryUI();
    return;
  }

  // 2. Chuyển đổi Tab Đã lưu
  const savedBtn = e.target.closest('[data-gl-saved]');
  if (savedBtn) {
    e.preventDefault();
    glossaryState.onlyBookmarked = !glossaryState.onlyBookmarked;
    updateGlossaryUI();
    return;
  }

  // 3. Reset bộ lọc
  const resetBtn = e.target.closest('[data-gl-reset]');
  if (resetBtn) {
    e.preventDefault();
    glossaryState.filter = 'all';
    glossaryState.search = '';
    glossaryState.onlyBookmarked = false;
    updateGlossaryUI();
    return;
  }

  // 4. Bấm chữ cái trên Alphabet Bar -> Smooth scroll
  const letterBtn = e.target.closest('[data-gl-letter]');
  if (letterBtn) {
    e.preventDefault();
    const letter = letterBtn.dataset.glLetter;
    const targetGroup = document.querySelector(`#glossary-group-${letter}`);
    if (targetGroup) {
      targetGroup.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return;
  }

  // 5. Nút Bookmark
  const bookmarkBtn = e.target.closest('[data-gl-bookmark]');
  if (bookmarkBtn) {
    e.preventDefault();
    e.stopPropagation();
    const termId = bookmarkBtn.dataset.glBookmark;
    toggleGlossaryBookmark(termId, e);
    return;
  }

  // 6. Bấm chip thuật ngữ liên quan
  const chipBtn = e.target.closest('[data-gl-chip]');
  if (chipBtn) {
    e.preventDefault();
    e.stopPropagation();
    const targetVal = chipBtn.dataset.glChip;
    const targetTerm = glossaryData.find(t => t.id === targetVal || t.abbr.toLowerCase() === targetVal.toLowerCase());
    if (targetTerm) {
      openGlossaryDrawer(targetTerm.id);
    } else {
      glossaryState.search = targetVal;
      updateGlossaryUI();
    }
    return;
  }

  // 7. Bấm thẻ thuật ngữ để mở Side Drawer
  const card = e.target.closest('[data-gl-card]');
  if (card && !e.target.closest('.term-bookmark-btn') && !e.target.closest('.term-lesson-link') && !e.target.closest('.term-chip')) {
    e.preventDefault();
    const termId = card.dataset.glCard;
    openGlossaryDrawer(termId);
    return;
  }

  // 8. Đóng Side Drawer
  if (e.target.closest('#glossary-drawer-close') || e.target.closest('#glossary-drawer-overlay')) {
    e.preventDefault();
    closeGlossaryDrawer();
    return;
  }
});

// Phím Escape đóng Side Drawer
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && glossaryState.activeDrawerId) {
    closeGlossaryDrawer();
  }
});
