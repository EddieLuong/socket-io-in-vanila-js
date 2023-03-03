const express = require('express');
const { Server } = require('socket.io');

const app = express();
const http = require('http');

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('was connected to socket');
  socket.on('send-message', (data) => {
    io.emit('take-data', data);
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, (port) => {
  console.log(`Listening port 3000`);
});
