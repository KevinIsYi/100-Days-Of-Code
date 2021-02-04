import React from 'react';
import { horaMes } from '../helpers/horaMes';

export const IncomingMessage = ({ msg }) => {
    const { message, createdAt } = msg;
    const hourDate = horaMes(createdAt);

    return (
        <div className="incoming_msg">
            <div className="incoming_msg_img">
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    <p>{message}</p>
                    <span className="time_date"> {hourDate}</span>
                </div>
            </div>
        </div>
    )
}
