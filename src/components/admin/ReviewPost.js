import React, {useEffect, useState} from 'react';
import { ModalReviewPost } from "./ModalReviewPost";
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
  
  //-------------------- SETTEO PARA MODAL EDIT ---------------------
  const [show2, setShow2] = React.useState(false);
  const handleClose2 = () => setShow(false);
  const handleShow2 = () => setShow(true);

  //----------------LLAMANDO POSTS DEL REGISTRADOR-----------------
  const [posts, setPosts] = useState([]);

  const callback = (data) => {
    setPosts(data)
  }

  useEffect(() => {
    getPosts(callback);
  }, []) 
  //----------------EDITANDO DATOS DEL MODAL -----------------
  const [ objEdit, setObjEdit] = useState({})
  const updatePostModal =(objPost) => {
    handleShow2();
    setObjEdit(objPost);
  }
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
        <ModalReviewPost 
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
            {posts.map((post, index) =>(
              <tr key={index}>
                <td>{post.owner}</td>
                <td>📑{post.title}</td>
                <td>{post.category}</td>
                <td>{post.subcategory}</td>    
                <td style={good}>{post.status}</td>  
                <td >{post.profile}</td>            
                <td>🗑</td>
                <td onClick={()=>updatePostModal(post)}>✏</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ModalEditPost 
          show2={show2}
          setShow2={setShow2}
          handleClose2={handleClose2}
          objEdit={objEdit}
        />
      </section>
    </>
  )
}