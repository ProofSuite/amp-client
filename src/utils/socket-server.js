const express = require('express');
const http = require('http');

const socketIO = require('socket.io');
const IOClient = require('socket.io-client');

const ws = require('ws');
const w = new ws('wss://ws.cex.io/ws/');
let ohlcData;
let md_groupped;
let md;

w.on('message', (msg) => {
  msg = JSON.parse(msg);
  console.log(msg)
  if(msg.data) {
    console.log(msg.data.length)
  }
  if(msg.e === "init-ohlcv-data") {
    ohlcData=msg.data;
  }
  else if(msg.e === "md_groupped") {
    md_groupped = msg.data
  }
  else if(msg.e === "md") {
    md = msg.data
  }
})


let ohlcv = JSON.stringify({
  "e": "init-ohlcv",
  "i": "1m",
  "rooms": [
    "pair-BTC-USD"
  ]
})

let room = JSON.stringify({
  "e": "subscribe",
  "rooms": [
    "pair-BTC-USD"
  ]
});

let roomData;
w.on('open', () => {
  // w.send(room);
  w.send(ohlcv);
})


// our localhost port
const port = 4001
const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server);

io.on('connection', socket => {

  socket.on('get-ohlc', () => {
    console.log('get-ohlc')
    io.sockets.emit('get-ohlc-by-Server', ohlcData);
    setInterval(function () {

    }, 60000)
  })

  socket.on('subscribe-room', () => {
    io.sockets.emit('get-room-by-Server', {md, md_groupped});
    setInterval(function () {
      io.sockets.emit('get-room-by-Server', {md, md_groupped});
      // console.log('emititng')
    }, 10000)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})












// Our App to Server(Cex)
// manager.connect();


  // console.log('socket', socketIOClient)


server.listen(port, () => console.log(`Listening on port ${port}`))