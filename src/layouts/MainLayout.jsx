import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
