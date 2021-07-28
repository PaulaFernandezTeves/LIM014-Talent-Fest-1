import React from 'react';
import {Header} from '../../home/Header';
import { Card } from "react-bootstrap";
import ReactPlayer from 'react-player';
// import "../subcomponents1/Timer"
import Timer from '../subcomponents1/Timer';
import '../../../styles/paula.css';

export const Security = () => {
  return (
    <>
      <Header />
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>DÍAS SIN ACCIDENTES</h2> 
        <div className='BriTimer'><Timer/></div>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '60%' }}>
          <Card border=" border-4" style={{ width: '25rem', borderColor: "#83929B", borderRadius:'17px', height:'16rem'}} className='mb-4'>
            <Card.Body>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                ¡Están de cumpleaños!
              </Card.Text>
            </Card.Body>
            <figure className='mx-auto'>
              <i className="fas fa-user-circle"></i>
            </figure>
          </Card> 
          <Card border=" border-4" style={{ width: '25rem', borderColor: "#83929B", borderRadius:'17px', height:'16rem'}} className='mb-4'>
            <Card.Body>
                <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                  ¡Están de Quinquenio!
                </Card.Text>
              </Card.Body>
            <figure className='mx-auto'>
              <i className="fas fa-user-circle"></i>
            </figure>
          </Card> 
        </article>
      </section>
      <section style={{ background: '#ECF2F6'}} className='p-5' id="video1">
        <h2 className='text-center mb-5 azul'>GANADORES CAMPAÑA MEDIO AMBIENTE</h2>
        <article className="briVideo" >
        <Card style={{ backgroundColor:'transparent', marginLeft:'20px',paddingInline:'14rem',borderColor:'transparent'}}>
              {/* <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }} className="card-body"> */}
              {/* <div className="briSeccion" style={{ marginLeft:'30%'}}> */}
                <ReactPlayer
                
                  url='https://www.youtube.com/watch?v=0XT8AgWmuaE'
                  className='react-player'
                  playing
                  // width='200%'
                  // height='200%'
                />
              {/* </div> */}
    
              {/* </Card.Text> */}        
          </Card>
        </article>
      </section>
      
    </>
  )
}