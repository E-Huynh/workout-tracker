const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

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
  weight: {
    type: Number,
    required: "Enter a weight"
  },
  isComplete: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  workout: {
    type: String,
    required: "Must select a workout"
  }
});

const Excercise = mongoose.model("Excercise", excerciseSchema);

module.exports = Excercise;