import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .menu-icon {
    cursor: pointer;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  span {
    font-family: "Product Sans", Arial, sans-serif;
    color: #5f6368;
    font-size: 22px;
    padding-left: 8px;
  }
`;

export { LogoWrapper, Logo };
