import { DataContainer } from "styles/home/Data.style";
import { useEffect, useState } from "react";
import { getFiles, handleDelete } from "api/firebaseApi";
import PageHeader from "components/common/PageHeader";
import RecentDataGrid from "pages/home/RecentDataGrid";
import MainData from "pages/home/MainData";
import { useTranslation } from "react-i18next";

const Data = () => {
  const [files, setFiles] = useState([]);
  const [optionsVisible, setOptionsVisible] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    // 로그인한 user의 파일만 가져오도록 추후 구현예정
    const unsubscribe = getFiles(setFiles);

    return () => unsubscribe();
  }, []);

  const handleOptionsClick = (id) => {
    setOptionsVisible((prevVisible) => (prevVisible === id ? null : id));
  };

  return (
    <DataContainer>
      <PageHeader pageTitle={t(`sidebar.MyDrive`)} />
      {/** 저장소에 파일이 있다면 */}
      {files.length > 0 && <h4>{t(`data.Recent`)}</h4>}
      <div>
        <RecentDataGrid files={files} />
        <div>
          <MainData
            files={files}
            handleOptionsClick={handleOptionsClick}
            optionsVisible={optionsVisible}
            handleDelete={handleDelete}
            setOptionsVisible={setOptionsVisible}
          />
        </div>
      </div>
    </DataContainer>
  );
};

export default Data;
