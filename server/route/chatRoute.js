const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const chatController = require("../controllers/chatController");

dotenv.config({
  path: "./config/config.env",
});

router.post("/getchat", chatController.getChat);
router.get("/getchat/:sender/:reciever", chatController.getSpecificChat);
router.post("/postchat", chatController.postChat);
router.get("/allrecieverchat/:id", chatController.getAllRecieverChat);

module.exports = router;
