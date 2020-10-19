import { Customer } from './customer.js';

export class Company extends Customer {
    constructor(name, balance, category) {
        super(name, balance);
        this.category = category;
    }

    getCategory() {
        return `Name: ${ this.name }\nBalance: ${ this.balance }\nCategory: ${ this.category }`;
    }
}