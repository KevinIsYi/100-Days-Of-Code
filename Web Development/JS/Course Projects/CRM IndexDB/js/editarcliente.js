(function() {
    let DB;
    let idCustomer;
    const nameInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#telefono');
    const companyInput = document.querySelector('#empresa');


    document.addEventListener('DOMContentLoaded', () => {
        DBConnection();
        const parametersURL = new URLSearchParams(window.location.search);
        idCustomer = parametersURL.get('id');
       
        form.addEventListener('submit', updateCustomer);

        if (idCustomer) {
            setTimeout(() => {
                getCustomer(idCustomer);
            }, 1000);
        }
    });

    const getCustomer = (idCustomer) => {
        const transaction = DB.transaction(['crm'], 'readonly');
        const objectStore = transaction.objectStore('crm');
        const customer = objectStore.openCursor();
        customer.onsuccess = function(e) {
            const cursor = e.target.result;
            if (cursor) {
                if (cursor.value.id === Number(idCustomer)) {
                    fillForm(cursor.value);
                }
                cursor.continue();
            }
        }
    }

    const fillForm = (customerData) => {
        const { name, email, phone, company } = customerData;
        nameInput.value = name;
        companyInput.value = company;
        emailInput.value = email;
        phoneInput.value = phone;
    }

    const updateCustomer = (e) => {
        e.preventDefault();
        if(nameInput.value === '' || emailInput.value === '' || companyInput.value === '' || phoneInput.value === '') {
            printAlet('All fields are obligatory', 'error');
        }
        else {
            const updatedCustomer = {
                name: nameInput.value,
                email: emailInput.value,
                company: companyInput.value,
                phone: phoneInput.value,
                id: Number(idCustomer)
            }

            const transaction = DB.transaction(['crm'], 'readwrite');
            const objectStore = transaction.objectStore('crm');
            objectStore.put(updatedCustomer);

            transaction.oncomplete = function() {
                printAlet('Customer edited');

                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 3000);
            }
            transaction.onerror = function(error) {
                console.log(error);
                printAlet('Customer cannot be edited', 'error');
            }
        }
    }

    const DBConnection = () => {
        const openConnection = window.indexedDB.open('crm', 1);
        openConnection.onerror = function() {
            console.log("Something went wrong");
        }
        openConnection.onsuccess = function() {
            DB = openConnection.result;
        }
    }
}) ();