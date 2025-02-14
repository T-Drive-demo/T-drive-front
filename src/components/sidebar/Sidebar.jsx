import { SidebarContainer } from "styles/sidebar/sidebar.style";

import AddFile from "components/sidebar/AddFile";
import FileUploadModal from "components/sidebar/FileUploadModal";
import SidebarTabs from "components/sidebar/SidebarTabs";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

  return (
    <SidebarContainer>
      <FileUploadModal open={open} setOpen={setOpen} uploading={uploading} />
      <AddFile onClick={() => setOpen(true)} />
      <SidebarTabs />
    </SidebarContainer>
  );
};

export default Sidebar;
