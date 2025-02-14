import { DataContainer } from "styles/home/Data.style";
import PageHeader from "components/common/PageHeader";

import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import RecentDataGrid from "components/home/RecentDataGrid";
import MainData from "components/home/MainData";

const Data = () => {
  const [files, setFiles] = useState([]);
  const [optionsVisible, setOptionsVisible] = useState(null);

  useEffect(() => {
    // 로그인한 user의 파일만 가져오도록 추후 구현예정
    const unsubscribe = onSnapshot(
      collection(db, "myfiles"),
      (snapshot) => {
        setFiles(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      },
      (error) => {
        console.error("Error getting documents: ", error);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleOptionsClick = (id) => {
    setOptionsVisible((prevVisible) => (prevVisible === id ? null : id));
  };

  return (
    <DataContainer>
      <PageHeader pageTitle={"My Drive"} />
      {/** 저장소에 파일이 있다면 */}
      {files.length > 0 && <h4>Recents</h4>}
      <div>
        <RecentDataGrid files={files} />
        <div>
          <MainData
            files={files}
            handleOptionsClick={handleOptionsClick}
            optionsVisible={optionsVisible}
          />
        </div>
      </div>
    </DataContainer>
  );
};

export default Data;
