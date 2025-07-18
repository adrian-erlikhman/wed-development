const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

let note = '';

io.on('connection', (socket) => {
  socket.emit('note', note);
  socket.on('note', (text) => {
    note = text;
    socket.broadcast.emit('note', text);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
