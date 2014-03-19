
/* CONTROLLER.JS
 * This file defines the app controller. All user input is handled through
 * the methods found here.
 */
var Controller = function () {
    // Initialize the API
    this.api = new BackendAPI();

    // Make an instance of the screen controller
    this.screen = new Screen();

    // Listen for key events
    $(document).keydown(this.handle_keypress.bind(this));
};


Controller.prototype.handle_keypress = function (event) {
    switch (event.which) {
        case 37: // Left arrow
            this.api.move.left();
            event.preventDefault();
            break;

        case 38: // Up arrow
            this.api.move.up();
            event.preventDefault();
            break;

        case 39: // Right arrow
            this.api.move.right();
            event.preventDefault();
            break;

        case 40: // Down arrow
            this.api.move.down();
            event.preventDefault();
            break;
    }
};