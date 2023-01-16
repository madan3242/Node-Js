const mongoose = require("mongoose");

const userSchemma = new mongoose.Schema({
    name: String,
    googleId: String,
    email: String,
});

module.exports = mongoose.model("User", userSchemma);