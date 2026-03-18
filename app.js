const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // __dirname points to /home/ec2-user/cicd_demo
  const filePath = path.join(__dirname, 'index.html');
  console.log('Reading file at:', filePath); // debug

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('File read error:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error loading page');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
