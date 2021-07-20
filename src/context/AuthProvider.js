import React, {createContext, useContext, useState, useEffect} from 'react';
import { auth } from '../firebase/config';
import { loginFb, logoutFb } from '../firebase/auth';


const AuthContext = createContext();

export const useAuth = () => { //con esto podemos USAR todas las fn y estados de este AuthContext 
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const login = (email, password) => loginFb(email, password);
  
  const logOut = () => logoutFb() 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('usuario logged', user);
      if(user) {
        localStorage.setItem("user", JSON.stringify(user));
        setCurrentUser(user)
      } else {
        localStorage.clear("user")
      };
    });
    return unsubscribe;
  }, []);


  const value = {
    currentUser,
    login,
    logOut,
  } 

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
