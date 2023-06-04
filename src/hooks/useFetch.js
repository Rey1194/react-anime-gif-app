import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGif = (category) => {
    // useState Hook
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // async function
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect( ()=> {
        getImages();
    }, [] );

    return {
        images: images,
        isLoading: isLoading,
    }
}