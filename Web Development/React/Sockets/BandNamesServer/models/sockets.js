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

            socket.on('delete-band', (id) => {
                this.bandList.removeBand(id);
                this.io.emit('current-bands', this.bandList.getBands());
            });

            socket.on('change-name', (data) => {
                const { id, name } = data;
                this.bandList.changeBandName(id, name);
                this.io.emit('current-bands', this.bandList.getBands());
            });

            socket.on('add-band', (data) => {
                const { name } = data;
                this.bandList.addBand(name);
                this.io.emit('current-bands', this.bandList.getBands());
            });
        });
    }
}

module.exports = Sockets;