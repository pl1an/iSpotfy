import React, { useEffect, useLayoutEffect } from 'react'
import "./music.css"
import { useState } from 'react';
import { set_storage } from './local_storage_handler';

function Music({ name, singer, album, index, favorited, trashed, playlist }) {
  
  const [fav, setFav] = useState("material-symbols-outlined");
  const [hide, setHide] = useState(false);
  let stored_playlist = JSON.parse(localStorage.getItem(playlist));
  let liked_playlist = JSON.parse(localStorage.getItem('likedmusics'));

  function LikeBtn() {
    stored_playlist = JSON.parse(localStorage.getItem(playlist));
    liked_playlist = JSON.parse(localStorage.getItem('likedmusics'));
    if (fav == "material-symbols-outlined fav") {
      setFav("material-symbols-outlined");
      stored_playlist.at(index-1).fav = false;
      liked_playlist = liked_playlist.filter(element => element.name != name);
    } 
    else {
      setFav("material-symbols-outlined fav");
      stored_playlist.at(index-1).fav = true;
      if(liked_playlist) liked_playlist.push({name: name, singer: singer, album: album, fav: true, trashed: false, playlist:playlist});
      else liked_playlist = [{name: name, singer: singer, album: album, fav: true, trashed: false, playlist:playlist}];
    }
    set_storage(stored_playlist, playlist);
    set_storage(liked_playlist, 'likedmusics');
  }

  function TrashBtn() {
    liked_playlist = JSON.parse(localStorage.getItem('likedmusics'));
    stored_playlist = JSON.parse(localStorage.getItem(playlist));
    setHide(true);
    if(playlist=='likedmusics'){
      let origin_playlist = JSON.parse(localStorage.getItem(liked_playlist.at(index-1).playlist));
      origin_playlist.forEach(element => {
        if(element.name == name) element.fav = false;
      });
      set_storage(origin_playlist, liked_playlist.at(index-1).playlist);
      LikeBtn();
    }
  }

  useLayoutEffect(() => {
    if (favorited) {
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
          {playlist!='likedmusics' && (<button className='music-btn' onClick={() => LikeBtn()}>
            <span className={fav} id={index}>favorite</span>
          </button>)}
          <button className='music-btn'>
            <i className="fa-solid fa-trash-can trash-btn" onClick={() => TrashBtn()}></i>
          </button>
        </div>
    </div>
  ))
}

export default Music