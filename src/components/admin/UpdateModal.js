import React, {useState} from 'react'
import { Modal, Dropdown } from "react-bootstrap";


export const UpdateModal = () => {
    const [show, setShow] = useState(false);
  
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
          <textarea id='text-post' placeholder='Publicando..' spellcheck='false' required ></textarea>
          </Modal.Header>
          <Modal.Body  className="modalDialog">
            <img src="https://lh3.googleusercontent.com/proxy/DSeeZ4iLSG7301Y_nofbUHSAxNeNTIEe56JYFpd7DzP3lj0qrTC3eF_j4hE1XcG2pftmBnrMGXgPKMfRHZTTfeQDSwgw-HXJ03TBGoMizeHzzRdyrsS00L5qiOl8jTbJuMfXc1ToBTGFYvYsRWUaxkD2z1pJw01B1odOFqaZJosl1FnmlSCIowA" alt="" width="80%" style={{margin:"30px "}}/>
            <input type="file" name="file" style={{margin:"20px 25px"}}></input>
              
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
            <button style={post} onClick={handleClose}>Publicar</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
