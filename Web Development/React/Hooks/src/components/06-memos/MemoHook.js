import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';
import '../02-useEffect/effects.css';



export const MemoHook = () => {
    
    const { counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);

    const heavyProcessMemo = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <>
            <h1>Memo Hook</h1>
            <h1>Counter: {counter}</h1>
            <hr></hr>
            <p>{ heavyProcessMemo }</p>
            <button onClick={ increment }>+ 1</button>
            <button onClick={() => setShow(!show)}>HIDE | SHOW {JSON.stringify(show)}</button>
        </>
    )
}
