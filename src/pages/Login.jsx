import { Helmet } from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';

import { login } from '../services/MockAuthService';

import './auth.css';

function redirectPath(search) {
  const match = search.match(/redirect=(.*)/);
  const redirect = match?.[1];
  return redirect ? decodeURIComponent(redirect) : '/console';
}

function Login() {
  const title = 'Login';

  // Pre-fill the form.
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { search } = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const token = await login(username, password);
      // eslint-disable-next-line no-console
      console.log(`login successful, token: ${token}`);
      setIsLoading(false);
      navigate(redirectPath(search));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('error', err);
    }
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-auth text-center">
        <form>
          <i className="bi bi-file-lock-fill auth-icon my-4"/>
          <p className="mb-3 fw-normal">
            Click <strong>Log in</strong> button to log into the admin console.
            Use <strong>admin</strong>:<strong>qwerty</strong> to log in.
          </p>
          <div className="form-floating">
            <input type="text"
                   className="form-control form-input-top"
                   id="inputUsername"
                   onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="inputUsername">Username</label>
          </div>
          <div className="form-floating">
            <input type="password"
                   className="form-control form-input-bottom"
                   id="inputPassword"
                   onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <div className="checkbox mb-3 my-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <Button className="w-100 btn btn-lg btn-primary"
                  type="button"
                  disabled={isLoading}
                  onClick={handleLogin}>
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" hidden={!isLoading} />
            <span className="px-2">Log in</span>
          </Button>
        </form>
      </main>
    </>
  );
}

export default Login;
