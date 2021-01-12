import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {

    const { notes:{ notes } } = useSelector(state => state);

    return (
        <div className="journal__entries">
            {
                notes.map(({ id, body: { date, title, body, url }}) => (
                    <JournalEntry 
                        key={ id }
                        id={ id }
                        date={ date }
                        title={ title }
                        body={ body }
                        url={ url }
                    />
                ))
            }
        </div>
    )
}
