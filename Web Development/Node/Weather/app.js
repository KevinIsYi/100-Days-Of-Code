const yargs = require('yargs');
const { getLugar, getTemperatura } = require('./lugar/lugar');


const { argv } = yargs.options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
});

const getInfo = async () => {
    const { direccion } = argv;
    
    try {
        const coords = await getLugar(argv);
        const { description, temp, feels_like, temp_min, temp_max, humidity } = await getTemperatura(coords);
    
        console.log(`
            La temperatura actual en: ${ direccion } es: ${ temp }
            Temperatura mínima: ${ temp_min }
            Temperatura máxima: ${ temp_max }
            Porcentaje de humedad: ${ humidity }
            Se tiene como: ${ feels_like }
            Cielo: ${ description }
        `);
    } catch (error) {
        console.log(`No se pudo determinar la temperatura de la ciudad: ${ direccion }`);
    }

}

getInfo();