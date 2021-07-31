import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const ModalBenefit = (props) => {
  const { post } = props;
  const value = post.subcategory;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Conoce más
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          {/* Modal sección Becas */}
          {value === "Becas" ? "Aquí hay más información sobre becas" : null}
          {/* Modal sección Fallecimiento */}
          {value === "Fallecimiento"
            ? "Aquí hay más información sobre fallecimiento"
            : null}
          {/* Modal sección Linajes Peruanos*/}
          {value === "Linajes Peruanos"
            ? "Aquí hay más información de Linajes Peruanos"
            : null}
          {/* Modal sección ICPNA*/}
          {value === "ICPNA"
            ? "Aquí hay más información de Cronograma de ICPNA"
            : null}
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