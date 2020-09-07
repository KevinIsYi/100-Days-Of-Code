import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);
    
    return (
        <>
            <h1>Login Screen</h1>
            <button 
                className="btn btn-primary"
                onClick={() => setUser({id: 123, name: "Peach"})}
            >
                Login
            </button>
        </>
    )
}