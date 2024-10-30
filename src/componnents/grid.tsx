import React, { useState } from 'react'
import '../css/gris.css'
import ImageDetails from './ImageDetails';
export interface Photo {
    id: string;
    urls: {
        regular: string;
    };
  }
  export interface Photos {
    photos : Photo[];
  }


export default function Grid({photos}:Photos) {
    const [popup,setPopup] = useState("")
    const [img,setImg] = useState<Photo | null >(null)
    const imageDetails = (photo:Photo) => {
        console.log(photos)
        setPopup("photo")
        setImg(photo)
    }
  return (    
    <>     
      <div className="photo-grid">
        {photos.map(photo => (
          <div key={photo.id} className="photo-container">
            <img src={photo.urls.regular} alt="Unsplash photo" onClick={() => imageDetails(photo)}/>
            <button className='like'>👍</button>
          </div>
        ))}
      </div>  
      {popup && <div className="image-details">
        <ImageDetails image = {img!} setPopup = {setPopup}/>                   
        </div>}
      </> 
  )
}
