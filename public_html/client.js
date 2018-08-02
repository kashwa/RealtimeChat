/**
 * Var that holds CONNECT function.
 */
var socket = io.connect('http://localhost:5000');

// Pointer to elements on web page.
var username    = document.getElementById('username');
var message     = document.getElementById('message');
var send        = document.getElementById('send');
var caht        = document.getElementById('chat');

/**
 * if button [send] is clicked on it,
 * so, take data from it and send it to server
 * to make EMIT to it.
 */
send.addEventListener('click', function(){
    socket.emit('message', {
        username : username.value,
        message : message.value
    })
});

/**
 * Recieve new message at FrontEnd.
 */
socket.on('new_message', function(data){
    chat.innerHTML += '<div class="container">'+'<strong> '+data.username+' : </strong> '+data.message+'</div>';
    document.getElementById("message").value = ""; // set text empty after sending message.
});