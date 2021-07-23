import React, { useState, useEffect } from "react";
import { getDataUser } from "../../firebase/firestore";
import { HeaderListUser } from '../admin/HeaderListUser';

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
      <HeaderListUser />
      <section className="container-fluid p-3 w-100 col">
        <h3 className="w-100 text-center ">Lista de usuarios</h3>
        <div className="d-flex w-100 justify-content-end">
        </div>
        <table className="table table-sm table-hover w-100 mt-3 mx-2">
          <thead style={{background:"#0D0B6E"}}>
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
    </>
  );
};
