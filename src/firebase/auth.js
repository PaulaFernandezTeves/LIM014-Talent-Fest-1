import { auth } from './config'

export const loginFb = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
}

export const logoutFb = () => {
  return auth.signOut();
};