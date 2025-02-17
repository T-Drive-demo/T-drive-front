import { db } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const getFiles = (setFiles) => {
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

const handleStarred = async (id) => {
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

const handleDeleteFromTrash = async (id) => {
  try {
    const confirmed = window.confirm(
      "Are you sure you want to delete this file?"
    );

    if (confirmed) {
      const docRef = doc(db, "trash", id);

      await deleteDoc(docRef);
      toast.error("Permanently Deleted");
    }
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

const getTrashFiles = (setFiles) => {
  const filesData = collection(db, "trash");
  const unsubscribeFiles = onSnapshot(filesData, (snapshot) => {
    setFiles(() => {
      const fileArr = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
        .sort((a, b) => b.data.timestamp?.seconds - a.data.timestamp?.seconds);
      return fileArr;
    });
  });

  return unsubscribeFiles;
};

export { getFiles, handleStarred, handleDeleteFromTrash, getTrashFiles };
