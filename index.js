/**
 * We need to require our packages :-
 * Express
 * Socket.io
 */

var express = require('express');
var socket  = require('socket.io');

// here we create the BACKEND
// so we need to run Express
var application = express();

// Now, start Listener operation / or work our server.
var server = application.listen(5000, function(){
    console.log('Your server is running at http://localhost:5000');
});

/**
 * main Folder to carry Frontend content.
 * "public_html" is the folder that'll appear to visitor on my website.
 */
application.use(express.static('public_html'));

/**
 * Create socket which'll allow any visitor
 * to come and connect over it.
 * 
 * [sio] is variable which will allow me to use all methods in socket.io
 */
var sio = socket(server);

sio.on('connection', function(visitor){

    console.log('we have a new visitor with id=', visitor.id);

    // if visitor sent an emit named 'message', so recieve it.
    // and [EMIT it]: send data to people that are connected with him on server.
    visitor.on('message', function(data){
        sio.sockets.emit('new_message', data)
    });
});