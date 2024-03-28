// Import the mongoose module
const mongoose = require("mongoose");
require("dotenv").config();

const db =  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));
module.exports = db;