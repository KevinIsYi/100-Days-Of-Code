// Constructors

function Insurance(model, year, type) {
    this.model = model;
    this.year = year;
    this.type = type;
}

function UI() { }

Insurance.prototype.queryInsurance = function() {
    /*
        American: 1.15
        Asian: 1.05
        Europe: 1.35
    */

    let quantity;
    const base = 2000;

    switch(this.model) {
        case '1':
            quantity = base * 1.15;
            break;
        case '2':
            quantity = base * 1.05;
            break;
        default:
            quantity = base * 1.35;
    }

    // Every year, cost is reduced by 3 %
    const difference = new Date().getFullYear() - this.year;
    quantity -= ((difference * 3) * quantity) / 100;
    

    /*
        Basic: 30 %
        Complete: 50 %
    */

   if(this.type === 'basico') {
       quantity *= 1.3;
   }
   else {
       quantity *= 1.5;
   }

   return quantity;
}

UI.prototype.fillYears = () => {
    const max = new Date().getFullYear();
    const min = max - 20;

    const selectYear = document.getElementById('year');

    for (let i = max ; i >= min ; --i) {
        const year = document.createElement('option');
        year.value = i;
        year.textContent = i;

        selectYear.appendChild(year);
    }
}

UI.prototype.message = (message, type) => {

    const div = document.createElement('div');

    div.classList.add('mensaje', 'mt-10');
    div.textContent = message;

    if (type === 'error') {
        div.classList.add('error');
    }
    else {
        div.classList.add('correcto');
    }

    const form = document.getElementById('cotizar-seguro');
    form.insertBefore(div, document.getElementById('resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
};

UI.prototype.showResult = ({ model, year, type }, total) => {

    let textModel;
    switch(model) {
        case '1':
            textModel = 'American';
            break;
        case '2':
            textModel = 'Asian';
            break;
        default:
            textModel = 'European'
    }

    const div = document.createElement('div');
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class="header">Result</p>
        <p class="font-bold">Total: <span class="font-normal">$ ${ total } </span></p> 
        <p class="font-bold">Model: <span class="font-normal">${ textModel } </span></p> 
        <p class="font-bold">Year: <span class="font-normal">${ year } </span></p> 
        <p class="font-bold">Type: <span class="font-normal">${ type } </span></p> 
    `;

    const resDiv = document.getElementById('resultado');

    const spinner = document.getElementById('cargando');
    spinner.style.display = 'block';

    setInterval(() => {
        spinner.style.display = 'none';
        resDiv.appendChild(div);
    }, 3000);
};

UI.prototype.hidePrevQuerys = () => {
    const res = document.querySelector('#resultado div');

    if (res != null) {
        res.remove();
    }
}

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.fillYears();
});

function eventListeners() {
    const form = document.getElementById('cotizar-seguro');
    form.addEventListener('submit', quoteInsurance);
};

eventListeners();

function quoteInsurance(e) {
    e.preventDefault();

    const model = document.getElementById('marca').value; // Value is a number
    const year = document.getElementById('year').value;
    const type = document.querySelector('input[name="tipo"]:checked').value;

    if (model === '') {
        ui.message('All fields are obligatory', 'error');
    }
    else {
        ui.message("Querying", 'success');
        ui.hidePrevQuerys();

        const insurance = new Insurance(model, year, type);
        const total = insurance.queryInsurance();

        ui.showResult(insurance, total);
    }
}