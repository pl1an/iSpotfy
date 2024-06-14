import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='welcome-class'>
      <div className="tittle">
            <h1>iSpotify</h1>
            <p>®</p>  
        </div>
      <div className="container">
        <h1>Bem-vindo ao iSpotify</h1>
        <p>Sua experiência musical personalizada começa aqui. Descubra novas músicas, artistas e playlists só para você.</p>
        <Link to="/login" className="btn">Começar</Link>
    </div>
    </div>
  )
}

export default App
