import './styles/login.css'
import { Link } from "react-router-dom";
import './styles/signup.css';
import { useNavigate } from 'react-router-dom'; 


export function Login(){
    const navigate = useNavigate();

    function EntrarButton(){
        const email = document.getElementById('input-email').value; 
        const password = document.getElementById('input-password').value;

        let useremail = localStorage.getItem('useremail');
        let userpassword = localStorage.getItem('userpassword');

        if (useremail == email && userpassword == password) {
            navigate('/mainpage');
        } else {
            console.log("login inexistente");
        }

       
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
            <button type="submit" onClick={EntrarButton}>Entrar</button>
        </form>
        <div className="signup_link">
            <p>Não tem uma conta?</p>
            <Link to={"/signup"} className='linking_signup'>Inscreva-se</Link>
        </div>
    </div>
    )
}