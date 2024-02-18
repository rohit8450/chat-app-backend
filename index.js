// server.js
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
const Message = require("./models/Message");
require("dotenv").config();
const db = require("./config/mongoose");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use("/", require("./routes"));

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("joined", ({ user }) => {
    io.emit("userJoined", { user, message: " has joined the chat" });
    socket.user = user;
  });

  socket.on("message", async ({ user, message, id }) => {
    const newMessage = new Message({ user, message });
    await newMessage.save();
    io.emit("sendMessage", { user, message, id });
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
    if (socket.user) {
      io.emit("leave", { user: socket.user, message: " has left the chat" });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
