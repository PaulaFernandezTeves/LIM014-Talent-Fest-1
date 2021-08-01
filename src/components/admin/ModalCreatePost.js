import React, { useState } from 'react'
import { Modal, InputGroup, FormControl } from "react-bootstrap";
import { useAuth } from '../../context/AuthProvider';
import { createPost, datePostDB, orderDate } from '../../firebase/firestore';
import { storage } from '../../firebase/config'

import "../../styles/paula.css";
import iconfoto from "../../images/fotos.png";


export const ModalCreatePost = (props) => {
  
  /**** CARGAR FOTO ****/
  const [fileUrl, setFileUrl] = useState(null)

  const onChange = async (e) => {
    const file = e.target.files[0]
    const storageRef = storage.ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL()); 
  }

  //ESTADO INICIAL DE REGISTRO DE POSTS
  const { currentUser, dataUser } = useAuth();
  const [category, setCategory ] = useState('Escoge una página')
  const [subcategory, setSubcategory ] = useState('')   
    
  const [ manager, setManager] = useState({type: 'Administrativos', value:false })
  const [ ejecut, setEjecut] = useState({type: 'Ejecutivos', value:false })
  const [ operat, setOperat] =  useState({type: 'Operativos', value:false })
  const [ practi, setPracti] = useState({type: 'Practicantes', value:false })
    

  //ESTADO INICIAL DE REGISTRO DE POSTS
  const [datos, setDatos] = useState()
  //console.log(datos)

  const handleInputChange = (event) => {
    event.preventDefault()
    setDatos({
      ...datos, date:datePostDB(), orderDate: orderDate(),
      [event.target.name] : event.target.value,
    })
  }

  let newObject;
  //console.log(newObject)
  const publishPost = () => { 
    newObject = datos
    newObject.category= category 
    newObject.subcategory=subcategory
    newObject.owner= currentUser.email
    newObject.status= 'publicado'
    newObject.profile= [manager, ejecut, operat, practi ]
    newObject.image = fileUrl;
    
    createPost(newObject);   
    props.handleClose();

    setCategory('Escoge una página')
    setManager({type: 'Administrativos', value:false })
    setEjecut({type: 'Ejecutivos', value:false })
    setOperat({type: 'Operativos', value:false })
    setPracti({type: 'Practicantes', value:false })
  } 
  const addPendingPost = () => {
    newObject = datos
    newObject.category= category 
    newObject.subcategory=subcategory
    newObject.owner= currentUser.email
    newObject.status= 'pendiente'
    newObject.profile= [manager, ejecut, operat, practi ]
     newObject.image = fileUrl;


    createPost(newObject);   
    props.handleClose();

    setCategory('Escoge una página')
    setManager({type: 'Administrativos', value:false })
    setEjecut({type: 'Ejecutivos', value:false })
    setOperat({type: 'Operativos', value:false })
    setPracti({type: 'Practicantes', value:false })
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
        <Modal.Body  className="modalDialog pb-0">
          <h5>Título</h5>   
            <input onChange={handleInputChange} className='w-100 mb-4'
              type="text" name="title" required ></input>
          <h5>Sub Título</h5> 
            <input onChange={handleInputChange} className='w-100 mb-4'
              type="text" name="subtitle" required ></input>
          <h5>Contenido del Post</h5>
            <textarea onChange={handleInputChange} className='w-100 mb-4'
              type="text" name="content" required ></textarea>
          <h5>Más información del post</h5>
            <textarea onChange={handleInputChange} className='w-100 mb-4' 
              type="text" name="moreContent" required ></textarea>
          <h5>Comentarios </h5>
            <textarea onChange={handleInputChange} className='w-100 mb-3' 
              type="text" name="comment" required ></textarea>        
        </Modal.Body>

        <Modal.Body  className="modalDialog add-new-photo first  mb-4" id="add-photo">            
          <h5>Imagen</h5>
          <figure className="Upload__form-container-im"  style={{maxWidth:'45%', height:'45%'}}>
              <img src={iconfoto} alt="" /* ref={previewImg} */ style={{width:'100%', height:'100%' , objectFit:'contain'}}/>
          </figure>
          {/*Link de video*/}
          <div>
            <h5>Link de video</h5>
            <input
              onChange={handleInputChange}
              className='w-100 mb-4'
              type="text"
              name="video"
            />
          </div>
          {/*Subir Foto*/}
          <div id="add-photo">
            <input type="file" onChange={onChange} />
          </div>
        </Modal.Body>

        <article className='px-3  mb-4'>
          <h5 className='d-block mb-3'>Página</h5>
          <div className='px-4 mb-3 d-flex justify-content-around'>
            <h6 className='azulclaro'><b>Página:</b> {category}</h6>
            <h6 className='azulclaro'><b>Sección:</b> {subcategory}</h6>
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
            ?  <>
              <select className='d-block mb-3 mx-5' value={subcategory} onChange={(e)=>{setSubcategory(e.target.value)}} >
                <option value=''>ESCOGE UNA SECCIÓN</option>
                <option value='Para Ti - Cronograma de capacitación'>Sección - Para ti - Cronograma de capacitación</option>
                <option value='Para Ti - Convocatorias Internas'>Sección - Para ti - Convocatorias Internas</option>
                <option value='Para Ti - Beneficios'>Sección - Para ti - Beneficios</option>
                <option value='Para Ti - Actividad'>Sección - Para ti - Actividad</option>
                <option value='Noticias Destacadas'>Sección - Noticias Destacadas</option>
                <option value='Cumpleaños'>Sección - Cumpleaños</option>
                <option value='Otros Reconocimientos'>Sección - Otros Reconocimientos</option>
              </select>
              </>
            : null  
          }
          {
            category==='Salud'
            ?  <>
                <select className='d-block mb-3 mx-5' value={subcategory} onChange={(e)=>{setSubcategory(e.target.value)}}>
                  <option value=''>ESCOGE UNA SECCIÓN</option>
                  <option value='Cronograma de vacunación'>Sección - Cronograma de Vacunación</option>
                  <option value='Recomendaciones'>Sección - Recomendaciones</option>
                  <option value='Atención nutricional'>Sección - Atención Nutricional</option>
                </select>
              </>
            : null  
          }
          {
            category==='Seguridad'
            ? <>
              <select className='d-block mb-3 mx-5' value={subcategory} onChange={(e)=>{setSubcategory(e.target.value)}}>
                <option value=''>ESCOGE UNA SECCIÓN</option>
                <option value='Sin Accidentes'>Sección - Días sin accidentes</option>
                <option value='Ganadores de Campaña del Medio Ambiente'>Sección - Ganadores de campaña del Medio Ambiente</option>
              </select>
              </>
            : null  
          }
          {
            category==='Beneficios'
            ?  <>
              <select className='d-block mb-3 mx-5' value={subcategory} onChange={(e)=>{setSubcategory(e.target.value)}}>
                <option value=''>ESCOGE UNA SECCIÓN</option>
                <option value='Becas'>Sección - Becas</option>
                <option value='Fallecimiento'>Sección - Fallecimiento</option>
                <option value='Autoseguro Médico'>Sección - Autoseguro Médico Familiar</option>
                <option value='Linajes Peruanos'>Sección - Linajes Peruanos</option>
                <option value='ICPNA'>Sección - ICPNA</option>
              </select>
              </>
            : null  
          }          
        </article>

        <article className='px-3'>
          <h5 className='d-block mb-3'>Perfiles</h5>
          <InputGroup className="mb-2 ">
            <InputGroup.Checkbox onClick={()=>setManager({type: 'Administrativos', value:true })} aria-label="Checkbox for following text input" />
            <FormControl value='Administrativos' aria-label="Text input with checkbox" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox onClick={()=>setEjecut({type: 'Ejecutivos', value:true })} aria-label="Checkbox for following text input" />
            <FormControl value='Ejecutivos' aria-label="Text input with checkbox" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox onClick={()=>setOperat({type: 'Operativos', value:true })} aria-label="Checkbox for following text input" />
            <FormControl value='Operativos' aria-label="Text input with checkbox" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox onClick={()=>setPracti({type: 'Practicantes', value:true })} aria-label="Checkbox for following text input" />
            <FormControl value='Practicantes' aria-label="Text input with checkbox" />
          </InputGroup>
        </article>

        <Modal.Footer>
          <button style={{borderRadius:'11px', padding:'5px 25px', background:'#0D0B6F', border:'#0d6efd', color:'white',  marginBottom:'15px'}} onClick={props.handleClose}>
            Cancelar
          </button>
          {
            dataUser.rol ==='admin' 
            ? <>
               <button style={{borderRadius:'11px', padding:'5px 25px', background:'#FF0000', border:'#0d6efd', color:'white',  marginBottom:'15px'}} >Rechazar</button>
               <button style={{borderRadius:'11px', padding:'5px 25px', background:'#008000', border:'#0d6efd', color:'white',  marginBottom:'15px'}} onClick={()=>publishPost()}>Publicar</button>
              </>
            :  <button style={{borderRadius:'11px', padding:'5px 25px', background:'#E5A812', border:'#0d6efd', color:'white',  marginBottom:'15px'}} onClick={()=>addPendingPost()}>Enviar</button>  
          }
         
        </Modal.Footer>
    </Modal>
    </>
  );
}