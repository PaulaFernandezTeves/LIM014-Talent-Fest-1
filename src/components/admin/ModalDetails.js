import React, {useState} from 'react';
import { Modal, Button } from "react-bootstrap";

export const ModalDetails = ({postId}) => {

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <>
      <Button onClick={handleShow1}>
        <i className="fas fa-trash"></i>
      </Button>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Body style={{margin: ' 0 auto'}}><b>¿Deseas eliminar la publicación?</b></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" data-id={postId} style={{margin: ' 0 auto', background:'red', borderColor:'red'}} 
            onClick={setShow1(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
