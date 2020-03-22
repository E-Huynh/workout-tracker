
$(document).ready(function () {
    $('#newWorkout').on('click', function() {
        $.get('/api/create', function(data){
            console.log('data: ', data)
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