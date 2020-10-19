/*
(() => { // This is an IIFE
    const customerName = 'Kevin';

    //window.customerName = customerName;
}) ();
*/

export const customerName = 'Kevin';

export const getInfo = (name) => {
    return `Customer: ${ name } is stupid`;
}

export class Customer {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
}

const newFunction = () => {
    console.log("Holas");
}

export default newFunction; //Just one export default 

/*
export default function newFunction() {
    console.log("Holas");
}
*/
