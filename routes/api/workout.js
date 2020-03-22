const router = require('express').Router();
const workoutController = require('../../controllers/workout')

router.route('/')
    .get(function (){
        console.log('Hitting /api/create')
    });

module.exports = router;