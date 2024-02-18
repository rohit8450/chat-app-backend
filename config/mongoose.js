// Import the mongoose module
const mongoose = require("mongoose");
require("dotenv").config();

const db =  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});
module.exports = db;

