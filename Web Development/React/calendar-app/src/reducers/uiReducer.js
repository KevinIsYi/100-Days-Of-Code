const inicialState = {
    modalOpen: false,
}

export const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }
        default:
            return state;
    }
}