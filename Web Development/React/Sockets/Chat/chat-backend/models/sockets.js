const { connectUser, disconnectUser, getUsers } = require("../controllers/sockets");
const { getUIDFromToken } = require("../helpers/jwt");

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', async (socket) => {
            
            const { ok, uid } = getUIDFromToken(socket.handshake.query['x-token']);

            if (!ok) {
                return socket.disconnect();
            }
            
            connectUser(uid);

            this.io.emit('list-users', await getUsers(uid));
            
            socket.on('disconnect', async () => {
                this.io.emit('list-users', await getUsers(uid));
                disconnectUser(uid);
            });
        });
    }
}

module.exports = Sockets;