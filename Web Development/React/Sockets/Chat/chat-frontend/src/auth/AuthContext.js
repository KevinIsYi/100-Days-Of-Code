import { createContext, useCallback, useContext, useState } from 'react';
import { ChatContext } from '../context/chat/ChatContext';
import { fetchNoToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';

export const AuthContext = createContext();

const initialState = {
    uid: null,
    checking: true,
    isLogged: false,
    name: null,
    email: null
};

export const AuthProvider = ({ children }) => {
    
    const [auth, setAuth] = useState(initialState);
    const { dispatch } = useContext(ChatContext);
    
    const login = async (email, password) => {
        const resp = await fetchNoToken(
            'login',
            { email, password },
            'POST'
        );
        
        if (resp.ok) {
            const { user, token } = resp;
            const { email, name, uid } = user;
            localStorage.setItem('token', token);
            setAuth({
                checking: false,
                logged: true,
                email,
                name,
                uid
            });
        }

        return resp.ok;
    };

    const register = async (name, email, password) => {
        
        const resp = await fetchNoToken(
            'login/new',
            { name, email, password },
            'POST'
        );  

        const { ok } = resp;
        if (ok) {
            const { user, token } = resp;
            const { email, name, uid } = user;
            localStorage.setItem('token', token);
            setAuth({
                checking: false,
                logged: true,
                email,
                name,
                uid
            });
        }

        return ok;
    };

    const verifyToken = useCallback( async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            setAuth({
                uid: null,
                checking: false,
                logged: false
            });

            return false;
        }
        else {
            const resp = await fetchWithToken(
                token,
                'login/renew',
            )

            const { ok } = resp;
            if (ok) {
                const { user, token } = resp;
                const { email, name, uid } = user;
                localStorage.setItem('token', token);
                setAuth({
                    checking: false,
                    logged: true,
                    email,
                    name,
                    uid
                });
                return true;
            }
            setAuth({
                uid: null,
                checking: false,
                logged: false
            });
            return false;
        }
    }, []);

    const logout = () => {

        localStorage.removeItem('token');
        setAuth({
            checking: false,
            logged: false
        });

        dispatch({
            type: types.logOut
        });   
    };
    
    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verifyToken,
            logout
        }}>
            { children }
        </AuthContext.Provider>
    )
}
