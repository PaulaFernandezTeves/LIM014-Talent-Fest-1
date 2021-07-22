import React from 'react';
import {Header} from '../../home/Header';
import { Card } from "react-bootstrap";

export const Health = () => {
  return (
    <>
      <Header />
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>CRONOGRAMA DE VACUNACIÓN</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '60%' }}>
          <Card border=" border-4" style={{ width: '25rem', borderColor: "#83929B", borderRadius:'17px', height:'16rem'}} className='mb-4'>
            <Card.Body>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                ¡Están de cumpleaños!
              </Card.Text>
            </Card.Body>
            <figure className='mx-auto'>
              <i class="fas fa-user-circle"></i>
            </figure>
          </Card> 
          <Card border=" border-4" style={{ width: '25rem', borderColor: "#83929B", borderRadius:'17px', height:'16rem'}} className='mb-4'>
            <Card.Body>
                <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                  ¡Están de Quinquenio!
                </Card.Text>
              </Card.Body>
            <figure className='mx-auto'>
              <i class="fas fa-user-circle"></i>
            </figure>
          </Card> 
        </article>
      </section>
      <section className='p-5' style={{ background: '#ECF2F6'}}>
        <h2 className='text-center mb-5 azul'>RECOMENDACIONES</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '60%' }}>
          <Card border=" border-4" style={{ width: '25rem', borderColor: "#83929B", borderRadius:'17px', height:'16rem'}} className='mb-4'>
            <Card.Body>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                ¡Están de cumpleaños!
              </Card.Text>
            </Card.Body>
            <figure className='mx-auto'>
              <i class="fas fa-user-circle"></i>
            </figure>
          </Card> 
          <Card border=" border-4" style={{ width: '25rem', borderColor: "#83929B", borderRadius:'17px', height:'16rem'}} className='mb-4'>
            <Card.Body>
                <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                  ¡Están de Quinquenio!
                </Card.Text>
              </Card.Body>
            <figure className='mx-auto'>
              <i class="fas fa-user-circle"></i>
            </figure>
          </Card> 
        </article>
      </section>
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>ATENCIÓN NUTRICIONAL</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '60%' }}>
          <Card border=" border-4" style={{ width: '25rem', borderColor: "#83929B", borderRadius:'17px', height:'16rem'}} className='mb-4'>
            <Card.Body>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                ¡Están de cumpleaños!
              </Card.Text>
            </Card.Body>
            <figure className='mx-auto'>
              <i class="fas fa-user-circle"></i>
            </figure>
          </Card> 
          <Card border=" border-4" style={{ width: '25rem', borderColor: "#83929B", borderRadius:'17px', height:'16rem'}} className='mb-4'>
            <Card.Body>
                <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                  ¡Están de Quinquenio!
                </Card.Text>
              </Card.Body>
            <figure className='mx-auto'>
              <i class="fas fa-user-circle"></i>
            </figure>
          </Card> 
        </article>
      </section>
    </>
  )
}
