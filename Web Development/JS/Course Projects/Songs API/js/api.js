import { 
    formularioBuscar, 
    divBuscar,
    divMensajes,
    divResultado,
    headingResultado
} from './interfaz.js';

export default class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }
    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${ this.artista }/${ this.cancion }`;
        fetch(url)
            .then(resp => resp.json())
            .then(res => {

                const { lyrics } = res;

                if (lyrics) {                    
                    divResultado.textContent = lyrics;
                    headingResultado.textContent = `Letra de la canción ${ this.cancion } del artista: ${ this.artista }`;
                }
                else {
                    divMensajes.textContent = 'No existe la canción';
                    divMensajes.classList.add('error');

                    
                }
            });
    }
}