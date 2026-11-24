const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');
const DOCS_DIR = path.join(__dirname, 'docs');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.cjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf'
};

const PDF_ALIASES = {
  '/docs/100-days-ba.pdf': 'Sách 100 ngày viết về nghề BA - A5 (3) (1) (1).pdf',
  '/docs/babok-v3.pdf': 'A GUIDE TO THE BUSINESS ANALYSIS BODY OF KNOWLEDGE ( PDFDrive.com ).pdf',
  '/docs/bcs-ba-3rd.pdf': '3rd_Business_Analysis__split_1.pdf'
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  let reqPath = decodeURI(reqUrl);
  if (reqPath === '/') reqPath = '/index.html';

  // Xử lý riêng cho tài liệu PDF trong thư mục /docs/
  if (reqPath.startsWith('/docs/')) {
    let targetFileName = null;
    if (PDF_ALIASES[reqPath]) {
      targetFileName = PDF_ALIASES[reqPath];
    } else {
      const rawBase = path.basename(reqPath);
      if (fs.existsSync(DOCS_DIR)) {
        const files = fs.readdirSync(DOCS_DIR);
        targetFileName = files.find(f => {
          return f === rawBase ||
            f.toLowerCase() === rawBase.toLowerCase() ||
            f.normalize('NFC') === rawBase.normalize('NFC') ||
            f.normalize('NFD') === rawBase.normalize('NFD') ||
            (rawBase.includes('100') && f.includes('100')) ||
            (rawBase.includes('BABOK') && f.includes('BABOK')) ||
            (rawBase.includes('split_1') && f.includes('split_1'));
        });
      }
    }

    if (!targetFileName) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('PDF Not Found');
      return;
    }

    const pdfPath = path.join(DOCS_DIR, targetFileName);
    fs.stat(pdfPath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('PDF Not Found');
        return;
      }

      const total = stats.size;
      const range = req.headers.range;
      res.setHeader('Accept-Ranges', 'bytes');
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline; filename="' + encodeURIComponent(path.basename(pdfPath)) + '"');
      res.setHeader('Cache-Control', 'public, max-age=86400');

      if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : total - 1;
        if (start >= total || end >= total) {
          res.writeHead(416, { 'Content-Range': `bytes */${total}` });
          return res.end();
        }
        const chunksize = end - start + 1;
        res.writeHead(206, {
          'Content-Range': `bytes ${start}-${end}/${total}`,
          'Content-Length': chunksize
        });
        fs.createReadStream(pdfPath, { start, end }).pipe(res);
      } else {
        res.writeHead(200, {
          'Content-Length': total
        });
        fs.createReadStream(pdfPath).pipe(res);
      }
    });
    return;
  }

  // Phục vụ tệp tĩnh trong /dist/
  let filePath = path.join(DIST_DIR, reqPath);
  if (!filePath.startsWith(DIST_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      // Tránh cache JS/CSS/HTML ở local dev
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      });
      fs.createReadStream(filePath).pipe(res);
    } else {
      // Fallback SPA về /index.html
      const indexPath = path.join(DIST_DIR, 'index.html');
      fs.stat(indexPath, (err2, stats2) => {
        if (!err2 && stats2.isFile()) {
          res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
          });
          fs.createReadStream(indexPath).pipe(res);
        } else {
          res.writeHead(404);
          res.end('Not Found');
        }
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server Vy Workspace đang chạy tại port ${PORT}`);
});
