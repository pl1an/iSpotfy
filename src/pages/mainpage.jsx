import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/menu'
import "./styles/mainpage.css"

const Mainpage = () => {
  return (
    <div className='main-page'>
      <Menu />
      <div className='main-page-right'>
        <div className='playlist-top'>
          <div className='img-container'>
            <img src="" alt="capa-album" />
          </div>
          <div className='playlist-title'>
            <p>Playlist</p>
            <h1>Daily Mix 1</h1>
            <p>artista 01, artista 02 e mais</p>
            <div className='playlis-title-bottom'>
              <p>Spotify - X músicas</p>
              <h2>1h 7min</h2>
            </div>
          </div>
        </div>

        <div className='playlist-middle'>
          
        </div>

        <div className='playlist-bottom'>

        </div>

      </div>
    </div>
  )
}

export default Mainpage