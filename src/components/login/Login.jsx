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
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const accessToken = localStorage.getItem("accessToken");

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    if (accessToken) {
      navigate("/home");
    }
  }, [accessToken, navigate]);

  const signInUser = (event) => {
    // 페이지 리로딩 방지
    // (제출이 실행되면 페이지 재로딩 -> 가지고 있는 상태 날아감)
    event.preventDefault();
    const email = document.getElementById("inputEmail").value;
    const pw = document.getElementById("inputPw").value;

    if (SignIn(email, pw)) {
      localStorage.setItem(
        "accessToken",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlck5hbWUiOiLslYThrZjrjIDqsJUiLCJ1c2VyRW1haWwiOiJ0ZXN0MTIzNEB0aGlua2ZyZWUuY29tIiwidXNlclB3IjoiMTIzNCIsImV4cCI6MTcwNzg5NjAwMH0.Fj4wC7BGPVXnBrRZQObcM7NdG9XaAq1xTO5fN9BaZhY"
      );
      navigate("/home");
    }
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
