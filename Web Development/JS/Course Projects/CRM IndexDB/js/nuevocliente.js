(() => {
    let DB;
    const form = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {

        connection();
        form.addEventListener('submit', validateCustomer);
    });
    

    const validateCustomer = (e) => {
        e.preventDefault();

        const name = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#telefono').value;
        const company = document.querySelector('#empresa').value;

        if(name === '' || email === '' || phone === '' || company === '') {
            printAlet('All field are obligatory', 'error');
        }

        const customer = {
            name,
            email,
            phone,
            company,
            id: Date.now()
        };

        createCustomer(customer);

    }

    const createCustomer = (customer) => {
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.add(customer);

        transaction.onerror = function() {
            printAlet('Cannot added customer, check if email is unique', 'error');
        }
        transaction.oncomplete = function() {
            printAlet('Customer was registerd');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        }
    }

    
}) ();