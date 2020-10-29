/*
const paises = ['France', 'Spain', 'Portugal', 'Australia', 'England'];

const nuevoPais = (pais, callback) => {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

const mostratPaises = () => {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        })
    }, 1000);
}

nuevoPais('Germany', mostratPaises);
mostratPaises();
*/

/*
const paises = [];
const nuevoPais = (pais, callback) => {
    paises.push(pais);
    console.log(`Se agregó: ${ pais }`);
    callback();
}

const mostratPaises = () => {
    console.log(paises);
}

const iniciarCallBackHell = () => {
    setTimeout(() => {
        nuevoPais('Germany', mostratPaises);

        setTimeout(() => {
            nuevoPais('France', mostratPaises);

            setTimeout(() => {
                nuevoPais('England', mostratPaises);
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCallBackHell();
*/

/*
const aplicarDescuento = new Promise( (resolve, reject) => {
    const descuento = true;

    if (descuento) {
        resolve('Descuento aplicado');
    }
    else {
        reject('No se aplico el descuento');
    }
} )

//.then va a pasar una vez que se realiza el promise
//Hay tres valores posibles,
// fulfilled - promise se cumplió
// rejected = promise no se cumplió
// pending = promise no sabe si se ha cumplido o no
console.log(aplicarDescuento);


aplicarDescuento
    .then( result => {
        console.log(result);
    } )
    .catch(error => {
        console.log(error);
    })
*/

const paises = [];
const nuevoPais = pais => new Promise( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado: ${ pais }`);
    }, 3000);  
})


nuevoPais('Germany')
    .then( result => {
        console.log(result);
        console.log(paises);

        return nuevoPais('Francia');
    })
    .then( result => {
        console.log(result);
        console.log(paises);

        return nuevoPais('Englad');
    } )
    .then( result => {
        console.log(result);
        console.log(paises);
    } )