import { LogoWrapper, Logo } from "styles/header/logowrappercomponent.style";

const LogoSection = () => {
  return (
    <LogoWrapper>
      <Logo>
        <img src="./assets/img/Thinkfree-logo.png" alt="" />
        <span>Thinkfree Drive</span>
      </Logo>
    </LogoWrapper>
  );
};

export default LogoSection;
