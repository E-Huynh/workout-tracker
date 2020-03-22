const router = require('express').Router()
const workoutRoutes = require('./workout');

// Article Routes
router.use("/workout", workoutRoutes);

module.exports = router;