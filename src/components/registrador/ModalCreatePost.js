import React, { useRef } from 'react'
import { Modal, Dropdown/* , Button, ButtonGroup */ } from "react-bootstrap";
import { useAuth } from '../../context/AuthProvider';
import { createPost } from '../../firebase/firestore'

export const ModalCreatePost = (props) => {

  const mystyle = {
    color: "white",
    backgroundColor: "#0D0B6E",
    margin: "5px 43px 5px",
    marginBottom:"60px"
  };

  const categories = {
    backgroundColor: "#108AB0",
    borderRadius:"3px",
    padding:"5px 10px",
    textAlign: "center",
  }

  const cancel = {
    color: "white",
    backgroundColor: "#FCAC04",
    borderRadius:"10px",
    padding:"5px 10px",
    fontSize: "20px",
    position:"relative",
    marginRight: "190px",
  };

  const post = {
    color: "white",
    backgroundColor: "#0D0B6E",
    borderRadius:"10px",
    padding:"5px 10px",
    fontSize: "20px",
    marginRight: "40px",
  };
  
  //ESTADO INICIAL DE REGISTRO DE POST
    const { currentUser } = useAuth();
    console.log(currentUser)
    const [ category, setCategory] = React.useState('')
    const [ subcategory, setSubcategory] = React.useState('')
    const [ profile, setProfile] = React.useState('')
    const [ title, setTitle] = React.useState('')
    const [ subtitle, setSubtitle] = React.useState('')
    const [ content, setContent] = React.useState('')
    const [ comment, setComment] = React.useState('')

   
  const addPost = () =>{
    const initialState = {
      owner: currentUser.email,
      title: title,
      subtitle: subtitle,
      content: content,
      comment: comment,
      category: category,
      subcategory: subcategory,
      status: "pending",
      profile: profile,
      img: '',
    }
    createPost(initialState)
  } 


  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <h3>Nueva Publicación</h3>  
        </Modal.Header>
        <Modal.Body  className="modalDialog">
          <h4>Título</h4>   
          <input id='text-post' placeholder='Publicando..' spellcheck='false' onChange={(e)=> setTitle(e.target.value)} required ></input>
          <h4>Sub Título</h4> 
          <input id='text-post' placeholder='Publicando..' spellcheck='false'  onChange={(e)=> setSubtitle(e.target.value)} required ></input>
          <h4>Contenido del Post</h4>
          <textarea id='text-post' placeholder='Publicando..' spellcheck='false' onChange={(e)=> setContent(e.target.value)} required ></textarea>
          <h4>Comentarios </h4>
          <textarea id='text-post' placeholder='Publicando..' spellcheck='false' onChange={(e)=> setComment(e.target.value)} required ></textarea>
          <img src="https://lh3.googleusercontent.com/proxy/DSeeZ4iLSG7301Y_nofbUHSAxNeNTIEe56JYFpd7DzP3lj0qrTC3eF_j4hE1XcG2pftmBnrMGXgPKMfRHZTTfeQDSwgw-HXJ03TBGoMizeHzzRdyrsS00L5qiOl8jTbJuMfXc1ToBTGFYvYsRWUaxkD2z1pJw01B1odOFqaZJosl1FnmlSCIowA" alt="" width="80%" style={{margin:"30px "}}/>
          <input type="file" name="file" style={{margin:"20px 25px"}}></input>              
        </Modal.Body>
      <div className='d-flex justify-content-beetwen'>
        <article>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              CATEGORÍAS
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-3" onClick={()=>setCategory('Home')} >HOME</Dropdown.Item>
                <Dropdown.Item href="#/action-1" onClick={()=>setCategory('Salud')}>SALUD</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={()=>setCategory('Seguridad')} >SEGURIDAD</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={()=>setCategory('Beneficios')} >BENEFICIOS</Dropdown.Item>
                
            </Dropdown.Menu>
          </Dropdown>
          { category === 'Home' ?        
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  HOME
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={()=>setSubcategory('Para-Ti-')}>Para Ti</Dropdown.Item>
                    <Dropdown.Item href="#/action-1" onClick={()=>setSubcategory('Para-Ti-')}>Para Ti</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Noticias-Destacadas')}>Noticias Destacadas del Mes</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={()=>setSubcategory('Cumpleaños')}>Cumpleaños</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={()=>setSubcategory('Otros-Reconocimientos')}>Otros Reconocimientos</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              :<></>   
          } 
          { category === 'Salud' ?        
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  SALUD
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={()=>setSubcategory('Vacunación')}>Cronograma de Vacunación</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Recomendaciones')}>Recomendaciones</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={()=>setSubcategory('Nutrición')}>Atención Nutricional</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              :<></>   
          } 
          {
            category === 'Seguridad' ?
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                SEGURIDAD
              </Dropdown.Toggle>
              <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" onClick={()=>setSubcategory('Sin-Accidentes')}>Días sin accidentes</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Ganadores-Campaña')}>Ganadores de campaña del Medio Ambiente</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            :<></>
          }
          {
            category === 'Beneficios' ?
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                BENEFICIOS
              </Dropdown.Toggle>
              <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" onClick={()=>setSubcategory('Becas')}>Becas</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Fallecimiento')}>Fallecimiento</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Autoseguro')}>Autoseguro Médico Familiar</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Linajes-Peruanos')}>Linajes Peruanos</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('ICPNA')}>ICPNA</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            :<></>
          }
          </article>
        <article>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                PERFILES
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"  onClick={()=>setProfile('Administrativos')}>Administrativos</Dropdown.Item>
                <Dropdown.Item href="#/action-2"  onClick={()=>setProfile('Ejecutivos')}>Ejecutivos</Dropdown.Item>
                <Dropdown.Item href="#/action-2"  onClick={()=>setProfile('Operadores')}>Operativos</Dropdown.Item>
                <Dropdown.Item href="#/action-2"  onClick={()=>setProfile('Todos')}>Todos</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </article>

      </div>

        <Modal.Footer>
          <button style={cancel} onClick={props.handleClose}>
            Cancelar
          </button>
          <button style={post} onClick={()=>addPost()}>Enviar</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
