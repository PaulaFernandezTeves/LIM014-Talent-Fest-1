// import React, { useState, useEffect } from "react";
// import {
//   Modal,
//   InputGroup,
//   Dropdown,
//   FormControl,
//   Button,
// } from "react-bootstrap";
// import { updateStatusPostRegister } from '../../firebase/firestore'

// export const ModalEditPostRegister = (props) => {
//   const cancel = {
//     color: "white",
//     backgroundColor: "#FCAC04",
//     borderRadius:"10px",
//     padding:"5px 10px",
//     fontSize: "20px",
//     position:"relative",
//     marginRight: "190px",
//   };

//   const stylePost = {
//     color: "white",
//     backgroundColor: "#0D0B6E",
//     borderRadius: "10px",
//     padding: "5px 10px",
//     fontSize: "20px",
//     marginRight: "40px",
//   };
  
//   const { post } = props;
//   const [datos, setDatos] = useState(post);
//   console.log(datos.postId);

//    const handleInputChange = (event) => {
//      setDatos({
//        ...datos,
//        [event.target.name]: event.target.value,
//      });
//    };


//   //  const [adminCheck, setAdminCheck ] = useState(false)
//   //  const [executiveCheck, setExecutiveCheck] = useState(false)
//   //  const [operatorCheck, setOperatorCheck ] = useState(false)
//   //  const [practiCheck, setPractiCheck] = useState(false)
//   const [ category, setCategory] = useState('')
//   const [ subcategory, setSubcategory] = useState('')

//   const [ manager, setManager] = useState({type: 'Administrativos', value:false })
//   const [ ejecut, setEjecut] = useState({type: 'Ejecutivos', value:false })
//   const [ operat, setOperat] =  useState({type: 'Operativos', value:false })
//   const [ practi, setPracti] = useState({type: 'Practicantes', value:false })

//   const handleChangeCheck = (key) => {
//     switch (key) {
//       case 'Administrativos':
//         setManager({type: 'Administrativos', value: !manager.value})
//       break;
//       case 'Operativos':
//         setOperat({type: 'Operativos', value: !operat.value })
//       break;
//       case 'Ejecutivos':
//         setEjecut({type: 'Ejecutivos', value: !ejecut.value })
//       break;
//       case 'Practicantes':
//         setPracti({type: 'Practicantes', value: !practi.value })
//         break;        
//       default:
//         break;
//     }      
//   }
//   useEffect(() => {
//     console.log(datos.profile);
//     setManager(datos.profile[0])
//     setEjecut(datos.profile[1])
//     setOperat(datos.profile[2])
//     setPracti(datos.profile[3])
//   }, [])


//   //ESTADO INICIAL DE REGISTRO DE POSTS
     
//   // state Modal
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);


//   const updatePostRegist = () => {
//     datos.status='pendiente'
//     console.log(datos)
//     updateStatusPostRegister(datos.postId, datos)
//     setShow(false)
//   }

//   return (
//     <>
//       <Button /* variant="primary" */ onClick={handleShow} style={{backgroundColor:'white', border:'white'}}>
//          <i className="fas fa-edit text-dark"></i>
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
        
//       >
//         <Modal.Header>
//           <h3>Editar Publicación</h3>
//         </Modal.Header>
//         <Modal.Body className="modalDialog">
//           <h5>Título</h5>
//           <input
//             id="text-post"
//             style={{width:'100%', padding:'5px 10px', marginBottom:'20px'}}
//             onChange={handleInputChange}
//             name="title"
//             defaultValue={datos.title}
//             required
//           />
//           <h5>Sub Título</h5>
//           <input
//             id="text-post"
//             style={{width:'100%', padding:'5px 10px', marginBottom:'20px'}}
//             onChange={handleInputChange}
//             name="subtitle"
//             defaultValue={datos.subtitle}
//             required
//           >
//           </input>
//           <h5>Contenido del Post</h5>
//           <textarea
//             id="text-post"
//             style={{width:'100%', padding:'5px 10px', marginBottom:'20px'}}
//             onChange={handleInputChange}
//             name="content"
//             defaultValue={datos.content}
//             required
//           >
//           </textarea>
//           <h5>Más información del post</h5>
//           <textarea
//             id="text-post"
//             style={{width:'100%', padding:'5px 10px', marginBottom:'20px'}}
//             onChange={handleInputChange}
//             name="moreContent"
//             defaultValue={datos.moreContent}
//             required
//           >
//             {/* {props.objEdit.moreContent} */}
//           </textarea>
//           <h5>Comentarios </h5>
//           <textarea
//             id="text-post"
//             style={{width:'100%', padding:'5px 10px', marginBottom:'20px'}}
//             onChange={handleInputChange}
//             name="comment"
//             defaultValue={datos.comment}
//             required
//           >
//             {/* {props.objEdit.comment} */}
//           </textarea>
//           <img
//             src="https://lh3.googleusercontent.com/proxy/DSeeZ4iLSG7301Y_nofbUHSAxNeNTIEe56JYFpd7DzP3lj0qrTC3eF_j4hE1XcG2pftmBnrMGXgPKMfRHZTTfeQDSwgw-HXJ03TBGoMizeHzzRdyrsS00L5qiOl8jTbJuMfXc1ToBTGFYvYsRWUaxkD2z1pJw01B1odOFqaZJosl1FnmlSCIowA"
//             alt=""
//             width="80%"
//             style={{ margin: "30px " }}
//           />
//           <input
//             type="file"
//             name="file"
//             style={{ margin: "20px 25px" }}
//           ></input>
//         </Modal.Body>

//         <div style={{padding:'5px 20px'}}>
//           <article className='d-flex mb-3'>
//             <div className='me-5'>
//               <h5>VISTA</h5>
//               <Dropdown>
//                 <Dropdown.Toggle variant="success" id="dropdown-basic">
//                   VISTA
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                     <Dropdown.Item href="#/action-3" onClick={()=>setCategory('Home')} >HOME</Dropdown.Item>
//                     <Dropdown.Item href="#/action-1" onClick={()=>setCategory('Salud')}>SALUD</Dropdown.Item>
//                     <Dropdown.Item href="#/action-2" onClick={()=>setCategory('Seguridad')} >SEGURIDAD</Dropdown.Item>
//                     <Dropdown.Item href="#/action-3" onClick={()=>setCategory('Beneficios')} >BENEFICIOS</Dropdown.Item>                
//                 </Dropdown.Menu>
//               </Dropdown>
//               <p><b>{category}</b></p>
//             </div>
//             { category === 'Home' ? 
//                 <div> 
//                   <h5>SECCIÓN</h5>       
//                   <Dropdown>
//                     <Dropdown.Toggle variant="success" id="dropdown-basic">
//                       HOME
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                         <Dropdown.Item href="#/action-1" onClick={()=>setSubcategory('Para Ti')}>Sección - Para Ti</Dropdown.Item>
//                         <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Noticias Destacadas')}>Sección - Noticias Destacadas del Mes</Dropdown.Item>
//                         <Dropdown.Item href="#/action-3" onClick={()=>setSubcategory('Cumpleaños')}>Sección - Cumpleaños</Dropdown.Item>
//                         <Dropdown.Item href="#/action-3" onClick={()=>setSubcategory('Otros Reconocimientos')}>Sección - Otros Reconocimientos</Dropdown.Item>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                   <p><b>{subcategory}</b></p>
//                 </div> 
//                 :<></>                
//             } 
//             { category === 'Salud' ?
//               <div> 
//                 <h5>SECCION</h5>         
//                   <Dropdown>
//                     <Dropdown.Toggle variant="success" id="dropdown-basic">
//                       SALUD
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                         <Dropdown.Item href="#/action-1" onClick={()=>setSubcategory('Vacunación')}>Sección - Cronograma de Vacunación</Dropdown.Item>
//                         <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Recomendaciones')}>Sección - Recomendaciones</Dropdown.Item>
//                         <Dropdown.Item href="#/action-3" onClick={()=>setSubcategory('Nutrición')}>Sección - Atención Nutricional</Dropdown.Item>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                   <p><b>{subcategory}</b></p>
//                 </div>  
//               :<></>   
//             } 
//             {
//               category === 'Seguridad' ?
//               <div> 
//                 <h5>SECCION</h5> 
//                 <Dropdown>
//                   <Dropdown.Toggle variant="success" id="dropdown-basic">
//                     SEGURIDAD
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                       <Dropdown.Item href="#/action-1" onClick={()=>setSubcategory('Sin Accidentes')}>Sección - Días sin accidentes</Dropdown.Item>
//                       <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Ganadores de Campaña del Medio Ambiente')}>Sección - Ganadores de campaña del Medio Ambiente</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//                 <p><b>{subcategory}</b></p>
//               </div>
//               :<></>
//             }
//             {
//               category === 'Beneficios' ?
//               <div> 
//                 <h5>SECCION</h5> 
//                 <Dropdown>
//                   <Dropdown.Toggle variant="success" id="dropdown-basic">
//                     BENEFICIOS
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                       <Dropdown.Item href="#/action-1" onClick={()=>setSubcategory('Becas')}>Sección - Becas</Dropdown.Item>
//                       <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Fallecimiento')}>Sección - Fallecimiento</Dropdown.Item>
//                       <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Autoseguro Médico')}>Sección - Autoseguro Médico Familiar</Dropdown.Item>
//                       <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('Linajes Peruanos')}>Sección - Linajes Peruanos</Dropdown.Item>
//                       <Dropdown.Item href="#/action-2" onClick={()=>setSubcategory('ICPNA')}>Sección - ICPNA</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//                 <p><b>{subcategory}</b></p>
//               </div>  
//               :<></>
//             }
//           </article>

//           <article style={{padding:'5px 5px'}}>
//             <p><b>{category}</b></p>
//             <p><b>{subcategory}</b></p>
//           </article>

//           <article>
//             <h6>
//               <b>Perfiles</b>
//             </h6>
//            <InputGroup className="mb-2">
//             <InputGroup.Checkbox
//               defaultChecked={manager.value}
//               onChange={()=>handleChangeCheck("Administrativos")}
//               name="Administrativos"
//               className="checkGroup"
//               aria-label="Checkbox for following text input"
//             />
//             <FormControl
//               value="Administrativos"
//               aria-label="Text input with checkbox"
//             />
//             </InputGroup>
//             <InputGroup className="mb-3">
//               <InputGroup.Checkbox
//                 aria-label="Checkbox for following text input"
//                 defaultChecked={ejecut.value}
//                 onChange={()=>handleChangeCheck("Ejecutivos")}
//                 className="checkGroup"
//                 name="Ejecutivos"
//               />
//               <FormControl
//                 value="Ejecutivos"
//                 aria-label="Text input with checkbox"
//               />
//             </InputGroup>
//             <InputGroup className="mb-3">
//               <InputGroup.Checkbox
//                 aria-label="Checkbox for following text input"
//                 defaultChecked={operat.value}
//                 onChange={()=>handleChangeCheck("Operativos")}
//                 className="checkGroup"
//                 name="Operativos"
//               />
//               <FormControl
//                 value="Operativos"
//                 aria-label="Text input with checkbox"
//               />
//             </InputGroup>
//             <InputGroup className="mb-3">
//             <InputGroup.Checkbox
//                 aria-label="Checkbox for following text input"
//                 defaultChecked={practi.value}
//                 onChange={()=>handleChangeCheck("Practicantes")}
//                 className="checkGroup"
//                 name="Practicantes"
//               />
//               <FormControl
//                 value="Practicantes"
//                 aria-label="Text input with checkbox"
//               />
//             </InputGroup>
//           </article>
//         </div>
//         <Modal.Footer>
//           <button style={cancel} onClick={handleClose}>
//             Cancelar
//           </button>
//           <button style={stylePost} onClick={()=> updatePostRegist()}>Enviar</button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

