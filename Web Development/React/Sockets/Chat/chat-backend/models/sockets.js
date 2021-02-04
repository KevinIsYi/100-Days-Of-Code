const { connectUser, disconnectUser, getUsers, saveMessage } = require("../controllers/sockets");
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

            // Unir al usuario a una sala
            socket.join(uid);
            //this.io.to('sala-gamer').emit(''); //Esto le manda mensaje a todos los que estén unidos en la sala gamer

            this.io.emit('list-users', await getUsers());
            
            socket.on('one-to-one-message', async (payload) => {
                const newMessage = await saveMessage(payload);

                if (newMessage) {
                    this.io.to(payload.to).emit('one-to-one-message', newMessage);
                }
            });

            socket.on('disconnect', async () => {
                await disconnectUser(uid);
                this.io.emit('list-users', await getUsers());
            });
        });
    }
}

module.exports = Sockets;