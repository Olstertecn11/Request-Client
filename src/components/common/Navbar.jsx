import { useState } from 'react';
import logo from '../../assets/images/adventist_logo.webp';
import '../../assets/styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const links = [
  { title: 'Inicio', path: '/' },
  { title: 'Ayuda', path: '/Ayuda' },
  {
    title: 'Informacion', childs: [
      { title: 'Nosotros', path: '/Nosotros' },
      { title: 'Ministerios', path: '/Ministerios' }
    ]
  }
];

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState({ path: '/', parent: null });

  const redirect = (path, parent = null) => {
    setActive({ path, parent });
    navigate(path);
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
            {links.map((link, index) => {
              if (link.childs) {
                return (
                  <li key={index} className="nav-item dropdown">
                    <a className={`nav-link dropdown-toggle ${active.parent === link.title ? '_active' : ''}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {link.title}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

