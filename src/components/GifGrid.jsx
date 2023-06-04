import React from 'react'
import { GifItem } from './GifItem'
import { useFetchGif } from '../hooks/useFetch'
import { Row, CardGroup } from 'reactstrap'

export const GifGrid = ({ category }) => {
    // using the custom hook
    const {images, isloading} = useFetchGif(category);
  return (
    <>
        {
            // show loading message
            isloading && (<h2>Loading...</h2>)
        }
        <CardGroup>
            <Row>
                {
                    images.map( images =>(
                        <GifItem 
                        key={images.id}
                            {...images}
                        />
                        ))
                    }
            </Row>
        </CardGroup>
    </>
  )
}
