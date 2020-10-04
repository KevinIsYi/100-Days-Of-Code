class UI {

}

const btnAdd = document.getElementById('btn-add');

const eventListeners = () => {
    btnAdd.addEventListener('click', addTodo);
}

const addTodo = () => {
    const newTodoText = document.getElementById('new-todo-text').value;

    const newLI = document.createElement('li');
    newLI.className = 'todo-item';


    
    newLI.innerHTML = `

    
    `;

}

eventListeners();