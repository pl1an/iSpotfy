import React from 'react'
import Menu from '../components/menu'
import "./styles/account.css"

const Account = () => {
  return (
    <div className='account'>
        <Menu />
        <div className='account-right'>
            Minha Conta
        </div>
    </div>
  )
}

export default Account