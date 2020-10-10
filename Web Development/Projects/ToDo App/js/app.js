class UI {

}

const btnAdd = document.getElementById('btn-add');

const eventListeners = () => {
    btnAdd.addEventListener('click', addTodo);

}

const addTodo = () => {
    const newTodo = document.getElementById('new-todo-text');

    if (newTodo.value.length > 0) {
        const newLI = document.createElement('li');
        const p = document.createElement('p');
        const editBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        const id = Date.now();
    
        newLI.className = 'todo-item';
        newLI.id = id;

        p.textContent = newTodo.value;
        editBtn.classList.add('btn', 'edit-del-btn');
        delBtn.classList.add('btn', 'edit-del-btn');

        editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
        delBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;

        newLI.appendChild(p);
        newLI.appendChild(editBtn);
        newLI.appendChild(delBtn);
    
        delBtn.onclick = () => deleteTodo(id);
        editBtn.onclick = () => editTodo(id);

        document.querySelector('.todo-list').appendChild(newLI);

        newTodo.value = '';
    }
}

eventListeners();