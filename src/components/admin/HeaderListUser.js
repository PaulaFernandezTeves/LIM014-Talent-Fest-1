import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider';
import { Button, Dropdown } from "react-bootstrap";
import logoheader from '../../images/logoheader.png'
import '../../styles/paula.css';


export const HeaderListUser = () => {

    //     let history = useHistory();
    //   //let { path, url } = useRouteMatch();
     
      const {logOut} = useAuth();
     
    //   const meryli = {
    //     listStyle: "none",
    //   }
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
            <img src={logoheader} alt="logo" className="merylogoheader" />            
            </Link>
            </figure>
            <ul className="d-flex justify-content-between align-self-center" style={{marginBottom:'0',}}>
              <Link style={merylink}>¡Hola Luisa!</Link>
            </ul>
            <Dropdown style={{marginTop:'20px', marginLeft:'780px'}}>
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
              <Link to={"/"} onClick={() => logOut()} style={merylink}>
                Salir
              </Link>
            </figure>
          </header>
    
            </>
    
        )
    }