import styled from "styled-components";

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 35px;
    color: #5f6368;
    padding: 5px;
    cursor: pointer;
    border-radius: 50%;
    transition: all 200ms ease-out;
    :hover {
      background-color: rgba(0, 0, 0, 0.09);
    }
  }

  .searchIcon {
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

const ProfileMenu = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const UserImg = styled.img`
  height: 100%;

  @media (max-width: 830px) {
    height: 40px;
  }
`;

const DropDown = styled.div`
  position: absolute;
  top: 50px;
  right: -18px;
  background: #fff;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  display: none;
`;

export { RightSection, ProfileMenu, UserImg, DropDown };
