const router = require('express').Router();
const excerciseController = require('../../controllers/excercise')

// route matches '/api/workout/'
router.route('/')
    .post(excerciseController.create)

module.exports = router;