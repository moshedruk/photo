import React from 'react'
import { Photo } from './grid'
import '../css/detelse.css'
export interface props {
    image: Photo
    setPopup: (popup: string) => void;
}
export default function ImageDetails({ image, setPopup }: props) {
    return (
        <div className='pop'>
            <button className='close' onClick={() => setPopup("")}>X</button>
            <h3>Image Details</h3>
            <p>Image ID: {image.id}</p>
            <p>Image URL: {image.urls.regular}</p>
        </div>

    )
}
