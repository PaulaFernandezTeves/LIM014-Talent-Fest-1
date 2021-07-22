import { db } from "./config";
 
export const getDataUser = (callback) => { 
  return (
    db
      .collection("users")
      .onSnapshot((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push({
            userId: doc.userId,
            ...doc.data(),
          });
        });
        callback(users);
      })
  );
};

export const createPost = (object) => db.collection('post').add(object);

export const getPosts = (callback) => { 
  return (
    db
      .collection("post")
      .onSnapshot((querySnapshot) => {
        const posts = [];
        querySnapshot.forEach((doc) => {
          posts.push({
            userId: doc.userId,
            ...doc.data(),
          });
        });
        callback(posts);
      })
  );
};