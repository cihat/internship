const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop");

//! GET isteği ile "/" router'ına vermek istediğimiz template'imizi veriyoruz.
router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getChekout);

module.exports = router;
