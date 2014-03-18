
/* SCREEN.JS
 * This file contains all the logic for interacting with the screen and its
 * video stream.
 */
var Screen = function () {
    this.start_with_crosshair = true;

    // Couple of cached jQuery objects for easy reference
    this.screen = $('#screen');
    this.crosshair_input = $('#show-crosshair');

    // Initialize
    this.init();
};


Screen.prototype.move_crosshair = function () {
    console.log('hi');
};


Screen.prototype.toggle_crosshair = function () {
    var new_state = this.crosshair_input.prop('checked');

    // If we're now showing it, add the event listener on the screen
    if (new_state) {
        this.screen.mousemove(this.move_crosshair);
    }

    // Otherwise, remove it
    else {
        this.screen.off('mousemove');
    }
};


Screen.prototype.init = function () {
    // Set up the event listener on the 'Show Crosshair' input and then trigger
    // it to set up the initial state.
    this.crosshair_input.change(this.toggle_crosshair.bind(this));
    this.crosshair_input.prop('checked', this.start_with_crosshair).change();
};