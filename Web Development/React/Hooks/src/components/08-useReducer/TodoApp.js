import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './style.css';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Learn React',
    //     done: false
    // }];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    };

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {   
        dispatch({
            type: 'add',
            payload: newTodo
        });
    };

    return (
        <>
            <h1>TodoApp ( { todos.length } ) </h1>
            <hr></hr>

            <div className="row">
                <div className="col-7">
                    <h1>To do!</h1>
                    <TodoList 
                        todos={todos} 
                        handleToggle={handleToggle} 
                        handleDelete={handleDelete} />
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </>
    )
}
