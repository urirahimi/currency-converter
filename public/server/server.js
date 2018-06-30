const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

//const publicPath = path.join(__dirname, '../public/');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
// app.use('/server', express.static('public'))
// app.use(express.static(publicPath));
app.use(express.static('../public'))

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});