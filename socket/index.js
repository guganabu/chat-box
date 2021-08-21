class Socket {
    constructor(io) {
        this.io = io
    }

    init() {
        this.io.on('connection', (socket) => {
            console.log('connection established!')

            //    private chat
            socket.on('private', (payload) => {
                socket.broadcast.emit('private', {
                    actor: 'broadcast',
                    data: payload.data,
                })
            })
        })
    }
}

module.exports = Socket
