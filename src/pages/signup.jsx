import React from "react";
import { Link } from "react-router-dom";
import './styles/signup.css';
import api from "../api";

export function Signup() {

    function Cadastro() {
        const email = document.getElementById('email-input').value;
        const password = document.getElementById('password-input').value;
        const name = document.getElementById('name-input').value;

        api
            .post('/api/users/login', {
                email: {email},
                name: {name},
                password: {password},
                role: 'user'
            })
            .then(navigate('/login'))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
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
                    <input placeholder="Crie uma senha" id="password-input"/>
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
