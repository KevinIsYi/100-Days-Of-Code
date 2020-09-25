// Variables
const form = document.getElementById('agregar-gasto');
const expensesList = document.querySelector('#gastos ul');

// Events
function eventListeners() {
    document.addEventListener('DOMContentLoaded', requestBudget);
    form.addEventListener('submit', addExpense);
}

eventListeners();

// Classes
class Budget {
    constructor(budget) {
        this.budget = budget;
        this.surplus = budget;
        this.expenses = [];
    }
    newExpense(expense) {
        this.expenses = [...this.expenses, expense];
        this.calculateExtra();
    }

    calculateExtra() {
        const expended = this.expenses.reduce((total, expese) => total += expese.quantity, 0);   
        this.surplus = this.budget - expended;
    }
    deleteExpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
        this.calculateExtra();
    }
}

class UI {
    insertBudget({ budget, surplus }) {
        document.getElementById('total').textContent = budget;
        document.getElementById('restante').textContent = surplus;
    }

    printAlert(message, type) {
        const divMessage = document.createElement('div');
        divMessage.classList.add('text-center', 'alert');

        if (type === 'error') {
            divMessage.classList.add('alert-danger');
        }
        else {
            divMessage.classList.add('alert-success');
        }

        divMessage.textContent = message;
        document.querySelector('.primario').insertBefore(divMessage, form);

        setTimeout(() => {
            divMessage.remove();
        }, 1000);
    }

    showExpenses({ expenses }) {

        this.cleanHTML();

        expenses.forEach(expense => {
            const { quantity, name, id } = expense;
            const newExpense = document.createElement('li');
            newExpense.className = 'list-group-item d-flex justify-content-between align-items-center';
            //newExpense.setAttribute('data-id', id);
            newExpense.dataset.id = id; // data-id
            newExpense.innerHTML = `${ name } <span class="badge badge-primary badge-ill">$ ${ quantity }</span>`;
            const deleteButton = document.createElement('button');
            deleteButton.onclick = () => {
                deleteExpense(id);
            }


            deleteButton.classList.add('btn', 'btn-danger', 'borrar-gasto');
            deleteButton.innerHTML = 'Delete &times';
            
            newExpense.appendChild(deleteButton);
            expensesList.appendChild(newExpense);
        });
    }

    updateSurplus({ surplus }) {
        console.log(surplus);
        document.getElementById('restante').textContent = surplus;
    }

    checkBudget({ budget, surplus }) {
        const excessDiv = document.querySelector('.restante');
        console.log(excessDiv);

        console.log(surplus / 4);
        if (budget / 4 > surplus) {
            excessDiv.classList.remove('alert-success', 'alert-warning');
            excessDiv.classList.add('alert-danger');
        }
        else if(budget / 2 > surplus) {
            console.log("else");
            excessDiv.classList.remove('alert-success');
            excessDiv.classList.add('alert-warning');
        }
        else {
            excessDiv.classList.remove('alert-danger', 'alert-warning');
            excessDiv.classList.add('alert-success');
        }

        if (surplus <= 0) {
            ui.printAlert('"Your budget is exhausted', 'error');

            form.querySelector('button[type="submit"]').disabled = true;
        }
    }

    cleanHTML() {
        while(expensesList.firstChild) {
            expensesList.removeChild(expensesList.firstChild);
        }
    }
}

// Functions

let budget;
const ui = new UI();

function requestBudget() {
    let userBudget;
    
    do {
        userBudget = Number(prompt('Write here your budget'));
    } while(userBudget === null || userBudget === '' || isNaN(userBudget) || userBudget <= 0);   

    budget = new Budget(userBudget);
    ui.insertBudget(budget);
}

function addExpense(e) {
    e.preventDefault();

    const name = document.getElementById('gasto').value;
    const quantity = Number(document.getElementById('cantidad').value);

    if (name === '' || quantity === '') {
        ui.printAlert('Both fields are necessary', 'error');
    }
    else if (quantity <= 0 || isNaN(quantity)) {
        ui.printAlert('Quantity is not valid', 'error');
    }
    else {
        const expense = { name, quantity, id: Date.now() };

        budget.newExpense(expense);
        ui.printAlert('Correct');
        ui.showExpenses(budget);
        ui.updateSurplus(budget);
        ui.checkBudget(budget);

        form.reset();
    }
}

function deleteExpense(id) {
    budget.deleteExpense(id);
    ui.showExpenses(budget);
    ui.updateSurplus(budget);
    ui.checkBudget(budget);
}