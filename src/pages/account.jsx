import React, { useState } from 'react';
import Menu from '../components/menu'
import "./styles/account.css"


const Account = () => {
  const [isEmailFormVisible, setEmailFormVisible] = useState(false);

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
            <button type="button" onClick={() => setEmailFormVisible(true)}>Trocar E-mail</button>
            <button type="submit">Trocar Senha</button>
        </div>
        {isEmailFormVisible && (
          <div className='new-email'>
            <h1>Novo E-mail</h1>
            <div className="input-container">
                <input placeholder="Email" />
                <span className="material-icons icon">mail</span>
            </div>
            <div className="button-container">
              <button type='button' className='cancel-button' onClick={() => setEmailFormVisible(false)}>Cancelar</button>
              <button type='button' className='confirm-button'>Confirmar</button>
            </div>
          </div>
        )}
    </div>
  );
}

export default Account;