import FilesList from "components/common/FilesList";
import PageHeader from "components/common/PageHeader";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { getFiles } from "api/firebaseApi";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SearchItems = () => {
  const [files, setFiles] = useState([]);
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  const params = useParams();
  const query = params.query;

  useEffect(() => {
    // 로그인한 user의 파일만 가져오도록 추후 구현예정
    const unsubscribe = getFiles(setFiles);

    return () => unsubscribe();
  }, [query]);

  useEffect(() => {
    const searchArr = files.filter((file) =>
      file.data.filename.toLowerCase().includes(query.toLowerCase())
    );
    setData(searchArr);
  }, [files, query]);

  return (
    <RecentContainer>
      <PageHeader pageTitle={`Searched Files for '${query}'`} />
      <FilesList
        data={data}
        imagePath={"../assets/img/search.svg"}
        text1={t(`search.text1`)}
        text2={t(`search.text2`)}
      />
    </RecentContainer>
  );
};

const RecentContainer = styled.div`
  flex: 1;
  padding: 10px 10px 0px 20px;
`;

export default SearchItems;
