// variables

const res = document.getElementById('resultado');

const year = document.getElementById('year');
const marca = document.getElementById('marca');
const minimo = document.getElementById('minimo');
const maximo = document.getElementById('maximo');
const puertas = document.getElementById('puertas');
const transmision = document.getElementById('transmision');
const color = document.getElementById('color');

const maxYear = new Date().getFullYear();

const searchData = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
};

//events
document.addEventListener('DOMContentLoaded', () => {
    showCars(autos);
    fillSelectYears();
});

marca.addEventListener('change', ({ target: { value }}) => {
    searchData.marca = value;

    filterCars();
});
year.addEventListener('change', ({ target: { value }}) => {
    searchData.year = parseInt(value);

    filterCars();
});
maximo.addEventListener('change', ({ target: { value }}) => {
    searchData.maximo = parseInt(value);

    filterCars();
});
minimo.addEventListener('change', ({ target: { value }}) => {
    searchData.minimo = value;

    filterCars();
});
puertas.addEventListener('change', ({ target: { value }}) => {
    searchData.puertas = parseInt(value);

    filterCars();
});
transmision.addEventListener('change', ({ target: { value }}) => {
    searchData.transmision = value;

    filterCars();
});
color.addEventListener('change', ({ target: { value }}) => {
    searchData.color = value;

    filterCars();
});

//functions
const showCars = (autos) => {

    cleanHTML();

    autos.forEach(car => {
        const carHTML = document.createElement('p');
        const { marca, modelo, year, puertas, transmision, precio, color} = car
        carHTML.textContent = `${marca} ${modelo} - ${year} - Puertas ${puertas} - Transmisión ${transmision} - Precio: ${precio} - Color: ${color}`;
        res.appendChild(carHTML);        
    });
};

const cleanHTML = () => {

    while(res.firstChild) {
        res.removeChild(res.firstChild);
    }   
};

const fillSelectYears = () => {
    const minYear = maxYear - 10;

    for (let i = maxYear ; i >= minYear ; --i) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
};

const filterCars = () => {
    const response = autos.filter(filterMarca).filter(filterYear).filter(filterMin).filter(filterMax).filter(filterDoors).filter(filterTransmision).filter(filterColor);
    
    if (response.length > 0) {
        showCars(response);
    }
    else {
        noResponse();
    }
};

const noResponse = () => {

    cleanHTML();
    
    const noResp = document.createElement('div');
    noResp.classList.add('alerta', 'error');
    noResp.textContent = 'No hay resultados';

    res.appendChild(noResp);
}

const filterMarca = (car) => { // Have to return car, otherwise, if there are many search parameters, reference will be lost
    const { marca } = searchData;

    if (marca !== '') {
        return marca === car.marca; 
    }
    return car;
};

const filterYear = (car) => {
    const { year } = searchData;

    if (year !== '') {
        return year === car.year;
    }
    return car;
};

const filterMin = (car) => {
    const { minimo } = searchData;

    if (minimo !== '') {
        return car.precio >= minimo;
    }
    return car;
};

const filterMax = (car) => {
    const { maximo } = searchData;
    if (maximo != '') {
        return car.precio <= maximo;
    }
    return car;
};

const filterDoors = (car) => {
    const { puertas } = searchData;
    if (puertas !== '') {
        return car.puertas === puertas;
    }
    return car;
};

const filterTransmision = (car) => {
    const { transmision } = searchData;
    if (transmision !== '') {
        return transmision === car.transmision;
    }
    return car;
};

const filterColor = (car) => {
    const { color } = searchData;
    if (color !== '') {
        return color === car.color;
    }
    return car;
};