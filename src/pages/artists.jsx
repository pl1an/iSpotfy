import React, { useEffect, useState }  from 'react'
import Menu from '../components/menu'
import "./styles/artists.css"
import ArtistContainer from '../components/artist-container'
import api from '../api'

const Artists = () => {
  const [artists1, setArtists1] = useState([]);
  const [artists2, setArtists2] = useState([]);

  useEffect(() => {
    api.get('/artists/')
      .then(response => {
        setArtists1(response.data.slice(0, 5));
        setArtists2(response.data.slice(6, 11));
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
              {artists1.map((artist) => (
                <ArtistContainer
                  key={artist.id}
                  name={artist.name}
                  img={artist.image}
                  id={artist.id}
                />
              ))}
            </div>
            <div className='artists-container'>
              {artists2.map((artist) => (
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