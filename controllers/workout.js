const db = require('../models');
// Creation of a test workout schema
module.exports = {
    create: function (req, res) {
        // create logic
        // console.log('req: ', req.body);
        db.workout
            .create({name: 'yellow'})
            // if create was successful
            .then(dbWorkout => {
                res.status(200).json(dbWorkout);
            })
            // if create was unsuccessful
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
