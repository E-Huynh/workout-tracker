const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
      type: String,
      trim: true,
      required: "Enter a workout name",
      unique: true
  },
  // array contains all excercises related to this workout
  excercises: [
      {
        type: Schema.Types.ObjectId,
        ref: "Excercise"
      }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;