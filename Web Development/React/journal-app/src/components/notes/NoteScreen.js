import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from '../journal/NotesAppBar'

export const NoteScreen = () => {

    const { notes:{ active: note }} = useSelector(state => state);
    const [ formValues, handleInputChange, reset ] = useForm(note);
    const { body, title } = formValues;

    const dispatch = useDispatch();

    const activeId = useRef(note.id);

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch]);

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome tittle"
                    className="nodes__title-input"
                    autoComplete="off"
                    name="title"
                    value={ title }
                    onChange={ handleInputChange }
                />
                <textarea
                    placeholder="What Happened Today?"
                    className="notes__textarea"
                    name="body"
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
