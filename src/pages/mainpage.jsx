import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/menu'
import "./styles/mainpage.css"

const Mainpage = () => {
  return (
    <div className='main-page'>
        <Menu />
        <Link to={"/login"}>link temporário para o login</Link>
    </div>
  )
}

export default Mainpage