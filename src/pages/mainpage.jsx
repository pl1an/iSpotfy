import React, { useState } from 'react';
import "./styles/mainpage.css";
import api from '../api';
import { set_newsong } from '../components/local_storage_handler';
import Playlist from '../components/playlist';
import Menu from '../components/menu';

const Mainpage = () => {
  const generatedailymix = () => {
    const mixsize = Math.floor(Math.random() * 20);
    if(!JSON.parse(localStorage.getItem("dailylogin"))){
      localStorage.setItem("dailymix1", "");
      api.get("/songs").then(response => {
        console.log(response);
        for (let i = 0; i < mixsize; i++) {
          const element = response.data[Math.floor(Math.random()*response.data.length)];
          set_newsong("dailymix1", element.title, element.artist, "", false, false);
        }
        window.location.reload();
      }).catch(error => {
        console.log(error);
      })
      localStorage.setItem("dailylogin", true);
    }
  }
  
  generatedailymix();

  return (
    <div className='main-page'>
      <Menu />
      <Playlist playlistname={"Daily Mix 1"} localname={"dailymix1"} className='main-page' img="\src\assets\fotoexemplo.jpeg"/>
    </div>
  );
};

export default Mainpage;

