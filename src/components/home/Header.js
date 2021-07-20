import React from 'react';
//import logo from '../../images/logo.png'
import {
  Link
} from "react-router-dom";


export const Header = () => {
  return (
    <>
      <section className='d-flex justify-content-between bt-5'>
        <figure>
          <img /* src={logo} */ alt="logo" className='.logo' />
        </figure>
        <ul className='d-flex justify-content-between'>
          <Link to='/cuidado'>Cuidado</Link>
          {/*esta temporal para probar las vista listUser*/}
          <Link to='/list'>Usuarios</Link>
        </ul> 
      </section>
    </>
  );
}



