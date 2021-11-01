import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import MainNavbar from '../components/MainNavbar';

function MainLayout() {
  return (
    <>
      <MainNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
