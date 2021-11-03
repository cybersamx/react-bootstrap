import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Col, Button, Form, FormControl, InputGroup, FormLabel, Spinner,
} from 'react-bootstrap';

import { addUser } from '../services/MockAuthService';

import './signup.css';

// eslint-disable-next-line max-len
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const namePattern = /^[A-Za-z-]*$/;

function Signup() {
  const title = 'Signup';

  const [isValidated, setIsValidated] = useState(false); // Disable browser form validator.
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const handleSignup = async (data) => {
    try {
      setIsLoading(true);
      const user = await addUser(data);
      // eslint-disable-next-line no-console
      console.log(`signup successful, user: ${user}`);
      setIsValidated(true);
      setIsLoading(false);
      navigate('/login');
    } catch (err) {
      setIsLoading(false);
      // eslint-disable-next-line no-alert
      alert(`signup failed: ${err}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-signup">
        <Form className="row g-2" noValidate validated={isValidated}>
          <i className="bi bi-file-lock-fill auth-icon mt-3 text-center"/>
          <p className="fw-normal text-center">Fill up the form and then click <strong>Sign up</strong> button to sign up.</p>
          <Form.Group as={Col} lg="6" controlId="inputFirstName">
            <FormLabel>First Name</FormLabel>
            <FormControl type="text"
                         isInvalid={!!errors.firstname}
                         placeholder="First Name"
                         {...register('firstname', { required: true })}
            />
            <Form.Control.Feedback type="invalid">First name is required</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} lg="6" controlId="inputLastName">
            <FormLabel>Last Name</FormLabel>
            <FormControl type="text"
                         isInvalid={!!errors.lastname}
                         placeholder="Last Name"
                         {
                           ...register('lastname', {
                             required: true,
                             pattern: namePattern,
                           })
                         }
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastname?.type === 'required' && 'Last name is required'}
              {errors.lastname?.type === 'pattern' && 'No special characters allowed except hyphen'}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} lg="12" controlId="inputEmail">
            <FormLabel>Email</FormLabel>
            <FormControl type="email"
                         isInvalid={!!errors.email}
                         placeholder="Email@domain.com"
                         {
                           ...register('email', {
                             required: true,
                             pattern: emailPattern,
                           })
                         }
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.type === 'required' && 'Email is required'}
              {errors.email?.type === 'pattern' && 'Invalid email'}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="inputUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control type="text"
                            isInvalid={!!errors.username}
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            {...register('username', { required: true })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username && 'Username is required'}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} lg="12" controlId="inputPassword">
            <FormLabel>Password</FormLabel>
            <FormControl type="password"
                         isInvalid={!!errors.password}
                         placeholder="Password"
                         {
                           ...register('password', {
                             required: true,
                             minLength: 5,
                           })
                         }
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.type === 'required' && 'Password is required'}
              {errors.password?.type === 'pattern' && 'Password must be at least 5 characters long'}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3 my-3">
            <Form.Check
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
              isInvalid={!!errors.agree}
              {...register('agree', { required: true })}
            />
          </Form.Group>
          <Button className="w-100 btn btn-lg btn-primary"
                  type="button"
                  onClick={handleSubmit(handleSignup)}>
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" hidden={!isLoading} />
            <span className="px-2">Sign up</span>
          </Button>
        </Form>
      </main>
    </>
  );
}

export default Signup;
