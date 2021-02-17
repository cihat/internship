const express = require("express");
const debug = require("debug")("nyapp:userrouter");
const multer = require("multer");
const path = require("path");

//set the storage destination and naming
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

//will be using this for uplading
const upload = multer({ storage: storage });

// router basically acts like for uploading
const router = express.Router();

let users = [
  {
    id: 0,
    name: "a",
    age: 2,
  },
  {
    id: 1,
    name: "b",
    age: 3,
  },
];

// Artık bütün endpointler yani route'lar /users/ gerekmeden sadece / yaparak ulaşılabilir.
// Yani ana route'yi /users/ yaptık

router.get("/", (req, res) => {
  return res.send(users);
});

router.get("/:id", (res, req) => {
  let id = res.params.id;
  return res.send(users[id]);
});

router.post("/", (req, res) => {
  users.push(req.body);
  return res.send(users);
});

// istek önce murter'dan geçecek ve sonra req.file mevcut olacak
router.post("/register", upload.single("file"), (req, res) => {
  debug(req.file);
  return res.send(req.file);
});

router.put("/:index", (req, res) => {
  let index = req.params.index;
  users[index] = req.body;
  return res.send(users);
});

router.delete("/last", (req, res) => {
  res.send(users.pop());
});

module.exports = router;
