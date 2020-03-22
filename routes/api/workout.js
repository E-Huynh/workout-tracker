const router = require('express').Router();
const workoutController = require('../../controllers/workout')

// route matches '/api/create/'
router.route('/')
    .post(workoutController.create);

module.exports = router;