const express = require("express");
const app = express();
const debug = require("debug")("myapp:server");
const path = require("path");
const multer = require("multer");
const logger = require("morgan");
const serveIndex = require("serve-index");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.filename + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// güncelleme için kullanılacak
const upload = multer({ storage: storage });

// router'ı al
const userRoute = require("./routes/user.route");

app.use(logger("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static('public'));
app.use(
  "/ftp",
  express.static("public"),
  serveIndex("public", { icons: true })
);

// app.get("/", (req, res) => {
//   return res.send("Hello from my app express server");
// });
// app.post("/testUpload", upload.single("file"), (req, res) => {
//   debug(req.file);
//   console.log("Storage location is ", req.hostname + "req.file.path");
//   return res.send(req.file);
// });

// if end point is /users/, use the router
app.use("/users", userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  debug(`Server is up and running on port, ${PORT}`);
});
