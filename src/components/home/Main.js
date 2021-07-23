import React from "react";
import { Card } from "react-bootstrap";
 

export const Main = () => {

  return (
    <>
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
              <div><button className="briCardBtn"> Conoce más <i class="fas fa-arrow-circle-right"></i></button></div>
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
                <div><button className="briCardBtn" /* style={{color:'#FFCC00', fontWeight:'bold', background:'white', borderColor:'transparent'}} */> Conoce más <i class="fas fa-arrow-circle-right"></i></button></div>
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
                <div><button className="briCardBtn"> Conoce más <i className="fas fa-arrow-circle-right"></i></button></div>
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
              <div><button className="briCardBtn"> Conoce más <i className="fas fa-arrow-circle-right"></i></button></div>
            </Card.Body>
          </Card>         
        </article>
      </section>
      <section  style={{ background: '#ECF2F6'}}>
        <h2 className='text-center mb-5 azul'>NOTICIAS DESTACADAS DEL MES</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '60%' }}>
          <Card  style={{ width: '27rem', borderRadius:'17px', height:'25rem', objectFit:'contain'}} className='mb-4'>
              {/* <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }} className="card-body"> */}
              <img  src="https://3.imimg.com/data3/WD/WX/MY-4426420/ss304-steel-wire-rod-250x250.jpg" alt ="" style={{height:"75%", margin:"0"}} className="briNoticia"></img>
              <h4 className="card-title">RÉCORD LAMINACIÓN LARGA </h4>
                <p className="card-text text-secondary">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            </p>
    
              {/* </Card.Text> */}        
          </Card> 
          <Card  style={{ width: '27rem', borderRadius:'17px', height:'25rem', objectFit:'contain'}} className='mb-4'>            
            <img src="https://img.freepik.com/vector-gratis/ilustracion-plana-fiestas-patrias-peru_23-2148968396.jpg?size=626&ext=jpg" alt ="" style={{ height:"75%", margin:"0"}} className="briNoticia"></img>
              <h4 className="card-title">FIESTAS PATRIAS</h4>
                <p className="card-text text-secondary">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            </p>
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
