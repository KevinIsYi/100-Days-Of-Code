class Sockets {
    constructor(io) {
        this.io = io;
        
        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', (socket) => { 
            // socket.emit('bienvenida', {
            //     message: 'Welcome!'
            // }); // evento, payload
        
            socket.on('desde-cliente', (data) => {
                console.log('En el server se recibió: ', data);
        
                //socket.emit('mensaje-from-server', data); // Emite sólo al mismo cliente
                this.io.emit('mensaje-from-server', data); // Emite a todos los que estén conectados
            })
        });
    }
}

module.exports = Sockets;