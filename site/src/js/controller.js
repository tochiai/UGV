
var Controller = function () {
    // Initialize the API
    this.api = new BackendAPI();

    // Listen for key events
    $(document).keydown(_.bind(this.handle_keypress, this));
};


Controller.prototype.handle_keypress = function (event) {
    switch (event.which) {
        case 37: // Left arrow
            this.api.move.left();
            break;

        case 38: // Up arrow
            this.api.move.up();
            break;

        case 39: // Right arrow
            this.api.move.right();
            break;

        case 40: // Down arrow
            this.api.move.down();
            break;
    }
};