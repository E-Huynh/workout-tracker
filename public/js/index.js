
$(document).ready(function () {
    // create new workout
    $('#workoutForm').on('submit', function(event) {
        event.preventDefault();
        const workoutName = {name: $('#workoutInput').val().toLowerCase()};
        $.post('/api/create', workoutName, function(APIdata){
            //console.log('data: ', APIdata)
            $('#workoutInput').val('')
        })
        .catch(err => {
            //validation error
            err.responseJSON && err.responseJSON.message ? console.log(err.responseJSON.message) : console.log(err.responseJSON.errmsg)
        });
    })
    $('#previous').on('click', function() {
        console.log('clicked previous');
    })
})