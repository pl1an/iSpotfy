import React from 'react'
import "./artist-container.css"
import { useNavigate } from 'react-router-dom'

function ArtistContainer({ name, img, id }) {
  const navigate = useNavigate();

  function mudarTela() {
    navigate(`/artists/${id}`);
  }

  return (
    <div className='artist-container' onClick={() => mudarTela()}>
        <img src={img} alt="imagem artista" className='img-artist'/>
        <div className='title-artist'>
            <h1>{name}</h1>
            <p>Artista</p> 
        </div>
    </div>
  )
}

export default ArtistContainer