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
    <>
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
    </>
  );
}

export default Sidebar;
