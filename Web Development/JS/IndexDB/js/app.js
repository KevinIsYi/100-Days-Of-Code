document.addEventListener('DOMContentLoaded', () => {
    crmDb();

    setTimeout(() => {
        createCustomer();
    }, 5000);
})

let crmDB = window.indexedDB.open('crm', 1); //name, version
let DB;

const crmDb = () => {

    // error
    crmDB.onerror = () => {
        console.log("There was something wrong");
    }

    // if it was created
    crmDB.onsuccess = () => {
        console.log("DB Created");
        DB = crmDB.result;
    }

    //will execute when the db is created
    crmDB.onupgradeneeded = (e) => {
        const db = e.target.result; // reference to the db
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        objectStore.createIndex('name', 'name', { unique: false }); // creating columns
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('phone', 'phone', { unique: false });
    
        console.log("DB created");
    }
}

//window.indexdb

const createCustomer = () => {
    let transaction = DB.transaction('crm', 'readwrite'); // name, mode, (readonly)
    transaction.oncomplete = () => {
        console.log("Transaction completed");
    } 
    transaction.onerror = () => {
        console.log("Something went wrong");
    }

    const objectStore = transaction.objectStore('crm');
    const newCustomer = {
        phone: 12345678,
        name: 'kevin',
        email: 'email@email.com'
    }

    const request = objectStore.add(newCustomer); // put to update and delete to delete
    console.log(request);
}