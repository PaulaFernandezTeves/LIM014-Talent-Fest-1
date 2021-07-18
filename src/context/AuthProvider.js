import React, {createContext, useContext} from 'react';
import { auth } from '../firebase/config'
//import { login } from '../firebase/auth'


const AuthContext = createContext();

export const useAuth = () => { //con esto podemos USAR todas las fn y estados de este AuthContext 
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const value = {
    login,
  } 

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
