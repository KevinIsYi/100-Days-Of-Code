import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    
    console.log("Recall showIncrement");
    return (
        <button onClick={() => increment(5)}> + 1</button>
    )
})
