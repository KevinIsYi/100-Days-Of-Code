import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h1>About Screen</h1> 
            <p>{JSON.stringify(user, null, 3)}</p>
            <button className="btn btn-warning" onClick={() => setUser({})}>Log Out</button>  
        </>
    )
}
