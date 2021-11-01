import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import './auth.css';

function Logout() {
  const title = 'Logout';

  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-auth text-center">
        <form>
          <i className="bi bi-file-lock-fill auth-icon my-4"/>
          <p className="mb-3 fw-normal">Click <strong>Log out</strong> button to log out and navigate back to home.</p>
          <button className="w-100 btn btn-lg btn-primary"
                  type="button"
                  onClick={() => navigate('/')}>Log out</button>
        </form>
      </main>
    </>
  );
}

export default Logout;
