import React from 'react'
import Menu from '../components/menu'
import "./styles/artists.css"

const Artists = () => {
  return (
    <div className='artists'>
        <Menu />
        <div className='artists-right'>
            <h1>Artistas</h1>
            <div className='artists-container'>
            
            </div>
        </div>
    </div>
  )
}

export default Artists