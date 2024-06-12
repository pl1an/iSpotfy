import './styles/login.css'
import { Link } from "react-router-dom";
import './styles/signup.css';

export function Login(){
    return (
    <div className="loginclass">
        <div className="tittle">
            <h1>iSpotfy</h1>
            <p>®</p>
        </div>
        <h2>Música para todos.</h2>
        <form>
            <div className="input-container">
                    <input placeholder="Email" />
                    <span className="material-icons icon">mail</span>
                </div>
            <div className="input-container">
                    <input placeholder="Senha" />
                    <span className="material-icons icon">lock</span>
                </div>
            <button type="submit">Entrar</button>
        </form>
        <div className="signup_link">
            <p>Não tem uma conta?</p>
            <Link to={"/signup"} className='linking_signup'>Inscreva-se</Link>
        </div>
        <Link to={"/mainpage"} className='linking_signup'>link temporário para a pagina principal</Link>
    </div>
    )
}