const router = require('express').Router()
const workoutRoutes = require('./workout');
const excerciseRoutes = require('./excercise');

// Article Routes
router.use("/workout", workoutRoutes);
router.use("/excercise", excerciseRoutes);

module.exports = router;