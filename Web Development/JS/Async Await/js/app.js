/*
const download = () => {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('Success')
            }
            else {
                reject('Error');
            }
        }, 3000);
    })
}


const execute = async () => {
    try {
        const data = await download();
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

execute();
*/

/*
const downloadNewCustomers = () => {
    return new Promise(resolve => {
        console.log("Donwloading...");

        setTimeout(() => {
            resolve('Success')
        }, 5000);
    })
}

const downloadNewRequests = () => {
    return new Promise(resolve => {
        console.log("Donwloading requests...");

        setTimeout(() => {
            resolve('Success')
        }, 3000);
    })
}

const app = async () => {
    try {
        const [first, second] = await Promise.all([downloadNewCustomers(), downloadNewRequests()]);

        console.log(first);
        console.log(second);

        /*
        const customers = await downloadNewCustomers();
        console.log(customers);

        const requests = await downloadNewRequests();
        console.log(requests);
        

    } catch (error) {
        console.log(error);
    }
}

app();
*/

const url = 'https://picsum.photos/lists';
document.addEventListener('DOMContentLoaded', getData);

function getData() {
    fetch(url)
        .then(response => response.json())
        .then(res => console.log(res));
}

async function getData() {
    try {
        const response = await fetch(url);
        const result = await response.json();
    
        console.log(result);
    } catch (error) {
        
    }
}
