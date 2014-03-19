
var BinaryServer = require('binaryjs').BinaryServer,
    fs = require('fs');

// Start Binary.js server
var server = BinaryServer({ port: 9000 });

// Wait for new user connections
server.on('connection', function (client) {
    // Stream a flower as a hello!
    var flower0 = 'site/src/img/flower0.jpg',
        flower1 = 'site/src/img/flower1.jpg',
        state = 0,
        file;

    var interval = setInterval(function () {
        file = fs.createReadStream(state ? flower1 : flower0);
        client.send(file);
        state = !state;
    }, 150);

    // Listen for the client to disconnect
    client.on('close', function () {
        clearInterval(interval);
        console.log('Client ' + client.id + ' disconnected.');
    });
});