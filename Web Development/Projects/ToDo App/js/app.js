const inputText = document.getElementById('new-todo-text');
const btn = document.getElementById('btn-add');

class UI {

    printTodos({ todos }) {

        console.log("Desde aca");
        console.log(todos);

        this.cleanTodos();

        todos.forEach(todo => {
            const { id, text } = todo;

            const newLI = document.createElement('li');
            const p = document.createElement('p');
            const editBtn = document.createElement('button');
            const delBtn = document.createElement('button');
            const btnDiv = document.createElement('div');
            
            newLI.className = 'todo-item';
            newLI.id = id;
            p.textContent = text;
            btnDiv.className = 'bttns';

            editBtn.classList.add('btn', 'edit-del-btn');
            delBtn.classList.add('btn', 'edit-del-btn');
            editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
            delBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;

            btnDiv.appendChild(editBtn);
            btnDiv.appendChild(delBtn);
            
            newLI.appendChild(p);
            newLI.appendChild(btnDiv);

            delBtn.onclick = () => deleteTodo(id);
            editBtn.onclick = () => editTodo(id);

            document.querySelector('.todo-list').appendChild(newLI);

            inputText.value = '';

            console.log(newLI);
        });
    }

    cleanTodos() {
        const todoItems = document.querySelectorAll('.todo-item');
        for (let i = 0 ; i < todoItems.length ; ++i) {
            todoItems[i].remove();
        }
    }
}

class Todos {
    constructor() {
        this.isEditing = false;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos = [...this.todos, todo];
        console.log(todos);
    }

}

const newTodo = {
    id: '',
    text: ''
};

const ui = new UI();
const todos = new Todos();

const addTodo = () => {
    const { value } = inputText;
    const length = value.length;
    
    if (length > 0 && length <= 75) {
        newTodo.id = Date.now();
        newTodo.text = value;

        todos.addTodo({ ...newTodo }); // Sending copy of newTodo
        ui.printTodos(todos);
    }
}


const eventListeners = () => {
    btn.addEventListener('click', addTodo);
};

eventListeners();



/*


eventListeners();

const deleteTodo = (id) => {
    const todo = document.getElementById(id);
    todo.remove();
}

const editTodo = (id) => {
    const todo = document.getElementById(id);
    const input = document.getElementById('new-todo-text');
    const inputBtn = document.getElementById('btn-add');

    inputBtn.textContent = 'Edit TODO';
    input.placeholder = 'Edit yout TODO';
    input.focus();

    isEditingTodo = true;
}
*/