import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import './auth.css';

function Signup() {
  const title = 'Signup';

  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-auth text-center">
        <form>
          <i className="bi bi-file-lock-fill auth-icon my-4"/>
          <p className="mb-3 fw-normal">Click <strong>Sign up</strong> button to sign up and log into the admin console.</p>
          <div className="form-floating">
            <input type="email"
                   className="form-control form-input-top"
                   id="inputEmail"
                   placeholder="name@example.com" />
            <label htmlFor="inputEmail">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password"
                   className="form-control form-input-middle"
                   id="inputPassword"
                   placeholder="Password" />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <div className="form-floating">
            <input type="password"
                   className="form-control form-input-bottom"
                   id="inputPassword2"
                   placeholder="Verify Password" />
            <label htmlFor="inputPassword2">Verify Password</label>
          </div>
          <div className="checkbox mb-3 my-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary"
                  type="button"
                  onClick={() => navigate('/console')}>Log in</button>
        </form>
      </main>
    </>
  );
}

export default Signup;
