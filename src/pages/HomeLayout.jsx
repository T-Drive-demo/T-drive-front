import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import { useTranslation } from "react-i18next";

const HomeLayout = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Header changeLanguage={changeLanguage} t={t} />
      <HomeContainer>
        <Sidebar t={t} />
        <Outlet t={t} />
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  position: relative;
`;

export default HomeLayout;
