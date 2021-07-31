/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  Modal,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { updateStatusPost } from '../../firebase/firestore'
import { useAuth } from "../../context/AuthProvider";
import iconfoto from "../../images/fotos.png"

export const ModalEditPost = (props) => {
  
  const { post } = props;
  const [datos, setDatos] = useState(post);
  
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  //ESTADO INICIAL DE REGISTRO DE POSTS
  const { dataUser } = useAuth();
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
     
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rejectPost = (e) => {
    e.preventDefault()
    datos.status='rechazado';
    datos.profile=[manager, ejecut, operat, practi]// cfijarse si cambiaaaaaaa!!
    datos.category=category
    datos.subcategory=subcategory
    updateStatusPost(datos.postId, datos)
    setShow(false)
  }

  const publishedPost = () => {    
    datos.status='publicado'
    datos.profile=[manager, ejecut, operat, practi]
    datos.category=category
    datos.subcategory=subcategory
    updateStatusPost(datos.postId, datos) //ahora enviar los nuevos datos
    setShow(false)
  }
  const addPendingPost = () => {
    datos.status='pendiente'
    datos.profile=[manager, ejecut, operat, practi]
    datos.category=category
    datos.subcategory=subcategory
    updateStatusPost(datos.postId, datos) //ahora enviar los nuevos datos
    setShow(false)
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
        <Modal.Body className="modalDialog pb-0">
          <h5>Título</h5>
          <input className='w-100 mb-4'
            id="text-post" 
            
            spellcheck="false"
            onChange={handleInputChange}
            name="title"
            defaultValue={datos.title}
          />
          <h5>Sub Título</h5>
          <input className='w-100 mb-4'
            id="text-post"
            
            spellcheck="false"
            onChange={handleInputChange}
            name="subtitle"
            defaultValue={datos.subtitle}
            required
          >
          </input>
          <h5>Contenido del Post</h5>
          <textarea className='w-100 mb-4'
            id="text-post"
            
            spellcheck="false"
            onChange={handleInputChange}
            name="content"
            defaultValue={datos.content}
            required
          >
          </textarea>
          <h5>Más información del post</h5>
          <textarea className='w-100 mb-4'
            id="text-post"
            
            spellcheck="false"
            onChange={handleInputChange}
            name="moreContent"
            defaultValue={datos.moreContent}
            required
          >
          </textarea>
          <h5>Comentarios </h5>
          <textarea className='w-100 mb-3'
            id="text-post"
            
            spellcheck="false"
            onChange={handleInputChange}
            name="comment"
            defaultValue={datos.comment}
            required
          >
          </textarea>
        </Modal.Body>  
        <Modal.Body  className="modalDialog add-new-photo first mb-4" id="add-photo">            
          <h5>Imagen</h5>
          <figure className="Upload__form-container-im"  style={{maxWidth:'45%', height:'45%'}}>
              <img src={iconfoto} alt="" /* ref={previewImg} */ style={{width:'100%', height:'100%' , objectFit:'contain'}}/>
          </figure>            
          <div id="add-photo">
            <input type="file" /* ref={imageRef} */ name="images[]" style={{backgroundColor:"#E5E5E5"}} 
              className="Upload__form-inputfile" /* onChange={onChangeFile} */
               /* onChange={changeImagen} */></input>
          </div>
        </Modal.Body>
        <article className='px-3  mb-4'>
          <h5 className='d-block mb-3'>Página</h5>
          <div className='px-4 mb-3 d-flex justify-content-around'>
            <h6 className='azulclaro'><b>Página:</b> {datos.category}</h6>
            <h6 className='azulclaro'><b>Sección:</b> {datos.subcategory}</h6>
          </div>
          <select className='d-block mb-3 mx-5' value={category} onChange={(e)=>{setCategory(e.target.value)}} >
            <option value=''>ESCOGE UNA PÁGINA</option>
            <option value='Home'>HOME</option>
            <option value='Salud'>SALUD</option>
            <option value='Seguridad'>SEGURIDAD</option>
            <option value='Beneficios'>BENEFICIOS</option>
          </select>
          {
            category==='Home'
            ? <select className='d-block mb-3 mx-5' value={subcategory} onChange={(e)=>{setSubcategory(e.target.value)}} >
                <option value=''>ESCOGE UNA SECCIÓN</option>
                <option value='Para Ti - Cronograma de capacitación'>Sección - Para ti - Cronograma de capacitación</option>
                <option value='Para Ti - Convocatorias Internas'>Sección - Para ti - Convocatorias Internas</option>
                <option value='Para Ti - Beneficios'>Sección - Para ti - Beneficios</option>
                <option value='Para Ti - Actividad'>Sección - Para ti - Actividad</option>
                <option value='Noticias Destacadas'>Sección - Noticias Destacadas</option>
                <option value='Cumpleaños'>Sección - Cumpleaños</option>
                <option value='Otros Reconocimientos'>Sección - Otros Reconocimientos</option>
              </select>
            : null  
          }
          {
            category==='Salud'
            ? <select className='d-block mb-3 mx-5' value={subcategory} onChange={(e)=>{setSubcategory(e.target.value)}}>
                <option value=''>ESCOGE UNA SECCIÓN</option>
                <option value='Cronograma de vacunación'>Sección - Cronograma de Vacunación</option>
                <option value='Recomendaciones'>Sección - Recomendaciones</option>
                <option value='Atención nutricional'>Sección - Atención Nutricional</option>
              </select>
            : null  
          }
          {
            category==='Seguridad'
            ? <select className='d-block mb-3 mx-5' value={subcategory} onChange={(e)=>{setSubcategory(e.target.value)}}>
                <option value=''>ESCOGE UNA SECCIÓN</option>
                <option value='Sin Accidentes'>Sección - Días sin accidentes</option>
                <option value='Ganadores de Campaña del Medio Ambiente'>Sección - Ganadores de campaña del Medio Ambiente</option>
              </select>
            : null  
          }
          {
            category==='Beneficios'
            ? <select className='d-block mb-3 mx-5' value={subcategory} onChange={(e)=>{setSubcategory(e.target.value)}}>
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
        <article className='px-3'>
          <h5 className='d-block mb-3'>Perfiles</h5>
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
              name="Operativos"
            />
            <FormControl
              /* ref='administrativos' */ value="Operativos"
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
          <button style={{borderRadius:'11px', padding:'5px 25px', background:'#0D0B6F', border:'#0d6efd', color:'white',  marginBottom:'15px'}} onClick={handleClose}>
            Cancelar
          </button>
          {
            dataUser.rol === 'admin'
            ? <>
                <button style={{borderRadius:'11px', padding:'5px 25px', background:'#FF0000', border:'#0d6efd', color:'white',  marginBottom:'15px'}} onClick={rejectPost} >
                  Rechazar
                </button>
                <button style={{borderRadius:'11px', padding:'5px 25px', background:'#008000', border:'#0d6efd', color:'white',  marginBottom:'15px'}} onClick={()=> publishedPost()}>Publicar</button>
              </>
            : <button style={{borderRadius:'11px', padding:'5px 25px', background:'#E5A812', border:'#0d6efd', color:'white',  marginBottom:'15px'}} onClick={()=>addPendingPost()}>Enviar</button>    
          }          
        </Modal.Footer>
        </Modal>
    </>
  );
}

