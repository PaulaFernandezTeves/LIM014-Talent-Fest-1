import React from 'react';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
// import { Header } from './Header';
import { Component1a } from './subcomponents1/Component1a';
import { Component1b } from './subcomponents1/Component1b';
import { Component1c } from './subcomponents1/Component1c';

export const Component1 = () => {
  let { path, url } = useRouteMatch();

  return (
     <div>
      <h2>Mi cultura</h2>
      <ul>
        <li>
          <Link to={`${url}/principios`}>Principios</Link>
        </li>
        <li>
          <Link to={`${url}/diversidad`}>Diversidad</Link>
        </li>
        <li>
          <Link to={`${url}/canal-de-etica`}>Canal de Etica</Link>
        </li>
        <li>
          <Link to={'/home'}>home</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <Component1a />
        </Route>
        <Route exact path={`${path}/principios`}>
          <Component1a />
        </Route>
        <Route path={`${path}/diversidad`}>
          <Component1b />
        </Route>
        <Route path={`${path}/canal-de-etica`}>
          <Component1c />
        </Route>
      </Switch>
    </div>
  )
}
