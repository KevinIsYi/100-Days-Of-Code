import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'; 

import moment from 'moment';

import { CalendarEvent } from './CalendarEvent';
import { NavBar } from '../ui/NavBar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const [ lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }

    const onSelect = (e) => {
        dispatch(eventSetActive(e));
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

    const onSelectSlot = (e) => {
        dispatch( eventClearActiveEvent() );
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
                onSelectSlot={ onSelectSlot }
                selectable={ true }
                onView={ onViewChange }
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />

            <AddNewFab />
            { activeEvent && <DeleteEventFab /> }
            <CalendarModal />
        </div>
    )
}
