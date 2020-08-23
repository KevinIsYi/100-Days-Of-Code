class Customer {
    constructor(name, money) {
        this.name = name;
        this.money = money;
    }

    sayHi() {
        return `Hi, ${this.name}!, you have ${this.money}`;
    }

    static welcome() {
        return `Welcome`;
    }
};

class Enterprise extends Customer {
    constructor(name, money, type) {
        super(name, money);
        this.type = type;
    }

    printAttributes() {
        return `Name: ${this.name} | Money: ${this.money} | Type: ${this.type}`;
    }
}

const Ent = new Enterprise("YOLO", 1500, "Bank");

console.log(Ent.printAttributes());
console.log(Ent.sayHi());