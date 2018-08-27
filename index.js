const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(`http method: ${req.method}\n`, req.headers);
    res.writeHead(200, {'Content-Type': 'application/json'});
    fs.readFile('./data.json', (err, data) => {
      res.write(data.toString());
      res.end();
      fs.appendFile('./request-time.log', `${new Date()} ${req.headers['user-agent']}\n`, (err) => {
        if (err) {
          console.error(err);
        }
      })
    });
  });

const PORT = process.env.PORT || 3000;
server.listen(PORT);
console.log(`access to http://localhost:${PORT}`);
