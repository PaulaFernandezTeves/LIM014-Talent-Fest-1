import React from 'react';
import logoheader from '../../images/logoheader.png'
import {
  Link, useRouteMatch, Switch, Route
} from "react-router-dom";

import {Health} from '../ViewCategory/subcomponents1/Health';
import {Security} from '../ViewCategory/subcomponents1/Security';
import { Benefit } from '../ViewCategory/subcomponents1/Benefit';

export const Header = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <header className='meryheader d-flex justify-content-between'>
        <ul className='d-flex justify-content-between align-self-center'>
          <Link to='/cuidado'>Cuidado</Link>
          {/*esta temporal para probar las vista listUser*/}
          <Link to='/list'>Usuarios</Link>
        </ul> 
        <figure className='meryimgheader'>
          <img src={logoheader} alt="logo" className='.logo' />
        </figure>
      </header>
      <section>
      <ul>
        <li>
          <Link to={`${url}/salud`}>Salud</Link>
        </li>
        <li>
          <Link to={`${url}/seguridad`}>Seguridad</Link>
        </li>
        <li>
          <Link to={`${url}/beneficios`}>Beneficios</Link>
        </li>
        <li>
          <Link to={"/home"}>home</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <Health />
        </Route>
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



