import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { SocketContext } from '../context/SocketContext';

export const SendMessage = () => {

    const [message, setMessage] = useState('');
    const { socket } = useContext(SocketContext);
    const { auth: { uid } } = useContext(AuthContext);
    const { chatState: { activeChat } } = useContext(ChatContext);

    const handleInputChange = ({ target }) => {
        setMessage(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (message.trim().length > 0) {
            
            socket.emit('one-to-one-message', {
                from: uid,
                to: activeChat,
                message
            });

            setMessage('');
        }
    }

    return (
        <form
            onSubmit={onSubmit}
        >
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input
                        type="text"
                        className="write_msg"
                        placeholder="Mensaje..."
                        value={message}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-sm-3 text-center">
                    <button className="msg_send_btn mt-3" type="submit">
                        Enviar
                    </button>
                </div>
            </div>
        </form>
    )
}
