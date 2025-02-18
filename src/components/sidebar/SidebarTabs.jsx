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
import { useEffect, useState } from "react";
import { getFiles } from "api/firebaseApi";
import { changeBytes } from "components/common/common";

const SidebarTabs = ({ t }) => {
  const [files, setFiles] = useState([]);
  const [storage, setStorage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const unsubscribe = getFiles(setFiles);

    return () => unsubscribe;
  }, []);

  useEffect(() => {
    const sizes = files?.reduce((sum, file) => sum + file.data.size, 0);
    setSize(sizes);
    const storageSize = changeBytes(sizes);
    setStorage(storageSize);
  }, [files]);

  return (
    <SidebarOptions>
      <NavLink to={"/home"}>
        {({ isActive }) => (
          <SidebarOption className={isActive ? "tab-active" : ""}>
            <MobileScreenShareIcon />
            <span>{t(`sidebar.MyDrive`)}</span>
          </SidebarOption>
        )}
      </NavLink>
      <NavLink to={"/recent"}>
        {({ isActive }) => (
          <SidebarOption className={isActive ? "tab-active" : ""}>
            <QueryBuilderIcon />
            <span>{t(`sidebar.Recent`)}</span>
          </SidebarOption>
        )}
      </NavLink>
      <NavLink to={"/starred"}>
        {({ isActive }) => (
          <SidebarOption className={isActive ? "tab-active" : ""}>
            <StarBorderIcon />
            <span>{t(`sidebar.Starred`)}</span>
          </SidebarOption>
        )}
      </NavLink>
      <NavLink to={"/shared"}>
        {({ isActive }) => (
          <SidebarOption className={isActive ? "tab-active" : ""}>
            <PeopleAltIcon />
            <span>{t(`sidebar.Shared`)}</span>
          </SidebarOption>
        )}
      </NavLink>
      <NavLink to={"/trash"}>
        {({ isActive }) => (
          <SidebarOption className={isActive ? "tab-active" : ""}>
            <DeleteOutlineIcon />
            <span>{t(`sidebar.Trash`)}</span>
          </SidebarOption>
        )}
      </NavLink>
      <hr />
      <SidebarOption>
        <CloudQueueIcons />
        <span>{t(`sidebar.Storage`)}</span>
      </SidebarOption>
      <StorageBar>
        <progress size="tiny" value={size} max={15000000000} />
        <span>{storage} of 15 GB used</span>
      </StorageBar>
    </SidebarOptions>
  );
};

export default SidebarTabs;
