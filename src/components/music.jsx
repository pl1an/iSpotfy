import React from 'react'
import "./music.css"

function Music({ name, singer, album, index }) {
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
          <button className='music-btn'>
            <span class="material-symbols-outlined">favorite</span>
          </button>
        </div>
    </div>
  )
}

export default Music