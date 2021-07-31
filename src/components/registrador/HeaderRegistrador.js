import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider';
import { getPosts } from '../../firebase/firestore';

import '../../styles/paula.css';

export const HeaderRegistrador = () => {
 
  const {logOut, dataUser} = useAuth();
  console.log(dataUser)
  
  const merylink = {
    textDecoration: "none",
    color: "black",
    fontSize: "1.2rem",
    marginRight: "3rem",
    fontWeight: "bold",
    aligncontent: 'center',
  }
  //----------------LLAMANDO POSTS DEL REGISTRADOR-----------------
  const [posts, setPosts] = useState([]);

  const filtering = posts.filter(obj => 
    obj.status === 'pendiente' || obj.status === 'rechazado'
  ).length

  const callback = (data) => {
    //console.log(data)
    setPosts(data)
  }
 
  useEffect(() => {
    getPosts(callback);
  }, []) 

    return (
      <>
        <header className="meryheader d-flex justify-content-between px-5 align-items-center" style={{background:'#FCAC04', paddingTop:'20px', paddingBottom:'20px'}}>
          <figure className="meryimgheader d-flex align-items-center"  style={{marginBottom:'0'}} >
            <Link to={"/home"} style={merylink}>
              <i className="fas fa-home" style={{color:'#0D0B6F', fontSize:'30px'}}></i>      
            </Link>
          </figure>
          <ul className="d-flex justify-content-between align-items-center" style={{marginBottom:'0',}}>
            <Link style={merylink}>¡Hola {dataUser.email}!</Link>
          </ul>
          <figure className="meryimgheader d-flex align-items-center justify-content-center"  style={{marginBottom:'0', marginRight:'30px'}} >      
            <i className="far fa-bell" style={{color:'#0D0B6F', fontSize:'27px', fontWeight:'bold'}}></i>
            <b className='rounded-circle' style={{background:'#ECF2F6', width:'21px', color: 'red', paddingLeft:'4px'}}>{filtering}</b> 
          </figure>
          <Link to={"/"} onClick={() => logOut()} style={merylink} >Salir</Link>       
        </header>
      </>
    )
}