import { Link } from 'react-router-dom';

import './console-navbar.css';
import userIcon from '../common/user.svg';
import logo from './logo.svg';

function ConsoleNavbar() {
  const items = [
    { path: '/console/profile', title: 'Profile' },
    { path: '/', title: 'Logout' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark p-1 shadow">
      <div className="d-flex flex-grow-1">
        <a className="navbar-brand d-flex pt-2" href="/console">
          <img src={logo} alt="console logo" className="navbar-logo" />Admin Console
        </a>
        <div className="w-100 text-right">
          <button className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#sidebarMenu"
                  aria-controls="sidebarMenu"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
        </div>
        <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarDropdown">
          <ul className="navbar-nav ms-auto flex-nowrap">
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle nav-avatar-dropdown"
                      id="dropdownMenu"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                <img src={userIcon} className="nav-avatar rounded-circle nav-avatar" alt="avatar" />
                Admin
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu">
                {
                  items.map((item, i) => (
                    <li key={i}>
                      <Link className="dropdown-item" to={item.path}>{item.title}</Link>
                    </li>
                  ))
                }
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ConsoleNavbar;
