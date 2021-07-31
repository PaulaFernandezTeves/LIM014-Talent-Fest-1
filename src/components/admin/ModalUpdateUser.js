import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { editUser } from "../../firebase/firestore";

export const ModalUpdateUser = (props) => {

  //Destructurando props
    const { user } = props;
    const [persona/* , setPersona */] = useState(user)

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await editUser(persona.userId, persona.perfil, persona.rol);
      handleClose();
    } catch(err) {
      console.error("este es el error ", err)
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="fas fa-edit"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            Editar información del colaborador {persona.colaborador}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="formUpdateUser" onSubmit={handleSubmit}>
            <div className="sectiontwo">
              <div>
                <label> Perfil </label>
              </div>
              <input
                name="perfil"
                type="text"
                maxLength="12"
                autoComplete="off"
                defaultValue={persona.perfil}
                onChange={(e) => {
                  persona.perfil = e.target.value;
                }}
              />
            </div>
            <div className="sectiontwo">
              <div>
                <label htmlFor="inputRol">Rol</label>
              </div>
              <input
                name="rol"
                type="text"
                maxLength="12"
                autoComplete="off"
                defaultValue={persona.rol}
                onChange={(e) => {
                  persona.rol = e.target.value;
                }}
              />
            </div>
            <button
              id="btn-submit-update"
              variant="primary"
              type="submit"
            >
              Save Changes
            </button>
          </form>
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