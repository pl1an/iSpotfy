import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Menu from '../components/menu'
import "./styles/likedmusics.css"
import Music from '../components/music'

const Likedmusics = () => {
  function Loadmix(mixname){
    const rootElement = document.getElementById('songholder');
    const root = ReactDOM.createRoot(rootElement);
    var rendered_songs = [];
    var indexx=0;
    const load_storage = JSON.parse(localStorage.getItem(mixname));
    console.log(load_storage, typeof(load_storage));
    load_storage.forEach(element => {
      indexx++; 
      rendered_songs.push(<Music index={indexx.toString()} name={element.name} album={element.album} singer={element.singer} playlist={mixname} trashed={element.trashed} favorited={element.fav}></Music>)
    });
    root.render(rendered_songs);
  }

  useEffect(() => {
    if(localStorage.getItem('likedmusics')) Loadmix('likedmusics');
  })

  return (
    <div className='liked-musics'>
      <Menu />
      <div className='liked-musics-right'>
        <div className='liked-top'>
          <div className='img-liked'>
            <img src="\src\assets\musicas-curtidas.jpeg" alt="capa-curtidas" className='img-lkd' />
          </div>
          <div className='liked-title'>
            <p>Playlist</p>
            <h1>Músicas Curtidas</h1>
          </div>
        </div>

        <div className='liked-middle'>
          <button className='play-btn'>
            <span className="material-icons">play_arrow</span>
          </button>
          <button className='icon-btn'>
            <span className="material-icons-outlined">download_for_offline</span>
          </button>
        </div>

        <div className='liked-bottom'>
          <div className='liked-bottom-title'>
            <h1>#título</h1>
            <h2>álbum</h2>
            <span className="material-symbols-outlined">schedule</span>
          </div>

        <div id='songholder'></div>

        </div>
    
      </div>
    </div>
  )
}

export default Likedmusics;