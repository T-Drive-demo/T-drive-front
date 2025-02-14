import { RightSection, ProfileMenu } from "styles/header/profilesection.style";
import { AccountCircleIcons } from "components/common/SvgIcons";

const ProfileSection = () => {
  return (
    <RightSection>
      <ProfileMenu>
        <AccountCircleIcons />
      </ProfileMenu>
    </RightSection>
  );
};

export default ProfileSection;
