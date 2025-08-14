const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Parse URL
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;

    // Default to index.html for root
    if (pathname === '/') {
        pathname = '/data-page.html';
    }

    // Get file path
    let filePath = path.join(__dirname, pathname);

    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File not found
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - File Not Found</h1><p>The requested file could not be found.</p>');
            return;
        }

        // Read file
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 - Internal Server Error</h1><p>Error reading file.</p>');
                return;
            }

            // Get file extension
            const ext = path.extname(filePath);
            const contentType = mimeTypes[ext] || 'application/octet-stream';

            // Set headers
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            });

            // Send response
            res.end(data);
        });
    });
});

server.listen(PORT, () => {
    console.log(`🚀 DataDash Server running on http://localhost:${PORT}`);
    console.log(`📊 Main Dashboard: http://localhost:${PORT}/data-page.html`);
    console.log(`🎨 Mazer Dashboard: http://localhost:${PORT}/mazer-dashboard.html`);
    console.log(`🧪 Test Page: http://localhost:${PORT}/test.html`);
    console.log(`📁 Static files served from: ${__dirname}`);
    console.log(`\n💡 Press Ctrl+C to stop the server`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down server...');
    server.close(() => {
        console.log('✅ Server closed successfully');
        process.exit(0);
    });
});
