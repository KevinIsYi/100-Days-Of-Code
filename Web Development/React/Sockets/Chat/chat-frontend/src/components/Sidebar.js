import React, { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import { SideBarChatItem } from './SideBarChatItem'

export const Sidebar = () => {

    const { chatState:{ users } } = useContext(ChatContext);
    
    return (
        <div className="inbox_chat">
            {
                users.map(user => (
                    <SideBarChatItem
                        key={user.uid}
                        user={ user }
                    />
                )) 
            }
            <div className="extra_space" />
        </div>
    )
}
