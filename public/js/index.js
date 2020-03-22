
$(document).ready(function () {
    // create new workout
    $('#workoutForm').on('submit', function(event) {
        event.preventDefault();
        const workoutName = {name: $('#workoutInput').val().toLowerCase()};
        $.post('/api/create', workoutName, function(APIdata){
            console.log('data: ', APIdata)
            $('#workoutInput').val('')
        })
        .catch(err => {
            //validation error
            if(err.responseJSON.message){
                console.log('err: ', err.responseJSON.message);
            }
            //name duplicate error
            else if(err.responseJSON.errmsg){
                console.log('err: ', err.responseJSON.errmsg);
            }
        });
    })
    $('#previous').on('click', function() {
        console.log('clicked previous');
    })
})