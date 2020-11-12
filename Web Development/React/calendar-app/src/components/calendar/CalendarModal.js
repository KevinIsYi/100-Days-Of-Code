import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Swal from 'sweetalert2';


import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { eventAddNew, eventClearActiveEvent, eventUpdated } from '../../actions/events';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

Modal.setAppElement('#root');



export const CalendarModal = () => {

    const [ dateStart, setDateStart ] = useState(moment().minutes(0).seconds(0).add(1, 'hours').toDate());
    const [ dateEnd, setDateEnd ] = useState(moment().minutes(0).seconds(0).add(2, 'hours').toDate());
    const [ isTitleValid, setIsTitleValid ] = useState(true);
    const initEvent = {
        title: '',
        notes: '',
        start: dateStart,
        end: dateEnd
    }
    const [ formValues, setFormValues ] = useState(initEvent);
    const { modalOpen } = useSelector(state => state.ui);
    const { activeEvent } = useSelector(state => state.calendar);
    const dispatch = useDispatch();

    useEffect(() => {
        if (activeEvent) {
            setFormValues(activeEvent);
        }
        else {
            setFormValues(initEvent);
        }
    }, [activeEvent, setFormValues]);

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [ target.name ]: target.value
        })
    }

    const { notes, title, start, end } = formValues;

    const handleStartDateChange = (e) => {
        setDateStart(e);
        setFormValues({
            ...formValues,
            start: e
        })
    }

    const handleEndDateChange = (e) => {
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end: e
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const momentStart = moment(start);
        const momentEnd = moment(end);

        if (momentStart.isSameOrAfter(momentEnd)) {
            Swal.fire('Error', 'Fecha de Inicio debe ser menor que Fecha de Fin');
        }
        else if (title.trim().length < 2) {
            setIsTitleValid(false);
        }
        else {
            if (activeEvent) {
                dispatch(eventUpdated(formValues));
            }
            else {
                dispatch( eventAddNew({
                    ...formValues,
                    id: new Date().getTime(),
                    user: {
                        _id: '1234',
                        name: 'Iván'
                    }
                }));
            }

            setIsTitleValid(true);
            closeModal();
        }
    }

    const closeModal = () => {
        dispatch(uiCloseModal());
        dispatch(eventClearActiveEvent());
        setFormValues(initEvent);
    }

    return (
        <Modal
          isOpen={ modalOpen }
          onRequestClose={ closeModal }
          style={ customStyles }
          closeTimeoutMS={ 200 }
          className="modal"
          overlayClassName="modal-fondo"
        >

            <h1> { activeEvent ? 'Edit Event' : 'New Event' } </h1>
            <hr />
            <form 
                className="container"
                onSubmit={ handleSubmit }
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        onChange={ handleStartDateChange }
                        value={ dateStart }
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        onChange={ handleEndDateChange }
                        value={ dateEnd }
                        minDate={ dateStart }
                        className="form-control"
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={ `form-control ${ !isTitleValid && 'is-invalid' }`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={ title }
                        onChange={ handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        name="notes"
                        value={ notes }
                        onChange={ handleInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>

    )
}
