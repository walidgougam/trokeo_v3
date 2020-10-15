const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const userController = require("../controllers/userController");
const requireAuth = require("../controllers/requireAuth");

dotenv.config({
  path: "./config/config.env",
});

router.post("/register", userController.register);
router.post("/registergoogle", userController.registerGoogle);
router.post("/login", userController.login);
router.post("/logingoogle", userController.loginGoogle);
router.get("/:id", userController.getUser);
router.post("/edit", userController.editUser);
router.post("/editcategorygoodfollow", userController.editCategoryGoodFollow);
router.post(
  "/editcategoryservicefollow",
  userController.editCategoryServiceFollow
);

module.exports = router;
