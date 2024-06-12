import React from 'react'
import Menu from '../components/menu'
import "./styles/likedmusics.css"

const Likedmusics = () => {
  return (
    <div className='liked-musics'>
        <Menu />
        <div className='liked-musics-right'>
            Músicas Curtidas
        </div>
    </div>
  )
}

export default Likedmusics