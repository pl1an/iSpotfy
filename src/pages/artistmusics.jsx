import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../components/menu'
import Playlist from '../components/playlist'
import api from '../api'
import { set_storage } from '../components/local_storage_handler'

function Artistmusics() {
    const { id } = useParams();
    const [img, setImg] = useState();
    const [name, setName] =useState ();


    useEffect(() => {
      api.get(`/artists/${id}`)
        .then(response => {
          setImg(response.data.image);
          setName(response.data.name);
        })
        .catch(error => {
          console.log('Erro ao buscar artistas', error);
          alert('Erro ao buscar artistas');
        });
    }, []);


    useEffect(() => {
      api.get(`/songs/artist/${id}`)
        .then(response => {
          let arrayMusics = [];
          for (let i = 0; i < response.data.length;  i++){
            let music = {name: `${response.data[i].title}`, singer: ``, album: "", fav: false, trashed: false, playlist: `${name}`};
            arrayMusics.push(music);
          }
          set_storage(arrayMusics, `${id}`);
        })
        .catch(error => {
          console.log('Erro ao buscar musicas', error);
          alert('Erro ao buscar musicas');
        });
    }, []);


  return (
    <div>
        <Menu />
        <Playlist playlistname={name} localname={id} img={img}/>
    </div>
  )
}

export default Artistmusics