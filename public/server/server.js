const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const bodyParser = require('body-parser')
const {convertCurrency} = require('../js/currency-convert.js');

//const publicPath = path.join(__dirname, '../public/');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
// app.use('/server', express.static('public'))
// app.use(express.static(publicPath));
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.post('/getRates', (req, res) => {
  const responseData = {
    from: req.body.convertFrom,
    to: req.body.convertTo,
    amount: req.body.amountToConvert
  }
  const response = convertCurrency(responseData.from, responseData.to, responseData.amount).then((response) => {
    console.log('inside server: ' + response);
    res.json(response);
  })
  
})

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});