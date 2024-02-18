const express = require('express');
const router = express.Router();
const MessageController = require("../controller/messageController");


console.log("Routes Getting Rendered");
// Add this route to server.js
router.get('/messages', MessageController.MessagesList);
app.get("/",(req,res)=>{
    res.send("BACKEND CHAT API IS WORKING");
})

module.exports = router;