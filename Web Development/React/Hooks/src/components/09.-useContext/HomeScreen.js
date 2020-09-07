import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    const userContext = useContext(UserContext);

    console.log(userContext);

    return (
        <>
            <h1>Home Screen</h1>
            <p>{JSON.stringify(userContext, null, 0)}</p>
        </>
    )
}