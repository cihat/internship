const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes.handler);

server.listen(3000);

// console.log(req.url, req.method, req.headers);
//! process.exit();
