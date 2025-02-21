import {
  ModalPopup,
  ModalHeading,
  ModalBody,
  UploadingPara,
  ModalProgress,
  ProgressBar,
  ProgressText,
} from "styles/sidebar/fileuploadmodal.style";
import { UploadFileIcons } from "components/common/SvgIcons";
import { Modal } from "@mui/material";
import { useState } from "react";

const FileUploadModal = ({
  open,
  setOpen,
  uploading,
  handleUpload,
  selectedFile,
  progress,
  onChangeFile,
}) => {
  // 파일 드래그 중인 상태 인지 표시하기 위한 변수 - UI 변경을 위해
  const [dragOver, setDragOver] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };

  // 드래그 중인 요소가 목표 지점을 벗어날때
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  };

  // 드래그 중인 요소가 목표 지점에 위치할때
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // 드래그 중인 요소가 목표 지점에 드롭될 때
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);

    // 드래그되는 데이터 정보와 메서드를 제공하는 dataTransfer 객체 사용
    if (e.dataTransfer) {
      const file = e.dataTransfer.files[0];
      onChangeFile(file);
    }
  };

  // Drag & Drop이 아닌 클릭 이벤트로 업로드되는 기능도 추가
  const handleChange = (e) => {
    const file = e.target.files ? e.target.files[0] : null;
    onChangeFile(file);

    // input 요소의 값 초기화
    e.target.value = "";
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalPopup>
        <form onSubmit={handleUpload}>
          <ModalHeading>
            <h3>
              {uploading ? "Uploading..." : "Select file you want to upload"}
            </h3>
          </ModalHeading>
          <ModalBody $dragOver={dragOver}>
            {uploading ? (
              <>
                <UploadingPara>Uploading...</UploadingPara>
                <ModalProgress>
                  <ProgressBar $progress={progress} />
                  <ProgressText>{progress}%</ProgressText>
                </ModalProgress>
              </>
            ) : (
              <>
                <div
                  className="modal__file"
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <p>{selectedFile ? selectedFile : "No file chosen"}</p>
                  <label htmlFor="file">
                    <UploadFileIcons /> Choose a file
                  </label>
                  <input id="file" type="file" onChange={handleChange} />
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
