
/* API.JS
 * This file contains all functionality for communicating with the
 * server on the UGV. Any command that needs to be relayed to the
 * vehicle should be here.
 */
var BackendAPI = function () {
    // The URL and port of the UGV's server
    this.url = null;
    this.port = null;
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