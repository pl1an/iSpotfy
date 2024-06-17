import React, { useLayoutEffect } from 'react'
import "./likedmusic.css"

function LikedMusic({ index, id }) {
  let name = localStorage.getItem(`music${index}name`);
  let singer = localStorage.getItem(`music${index}singer`);
  let album = localStorage.getItem(`music${index}album`);

  useLayoutEffect(() => {
    if (localStorage.getItem(`music${index}name`)) {
      document.getElementById(id).style.display = 'flex';
    } else {
      document.getElementById(id).style.display = 'none';
    }
  }, [])

  function TrashButton() {
    localStorage.removeItem(`music${index}name`);
    localStorage.removeItem(`music${index}singer`);
    localStorage.removeItem(`music${index}album`);
    document.getElementById(id).style.display = 'none';
  }


  return (
    <div className='music-container' id={id}>
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
            <i className="fa-solid fa-trash-can trash-btn" onClick={() => TrashButton()}></i>
          </button>
        </div>
    </div>
  )
}

export default LikedMusic