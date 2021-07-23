import React, { useState } from "react";
import { Card, Modal, Button} from "react-bootstrap";
import cumpleanos from '../../images/cumpleanos.png'
 

export const Main = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
 
      {/* PARA TI */}

      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>PARA TI</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto'  style={{ maxWidth: '70%' }} >
          <Card border="gris3 border-3" style={{ width: '14rem', borderRadius:'17px', height:'13rem' }} className='mb-4'>
              <figure className='mx-auto'>
              <div className='briFa'><i className="fas fa-user-graduate azulclaro fa-3x"></i></div>
            </figure>
            <Card.Body>
              <Card.Text style={{ color: '#003366', fontWeight:'bold', textAlign:'center' }}>
                Cronograma de capacitación
              </Card.Text>
              <div><button className="briCardBtn" onClick={handleShow}> Conoce más <i class="fas fa-arrow-circle-right"></i></button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Body  className='d-flex'>
                  <figure style={{ width: '14rem', borderRadius:'17px', height:'13rem' }}>
                    <img src="https://i.ytimg.com/vi/Y4Cvt6VLqd8/maxresdefault.jpg" alt="" style={{width:'100%'}}/>
                  </figure>
                  <div className=''>
                    <h5>Capacitación de inicio de año</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore culpa quae in nisi? Hic, accusamus? Autem officia tenetur nulla totam?</p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
              </Modal>
        </div>
            </Card.Body>
          </Card>
          <Card border="gris3 border-3" style={{ width: '14rem', borderRadius:'17px', height:'13rem' }} className='mb-4'>
            <figure className='mx-auto'>
              <div className='briFa'>
                <i className="fas fa-user-friends azulclaro fa-3x"></i>
              </div>
            </figure>
            <Card.Body>
              <Card.Text style={{ color: '#003366', fontWeight:'bold', textAlign:'center' }}>
                Convocatorias internas
              </Card.Text>
                <div><button className="briCardBtn" onClick={handleShow}/* style={{color:'#FFCC00', fontWeight:'bold', background:'white', borderColor:'transparent'}} */> Conoce más <i class="fas fa-arrow-circle-right"></i></button>
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
                </div>
            </Card.Body>
          </Card>
          <Card border="gris3 border-3" style={{ width: '14rem', borderRadius:'17px', height:'13rem' }} className='mb-4'>
            <figure className='mx-auto'>
              <div className='briFa'>
                <i className="far fa-thumbs-up azulclaro fa-3x"></i>
              </div>
            </figure>
            <Card.Body>
              <Card.Text style={{ color: '#003366', fontWeight:'bold', textAlign:'center' }}>
                Beneficios
              </Card.Text>
                <div><button className="briCardBtn" onClick={handleShow}> Conoce más <i className="fas fa-arrow-circle-right"></i></button>
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
                </Modal></div>
            </Card.Body>
          </Card>
          <Card border="gris3 border-3" style={{ width: '14rem', borderRadius:'17px', height:'13rem' }} className='mb-4'>
            <figure className='mx-auto'>
              <div className='briFa'>
                <i className="far fa-calendar-alt azulclaro fa-3x" ></i>
              </div>
            </figure>
            <Card.Body>
              <Card.Text style={{ color: '#003366', fontWeight:'bold', textAlign:'center'}}>
                Actividad
              </Card.Text>
              <div><button className="briCardBtn" onClick={handleShow}> Conoce más <i className="fas fa-arrow-circle-right"></i></button>
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
                </Modal></div>
            </Card.Body>
          </Card>         
        </article>
      </section>

       {/* NNOTICIAS DESTACADAS DEL MES */}
      <section  style={{ background: '#ECF2F6'}}>
        <h2 className='text-center mb-5 azul'>NOTICIAS DESTACADAS DEL MES</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '60%' }}>
          <Card  style={{ width: '27rem', borderRadius:'17px', height:'25rem', objectFit:'contain'}} className='mb-4'>
              {/* <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }} className="card-body"> */}
              <img  src="https://3.imimg.com/data3/WD/WX/MY-4426420/ss304-steel-wire-rod-250x250.jpg" alt ="" style={{height:"75%", margin:"0"}} className="briNoticia"></img>
              <h4 className="card-title">RÉCORD LAMINACIÓN LARGOS </h4>
                <p className="card-text text-secondary">
                "Hemos logrado el récord máximo de producción en comparaciónd e los últimos 4 años."
            </p>
    
              {/* </Card.Text> */}        
          </Card> 
          <Card  style={{ width: '27rem', borderRadius:'17px', height:'25rem', objectFit:'contain'}} className='mb-4'>            
            <img src="https://img.freepik.com/vector-gratis/ilustracion-plana-fiestas-patrias-peru_23-2148968396.jpg?size=626&ext=jpg" alt ="" style={{ height:"75%", margin:"0"}} className="briNoticia"></img>
              <h4 className="card-title">FIESTAS PATRIAS</h4>
                <p className="card-text text-secondary">
              "Celebremos a lo grande nuestro Bicentenario del Perú."
            </p>
          </Card> 
        </article>
      </section>

       {/* RECONOCIMIENTOS DE LA SEMANA */}
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>RECONOCIMIENTOS DE LA SEMANA</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '60%' }}>
        <Card  style={{ width: '50rem', borderRadius:'17px', height:'25rem', objectFit:'contain'}} className='mb-4 mx-auto'>
              {/* <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }} className="card-body"> */}
              <img  src={cumpleanos} alt ="" style={{height:"75%", margin:"0"}} className="briNoticia"></img>
              <h4 className="card-title">"5 años laborando juntos"  </h4>
                <p className="card-text text-secondary">
                "Nos sentimos orgullosos de ser parte de este gran equipo"
            </p>
    
              {/* </Card.Text> */}        
          </Card> 
        </article>
    </section>
   </> 
  );
};
