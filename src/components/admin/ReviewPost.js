import React from "react";
import { ModalReviewPost } from "./ModalReviewPost";
import { Header } from '../home/Header';
import { Button} from "react-bootstrap";
import '../../styles/paula.css'

export function ReviewPost() {
  
  const newPost = {
    backgroundColor: "#0D0B6E",
    marginRight: "30px",
  }

  const crearBtn = {
    backgroundColor:"#0D0B6E",
    padding:"5px 10px",
      fontSize: "20px",
      position:"relative",
      marginLeft: "50px",
  }

    return (
        <>
        
      <Header />
      <section className="w-100 mt-4">
      <div>
      <nav class="style-nav">
      <div class="search-box">
        <input type="type" id="keyword" autocomplete="off" placeholder="Buscar" /><i class="fas fa-search" ></i>
      </div>
      </nav>
      <Button style={crearBtn} className="crear-btn">+ Crear Publicación</Button>{' '}
    
      </div>
      </section>
      <section className="container-fluid p-3 w-100 col">
        <h3 className="w-100 text-center ">Historial de publicaciones</h3>
        <div className="d-flex w-100 justify-content-end">
         
        </div>
        <table className="table table-sm table-hover w-100 mt-3 mx-2" >
          <thead style={newPost}>
            <tr>
              <th>Colaborador</th>
              <th>Publicación</th>
              <th>Categoría</th>
              <th>Estado </th>
              <th>Actualizar </th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Roxana Flores</td>
            <td>📷Campaña de dscto</td>
            <td>Salud</td>
            <td>Pediente</td>
            <td>🗑</td>
            <td>✏</td>
          </tr>
          </tbody>
        </table>
      </section>
      <ModalReviewPost />
    </>
  );
};
