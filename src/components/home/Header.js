import React, { useState, useEffect} from 'react';
import logoheader from '../../images/logoheader.png'
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider';
import { FormControl, InputGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { getUser } from '../../firebase/firestore'

 
export const Header = () => {
  let history = useHistory();
 
  const {logOut, currentUser} = useAuth();
  console.log(currentUser)
  const meryli = {
    listStyle: "none",
  }
  const merylink = {
    textDecoration: "none",
    color: "white",
    fontSize: "1.2rem",
    marginRight: "3rem",
    fontWeight: "bold",
    aligncontent: 'center',
  }
    //llamando a los usuarios
    const [rol, setRol] = useState('');
    console.log(rol)
    // const callback = (data) => {
    //   setUsers(data)
    // }
  
    useEffect(() => {
      console.log(currentUser)
      getUser(currentUser.uid).then((user)=>{
        console.log(user.data())
        setRol(user.data().rol)})
    }, [])
 
  return (
    <>
      <header className="meryheader d-flex justify-content-between px-5 pe-5">
        <ul className="d-flex justify-content-between align-self-center" style={{marginBottom:'0',}}>
          <Link style={merylink}>Cuidado</Link>
        </ul>
        <figure className="meryimgheader d-flex align-items-center"  style={{marginBottom:'0'}} >
          <Link to={"/"} onClick={() => logOut()} style={merylink}>
            Salir
          </Link>
          <img src={logoheader} alt="logo" className="merylogoheader" />
        </figure>
      </header>
      <section className="merysubnav">
        <nav className="px-5 pt-3 pb-2">
          <ul className="d-flex justify-content-between align-self-center" style={{marginBottom:'0',}} >
            <li style={meryli} >
              <Link to="/cuidado/salud" style={merylink}>
                Salud
              </Link>
            </li>
            <li style={meryli}>
              <Link to="/cuidado/seguridad" style={merylink}>
                Seguridad
              </Link>
            </li>
            <li style={meryli}>
              <Link to="/cuidado/beneficios" style={merylink}>
                Beneficios
              </Link>
            </li>
            <InputGroup
              className="mb-3 me-3 input-group m-auto"
              id="searchNancy"
              // onChange={(e) => handleChange(e)}
            >
              <InputGroup.Text className="border-0 bg-transparent text-danger">
                <i className="fas fa-search"></i>
              </InputGroup.Text>
              <FormControl
                className="border-0 bg-white rounded-pill"
                placeholder="Encuentra tu producto aquí..."
                aria-label="Encuentra tu producto aquí..."
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <button className="merylinkjob" style={{maxWidth:'15%',}} onClick={()=> history.push('/mi-trabajo')}>Para mi trabajo</button>
            
            {
              rol === 'admin'
              ?             
              <Dropdown>
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
              : rol === 'registrador'
                ? <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Registrador
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to='/registrador/historial-post'>Posts</Link>                 
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                : null  
            } 
          </ul>
        </nav>
      </section>
    </>
  );
}



