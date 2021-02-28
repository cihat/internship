const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = (req, res) => {
  res.setHeader("Content-Text", "text/html");
  res.end("<html><body><h1>This is HTML</h1></body></html");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
