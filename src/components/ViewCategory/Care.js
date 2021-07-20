import React from 'react';
// import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
// // import { Header } from './Header';
// import { Health } from './subcomponents1/Health';
// import { Security } from './subcomponents1/Security';
// import { Benefit } from './subcomponents1/Benefit';

export const Care = () => {
  // let { path, url } = useRouteMatch();

  return (
    <div>
      caree ex
      {/* <ul>
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
      </Switch> */}
    </div>
  );
}
