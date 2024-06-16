import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/menu';
import "./styles/mainpage.css";
import Music from '../components/music';

const Mainpage = () => {
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
            <span class="material-symbols-outlined">favorite</span>
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
            <span className='class-temporaria'></span>
          </div>
          <Music index="1" name="The Zephyr Song" singer="Red Hot Chilli Pepers" album="By The Way"/>
          <Music index="2" name="Talk" singer="Coldplay" album="X&Y"/>
          <Music index="3" name="musica 3" singer="cantor 3" album="album 3"/>
          <Music index="4" name="musica 4" singer="cantor 4" album="album 4"/>
          <Music index="5" name="musica 5" singer="cantor 5" album="album 5"/>
        </div>

      </div>
    </div>
  );
};

export default Mainpage;
