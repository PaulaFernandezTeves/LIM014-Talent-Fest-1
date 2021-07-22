// import { getElementError } from "@testing-library/react";
// import { database } from "firebase-admin";
import React, { useState, useEffect } from "react";
import {
  Modal,
  // Dropdown,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { updateStatusPostRegister } from '../../firebase/firestore'
// import { useAuth } from '../../context/AuthProvider';
// import { createPost } from '../../firebase/firestore';

export const ModalEditPostRegister = (props) => {
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
  console.log(datos.postId);

   const handleInputChange = (event) => {
     // console.log(event.target.name)
     // console.log(event.target.value)
     setDatos({
       ...datos,
       [event.target.name]: event.target.value,
     });
   };

   //FN TRAER VALORES INPUT CHECKBOX
   useEffect(() => {
      // const getCheck = document.querySelectorAll(".checkGroup");
      // console.log(getCheck)
      // getCheck.forEach((check) => {
      //   const value =   datos.some((profile)=>{
      //       return profile === check.name;
      //   });

      //   console.log(check)  
      //   if(value) return check.setAttribute("check", true );
      // })
      console.log(datos.profile)
   }, [])

   const [adminCheck, setAdminCheck ] = useState(false)
   const [executiveCheck, setExecutiveCheck] = useState(false)
   const [operatorCheck, setOperatorCheck ] = useState(false)
   const [practiCheck, setPractiCheck] = useState(false)

   const handleChangeCheck = (key) => {
    switch (key) {
      case 'Administrativos':
        setAdminCheck(true)
      break;
      case 'Operativos':
        setExecutiveCheck(true)
      break;
      case 'Ejecutivos':
        setOperatorCheck(true)
      break;
      case 'Practicantes':
        setPractiCheck(true)
        break;    
    
      default:
        break;
    }      
   }


  //ESTADO INICIAL DE REGISTRO DE POSTS
     
  // state Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleCheckbox = (e) => {
  //   console.log("click", e)
  // }

  const updatePostRegist = () => {
    datos.status='pending'
    console.log(datos)
    updateStatusPostRegister(datos.postId, datos)
    setShow(false)
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ✏
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
            defaultValue={datos.title}
          />
          <h5>Sub Título</h5>
          <input
            id="text-post"
            placeholder="Publicando.."
            spellcheck="false"
            onChange={handleInputChange}
            name="subTitle"
            defaultValue={datos.subtitle}
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
            defaultValue={datos.content}
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
            defaultValue={datos.moreContent}
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
            defaultValue={datos.comment}
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
        <article>
          <p>{/* <b>Vista: {category}</b> */}</p>
          <p>{/* <b>Sección: {subcategory}</b> */}</p>
        </article>
        <article>
          <h6>
            <b>Perfiles</b>
          </h6>
          {/* {
            datos.profile.map((perfil) => 
            <InputGroup className="mb-2">
              <InputGroup.Checkbox
                defaultCheck={adminCheck}
                onChange={()=>handleChangeCheck("Administrativos")}
                name="Administrativos"
                className="checkGroup"
                aria-label="Checkbox for following text input"
              />
              <FormControl
                value="Administrativos"
                aria-label="Text input with checkbox"
              />
          </InputGroup>)
          } */}

          <InputGroup className="mb-2">
            <InputGroup.Checkbox
              defaultCheck={adminCheck}
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
              defaultCheck={executiveCheck}
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
              defaultCheck={operatorCheck}
              onChange={()=>handleChangeCheck("Operadores")}
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
              defaultCheck={practiCheck}
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
          <button style={stylePost} onClick={()=> updatePostRegist()}>Enviar</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

