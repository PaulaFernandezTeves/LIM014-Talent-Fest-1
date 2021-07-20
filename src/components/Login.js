import React, { useRef } from 'react';
import {Form, Button, Card } from 'react-bootstrap';
import { useAuth } from '../context/AuthProvider';
import {
  useHistory
} from "react-router-dom";
import loginpic from '../images/loginpic.png';
import logopersona from '../images/logopersona.png';
import logofooter from '../images/logofooter.png';

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login} = useAuth();
  let history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('cliiick');
    console.log(emailRef.current.value, passwordRef.current.value);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/home')
    } catch (error) {
      console.log('error no entro a la cuenta')
    }
  }

  return (
    <>
      <section className='merysectionlogin d-flex'>
        <article className='meryarticle1 align-self-center'>
          <figure className='merylogoperson mx-auto mb-4'>
            <img src={logopersona} alt="" />
          </figure>
          <Card className='merycardlogin mx-auto mb-4'>
            <Card.Body>
              <h2 className="text-center mb-4">Ingreso</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required></Form.Control>
                </Form.Group>
                <Form.Group id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required></Form.Control>
                </Form.Group>
                <Button id='merybuttonlogin' className='w-50 mt-4' type='submit'>INGRESAR</Button>
              </Form>
            </Card.Body>
          </Card>
          <figure className='merylogoperson mx-auto'>
            <img src={logofooter} alt="" />
          </figure>
        </article>
        <figure className='merymainimg'>
          <img className='h-0' src={loginpic} alt="" />
        </figure>
      </section> 
     
    </>
  );
}
