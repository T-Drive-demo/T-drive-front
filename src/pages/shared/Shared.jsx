import { SharedContainer } from "styles/shared/shared.style";
import PageHeader from "components/common/PageHeader";
import { Suspense, useState } from "react";
import FilesList from "components/common/FilesList";
import { useTranslation } from "react-i18next";

const Shared = () => {
  // 추후 공유했던 파일을 가져오도록 구현할 예정
  const [sharedFiles, setSharedFiles] = useState("");
  const { t } = useTranslation();

  return (
    <SharedContainer>
      <PageHeader pageTitle={t(`sidebar.Shared`)} />
      <Suspense>
        <FilesList
          data={sharedFiles}
          page="shared"
          imagePath={"./assets/img/shared.svg"}
          text1={t(`Shared.text1`)}
          text2={t(`Shared.text2`)}
        />
      </Suspense>
    </SharedContainer>
  );
};

export default Shared;
