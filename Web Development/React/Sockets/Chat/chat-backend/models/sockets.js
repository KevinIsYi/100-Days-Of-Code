const { connectUser, disconnectUser } = require("../controllers/sockets");
const { getUIDFromToken } = require("../helpers/jwt");

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {
            console.log("Cliente conectado");
            
            const { ok, uid } = getUIDFromToken(socket.handshake.query['x-token']);

            if (!ok) {
                return socket.disconnect();
            }
            
            connectUser(uid);

            socket.on('disconnect', () => {
                disconnectUser(uid);
                console.log('cliente desconectado');
            })
        });
    }
}


module.exports = Sockets;