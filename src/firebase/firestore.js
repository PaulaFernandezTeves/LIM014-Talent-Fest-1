import { db } from "./config";

// FECHAAAAAA
  export const datePostDB = () => {
    const datePost = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };
    const timePost = {
      hour12: 'true',
      hour: 'numeric',
      minute: 'numeric',
    };
    const date = new Date().toLocaleDateString('es-Es', datePost);
    const time = new Date().toLocaleTimeString('es-Es', timePost);
    const dateTime = `${date} ${time}`;

    return dateTime;
  };

  export const orderDate = () => {
    const year = new Date().getFullYear();
    const month = `0${new Date().getMonth()}`.slice(-2);
    const day = `0${new Date().getDate()}`.slice(-2);
    const hour = `0${new Date().getHours()}`.slice(-2);
    const minute = `0${new Date().getMinutes()}`.slice(-2);
    const second = `0${new Date().getSeconds()}`.slice(-2);
    // eslint-disable-next-line radix
    return parseInt(`${year}${month}${day}${hour}${minute}${second}`, 0);
  };
// -------------------------------------------------------


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

  export const propertyUser = (userId, colaborador, email, perfil, rol) => {
    return db.collection("users").doc(userId).set({
      userId,
      colaborador,
      email,
      perfil,
      rol,
    });
  };

  export const createPost = (object) => {db.collection("post").add(object)};

  export const getPosts = (callback) => db.collection("post")
      .orderBy("orderDate", 'desc')
      .onSnapshot((querySnapshot) => {
      const posts = [];
        querySnapshot.docs.forEach((doc) =>       
          posts.push({
            postId: doc.id,
            ...doc.data(),
          })     
      );  
      console.log(posts)
      callback(posts);
    });


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

    export const deletePost = (postId) => {
      return db.collection("post").doc(postId).delete();
  };


