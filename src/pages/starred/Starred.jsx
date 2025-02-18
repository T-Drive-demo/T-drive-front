import styled from "styled-components";
import { Suspense, useEffect, useState } from "react";
import { StarredContainer } from "styles/starred/starred.style";
import PageHeader from "components/common/PageHeader";
import { getFiles } from "api/firebaseApi";
import FilesList from "components/common/FilesList";
import { useTranslation } from "react-i18next";

const Starred = () => {
  const [starredFiles, setStarredFiles] = useState([]);
  const [files, setFiles] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const unsubscribe = getFiles(setFiles);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const starred = files.filter((file) => file.data.starred);
    setStarredFiles(starred);
  }, [files]);

  return (
    <StarredContainer>
      <PageHeader pageTitle={t(`sidebar.Starred`)} />
      <Suspense>
        <FilesList
          data={starredFiles}
          page="starred"
          imagePath={"./assets/img/starred.svg"}
          text1={t(`Starred.text1`)}
          text2={t(`Starred.text2`)}
        />
      </Suspense>
    </StarredContainer>
  );
};

export default Starred;
