import { NavLink } from 'react-router-dom';

import './sidebar.css';

function Sidebar() {
  const items = [
    { path: '/console', title: 'Dashboard', icon: 'bi-house-door' },
    { path: '/console/apps', title: 'Applications', icon: 'bi-layers' },
    { path: '/console/users', title: 'Users', icon: 'bi-people' },
    { path: '/console/settings', title: 'Settings', icon: 'bi-gear' },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              {
                items.map((item, i) => (
                  <li key={i} className="nav-item">
                    <NavLink className="nav-link" end to={item.path}>
                      <i className={`bi ${item.icon} pe-2`} />
                      {item.title}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
