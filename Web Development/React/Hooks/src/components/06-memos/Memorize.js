import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import '../02-useEffect/effects.css';


export const Memorize = () => {
    
    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter: <Small value={counter} /></h1>
            <button onClick={ increment }>+ 1</button>
            <button onClick={() => setShow(!show)}>HIDE | SHOW {JSON.stringify(show)}</button>
        </>
    )
}
