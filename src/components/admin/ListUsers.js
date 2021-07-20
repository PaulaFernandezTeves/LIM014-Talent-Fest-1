import React, { useState, useEffect } from "react";
import { getDataUser } from "../../firebase/firestore"

export const ListUsers = () => {

  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const response = await getDataUser();
      return response.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, [input])


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
                <th>Name</th>
                <th>Perfil</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> userId </td>
                <td> gmail </td>
                <td> userId </td>
              </tr>
              {/* {users.map((user, index) => (
                <tr key={index}>
                  <td>{user._id}</td>
                  <td>{user.email}</td>
                  <td>{user.roles.admin === true ? "true" : "false"}</td>
                  <td onClick={() => deleteUsers(user._id)}>🗑</td>
                  <td>✏</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};
