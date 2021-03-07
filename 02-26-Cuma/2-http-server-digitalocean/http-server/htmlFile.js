const http = require("http");
const fs = require("fs").promises;

const HOST = "localhost";
const PORT = "8080";

let indexFile;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(indexFile);
};

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
  .then((contents) => {
    indexFile = contents;
    server.listen(PORT, HOST, () => {
      console.log(`Server is running on http://${HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Could not read index.html file: ${err}`);
    process.exit(1);
  });

// const requestListener = function (req, res) {
//   fs.readFile(__dirname + "/index.html")
//     .then((contents) => {
//       res.setHeader("Content-Type", "text/html");
//       res.writeHead(200);
//       res.end(contents);
//     })
//     .catch((err) => {
//       res.writeHead(500);
//       res.end(err);
//       return;
//     });
// };
