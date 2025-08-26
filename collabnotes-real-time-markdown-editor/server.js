/**
 * CollabNotes server enabling basic real-time collaboration via Socket.IO.
 * Extend with authentication and MongoDB persistence.
 */
const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
  // Broadcast received note content to all other connected clients
  socket.on('note', content => {
    socket.broadcast.emit('note', content);
  });
});

server.listen(PORT, () => {
  console.log(`CollabNotes server running on port ${PORT}`);
});
