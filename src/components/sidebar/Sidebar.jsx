import { SidebarContainer } from "styles/sidebar/sidebar.style";

import AddFile from "components/sidebar/AddFile";
import FileUploadModal from "components/sidebar/FileUploadModal";
import SidebarTabs from "components/sidebar/SidebarTabs";
import { useState } from "react";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFile = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setSelectedFile(e.target.files[0].name);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    setUploading(true);

    // Firebase Storage에 업로드할 파일 경로를 참조
    const fileRef = ref(storage, `files/${file.name}`);

    const fileSize = file.size;

    // 파일을 Firebase Storage에 업로드
    uploadBytes(fileRef, file)
      .then((snapshot) => {
        console.log(snapshot);

        // 업로드된 파일의 다운로드 URL을 가져오기
        getDownloadURL(fileRef).then((url) => {
          // Firestore에 파일 정보를 추가
          addDoc(collection(db, "myfiles"), {
            timestamp: serverTimestamp(),
            filename: file.name,
            fileURL: url,
            size: fileSize, // 업로드된 파일 크기
          })
            .then(() => {
              setUploading(false);
              setFile(null);
              setOpen(false);
            })
            .catch((error) => {
              console.error("파일 추가 실패:", error);
              setUploading(false);
            });
        });
      })
      .catch((error) => {
        console.error("파일 업로드 실패:", error);
        setUploading(false);
      });
  };

  return (
    <SidebarContainer>
      <FileUploadModal
        open={open}
        setOpen={setOpen}
        uploading={uploading}
        handleFile={handleFile}
        handleUpload={handleUpload}
        selectedFile={selectedFile}
      />
      <AddFile onClick={() => setOpen(true)} />
      <SidebarTabs />
    </SidebarContainer>
  );
};

export default Sidebar;
