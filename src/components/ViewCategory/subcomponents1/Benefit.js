import React, { useState } from 'react';
import {Header} from '../../home/Header';
import { Modal, Card, Button } from "react-bootstrap";
import becasDos from '../../../images/becas2.png';
import fallecimiento from '../../../images/fallecimiento2.png';
import linaje from '../../../images/linajeperuano2.png';
import icpna from '../../../images/icpna.png';
import '../../../styles/paula.css';

export const Benefit = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>BECAS</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '80%' }}>
        <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                <img src={becasDos} alt ="" style={{width:"25rem", height:"23rem", borderRadius:'17px', margin:"0"}} className="photo "/>
                </Card.Text> 
                <div className="description">
                  <h4>Becas Perú</h4>
                <p className="text-secondary">
                "Becas para hijos de nuestro personal con más de 5 años laborando ."
              </p>
              </div>
              <Button variant="primary" onClick={handleShow} style={{backgroundColor: "#0D0B6E", padding:"5px 10px", maxWidth:"20%", height: "fit-content", marginTop:"150px"}}>Ver más</Button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Body >
                oo
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
              </Modal>              
              
        </article>
      </section>
      <section className='p-5' style={{ background: '#ECF2F6'}}>
        <h2 className='text-center mb-5 azul'>FALLECIMIENTO</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '80%' }}>
        <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                <img src={fallecimiento} alt ="" style={{width:"25rem", height:"23rem", borderRadius:'17px', margin:"0"}} className="photo "/>
                </Card.Text> 
                <div className="description">
                  <h4>Fallecimiento</h4>
                <p className="text-secondary">
                En casos de fallecimiento de un familiar directo contamos .
              </p>
              <p className="text-secondary">
                En casos de fallecimiento de un familiar directo contamos .
              </p>
              </div>
              <Button variant="primary" onClick={handleShow} style={{backgroundColor: "#0D0B6E", padding:"5px 10px", maxWidth:"20%", height: "fit-content", marginTop:"150px"}}>Ver más</Button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Body >
                oo
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
              </Modal>              
              
        </article>
      </section>
      
      <section className='p-5' style={{ background: '#ECF2F6'}}>
        <h2 className='text-center mb-5 azul'>LINAJES PERUANOS</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '80%' }}>
        <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                <img src={linaje} alt ="" style={{width:"25rem", height:"23rem", borderRadius:'17px', margin:"0"}} className="photo " />
                </Card.Text> 
                <div className="description">
                  <h4>Linaje</h4>
                <p className="text-secondary">
                En casos de fallecimiento de un familiar directo contamos .
              </p>
              </div>
              <Button variant="primary" onClick={handleShow} style={{backgroundColor: "#0D0B6E", padding:"5px 10px", maxWidth:"20%", height: "fit-content", marginTop:"150px"}}>Ver más</Button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Body >
                oo
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
              </Modal>              
              
        </article>
      </section>
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>ICPNA</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '80%' }}>
        <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                <img src={icpna} alt ="" style={{width:"25rem", height:"23rem", borderRadius:'17px', margin:"0"}} className="photo "/>
                </Card.Text> 
                <div className="description">
                  <h4>Cursos de inglés</h4>
                  <p className="text-secondary">
                En casos de fallecimiento de un familiar directo contamos .
              </p>
              </div>
              <Button variant="primary" onClick={handleShow} style={{backgroundColor: "#0D0B6E", padding:"5px 10px", maxWidth:"20%", height: "fit-content", marginTop:"150px"}}>Ver más</Button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Body >
                oo
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
              </Modal>              
              
        </article>
      </section>
    </>
  )
}