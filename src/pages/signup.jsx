import React from "react";
import { Link } from "react-router-dom";
import './styles/signup.css';
import { useNavigate } from 'react-router-dom'; 

export function Signup() {
    const navigate = useNavigate();

    function Cadastro() {
        const email = document.getElementById('email-input').value;
        const password = document.getElementById('password-input').value;
        const name = document.getElementById('name-input').value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
    }

        const passwordMinLength = 6;
        if (password.length < passwordMinLength) {
            alert(`A senha deve ter pelo menos ${passwordMinLength} caracteres.`);
            return;
    }
        localStorage.setItem("useremail", email);
        localStorage.setItem("userpassword", password);
        localStorage.setItem("username", name);

        navigate('/login');
    }
   

    return (
        <div className="signupclass">
            <div className="signup-tittle">
                <h1>Inscrever-se em uma conta grátis do iSpotify</h1>
                <p>®</p>
            </div>
            <form>
                <div className="input-container">
                    <input placeholder="Email" id="email-input"/>
                    <span className="material-icons icon">mail</span>
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Crie uma senha" id="password-input"/>
                    <span className="material-icons icon">lock</span>
                </div>
                <div className="input-container">
                    <input placeholder="Como devemos chamar você?" id="name-input"/>
                    <span className="material-icons icon">account_circle</span>
                </div>
                <button type="submit" onClick={() => Cadastro()}>Cadastrar</button>
            </form>
            <div className="login_link">
                <p>Já é um usuário do iSpotify? </p>
                <Link to={"/login"} className="linking_login">Faça login</Link>
            </div>
        </div>
    );
}
