// REVISION Y EDICION DEL ADMIN

import React, { useState, useEffect } from "react";
import {
  Modal,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { updateStatusPost, updateStatusPostRegister } from '../../firebase/firestore'

export const ModalEditPost = (props) => {
  const cancel = {
    color: "white",
    backgroundColor: "#FCAC04",
    borderRadius:"10px",
    padding:"5px 10px",
    fontSize: "20px",
    position:"relative",
    marginRight: "190px",
  };

  const stylePost = {
    color: "white",
    backgroundColor: "#0D0B6E",
    borderRadius: "10px",
    padding: "5px 10px",
    fontSize: "20px",
    marginRight: "40px",
  };
  
  const { post } = props;
  const [datos, setDatos] = useState(post);
  
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const [category, setCategory ] = useState('Escoge una página')
  const [subcategory, setSubcategory ] = useState('')   
   //FN TRAER VALORES INPUT CHECKBOX
   const [ manager, setManager] = useState({type: 'Administrativos', value:false })
   const [ ejecut, setEjecut] = useState({type: 'Ejecutivos', value:false })
   const [ operat, setOperat] =  useState({type: 'Operativos', value:false })
   const [ practi, setPracti] = useState({type: 'Practicantes', value:false })

   const handleChangeCheck = (key) => {
    switch (key) {
      case 'Administrativos':
        setManager({type: 'Administrativos', value: !manager.value})
      break;
      case 'Operativos':
        setOperat({type: 'Operativos', value: !operat.value })
      break;
      case 'Ejecutivos':
        setEjecut({type: 'Ejecutivos', value: !ejecut.value })
      break;
      case 'Practicantes':
        setPracti({type: 'Practicantes', value: !practi.value })
        break;        
      default:
        break;
    }      
   }
    useEffect(() => {
      console.log(datos.profile);
      setManager(datos.profile[0])
      setEjecut(datos.profile[1])
      setOperat(datos.profile[2])
      setPracti(datos.profile[3])
    }, [])

  //ESTADO INICIAL DE REGISTRO DE POSTS
     
  // state Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rejectPost = (e) => {
    e.preventDefault()
    post.status='rechazado';
    post.profile=[manager, ejecut, operat, practi]// cfijarse si cambiaaaaaaa!!
    console.log(post)
    updateStatusPost(post.postId, post)
    setShow(false)
  }

  const publishedPost = () => {    
    datos.status='publicado'
    datos.profile=[manager, ejecut, operat, practi]
    console.log(post)
    updateStatusPostRegister(post.postId, post) //ahora enviar los nuevos datos
  }
 

  return (
    <>
      <Button  onClick={handleShow}>
        <i className="fas fa-edit"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <h3>Nueva Publicación</h3>
        </Modal.Header>
        <Modal.Body className="modalDialog">
          <h5>Título</h5>
          <input
            id="text-post"
            placeholder="Publicando.."
            spellcheck="false"
            onChange={handleInputChange}
            name="title"
            defaultValue={post.title}
          />
          <h5>Sub Título</h5>
          <input
            id="text-post"
            placeholder="Publicando.."
            spellcheck="false"
            onChange={handleInputChange}
            name="subtitle"
            defaultValue={post.subtitle}
            required
          >
          </input>
          <h5>Contenido del Post</h5>
          <textarea
            id="text-post"
            placeholder="Publicando.."
            spellcheck="false"
            onChange={handleInputChange}
            name="content"
            defaultValue={post.content}
            required
          >
          </textarea>
          <h5>Más información del post</h5>
          <textarea
            id="text-post"
            placeholder="Publicando.."
            spellcheck="false"
            onChange={handleInputChange}
            name="moreContent"
            defaultValue={post.moreContent}
            required
          >
            {/* {props.objEdit.moreContent} */}
          </textarea>
          <h5>Comentarios </h5>
          <textarea
            id="text-post"
            placeholder="Publicando.."
            spellcheck="false"
            onChange={handleInputChange}
            name="comment"
            defaultValue={post.comment}
            required
          >
            {/* {props.objEdit.comment} */}
          </textarea>
          <img
            src="https://lh3.googleusercontent.com/proxy/DSeeZ4iLSG7301Y_nofbUHSAxNeNTIEe56JYFpd7DzP3lj0qrTC3eF_j4hE1XcG2pftmBnrMGXgPKMfRHZTTfeQDSwgw-HXJ03TBGoMizeHzzRdyrsS00L5qiOl8jTbJuMfXc1ToBTGFYvYsRWUaxkD2z1pJw01B1odOFqaZJosl1FnmlSCIowA"
            alt=""
            width="80%"
            style={{ margin: "30px " }}
          />
          <input
            type="file"
            name="file"
            style={{ margin: "20px 25px" }}
          ></input>
        </Modal.Body>
        <article className='d-flex justify-content-beetwen'>
          <select value={category} onChange={(e)=>{setCategory(e.target.value)}} >
            <option value=''>ESCOGE UNA PÁGINA</option>
            <option value='Home'>HOME</option>
            <option value='Salud'>SALUD</option>
            <option value='Seguridad'>SEGURIDAD</option>
            <option value='Beneficios'>BENEFICIOS</option>
          </select>
          {
            category==='Home'
            ? <select value={subcategory} onChange={(e)=>{setSubcategory(e.target.value)}} >
                <option value=''>ESCOGE UNA SECCIÓN</option>
                <option value='Para Ti'>Sección - Para ti</option>
                <option value='Noticias Destacadas'>Sección - Noticias Destacadas</option>
                <option value='Cumpleaños'>Sección - Cumpleaños</option>
                <option value='Otros Reconocimientos'>Sección - Otros Reconocimientos</option>
              </select>
            : null  
          }
          {
            category==='Salud'
            ? <select value={subcategory} onChange={(e)=>{setSubcategory(e.target.value)}}>
                <option value=''>ESCOGE UNA SECCIÓN</option>
                <option value='Cronograma de vacunación'>Sección - Cronograma de Vacunación</option>
                <option value='Recomendaciones'>Sección - Recomendaciones</option>
                <option value='Atención nutricional'>Sección - Atención Nutricional</option>
              </select>
            : null  
          }
          {
            category==='Seguridad'
            ? <select value={subcategory} onChange={(e)=>{setSubcategory(e.target.value)}}>
                <option value=''>ESCOGE UNA SECCIÓN</option>
                <option value='Sin Accidentes'>Sección - Días sin accidentes</option>
                <option value='Ganadores de Campaña del Medio Ambiente'>Sección - Ganadores de campaña del Medio Ambiente</option>
              </select>
            : null  
          }
          {
            category==='Beneficios'
            ? <select value={subcategory} onChange={(e)=>{setSubcategory(e.target.value)}}>
                <option value=''>ESCOGE UNA SECCIÓN</option>
                <option value='Sin Accidentes'>Sección - Becas</option>
                <option value='Fallecimiento'>Sección - Fallecimiento</option>
                <option value='Autoseguro Médico'>Sección - Autoseguro Médico Familiar</option>
                <option value='Linajes Peruanos'>Sección - Linajes Peruanos</option>
                <option value='ICPNA'>Sección - ICPNA</option>
              </select>
            : null  
          }          
        </article>
        <article>
          <h6><b>Perfiles</b></h6>
          <InputGroup className="mb-2">
            <InputGroup.Checkbox
              defaultChecked={manager.value}
              onChange={()=>handleChangeCheck("Administrativos")}
              name="Administrativos"
              className="checkGroup"
              aria-label="Checkbox for following text input"
            />
            <FormControl
              value="Administrativos"
              aria-label="Text input with checkbox"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              aria-label="Checkbox for following text input"
              defaultChecked={ejecut.value}
              onChange={()=>handleChangeCheck("Ejecutivos")}
              className="checkGroup"
              name="Ejecutivos"
            />
            <FormControl
              value="Ejecutivos"
              aria-label="Text input with checkbox"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              aria-label="Checkbox for following text input"
              defaultChecked={operat.value}
              onChange={()=>handleChangeCheck("Operativos")}
              className="checkGroup"
              name="Operadores"
            />
            <FormControl
              /* ref='administrativos' */ value="Operadores"
              aria-label="Text input with checkbox"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              aria-label="Checkbox for following text input"
              defaultChecked={practi.value}
              onChange={()=>handleChangeCheck("Practicantes")}
              className="checkGroup"
              name="Practicantes"
            />
            <FormControl
              value="Practicantes"
              aria-label="Text input with checkbox"
            />
          </InputGroup>
        </article>
        <Modal.Footer>
          <button style={cancel} onClick={handleClose}>
            Cancelar
          </button>
          <button style={stylePost} onClick={rejectPost} >
            Rechazar
          </button>
          <button style={stylePost} onClick={()=> publishedPost()}>Publicar</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

