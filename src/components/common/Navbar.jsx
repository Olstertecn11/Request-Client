import { useState, useRef } from 'react';
import logo from '../../assets/images/adventist_logo.webp';
import '../../assets/styles/Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const links = [
  { title: 'Inicio', path: '/' },
  {
    title: 'Informacion', childs: [
      { title: 'Nosotros', path: '/Nosotros' },
      { title: 'Ministerios', path: '/Ministerios' }
    ]
  },
  { title: 'Ayuda', path: '/Ayuda' },
];

const Navbar = ({ isAdmin = false }) => {
  let location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState({ path: '/', parent: null });
  const dropdownRef = useRef(null);

  const redirect = (path, parent = null) => {
    setActive({ path, parent });
    navigate(path);

    if (dropdownRef.current && dropdownRef.current.classList.contains('show')) {
      dropdownRef.current.classList.remove('show');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-blue">
        <a className="navbar-brand text-white d-flex" href="#">
          <img src={logo} style={{ width: '3vw' }} alt="logo" />
          <b className="ml-2 mt-1">Iglesia Adventista Central</b>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto">
            {!isAdmin ? links.map((link, index) => {
              if (link.childs) {
                return (
                  <li key={index} className="nav-item dropdown">
                    <a className={`nav-link dropdown-toggle ${active.parent === link.title ? '_active' : ''}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {link.title}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown" ref={dropdownRef}>
                      {link.childs.map((child, childIndex) => (
                        <li key={childIndex}>
                          <a className={`dropdown-item ${active.path === child.path ? '_active' : ''}`} onClick={() => redirect(child.path, link.title)}>
                            {child.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li key={index} className={`nav-item ${active.path === link.path ? '_active' : ''}`}>
                    <a className="nav-link" onClick={() => redirect(link.path)}>
                      {link.title}
                      {active.path === link.path && <span className="sr-only">(current)</span>}
                    </a>
                  </li>
                );
              }
            }) : null
            }
          </ul>
          {isAdmin && (
            <div className="ml-auto pr-4">
              {
                location.pathname !== "/admin" ? (
                  <Button colorScheme='red' onClick={() => navigate('/admin')}><i className="fa-solid fa-right-from-bracket"></i></Button>
                ) : ''
              }
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

