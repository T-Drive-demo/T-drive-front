import {
  ModalPopup,
  ModalHeading,
  ModalBody,
  UploadingPara,
} from "styles/sidebar/fileuploadmodal.style";
import { Modal } from "@mui/material";

const FileUploadModal = ({ open, setOpen, uploading }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalPopup>
        <form>
          <ModalHeading>
            <h3>
              {uploading ? "Uploading..." : "Select file you want to upload"}
            </h3>
          </ModalHeading>
          <ModalBody>
            {uploading ? (
              <UploadingPara>Uploading...</UploadingPara>
            ) : (
              <>
                <input type="file" className="modal__file" />
                <input type="submit" className="modal__submit" />
              </>
            )}
          </ModalBody>
        </form>
      </ModalPopup>
    </Modal>
  );
};

export default FileUploadModal;
