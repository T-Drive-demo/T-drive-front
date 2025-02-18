import { RecentContainer } from "styles/recent/recent.style";
import PageHeader from "components/common/PageHeader";
import { Suspense, useEffect, useState } from "react";
import { getFiles } from "api/firebaseApi";
import LoaderContainer from "components/loaders/LoaderContainer";
import FilesList from "components/common/FilesList";
import { useTranslation } from "react-i18next";

const Recent = () => {
  const [files, setFiles] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const unsubscribe = getFiles(setFiles);

    return () => unsubscribe();
  }, []);

  return (
    <RecentContainer>
      <PageHeader pageTitle={t(`sidebar.Recent`)} />
      <Suspense fallback={<LoaderContainer />}>
        <FilesList
          data={files?.slice(0, 9)}
          imagePath={"./assets/img/recent.svg"}
          text1={t(`Recent.text1`)}
          text2={t(`Recent.text2`)}
        />
      </Suspense>
    </RecentContainer>
  );
};

export default Recent;
