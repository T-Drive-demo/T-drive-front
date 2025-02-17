import { SharedContainer } from "styles/shared/shared.style";
import PageHeader from "components/common/PageHeader";
import { Suspense, useState } from "react";
import FilesList from "components/common/FilesList";

const Shared = () => {
  // 추후 공유했던 파일을 가져오도록 구현할 예정
  const [sharedFiles, setSharedFiles] = useState("");

  return (
    <SharedContainer>
      <PageHeader pageTitle={"Shared with me"} />
      <Suspense>
        <FilesList
          data={sharedFiles}
          page="shared"
          imagePath={"./assets/img/shared.svg"}
          text1={"No shared files"}
          text2={"Find and manage all the files shared with you in one place."}
        />
      </Suspense>
    </SharedContainer>
  );
};

export default Shared;
