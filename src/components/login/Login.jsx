import {
  Container,
  LoginBox,
  Logo,
  Title,
  Input,
  ForgotEmailLink,
  LoginButton,
  LocalesMenu,
} from "styles/login/login.style";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { SignIn } from "api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, setUserLoginDetails } from "store/UserSlice";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    // 이미 로그인했다면 바로 home으로
    if (userName) {
      navigate("/home");
    }
  }, [userName]);

  const signInUser = (event) => {
    // 페이지 리로딩 방지
    // (제출이 실행되면 페이지 재로딩 -> 가지고 있는 상태 날아감)
    event.preventDefault();
    const email = document.getElementById("inputEmail").value;
    const pw = document.getElementById("inputPw").value;

    if (SignIn(email, pw)) {
      const loginUser = SignIn(email, pw);
      setUser(loginUser);
      navigate("/home");
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.userName,
        email: user.userEmail,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Container>
      <LoginBox>
        <form onSubmit={signInUser}>
          <LocalesMenu>
            <div>
              <button onClick={() => changeLanguage("en")}>English</button>
              <button onClick={() => changeLanguage("ko")}>한국어</button>
            </div>
          </LocalesMenu>
          <Logo src="assets/img/Thinkfree-logo.png" />
          <Title>{t(`login.title`)}</Title>

          <Input
            type="email"
            id="inputEmail"
            placeholder={t(`login.inputEmail`)}
          />
          <Input
            type="password"
            id="inputPw"
            placeholder={t(`login.inputPw`)}
          />
          <ForgotEmailLink href="#">{t(`login.forgotPw`)}</ForgotEmailLink>

          <LoginButton type="submit">
            <span>{t(`login.loginButton`)}</span>
          </LoginButton>
        </form>
      </LoginBox>
    </Container>
  );
};

export default Login;
