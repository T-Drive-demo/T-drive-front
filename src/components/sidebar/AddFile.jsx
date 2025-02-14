import { SidebarBtn } from "styles/sidebar/addfile.style";
import { AddIcons } from "components/common/SvgIcons";

const AddFile = ({ onClick }) => {
  return (
    <SidebarBtn>
      <button title="New File" onClick={onClick}>
        <AddIcons />
        <span>New</span>
      </button>
    </SidebarBtn>
  );
};

export default AddFile;
