const http = require("http");

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end("Hello Word");
};

const server = http.createServer(requestListener);
server.listen(8080);
