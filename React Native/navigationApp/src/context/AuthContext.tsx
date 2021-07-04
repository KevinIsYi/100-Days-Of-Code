import React, { createContext } from 'react';
import { useReducer } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
};

export const authInitialState: AuthState = {
    isLoggedIn: false,
};

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (name: string) => void;
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({
            type: 'changeFavIcon',
            payload: iconName
        });
    }

    const signIn = () => {
        dispatch({
            type: 'signIn'
        });
    }
    
    const logOut = () => {
        dispatch({
            type: 'logout'
        });
    }

    const changeUsername = (name: string) => {
        dispatch({
            type: 'changeUsername',
            payload: name
        });
    } 

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logOut,
            changeFavoriteIcon,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    );
};
