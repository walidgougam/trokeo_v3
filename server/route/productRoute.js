const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const productController = require("../controllers/productController");
const requireAuth = require("../controllers/requireAuth");

dotenv.config({
  path: "./config/config.env",
});

router.post("/createproduct", productController.createProduct);
router.get("/getproduct", productController.getProduct);

module.exports = router;
