import React from 'react';
import {Header} from '../../home/Header';
import { Card } from "react-bootstrap";
import ReactPlayer from 'react-player';
// import "../subcomponents1/Timer"
import {Timer} from '../subcomponents1/Timer';
import '../../../styles/brighit.css'
export const Security = () => {
  return (
    <>
      <Header />
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>DÍAS SIN ACCIDENTES</h2> 
        {/* <div className='BriTimer' id="timer"><Timer/></div> */}
        <Timer/>
      </section>
      <section style={{ background: '#ECF2F6'}}  className="video1">
        <h2 className='text-center mb-5 azul'>GANADORES CAMPAÑA MEDIO AMBIENTE</h2>
        <article className="briVideo" >
            <div>
            <Card style={{ backgroundColor:'transparent',borderColor:'transparent'}}>
                  {/* <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }} className="card-body"> */}
                  {/* <div className="briSeccion" style={{ marginLeft:'30%'}}> */}
                    <ReactPlayer
                    
                      url='https://www.youtube.com/watch?v=0XT8AgWmuaE'
                      className='react-player'
                      playing
                      // width='200%'
                      // height='200%'
                    />    
            </Card>
            </div> 
        </article>
      </section>
      
    </>
  )
}