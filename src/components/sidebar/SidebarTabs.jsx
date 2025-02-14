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

const SidebarTabs = () => {
  return (
    <SidebarOptions>
      <SidebarOption>
        <MobileScreenShareIcon />
        <span>My Drive</span>
      </SidebarOption>
      <SidebarOption>
        <QueryBuilderIcon />
        <span>Recent</span>
      </SidebarOption>
      <SidebarOption>
        <StarBorderIcon />
        <span>Starred</span>
      </SidebarOption>
      <SidebarOption>
        <PeopleAltIcon />
        <span>Shared with me</span>
      </SidebarOption>
      <SidebarOption>
        <DeleteOutlineIcon />
        <span>Trash</span>
      </SidebarOption>
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
