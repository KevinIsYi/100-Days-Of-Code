import { types } from "../../types/types";

export const chatReducer = (state, action) => {

    switch (action.type) {
        case types.loadUsers: 
            return {
                ...state,
                users: action.payload
            }
        case types.activateChat:
            if (state.activeChat !== action.payload) {
                return {
                    ...state,
                    activeChat: action.payload
                }
            }
            return state;
        case types.newMessage:
            if (state.activeChat === action.payload.from
                || state.activeChat === action.payload.to) {
                return {
                    ...state,
                    messages: [...state.messages, action.payload]
                }
            }
            return state;
        case types.loadChat:
            return {
                ...state,
                messages: action.payload
            }
        case types.logOut: {
            return {
                uid: '',
                activeChat: null,
                users: [], 
                messages: []
            }
        }
        default:
            return state;
    }

}