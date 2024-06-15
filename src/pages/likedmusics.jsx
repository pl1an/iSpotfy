import React from 'react'
import Menu from '../components/menu'
import "./styles/likedmusics.css"
import Music from '../components/music'

const Likedmusics = () => {
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
            <p>artista 01, artista 02 e mais</p>
            <div className='liked-title-bottom'>
              <p>Spotify - X músicas</p>
              <h2>2h 23min</h2>
            </div>
          </div>
        </div>

        <div className='liked-middle'>
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

        <div className='liked-bottom'>
          <div className='liked-bottom-title'>
            <h1>#título</h1>
            <h2>álbum</h2>
            <span className='class-temporaria-liked'></span>
          </div>
          <Music />
        </div>
    
      </div>
    </div>
  )
}

export default Likedmusics;