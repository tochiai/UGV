
var start_with_crosshair = true;

var move_crosshair = function () {
    console.log('hi');
};

var toggle_crosshair = function () {
    var new_state = $('#show-crosshair').prop('checked');

    // If we're now showing it, add the event listener on the screen
    if (new_state) {
        $('#screen').mousemove(move_crosshair);
    }

    // Otherwise, remove it
    else {
        $('#screen').off('mousemove');
    }
};

var init = function () {
    var crosshair_input = $('#show-crosshair');
    crosshair_input.change(toggle_crosshair);
    crosshair_input.prop('checked', start_with_crosshair).change();
};