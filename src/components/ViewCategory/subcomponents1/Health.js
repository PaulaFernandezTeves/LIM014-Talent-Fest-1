import React from 'react';
import {Header} from '../../home/Header';
import { Card } from "react-bootstrap";
import '../../../styles/paula.css';
import recomendaciones from '../../../images/Recomendaciones.png';
import vacunacion from '../../../images/vacunacion.png';
import cronograma from '../../../images/cronograma.png';
import recomendacion from '../../../images/recomendacion.png';
import cita from '../../../images/cita.png';
import nutricion from '../../../images/nutricion.png';


export const Health = () => {
  return (
    <>
      <Header />
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>CRONOGRAMA DE VACUNACIÓN</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '60%' }}>
          <Card  style={{ width: '27rem', borderRadius:'17px'}} className='mb-4'>
            <img src={vacunacion} alt ="" style={{width:"26.5rem"}}  className="photo"/>
              <h4 className="card-title">Vacunación</h4>
                <p className="card-text text-secondary">
                  "Acercate los días 28 y 29 de Agosto par tu dosis."
                </p>
    
              {/* </Card.Text> */}        
          </Card> 
          <Card  style={{ width: '27rem', borderRadius:'17px'}} className='mb-4'>            
            <img src={cronograma} alt ="" style={{width:"26.5rem"}} className="photo"/>
              <h4 className="card-title">Informacion sobre la vacuna</h4>
                <p className="card-text text-secondary">
              "La vacuna Pfizer es la más efectiva contra el coronavirus".
            </p>
          </Card> 
        </article>
      </section>
      <section className='p-5' style={{ background: '#ECF2F6'}}>
        <h2 className='text-center mb-5 azul'>RECOMENDACIONES</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '60%' }}>
        <Card style={{ width: '27rem', borderRadius:'17px'}} className='mb-4'>            
            <img src={recomendaciones} alt ="" style={{width:"26.5rem"}} className="photo"/>
              <h4 className="card-title">Recuerda</h4>
                <p className="card-text text-secondary">
              "Recuerda  llevar una alimentación más sana".
            </p>
          </Card> 
          <Card style={{ width: '27rem', borderRadius:'17px'}} className='mb-4'>
            <img src={recomendacion} alt ="" style={{width:"26.5rem"}}  className="photo"/>
              <h4 className="card-title">Te recomendamos</h4>
                <p className="card-text text-secondary">
              "Hacer ejercicios al menos 3 veces a la semana durante 1hora."
               </p>
          </Card> 
        </article>
      </section>
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>ATENCIÓN NUTRICIONAL</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '60%' }}>
        <Card  style={{ width: '27rem',  borderRadius:'17px'}} className='mb-4'>
            <img src={cita} alt ="" style={{width:"26.5rem"}} className="photo"></img>
              <h4 className="card-title">Cuida tu alimentación</h4>
                <p className="card-text text-secondary">
              "Consume menos carbohidratos."
            </p>
          </Card> 
          <Card  style={{ width: '27rem', borderRadius:'17px'}} className='mb-4'>            
            <img src={nutricion} alt ="" style={{width:"26.5rem"}} className="photo"/>
              <h4 className="card-title">Receta del día</h4>
                <p className="card-text text-secondary">
              "Es importante comer al menos 2 frutas al día."
            </p>
          </Card> 
        </article>
      </section>
    </>
  )
}
