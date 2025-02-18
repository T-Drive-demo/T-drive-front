import {
  DataListRow,
  OptionsContainer,
  OptionsMenu,
  ShareButton,
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
}) => {
  const [showShareIcons, setShowShareIcons] = useState(false);
  const { t } = useTranslation();

  const handleShareClick = () => {
    setShowShareIcons(!showShareIcons);
  };

  return (
    <div>
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
                      <FacebookShareButton
                        url={file.data.fileURL}
                        hashtag={file.data.filename}
                      >
                        <FacebookIcon size={30} round={true} />
                      </FacebookShareButton>

                      <LinkedinShareButton
                        url={file.data.fileURL}
                        title={`This is ${file.data.filename} file link`}
                      >
                        <LinkedinIcon size={30} round={true} />
                      </LinkedinShareButton>
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
    </div>
  );
};

export default MainData;
