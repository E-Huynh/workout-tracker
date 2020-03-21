const db = require('../models')
// Creation of a test workout schema
module.exports = {
    create: function (req, res) {
        // db.workout.create({ name: 'test workout' })
        //     .then(dbWorkout => {
        //         console.log('dbWorkout: ', dbWorkout);
        //     })
        //     .catch(({ message }) => {
        //         console.log('message: ', message);
        //     })
    },
    find: function (req, res) {
        // db.workout.find({})
        //     .populate('excercises')
        //     .then(dbWorkout => {
        //         console.log('--------TEST POPULATE: ', dbWorkout)
        //         console.log('--------EXCERCISES NAME: ', dbWorkout[0].name)
        //         console.log('--------EXCERCISES ARRAY: ', dbWorkout[0].excercises)
        //     })
        //     .catch(err => {
        //         console.log('--------ERROR: ', err)
        //     })
    },
    delete: function (req, res) {
        //delete logic
    },
    update: function (req, res) {
        //update logic
    }
}
