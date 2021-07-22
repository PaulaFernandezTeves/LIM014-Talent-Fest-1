import React from 'react';
import { Header } from "./Header";
import { Card } from "react-bootstrap";
import appautoserv from '../../images/appautoserv.png';
import appdigdesk from '../../images/appdigdesk.png';
import apprecibo from '../../images/apprecibo.png';
import appvisita from '../../images/appvisita.png';

export const MyWork = () => {
  const click1=()=>{
    window.location = "https://campus.siderperu.pe/"
  }
  return (
    <>
      <Header />
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>APPLICATIVOS DE COMUNICACIÓN</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '80%' }}>
          <Card onClick={()=> click1()}            border=" border-4" style={{ width: '15rem', borderColor: "#83929B", borderRadius:'17px', height:'15rem'}} className='mb-4'>
            <figure className='mx-auto'>
              <img src="" alt=""  style={{width:'100%', height:'9rem', objectFit:'contain'}} />
            </figure>
            <Card.Body>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                CAMPUS SIDER
              </Card.Text>
            </Card.Body>
          </Card> 
          <Card border=" border-4" style={{ width: '15rem', borderColor: "#83929B", borderRadius:'17px', height:'15rem'}} className='mb-4'>
            <figure className='mx-auto'>
              <img src={apprecibo} alt="" style={{width:'100%', height:'9rem', objectFit:'contain'}}  />
            </figure>
            <Card.Body>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                TU RECIBO
              </Card.Text>
            </Card.Body>
          </Card> 
          <Card border=" border-4" style={{ width: '15rem', borderColor: "#83929B", borderRadius:'17px', height:'15rem'}} className='mb-4'>
            <figure className='mx-auto'>
              <img src={appvisita} alt=""  style={{width:'100%', height:'9rem', objectFit:'contain'}}  />
            </figure>
            <Card.Body>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                GESTIÓN DE VISITAS
              </Card.Text>
            </Card.Body>
          </Card> 
          <Card border=" border-4" style={{ width: '15rem', borderColor: "#83929B", borderRadius:'17px', height:'15rem'}} className='mb-4'>
            <figure className='mx-auto'>
              <img src={appdigdesk} alt=""  style={{width:'100%', height:'9rem', objectFit:'contain'}}  />
            </figure>
            <Card.Body>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                DIGITAL DESK
              </Card.Text>
            </Card.Body>
          </Card> 
          <Card border=" border-4" style={{ width: '15rem', borderColor: "#83929B", borderRadius:'17px', height:'15rem'}} className='mb-4'>
            <figure className='mx-auto'>
              <img src={appautoserv} alt="" style={{width:'100%', height:'9rem', objectFit:'contain'}} />
            </figure>
            <Card.Body>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                AUTOSERVICIO
              </Card.Text>
            </Card.Body>
          </Card> 
          <Card border=" border-4" style={{ width: '15rem', borderColor: "#83929B", borderRadius:'17px', height:'15rem'}} className='mb-4'>
            <figure className='mx-auto'>
              <img src="" alt=""  style={{width:'100%', height:'9rem', objectFit:'contain'}}  />
            </figure>
            <Card.Body>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1rem', textAlign:'center' }}>
                SOLICITUD AUTOSEGURO MÉDICO FAMILIAR
              </Card.Text>
            </Card.Body>
          </Card> 
        </article>
      </section>
    </>
  )
}