const BandList = require("./band-list");

class Sockets {

    constructor( io ) {

        this.io = io;
        this.bandList = new BandList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            socket.emit('current-bands', this.bandList.getBands());
            console.log("Cliente conectado");

            socket.on('vote-band', (id) => {
                this.bandList.increaseVotes(id);
                this.io.emit('current-bands', this.bandList.getBands());
            });
        });
    }
}

module.exports = Sockets;