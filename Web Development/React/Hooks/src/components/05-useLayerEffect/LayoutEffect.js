import React, { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0]; // If not null
    
    const pTag = useRef();

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect().width);
        console.log(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <>
            <h1>Layout Effects</h1>
            <blockquote className="blockquote text-right">
            <p ref={pTag} className="mb-0">{ quote }</p>
            </blockquote>
            <button className="btn btn-primary" onClick={ increment }>Next Quote</button>
        </>
    )
}