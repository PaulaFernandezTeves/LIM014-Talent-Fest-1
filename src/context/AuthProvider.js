import React, {createContext, useContext, useState, useEffect} from 'react';
import { auth } from '../firebase/config'


const AuthContext = createContext();

export const useAuth = () => { //con esto podemos USAR todas las fn y estados de este AuthContext 
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

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
  } 

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
