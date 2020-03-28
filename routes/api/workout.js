const router = require('express').Router();
const workoutController = require('../../controllers/workout')

// route matches '/api/workout/'
router.route('/')
    .post(workoutController.create)
    .get(workoutController.findLastByDate)

router.route('/list')
    .get(workoutController.findAllWorkouts)

module.exports = router;