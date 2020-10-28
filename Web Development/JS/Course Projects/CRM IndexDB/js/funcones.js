const form = document.querySelector('#formulario');
const connection = () => {
    const openConnection = window.indexedDB.open('crm', 1);
    openConnection.onerror = function() {
        console.log("Something went wrong");
    }
    openConnection.onsuccess = function() {
        DB = openConnection.result;
    }
}

const printAlet = (message, type) => {
    const alert = document.querySelector('.alerta');
    if (!alert) {
        const divMessage = document.createElement('div');
        divMessage.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta');
        
        if (type === 'error') {
            divMessage.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        }
        else {
            divMessage.classList.add('bg-green-100', 'boder-green-400', 'text-green-700');
        }

        divMessage.textContent = message;

        form.appendChild(divMessage);

        setTimeout(() => {
            divMessage.remove();
        }, 3000);
    }
}