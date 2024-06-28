import React, { useEffect, useState }  from 'react'
import Menu from '../components/menu'
import "./styles/artists.css"
import ArtistContainer from '../components/artist-container'
import api from '../api'

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    api.get('/api/artists')
      .then(response => {
        setArtists(response.data);
      })
      .catch(error => {
        console.log('Erro ao buscar artistas', error);
        alert('Erro ao buscar artistas');
      });
  }, []);
  
  
  return (
    <div className='artists'>
        <Menu />
        <div className='artists-right'>
            <h1>Artistas</h1>
            <div className='artists-container'>
              {artists.map((artist) => (
                <ArtistContainer
                  key={artist.id}
                  name={artist.name}
                  img={artist.image}
                  id={artist.id}
                />
              ))}
            </div>
        </div>
    </div>
  );
}

export default Artists