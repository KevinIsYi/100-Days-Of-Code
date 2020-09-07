import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset ] = useForm({description: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (description.trim().length > 1) {
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
            };

            handleAddTodo(newTodo);
            reset();
        }
    };
    return (
        <>
            <h1>Add</h1>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text" 
                    className="form-control" 
                    name="description" 
                    placeholder="Learn..." 
                    autoComplete="off" 
                    onChange={ handleInputChange }
                    value={ description }>
                </input>
                <button 
                    type="submit" 
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Add
                </button>
            </form>
        </>
    )
}
