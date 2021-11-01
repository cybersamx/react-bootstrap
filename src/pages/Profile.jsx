import { Helmet } from 'react-helmet';

import './profile.css';
import userIcon from '../common/user.svg';

function Logout() {
  const title = 'Profile';

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-auth text-center">
        <img className="my-4 avatar-icon" src={userIcon} alt="Avatar" />
        <h3 className="h3 mb-3 fw-normal">Administrator</h3>
      </main>
    </>
  );
}

export default Logout;
