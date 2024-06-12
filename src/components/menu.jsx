import React from 'react'
import "../components/menu.css"
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu'>
        <div className='menu-title'>
            <h1>iSpotify</h1>
            <p>®</p>
        </div>
        <Link to={"/artists"} className='menu-btn'>Artistas</Link>
        <Link to={"/likedmusics"} className='menu-btn'>Músicas Curtidas</Link>
        <Link to={"/account"} className='menu-btn'>Minha Conta</Link>
        <div className='logout'>
          <Link to={"/login"} className='logout-btn'>Logout</Link>
        </div>
    </div>
  )
}

export default Menu