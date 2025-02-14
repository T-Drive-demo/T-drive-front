import {
  SidebarOptions,
  SidebarOption,
  StorageBar,
} from "styles/sidebar/sidebarTabs.style";
import {
  MobileScreenShareIcon,
  PeopleAltIcon,
  QueryBuilderIcon,
  StarBorderIcon,
  DeleteOutlineIcon,
  CloudQueueIcons,
} from "components/common/SvgIcons";
import { NavLink } from "react-router-dom";

const SidebarTabs = () => {
  return (
    <SidebarOptions>
      <NavLink to={"/home"}>
        {({ isActive }) => (
          <SidebarOption>
            <MobileScreenShareIcon />
            <span>My Drive</span>
          </SidebarOption>
        )}
      </NavLink>
      <NavLink to={"/recent"}>
        {({ isActive }) => (
          <SidebarOption>
            <QueryBuilderIcon />
            <span>Recent</span>
          </SidebarOption>
        )}
      </NavLink>
      <NavLink to={"/starred"}>
        {({ isActive }) => (
          <SidebarOption>
            <StarBorderIcon />
            <span>Starred</span>
          </SidebarOption>
        )}
      </NavLink>
      <NavLink to={"/shared"}>
        {({ isActive }) => (
          <SidebarOption>
            <PeopleAltIcon />
            <span>Shared with me</span>
          </SidebarOption>
        )}
      </NavLink>
      <NavLink to={"/trash"}>
        {({ isActive }) => (
          <SidebarOption>
            <DeleteOutlineIcon />
            <span>Trash</span>
          </SidebarOption>
        )}
      </NavLink>
      <hr />
      <SidebarOption>
        <CloudQueueIcons />
        <span>Storage</span>
      </SidebarOption>
      <StorageBar>
        <progress size="tuny" value="50" max="100" />
        <span>0GB of 15 GB used</span>
      </StorageBar>
    </SidebarOptions>
  );
};

export default SidebarTabs;
