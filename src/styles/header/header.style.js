import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
  position: relative;
`;

const HeaderContainer = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 999;
  background-color: #ffffff;
  padding: 2px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 2px #cecece;
`;

export { Wrapper, HeaderContainer };
