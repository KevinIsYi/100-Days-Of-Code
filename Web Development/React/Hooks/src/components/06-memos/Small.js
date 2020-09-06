import React, { memo } from 'react'

export const Small = React.memo(({ value }) => {
    console.log("a VER");
    return (
        <small>
            {value}
        </small>
    )
});
