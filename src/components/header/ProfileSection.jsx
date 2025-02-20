import styled from "styled-components";
import {
  RightSection,
  ProfileMenu,
  UserImg,
  DropDown,
} from "styles/header/profilesection.style";

const ProfileSection = ({ userName, userPhoto, handleAuth }) => {
  return (
    <RightSection>
      <ProfileMenu>
        <SignOut>
          <UserImg src={userPhoto} />
          <DropDown>
            <span onClick={handleAuth}>Sign out</span>
          </DropDown>
        </SignOut>
      </ProfileMenu>
      <span>{userName}</span>
    </RightSection>
  );
};

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${DropDown} {
    &::before {
      content: "";
      width: 15px;
      height: 15px;
      position: absolute;
      left: 50%;
      top: -5px;
      background-color: #fff;
      transform: rotate(45deg);
    }
  }

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      display: flex;
      transition-duration: 1s;
    }
  }
`;

export default ProfileSection;
