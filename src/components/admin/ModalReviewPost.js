import React, {useState, useRef } from 'react'
import { Modal, Dropdown } from "react-bootstrap";
import "../../styles/paula.css";
import iconfoto from "../../images/fotos.png";

export const ModalReviewPost = () => {
    const [show, setShow] = useState(false);
    const [imageSource, setImageSource] = useState(iconfoto);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
      marginRight: "30px",
    };

    const rechazar = {
      color: "white",
      backgroundColor: "red",
      borderRadius:"10px",
      padding:"5px 10px",
      fontSize: "20px",
      marginRight: "40px",
    };
    
    const post = {
      color: "white",
      backgroundColor: "#0D0B6E",
      borderRadius:"10px",
      padding:"5px 10px",
      fontSize: "20px",
      marginRight: "40px",
    };
    
let previewImg = useRef(null);
let inputFile = useRef(null);

function onChangeFile(){

    let $inputFile = inputFile.current.files[0];
    console.log($inputFile);
    let $previewImg = previewImg.current;
    let $readFile = new FileReader();

    // if ($inputFile){
    //   $readFile.readAsDataURL($inputFile);
    //   $readFile.onloadend = function(){
    //     $previewImg.src = $readFile.result;
    //   };
    // } else {
    //   $previewImg.src= "";
    // }



    console.log("hola")

}

    return (
      <>
        <button
        className="btn-finalizar d-block mt-4"
        id="btnFinaly"
        onClick={handleShow}
      >
        <b>Post</b>
      </button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <div>
              <input type="text" placeholder="Agrega un mensaje" className= "Upload__form-inputtext" name="title"></input>
            </div>
          </Modal.Header>
          <Modal.Body  className="modalDialog add-new-photo first" id="add-photo">            
            <div className="Upload__form-container-img">
                <img src={imageSource} alt="" id={previewImg}></img>
            </div>
            
         <div id="add-photo">
         <input type="file" ref={inputFile} name="images[]" style={{backgroundColor:"#0D0B6E"}} className="Upload__form-inputfile" onChange={onChangeFile}></input>
         </div>
         </Modal.Body>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" style={mystyle}> 
            Categorías
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" style={categories}>Salud</Dropdown.Item>
            <Dropdown.Item href="#/action-2" style={categories}>Seguridad</Dropdown.Item>
            <Dropdown.Item href="#/action-3" style={categories}>Beneficios</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Modal.Footer>
            <button style={cancel} onClick={handleClose}>
              Cancelar
            </button>
            <button style={rechazar} onClick={handleClose}>Rechazar</button>
            <button style={post} onClick={handleClose}>Publicar</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
