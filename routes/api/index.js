const router = require('express').Router()
const workoutRoutes = require('./workout');

// Article Routes
router.use("/create", workoutRoutes);

module.exports = router;