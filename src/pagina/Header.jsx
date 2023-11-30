import logo from '../imagenes/testvo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container py-5">
            <div className="row">
                
                <div className='col'>
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <Link class="nav-link text-light " aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-light" to="/Login">Inicia sesion</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-light" to="/TestVocacional">Iniciar Test</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-light" to="/Creditos">Créditos</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-light" to="/Politica">Política</Link>
                        </li>
                        
                       
                        <div className="col">
                    <Link to="/"> <img src={logo} alt="Test " width={1000} /></Link>
                </div>
                        
                    </ul>

                </div>

            </div>
        </div>
    )
}
export default Header
