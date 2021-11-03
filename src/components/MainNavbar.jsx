import { NavLink } from 'react-router-dom';

import './navbar.css';
import logo from './logo.svg';

function MainNavbar() {
  const items = [
    { path: '/', title: 'Home' },
    { path: '/login', title: 'Login' },
    { path: '/logout', title: 'Logout' },
    { path: '/signup', title: 'Signup' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand d-flex pt-2" href="/">
          <img src={logo} alt="" className="navbar-logo" />React-Bootstrap
        </a>
        <button className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarMenu"
                aria-controls="navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav">
            {
              items.map((item, i) => (
                <li key={i} className="nav-item">
                  <NavLink className="nav-link" to={item.path}>{item.title}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
