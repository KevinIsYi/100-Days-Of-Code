import React from 'react'
import { SideBarChatItem } from './SideBarChatItem'

export const Sidebar = () => {

    const chats = [1, 2, 3, 4, 5, 6, 7];
    return (
        <div className="inbox_chat">
            {
                chats.map(chat => (
                    <SideBarChatItem key={ chat } />
                )) 
            }
            <div className="extra_space" />
        </div>
    )
}