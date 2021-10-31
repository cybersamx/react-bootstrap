import { Helmet } from 'react-helmet';

import './auth.css';
import icon from './icon.svg';

function Logout() {
  const title = 'Logout';

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-auth text-center">
        <form>
          <img className="my-4 auth-icon" src={icon} alt="lock icon" />
          <h3 className="h3 mb-3 fw-normal">Log me out from all sessions</h3>
          <button className="w-100 btn btn-lg btn-primary" type="button">Log out</button>
        </form>
      </main>
    </>
  );
}

export default Logout;
