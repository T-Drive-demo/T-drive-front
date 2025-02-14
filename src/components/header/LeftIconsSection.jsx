import { NotificationsIcons, SettingsIcons } from "components/common/SvgIcons";
import { LeftSection } from "styles/header/lefticonssection.style";

const LeftIconsSection = () => {
  return (
    <LeftSection>
      <NotificationsIcons />
      <SettingsIcons />
    </LeftSection>
  );
};

export default LeftIconsSection;
