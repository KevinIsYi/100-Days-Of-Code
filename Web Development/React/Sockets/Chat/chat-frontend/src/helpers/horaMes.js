import moment from 'moment';

export const horaMes = (fecha) =>
    moment(fecha).format('HH:mm a | MMMM Do');