import React from 'react';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
//import { Header } from './Header';
import { Component2a } from './subcomponents2/Component2a';
import { Component2b } from './subcomponents2/Component2b';
import { Component2c } from './subcomponents2/Component2c';

export const Component2 = () => {
  let { path, url } = useRouteMatch();

  return (
     <div>
      <h2>Capacitación</h2>
      <ul>
        <li>
          <Link to={`${url}/capacitacion1`}>Capacitación1</Link>
        </li>
        <li>
          <Link to={`${url}/capacitacion2`}>Capacitación2</Link>
        </li>
        <li>
          <Link to={`${url}/capacitacion3`}>Capacitación3</Link>
        </li>
        <li>
        <Link to={'/home'}>home</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <Component2a />
        </Route>
        <Route exact path={`${path}/capacitacion1`}>
          <Component2a />
        </Route>
        <Route path={`${path}/capacitacion2`}>
          <Component2b />
        </Route>
        <Route path={`${path}/capacitacion3`}>
          <Component2c />
        </Route>
      </Switch>
    </div>
  )
}