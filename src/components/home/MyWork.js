/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { Header } from "./Header";
import { Card, Button, Modal } from "react-bootstrap";
import appautoserv from '../../images/appautoserv.png';
import appdigdesk from '../../images/appdigdesk.png';
import apprecibo from '../../images/apprecibo.png';
import appvisita from '../../images/appvisita.png';
import campus from '../../images/campus.png';
import { useAuth } from '../../context/AuthProvider'
import { getUser } from '../../firebase/firestore';

export const MyWork = () => {

  const { currentUser } = useAuth();

  const [perfil, setPerfil] = useState('');
  console.log(perfil)
  
  // useEffect(() => {
  //   getUser(currentUser.uid).then((user)=>{
  //     console.log(user.data())
  //     setPerfil(user.data().perfil)})
  // }, [])
  useEffect(() => {
    if (currentUser) {
      getUser(currentUser.uid).then((user) => {
        setPerfil(user.data().perfil);
      });
    } else {
      console.error("no hay current user");
    }
  }, [currentUser]);

  //MODAL
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const click1=(key)=>{
    //window.open("https://campus.siderperu.pe/", '_blank')
    switch (key) {
      case 'campus':
        window.open("https://campus.siderperu.pe/", '_blank')
      break;
      case 'recibo':
        window.open("https://siderperu.turecibo.com/e/", '_blank')
      break;
      case 'visita':
        window.open("https://webgestiontercerossider.azurewebsites.net/Login", '_blank')
      break;  
      case 'desk':
        window.open("https://gerdau.service-now.com/auth_redirect.do?sysparm_stack=no&sysparm_url=https%3A%2F%2Fggportal.gerdau.net%2Fsaml2%2Fidp%2Fsso%3FSAMLRequest%3DlVJLT8JAEP4rzd77hBTcUBKEGEkQG0AP3qbdATZpd%252BvOFvTfWxaMeJDE684332t2RFBXScMnrd2rFb63SNb7qCtF%252FDzJWGsU10CSuIIaiduSrydPC54EEW%252BMtrrUFfMmRGis1GqqFbU1mjWagyzxZbXI2N7ahngY7tAIaAM6j3ylj0Gp61DBoYEdBkIzb9YZkApOTFd7u0YbC1VwIVBoQ2cvlKIJibq9B21KdCkytoWKkHnzWcbWyymIXtpPiiJNokGRxsUdQBr1U5H2yiEOcdsBKQciecCfVaIW54osKJuxJEpiPxr4SX8TpzyKedwPeoPBG%252FPyS%252F57qYRUu9tlFWcQ8cfNJvfz5%252FXGERykQLPs0P%252Fq6RUNuY46ZjYeuTa4s22u73fbEXwfjY1vS4%252FCa4GLXMNPruezXFey%252FPQmVaWPU4NguyTWtOiOUoP920McxO5FCn%252FroLxV1GAptxIFC8cX2d%252Ffc%252FwF%26RelayState%3Dhttps%253A%252F%252Fgerdau.service-now.com%252Fgerdau%26SigAlg%3Dhttp%253A%252F%252Fwww.w3.org%252F2000%252F09%252Fxmldsig%2523rsa-sha1%26Signature%3DKO3LR32x1pkSx4ZnsHtRyGzdz9HVfLC%252FBoUIQR2j9q18fnXUIvmVyCHtd%252FNakY38wPeyv08%252BDGGOxxl%252FdSY0nLSgRZYNVsPOgyURt6nR93vKUdZ%252BSfrkE9F99J5VssH8I7Vc9phV7I3OK6%252FhAfMj9Ji8eea2YJPAHBOaxyxrNEs%253D", '_blank')
      break;  
      case 'autoserv':
        //window.open("https://www.google.com/url?q=https://gerdaucld-my.sharepoint.com/personal/yuri_carpio_sider_com_pe/_layouts/15/onedrive.aspx?id%3D%252Fpersonal%252Fyuri%255Fcarpio%255Fsider%255Fcom%255Fpe%252FDocuments%252FAutoseguro%2520M%25C3%25A9dico%2520Familiar%26originalPath%3DaHR0cHM6Ly9nZXJkYXVjbGQtbXkuc2hhcmVwb2ludC5jb20vOmY6L2cvcGVyc29uYWwveXVyaV9jYXJwaW9fc2lkZXJfY29tX3BlL0VtRjdDOFVRc3UxSHRYUEU5amRSVHVVQklVOERHN1pjbEFoOWhDVUN2M0twWlE%255FcnRpbWU9QWVtQllUWkQyVWc&sa=D&source=editors&ust=1627146102130000&usg=AOvVaw2k_8ahetOdOCvlIC8H_fp4", '_blank')
      break;             
      default:
        break;
    }
  }
  return (
    <>
      <Header />
      <section className='p-5'>
        <h2 className='text-center mb-5 azul'>APPLICATIVOS DE COMUNICACIÓN</h2>
        <article className='d-flex flex-wrap justify-content-between mx-auto' style={{  maxWidth: '80%' }}>

          {/* CAMPUS SIDER */}

          <Card onClick={()=> click1('campus')}  border=" border-4" style={{ width: '15rem', borderColor: "#83929B", borderRadius:'17px', height:'15rem'}} className='mb-4'>
            <figure className='mx-auto'>
              <img src={campus} alt=""  style={{width:'100%', height:'9rem', objectFit:'contain'}} />
            </figure>
            <Card.Body>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                CAMPUS SIDER
              </Card.Text>
            </Card.Body>
          </Card>

           {/* TU RECIBO */}

          <Card onClick={()=> click1('recibo')} border=" border-4" style={{ width: '15rem', borderColor: "#83929B", borderRadius:'17px', height:'15rem'}} className='mb-4'>
            <figure className='mx-auto'>
              <img src={apprecibo} alt="" style={{width:'100%', height:'9rem', objectFit:'contain'}}  />
            </figure>
            <Card.Body>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                TU RECIBO
              </Card.Text>
            </Card.Body>
          </Card> 


           {/* GESTION DE VISITAS - ADMINISTRATIVOS EJECUTIVOS*/}
           { perfil==='Administrativos'|| perfil ==='Ejecutivos'
            ? <Card onClick={()=> click1('visita')}  border=" border-4" style={{ width: '15rem', borderColor: "#83929B", borderRadius:'17px', height:'15rem'}} className='mb-4'>
              <figure className='mx-auto'>
                <img src={appvisita} alt=""  style={{width:'100%', height:'9rem', objectFit:'contain'}}  />
              </figure>
              <Card.Body>
                <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                  GESTIÓN DE VISITAS
                </Card.Text>
              </Card.Body>
            </Card> 
            : null
           }
          {/* DIGITAL DESK */}
          <Card onClick={()=> click1('desk')} border=" border-4" style={{ width: '15rem', borderColor: "#83929B", borderRadius:'17px', height:'15rem'}} className='mb-4'>
            <figure className='mx-auto'>
              <img src={appdigdesk} alt=""  style={{width:'100%', height:'9rem', objectFit:'contain'}}  />
            </figure>
            <Card.Body>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                DIGITAL DESK
              </Card.Text>
            </Card.Body>
          </Card> 
          
          {/* AUTOSERVICIO*/}
          <Card onClick={handleShow}/* onClick={()=> click1('autoserv')} */ border=" border-4" style={{ width: '15rem', borderColor: "#83929B", borderRadius:'17px', height:'15rem'}} className='mb-4'>
            <figure className='mx-auto'>
              <img src={appautoserv} alt="" style={{width:'100%', height:'9rem', objectFit:'contain'}} />
            </figure>
            <Card.Body>
              <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }}>
                AUTOSERVICIO
              </Card.Text>
            </Card.Body>
          </Card> 
          <>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header >
                <Modal.Title>¡Warning!</Modal.Title>
              </Modal.Header>
              <Modal.Body>¡Para ingresar a Autoservicio, debes utilizar la red privada de SIDERPERU!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </article>
      </section>
    </>
  )
}
