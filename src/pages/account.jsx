import React, { useState } from 'react';
import Menu from '../components/menu'
import "./styles/account.css"


const Account = () => {
  const [isEmailFormVisible, setEmailFormVisible] = useState(false);
  const [isPasswordFormVisible, setPasswordFormVisible] = useState(false);

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
            <button type="submit" onClick={() => setPasswordFormVisible(true)}>Trocar Senha</button>
        </div>
        {isEmailFormVisible && (
          <div className='screen-onclick'>
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
          </div>
        )}
        {isPasswordFormVisible && (
          <div className='screen-onclick'>
            <div className='new-email'>
              <h1>Nova Senha</h1>
              <div className="input-container">
                  <input type='password'  placeholder="Senha antiga" />
                  <span className="material-icons icon">lock</span>
              </div>
              <div className="input-container">
                  <input type='password' placeholder="Nova senha" />
                  <span className="material-icons icon">lock</span>
              </div>
              <div className="input-container">
                  <input type='password' placeholder="Confirmar nova senha" />
                  <span className="material-icons icon">lock</span>
              </div>
              <div className="button-container">
                <button type='button' className='cancel-button' onClick={() => setPasswordFormVisible(false)}>Cancelar</button>
                <button type='button' className='confirm-button'>Confirmar</button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default Account;