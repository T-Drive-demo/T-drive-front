import styled from "styled-components";

const SidebarOptions = styled.div`
  margin-top: 10px;

  a {
    text-decoration: none;
  }

  .tab-active {
    background: #cacaca;
  }
`;

const SidebarOption = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  border-radius: 0px 20px 20px 0px;
  &:hover {
    background: #eeeeee;
    cursor: pointer;
  }
  svg.MuiSvgIcon-root {
    color: rgb(78, 78, 78);
  }
  span {
    margin-left: 15px;
    font-size: 13px;
    font-weight: 500;
    color: rgb(78, 78, 78);

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const StorageBar = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  flex-direction: column; /* 세로 정렬 */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export { SidebarOptions, SidebarOption, StorageBar };
