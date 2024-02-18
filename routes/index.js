const express = require("express");
const router = express.Router();
const MessageController = require("../controller/messageController");


router.get("/messages", MessageController.MessagesList);
router.get("/", (req, res) => {
  res.send("BACKEND CHAT API IS WORKING");
});

module.exports = router;
