import React, { useState, useEffect} from 'react';
import { Link, useHistory } from "react-router-dom";
import '../../styles/paula.css';
import logoheader from '../../images/logoheader.png'
import { Dropdown } from "react-bootstrap";
import { FormControl, InputGroup } from "react-bootstrap";
import { useAuth } from '../../context/AuthProvider';
import { getUser } from '../../firebase/firestore'



export const HeaderDos = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
    marginRight: "1rem",
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
    getUser(currentUser.uid).then((user)=>{
      console.log(user.data())
      setRol(user.data().rol)})
  }, [])

  return (
    <>
      <nav className='navbar'>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
          <Link to={"/home"} >
            <i className="fas fa-home" style={{color:'#0D0B6F', fontSize:'30px'}} onClick={closeMobileMenu}></i>      
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Cuidado
            </Link>
          </li>
          <li className='nav-item'>
          <Link to={"/"} onClick={() => logOut()} style={merylink} >
              Salir
            </Link>
            <img src={logoheader} alt="logo" className="icon"/>
          </li>
        </ul>
      </nav>
      <section className="merysubnav" md>
        <nav className="px-5 pt-3 pb-2">
          <ul className="d-flex justify-content-between align-self-center active" style={{marginBottom:'0', marginRight:'150px'}} >
            <li style={meryli} fluid>
              <Link to="/cuidado/salud" style={merylink}>
                Salud
              </Link>
            </li>
            <li style={meryli} md>
              <Link to="/cuidado/seguridad" style={merylink}>
                Seguridad
              </Link>
            </li>
            <li style={meryli} md>
              <Link to="/cuidado/beneficios" style={merylink}>
                Beneficios
              </Link>
            </li>
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
            <button className="merylinkjob" style={{maxWidth:'15%',}} onClick={()=> history.push('/mi-trabajo')}>Para mi trabajo</button>
            
            {
              "Loading" && rol === 'admin'
              ?             
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basics">
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
              :
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basics">
                  Registrador
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to='/registrador/historial-post'>Posts</Link>                 
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            } 
          </ul>
        </nav>
      </section>
    </>
  );
}

