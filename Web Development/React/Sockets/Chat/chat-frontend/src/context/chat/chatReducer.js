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
            break;
        default:
            return state;
    }

    return state;
}