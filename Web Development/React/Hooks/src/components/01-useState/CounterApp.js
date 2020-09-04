import React, { useState } from 'react'
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 0,
        counter2: 0,
        counter3: 10 
    });

    const {counter1, counter2} = state;

    const handleClick = () => {
        setState({
            ...state,
            counter1: counter1 + 1
        });
    };

    return (
        <>
            <h1>Counter 1: { counter1 }</h1>
            <h1>Counter 2: { counter2 }</h1>
            <button className="btn btn-primary" onClick={handleClick}>+1</button>   
        </>
    )
}
