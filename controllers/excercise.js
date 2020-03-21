const db = require('../models');
// Creation of a test excercise schema
module.exports = {
    create: function (req, res) {
        // db.excercise.create(
        //     {
        //         excercise: 'Bicep curls',
        //         sets: 5,
        //         reps: 5,
        //         weight: 10
        //     })
        //     .then(dbExcercise => {
        //         console.log('-------DBEXCERCISE: ', dbExcercise);
        //     })
        //     .catch(({ message }) => {
        //         console.log('-------MESSAGE: ', message);
        //     })
    },
    find: function (req, res) {
        //find logic
    },
    delete: function (req, res) {
        //delete logic
    },
    update: function (req, res) {
        //update logic
    }
}
