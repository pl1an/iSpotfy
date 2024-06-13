import React from 'react'
import "./artist-container.css"

function ArtistContainer({ name, img }) {
  return (
    <div className='artist-container'>
        <img src={img} alt="imagem artista" className='img-artist'/>
        <div className='title-artist'>
            <h1>{name}</h1>
            <p>Artista</p> 
        </div>
    </div>
  )
}

export default ArtistContainer