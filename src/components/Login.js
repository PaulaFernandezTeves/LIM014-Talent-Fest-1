import React, { useRef } from 'react';
import {Form, Button, Card } from 'react-bootstrap';
import { useAuth } from '../context/AuthProvider';

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('cliiick');
    console.log(emailRef.current.value, passwordRef.current.value);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.log('error no entro a la cuenta')
    }
  }

  return (
    <> 
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required></Form.Control>
            </Form.Group>
            <Button className='w-100 mt-4' type='submit'>Log In</Button>
          </Form>
        </Card.Body>
      </Card>     
    </>
  );
}
