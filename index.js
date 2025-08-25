const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = 3000;

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on('msg_send', (data) => {
        console.log(data);
        io.emit('msg_recv', data);
    });
});

app.use('/', express.static(__dirname + '/public'));

server.listen(port, () => {
  console.log(`Server started`);
});