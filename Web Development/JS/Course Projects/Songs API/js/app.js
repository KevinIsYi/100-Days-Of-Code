import API from './api.js';
import { 
    formularioBuscar, 
    divBuscar,
    divMensajes,
    divResultado,
    headingResultado
} from './interfaz.js';

const buscarCancion = (e) => {
    e.preventDefault();

    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '') {
        divMensajes.textContent = 'Error.... Todos los campos son obligatorios';
        divMensajes.classList.add('error');

        setTimeout(() => {
            divMensajes.textContent = '';
            divMensajes.classList.remove('error');
        }, 3000);
    }

    else {
        const busqueda = new API(artista, cancion);
        busqueda.consultarAPI();
    }
}

formularioBuscar.addEventListener('submit', buscarCancion);
