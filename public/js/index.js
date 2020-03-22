
$(document).ready(function () {
    // create new workout
    $('#workoutForm').on('submit', function(event) {
        event.preventDefault();
        const workoutName = {name: $('#workoutInput').val().toLowerCase()};
        $.post('/api/workout', workoutName, function(APIdata){
            //console.log('data: ', APIdata)
            $('#workoutInput').val('')
            //DO SOMETHING WITH THE DATA
        })
        .catch(err => {
            err.responseJSON && err.responseJSON.message ? console.log(err.responseJSON.message) : console.log(err.responseJSON.errmsg)
        });
    });
    // Finds last workout
    $('#lastWorkout').on('click', function(event) {
        event.preventDefault();
        $.get('/api/workout', function(data) {
            console.log('data: ', data);
            //DO SOMETHING WITH THE DATA
        }).catch(err => {
            console.log('err: ', err);
        })
    });
})