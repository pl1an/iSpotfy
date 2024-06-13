import React from 'react'
import Menu from '../components/menu'
import "./styles/artists.css"
import ArtistContainer from '../components/artist-container'

const Artists = () => {
  return (
    <div className='artists'>
        <Menu />
        <div className='artists-right'>
            <h1>Artistas</h1>
            <div className='artists-container'>
              <ArtistContainer name="Nome Cantor" img="src\assets\react.svg"/>
              <ArtistContainer />
              <ArtistContainer />
              <ArtistContainer />
              <ArtistContainer />
            </div>
            <div className='artists-container'>
              <ArtistContainer />
              <ArtistContainer />
              <ArtistContainer />
              <ArtistContainer />
              <ArtistContainer />
            </div>
        </div>
    </div>
  )
}

export default Artists