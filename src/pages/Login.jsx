// CREDIT: https://getbootstrap.com/docs/5.1/examples/sign-in/

import { Helmet } from 'react-helmet';

import './auth.css';
import icon from './icon.svg';

function Login() {
  const title = 'Login';

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-auth text-center">
        <form>
          <img className="my-4 auth-icon" src={icon} alt="lock icon" />
          <h1 className="h3 mb-3 fw-normal">Please log in</h1>
          <div className="form-floating">
            <input type="email"
                   className="form-control form-input-top"
                   id="inputEmail"
                   placeholder="name@example.com" />
            <label htmlFor="inputEmail">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password"
                   className="form-control form-input-bottom"
                   id="inputPassword"
                   placeholder="Password" />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <div className="checkbox mb-3 my-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="button">Log in</button>
        </form>
      </main>
    </>
  );
}

export default Login;
