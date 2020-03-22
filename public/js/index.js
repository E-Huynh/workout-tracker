
$(document).ready(function () {
    $('#viewLastBtn').on('click', function() {
        console.log('viewLastBtn was clicked');
        $.get('/api/workout', function(data) {
            console.log('data: ', data);
            //DO SOMETHING WITH THE DATA
        }).catch(err => {
            console.log('err: ', err);
        })
    });
    $('#createNewBtn').on('click', function() {
        console.log('createNewBtn was clicked');
    });
})