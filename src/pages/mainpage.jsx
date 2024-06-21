import React from 'react';
import Menu from '../components/menu';
import "./styles/mainpage.css";
import Playlist from '../components/playlist';

const Mainpage = () => {

  return (
    <div className='main-page'>
      <Menu />
      <Playlist playlistname={"Daily Mix 1"} localname={"dailymix1"} className='main-page'/>
    </div>
  );
};

export default Mainpage;
