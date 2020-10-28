(() => {

    let DB;
    const customerList = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', () => {
        createDB();

        if (window.indexedDB.open('crm', 1)) {
            getCustomers();
        }

        customerList.addEventListener('click', deleteRegister);
    })

    const deleteRegister = (e) => {
        if(e.target.classList.contains('delete')) {
            const deleteId = Number(e.target.dataset.cliente);

            const confirmation = confirm('Are you sure?');

            if(confirmation) {
                const transaction = DB.transaction(['crm'], 'readwrite');
                const objectStore = transaction.objectStore('crm');
                objectStore.delete(deleteId);

                transaction.oncomplete = function() {
                    e.target.parentElement.parentElement.remove();
                }
                transaction.onerror = function() {
                    console.log("Error");
                }
            }
        }
    }

    const createDB = () => {
        const createDB = window.indexedDB.open('crm', 1); // NAME, VERSION

        createDB.onerror = function() {
            console.log("Something went wrong");
        }
        createDB.onsuccess = function () {
            DB = createDB.result;
        }

        // this function runs when db is created
        createDB.onupgradeneeded = function(e) {
            const db = e.target.result;
            const objectStore = db.createObjectStore('crm', { keyPath: 'id', autoIncrement: true });

            objectStore.createIndex('name', 'name', { unique: false });
            objectStore.createIndex('email', 'email', { unique: true });
            objectStore.createIndex('phone', 'phone', { unique: false });
            objectStore.createIndex('company', 'company', { unique: false });
            objectStore.createIndex('id', 'id', { unique: true });
        }
    }

    const getCustomers = () => {
        const connection = window.indexedDB.open('crm', 1);

        connection.onerror = function() {
            console.log("Something went wrong");
        }
        connection.onsuccess = function() {
            DB = connection.result;

            const objectStore = DB.transaction('crm').objectStore('crm');
            objectStore.openCursor().onsuccess = function(e) {
                const cursor = e.target.result;

                if (cursor) {
                    const { name, company, email, phone, id } = cursor.value; 
                    
                    customerList.innerHTML = ` 
                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${ name } </p>
                                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                <p class="text-gray-700">${ phone }</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                <p class="text-gray-600">${ company }</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 delete">Eliminar</a>
                            </td>
                        </tr>
                    `;

                    cursor.continue();
                }
                else {
                    console.log("Limit reached");
                }
            }
        }
    }
}) ();
