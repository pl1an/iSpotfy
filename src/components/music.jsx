import React from 'react'
import "./music.css"

function Music({ name, singer, album, index }) {
  
  function LikeBtn() {
    const btn = document.getElementById(index);
    if (btn.classList.contains('fav')) {
      btn.classList.remove('fav');
      localStorage.removeItem(`music${index}name`);
      localStorage.removeItem(`music${index}singer`);
      localStorage.removeItem(`music${index}album`);
    } else {
      btn.classList.add('fav');
      localStorage.setItem(`music${index}name`, name);
      localStorage.setItem(`music${index}singer`, singer);
      localStorage.setItem(`music${index}album`, album);
    }
  }

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
          <button className='music-btn' onClick={() => LikeBtn()}>
            <span class="material-symbols-outlined" id={index}>favorite</span>
          </button>
        </div>
    </div>
  )
}

export default Music