import React, { useState } from 'react'
import { Modal, InputGroup, FormControl } from "react-bootstrap";
import { useAuth } from '../../context/AuthProvider';
import { createPost, datePostDB, orderDate } from '../../firebase/firestore';
import { storage } from '../../firebase/config'

import "../../styles/paula.css";
import iconfoto from "../../images/fotos.png";


export const ModalCreatePost = (props) => {
  
  // //FUNCION CARGAR FOTO
  // const [ ref, setRef ] = useState(null);

  // //const storage = useStorage();
  // const [Imagen, setImagen] = useState();
  // console.log(Imagen)//undefined - OBJETO
  // const [url, setUrl] = useState()
  // console.log(url)
  // //OBTENIENDO LA IMAGEN
  // const changeImagen = e => {
  //   setImagen(e.target.files[0]);
  // }

  // //FUNCION PARA GUARDAR LA IMAGEN EN FIREBASE
  // const uploadImage = async () => {
  //   try {
  //     const newRef = storage.ref('images').child(Imagen.name); // nombre del archivo
  //     setRef(newRef);
  //     await newRef.put(Imagen);
  //     const urlImagen = await newRef.getDownloadURL()
  //     console.log('la ul de la imagen es' + urlImagen); //URL
  //     setUrl(urlImagen)
  //   } catch (error) {
  //       alert(error);
  //   }
  // };

  //ESTADO INICIAL DE REGISTRO DE POSTS
  const { currentUser } = useAuth();
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
  console.log(newObject)
  const publishPost = () => { 
    newObject = datos
    newObject.category= category 
    newObject.subcategory=subcategory
    newObject.owner= currentUser.email
    newObject.status= 'publicado'
    newObject.profile= [manager, ejecut, operat, practi ]

    // newObject.img = url
    // uploadImage()

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
        <Modal.Body  className="modalDialog">
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
            <textarea onChange={handleInputChange} className='w-100 mb-4' 
              type="text" name="comment" required ></textarea>        
        </Modal.Body>

        <Modal.Body  className="modalDialog add-new-photo first" id="add-photo">            
          <figure className="Upload__form-container-im"  style={{maxWidth:'45%', height:'45%'}}>
              <img src={iconfoto} alt="" /* ref={previewImg} */ style={{width:'100%', height:'100%' , objectFit:'contain'}}/>
          </figure>            
          <div id="add-photo">
            <input type="file" /* ref={imageRef} */ name="images[]" style={{backgroundColor:"#E5E5E5"}} 
              className="Upload__form-inputfile" /* onChange={onChangeFile} */
               /* onChange={changeImagen} */></input>
          </div>
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
                <option value='Para Ti'>Sección - Para ti - Cronograma de capacitación</option>
                <option value='Para Ti'>Sección - Para ti - Convocatorias Internas</option>
                <option value='Para Ti'>Sección - Para ti - Beneficios</option>
                <option value='Para Ti'>Sección - Para ti - Actividad</option>
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

        <Modal.Footer className='d-flex'>
          <button  onClick={props.handleClose}>
            Cancelar
          </button>
          <button >Rechazar</button>
          <button  onClick={()=>publishPost()}>Publicar</button>
        </Modal.Footer>
    </Modal>
    </>
  );
}