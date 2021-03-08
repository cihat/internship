const express = require("express");
const router = express.Router();

const authContoller = require("../controllers/auth");

router.get("/login", authContoller.getLogin);

router.post("/login", authContoller.postLogin);

router.post("/logout", authContoller.postLogout);


module.exports = router;
