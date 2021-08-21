const app = require('express')()
// const httpServer = require("http").createServer(app);
const PORT = process.env.PORT || 3000

const socketOptions = {
    cors: {
        origin: 'https://guganabu.github.io',
        methods: ['GET', 'POST'],
    },
}

app.get('/', (req, res) => {
    res.send('Web chat server running...')
})
const server = app.listen(PORT, () => {
    console.log(`Server starting at port ${PORT}...`)
})

const io = require('socket.io')(server, socketOptions)

//  Initialize Socket
const Socket = require('./socket')
const socket = new Socket(io)
socket.init()
