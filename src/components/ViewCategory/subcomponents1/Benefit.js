import React, { useState, useEffect} from 'react';
import {Header} from '../../home/Header';
import { Modal, Card, Button } from "react-bootstrap";
import becas from '../../../images/becas.png';
import autoseguro from '../../../images/autoseguro.png';
import linaje from '../../../images/linajeperuano.png';
import icpna from '../../../images/icpna.png';
import '../../../styles/paula.css';
import { useAuth } from '../../../context/AuthProvider';
import { getUser } from '../../../firebase/firestore';


export const Benefit = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { currentUser } = useAuth();

  const [perfil, setPerfil] = useState('');
  console.log(perfil)
  
  useEffect(() => {
    getUser(currentUser.uid).then((user)=>{
      console.log(user.data())
      setPerfil(user.data().perfil)})
  }, [])


  return (
    <>
      <Header />

      {/* BECAS */}
      {
        perfil==='Administrativos'|| perfil ==='Operativos' 
        ?
        <section className='p-5'>
        <h2 className='text-center mb-5 azul'>BECAS</h2>
          <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '80%' }}>
                <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                <img src={becas} alt ="" style={{width:"25rem", height:"23rem", borderRadius:'17px', margin:"0"}} className="photo "></img>
                </Card.Text> 
                <div className="description">
                <p className="text-secondary">
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                <br></br>
                "lorem"
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
                  I will not close if you click outside me. Don't even try to press
                  escape key.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
              </Modal>              
          </article>
        </section>
      : null
      }


      {/*  FALLECIMIENTO*/}
      {
        perfil==='Administrativos'|| perfil ==='Operativos' || perfil ==='Ejecutivos'
        ?   <section className='p-5' style={{ background: '#ECF2F6'}}>
              <h2 className='text-center mb-5 azul'>FALLECIMIENTO</h2>
              <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '80%' }}>
                    <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                    <img src="https://previews.123rf.com/images/gampingdesign/gampingdesign1207/gampingdesign120700140/14805660-ilustraci%C3%B3n-vectorial-de-la-paloma-de-la-paz.jpg" alt ="" style={{width:"25rem", height:"23rem", borderRadius:'17px', margin:"0"}} className="photo "></img>
                    </Card.Text>  
                    <div className="description">
                    <p className="text-secondary">
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                    <br></br>
                    "lorem"
                  </p>
                  </div>
                  <Button variant="primary" onClick={handleShow} style={{backgroundColor: "#0D0B6E", padding:"5px 10px", maxWidth:"20%", height: "fit-content", marginTop:"150px"}}>Ver más</Button>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Body md>
                      I will not close if you click outside me. Don't even try to press
                      escape key.
                    </Modal.Body>
                    <Modal.Footer md>
                      <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                  </Modal>     
              </article>
            </section>
          : null  
      }

      {/* AUTOSEGUROS */}
      {perfil==='Administrativos'|| perfil ==='Operativos' || perfil ==='Ejecutivos'
        ?
          <section className='p-5'>
            <h2 className='text-center mb-5 azul'>AUTOSEGURO MÉDICO FAMILIAR</h2>
            <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '80%' }}>
        
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
              <img src={autoseguro} alt ="" style={{width:"25rem", height:"23rem", borderRadius:'17px', margin:"0"}} className="photo "></img>
              </Card.Text>    
              <div className="description">
              <p className="text-secondary">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              <br></br>
              "lorem"
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
                I will not close if you click outside me. Don't even try to press
                escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
              </article>
          </section>
        :null
      }

       {/* AUTOSEGUROS - TODOS*/}
      <section className='p-5' style={{ background: '#ECF2F6'}}>
        <h2 className='text-center mb-5 azul'>LINAJES PERUANOS</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '80%' }}>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
              <img src={linaje} alt ="" style={{width:"25rem", height:"23rem", borderRadius:'17px', margin:"0"}} className="photo "></img>
              </Card.Text>    
              <div className="description">
              <p className="text-secondary">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              <br></br>
              "lorem"
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
                I will not close if you click outside me. Don't even try to press
                escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </article>
      </section>

      {/* ICPNA - TODOS*/}
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>ICPNA</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '80%' }}>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
              <img src={icpna} alt ="" style={{width:"25rem", height:"23rem", borderRadius:'17px', margin:"0"}} className="photo "></img>
              </Card.Text>  
              <div className="description">
              <p className="text-secondary">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              <br></br>
              "lorem"
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
                I will not close if you click outside me. Don't even try to press
                escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" style={{backgroundColor: "#0D0B6E"}} onClick={handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>    
        </article>
      </section>
    </>
  )
}