const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000
const db = require("./models");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

// Creation of a test workout schema
db.workout.create({name: 'test workout'})
  .then(dbWorkout => {
    console.log('dbWorkout: ', dbWorkout);
  })
  .catch(({message}) => {
    console.log('message: ', message);
  })

// Creation of a test excercise schema
db.excercise.create(
  {
    excercise: 'Bicep curls',
    sets: 5,
    reps: 5,
    weight: 10
  }
)
.then(dbExcercise => {
  console.log('-------DBEXCERCISE: ', dbExcercise);
})
.catch(({message}) => {
  console.log('-------MESSAGE: ', message);
})

// Populate workout with excercise and return
db.workout.find({})
  .populate('excercises')
  .then(dbWorkout => {
    console.log('--------TEST POPULATE: ', dbWorkout)
  })
  .catch(err => {
    console.log('--------ERROR: ', err)
  })

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});