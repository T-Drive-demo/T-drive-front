import { Wrapper, HeaderContainer } from "styles/header/header.style";
import SearchBar from "components/header/SearchBar";
import LogoSection from "components/header/LogoSection";

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <LogoSection />
        <SearchBar />
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
