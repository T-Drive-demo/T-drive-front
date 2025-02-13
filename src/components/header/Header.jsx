import { Wrapper, HeaderContainer } from "styles/header/header.style";
import SearchBar from "components/header/SearchBar";
import LogoWrapperComponent from "components/header/LogoWrapperComponent";

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <LogoWrapperComponent />
        <SearchBar />
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
