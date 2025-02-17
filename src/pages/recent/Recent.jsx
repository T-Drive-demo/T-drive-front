import { RecentContainer } from "styles/recent/recent.style";
import PageHeader from "components/common/PageHeader";
import { Suspense, useEffect, useState } from "react";
import { getFiles } from "api/firebaseApi";
import LoaderContainer from "components/loaders/LoaderContainer";
import FilesList from "components/common/FilesList";

const Recent = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const unsubscribe = getFiles(setFiles);

    return () => unsubscribe();
  }, []);

  return (
    <RecentContainer>
      <PageHeader pageTitle={"Recent"} />
      <Suspense fallback={<LoaderContainer />}>
        <FilesList
          data={files?.slice(0, 9)}
          imagePath={"./assets/img/recent.svg"}
          text1={"No recent files"}
          text2={"See all the files you're recently edited or added"}
        />
      </Suspense>
    </RecentContainer>
  );
};

export default Recent;
