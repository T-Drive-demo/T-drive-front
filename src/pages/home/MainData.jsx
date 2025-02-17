import { changeBytes } from "components/common/common";
import {
  ArrowDownwardIcons,
  FileIcons,
  StarBorderIcon,
  StarFilledIcon,
  MoreOptionsIcon,
} from "components/common/SvgIcons";
import { useState } from "react";
import { DataListRow, OptionsContainer } from "styles/home/mainData.style";

const MainData = ({ files }) => {
  // 현재는 버튼 클릭에 따라 전체 아이콘 변화만 있음. 추후 즐겨찾기 구현예정
  const [starredFile, setStarredFile] = useState(false);

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
              <p className="starr" onClick={() => setStarredFile(!starredFile)}>
                {starredFile ? <StarFilledIcon /> : <StarBorderIcon />}
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
