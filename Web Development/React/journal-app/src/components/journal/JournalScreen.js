import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {

    const { notes: { active } } = useSelector(state => state);

    return (
        <div className="journal__main-content">
            <Sidebar />

            <main>
                {/* <NothingSelected /> */}
                {
                    active
                    ?
                        <NoteScreen />
                    :
                        <NothingSelected />
                }
            </main>
        </div>
    )
}
