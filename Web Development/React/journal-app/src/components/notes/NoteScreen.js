import React from 'react'
import { NotesAppBar } from '../journal/NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome tittle"
                    className="nodes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What Happened Today?"
                    className="notes__textarea"
                />
                <div className="notes__image">
                    <img 
                        src="https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg"
                        alt="image"
                    />
                </div>
            </div>
        </div>
    )
}
