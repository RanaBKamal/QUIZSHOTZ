const mongoose = require("mongoose");

const Question = mongoose.model(
  "Question",
  new mongoose.Schema({
    question: String,
    type: String,
    option: [{
        type:String
    }],
    answer: String,
    module: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module"
    }
  }, 
  {
    timestamps: true
    })
);

module.exports = Question;