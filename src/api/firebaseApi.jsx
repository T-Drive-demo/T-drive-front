import { db } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

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

export const handleStarred = async (id) => {
  try {
    const docRef = doc(db, "myfiles", id);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      const currentStarredStatus = docSnapshot.data().starred || false;
      if (currentStarredStatus) {
        toast.error("Removed from starred");
      } else {
        toast.success("Added to starred");
      }
      await updateDoc(docRef, { starred: !currentStarredStatus });
    } else {
      console.error("Document does not exist.");
    }
  } catch (error) {
    console.error("Error updating starred status: ", error);
  }
};
