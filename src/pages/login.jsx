import './styles/login.css'
import { Link } from "react-router-dom";

export function Login(){
    return (
    <div className="loginclass">
        <div className="tittle">
            <h1>iSpotfy</h1>
            <p>®</p>
        </div>
        <h2>Música para todos.</h2>
        <form>
            <input placeholder="Email"></input>
            <input placeholder="Senha"></input>
            <button type="submit">Entrar</button>
        </form>
        <div className="signup_link">
            <p>Não tem uma conta?</p>
            <Link to={"/signup"} className='linking_signup'>Inscreva-se</Link>
        </div>
    </div>
    )
}