const TicketList = require("./ticket-list");

class Sockets {

    constructor( io ) {

        this.io = io;

        this.ticketList = new TicketList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            // Escuchar evento: mensaje-to-server
            socket.on('request-ticket', ( data, callback ) => {
                const newTicket = this.ticketList.createTicket();
                callback(newTicket);
            });

            socket.on('next-ticket', ({ agent, desktop }, callback) => {
                const assignedTicket = this.ticketList.assignedTicket(agent, desktop);
                callback(assignedTicket);
            
                this.io.emit('assigned-ticket', this.ticketList.getLast());
            });
        });
    }
}


module.exports = Sockets;