import React from 'react'
import "./likedmusic.css"

function LikedMusic({ index }) {
  let name = localStorage.getItem(`music${index}name`);
  let singer = localStorage.getItem(`music${index}singer`);
  let album = localStorage.getItem(`music${index}album`);

  return (
    <div className='music-container'>
        <div className='index'>
            <h1>{index}</h1>
        </div>
        <div className='music-title'>
            <h1>{name}</h1>
            <h2>{singer}</h2>
        </div>
        <div className='album-title'>
            <h1>{album}</h1>
        </div>
        <div className='music-icons'>
          
        </div>
    </div>
  )
}

export default LikedMusic