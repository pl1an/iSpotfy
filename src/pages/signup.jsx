import React from "react";
import { Link } from "react-router-dom";
import './styles/signup.css'

export function Signup(){
    return (
        <div className="signupclass">
            <div className="signup-tittle">
                <h1>Inscrever-se em uma conta grátis do iSpotify</h1>
                <p>®</p>
            </div>
            <form>
                <input placeholder="Email"></input>
                <input placeholder="Crie uma senha"></input>
                <input placeholder="Como devemos chamar você ?"></input>
                <button type="submit">Cadastrar</button>
            </form>
            <div className="login_link">
                <p>Já é um usuário do iSpotify ? </p>
                <Link to={"/login"} className="linking_login">Faça login</Link>
            </div>
        </div>
     )
    
}