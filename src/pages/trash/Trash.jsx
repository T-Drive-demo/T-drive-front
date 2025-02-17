import { TrashContainer } from "styles/trash/trash.style";
import PageHeader from "components/common/PageHeader";
import { Suspense, useEffect, useState } from "react";
import FilesList from "components/common/FilesList";
import { getTrashFiles } from "api/firebaseApi";

const Trash = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const unsubscribe = getTrashFiles(setFiles);

    return () => unsubscribe();
  }, []);

  return (
    <TrashContainer>
      <PageHeader pageTitle={"Trash"} />
      <Suspense>
        <FilesList
          data={files}
          page="trash"
          imagePath={"./assets/img/trash.svg"}
          text1={"Nothing in trash"}
          text2={
            "Move items you don't need to trash. Items in trash will be deleted forever after you delete them from here"
          }
        />
      </Suspense>
    </TrashContainer>
  );
};

export default Trash;
