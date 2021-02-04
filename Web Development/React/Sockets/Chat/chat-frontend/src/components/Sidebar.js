import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext'
import { SideBarChatItem } from './SideBarChatItem'

export const Sidebar = () => {

    const { chatState: { users } } = useContext(ChatContext);
    const { auth: { uid } } = useContext(AuthContext);

    return (
        <div className="inbox_chat">
            {
                users.filter(user => user.uid !== uid).map(user => 
                    <SideBarChatItem
                        key={user.uid}
                        user={ user }
                    /> 
                )
            }
            <div className="extra_space" />
        </div>
    )
}
