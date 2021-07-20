import { db } from "./config";

// export const getDataUser = async () => {
//   try{
//     // .get() obtener los datos del documento de una colección
//     // const response = await db.collection("users").get();
//     // return response.forEach((doc) => {
//     //   // doc.data() is never undefined for query doc snapshots
//     //     console.log(doc.id, " => ", doc.data());
//     // })
//   } catch(err) {
//     console.log(err)
//   }
// };

export const getDataUser = () => {
  // .get() obtener los datos del documento de una colección
  return db.collection("users").get();
};