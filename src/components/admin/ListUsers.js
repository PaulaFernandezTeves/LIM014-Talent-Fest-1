import React, { useState, useEffect } from "react";
import {InputGroup, FormControl } from "react-bootstrap";
import { getDataUser, deleteUser } from "../../firebase/firestore";
import { ModalUpdateUser } from "./ModalUpdateUser"
import { ModalCreateUser } from "./ModalCreateUser";
import { HeaderAdmin } from './HeaderAdmin';

export const ListUsers = () => {

  const [users, setUsers] = useState([]);

  const callback = (data) => {
    setUsers(data)
  }

  useEffect(() => {
    getDataUser(callback);
  }, [])


  const deleteUsers = async (userId) => {
    if(window.confirm("Usted está seguro de eliminar este usuario?")) {
      await deleteUser(userId);
    }
  }

  return (
    <>
      <HeaderAdmin />
      <section className="container-fluid p-3 w-100 col">
        <h3 className="w-100 text-center" id="title-list">
          Lista de usuarios
        </h3>
        <div className="d-flex justify-content-between">
          <InputGroup
            className="mb-3 me-3 input-group "
            style={{ background: "#E5E5E5" }}
            id="searchNancy"
            // onChange={(e) => handleChange(e)}
          >
            <InputGroup.Text className="border-0 bg-transparent text-danger">
              <i className="fas fa-search text-dark"></i>
            </InputGroup.Text>
            <FormControl
              className="border-0 rounded-pill"
              style={{ background: "#E5E5E5" }}
              placeholder="Buscar"
              aria-label="Buscar"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <ModalCreateUser />
        </div>
        <div className="d-flex w-100 justify-content-end"></div>
        <table className="table table-sm table-hover w-100 mt-3 mx-2">
          <thead
            style={{
              background: "#0D0B6F",
              color: "white",
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
          >
            <tr
              style={{ background: "#0D0B6F", color: "white" }}
              className="py-5"
            >
              <th>Colaborador</th>
              <th>Perfil</th>
              <th>Rol</th>
              <th> Editar </th>
              <th> Eliminar </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.colaborador}</td>
                <td>{user.perfil}</td>
                <td>{user.rol}</td>
                <td>
                  <ModalUpdateUser user={user} />
                </td>
                <td onClick={() => deleteUsers(user.userId)}>🗑</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};