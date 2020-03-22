
$(document).ready(function () {
    $('#new').on('click', function() {
        console.log('clicked new');
        $.get('/api/create', function(data){
            //something happens
            console.log(data)
            console.log('FE to BE /api/create');
        }).then(function (result) {
            //something happens
            console.log('BE to FE /api/create');
        })
    })
    $('#previous').on('click', function() {
        console.log('clicked previous');
    })
})