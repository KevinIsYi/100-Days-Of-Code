const inputText = document.getElementById('new-todo-text');
const btn = document.getElementById('btn-add');

class UI {

    updateTodosCounter(count) {
        document.getElementById('todos-count').textContent = `TODOS (${ count })`;
    }
    printTodos({ todos }) {

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
    }

    deleteTodo( idToDelete ) {
        this.todos = this.todos.filter(todo => todo.id !== idToDelete);
    }

    editTodo( editedTodo ) {
        this.todos = this.todos.map(todo => todo.id === editedTodo.id ? editedTodo : todo);
    }
}

const newTodo = {
    id: '',
    text: ''
};

let isEditing = false;
let todosCount = 0;

const ui = new UI();
const todos = new Todos();

const addTodo = () => {
    const { value } = inputText;
    const length = value.length;

    if (length > 0 && length <= 75) {
        newTodo.text = value;
        if (!isEditing) {
            newTodo.id = Date.now();
            todos.addTodo({ ...newTodo }); // Sending copy of newTodo
            ++todosCount;
        }
        else {
            todos.editTodo({ ...newTodo });

            inputText.placeholder = 'Todo...';
            btn.textContent = 'Add TODO';
            isEditing = false;
        }

        ui.printTodos(todos);
        ui.updateTodosCounter(todosCount);
    }
}

const editTodo = (id) => {
    inputText.focus();
    inputText.placeholder = 'Edit mode';
    btn.textContent = 'Edit TODO';

    isEditing = true;
    newTodo.id = id;
}

const deleteTodo = (id) => {
    todos.deleteTodo(id);
    ui.printTodos(todos);
    ui.updateTodosCounter(--todosCount);
}

const eventListeners = () => {
    btn.addEventListener('click', addTodo);
};

eventListeners();