const loadJSON = document.querySelector('#cargarJSON');

loadJSON.addEventListener('click', () => {
    fetch('data/empleado.json')
        .then( resp => resp.json() )
        .then(res => showHTML(res) )
        .catch(e => console.log(e) )
})

function showHTML({ empresa, id, nombre, trabajo }) {
    const content = document.querySelector('.contenido');
    content.innerHTML = `
        <p>Empleado: ${ nombre }</p>
        <p>Id: ${ id }</p>
        <p>Trabajo: ${ trabajo }</p>
        <p>Empresa: ${ empresa }</p>
    `;
}