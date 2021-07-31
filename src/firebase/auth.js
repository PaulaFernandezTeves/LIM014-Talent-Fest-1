import { auth } from './config'

export const loginFb = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
}

export const logoutFb = () => {
  return auth.signOut();
};

export const createUser = (email, password) => {
  // Crear usuario con correo electrónico y contraseña
  return auth.createUserWithEmailAndPassword(email, password);
};
export const getIdUser =()=> auth.currentUser