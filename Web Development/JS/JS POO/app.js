/*
const customer = {
    name : "Kevin",
    money: 200,
    costumerType: function() {
        let type;

        if (this.money > 1000) {
            type = 'Gold';
        }
        else {
            type = "Normal";
        }
        return type;
    }
};

console.log(customer.costumerType());
*/
/*
function Customer(name, money) {
    this.name = name;
    this.money = money;

    this.customerType = function() {
        let type;

        if (this.money > 1000) {
            type = "Gold";
        }
        else {
            type = "Normal";
        }
        return type;
    }
}
*/
/*
Customer.prototype.customerType = function() {
    let type;

    if (this.money > 1000) {
        type = "Gold";
    }
    else {
        type = "Normal";
    }
    return type;
}
*/
/*
function Enterprise(name, money, phone, type) {
    Customer.call(this, name, money);
    this.phone = phone;
    this.type = type;
}

Enterprise.prototype = Object.create(Customer.prototype);

let person = new Customer("Kevin", 200);
let enterprise = new Enterprise("Udemy", 10000, 331245515, "Education"); 
console.log(person);
console.log(enterprise.customerType());
*/

/*
const Customer = {
    printMoney: function() {
        return `Hi, ${this.name}, your money is ${this.money}`;
    },
    takeMoney: function (wish) {
        return this.money -= wish;
    }
}

const kevin = Object.create(Customer);
kevin.name = "Kevin";
kevin.money = 500;

console.log(kevin);
*/