import { db } from "./config";

export const getDataUser = (callback) => {
  return db.collection("users").onSnapshot((querySnapshot) => {
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({
        userId: doc.userId,
        ...doc.data(),
      });
    });
    callback(users);
  });
};
export const getUser = (id) => { 
  return db.collection('users').doc(id).get()
}

export const editUser = (userId, perfil,rol) => {
  return db
  .collection("users")
  .doc(userId)
  .update({ perfil, rol });
};


export const deleteUser = (userId) => {
  return db.collection("users").doc(userId).delete();
};

export const createPost = (object) => db.collection("post").add(object);

export const getPosts = (callback) => {
  return db.collection("post").onSnapshot((querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id)
      posts.push({
        postId: doc.id,
        ...doc.data(),
      });
      
    });
    
    callback(posts);
  });
};

export const updateStatusPost = ( idPost,  payload ) =>
  db
    .collection("post")
    .doc(idPost)
    .update({...payload});

export const updateStatusPostRegister = ( idPost,  payload ) =>
db
  .collection("post")
  .doc(idPost)
  .update({...payload});    
