import Swal from 'sweetalert2';

import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => { // dispatch viene desde thunk, dentro del cuerpo ya pueden haber acciones asíncronas
        dispatch(startLoading());
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                const { displayName, uid } = user;
                dispatch(login(uid, displayName));
            })
            .catch(e => {
                Swal.fire('Error', e.message, 'error');
            });

        dispatch(finishLoading());
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
};

export const startRegisterWithEmailAndPassword = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({ user }) => {
                await user.updateProfile({
                    displayName: name
                });

                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {
                Swal.fire('Error', e.message, 'error');
            });

    }
};


export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
});