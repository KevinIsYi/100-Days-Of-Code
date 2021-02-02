import { createContext, useCallback, useState } from 'react';
import { fetchNoToken } from '../helpers/fetch';

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

    const verifyToken = useCallback(() => {

    }, []);

    const logout = () => {

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
