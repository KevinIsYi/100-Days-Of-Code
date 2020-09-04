import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterCustomHook = () => {
    
    const { state, increment, reset, decrement} = useCounter(100);
    
    return (
        <>
            <h1>Custom Hook: { state }</h1>
            <button onClick={() => increment(2)} className="btn btn-primary">+ 1</button>
            <button onClick={reset} className="btn btn-secondary">reset</button>
            <button onClick={decrement} className="btn btn-primary">- 1</button>
        </>
    );
}
