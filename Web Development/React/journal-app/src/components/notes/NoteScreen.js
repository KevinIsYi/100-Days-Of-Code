import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from '../journal/NotesAppBar'

export const NoteScreen = () => {

    const { notes:{ active: note }} = useSelector(state => state);
    const [ formValues, handleInputChange ] = useForm(note);
    const { body, title } = formValues;

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome tittle"
                    className="nodes__title-input"
                    autoComplete="off"
                    value={ title }
                    onChange={ handleInputChange }
                />
                <textarea
                    placeholder="What Happened Today?"
                    className="notes__textarea"
                    value={ body }
                    onChange={ handleInputChange }
                />
                {
                    note.url &&    
                        <div className="notes__image">
                            <img 
                                src="https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg"
                                alt="image"
                            />
                        </div>
                }
            </div>
        </div>
    )
}
