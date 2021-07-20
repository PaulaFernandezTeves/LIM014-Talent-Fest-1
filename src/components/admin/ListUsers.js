import React, { useState, useEffect } from "react";
import { getDataUser } from "../../firebase/firestore"

export const ListUsers = () => {

  const [users, setUsers] = useState([]);

  const callback = (data) => {
    setUsers(data)
  }

  useEffect(() => {
    getDataUser(callback);
  }, [])


  return (
    <>
      <div>
        <section className="container-fluid p-3 w-100 col">
          <h3 className="w-100 text-center ">Lista de usuarios</h3>
          <div className="d-flex w-100 justify-content-end">
            {/* <ModalAddUsers getUsers={getUsers} /> */}
          </div>
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
                  <td>🗑</td>
                  {/* <td onClick={() => deleteUsers(user._id)}>🗑</td> */}
                  <td>✏</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};