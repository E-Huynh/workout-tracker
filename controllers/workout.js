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
    find: function (req, res) {
        // find logic
        console.log('workout find method called');
    },
    findLastByDate: function (req, res) {
        db.workout
            .find({}).limit(1).sort({date: -1})
            .then(dbWorkout => {
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
