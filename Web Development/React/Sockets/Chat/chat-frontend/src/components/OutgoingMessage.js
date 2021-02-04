import React from 'react';
import { horaMes } from '../helpers/horaMes';

export const OutgoingMessage = ({ msg }) => {
    const { message, createdAt } = msg;
    const hourDate = horaMes(createdAt);

    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{message}</p>
                <span className="time_date"> {hourDate}</span>
            </div>
        </div>
    )
}
