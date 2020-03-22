
$(document).ready(function () {
    $('#new').on('click', function() {
        //console.log('clicked new');
        $.get('/api/create', function(data){
            console.log('data: ', data)
        })
        .catch(err => {
            console.log(err.responseJSON.message);
        });
    })
    $('#previous').on('click', function() {
        console.log('clicked previous');
    })
})