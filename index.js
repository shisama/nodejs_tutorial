const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(`http method: ${req.method}\n`, req.headers);
    res.writeHead(200, {'Content-Type': 'application/json'});
    const data = fs.readFileSync('./data.json');
    res.write(data.toString());
    res.end();
  });

const PORT = process.env.PORT || 3000;
server.listen(PORT);
console.log(`access to http://localhost:${PORT}`);
