import { Helmet } from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Button, FormControl, FormLabel, InputGroup, Spinner,
} from 'react-bootstrap';

import { login } from '../services/MockAuthService';
import useForm from '../hooks/useForm';

import './login.css';

function redirectPath(search) {
  const match = search.match(/redirect=(.*)/);
  const redirect = match?.[1];
  return redirect ? decodeURIComponent(redirect) : '/console';
}

function Login() {
  const title = 'Login';

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { search } = useLocation();

  const handleLogin = async (e, data) => {
    try {
      // No action taken for remember me. Just keep it simple.

      setIsLoading(true);
      const token = await login(data.username, data.password);
      // eslint-disable-next-line no-console
      console.log(`login successful, token: ${token}`);
      setIsLoading(false);
      navigate(redirectPath(search));
    } catch (err) {
      setIsLoading(false);
      // eslint-disable-next-line no-alert
      alert(`login failed: ${err}`);
    }
  };

  const validators = {
    username: {
      required: {
        value: true,
        message: 'username is required',
      },
    },
    password: {
      required: {
        value: true,
        message: 'password is required',
      },
    },
  };

  // Using a custom hook to show how we can build out our own hook.
  const {
    data, handleChange, handleSubmit, errors,
  } = useForm({
    onSubmit: handleLogin,
    validators,
  });

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
          <InputGroup className="form-floating">
            <FormControl type="text"
                         className="form-control form-input-top"
                         id="inputUsername"
                         placeholder="Username"
                         isInvalid={errors?.username}
                         onChange={handleChange('username')}
            />
            <FormLabel htmlFor="inputUsername">Username</FormLabel>
          </InputGroup>
          <InputGroup className="form-floating">
            <FormControl type="password"
                         className="form-control form-input-bottom"
                         id="inputPassword"
                         placeholder="Password"
                         isInvalid={errors?.password}
                         onChange={handleChange('password')}
            />
            <FormLabel htmlFor="inputPassword">Password</FormLabel>
          </InputGroup>
          {Object.keys(errors).map((key) => <div className="text-danger" key={key}>{errors[key]}</div>)}
          <div className="checkbox mb-3 my-3">
            <label>
              <input type="checkbox"
                     value="isRemember"
                     checked={data.isRemember}
                     onChange={handleChange('isRemember')}
              />
              Remember me
            </label>
          </div>
          <Button className="w-100 btn btn-lg btn-primary"
                  type="button"
                  disabled={isLoading}
                  onClick={handleSubmit}
          >
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" hidden={!isLoading} />
            <span className="px-2">Log in</span>
          </Button>
        </form>
      </main>
    </>
  );
}

export default Login;
