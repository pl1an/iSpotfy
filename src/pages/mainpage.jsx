import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/menu'
import "./styles/mainpage.css"

const Mainpage = () => {
  return (
    <div className='main-page'>
        <Menu />
        <div className='main-page-right'>
          Welcome page
        </div>
    </div>
  )
}

export default Mainpage