import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider';
import { Button, Dropdown } from "react-bootstrap";
import '../../styles/paula.css';


export const HeaderListUser = () => {
     
      const {logOut} = useAuth();
      const merylink = {
        textDecoration: "none",
        color: "white",
        fontSize: "1.2rem",
        marginRight: "3rem",
        fontWeight: "bold",
        aligncontent: 'center',
      }
    
      const crearBtn = {
    
        backgroundColor:"#0D0B6E",
        padding: "10px",
        borderRadius:"5px",
        margin: "15px",
        marginTop: "15px",
        marginLeft: "50px",
      }
    
        return (
            <>
            <header className="meryheader d-flex justify-content-between px-5 pe-5">
            <figure className="meryimgheader d-flex align-items-center"  style={{marginBottom:'0'}} >
            <Link to={"/home"} style={merylink}>
            <i className="fas fa-home" style={{color:'#0D0B6F', fontSize:'30px'}}></i>      
            </Link>
            </figure>
            <ul className="d-flex justify-content-between align-self-center" style={{marginBottom:'0',}}>
              <Link style={merylink}>¡Hola Luisa!</Link>
            </ul>
            <Dropdown style={{marginTop:'20px', marginLeft:'800px'}}>
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
            <Button style={crearBtn} className="crear-btn">Publicaciones pendientes</Button>{' '}
            <figure className="meryimgheader d-flex align-items-center"  style={{marginBottom:'0'}} >
            <i className="far fa-bell" style={{color:'#0D0B6F', fontSize:'27px', marginRight:'30px', fontWeight:'bold'}}></i>
              <Link to={"/"} onClick={() => logOut()} style={merylink}>
                Salir
              </Link>
            </figure>
          </header>
            </>
    
        )
    }