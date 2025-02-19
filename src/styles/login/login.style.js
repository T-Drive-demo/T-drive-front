import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  padding-bottom: 00px;
`;

const LoginBox = styled.div`
  width: 360px;
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Logo = styled.img`
  width: 50px;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #dadce0;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box; /* input과 크기 맞춤춤 */
  &:focus {
    border-color: #4285f4;
    box-shadow: 0 0 4px rgba(66, 133, 244, 0.5);
  }
  margin-top: 20px;
`;

const ForgotEmailLink = styled.a`
  display: block;
  margin: 12px 0;
  font-size: 14px;
  color: #1a73e8;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #dadce0;
  border-radius: 6px;
  background: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box; /* input과 크기 맞춤춤 */
  &:hover {
    background: #f1f3f4;
  }
  span {
    margin-left: 10px;
  }
`;

const LocalesMenu = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
`;

export {
  Container,
  LoginBox,
  Logo,
  Title,
  Input,
  ForgotEmailLink,
  LoginButton,
  LocalesMenu,
};
