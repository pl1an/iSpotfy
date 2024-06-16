import React from 'react'
import "./likedmusic.css"

function LikedMusic({ name, singer, album, index }) {
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