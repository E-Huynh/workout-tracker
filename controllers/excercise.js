const db = require('../models');
// Creation of a test excercise schema
module.exports = {
    create: function (req, res) {
        db.excercise.create(req.body)
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
