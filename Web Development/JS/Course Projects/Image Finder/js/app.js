const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');
const registrosPorPagina = 40;

let totalPaginas;
let iterador;
let paginaActual = 1;

const validarFormulario = (e) => {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if (terminoBusqueda === '') {
        mostrarAlerta('No hay texto');
    } 
    else {
        buscarImagenes();
    }
}

const mostrarAlerta = (mensaje) => {

    const existeAlerta = document.querySelector('.bg-red-100');
    if (!existeAlerta) {
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
    
        alerta.innerHTML = `
            <strong class="font-bold">¡Error!</strong>
            <span class="block sm:inline">${ mensaje }</span>
        `;
    
        formulario.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

const buscarImagenes = () => {
    const termino = document.querySelector('#termino').value;
    const key = '19198783-5925320eb98a8920550b8b8c8';
    const url = `https://pixabay.com/api/?key=${ key }&q=${ termino }&per_page=${ registrosPorPagina }&page=${ paginaActual }`;

    fetch(url)
        .then(resp => resp.json())
        .then(res => {
            totalPaginas = calcularPaginas(res.totalHits);
            mostrarImagenes(res.hits);
        })
}

// Generador

function *crearPaginador(total) {
    for (let i = 1 ; i <= totalPaginas ; ++i) {
        yield i; // registrar valor
    }
}

const mostrarImagenes = (imagenes) => {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    imagenes.forEach(imagen => {
        const { previewURL, likes, views, largeImageURL } = imagen;

        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${ previewURL }" >
                    <div class="p-4">
                        <p class="font-bold">${ likes }<span class="font-light"> Me gusta</span></p>
                        <p class="font-bold">${ views }<span class="font-light"> Vistas</span></p>
                        <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p1" href="${ largeImageURL }" target="_blank" rel="noopener noreferrer">
                            Ver Imagen
                        </a>
                    </div>
                </div>
            </div>
        `;
    });

    while(paginacionDiv.firstChild) {
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }

    imprimirPaginador();

}

const imprimirPaginador = () => {
    iterador = crearPaginador(totalPaginas);
 
    
    while(true) {
        const { value, done } = iterador.next();

        if (done) {
            break;
        }

        const boton = document.createElement('a');

        boton.onclick = () => {
            paginaActual = value;
            buscarImagenes();
        }

        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-10', 'uppercase', 'rounded');
    
        paginacionDiv.appendChild(boton);
    }

}

const calcularPaginas = total => parseInt(Math.ceil(total / registrosPorPagina));

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}