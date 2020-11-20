const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
};


const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    resolve(criptomonedas);
});

consultarCriptomonedas = () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    mostrarSpinner();
    fetch(url)
        .then( resp => resp.json())
        .then( res => obtenerCriptomonedas(res.Data) )
        .then( criptomonedas => selectCriptomonedas(criptomonedas) )
}

const selectCriptomonedas = ( criptomonedas ) => {
    criptomonedas.forEach(criptomoneda => {
        const { FullName, Name } = criptomoneda.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedasSelect.appendChild(option);
    });
}

const submitFormulario = (e) => {
    e.preventDefault();

    const { moneda, criptomoneda } = objBusqueda;

    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
    }
    else {
        consultarApi();
    }
}

const leerValor = (e) => {
    objBusqueda[e.target.name] = e.target.value;
}

const consultarApi = () => {
    const { moneda, criptomoneda } = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ criptomoneda }&tsyms=${ moneda }`;
    fetch(url)
        .then(resp => resp.json())
        .then(res => mostrarCotizacionHTML(res.DISPLAY[ criptomoneda ][ moneda ])); // Accede dinámicamente a la respuesta
}

const mostrarAlerta = mensaje => {

    const existeError = document.querySelector('.error');

    if (!existeError) {
        const div = document.createElement('div');
        div.classList.add('error');

        div.textContent = mensaje;
        formulario.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 3000);
    }
}

const mostrarCotizacionHTML = (cotizacion) => {

    limpiarHTML();

    const { PRICE, HIGHDAY, CHANGEPCT24HOUR, LOWDAY, LASTUPDATE } = cotizacion;
    const precio = document.createElement('p');
    const precioAlto = document.createElement('p');
    const precioBajo = document.createElement('p');
    const ultimasHoras = document.createElement('p');
    const ultimaActualizacion = document.createElement('p');
    
    precio.innerHTML = `El precio es: <span>${ PRICE }</span>`;
    precio.classList.add('precio');

    precioAlto.innerHTML = `<p>Precio más alto del día <span>${ LOWDAY }</span></p>`;
    precioBajo.innerHTML = `<p>Precio más bajo del día <span>${ HIGHDAY }</span></p>`;
    ultimasHoras.innerHTML = `<p>Variación últimas horas <span>${ CHANGEPCT24HOUR } %</span></p>`;
    ultimaActualizacion.innerHTML = `<p>Ultima actualizacion <span>${ LASTUPDATE }</span></p>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
}

const limpiarHTML = () => {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);
    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

const mostrarSpinner = () => {
    limpiarHTML();
    const spinner = document.createElement('div');

    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    resultado.appendChild(spinner);
}