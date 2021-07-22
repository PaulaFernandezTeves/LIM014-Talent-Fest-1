import React from "react";
import { Card } from "react-bootstrap";

export const Main = () => {

  return (
    <>
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>PARA TI</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto'  style={{ maxWidth: '70%' }} >
          <Card border="gris3 border-3" style={{ width: '14rem', borderRadius:'17px', height:'12rem' }} className='mb-4'>
            <figure className='mx-auto'>
              <i className="fas fa-user-graduate azulclaro "></i>
            </figure>
            <Card.Body>
              <Card.Text style={{ color: '#003366', fontWeight:'bold', textAlign:'center' }}>
                Cronograma de capacitación
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="gris3 border-3" style={{ width: '14rem', borderRadius:'17px', height:'12rem' }} className='mb-4'>
            <figure className='mx-auto'>
              <i className="fas fa-user-friends azulclaro"></i>
            </figure>
            <Card.Body>
              <Card.Text style={{ color: '#003366', fontWeight:'bold', textAlign:'center' }}>
                Convocatorias internas
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="gris3 border-3" style={{ width: '14rem', borderRadius:'17px', height:'12rem' }} className='mb-4'>
            <figure className='mx-auto'>
              <i className="far fa-thumbs-up azulclaro"></i>
            </figure>
            <Card.Body>
              <Card.Text style={{ color: '#003366', fontWeight:'bold', textAlign:'center' }}>
                Beneficios
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="gris3 border-3" style={{ width: '14rem', borderRadius:'17px', height:'12rem' }} className='mb-4'>
            <figure className='mx-auto'>
              <i className="far fa-calendar-alt azulclaro" ></i>
            </figure>
            <Card.Body>
              <Card.Text style={{ color: '#003366', fontWeight:'bold', textAlign:'center'}}>
                Actividad
              </Card.Text>
            </Card.Body>
          </Card>         
        </article>
      </section>
      <section className='p-5' style={{ background: '#ECF2F6'}}>
        <h2 className='text-center mb-5 azul'>NOTICIAS DESTACADAS DEL MES</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '60%' }}>
          <Card border="gris3 border-3" style={{ width: '25rem', background:'#003366', borderRadius:'23px', height:'14rem' }} className='mb-4'>
              <figure className='mx-auto'>
                <i className="far fa-thumbs-up azulclaro"></i>
              </figure>
              <Card.Body>
                <Card.Text style={{color:' #ECF2F6', fontWeight:'bold', textAlign:'center'}}>
                  RÉCORD LAMINACIÓN MARCOS
                </Card.Text>
              </Card.Body>
            </Card>
          <Card border="gris3 border-3" style={{ width: '25rem', background:'#003366', borderRadius:'23px', height:'14rem' }} className='mb-4'>
              <figure className='mx-auto'>
                <i className="far fa-calendar-alt azulclaro" ></i>
              </figure>
              <Card.Body>
                <Card.Text style={{color:' #ECF2F6', fontWeight:'bold', textAlign:'center'}}>
                  CELEBRACIÓN DÍA DEL PADRE
                </Card.Text>
              </Card.Body>
            </Card>
        </article>
      </section>
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>RECONOCIMIENTOS DE LA SEMANA</h2>
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
  );
};
