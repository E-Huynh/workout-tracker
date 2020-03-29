const db = require('../models');
// Creation of a test excercise schema
module.exports = {
    create: function (req, res) {
        // console.log('req.body.workout: ',req.body.workout)
        db.excercise.create(req.body)
            .then(({_id}) => db.workout.findOneAndUpdate({name: req.body.workout}, { $push: { excercises: _id } }, { new: true }))
            .then(dbExcercise => {
                res.status(200).json(dbExcercise);
            })
            .catch(err => res.status(422).json(err));
    },
    find: function (req, res) {
        // find logic
    },
    delete: function (req, res) {
        // elete logic
    },
    update: function (req, res) {
        // update logic
    }
}
