import { TrashContainer } from "styles/trash/trash.style";
import PageHeader from "components/common/PageHeader";
import { Suspense, useEffect, useState } from "react";
import FilesList from "components/common/FilesList";
import { getTrashFiles } from "api/firebaseApi";
import { useTranslation } from "react-i18next";

const Trash = () => {
  const [files, setFiles] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const unsubscribe = getTrashFiles(setFiles);

    return () => unsubscribe();
  }, []);

  return (
    <TrashContainer>
      <PageHeader pageTitle={t(`sidebar.Trash`)} />
      <Suspense>
        <FilesList
          data={files}
          page="trash"
          imagePath={"./assets/img/trash.svg"}
          text1={t(`Trash.text1`)}
          text2={t(`Trash.text2`)}
        />
      </Suspense>
    </TrashContainer>
  );
};

export default Trash;
