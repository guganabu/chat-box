const app = require("express")();
// const httpServer = require("http").createServer(app);
const options = { cors: {
    origin: '*',
  } };

 const server = app.listen(3000)

 const io = require("socket.io")(server, options)

//  Initialize Socket 
const Socket = require('./socket');
const socket = new Socket(io);
socket.init();

