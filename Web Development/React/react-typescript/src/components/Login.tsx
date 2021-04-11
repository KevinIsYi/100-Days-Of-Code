import { useEffect, useReducer } from 'react';

interface AuthState {
    validando: boolean;
    token: string | null;
    nombre: string;
};

const initialState: AuthState = {
    validando: true,
    token: null,
    nombre: ''
};

type LoginPayload = {
    nombre: string
}

type AuthAction = 
    { type: 'logout' } | 
    { type: 'login', payload: LoginPayload}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: ''
            }
        case 'login':
            return {
                validando: false,
                token: '123456',
                nombre: action.payload.nombre   
            }
        default:
            return state;
    }
}

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState);
    const { validando, token, nombre } = state;

    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: 'logout'
            });
        }, 1500);
    }, []);

    const logout = (): void => {
        dispatch({
            type: 'logout'
        });
    }

    const login = (): void => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Kevin'
            }
        });
    }

    return (
        <>
            <h3>Login</h3>
            {
                validando ? (
                    <div className="alert alert-info">
                        Validando...
                    </div>
                ) : token ? (
                        <>
                            <div className="alert alert-success">
                                Autenticado como { nombre }
                            </div>
                            <button 
                                className="btn btn-danger"
                                onClick={logout}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="alert alert-danger">
                                No Autenticado
                            </div>
                            <button 
                                className="btn btn-primary"
                                onClick={login}
                            >
                                Login
                            </button>
                        </>
                    )
            }
        </>
    )
}
