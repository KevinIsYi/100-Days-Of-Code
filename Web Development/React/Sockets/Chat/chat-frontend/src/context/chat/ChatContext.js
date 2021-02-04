import { createContext, useReducer } from 'react';
import { chatReducer } from './chatReducer';

export const ChatContext = createContext();

const initialState = {
    uid: '',
    activeChat: null, // UID 
    users: [], 
    messages: [] // Selected chat
}

export const ChatProvider = ({ children }) => {

    const [chatState, dispatch] = useReducer(chatReducer, initialState);

    return (
        <ChatContext.Provider value={{
            chatState,
            dispatch
        }}>
            { children }
        </ChatContext.Provider>
    )
}
