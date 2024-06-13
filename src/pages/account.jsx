import React from 'react'
import Menu from '../components/menu'
import "./styles/account.css"

const Account = () => {
  return (
    <div className='account'>
        <Menu />
        <div className='account-right'>
            <h1>Minha Conta</h1>
            <div className="input-container">
              <h2 className='name-account'>Nome</h2>
              <span className="material-icons icon">account_circle</span>
            </div>
            <div className="input-container">
                <h2 className='email-account'>Email</h2>
                <span className="material-icons icon">mail</span>
            </div>
            <button type="submit">Trocar E-mail</button>
            <button type="submit">Trocar Senha</button>
        </div>
    </div>
  )
}

export default Account