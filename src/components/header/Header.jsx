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

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <LogoSection />
        <SearchBar />
        <RightContainer>
          <LeftIconsSection />
          <ProfileSection />
          <LocalesSection />
        </RightContainer>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
