const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    Console.log('We have a new connection!!!');
})

app.use(router);

server.listen(PORT, () => Console.log(`Server has started on port ${PORT}`));