import React /*, { useEffect, useState }*/ from 'react'
//import { getGif } from "../helpers/getGifs"; 
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const {data, loading} = useFetchGifs(category);

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGif(category)
    //         .then(imgs => setImages(imgs))
    // }, [category]); // This instruction will be executed when content is rended the first time

    return (
        <>
            <h3>{category}</h3>
            <ul>
                {
                    data.map(({id, url}) => 
                        <li key={id}>  
                            <GifGridItem url={url} />
                        </li>
                    )
                }
            </ul>
        </>
    )
}
