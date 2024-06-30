import { Link } from 'react-router-dom'
import './App.css'
import { default_storage, set_storage } from './components/local_storage_handler';

function App() {
  return (
    <div className='welcome-class'>
      <div className="welcome-left">
        <div className='welcome-title'>
            <h1>iSpotify</h1>
            <p>®</p> 
        </div>
        <div className='welcome-img'>
            <img src="\src\assets\img-welcome.png" alt="img" className='welcome-image'/>
        </div>
      </div>
      <div className="welcome-right">
        <p>Sua experiência musical personalizada começa aqui. Descubra novas músicas, artistas e playlists só para você.</p>
        <Link to={"/login"} className="welcome-btn">Faça login</Link>
        <Link to={"/signup"} className="welcome-btn">Cadastre-se</Link>
      </div>
    </div>
  )
}

export default App
