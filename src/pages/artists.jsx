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
              <ArtistContainer name="cantor 1" img="src\assets\react.svg" id="cantor1"/>
              <ArtistContainer name="cantor 2" img="src\assets\react.svg" id="cantor2"/>
              <ArtistContainer name="cantor 3" img="src\assets\react.svg" id="cantor3"/>
              <ArtistContainer name="cantor 4" img="src\assets\react.svg" id="cantor4"/>
              <ArtistContainer name="cantor 5" img="src\assets\react.svg" id="cantor5"/>
            </div>
            <div className='artists-container'>
              <ArtistContainer name="cantor 6" img="src\assets\react.svg" id="cantor6"/>
              <ArtistContainer name="cantor 7" img="src\assets\react.svg" id="cantor7"/>
              <ArtistContainer name="cantor 8" img="src\assets\react.svg" id="cantor8"/>
              <ArtistContainer name="cantor 9" img="src\assets\react.svg" id="cantor9"/>
              <ArtistContainer name="cantor 10" img="src\assets\react.svg" id="cantor10"/>
            </div>
        </div>
    </div>
  )
}

export default Artists