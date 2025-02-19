import {
  Wrapper,
  HeaderContainer,
  RightContainer,
} from "styles/header/header.style";

import SearchBar from "components/header/SearchBar";
import LogoSection from "components/header/LogoSection";
import ProfileSection from "components/header/ProfileSection";
import LeftIconsSection from "components/header/LeftIconsSection";
import LocalesSection from "components/header/LocalesSection";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <HeaderContainer>
      <Wrapper>
        <LogoSection />
        {!accessToken ? (
          <NavLink to={"/"} />
        ) : (
          <>
            <SearchBar />
            <RightContainer>
              <LeftIconsSection />
              <ProfileSection />
              <LocalesSection />
            </RightContainer>
          </>
        )}
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
