import {
  ModalPopup,
  ModalHeading,
  ModalBody,
  UploadingPara,
} from "styles/sidebar/fileuploadmodal.style";
import { UploadFileIcons } from "components/common/SvgIcons";
import { Modal } from "@mui/material";

const FileUploadModal = ({
  open,
  setOpen,
  uploading,
  handleFile,
  handleUpload,
  selectedFile,
}) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalPopup>
        <form onSubmit={handleUpload}>
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
                <div className="modal__file">
                  <p>{selectedFile ? selectedFile : "No file chosen"}</p>
                  <label htmlFor="file">
                    <UploadFileIcons /> Choose a file
                  </label>
                  <input id="file" type="file" onChange={handleFile} />
                </div>
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
