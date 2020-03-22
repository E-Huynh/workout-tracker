const router = require('express').Router();
const workoutController = require('../../controllers/workout')

// route matches '/api/workout/'
router.route('/')
    .post(workoutController.create)
    .get(workoutController.findLastByDate)

module.exports = router;