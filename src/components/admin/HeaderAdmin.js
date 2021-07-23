import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider';
import { Dropdown } from "react-bootstrap";

import '../../styles/paula.css';

export const HeaderAdmin = () => {

  const {logOut} = useAuth();
 
  const merylink = {
    textDecoration: "none",
    color: "black",
    fontSize: "1.2rem",
    marginRight: "3rem",
    fontWeight: "bold",
    aligncontent: 'center',
  }

  return (
        <>
        <header className="meryheader d-flex justify-content-between px-5 " style={{background:'#FCAC04', paddingTop:'20px', paddingBottom:'20px'}}>
        <figure className="meryimgheader d-flex align-items-center"  style={{marginBottom:'0'}} >
          <Link to={"/home"} style={merylink}>
          <i className="fas fa-home" style={{color:'#0D0B6F', fontSize:'30px'}}></i>           
          </Link>
        </figure>
        <ul className="d-flex justify-content-between align-self-center" style={{marginBottom:'0',}}>
          <Link style={merylink}>¡Hola Luisa!</Link>
        </ul>
        <Dropdown style={{marginLeft:"350px"}}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Administrador
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item >
              <Link to='/administrador/usuarios'>Usuarios</Link>                 
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='/administrador/revision-post'>Revisión de Posts</Link>      
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <figure className="meryimgheader d-flex align-items-center"  style={{marginBottom:'0'}} >
             <i className="far fa-bell" style={{color:'#0D0B6F', fontSize:'27px', marginRight:'30px', fontWeight:'bold'}}></i>             
        </figure>
        <Link to={"/"} onClick={() => logOut()} style={merylink}>Salir</Link>
        
      </header>
    </>
    )
}