var express = require('express');

var app = express();
var server = app.listen(4000, () => { //Start the server, listening on port 4000.
    console.log("Listening to requests on port 4000...");
})

var io = require('socket.io')(server); //Bind socket.io to our express server.

app.use(express.static('public')); //Send index.html page on GET /

setInterval(function(){
    // console.log('emitting');
    var d = new Date();
    io.sockets.emit('Temperatura', {
        x: d,
        // x: Math.random(),
        y: Math.random(),
    });
    io.sockets.emit('Pulso', {
        x: d,
        // x: Math.random(),
        y: Math.random(),
    });
}, 300);
