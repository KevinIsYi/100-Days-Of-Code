import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    const [ counter, setCounter] = useState(value);
    console.log(counter);

    const sum = (e) => {
        setCounter(counter + 1);
        //setCounter((c) => c + 1);
    }
    const reset = (e) => {
        setCounter(value);
    }
    const rest = (e) => {
        setCounter(counter - 1);
    }
    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>

            <button onClick={sum}>+1</button>
            <button onClick={reset}>RESET</button>
            <button onClick={rest}>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;