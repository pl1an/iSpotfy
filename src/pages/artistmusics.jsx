import React from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../components/menu'
import Playlist from '../components/playlist'

function Artistmusics() {
    const { id } = useParams();
  return (
    <div>
        <Menu />
        <Playlist playlistname={id} localname={id}/>
    </div>
  )
}

export default Artistmusics