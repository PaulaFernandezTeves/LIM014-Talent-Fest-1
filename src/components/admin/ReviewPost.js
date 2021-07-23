import React, {useEffect, useState} from 'react';
import { ModalCreatePost } from "./ModalCreatePost";
import { Header } from '../home/Header';
import { getPosts } from '../../firebase/firestore'
// import { HistoryPost } from '../registrador/HistoryPost';
 import { ModalEditPost } from '../admin/ModalEditPost'
 
export function ReviewPost() {
  const good = {
    color: "white",
    backgroundColor:"green",
  };
 
  //-------------------- SETTEO PARA MODAL ---------------------
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  //----------------LLAMANDO POSTS DEL REGISTRADOR-----------------
  const [posts, setPosts] = useState([]);
 
  const callback = (data) => {
    console.log(data)
    setPosts(data)
  }
 
  useEffect(() => {
    getPosts(callback);
  }, []) 

  return (
    <>
      <Header />
      <section className="container-fluid p-3 w-100 col">
        <h3 className="w-100 text-center ">Lista de Publicaciones</h3>
        <button
          className="btn-finalizar d-block mt-4"
          id="btnFinaly"
          onClick={handleShow}
        >
          <b>Post</b>
        </button>
        <ModalCreatePost
          show={show}
          setShow={setShow}
          handleClose={handleClose}
        />
        <table className="table table-sm table-hover w-100 mt-3 mx-2">
          <thead>
            <tr>
              <th>Registrador</th>
              <th>Publicación</th>
              <th>Categoría</th>
              <th>Sub Categoría</th>
              <th>Estado</th>
              <th>Perfil del Trabajador</th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            { posts.length> 0 ? posts.map((post, index) => (
              <tr key={index}>
                <td>{post.owner}</td>
                <td>📑{post.title}</td>
                <td>{post.category}</td>
                <td>{post.subcategory}</td>
                <td style={good}>{post.status}</td>
                {/* //<td>{post.profile}</td> */}
                <td>🗑</td>
                <td>
                  <ModalEditPost
                      post={post}
                  />
                </td>
              </tr>
            )): <>No hay posts </> }
          </tbody>
        </table>
      </section>
    </>
  );
}
