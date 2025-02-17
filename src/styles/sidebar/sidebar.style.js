import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh; /* 화면 전체 높이 */
  padding-top: 10px;
  border-right: 1px solid lightgray;
  transition: all 0.1s linear;
  position: relative;
  left: 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65px;
  }
`;

export { SidebarContainer };
