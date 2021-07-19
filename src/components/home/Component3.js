import React from 'react';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
// import { Header } from './Header';
import { Component3a } from './subcomponents3/Component3a';
import { Component3b } from './subcomponents3/Component3b';
import { Component3c } from './subcomponents3/Component3c';

export const Component3 = () => {
  let { path, url } = useRouteMatch();

  return (
     <div>
      <h2>Desarrollo</h2>
      <ul>
        <li>
          <Link to={`${url}/desarrollo1`}>Desarrollo1</Link>
        </li>
        <li>
          <Link to={`${url}/desarrollo2`}>Desarrollo2</Link>
        </li>
        <li>
          <Link to={`${url}/desarrollo3`}>Desarrollo3</Link>
        </li>
        <li>
          <Link to={'/home'}>home</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <Component3a />
        </Route>
        <Route exact path={`${path}/desarrollo1`}>
          <Component3a />
        </Route>
        <Route path={`${path}/desarrollo2`}>
          <Component3b />
        </Route>
        <Route path={`${path}/desarrollo3`}>
          <Component3c />
        </Route>
      </Switch>
    </div>
  )
}