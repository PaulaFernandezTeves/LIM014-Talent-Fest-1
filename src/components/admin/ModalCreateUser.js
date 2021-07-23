import React, { useState } from "react";
import { Modal, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { propertyUser } from "../../firebase/firestore";
import { createUser } from "../../firebase/auth"

export const ModalCreateUser = () => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");
  const [perfil, setPerfil] = useState("");

  //State para modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeValue = () => {
    setShow(false);
    window.location.reload();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = await createUser(email, password);
      const newUserUid = newUser.user.uid;
      if(newUser) await propertyUser(newUserUid, nombre, email, perfil, rol);
      handleClose();
    } catch (err) {
      window.alert(err.message)
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + Añadir usuario
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="formCreateUser">
            <div className="section">
              <label>Email</label>
              <input
                name="email"
                type="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="section">
              <label>Código Sap</label>
              <input
                name="password"
                type="text"
                autoComplete="off"
                maxlength="8"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="section">
              <label>Nombre</label>
              <input
                name="nombre"
                type="text"
                autoComplete="off"
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="section-dropdown">
              <div className="dropdown-rol">
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Rol del usuario"
                >
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={() => setRol("admin")}
                  >
                    Admin
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => setRol("registrador")}
                  >
                    Registrador
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => setRol("usuario")}
                  >
                    Usuario
                  </Dropdown.Item>
                </DropdownButton>
                <p> {rol} </p>
              </div>
              <div className="dropdown-perfil">
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Perfil del usuario" /* cambie de Rol de usuario */
                >
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={() => setPerfil("administrativo")}
                  >
                    Administrativo
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => setPerfil("ejecutivo")}
                  >
                    Ejecutivo
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => setPerfil("operario")}
                  >
                    Operario
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-4"
                    onClick={() => setPerfil("practicante")}
                  >
                    practicante
                  </Dropdown.Item>
                </DropdownButton>
                <p> {perfil} </p>
              </div>
            </div>
            <button variant="primary" type="submit" className="btn-submit">
              Save Changes
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={removeValue}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};