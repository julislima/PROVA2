import './App.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return(

        <nav class='navbar'>

<ul className="navbar-link">
                <li className="navbar-link-item">
                    <Link className="nemezes-nav-link" to="/home"><h4>Home</h4></Link>
                </li>
                <li className="navbar-link-item">
                    <Link className="nemezes-nav-link" to="/quemsomos"><h4>Quem Somos?</h4></Link>
                </li>
                <li className="navbar-link-item">
                    <Link className="nemezes-nav-link" to="/contato"><h4>Contato</h4></Link>
                </li>
            </ul>

    <div className="logo">
        <img src={require('./fotos/SENAI.png')} alt="..." width={100}></img> 
    </div>
        </nav>

    
        
)

}

export default Navbar 