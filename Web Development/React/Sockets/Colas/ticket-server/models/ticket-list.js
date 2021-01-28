const Ticket = require('./ticket');

class TicketList {
    constructor() {
        this.lastNumber = 0;
        this.pending = [];
        this.assigned = [];
    }
    getNextNumber() {
        return ++this.lastNumber;
    }
    getLast() {
        return this.assigned.slice(0, 13);
    }
    createTicket() {
        const newTicket = new Ticket(this.getNextNumber());
        this.pending.push(newTicket);

        return newTicket;
    }
    assignedTicket(agent, desktop) {
        if (this.pending.length === 0) {
            return null;
        }
        const nextTicket = this.pending.shift(); // get first element
        nextTicket.agent = agent;
        nextTicket.desktop = desktop;

        this.assigned.unshift(nextTicket);

        return nextTicket;
    }
}

module.exports = TicketList;