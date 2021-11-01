import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import ConsoleNavbar from '../components/ConsoleNavbar';
import Sidebar from '../components/Sidebar';

function ConsoleLayout() {
  return (
    <>
      <ConsoleNavbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default ConsoleLayout;
