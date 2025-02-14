import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <Sidebar />
        <Outlet />
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
