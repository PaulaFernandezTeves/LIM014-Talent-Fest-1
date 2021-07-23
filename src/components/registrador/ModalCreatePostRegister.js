import React, {useState} from 'react'
import { Modal, Dropdown, InputGroup, FormControl } from "react-bootstrap";
import { useAuth } from '../../context/AuthProvider';
import { createPost } from '../../firebase/firestore'

export const ModalCreatePostRegister = (props) => {

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
  
  //ESTADO INICIAL DE REGISTRO DE POSTS
    const { currentUser } = useAuth();
    //console.log(currentUser)
    const [ category, setCategory] = useState('')
    const [ subcategory, setSubcategory] = useState('')
    const [ title, setTitle] = useState('')
    const [ subtitle, setSubtitle] = useState('')
    const [ content, setContent] = useState('')
    const [ moreContent, setMoreContent] = useState('')
    const [ comment, setComment] = useState('')
    // const [ manager, setManager] = useState('')
    // const [ ejecut, setEjecut] = useState('')
    // const [ operat, setOperat] = useState('')
    // const [ practi, setPracti] = useState('')
    const [ manager, setManager] = useState({type: 'Administrativos', value:false })
    const [ ejecut, setEjecut] = useState({type: 'Ejecutivos', value:false })
    const [ operat, setOperat] =  useState({type: 'Operativos', value:false })
    const [ practi, setPracti] = useState({type: 'Practicantes', value:false })

  //ESTADO INICIAL DE REGISTRO DE POSTS
  const addPost = () =>{
    const initialState = {
      owner: currentUser.email,
      title: title,
      subtitle: subtitle,
      content: content,
      moreContent: moreContent,
      comment: comment,
      category: category,
      subcategory: subcategory,
      status: "pendiente",
      profile: [manager, ejecut,operat, practi],
      img: '',
    }
    createPost(initialState);
    props.handleClose();
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
          <h5>Título</h5>   
          <input id='text-post' onChange={(e)=> setTitle(e.target.value)} required ></input>
          <h5>Sub Título</h5> 
          <input id='text-post' onChange={(e)=> setSubtitle(e.target.value)} required ></input>
          <h5>Contenido del Post</h5>
          <textarea id='text-post' onChange={(e)=> setContent(e.target.value)} required ></textarea>
          <h5>Más información del post</h5>
          <textarea id='text-post' onChange={(e)=> setMoreContent(e.target.value)} required ></textarea>
          <h5>Comentarios </h5>
          <textarea id='text-post' onChange={(e)=> setComment(e.target.value)} required ></textarea>
          <img src="https://lh3.googleusercontent.com/proxy/DSeeZ4iLSG7301Y_nofbUHSAxNeNTIEe56JYFpd7DzP3lj0qrTC3eF_j4hE1XcG2pftmBnrMGXgPKMfRHZTTfeQDSwgw-HXJ03TBGoMizeHzzRdyrsS00L5qiOl8jTbJuMfXc1ToBTGFYvYsRWUaxkD2z1pJw01B1odOFqaZJosl1FnmlSCIowA" alt="" width="80%" style={{margin:"30px "}}/>
          <input type="file" name="file" style={{margin:"20px 25px"}}></input>              
        </Modal.Body>
      <article>
        <p><b>Vista: {category}</b></p>
        <p><b>Sección: {subcategory}</b></p>
      </article>  
      <div className='d-flex justify-content-beetwen'>
        <article>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              VISTA
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
                    <Dropdown.Item href="#/action-1" onClick={()=>setSubcategory('Para Ti')}>Sección - Para Ti</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Noticias Destacadas')}>Sección - Noticias Destacadas del Mes</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={()=>setSubcategory('Cumpleaños')}>Sección - Cumpleaños</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={()=>setSubcategory('Otros Reconocimientos')}>Sección - Otros Reconocimientos</Dropdown.Item>
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
                    <Dropdown.Item href="#/action-1" onClick={()=>setSubcategory('Vacunación')}>Sección - Cronograma de Vacunación</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Recomendaciones')}>Sección - Recomendaciones</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={()=>setSubcategory('Nutrición')}>Sección - Atención Nutricional</Dropdown.Item>
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
                  <Dropdown.Item href="#/action-1" onClick={()=>setSubcategory('Sin Accidentes')}>Sección - Días sin accidentes</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Ganadores de Campaña del Medio Ambiente')}>Sección - Ganadores de campaña del Medio Ambiente</Dropdown.Item>
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
                  <Dropdown.Item href="#/action-1" onClick={()=>setSubcategory('Becas')}>Sección - Becas</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Fallecimiento')}>Sección - Fallecimiento</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Autoseguro Médico')}>Sección - Autoseguro Médico Familiar</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Linajes Peruanos')}>Sección - Linajes Peruanos</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('ICPNA')}>Sección - ICPNA</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            :<></>
          }
          </article>
          <article>
          <h6><b>Perfiles</b></h6>
          <InputGroup className="mb-2">
            <InputGroup.Checkbox onClick={()=>setManager({type: 'Administrativos', value:true })} aria-label="Checkbox for following text input" />
            <FormControl value='Administrativos' aria-label="Text input with checkbox" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox onClick={()=>setEjecut({type: 'Ejecutivos', value:true })} aria-label="Checkbox for following text input" />
            <FormControl value='Ejecutivos' aria-label="Text input with checkbox" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox onClick={()=>setOperat({type: 'Operadores', value:true })} aria-label="Checkbox for following text input" />
            <FormControl value='Operadores' aria-label="Text input with checkbox" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox onClick={()=>setPracti({type: 'Practicantes', value:true })} aria-label="Checkbox for following text input" />
            <FormControl value='Practicantes' aria-label="Text input with checkbox" />
          </InputGroup>
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
