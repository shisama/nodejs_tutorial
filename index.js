const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`http method: ${req.method}\n`, req.headers);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!\n');
    res.end();
  });

const PORT = 3000;
server.listen(PORT);
console.log(`access to http://localhost:${PORT}`);
