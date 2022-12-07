const mongoose = require("mongoose");

const Module = mongoose.model(
  "Module",
  new mongoose.Schema({
    name: String,
    type: String
  }, 
  {
    timestamps: true
    })
);

module.exports = Module;