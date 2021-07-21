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
