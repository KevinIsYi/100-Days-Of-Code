import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => { // dispatch viene desde thunk, dentro del cuerpo ya pueden haber acciones asíncronas
        setTimeout(() => {
            dispatch(login(123, "Pedrito"));
        }, 3500);
    }
};

export const startWithGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                const { uid, displayName } = user;
                dispatch(
                    login(uid, displayName)
                );
            });
    }
}

export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});