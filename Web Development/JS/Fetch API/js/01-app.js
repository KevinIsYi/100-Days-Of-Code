const txtButton = document.querySelector('#cargarTxt');

txtButton.addEventListener('click', () => {
    const url = 'data/datodss.txt';
    fetch(url)
        .then( resp => {
            console.log(resp);
            console.log(resp.statusText);

            return resp.text();
        })
        .then( datos => {
            console.log(datos);
        })
        .catch(e => {
            console.log(e);
        })
});