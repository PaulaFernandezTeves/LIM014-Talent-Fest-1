import { db } from "./config";

export const getDataUser = (callback) => {

  return (
    db
      .collection("users")
      // .orderBy("date", "desc")
      // querySnapshot es una colección de post (doc)
      // Obtener en tiempo real los datos del doc
      .onSnapshot((querySnapshot) => {
        // console.log('Colección(querySnapshot)', querySnapshot);
        const users = [];
        // Se rrecore el querySnapshot
        querySnapshot.forEach((doc) => {
          // console.log( 'info de los posts (doc) dentro del querySnapshot',
          //     doc.data(),
          //   );
          // Se agrega los valores que obtiene de cada post
          users.push({
            userId: doc.userId,
            ...doc.data(),
          });
        });
        // console.log('array de post', post);
        callback(users);
      })
  );
};