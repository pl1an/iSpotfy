import React from 'react'
import "../components/menu.css"

const Menu = () => {
  return (
    <div className='menu'>
        <div className='menu-title'>
            <h1>iSpotify</h1>
            <p>®</p>
        </div>
        <button className='menu-btn'>
            <h2>Artistas</h2>
        </button>
        <button className='menu-btn'>
            <h2>Músicas Curtidas</h2>
        </button>
        <button className='menu-btn'>
            <h2>Minha Conta</h2>
        </button>
        <div className='logout'>
            <button className='logout-btn'>
                <h2>Logout</h2>
            </button>
        </div>
    </div>
  )
}

export default Menu