const db = require('../models');
// Creation of a test workout schema
module.exports = {
    create: function (req, res) {
        db.workout
            .create(req.body)
            .then(dbWorkout => {
                res.status(200).json(dbWorkout);
            })
            .catch(err => res.status(422).json(err));
    },
    findAllWorkouts: function (req, res) {
        db.workout
            .find().sort({name: 1})
            .populate('excercises')
            .then(dbWorkout => {
                // creates alphabetical workout name list
                console.log('dbWorkout: ', dbWorkout)

                const workoutList = [];
                dbWorkout.forEach(function (data) {
                    workoutList.push(data.name);
                })
                res.status(200).json(workoutList);
            })
            .catch(err => res.status(422).json(err));
    },
    findLastByDate: function (req, res) {
        db.workout
            .find({}).limit(1).sort({date: -1})
            .populate('excercises')
            .then(dbWorkout => {
                // console.log('dbWorkout: ', dbWorkout)
                // console.log('dbWorkout: ', dbWorkout[0].excercises)
                res.status(200).json(dbWorkout);
            })
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        // delete logic
        console.log('workout delete method called');
    },
    update: function (req, res) {
        // update logic
        console.log('workout update method called');
    }
}
