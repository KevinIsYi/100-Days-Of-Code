const loadAPI = document.querySelector('#cargarAPI');

loadAPI.addEventListener('click', () => {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(resp => resp.json())
        .then(res => showHTML(res))
})

function showHTML(data) {
    const content = document.querySelector('.contenido');

    let html = ``;
    data.forEach(data => {
        const { author, post_url } = data;

        html += `
            <p>Author: ${ author } </p>
            <a href="${ post_url } target="_blank">Ver imagen</a>
        `;

    });
    content.innerHTML = html;
}