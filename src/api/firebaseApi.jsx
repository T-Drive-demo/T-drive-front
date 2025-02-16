import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export const getFiles = (setFiles) => {
  const filesData = collection(db, "myfiles");
  const unsubscribe = onSnapshot(
    filesData,
    (snapshot) => {
      setFiles(() => {
        const fileArr = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
          .sort(
            (a, b) => b.data.timestamp?.seconds - a.data.timestamp?.seconds
          );
        return fileArr;
      });
    },
    (error) => {
      console.error("Error getting documents: ", error);
    }
  );

  return unsubscribe;
};
