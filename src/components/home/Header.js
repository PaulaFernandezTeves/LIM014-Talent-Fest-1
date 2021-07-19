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
          <Link to='/mi-cultura'>Mi cultura</Link>
          <Link to='/capacitacion'>Capacitación</Link>
          <Link to='/desarrollo'>Desarrollo</Link>
        </ul> 
      </section>
    </>
  );
}



