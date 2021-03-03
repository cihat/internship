const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const errorController = require("./controllers/error");

//! Hangi view engine kullanıcağımızı seçiyoruz ve altında hangi klasörde olduğunu belirtiyoruz
// app.set("view engine", "pug");
// app.set("views", "views");
app.set("view engine", "ejs");
app.set("views", "views");

//* router'ları import ediyoruz.
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//!
app.use(bodyParser.urlencoded({ extended: false }));

//* Static(css, style gibi) dosyaların public dosyasının içine olduğunu belirtiyoruz
app.use(express.static(path.join(__dirname, "public")));

//? Eğer aynı grupta router'lar var ise başına bir ön ek alarak farklı bir routerda olduğunu anlarız ve tekrar yazmaya gerek kalmaz
app.use("/admin", adminRoutes);

//! import ettiğimiz router'ları kullanıyoruz.
app.use(shopRoutes);

//* Sayfa bulunamadı hatası veren router
app.use(errorController.get404);

//* Hangi portan dinleyeceğini belirtiyoruz.
app.listen(3000);
