import React, { useEffect, useState} from 'react';
import { ModalCreatePost } from "./ModalCreatePost";
// import { Header } from '../home/Header';
import { HeaderAdmin } from './HeaderAdmin';
import { getPosts } from '../../firebase/firestore'
 import { ModalEditPost } from '../admin/ModalEditPost'
 import { InputGroup,FormControl } from "react-bootstrap";
import { ModalDelete } from './ModalDelete';


 export function ReviewPost() {
 
  //-------------------- SETTEO PARA MODAL ---------------------
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  //----------------LLAMANDO POSTS DEL REGISTRADOR-----------------
  const [posts, setPosts] = useState([]);
  //console.log(posts)

  const callback = (data) => {
    //console.log(data)
    setPosts(data)
  }
 
  useEffect(() => {
    getPosts(callback);
  }, []) 


  return (
    <>
      <HeaderAdmin/>
      <section className="container-fluid p-3 w-100 col px-5">
        <h3 className="w-100 text-center my-4 mb-5">Lista de Publicaciones</h3>
        
        <div className='d-flex justify-content-between'>
          <InputGroup
            className="mb-3 me-3 input-group " style={{background:'#E5E5E5'}}
            id="searchNancy"
            // onChange={(e) => handleChange(e)}
          >
            <InputGroup.Text className="border-0 bg-transparent text-danger">
              <i className="fas fa-search text-dark"></i>
            </InputGroup.Text>
            <FormControl
              className="border-0 rounded-pill"
              style={{background:'#E5E5E5'}}
              placeholder="Buscar"
              aria-label="Buscar"
              aria-describedby="basic-addon2"
            />
          </InputGroup>   
             
          <button  style={{borderRadius:'11px', padding:'5px 25px', background:'#0d6efd', border:'#0d6efd', color:'white', float:'right', marginBottom:'15px'}}
            className="btn-finalizar d-block mb-4 me-5" 
            id="btnFinaly"
            onClick={handleShow}
          >
            <b>Crear Post</b>
          </button>
        </div>
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
              <th>Fecha</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            { posts.length> 0 ? posts.map((post, index) => (
              <tr key={index}>
                <td>{post.owner}</td>
                <td>📑{post.title}</td>
                <td>{post.category}</td>
                <td>{post.subcategory}</td>
                {
                  post.status ==='pendiente' 
                  ? <td style={{color: '#B8860B'}}><b>{post.status}</b></td>
                  :  post.status ==='publicado'
                     ? <td style={{color:  'green'}}><b>{post.status}</b></td>
                    : <td style={{color: 'red'}}><b>{post.status}</b></td>
                }                  
                
                <td>{post.date}</td>
                <td>
                  <ModalEditPost
                    post={post} 
                  />
                </td> 
                <td>
                  <ModalDelete 
                    postId={post.postId} 
                  />            
                </td>
              </tr>
            )): <>Cargando Publicaciones... </> }
          </tbody>
        </table>
      </section>
    </>
  );
}
