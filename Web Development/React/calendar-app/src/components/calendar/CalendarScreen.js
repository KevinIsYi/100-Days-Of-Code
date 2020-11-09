import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'; 

import moment from 'moment';

import { CalendarEvent } from './CalendarEvent';
import { NavBar } from '../ui/NavBar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarModal } from './CalendarModal';

const localizer = momentLocalizer(moment);
const events = [
    {
        title: 'Birthdar',
        start: moment().toDate(), // new Date()
        end: moment().add(2, 'hours').toDate(),
        user: {
            _id: '123',
            name: 'Kevin'
        }
    }
];

export const CalendarScreen = () => {

    const [ lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        console.log(e);
    }

    const onSelect = (e) => {
        console.log(e);
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            color: 'white',
            display: 'block',
            opacity: 0.8
        }
        return {
            style
        }
    }

    return (
        <div Calendar="calendar-screen">
            <NavBar />

            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChange }
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal />
        </div>
    )
}
