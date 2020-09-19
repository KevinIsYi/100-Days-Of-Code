function Customer(name, balance) {
    this.name = name;
    this.balance = balance;
}

Customer.prototype.typeCustomer = function() {
    if (this.balance > 10000) {
        return 'Gold';
    }
    if (this.balance > 5000) {
        return 'Platinum';
    }
    return 'Normal';
}

Customer.prototype.formatCustomer = function() {
    return `You are: ${ this.name } and you have a balance of: ${ this.balance }`;
}

Customer.prototype.balanceOperation = function(quantity) {
    this.balance += quantity;
}

function Company(name, balance, category) {
    Customer.call(this, name, balance);
    this.category = category;
}

Company.prototype = Object.create(Customer.prototype); // Prototype of Customer will be passed to Company
Company.prototype.constructor = Customer;
Company.prototype.getCategory = function() {
    return this.category;
}

const pedro = new Customer("Pedro", 1000);
console.log(pedro);
console.log(pedro.typeCustomer());
console.log(pedro.formatCustomer());

const company = new Company('Udemy', 50000, 'Courses');
company.balanceOperation(-500);
console.log(company);
