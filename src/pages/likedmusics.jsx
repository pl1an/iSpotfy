import React from 'react'
import Menu from '../components/menu'
import "./styles/likedmusics.css"

const Likedmusics = () => {
  return (
    <div className='liked-musics'>
        <Menu />
        <div className='liked-musics-right'>
            <h1>Músicas Curtidas</h1>
        </div>
    </div>
  )
}

export default Likedmusics