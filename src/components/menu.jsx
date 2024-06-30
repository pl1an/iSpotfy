import React from 'react';
import "../components/menu.css";
import { Link } from 'react-router-dom';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    api.post('/users/logout', {}).then(response => {
      console.log(response);
      localStorage.setItem('userpassword', '');
      localStorage.removeItem('likedmusics');
      navigate("/");
    }).catch(error => {console.log(error)});
  }

  return (
    <div className='menu'>
      <div className='menu-title'>
        <h1>iSpotify</h1>
        <p>®</p>
      </div>
      <Link to={"/artists"} className='menu-btn trip-origin'>
        <span className="material-icons icon menu-icon ">trip_origin</span> Artistas
      </Link>
      <Link to={"/mainpage"} className='menu-btn queue-music'>
        <span className="material-symbols-outlined icon">queue_music</span> Playlist diária
      </Link>
      <Link to={"/likedmusics"} className='menu-btn'>
        <span className="material-icons icon menu-icon">favorite</span> Músicas Curtidas
      </Link>
      <Link to={"/account"} className='menu-btn'>
        <span className="material-icons icon menu-icon">account_circle</span> Minha Conta
      </Link>
      <div className='logout'>
        <button className='logout-btn' onClick={() => logoutHandler()}>
          <span className="material-icons menu-icon">logout</span> Logout
        </button>
      </div>
    </div>
  );
}

export default Menu;
