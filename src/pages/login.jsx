import './styles/login.css'
import { Link } from "react-router-dom";
import './styles/signup.css';
import { useNavigate } from 'react-router-dom'; 
import api from '../api';


export function Login(){
    const navigate = useNavigate();

    function EntrarButton(){
        const email = document.getElementById('input-email').value; 
        const password = document.getElementById('input-password').value;

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

        api.post('/users/login', {
            email:email,
            password:password
        }).then(response => {
            console.log(response);
            localStorage.setItem("userpassword", password);
            localStorage.setItem("dailylogin", false);
            navigate('/mainpage');
        }).catch(error => {
            console.log(error),
            alert('senha ou email incorretos');
        })
    }

    return (
    <div className="loginclass">
        <div className="tittle">
            <h1>iSpotify</h1>
            <p>®</p>
        </div>
        <h2>Música para todos.</h2>
        <form>
            <div className="input-container">
                    <input placeholder="Email" id="input-email"/>
                    <span className="material-icons icon">mail</span>
                </div>
            <div className="input-container">
                    <input type='password' placeholder="Senha" id="input-password"/>
                    <span className="material-icons icon">lock</span>
                </div>
            <button type="button" onClick={EntrarButton}>Entrar</button>
        </form>
        <div className="signup_link">
            <p>Não tem uma conta?</p>
            <Link to={"/signup"} className='linking_signup'>Inscreva-se</Link>
        </div>
    </div>
    )
}