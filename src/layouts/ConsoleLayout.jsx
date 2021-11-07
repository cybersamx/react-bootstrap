import { Navigate, Outlet, useLocation } from 'react-router-dom';

import Footer from '../components/Footer';
import ConsoleNavbar from '../components/ConsoleNavbar';
import Sidebar from '../components/Sidebar';
import useAuth from '../hooks/useAuth';

function ConsoleLayout() {
  const auth = useAuth();
  const { pathname } = useLocation();

  if (auth.isAuth()) {
    return (
      <>
        <ConsoleNavbar />
        <div className="container-fluid">
          <div className="row">
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <Sidebar />
            </nav>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Outlet />
              <Footer />
            </main>
          </div>
        </div>
      </>
    );
  }

  return <Navigate to={`/login?redirect=${encodeURIComponent(pathname)}`} replace />;
}

export default ConsoleLayout;
