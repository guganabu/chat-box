const app = require("express")();
// const httpServer = require("http").createServer(app);

var cors = require('cors')
const options = {
    origins: ['https://guganabu.github.io'],

    handlePreflightRequest: (req, res) => {
      res.writeHead(200, {
        "Access-Control-Allow-Origin": "'https://guganabu.github.io'",
        "Access-Control-Allow-Methods": "GET,POST",
      });
      res.end();
    }
  };

//   var corsOptions = {
//     origin: 'https://guganabu.github.io',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

// app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('Web chat server running...')
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

 // Add this
 if (req.method === 'OPTIONS') {

      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, OPTIONS');
      res.header('Access-Control-Max-Age', 120);
      return res.status(200).json({});
  }

  next();

});
 const server = app.listen(3000)

 const io = require("socket.io")(server, options)

//  Initialize Socket 
const Socket = require('./socket');
const socket = new Socket(io);
socket.init();

