//import newFunction, { customerName, getInfo, Customer } from './customer.js'; // ./ Is a reference to the same folder
import { Company } from './company.js';

import alias, { customerName as cn, getInfo, Customer } from './customer.js';
alias();



//console.log(customerName);

console.log(getInfo("Kevin"));
console.log(cn);;

const customer = new Customer("Kevin", 1000);
console.log(customer);

const company = new Company("Kevin", 1000, "Premium");
console.log(company);
newFunction();