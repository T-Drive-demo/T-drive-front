import { DataContainer } from "styles/home/Data.style";
import { useEffect, useState } from "react";
import { getFiles, handleDelete } from "api/firebaseApi";
import PageHeader from "components/common/PageHeader";
import MainData from "pages/home/MainData";
import { useTranslation } from "react-i18next";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { toast } from "react-toastify";

const Data = () => {
  const [files, setFiles] = useState([]);
  const [optionsVisible, setOptionsVisible] = useState(null);
  const { t } = useTranslation();
  const [uploadFiles, setUploadFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // 로그인한 user의 파일만 가져오도록 추후 구현예정
    const unsubscribe = getFiles(setFiles);

    return () => unsubscribe();
  }, []);

  const handleOptionsClick = (id) => {
    setOptionsVisible((prevVisible) => (prevVisible === id ? null : id));
  };

  const onChangeFile = (file) => {
    if (file) {
      setUploadFiles(file);
      setSelectedFile(file.name);
      handleUpload(file);
    }
  };

  const handleUpload = (file) => {
    // e.preventDefault();
    console.log("handleUpload 실행");
    console.log("업로드 시도된 파일명 : " + file.name);
    setSelectedFile("");

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
        },
        (error) => {
          console.error("Error uploading file:", error);
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
          toast.success(file.name + " File Uploaded Successfully");
        }
      );
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Error uploading file. Please try again.");
    }
  };

  return (
    <DataContainer>
      <PageHeader pageTitle={t(`sidebar.MyDrive`)} />
      <div>
        <MainData
          files={files}
          handleOptionsClick={handleOptionsClick}
          optionsVisible={optionsVisible}
          handleDelete={handleDelete}
          setOptionsVisible={setOptionsVisible}
          onChangeFile={onChangeFile}
          selectedFile={selectedFile}
          handleUpload={handleUpload}
        ></MainData>
      </div>
    </DataContainer>
  );
};

export default Data;
