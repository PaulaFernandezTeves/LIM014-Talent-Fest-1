import React from 'react';
import logoheader from '../../images/logoheader.png'
import {
  Link, useRouteMatch, Switch, Route
} from "react-router-dom";
import { useAuth } from '../../context/AuthProvider';
import {Health} from '../ViewCategory/subcomponents1/Health';
import {Security} from '../ViewCategory/subcomponents1/Security';
import { Benefit } from '../ViewCategory/subcomponents1/Benefit';
import { FormControl, InputGroup } from "react-bootstrap";


export const Care = () => {
  let { path, url } = useRouteMatch();
  const {logOut} = useAuth();

  const meryli = {
    listStyle: "none",
  }
  const merylink = {
    textDecoration: "none",
    color: "white",
    fontSize: "1.2rem",
    marginRight: "3rem",
    fontWeight: "bold",
  }

  return (
    <>
      <header className='meryheader d-flex justify-content-between px-5 pe-5'>
        <ul className='d-flex justify-content-between align-self-center'>
          <Link to='/home' style={merylink}>Cuidado</Link>
        </ul> 
        <figure className='meryimgheader d-flex align-items-center'>
          <Link to={"/"} onClick={()=>logOut()} style={merylink}>Salir</Link>
          <img src={logoheader} alt="logo" className='merylogoheader' />
        </figure>
      </header>
      <section className='merysubnav'>
        <nav className='px-5 pt-3 pb-2'>
          <ul className='d-flex justify-content-between'>
            <li style={meryli}>
              <Link to={`${url}/salud`} style={merylink}>Salud</Link>
            </li>
            <li style={meryli}>
              <Link to={`${url}/seguridad`} style={merylink}>Seguridad</Link>
            </li>
            <li style={meryli}>
              <Link to={`${url}/beneficios`} style={merylink}>Beneficios</Link>
            </li>
            <InputGroup
                className="mb-3 me-3 input-group m-auto"
                id="searchNancy"
                /* onChange={(e) => handleChange(e)} */
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
            <button className='merylinkjob'>Para mi trabajo</button>
          </ul>
        </nav>

        <Switch>
          <Route exact path={`${path}/salud`}>
            <Health />
          </Route>
          <Route path={`${path}/seguridad`}>
            <Security />
          </Route>
          <Route path={`${path}/beneficios`}>
            <Benefit />
          </Route>
        </Switch>
      </section>
    </>
  );
}
