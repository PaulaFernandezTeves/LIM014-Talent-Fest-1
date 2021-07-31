/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useContext, useState, useEffect} from 'react';
import { auth } from '../firebase/config';
import { loginFb, logoutFb } from '../firebase/auth';
import { getUser } from '../firebase/firestore';
import { useHistory } from "react-router-dom";


const AuthContext = createContext();

export const useAuth = () => { //con esto podemos USAR todas las fn y estados de este AuthContext 
  return useContext(AuthContext);
};


export const AuthProvider = ({ children }) => {
  let history = useHistory();

  // FUNCIONES DE AUTH
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  //console.log(currentUser)// OBJETO CURRENT USER - AUTH

  // SETEANDO DATAUSER INICIAL
  const [dataUser, setDataUser] = useState(currentUser)

  console.log(dataUser)// OBJETO COLECCION USER
  //---------------------------------------------------------
  const login = (email, password) => loginFb(email, password);
  
  const logOut = () => {
    logoutFb()
      .then(() => {
        setCurrentUser(null);
        history.push("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      //console.log('usuario logged', user);
      if(user) {
        //console.log(user)
        localStorage.setItem("user", JSON.stringify(user));
        setCurrentUser(user)
      } else {
        localStorage.clear("user")
      };
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (currentUser !== null) {
      getUser(currentUser.uid).then((user) => {
        setDataUser(user.data());
      });
    } else {
      console.error("no hay current user");
    }
  }, [currentUser]);


  const value = {
    currentUser,
    dataUser,
    login,
    logOut,
  } 

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
