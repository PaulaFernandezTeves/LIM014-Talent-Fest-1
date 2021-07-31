import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const ModalHome = (props) => {

  const { post } = props;
  const value = post.subcategory

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>
        Conoce más<i class="fas fa-arrow-circle-right"></i>
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          {/* Modal sección Para ti */}
          {value === "Para Ti - Convocatorias Internas"
            ? "Aquí hay más información de convocatorias internas"
            : null}
          {value === "Para Ti - Actividad"
            ? "Aquí hay más información de Actividad"
            : null}
          {value === "Para Ti - Beneficios"
            ? "Aquí hay más información de Beneficios"
            : null}
          {value === "Para Ti - Cronograma de capacitación"
            ? "Aquí hay más información de Cronograma de capacitación"
            : null}
          {/* Modal sección Para ti */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};