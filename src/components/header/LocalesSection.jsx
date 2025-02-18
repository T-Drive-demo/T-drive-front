import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { RightSection } from "styles/header/profilesection.style";

const LocalesSection = ({}) => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <RightSection>
      <LocalesMenu>
        <div>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("ko")}>한국어</button>
        </div>
      </LocalesMenu>
    </RightSection>
  );
};

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

export default LocalesSection;
