import React, { useState, useEffect } from "react";
import { getDataUser, deleteUser } from "../../firebase/firestore";
import { Header } from "../home/Header";
import { ModalUpdateUser } from "./ModalUpdateUser"

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
      <Header />
      <section className="container-fluid p-3 w-100 col">
        <h3 className="w-100 text-center ">Lista de usuarios</h3>
        <button> + Añadir usuario</button>
        <div className="d-flex w-100 justify-content-end"></div>
        <table className="table table-sm table-hover w-100 mt-3 mx-2">
          <thead>
            <tr>
              <th>Colaborador</th>
              <th>Perfil</th>
              <th>Rol</th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.colaborador}</td>
                <td>{user.perfil}</td>
                <td>{user.rol}</td>
                <td onClick={() => deleteUsers(user.userId)}>🗑</td>
                <td>
                  <ModalUpdateUser
                    user={user}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};