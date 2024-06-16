import React from 'react'
import Menu from '../components/menu'
import "./styles/likedmusics.css"
import LikedMusic from '../components/likedmusic'

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
            <span className='class-temporaria-liked'></span>
          </div>
          <LikedMusic index="1" />
          <LikedMusic index="2" />
          <LikedMusic index="3" />
          <LikedMusic index="4" />
          <LikedMusic index="5" />
          <LikedMusic index="6" />
        </div>
    
      </div>
    </div>
  )
}

export default Likedmusics;