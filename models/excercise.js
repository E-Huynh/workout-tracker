const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excerciseSchema = new Schema({
  excercise: {
    type: String,
    trim: true,
    required: "Enter an excercise"
  },
  sets: {
    type: Number,
    required: "Enter a number of set"
  },
  reps: {
    type: Number,
    required: "Enter a number of reps"
  },
  isComplete: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const excercise = mongoose.model("excercise", excerciseSchema);

module.exports = excercise;