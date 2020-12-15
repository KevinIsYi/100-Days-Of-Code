const { argv } = require('./config/yargs');
const safeColors = require('colors/safe');

const comandos = argv._;

comandos.forEach(comando => {
    switch(comando) {
        case 'listar':
            const { base, limite } = argv;

            console.log(safeColors.green(`Tabla de: ${ base } hasta el: ${ limite }`));
            for (let i = 1 ; i <= limite ; ++i) {
                console.log(`${ safeColors.blue(base) } x ${ i } = ${ base * i }`);
            }
            break;
        default:
            console.log(`El comando: ${ comando } no se reconoce`);
    }
});