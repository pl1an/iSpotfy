import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Menu from '../components/menu';
import "./styles/mainpage.css";
import Music from '../components/music';

const Mainpage = () => {
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
    if(localStorage.getItem('dailymix1')) Loadmix("dailymix1");
  })

  return (
    <div className='main-page'>
      <Menu />
      <div className='main-page-right'>
        <div className='playlist-top'>
          <div className='img-container'>
            <img src="\src\assets\fotoexemplo.jpeg" alt="capa-album" className='img-playlist' />
          </div>
          <div className='playlist-title'>
            <p>Playlist</p>
            <h1>Daily Mix 1</h1>
            <p>artista 01, artista 02 e mais</p>
            <div className='playlist-title-bottom'>
              <p>Spotify - X músicas</p>
              <h2>1h 7min</h2>
            </div>
          </div>
        </div>

        <div className='playlist-middle'>
          <button className='play-btn'>
            <span className="material-icons">play_arrow</span>
          </button>
          <button className='icon-btn'>
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <button className='icon-btn'>
            <span className="material-icons-outlined">download_for_offline</span>
          </button>
          <button className='icon-btn'>
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>

        <div className='playlist-bottom'>
          <div className='playlist-bottom-title'>
            <h1>#título</h1>
            <h2>álbum</h2>
            <span className="material-symbols-outlined">schedule</span>
          </div>
          <div id="songholder">
          </div>
        </div>

      </div>
    </div>
  );
};

export default Mainpage;
