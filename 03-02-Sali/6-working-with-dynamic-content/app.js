const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//! Hangi view engine kullanıcağımızı seçiyoruz ve altında hangi klasörde olduğunu belirtiyoruz
// app.set("view engine", "pug");
// app.set("views", "views");
app.set("view engine", "ejs");
app.set("views", "views");

//! router'ları import ediyoruz.
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//!
app.use(bodyParser.urlencoded({ extended: false }));

//! Static dosyaların public dosyasının içine olduğunu belirtiyoruz
app.use(express.static(path.join(__dirname, "public")));

//! Eğer aynı grupta router'lar var ise başına bir ön ek alarak farklı bir routerda olduğunu anlarız ve tekrar yazmaya gerek kalmaz
app.use("/admin", adminData.routes);
//! import ettiğimiz router'ları kullanıyoruz.
app.use(shopRoutes);

//! Sayfa bulunamadı hatası veren router
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "404", path: "/" });
});

//! Hangi portan dinleyeceğini belirtiyoruz.
app.listen(3000);
