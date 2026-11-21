const fs = require('fs');

console.log('--- UPGRADING DESIGNED TO SCALE: HOW A REQUEST TRAVELS & STUDIO LAYOUT ---');

// 1. UPDATE scale-data.js
let dataCode = fs.readFileSync('dist/scale-data.js', 'utf8');

// Replace esc with escScale in scale-data if any
// Update how-request-travels lesson
const newHowRequestTravels = `  "how-request-travels": {
    slug: "how-request-travels",
    title: "How a Request Travels",
    titleVi: "Hành trình một Request qua các tầng hệ thống",
    module: "Foundations",
    moduleTitle: "1. Foundations",
    steps: [
      {
        step: 1,
        title: "Bước 1: DNS Lookup & Bắt tay TLS 1.3 với Edge Server",
        titleEn: "DNS Lookup & TLS 1.3 Handshake",
        explanation: "Khi người dùng gõ URL trên trình duyệt, Client gửi truy vấn đệ quy tới DNS Anycast để đổi domain thành địa chỉ IP của Edge Server gần nhất. Tiếp đó, Client và Edge Server thực hiện bắt tay TCP 3-way và TLS 1.3 siêu tốc trong 42ms.",
        diagram: {
          nodes: [
            { id: "client", label: "Browser Client", x: 90, y: 130, type: "client", status: "active" },
            { id: "dns", label: "DNS Anycast", x: 380, y: 50, type: "dns", status: "active" },
            { id: "cdn", label: "Edge CDN (PoP)", x: 620, y: 130, type: "cdn", status: "active" }
          ],
          connections: [
            { from: "client", to: "dns", label: "1. Resolve IP (18ms)", active: true, color: "#6366F1" },
            { from: "client", to: "cdn", label: "2. TLS 1.3 Handshake (42ms)", active: true, color: "#10B981" }
          ],
          activeNode: "dns"
        },
        metrics: { p50: 38, p99: 85, throughput: 2400, cpu: 12, cacheHitRate: 0 },
        inspector: { title: "DNS Anycast Resolution", state: "Đã phân giải IP thành công trong 18ms", advice: "TTL tối ưu kết hợp DNS Anycast giúp định tuyến người dùng tới Edge Location gần nhất." }
      },
      {
        step: 2,
        title: "Bước 2: Chặn lọc tại Edge CDN & Web Application Firewall (WAF)",
        titleEn: "CDN Cache Hit & WAF Inspection",
        explanation: "Edge CDN tiếp nhận HTTPS Request: Tài nguyên tĩnh (HTML/CSS/JS/Image) được trả về ngay tức thì từ bộ đệm Edge (8ms). Các yêu cầu dữ liệu động (/api/...) được WAF kiểm tra mã độc (SQLi, XSS, DDoS) trước khi chuyển về trung tâm dữ liệu gốc.",
        diagram: {
          nodes: [
            { id: "client", label: "Browser Client", x: 90, y: 130, type: "client", status: "active" },
            { id: "cdn", label: "Edge CDN (WAF)", x: 380, y: 130, type: "cdn", status: "active" },
            { id: "origin", label: "Origin Gateway", x: 620, y: 130, type: "lb", status: "active" }
          ],
          connections: [
            { from: "client", to: "cdn", label: "Static Cache Hit (8ms)", active: true, color: "#10B981" },
            { from: "cdn", to: "origin", label: "Forward Dynamic Query (mTLS)", active: true, color: "#6366F1" }
          ],
          activeNode: "cdn"
        },
        metrics: { p50: 12, p99: 35, throughput: 4200, cpu: 18, cacheHitRate: 82 },
        inspector: { title: "Cloudflare Edge / WAF", state: "Lọc lưu lượng & phục vụ tĩnh", advice: "80% tài nguyên tĩnh được trả về từ Edge gần người dùng nhất, giảm tải áp lực cho máy chủ nội bộ." }
      },
      {
        step: 3,
        title: "Bước 3: Phân phối tải tại Origin Load Balancer tới App Servers",
        titleEn: "Load Balancer Routing to App Servers",
        explanation: "Origin Gateway (ALB) giải nén mTLS, kiểm tra trạng thái sức khỏe (Health Check) và phân bổ lưu lượng động tới các máy chủ ứng dụng (App Servers) phi trạng thái (Stateless) theo thuật toán Round-Robin hoặc Least Connections.",
        diagram: {
          nodes: [
            { id: "cdn", label: "Edge CDN", x: 90, y: 130, type: "cdn", status: "active" },
            { id: "origin", label: "Origin Gateway (ALB)", x: 340, y: 130, type: "lb", status: "active" },
            { id: "server", label: "App Server 01", x: 600, y: 60, type: "server", status: "active" },
            { id: "server2", label: "App Server 02", x: 600, y: 200, type: "server", status: "active" }
          ],
          connections: [
            { from: "cdn", to: "origin", label: "Dynamic API Request", active: true, color: "#6366F1" },
            { from: "origin", to: "server", label: "Round-Robin Task (Worker 1)", active: true, color: "#10B981" },
            { from: "origin", to: "server2", label: "Worker 2 (Healthy)", active: true, color: "#94A3B8" }
          ],
          activeNode: "origin"
        },
        metrics: { p50: 28, p99: 65, throughput: 3800, cpu: 32, cacheHitRate: 70 },
        inspector: { title: "Application Load Balancer (ALB)", state: "Cân bằng tải cụm máy chủ", advice: "Offload SSL tại tầng Load Balancer giúp tiết kiệm tới 30% tài nguyên CPU cho cụm App Servers." }
      },
      {
        step: 4,
        title: "Bước 4: App Server xử lý Logic, truy vấn Cache & Database",
        titleEn: "Cache-Aside & Database Persistence",
        explanation: "App Server áp dụng mẫu Cache-Aside: Đầu tiên truy vấn Redis Cache Layer. Nếu Cache Hit, trả dữ liệu sau 2ms; nếu Cache Miss, đọc từ PostgreSQL Read-Replica và ghi ngược lại vào Cache với TTL thích hợp trước khi hoàn tất vòng đời Request.",
        diagram: {
          nodes: [
            { id: "server", label: "App Server 01", x: 90, y: 130, type: "server", status: "active" },
            { id: "cache", label: "Redis In-Memory", x: 380, y: 50, type: "cache", status: "active" },
            { id: "db", label: "PostgreSQL DB", x: 620, y: 130, type: "db", status: "active" }
          ],
          connections: [
            { from: "server", to: "cache", label: "1. Redis GET (2ms)", active: true, color: "#10B981" },
            { from: "server", to: "db", label: "2. SQL Index Read (15ms)", active: true, color: "#6366F1" }
          ],
          activeNode: "cache"
        },
        metrics: { p50: 18, p99: 45, throughput: 4800, cpu: 25, cacheHitRate: 91 },
        inspector: { title: "Redis In-Memory Cache", state: "Cache Hit Rate 91%", advice: "Chiến lược Cache-Aside bảo vệ Cơ sở dữ liệu chính khỏi hiện tượng quá tải khi lưu lượng tăng đột biến." }
      }
    ]
  }`;

// Find and replace "how-request-travels": { ... }
const travelStart = dataCode.indexOf('"how-request-travels": {');
if (travelStart !== -1) {
  // Find matching closing brace for how-request-travels
  // Look for "load-balancing": { or next lesson
  const travelEnd = dataCode.indexOf('"load-balancing": {', travelStart);
  if (travelEnd !== -1) {
    // Cut from travelStart to right before "load-balancing"
    // Also include comma if needed
    const before = dataCode.slice(0, travelStart);
    const after = dataCode.slice(travelEnd);
    dataCode = before + newHowRequestTravels + ',\n  ' + after;
    console.log('Replaced how-request-travels in scale-data.js with 4 full steps.');
  }
}

// Add origin and server2 metadata into scaleNodeMetadata
if (dataCode.includes('scaleNodeMetadata = {') && !dataCode.includes('origin: {')) {
  dataCode = dataCode.replace('scaleNodeMetadata = {', `scaleNodeMetadata = {
  origin: {
    title: "Origin Gateway / Load Balancer (ALB)",
    role: "Cổng tiếp nhận lưu lượng từ mạng CDN, giải mã mTLS và điều phối request vào cụm máy chủ nội bộ.",
    state: "Kiểm tra lưu lượng WAF hợp lệ, phân phối Round-Robin",
    advice: "Giữ kết nối Keep-Alive với CDN Edge giúp giảm thời gian bắt tay TCP xuống dưới 5ms."
  },
  server2: {
    title: "App Server 02 (Worker Replica)",
    role: "Máy chủ ứng dụng xử lý tác vụ song song, vận hành theo mô hình phi trạng thái (Stateless).",
    state: "Trạng thái Healthy, tải CPU 24%",
    advice: "Không lưu session trên máy chủ để có thể auto-scale và thay thế linh hoạt mà không ảnh hưởng người dùng."
  },`);
  console.log('Added origin and server2 to scaleNodeMetadata.');
}

fs.writeFileSync('dist/scale-data.js', dataCode, 'utf8');

console.log('scale-data.js updated successfully.');
