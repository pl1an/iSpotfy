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
    const [musics_response, setMusics_response] = useState([]);


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
          setMusics_response(response.data);
          musicsLocalStorage();
        })
        .catch(error => {
          console.log('Erro ao buscar musicas', error);
          alert('Erro ao buscar musicas');
        });
    }, []);

    function musicsLocalStorage() {
      let arrayMusics = [];
      for (let i = 0; i < musics_response.length;  i++){
        let music = {name: `${musics_response[i].title}`, singer: `${name}`, album: "", fav: false, trashed: false, playlist: `${name}`};
        arrayMusics.push(music);
      }
      set_storage(arrayMusics, `${name}`);
    }


  return (
    <div>
        <Menu />
        <Playlist playlistname={name} localname={name} img={img}/>
    </div>
  )
}

export default Artistmusics