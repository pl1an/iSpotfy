import React from 'react';
import "../components/menu.css";
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
      <div className='menu-title'>
        <h1>iSpotify</h1>
        <p>®</p>
      </div>
      <Link to={"/artists"} className='menu-btn'>
        <span className="material-icons icon menu-icon">trip_origin</span> Artistas
      </Link>
      <Link to={"/mainpage"} className='menu-btn'>
        <span class="material-symbols-outlined ">queue_music</span> Playlist diária
      </Link>
      <Link to={"/likedmusics"} className='menu-btn'>
        <span className="material-icons icon menu-icon">favorite</span> Músicas Curtidas
      </Link>
      <Link to={"/account"} className='menu-btn'>
        <span className="material-icons icon menu-icon">account_circle</span> Minha Conta
      </Link>
      <div className='logout'>
        <Link to={"/"} className='logout-btn'>
          <span className="material-icons icon menu-icon">logout</span> Logout
        </Link>
      </div>
    </div>
  );
}

export default Menu;
