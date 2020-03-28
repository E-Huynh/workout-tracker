
$(document).ready(function () {
    init();

    // CLICK EVENTS

    // display add excercise form
    $('#addBtn').on('click', function () {
        let workoutList = '';
        $.get('/api/workout/list', function (data) {
            workoutList = generateSelectOptions(data);
        }).then(generateAddExcerciseHtml(workoutList, false))
    });
    // submit add excercise form
    $('.card-content').on('click', '#addExcerciseBtn', function (event) {
        event.preventDefault();
        const formData = {
            excercise: $('#excerciseInput').val().toLowerCase(),
            sets: $('#setsInput').val(),
            reps: $('#repsInput').val(),
            weight: $('#weightInput').val(),
            workout: $('#workoutLinkInput').val()
        }
        $.post('/api/excercise', formData, function (data) {
            console.log('data: ', data);
            $('#excerciseInput').val('');
            $('#setsInput').val('');
            $('#repsInput').val('');
            $('#weightInput').val('');
        }).catch(err => {
            console.log('err: ', err);
        })
    })
    // display select workout
    $('#selectBtn').on('click', function () {
        let workoutList = '';
        $.get('/api/workout/list', function (data) {
            workoutList = generateSelectOptions(data);
        }).then(function () {
            $('#displayHeader').html('Select Workout');
            $('#displayArea').html(`
            <div class="field has-addons">
                <div class="control is-expanded">
                    <div class="select is-fullwidth">
                    <select id='selectWorkoutInput'>
                        ${workoutList}
                    </select>
                    </div>
                </div>
                <div class="control">
                    <button type="submit" class="button is-primary" id='selectWorkoutBtn'>Choose</button>
                </div>
            </div>
            `);
        })
    })
    // redirect to select workout page
    $('.card-content').on('click', '#selectWorkoutBtn', function () {
        let workout = $('#selectWorkoutInput').val();
        console.log('workout: ', workout);
        // needs to send workout with redirect
        $(location).attr('href', '../workout.html')
    })
    // display create workout form
    $('#createBtn').on('click', function () {
        $('#displayHeader').html('Create New Workout');
        $('#displayArea').html(`
        <form id='addExcerciseForm'>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Name</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <p class="control is-expanded">
                        <input class="input" id='workoutInput' type="text" placeholder="Workout Name">
                    </p>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <button class="button is-primary" id='addWorkoutBtn'>
                            Create New Workout
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </form>
        `)
    });
    // submit create workout form
    $('.card-content').on('click', '#addWorkoutBtn', function (event) {
        event.preventDefault();
        const workoutName = { name: $('#workoutInput').val().toLowerCase() };
        $.post('/api/workout', workoutName, function (APIdata) {
            console.log('data: ', APIdata)
            $('#workoutInput').val('')
            //DO SOMETHING WITH THE DATA
        })
            .catch(err => {
                err.responseJSON && err.responseJSON.message ? console.log(err.responseJSON.message) : console.log(err.responseJSON.errmsg)
            });
    })

    // functions
    function init() {
        $.get('/api/workout', function (data) {
            if (data.length < 1) {
                $('#displayHeader').html('Workout Tracker');
                $('#displayArea').html('Workout Tracker Content');
            } else {
                $('#displayHeader').html(`${data[0].name}`);
                $('#displayArea').html(`${data[0].excercises} excercises`);
            }
        }).catch(err => {
            console.log('err: ', err);
        })
    }
    function generateSelectOptions(array) {
        let selectHTML = '';
        array.forEach(element => {
            selectHTML += `<option data-value='${element}'>${element}</option>`;
            selectHTML.innerHTML = selectHTML;
        })
        return selectHTML;
    }
    function generateAddExcerciseHtml(workoutList, selectWorkout) {
        $('#displayHeader').html('Add Excercise');
        $('#displayArea').html(`
        <form id='addExcerciseForm'>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Excercise</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <p class="control is-expanded">
                        <input class="input" id='excerciseInput' type="text" placeholder="Bench Press">
                    </p>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Sets</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <p class="control is-expanded">
                        <input class="input" id='setsInput' type="text" placeholder="5">
                    </p>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Reps</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <p class="control is-expanded">
                        <input class="input" id='repsInput' type="text" placeholder="5">
                    </p>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Weight (lbs)</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <p class="control is-expanded">
                        <input class="input" id='weightInput' type="text" placeholder="100">
                    </p>
                </div>
            </div>
        </div>
        <div class="field is-horizontal" id='useWorkoutList'>
            <div class="field-label is-normal">
                <label class="label">Workout</label>
            </div>
            <div class="field-body">
                <div class="field is-narrow">
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select id='workoutLinkInput'>
                                ${workoutList}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <button class="button is-primary" id='addExcerciseBtn'>
                            Add to workout
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </form>
        `)
        if (selectWorkout === true) {
            $('#useWorkoutList').remove();
        }
    }
})