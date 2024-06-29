import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../components/menu'
import Playlist from '../components/playlist'
import api from '../api'

function Artistmusics() {
    const { id } = useParams();
    const [img, setImg] = useState();

    useEffect(() => {
      api.get(`/artists/${id}`)
        .then(response => {
          console.log(response.data);
          setImg(response.data.image);
        })
        .catch(error => {
          console.log('Erro ao buscar artistas', error);
          alert('Erro ao buscar artistas');
        });
    }, []);



  return (
    <div>
        <Menu />
        <Playlist playlistname={id} localname={id} img={img}/>
    </div>
  )
}

export default Artistmusics