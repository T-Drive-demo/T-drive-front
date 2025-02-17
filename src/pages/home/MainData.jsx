import { handleStarred } from "api/firebaseApi";
import { changeBytes } from "components/common/common";
import {
  ArrowDownwardIcons,
  FileIcons,
  StarBorderIcon,
  StarFilledIcon,
  MoreOptionsIcon,
} from "components/common/SvgIcons";
import { DataListRow, OptionsContainer } from "styles/home/mainData.style";

const MainData = ({ files }) => {
  return (
    <div>
      {files.length > 0 && (
        <DataListRow>
          <div>
            <b>
              <ArrowDownwardIcons /> Name
            </b>
          </div>
          <div className="fileSize">
            <b>File Size</b>
          </div>
          <div className="modified">
            <b>Last Modified</b>
          </div>
          <div>
            <b>Options</b>
          </div>
        </DataListRow>
      )}

      {files.length > 0 &&
        files.map((file) => (
          <DataListRow key={file.id}>
            <div>
              <p className="starr" onClick={() => handleStarred(file.id)}>
                {file.data.starred ? <StarFilledIcon /> : <StarBorderIcon />}
              </p>
              <a href={file.data.fileURL} target="_blank">
                <FileIcons type={file.data.contentType} />
                <span title={file.data.filename}>{file.data.filename}</span>
              </a>
            </div>
            <div className="fileSize">{changeBytes(file.data.size)}</div>
            <div className="modified">
              {new Date(file.data.timestamp?.seconds * 1000).toUTCString()}
            </div>
            <div>
              <OptionsContainer className="optionsContainer" title="Options">
                <MoreOptionsIcon />
              </OptionsContainer>
            </div>
          </DataListRow>
        ))}
    </div>
  );
};

export default MainData;
