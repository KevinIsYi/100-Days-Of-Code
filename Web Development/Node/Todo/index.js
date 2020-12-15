const colors = require('colors/safe');
const { argv } = require('./config/yargs');
const { crear, obtenerListado, actualizar, borrar } = require('./todo/todo');

const { _: comandos } = argv;
const comando = comandos[0];

const { descripcion, completado } = argv;

switch(comando) {
    case 'crear':
        crear(descripcion);

        break;
    case 'listar':
        const listado = obtenerListado();
        listado.forEach(({ descripcion, completado }, index) => {
            if (completado) {
                console.log(colors.green(`${ index + 1 }.- ${ descripcion }`));
            }
            else {
                console.log(colors.red(`${ index + 1 }.- ${ descripcion }`));
            }
        })
        break;
    case 'actualizar':
        actualizar(descripcion, completado);

        break;
    case 'borrar': 
        borrar(descripcion);
    break;
    default:
        console.log(`El comando ${ comando } no se reconoce`);
}