const http = require('http');
const createServer = http.createServer;
const port = process.env.port || 8060;

server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello World!');
  });

server.listen(port, () => console.log(`Listening to port : ${port}`));