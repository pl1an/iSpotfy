import React, { useEffect, useLayoutEffect } from 'react'
import "./music.css"
import { useState } from 'react';

function Music({ name, singer, album, index }) {
  
  const [fav, setFav] = useState("material-symbols-outlined");


  function LikeBtn() {
    if (fav == "material-symbols-outlined fav") {
      setFav("material-symbols-outlined");
      localStorage.removeItem(`music${index}name`);
      localStorage.removeItem(`music${index}singer`);
      localStorage.removeItem(`music${index}album`);
    } else {
      setFav("material-symbols-outlined fav");
      localStorage.setItem(`music${index}name`, name);
      localStorage.setItem(`music${index}singer`, singer);
      localStorage.setItem(`music${index}album`, album);
    }
  }

  useLayoutEffect(() => {
    if (localStorage.getItem(`music${index}name`)) {
      setFav("material-symbols-outlined fav");
    } else {
      setFav("material-symbols-outlined");
    }
  }, []);

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
            <span class={fav} id={index}>favorite</span>
          </button>
        </div>
    </div>
  )
}

export default Music