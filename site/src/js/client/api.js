
/* API.JS
 * This file contains all functionality for communicating with the
 * server on the UGV. Any command that needs to be relayed to the
 * vehicle should be here.
 */
var BackendAPI = function () {
    // The URL and port of the UGV's server
    this.url = 'ws://localhost';
    this.port = 5858;

    // Connect to Binary.js server
    this.client = new BinaryClient(this.url + ':' + this.port);

    var screen = $('#screen');

    // Received new stream from server!
    this.client.on('stream', function (stream, meta) {
        // Buffer for parts
        var parts = [];

        // Got new data
        stream.on('data', function (data) {
            parts.push(data);
        });

        stream.on('end', function () {
            // Display new data in browser!
            var url = (window.URL || window.webkitURL).createObjectURL(new Blob(parts));
            screen.css('background-image', 'url(' + url + ')');
            console.log(new Date().getMilliseconds());
        });
    });
};

/*** MOVE FUNCTIONS **********************************************************/
// These methods contain the logic for instructing the UGV how to move.
BackendAPI.prototype.move = {};


BackendAPI.prototype.move.up = function () {
    console.log('moving up...');
};


BackendAPI.prototype.move.down = function () {
    console.log('moving down...');
};


BackendAPI.prototype.move.left = function () {
    console.log('moving left...');
};


BackendAPI.prototype.move.right = function () {
    console.log('moving right...');
};