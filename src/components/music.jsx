import React, { useEffect, useLayoutEffect } from 'react'
import "./music.css"
import { useState } from 'react';

function Music({ name, singer, album, index }) {
  
  const [fav, setFav] = useState("material-symbols-outlined");
  const [hide, setHide] = useState(false);


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

  function TrashBtn() {
    if (fav == "material-symbols-outlined fav") {
      setFav("material-symbols-outlined");
      localStorage.removeItem(`music${index}name`);
      localStorage.removeItem(`music${index}singer`);
      localStorage.removeItem(`music${index}album`);
    }
    setHide(true);
  }

  useLayoutEffect(() => {
    if (localStorage.getItem(`music${index}name`)) {
      setFav("material-symbols-outlined fav");
    } else {
      setFav("material-symbols-outlined");
    }
  }, []);

  return ( !hide && (
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
            <span className={fav} id={index}>favorite</span>
          </button>
          <button className='music-btn'>
            <i className="fa-solid fa-trash-can trash-btn" onClick={() => TrashBtn()}></i>
          </button>
        </div>
    </div>
  ))
}

export default Music