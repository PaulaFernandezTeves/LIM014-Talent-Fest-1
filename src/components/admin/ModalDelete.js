import React, {useState} from 'react';
import { Modal, Button } from "react-bootstrap";
import { deletePost } from '../../firebase/firestore';

export const ModalDelete = ({postId}) => {

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const fneDeletePost = (e) =>{
    e.preventDefault();
    const id = e.target.getAttribute('data-id');
    deletePost(id)
    setShow1(false)
  }

  return (
    <>
      <Button onClick={handleShow1}>
        <i className="fas fa-trash"></i>
      </Button>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Body style={{margin: ' 0 auto'}}><b>¿Deseas eliminar la publicación?</b></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" data-id={postId} style={{margin: ' 0 auto', background:'red', borderColor:'red'}} 
            onClick={fneDeletePost}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
