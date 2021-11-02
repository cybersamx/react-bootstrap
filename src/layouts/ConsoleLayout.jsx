import { Navigate, Outlet, useLocation } from 'react-router-dom';

import Footer from '../components/Footer';
import ConsoleNavbar from '../components/ConsoleNavbar';
import Sidebar from '../components/Sidebar';
import { useAuth } from '../services/AuthProvider';

function ConsoleLayout() {
  const auth = useAuth();
  const { pathname } = useLocation();

  // Issue with react-router-dom v6 recognizing a custom route. Put the logic here as a workaround.
  // TODO: Refactor and put check services logic in a custom route once the above issue is fixed.
  if (auth.isAuth()) {
    return (
      <>
        <ConsoleNavbar />
        <Sidebar />
        <Outlet />
        <Footer />
      </>
    );
  }

  return <Navigate to={`/login?redirect=${encodeURIComponent(pathname)}`} replace />;
}

export default ConsoleLayout;
