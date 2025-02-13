import { LogoWrapper, Logo } from "styles/header/logowrappercomponent.style";
import LogoImage from "assets/icons/Thinkfree-logo.png";

const LogoWrapperComponent = () => {
  return (
    <LogoWrapper>
      <Logo>
        <img src={LogoImage} alt="" />
        <span>Thinkfree Drive</span>
      </Logo>
    </LogoWrapper>
  );
};

export default LogoWrapperComponent;
