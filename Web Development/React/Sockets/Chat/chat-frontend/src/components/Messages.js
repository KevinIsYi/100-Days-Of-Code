import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'
import { IncomingMessage } from './IncomingMessage'
import { OutgoingMessage } from './OutgoingMessage'
import { SendMessage } from './SendMessage'

export const Messages = () => {

    const { chatState: { messages } } = useContext(ChatContext);
    const { auth: { uid } } = useContext(AuthContext);

    return (
        <div className="mesgs">
            <div className="msg_history">
                {
                    messages.map(msg => (
                        (msg.to === uid)
                            ? (
                                <IncomingMessage
                                    key={msg._id}  
                                    msg={msg}
                                />
                            ) : (
                                <OutgoingMessage
                                    key={msg._id}
                                    msg={ msg }
                                />
                            )
                        )   
                    )
                }
            </div>
            <SendMessage />
        </div>
    )
}
