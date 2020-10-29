const loadJSONArray = document.querySelector('#cargarJSONArray');

loadJSONArray.addEventListener('click', () => {
    const url = 'data/empleados.json';

    fetch(url)
        .then( resp => resp.json())
        .then( resp => showJSON(resp) )
        .catch(e => console.log(e))
})

function showJSON(array) {
    const content = document.querySelector('.contenido');
    let html = '';
    array.forEach(element => {
        const { id, nombre, empresa, trabajo } = element;

        html += `
            <p>Empleado: ${ nombre }</p>
            <p>Id: ${ id }</p>
            <p>Trabajo: ${ trabajo }</p>
            <p>Empresa: ${ empresa }</p>
        `;

    });

    content.innerHTML = html;
}