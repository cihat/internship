const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const router = express.Router();

const adminData = require("./admin");

//! GET isteği ile "/" router'ına vermek istediğimiz template'imizi veriyoruz.
router.get("/", (req, res, next) => {
  const products = adminData.products;
  //! dynamic datalarımızla işlemleri yapıyoruz.
  res.render("shop", {
    prods: products,
    pageTitle: "My Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
