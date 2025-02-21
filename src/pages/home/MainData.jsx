import {
  MainDataContainer,
  DataListRow,
  OptionsContainer,
  OptionsMenu,
  ShareButton,
  InputNone,
} from "styles/home/mainData.style";
import { handleStarred } from "api/firebaseApi";
import { changeBytes, convertDates } from "components/common/common";
import LottieImage from "components/common/LottieImage";
import {
  ArrowDownwardIcons,
  FileIcons,
  StarBorderIcon,
  StarFilledIcon,
  MoreOptionsIcon,
  DownloadIcon,
  CopyIcon,
  ShareIcon,
  DeleteIcon,
} from "components/common/SvgIcons";
import {
  FacebookShareButton,
  LinkedinShareButton,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";
import { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const MainData = ({
  files,
  handleOptionsClick,
  optionsVisible,
  handleDelete,
  setOptionsVisible,
  onChangeFile,
}) => {
  const [showShareIcons, setShowShareIcons] = useState(false);
  const { t } = useTranslation();

  const handleShareClick = () => {
    setShowShareIcons(!showShareIcons);
  };

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

    // 드래그가 완전히 벗어났는지 확인
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDragOver(false);
    }
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
    console.log("handleChange : " + file.name);
    onChangeFile(file);

    // input 요소의 값 초기화
    e.target.value = "";
  };

  return (
    <MainDataContainer
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      $dragOver={dragOver}
    >
      <InputNone>
        <input id="file" type="file" onChange={handleChange} />
      </InputNone>
      {files.length > 0 && (
        <DataListRow>
          <div>
            <b>
              <ArrowDownwardIcons /> {t(`data.Name`)}
            </b>
          </div>
          <div className="fileSize">
            <b>{t(`data.File Size`)}</b>
          </div>
          <div className="modified">
            <b>{t(`data.Last Modified`)}</b>
          </div>
          <div>
            <b>{t(`data.Options`)}</b>
          </div>
        </DataListRow>
      )}

      {files.length > 0 ? (
        files.map((file) => (
          <DataListRow key={file.id}>
            <div>
              <p className="starr" onClick={() => handleStarred(file.id)}>
                {file.data.starred ? <StarFilledIcon /> : <StarBorderIcon />}
              </p>
              <a
                href={file.data.fileURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileIcons type={file.data.contentType} />
                <span title={file.data.filename}>{file.data.filename}</span>
              </a>
            </div>
            <div className="fileSize">{changeBytes(file.data.size)}</div>
            <div className="modified">
              {convertDates(file.data.timestamp?.seconds)}
            </div>
            <div>
              <OptionsContainer
                className="optionsContainer"
                title="Options"
                onClick={() => handleOptionsClick(file.id)}
              >
                <MoreOptionsIcon />
              </OptionsContainer>
              {optionsVisible === file.id && (
                <OptionsMenu>
                  <span>
                    <a
                      href={file.data.fileURL}
                      download={file.data.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DownloadIcon />
                      {" Download"}
                    </a>
                  </span>
                  <span
                    onClick={() => {
                      navigator.clipboard.writeText(file.data.fileURL);
                      toast.success("Link Copied");
                    }}
                  >
                    <CopyIcon />
                    {" Copy Link"}
                  </span>
                  <ShareButton
                    className="shareButton"
                    onClick={handleShareClick}
                  >
                    <ShareIcon />
                    {" Share"}
                    <span className={showShareIcons ? "show" : ""}>
                      {/** 추후 공유, 링크 복사 추가 예정 */}
                    </span>
                  </ShareButton>
                  <span
                    onClick={() =>
                      handleDelete(file.id, file.data, setOptionsVisible)
                    }
                  >
                    <button>
                      <DeleteIcon />
                      {" Delete"}
                    </button>
                  </span>
                  <span className="uploaded">
                    {convertDates(file.data.timestamp?.seconds)}
                  </span>
                  <span className="fileSize">
                    {"Size: "}
                    {changeBytes(file.data.size)}
                  </span>
                </OptionsMenu>
              )}
            </div>
          </DataListRow>
        ))
      ) : (
        <LottieImage
          imagePath={"/assets/img/homePage.svg"}
          text1={t(`MyDrive.text1`)}
          text2={t(`MyDrive.text2`)}
        />
      )}
    </MainDataContainer>
  );
};

export default MainData;
