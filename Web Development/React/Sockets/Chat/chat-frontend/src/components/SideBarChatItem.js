import React, { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext';
import { fetchWithToken } from '../helpers/fetch';
import { scrollToBottom } from '../helpers/scrollToBottom';
import { types } from '../types/types';

export const SideBarChatItem = ({ user }) => {
    
    const { online, name, uid } = user;
    const { chatState: { activeChat }, dispatch } = useContext(ChatContext);
    const token = localStorage.getItem('token');

    const selectChat = async () => {
        dispatch({
            type: types.activateChat,
            payload: uid
        });

        if (uid !== activeChat) {
            const resp = await fetchWithToken(token, `messages/${uid}`);
            dispatch({
                type: types.loadChat,
                payload: resp.messages
            });

            scrollToBottom('messages');
        }
    }

    return (
        <div
            className={`chat_list ${ (uid === activeChat) && 'active_chat'}`}
            onClick={ selectChat }
        >
            <div className="chat_people">
                <div className="chat_img"> 
                    <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>{ name }</h5>
                    {
                        online ? (
                            <span className="text-success">Online</span>
                        ) : (
                            <span className="text-danger">Offline</span>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
