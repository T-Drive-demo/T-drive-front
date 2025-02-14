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

export { RightSection, ProfileMenu };
