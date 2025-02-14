import { SidebarContainer } from "styles/sidebar/sidebar.style";

import AddFile from "components/sidebar/AddFile";
import FileUploadModal from "components/sidebar/FileUploadModal";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

  return (
    <SidebarContainer>
      <FileUploadModal open={open} setOpen={setOpen} uploading={uploading} />
      <AddFile onClick={() => setOpen(true)} />
    </SidebarContainer>
  );
};

export default Sidebar;
