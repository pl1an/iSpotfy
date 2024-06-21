import React, { useLayoutEffect, useState } from 'react';
import Menu from '../components/menu'
import "./styles/account.css"


const Account = () => {
  const [isEmailFormVisible, setEmailFormVisible] = useState(false);
  const [isPasswordFormVisible, setPasswordFormVisible] = useState(false);

  let emailatual;
  let nomeatual;

  
  emailatual = localStorage.getItem("useremail");
  nomeatual = localStorage.getItem("username");
  
  function verificarEmail() {
    const email = document.getElementById('email-input').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
    } else {
        alert("E-mail válido! Redirecionando...");
        setEmailFormVisible(false);
        localStorage.setItem('useremail', email);
    }
  }

  function verificarSenha() {
    const senhanova = document.getElementById('senhanova-input').value;
    const senhanova2 = document.getElementById('senhanova2-input').value;
    const senhaantiga = document.getElementById('senhaantiga-input').value;

    if (senhaantiga != localStorage.getItem('userpassword')) {
      alert("A senha está errada");
      return;
    }

    const passwordMinLength = 6;
    if (senhanova.length < passwordMinLength) {
      alert(`A senha deve ter pelo menos ${passwordMinLength} caracteres.`);
      return;
    }

    if (senhanova == senhanova2) {
      alert("Senha válida! Redirecionando...");
      setPasswordFormVisible(false);
      localStorage.setItem('userpassword', senhanova);
    } else {
      alert(`As senhas digitadas devem ser iguais`);
      return;
    }
  }

  return (
    <div className='account'>
        <Menu />
        <div className='account-right'>
            <h1>Minha Conta</h1>
            <div className="input-container">
              <h2 className='name-account'>{nomeatual}</h2>
              <span className="material-icons icon">account_circle</span>
            </div>
            <div className="input-container">
                <h2 className='email-account'>{emailatual}</h2>
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
                  <input id="email-input" placeholder="Email" />
                  <span className="material-icons icon">mail</span>
              </div>
              <div className="button-container">
                <button type='button' className='cancel-button' onClick={() => setEmailFormVisible(false)}>Cancelar</button>
                <button type='button' className='confirm-button' onClick={() => verificarEmail()}>Confirmar</button>
              </div>
            </div>
          </div>
        )}
        {isPasswordFormVisible && (
          <div className='screen-onclick'>
            <div className='new-email'>
              <h1>Nova Senha</h1>
              <div className="input-container">
                  <input type='password'  placeholder="Senha antiga" id='senhaantiga-input' />
                  <span className="material-icons icon">lock</span>
              </div>
              <div className="input-container">
                  <input type='password' placeholder="Nova senha" id='senhanova-input'/>
                  <span className="material-icons icon">lock</span>
              </div>
              <div className="input-container">
                  <input type='password' placeholder="Confirmar nova senha" id='senhanova2-input'/>
                  <span className="material-icons icon">lock</span>
              </div>
              <div className="button-container">
                <button type='button' className='cancel-button' onClick={() => setPasswordFormVisible(false)}>Cancelar</button>
                <button type='button' className='confirm-button' onClick={() => verificarSenha()}>Confirmar</button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}


export default Account;