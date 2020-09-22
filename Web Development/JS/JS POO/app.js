class Customer { // Class Declaration

    #name; // name is private

      constructor(name, balance) {
          this.#name = name;
          this.balance = balance;
      }

      showInformation() { 
        return `Your name is: ${ this.#name } and your balance is: ${ this.balance }`;
      }

      static welcome() {
          return 'Welcome. ILY';
      }
};

// Inheritance
class Company extends Customer {
    constructor(name, balance, phone, category) {
        super(name, balance);
        this.phone = phone;
        this.category = category;
    }
    static welcome() {
        return 'Welcome, VIP';
    }
}

/*
const Customer2 = class { // Class expression
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    showInformation() {
        return `Your name is: ${ this.name } and your balance is: ${ this.balance }`;
    }
}
*/

const kevin = new Customer('Kevin', 400);
console.log(kevin);
console.log(kevin.showInformation());
console.log(Customer.welcome());
const company = new Company('Udemy', 5000, 3312457845, 'iShop');
console.log(Company.welcome());
