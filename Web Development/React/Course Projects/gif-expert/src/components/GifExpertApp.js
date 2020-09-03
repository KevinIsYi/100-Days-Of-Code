import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch"]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

            <ul>
                {
                    categories.map((category) => 
                        <GifGrid 
                        key={category}
                        category={category} />
                    )
                }
            </ul>
        </>
    );
}


