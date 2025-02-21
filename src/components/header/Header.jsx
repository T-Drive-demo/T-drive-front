import {
  Wrapper,
  HeaderContainer,
  RightContainer,
} from "styles/header/header.style";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
} from "store/UserSlice";
import SearchBar from "components/header/SearchBar";
import LogoSection from "components/header/LogoSection";
import ProfileSection from "components/header/ProfileSection";
import LeftIconsSection from "components/header/LeftIconsSection";
import LocalesSection from "components/header/LocalesSection";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignOut } from "api/userApi";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    if (!userName) {
      navigate("/");
    }
  }, [userName]);

  const handleAuth = () => {
    if (userName) {
      try {
        // 추후 로그아웃 api 호출로 변경할 예정
        SignOut();
        dispatch(setSignOutState());
        alert("로그아웃 성공");
        navigate("/");
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <HeaderContainer>
      <Wrapper>
        <LogoSection />
        {!userName ? (
          <NavLink to={"/"} />
        ) : (
          <>
            <SearchBar />
            <RightContainer>
              <LeftIconsSection />
              <ProfileSection
                userName={userName}
                userPhoto={userPhoto}
                handleAuth={handleAuth}
              />
              <LocalesSection />
            </RightContainer>
          </>
        )}
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
