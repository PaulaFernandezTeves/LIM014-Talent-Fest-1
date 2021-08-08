/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react';
import logoheader from '../../images/logoheader.png'
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider';
import { FormControl, InputGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { getUser, getPosts } from '../../firebase/firestore'

 
export const Header = () => {
  let history = useHistory();
 
  const {logOut, currentUser} = useAuth();
  //console.log(currentUser)
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

    useEffect(() => {
      if (currentUser) {
        getUser(currentUser.uid).then((user) => {
          setRol(user.data().rol);
        });
      } else {
        console.error("no hay current user");
      }
    }, [currentUser]);

    const [posts, setPosts] = useState([]);

    const callback = (data) => {
      setPosts(data);
    };
  
    useEffect(() => {
      getPosts(callback);
    }, []);
    


const handleChange = (e) => {
  const value = e.target.value;
  const cb = (posts) => {
    const firstView = posts.filter(
      (post) => post.title.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    setPosts(firstView);
  };

  getPosts(cb);
};

console.log(posts)


  return (
    <>
      <section className="meryheader px-5 p-4 d-flex align-items-center justify-content-between">
        <article className="d-flex align-items-center">
          <Link to={"/home"} >
            <i className="fas fa-home" style={{color:'#0D0B6F', fontSize:'30px'}}></i>           
          </Link>
          <ul className="d-flex justify-content-between align-self-center" style={{marginBottom:'0',}}>
            <Link to='' style={merylink}>Cuidado</Link>
          </ul>
        </article>
        <article className="d-flex align-items-center justify-content-end">
          <Link to={"/"} onClick={() => logOut()} style={merylink}>
            Salir
          </Link>
          <figure className="meryimgheader d-flex align-items-center"  style={{marginBottom:'0'}} >  
            <img src={logoheader} alt="logo" style={{width:'100%'}} />
          </figure>
        </article>       
      </section>

      {/* <section id="header">
        <header>
          <h1 class="logo">R&M</h1>
          <input type="checkbox" id="btn-menu" />
          <label for="btn-menu">
            <img width="30" height="30" src="imagenes/menu.png" />
          </label>
          <nav class="menu">
            <ul class="menu-items">
              <li>
                <a id="opc-curisidades">Curiosidades</a>
              </li>
              <li>
                <a id="opc-resumen">Resumen</a>
              </li>
              <li>
                <a class="opc-character">Personajes</a>
              </li>
            </ul>
          </nav>
        </header>
      </section> */}

      {/* <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to={"/home"} style={merylink}>
              <i
                className="fas fa-home"
                onClick={closeMobileMenu}
                style={{ color: "#0D0B6F", fontSize: "30px" }}
              ></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}
              style={merylink}
            >
              Cuidado
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} onClick={() => logOut()} style={merylink}>
              Salir
            </Link>
            <img src={logoheader} alt="logo" className="icon" />
          </li>
        </ul>
      </nav> */}

      <section className="merysubnav">
        <nav className="px-5 p-4">
          <ul
            className="d-flex justify-content-between align-self-center"
            style={{ marginBottom: "0", paddingLeft: "69px" }}
          >
            <li style={meryli} className="align-self-center">
              <Link
                to="/cuidado/salud"
                style={merylink}
                className="align-self-center"
              >
                Salud
              </Link>
            </li>
            <li style={meryli} className="align-self-center">
              <Link to="/cuidado/seguridad" style={merylink}>
                Seguridad
              </Link>
            </li>
            <li style={meryli} className="align-self-center">
              <Link to="/cuidado/beneficios" style={merylink}>
                Beneficios
              </Link>
            </li>
            <InputGroup
              style={{ maxWidth: "25%" }}
              className="input-group m-auto align-self-center"
              onChange={(e) => handleChange(e)}
            >
              <InputGroup.Text className="border-0 bg-transparent text-light align-self-center">
                <i className="fas fa-search"></i>
              </InputGroup.Text>
              <FormControl
                className="border-0 bg-white rounded-pill align-self-center"
                placeholder="Encuentra tu producto aquí..."
                aria-label="Encuentra tu producto aquí..."
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <button
              className="merylinkjob align-self-center"
              style={{ width: "15%" }}
              onClick={() => history.push("/mi-trabajo")}
            >
              Para mi trabajo
            </button>

            {rol === "admin" ? (
              <Dropdown className="align-self-center">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Administrador
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/administrador/usuarios">Usuarios</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/administrador/revision-post">
                      Revisión de Posts
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : rol === "registrador" ? (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Registrador
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/registrador/historial-post">Posts</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : null}
          </ul>
        </nav>
      </section>
    </>
  );
}



