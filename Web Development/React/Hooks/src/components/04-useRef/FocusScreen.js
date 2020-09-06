import React, { useRef, useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    /*
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }
    */
    /*
    return (
        <div>
            <h1>FocusScreen</h1>
            <input ref={inputRef} className="form-control" placeholder="Your name"></input>
        
            <button className="btn btn-primary" onClick={handleClick}>Focus</button>
        </div>
    )
    */

    const [show, setShow] = useState(false);

    return(
        <>
            <h1>useRef</h1>
            {show && <MultipleCustomHooks />}

            <button className="btn btn-secondary" onClick={() => {
                setShow(!show);
            }}>Show/Hide</button>

        </>
    )
}
