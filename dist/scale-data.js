/**
 * DESIGNED TO SCALE - DATA MODULE
 * Structured schema for Pages, Modules, Lessons, Interactive Diagrams & Metrics
 */

const scalePagesData = {
  home: {
    title: "Traffic vừa tăng gấp đôi. Bạn sẽ tối ưu điều gì trước tiên?",
    titleEn: "Traffic just doubled. What would you change first?",
    subtitle: "Rèn luyện tư duy thiết kế kiến trúc hệ thống backend thông qua 40 bài học tương tác trực quan, xem dữ liệu luân chuyển và các chỉ số biến đổi theo thời gian thực.",
    subtitleEn: "Build the judgment to answer with confidence through 40 interactive lessons, animated request flows, and live metrics.",
    ctaStart: "Bắt đầu học ngay",
    ctaDemo: "Xem demo Caching",
    features: [
      "40 bài học tương tác sinh động chia thành 9 module chuyên sâu",
      "Điều khiển phát lại từng bước (Step-by-step playback) kèm số liệu thời gian thực (Live Metrics)",
      "Theo dõi luồng Request qua CDN, Load Balancer, Cache Redis và Database Shards",
      "Xem các sự cố lan truyền và cách cơ chế Retry / Circuit Breaker thay đổi kết quả",
      "Tự tay thiết kế kiến trúc URL Shortener, News Feed, Chat Realtime và Video Streaming",
      "Lưu tiến độ cục bộ trên trình duyệt & Hỗ trợ chuyển đổi giao diện Sáng / Tối"
    ],
    useCases: [
      {
        title: "Nắm vững nền tảng Backend",
        desc: "Hiểu sâu sắc cách các hệ thống lớn xử lý hàng triệu request mỗi giây mà không bị sập nguồn.",
        icon: "server"
      },
      {
        title: "Luyện phỏng vấn System Design",
        desc: "Tự tin trả lời các câu hỏi phỏng vấn kiến trúc tại các công ty công nghệ hàng đầu.",
        icon: "briefcase"
      },
      {
        title: "Thẩm định quyết định kiến trúc",
        desc: "Đưa ra lựa chọn kỹ thuật đúng đắn: Khi nào nên scale dọc, khi nào scale ngang, chọn SQL hay NoSQL.",
        icon: "shield"
      }
    ],
    faq: [
      {
        id: "faq-1",
        question: "Khoá học Designed to Scale bao gồm những nội dung gì?",
        answer: "Khoá học gồm 40 bài học tương tác qua 9 module từ cơ bản đến nâng cao: Foundations (Nền tảng), Scaling (Mở rộng), Data & Storage (Lưu trữ dữ liệu), Communication (Giao tiếp), Reliability (Độ tin cậy), Architecture (Kiến trúc microservices), Security (Bảo mật), Shipping (CI/CD & Giám sát) và Whole Systems (Thiết kế hệ thống thực tế)."
      },
      {
        id: "faq-2",
        question: "Học trên Designed to Scale khác gì so với đọc sách hoặc xem video?",
        answer: "Điểm khác biệt cốt lõi là tính trực quan tương tác. Thay vì xem sơ đồ tĩnh, bạn được tự tay bấm qua từng bước của luồng xử lý, xem các gói dữ liệu di chuyển trên sơ đồ kiến trúc động và chứng kiến các thông số như p50/p99 latency, Throughput (RPS), CPU utilization phản hồi lập tức."
      },
      {
        id: "faq-3",
        question: "Tôi có cần cài đặt môi trường lập trình nào không?",
        answer: "Hoàn toàn không. Toàn bộ sơ đồ, bộ giả lập số liệu và tương tác đều chạy mượt mà ngay trên trình duyệt web của bạn thông qua HTML5, SVG và JavaScript."
      },
      {
        id: "faq-4",
        question: "Tiến độ học tập của tôi được lưu trữ như thế nào?",
        answer: "Tiến độ bài học, các bước đã hoàn thành và tuỳ chọn giao diện được lưu an toàn trên bộ nhớ trình duyệt (localStorage), không đòi hỏi tạo tài khoản bắt buộc."
      }
    ]
  },
  about: {
    title: "Về Designed to Scale",
    description: "Designed to Scale ra đời với sứ mệnh trực quan hoá các khái niệm kiến trúc hệ thống phức tạp, giúp kỹ sư phần mềm, BA và sinh viên công nghệ thấu hiểu cách các hệ thống triệu người dùng vận hành.",
    modulesCount: 9,
    lessonsCount: 40,
    languagesCount: 2,
    howToUse: "Hãy bắt đầu với module Foundations để hiểu hành trình một request, sau đó khám phá các chiến lược Caching, Replication, Sharding, và cuối cùng thử sức với các bài toán thiết kế toàn diện (Whole Systems).",
    supportLink: "#/contact"
  },
  contact: {
    title: "Liên hệ & Hỗ trợ khoá học",
    description: "Cần trợ giúp về bài học, muốn báo lỗi kỹ thuật hoặc có câu hỏi về quyền riêng tư? Chúng tôi luôn sẵn sàng lắng nghe.",
    supportEmail: "support@designedtoscale.app",
    reportInstructions: [
      "Đường dẫn bài học (Lesson slug) và số bước (Step number)",
      "Những gì bạn mong đợi và điều thực tế diễn ra trên sơ đồ",
      "Tài liệu hoặc dẫn chứng kỹ thuật nếu báo cáo điểm cần đính chính"
    ]
  },
  privacy: {
    title: "Chính sách bảo mật",
    lastUpdated: "2026-11-20",
    sections: [
      {
        heading: "Học tập không cần tài khoản",
        content: "Tiến độ bài học và tuỳ chọn giao diện của bạn được lưu trữ an toàn trong localStorage của trình duyệt trên thiết bị cá nhân. Chúng tôi không thu thập thông tin định danh cá nhân khi bạn học ở chế độ mặc định."
      },
      {
        heading: "Đăng nhập và tài khoản Pro",
        content: "Khi nâng cấp gói học hoặc đăng nhập, chúng tôi chỉ lưu trữ thông tin cơ bản gồm email và tên để xác thực quyền truy cập các bài học nâng cao."
      },
      {
        heading: "Xoá dữ liệu vĩnh viễn",
        content: "Bạn có thể xoá toàn bộ tiến độ và dữ liệu học tập bất kỳ lúc nào chỉ với một cú nhấp chuột trong mục Cài đặt hoặc xoá cache trình duyệt."
      },
      {
        heading: "Phân tích và đo lường",
        content: "Chúng tôi sử dụng số liệu đo lường nặc danh để tối ưu hoá hiệu năng sơ đồ và trải nghiệm người dùng, tuyệt đối không chia sẻ cho bên thứ ba."
      }
    ]
  },
  terms: {
    title: "Điều khoản sử dụng",
    lastUpdated: "2026-11-20",
    sections: [
      {
        heading: "1. Dịch vụ và chấp thuận điều khoản",
        content: "Các điều khoản này điều chỉnh việc sử dụng khoá học Designed to Scale. Bằng việc truy cập hoặc mua khoá học, bạn đồng ý tuân thủ toàn bộ các quy định tại đây."
      },
      {
        heading: "2. Quyền sử dụng nội dung",
        content: "Bạn được cấp quyền sử dụng nội dung khoá học cho mục đích học tập cá nhân phi thương mại. Không được sao chép, phân phối lại hoặc bán lại mã nguồn hay nội dung bài giảng."
      },
      {
        heading: "3. Thanh toán và hoàn tiền",
        content: "Thanh toán một lần duy nhất cấp quyền truy cập trọn đời. Chính sách hoàn tiền áp dụng trong vòng 14 ngày theo quy định bảo vệ người tiêu dùng."
      },
      {
        heading: "4. Tuyên bố miễn trừ trách nhiệm",
        content: "Các số liệu p50, p99, RPS và CPU trong bài học là mô phỏng sư phạm nhằm làm rõ nguyên lý kiến trúc, không phản ánh chính xác 100% từng hạ tầng phần cứng cụ thể."
      },
      {
        heading: "5. Chấm dứt quyền sử dụng",
        content: "Chúng tôi có quyền tạm ngừng quyền truy cập nếu phát hiện hành vi chia sẻ tài khoản trái phép hoặc cố tình tấn công phá hoại hạ tầng dịch vụ."
      },
      {
        heading: "6. Cập nhật và liên hệ",
        content: "Điều khoản có thể được cập nhật theo thời gian. Mọi thắc mắc xin gửi về hòm thư hỗ trợ support@designedtoscale.app."
      }
    ]
  }
};

// Danh sách 9 Modules và 40 bài học chuẩn theo bản đồ phân tích
const scaleModulesData = [
  {
    id: "foundations",
    title: "1. Foundations",
    titleVi: "Nền tảng hệ thống",
    desc: "Cách một request luân chuyển, độ trễ, băng thông và toán ước lượng nhanh.",
    lessons: [
      { slug: "how-request-travels", title: "How a Request Travels", titleVi: "Hành trình một Request" },
      { slug: "latency-throughput", title: "Latency & Throughput", titleVi: "Độ trễ & Băng thông" },
      { slug: "napkin-math", title: "Napkin Math", titleVi: "Toán ước lượng tài nguyên" }
    ]
  },
  {
    id: "scaling",
    title: "2. Scaling",
    titleVi: "Mở rộng quy mô",
    desc: "Scale dọc vs Scale ngang, cân bằng tải, stateless services, caching và CDN.",
    lessons: [
      { slug: "vertical-vs-horizontal", title: "Vertical vs Horizontal", titleVi: "Scale dọc vs Scale ngang" },
      { slug: "load-balancing", title: "Load Balancing", titleVi: "Cân bằng tải" },
      { slug: "stateless-services", title: "Stateless Services", titleVi: "Dịch vụ phi trạng thái" },
      { slug: "caching", title: "Caching Strategies", titleVi: "Chiến lược Caching" },
      { slug: "content-delivery", title: "Content Delivery (CDN)", titleVi: "Mạng phân phối nội dung" }
    ]
  },
  {
    id: "data",
    title: "3. Data & Storage",
    titleVi: "Dữ liệu & Lưu trữ",
    desc: "SQL vs NoSQL, Indexing, Replication, Sharding, Định lý CAP và ACID.",
    lessons: [
      { slug: "sql-vs-nosql", title: "SQL vs NoSQL", titleVi: "Cơ sở dữ liệu SQL & NoSQL" },
      { slug: "database-indexing", title: "Database Indexing", titleVi: "Đánh chỉ mục CSDL" },
      { slug: "replication", title: "Replication", titleVi: "Nhân bản dữ liệu (Replication)" },
      { slug: "sharding-partitioning", title: "Sharding & Partitioning", titleVi: "Phân mảnh dữ liệu" },
      { slug: "cap-theorem", title: "CAP Theorem & PACELC", titleVi: "Định lý CAP & PACELC" },
      { slug: "acid-vs-base", title: "ACID vs BASE", titleVi: "Tính nhất quán ACID vs BASE" },
      { slug: "database-locking", title: "Database Locking", titleVi: "Khoá dữ liệu & Đồng thời" },
      { slug: "read-write-split", title: "Read/Write Splitting", titleVi: "Tách luồng Đọc/Ghi" },
      { slug: "connection-pooling", title: "Connection Pooling", titleVi: "Bể kết nối CSDL" },
      { slug: "object-storage", title: "Object Storage", titleVi: "Lưu trữ đối tượng (S3)" },
      { slug: "data-warehousing", title: "Data Warehousing", titleVi: "Kho dữ liệu & OLAP" }
    ]
  },
  {
    id: "communication",
    title: "4. Communication",
    titleVi: "Giao tiếp & Truyền tin",
    desc: "REST, gRPC, GraphQL, Message Queues, Pub/Sub và WebSockets.",
    lessons: [
      { slug: "rest-vs-grpc", title: "REST vs gRPC", titleVi: "REST vs gRPC vs GraphQL" },
      { slug: "message-queues", title: "Message Queues", titleVi: "Hàng đợi tin nhắn" },
      { slug: "publish-subscribe", title: "Publish-Subscribe", titleVi: "Mô hình Pub/Sub" },
      { slug: "websockets-sse", title: "WebSockets & SSE", titleVi: "WebSockets & Server-Sent Events" }
    ]
  },
  {
    id: "reliability",
    title: "5. Reliability",
    titleVi: "Độ tin cậy & Chịu lỗi",
    desc: "Circuit Breaker, Rate Limiting, Retries với Exponential Backoff và Failover.",
    lessons: [
      { slug: "circuit-breaker", title: "Circuit Breaker", titleVi: "Cầu dao ngắt mạch" },
      { slug: "rate-limiting", title: "Rate Limiting", titleVi: "Giới hạn tốc độ truy cập" },
      { slug: "retries-backoff", title: "Retries & Backoff", titleVi: "Thử lại & Giãn cách lũy thừa" },
      { slug: "health-failover", title: "Health Checks & Failover", titleVi: "Kiểm tra sức khoẻ & Chuyển vùng" }
    ]
  },
  {
    id: "architecture",
    title: "6. Architecture",
    titleVi: "Kiến trúc hệ thống",
    desc: "Monolith sang Microservices, API Gateway, Event-Driven và CQRS.",
    lessons: [
      { slug: "monolith-microservices", title: "Monolith to Microservices", titleVi: "Từ Monolith sang Microservices" },
      { slug: "api-gateway", title: "API Gateway", titleVi: "Cổng giao tiếp API Gateway" },
      { slug: "event-driven", title: "Event-Driven Architecture", titleVi: "Kiến trúc hướng sự kiện" },
      { slug: "cqrs-event-sourcing", title: "CQRS & Event Sourcing", titleVi: "Phân tách truy vấn & ghi nhận sự kiện" }
    ]
  },
  {
    id: "security",
    title: "7. Security",
    titleVi: "Bảo mật hệ thống",
    desc: "Xác thực, phân quyền (OAuth2/JWT), mã hoá dữ liệu và chống DDoS.",
    lessons: [
      { slug: "auth-oauth-jwt", title: "Auth: OAuth2 & JWT", titleVi: "Xác thực OAuth2 & JWT" },
      { slug: "data-encryption", title: "Data Encryption", titleVi: "Mã hoá dữ liệu nghỉ & truyền" },
      { slug: "ddos-mitigation", title: "DDoS Mitigation & WAF", titleVi: "Chống DDoS & Tường lửa WAF" }
    ]
  },
  {
    id: "shipping",
    title: "8. Shipping",
    titleVi: "Triển khai & Vận hành",
    desc: "CI/CD không gián đoạn (Zero-downtime) và Giám sát quan sát hệ thống (Observability).",
    lessons: [
      { slug: "ci-cd-deployments", title: "CI/CD & Zero-Downtime", titleVi: "CI/CD & Triển khai liên tục" },
      { slug: "observability", title: "Observability & Metrics", titleVi: "Giám sát, Log & Tracing" }
    ]
  },
  {
    id: "whole-systems",
    title: "9. Whole Systems",
    titleVi: "Thiết kế hệ thống thực tế",
    desc: "Thiết kế URL Shortener, News Feed, Chat Realtime và Video Streaming.",
    lessons: [
      { slug: "url-shortener", title: "Design a URL Shortener", titleVi: "Thiết kế hệ thống Rút gọn link" },
      { slug: "news-feed", title: "Design a News Feed", titleVi: "Thiết kế Bảng tin mạng xã hội" },
      { slug: "chat-system", title: "Design a Realtime Chat", titleVi: "Thiết kế Hệ thống Chat trực tuyến" },
      { slug: "video-streaming", title: "Design Video Streaming", titleVi: "Thiết kế Nền tảng Video Streaming" }
    ]
  }
];

// Dữ liệu tương tác mẫu cho các bài học tiêu biểu (Tiêu điểm: Caching, How a Request Travels, Load Balancing, URL Shortener)
const scaleLessonsDetail = {
  caching: {
    slug: "caching",
    title: "Caching Strategies",
    titleVi: "Chiến lược Caching trong hệ thống lớn",
    module: "Scaling",
    moduleTitle: "2. Scaling",
    steps: [
      {
        step: 1,
        title: "Trạng thái ban đầu: Chưa có Cache (Cold Database)",
        titleEn: "Initial State: Cold Database (No Cache)",
        explanation: "Khi hệ thống chưa có tầng Cache, 100% các yêu cầu đọc dữ liệu đều phải đi thẳng vào Primary Database. Cơ sở dữ liệu phải thực hiện truy vấn đĩa cứng, gây ra độ trễ cao và CPU Database bị nghẽn.",
        diagram: {
          nodes: [
            { id: "client", label: "Client App", x: 60, y: 150, type: "client", status: "active" },
            { id: "lb", label: "Load Balancer", x: 230, y: 150, type: "lb", status: "active" },
            { id: "app", label: "App Server", x: 420, y: 150, type: "server", status: "busy" },
            { id: "db", label: "Primary DB", x: 640, y: 150, type: "db", status: "overload" }
          ],
          connections: [
            { from: "client", to: "lb", label: "1,200 RPS", active: true },
            { from: "lb", to: "app", label: "Route Request", active: true },
            { from: "app", to: "db", label: "SQL Queries (100% Reads)", active: true, color: "#EF4444" }
          ],
          activeNode: "db"
        },
        metrics: {
          p50: 165,
          p99: 340,
          throughput: 480,
          cpu: 88,
          cacheHitRate: 0
        },
        inspector: {
          title: "Primary Database (PostgreSQL)",
          state: "Bị nghẽn tải I/O (Disk Bottleneck)",
          queryRate: "480 queries/s",
          activeConnections: "95/100",
          cacheHits: "0%",
          advice: "Đĩa cứng liên tục đọc các bản ghi giống nhau. Cần bổ sung tầng bộ nhớ tạm (In-memory Cache)."
        }
      },
      {
        step: 2,
        title: "Bổ sung tầng Redis Cache (Khởi tạo Cache-Aside)",
        titleEn: "Introducing Redis Cache Layer",
        explanation: "Ta triển khai cụm Redis In-memory đặt giữa App Server và Database. Khi có request đọc, ứng dụng sẽ kiểm tra trong Redis trước. Ở bước này, cache vừa khởi tạo nên tỉ lệ Cache Hit còn thấp (15%).",
        diagram: {
          nodes: [
            { id: "client", label: "Client App", x: 60, y: 150, type: "client", status: "active" },
            { id: "lb", label: "Load Balancer", x: 230, y: 150, type: "lb", status: "active" },
            { id: "app", label: "App Server", x: 420, y: 150, type: "server", status: "active" },
            { id: "cache", label: "Redis Cache", x: 540, y: 60, type: "cache", status: "warming" },
            { id: "db", label: "Primary DB", x: 640, y: 190, type: "db", status: "busy" }
          ],
          connections: [
            { from: "client", to: "lb", label: "1,800 RPS", active: true },
            { from: "lb", to: "app", label: "Balanced", active: true },
            { from: "app", to: "cache", label: "Cache Check", active: true, color: "#6366F1" },
            { from: "app", to: "db", label: "Cache Misses (85%)", active: true, color: "#F59E0B" }
          ],
          activeNode: "cache"
        },
        metrics: {
          p50: 110,
          p99: 220,
          throughput: 850,
          cpu: 64,
          cacheHitRate: 15
        },
        inspector: {
          title: "Redis Cache Cluster",
          state: "Đang làm nóng bộ nhớ (Warming up)",
          queryRate: "270 hits/s",
          memoryUsed: "1.2 GB / 16 GB",
          cacheHits: "15%",
          advice: "Các dữ liệu phổ biến đang được nạp dần vào RAM của Redis."
        }
      },
      {
        step: 3,
        title: "Cache được làm ấm: Tỉ lệ Hit đạt 68%",
        titleEn: "Warmed Cache: 68% Hit Ratio",
        explanation: "Các dữ liệu đọc thường xuyên (hot keys) đã nằm sẵn trong bộ nhớ RAM. 68% yêu cầu được trả về tức thì từ Redis chỉ sau 4ms, tải lên Database giảm đi rõ rệt.",
        diagram: {
          nodes: [
            { id: "client", label: "Client App", x: 60, y: 150, type: "client", status: "active" },
            { id: "lb", label: "Load Balancer", x: 230, y: 150, type: "lb", status: "active" },
            { id: "app", label: "App Server", x: 420, y: 150, type: "server", status: "active" },
            { id: "cache", label: "Redis Cache", x: 540, y: 60, type: "cache", status: "active" },
            { id: "db", label: "Primary DB", x: 640, y: 190, type: "db", status: "active" }
          ],
          connections: [
            { from: "client", to: "lb", label: "3,200 RPS", active: true },
            { from: "lb", to: "app", label: "Fast Route", active: true },
            { from: "app", to: "cache", label: "Cache Hit (68%)", active: true, color: "#10B981" },
            { from: "app", to: "db", label: "DB Fallback (32%)", active: true, color: "#6366F1" }
          ],
          activeNode: "cache"
        },
        metrics: {
          p50: 32,
          p99: 95,
          throughput: 2400,
          cpu: 38,
          cacheHitRate: 68
        },
        inspector: {
          title: "Redis Cache Cluster",
          state: "Hoạt động tối ưu (Healthy)",
          queryRate: "2,176 hits/s",
          memoryUsed: "4.8 GB / 16 GB",
          cacheHits: "68%",
          advice: "Độ trễ p50 đã giảm từ 165ms xuống chỉ còn 32ms."
        }
      },
      {
        step: 4,
        title: "Tối ưu hoá cao độ: Cache Hit 94% (Hot Cache)",
        titleEn: "Optimal State: 94% Cache Hit Ratio",
        explanation: "Bằng việc thiết lập thời gian sống (TTL) hợp lý và cơ chế pre-warming cho các sự kiện flash sale, 94% lưu lượng được hấp thụ bởi Redis. Thông lượng hệ thống tăng vọt lên 4,800 RPS trong khi CPU Database chỉ còn 16%.",
        diagram: {
          nodes: [
            { id: "client", label: "Client App", x: 60, y: 150, type: "client", status: "active" },
            { id: "lb", label: "Load Balancer", x: 230, y: 150, type: "lb", status: "active" },
            { id: "app", label: "App Server", x: 420, y: 150, type: "server", status: "active" },
            { id: "cache", label: "Redis Cache", x: 540, y: 60, type: "cache", status: "active" },
            { id: "db", label: "Primary DB", x: 640, y: 190, type: "db", status: "cool" }
          ],
          connections: [
            { from: "client", to: "lb", label: "4,800 RPS", active: true },
            { from: "lb", to: "app", label: "High Throughput", active: true },
            { from: "app", to: "cache", label: "94% Fast RAM", active: true, color: "#10B981" },
            { from: "app", to: "db", label: "6% Cold Reads", active: true, color: "#94A3B8" }
          ],
          activeNode: "app"
        },
        metrics: {
          p50: 6,
          p99: 18,
          throughput: 4800,
          cpu: 16,
          cacheHitRate: 94
        },
        inspector: {
          title: "Hệ thống mở rộng toàn diện",
          state: "Hiệu năng cực đại",
          queryRate: "4,512 hits/s",
          memoryUsed: "8.2 GB / 16 GB",
          cacheHits: "94%",
          advice: "Hệ thống đáp ứng trơn tru lưu lượng tăng gấp 10 lần mà không cần nâng cấp phần cứng Database."
        }
      },
      {
        step: 5,
        title: "Xử lý Cache Invalidation & Tránh Cache Stampede",
        titleEn: "Cache Invalidation & Thundering Herd Defense",
        explanation: "Khi dữ liệu được cập nhật, ta cần xoá hoặc cập nhật key trong Cache (Cache Invalidation). Để tránh thảm hoạ Cache Stampede (hàng nghìn request đồng loạt truy vấn DB khi key hết hạn), ta áp dụng Mutex Lock hoặc Stale-While-Revalidate.",
        diagram: {
          nodes: [
            { id: "client", label: "Client App", x: 60, y: 150, type: "client", status: "active" },
            { id: "lb", label: "Load Balancer", x: 230, y: 150, type: "lb", status: "active" },
            { id: "app", label: "App Server", x: 420, y: 150, type: "server", status: "active" },
            { id: "cache", label: "Redis (Mutex Lock)", x: 540, y: 60, type: "cache", status: "active" },
            { id: "db", label: "Primary DB", x: 640, y: 190, type: "db", status: "active" }
          ],
          connections: [
            { from: "client", to: "lb", label: "Updates & Reads", active: true },
            { from: "lb", to: "app", label: "Protected", active: true },
            { from: "app", to: "cache", label: "Set NX (Mutex)", active: true, color: "#6366F1" },
            { from: "app", to: "db", label: "Only 1 Query Rebuilds", active: true, color: "#10B981" }
          ],
          activeNode: "cache"
        },
        metrics: {
          p50: 9,
          p99: 25,
          throughput: 4600,
          cpu: 21,
          cacheHitRate: 92
        },
        inspector: {
          title: "Cơ chế bảo vệ Cache Stampede",
          state: "An toàn tuyệt đối (Protected)",
          queryRate: "4,232 hits/s",
          memoryUsed: "8.5 GB / 16 GB",
          cacheHits: "92%",
          advice: "Nhờ Mutex Lock, chỉ 1 worker duy nhất đọc DB để làm ấm lại cache, ngăn ngừa nghẽn sập tầng cơ sở dữ liệu."
        }
      }
    ]
  },
  "how-request-travels": {
    slug: "how-request-travels",
    title: "How a Request Travels",
    titleVi: "Hành trình một Request qua các tầng hệ thống",
    module: "Foundations",
    moduleTitle: "1. Foundations",
    steps: [
      {
        step: 1,
        title: "DNS Lookup & Thiết lập kết nối TLS",
        titleEn: "DNS Lookup & TLS Handshake",
        explanation: "Khi người dùng gõ URL, trình duyệt truy vấn DNS để đổi domain thành địa chỉ IP, sau đó thực hiện bắt tay TCP và mã hoá TLS với Edge Server gần nhất.",
        diagram: {
          nodes: [
            { id: "client", label: "Browser Client", x: 80, y: 150, type: "client", status: "active" },
            { id: "dns", label: "DNS Anycast", x: 260, y: 60, type: "dns", status: "active" },
            { id: "cdn", label: "Edge CDN", x: 440, y: 150, type: "cdn", status: "active" }
          ],
          connections: [
            { from: "client", to: "dns", label: "Resolve IP", active: true, color: "#6366F1" },
            { from: "client", to: "cdn", label: "TLS Handshake", active: true, color: "#10B981" }
          ],
          activeNode: "dns"
        },
        metrics: { p50: 45, p99: 90, throughput: 2000, cpu: 12, cacheHitRate: 0 },
        inspector: { title: "DNS Anycast Resolution", state: "Đã phân giải IP thành công trong 18ms", advice: "TTL hợp lý giúp giảm thiểu tra cứu lặp lại." }
      },
      {
        step: 2,
        title: "Chặn lọc tại CDN & Web Application Firewall",
        titleEn: "CDN Cache Hit & WAF Inspection",
        explanation: "Các file tĩnh (HTML, CSS, hình ảnh) được CDN trả về ngay lập tức. Các request động được kiểm tra bảo mật (chặn SQLi, XSS) trước khi chuyển vào trung tâm dữ liệu.",
        diagram: {
          nodes: [
            { id: "client", label: "Browser Client", x: 80, y: 150, type: "client", status: "active" },
            { id: "cdn", label: "Edge CDN (WAF)", x: 300, y: 150, type: "cdn", status: "active" },
            { id: "origin", label: "Origin Gateway", x: 550, y: 150, type: "lb", status: "active" }
          ],
          connections: [
            { from: "client", to: "cdn", label: "HTTPS Request", active: true },
            { from: "cdn", to: "origin", label: "Forward Dynamic", active: true, color: "#6366F1" }
          ],
          activeNode: "cdn"
        },
        metrics: { p50: 15, p99: 40, throughput: 3500, cpu: 18, cacheHitRate: 75 },
        inspector: { title: "Cloudflare Edge / WAF", state: "Lọc lưu lượng & phục vụ tĩnh", advice: "80% tài nguyên tĩnh được trả về từ máy chủ gần người dùng nhất." }
      }
    ]
  },
  "load-balancing": {
    slug: "load-balancing",
    title: "Load Balancing",
    titleVi: "Cân bằng tải giữa các App Server",
    module: "Scaling",
    moduleTitle: "2. Scaling",
    steps: [
      {
        step: 1,
        title: "Thuật toán Round Robin & Least Connections",
        titleEn: "Round Robin & Least Connections Algorithms",
        explanation: "Load Balancer phân phối đều lưu lượng đến cụm máy chủ phía sau dựa trên số kết nối hiện hành, đảm bảo không có server nào bị quá tải đơn độc.",
        diagram: {
          nodes: [
            { id: "client", label: "Traffic Source", x: 80, y: 150, type: "client", status: "active" },
            { id: "lb", label: "NGINX / ALB", x: 280, y: 150, type: "lb", status: "active" },
            { id: "srv1", label: "App Server 1", x: 520, y: 70, type: "server", status: "active" },
            { id: "srv2", label: "App Server 2", x: 520, y: 150, type: "server", status: "active" },
            { id: "srv3", label: "App Server 3", x: 520, y: 230, type: "server", status: "active" }
          ],
          connections: [
            { from: "client", to: "lb", label: "6,000 RPS", active: true },
            { from: "lb", to: "srv1", label: "2,000 RPS", active: true, color: "#10B981" },
            { from: "lb", to: "srv2", label: "2,000 RPS", active: true, color: "#10B981" },
            { from: "lb", to: "srv3", label: "2,000 RPS", active: true, color: "#10B981" }
          ],
          activeNode: "lb"
        },
        metrics: { p50: 18, p99: 45, throughput: 6000, cpu: 32, cacheHitRate: 0 },
        inspector: { title: "Application Load Balancer", state: "Cân bằng tải hoàn hảo (Equal Share)", advice: "Tất cả 3 máy chủ đều duy trì mức CPU dưới 35%." }
      }
    ]
  },
  "url-shortener": {
    slug: "url-shortener",
    title: "Design a URL Shortener",
    titleVi: "Thiết kế hệ thống rút gọn liên kết (TinyURL)",
    module: "Whole Systems",
    moduleTitle: "9. Whole Systems",
    steps: [
      {
        step: 1,
        title: "Mã hoá Base62 & Lưu trữ phân tán NoSQL",
        titleEn: "Base62 Encoding & Key Generation Service",
        explanation: "Hệ thống sinh hash duy nhất 7 ký tự bằng Base62 (62^7 ≈ 3.5 nghìn tỷ link). Khi người dùng truy cập, hệ thống trả về mã HTTP 301 hoặc 302 chuyển hướng tức thì.",
        diagram: {
          nodes: [
            { id: "client", label: "User Browser", x: 70, y: 150, type: "client", status: "active" },
            { id: "lb", label: "API Gateway", x: 260, y: 150, type: "lb", status: "active" },
            { id: "cache", label: "Hot Links Cache", x: 460, y: 70, type: "cache", status: "active" },
            { id: "db", label: "Cassandra / DynamoDB", x: 460, y: 230, type: "db", status: "active" }
          ],
          connections: [
            { from: "client", to: "lb", label: "tinyurl.com/xyz123", active: true },
            { from: "lb", to: "cache", label: "90% Fast Redirect", active: true, color: "#10B981" },
            { from: "lb", to: "db", label: "10% Persistent Lookup", active: true, color: "#6366F1" }
          ],
          activeNode: "cache"
        },
        metrics: { p50: 4, p99: 12, throughput: 8500, cpu: 14, cacheHitRate: 90 },
        inspector: { title: "URL Redirection Engine", state: "HTTP 302 Found", advice: "Sử dụng HTTP 302 thay vì 301 nếu muốn thu thập số liệu click Analytics chính xác." }
      }
    ]
  }
};
