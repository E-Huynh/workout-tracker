const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  // Build out schema here
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;