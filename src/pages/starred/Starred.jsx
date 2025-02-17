import styled from "styled-components";
import { Suspense, useEffect, useState } from "react";
import { StarredContainer } from "styles/starred/starred.style";
import PageHeader from "components/common/PageHeader";
import { getFiles } from "api/firebaseApi";
import FilesList from "components/common/FilesList";

const Starred = () => {
  const [starredFiles, setStarredFiles] = useState([]);
  const [files, setFiles] = useState([]);

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
      <PageHeader pageTitle={"Starred"} />
      <Suspense>
        <FilesList
          data={starredFiles}
          page="starred"
          imagePath={"./assets/img/starred.svg"}
          text1={"No starred files"}
          text2={"Add stars to things that you want to easily find later"}
        />
      </Suspense>
    </StarredContainer>
  );
};

export default Starred;
