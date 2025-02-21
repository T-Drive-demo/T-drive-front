import { SidebarContainer } from "styles/sidebar/sidebar.style";

import AddFile from "components/sidebar/AddFile";
import FileUploadModal from "components/sidebar/FileUploadModal";
import SidebarTabs from "components/sidebar/SidebarTabs";
import { useState } from "react";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { toast } from "react-toastify";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(null);

  const onChangeFile = (file) => {
    if (file) {
      setFile(file);
      setSelectedFile(file.name);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    setSelectedFile("");
    setUploading(true);
    setProgress(0);

    try {
      // Firebase Storage에 업로드할 파일 경로를 참조
      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.error("Error uploading file:", error);
          setUploading(false);
          toast.error("Error uploading file. Please try again.");
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);

          await addDoc(collection(db, "myfiles"), {
            timestamp: serverTimestamp(),
            filename: file.name,
            fileURL: url,
            size: uploadTask.snapshot.totalBytes,
            contentType: uploadTask.snapshot.metadata.contentType,
            starred: false,
          });
          toast.success("File Uploaded Successfully");
          setUploading(false);
          setFile(null);
          setOpen(false);
          setProgress(0);
        }
      );
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploading(false);
      toast.error("Error uploading file. Please try again.");
    }
  };

  return (
    <SidebarContainer>
      <FileUploadModal
        open={open}
        setOpen={setOpen}
        uploading={uploading}
        handleUpload={handleUpload}
        selectedFile={selectedFile}
        progress={progress}
        onChangeFile={onChangeFile}
      />
      <AddFile onClick={() => setOpen(true)} />
      <SidebarTabs />
    </SidebarContainer>
  );
};

export default Sidebar;
