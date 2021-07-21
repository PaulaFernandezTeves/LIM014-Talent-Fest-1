import React, {useState} from 'react'
import { Modal, Button, Form } from "react-bootstrap";


export const EditUserModal = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const cancel = {
        color: "white",
        backgroundColor: "#FCAC04",
        borderRadius:"10px",
        padding:"5px 10px",
        fontSize: "20px",
        position:"relative",
        marginRight: "190px",
      };
  
      const update = {
        color: "white",
        backgroundColor: "#0D0B6E",
        borderRadius:"10px",
        padding:"5px 10px",
        fontSize: "20px",
        marginRight: "40px",
      };
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        Register
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
            <Form.Label>Perfil</Form.Label>
            <Form.Control type="text" placeholder="" />
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Label>Rol</Form.Label>
            <Form.Control type="text" placeholder="" />
            </Form.Group>
        </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" style ={cancel} onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" style ={update} onClick={handleClose}>Actualizar</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

