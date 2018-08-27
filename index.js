const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`http method: ${req.method}\n`, req.headers);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({
      id: 12345,
      message: 'Hello World!\n'
    }));
    res.end();
  });

const PORT = process.env.PORT || 3000;
server.listen(PORT);
console.log(`access to http://localhost:${PORT}`);
