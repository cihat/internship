const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

//! GET isteği ile "/" router'ına vermek istediğimiz template'imizi veriyoruz.
router.get("/", productsController.getProducts);

module.exports = router;
