import logo from '../assets/images/adventist_logo.webp';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const history = useNavigate();


  const redirect = (_link) => {
    history(_link);
  }

  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-blue">
        <a className="navbar-brand text-white d-flex" href="#"> <img src={logo} style={{ width: '3vw' }} alt="" /> <b className="ml-2 mt-1">Iglesia Adventista Central</b> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" onClick={() => redirect('/')}>Inicio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Informarcion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => redirect('/Ayuda')}>Ayuda</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  )
}

export default Navbar;

