const db = require('../models');
// Creation of a test workout schema
module.exports = {
    create: function (req, res) {
        // create logic
        // console.log('req: ', req.body);
        db.workout
            .create({name: 'purple'})
            .then(dbWorkout => {
                res.status(200).json(dbWorkout);
            })
            .catch(err => res.status(422).json(err));
    },
    find: function (req, res) {
        // find logic
        console.log('workout create method called');
    },
    delete: function (req, res) {
        // delete logic
        console.log('workout create method called');
    },
    update: function (req, res) {
        // update logic
        console.log('workout create method called');
    }
}
