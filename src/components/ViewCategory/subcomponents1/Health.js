import React from 'react';
import {Header} from '../../home/Header';
import { Card } from "react-bootstrap";
import '../../../styles/paula.css';
import recomendaciones from '../../../images/Recomendaciones.png';
import alimentacion from '../../../images/nutricion.png';

export const Health = () => {
  return (
    <>
      <Header />
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>CRONOGRAMA DE VACUNACIÓN</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '60%' }}>
          <Card border=" border-4" style={{ width: '27rem', borderColor: "#83929B", borderRadius:'17px', height:'25rem'}} className='mb-4'>
            <img src="https://pbs.twimg.com/media/E5yHD5WUYAosoNn.jpg" alt ="" style={{width:"26.5rem", height:"75%"}}  className="photo"></img>
              <h4 className="card-title">Vacunación</h4>
                <p className="card-text text-secondary">
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                </p>
    
              {/* </Card.Text> */}        
          </Card> 
          <Card border=" border-4" style={{ width: '27rem', borderColor: "#83929B", borderRadius:'17px', height:'25rem'}} className='mb-4'>            
            <img src="https://pbs.twimg.com/media/Etoo7BEXIAAngj_.jpg:large" alt ="" style={{width:"26.5rem", height:"75%"}} className="photo"></img>
              <h4 className="card-title">Informacion sobre la vacuna</h4>
                <p className="card-text text-secondary">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            </p>
          </Card> 
        </article>
      </section>
      <section className='p-5' style={{ background: '#ECF2F6'}}>
        <h2 className='text-center mb-5 azul'>RECOMENDACIONES</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '60%' }}>
        <Card border=" border-4" style={{ width: '27rem', borderColor: "#83929B", borderRadius:'17px', height:'25rem'}} className='mb-4'>            
            <img src={recomendaciones} alt ="" style={{width:"26.5rem", height:"75%"}} className="photo"></img>
              <h4 className="card-title">Recuerda</h4>
                <p className="card-text text-secondary">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            </p>
          </Card> 
          <Card border=" border-4" style={{ width: '27rem', borderColor: "#83929B", borderRadius:'17px', height:'25rem'}} className='mb-4'>
            <img src="https://pbs.twimg.com/media/Etoo7BEXIAAngj_.jpg:large" alt ="" style={{width:"26.5rem", height:"75%"}}  className="photo"></img>
              <h4 className="card-title">Te recomendamos</h4>
                <p className="card-text text-secondary">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
               </p>
          </Card> 
        </article>
      </section>
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>ATENCIÓN NUTRICIONAL</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '60%' }}>
        <Card border=" border-4" style={{ width: '27rem', borderColor: "#83929B", borderRadius:'17px', height:'25rem'}} className='mb-4'>
            <img src={alimentacion} alt ="" style={{width:"26.5rem", height:"75%"}} className="photo"></img>
              <h4 className="card-title">Cuida tu alimentación</h4>
                <p className="card-text text-secondary">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            </p>
          </Card> 
          <Card border=" border-4" style={{ width: '27rem', borderColor: "#83929B", borderRadius:'17px', height:'25rem'}} className='mb-4'>            
            <img src="https://pbs.twimg.com/media/Etoo7BEXIAAngj_.jpg:large" alt ="" style={{width:"26.5rem", height:"75%"}} className="photo"></img>
              <h4 className="card-title">Receta del día</h4>
                <p className="card-text text-secondary">
              "Lorem ipsum dolor sit amet consectetur.
            </p>
          </Card> 
        </article>
      </section>
    </>
  )
}
