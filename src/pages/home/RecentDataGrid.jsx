import { DataGrid, DataFile } from "styles/home/recentDataGrid.style";
import { FileIcons } from "components/common/SvgIcons";

const RecentDataGrid = ({ files }) => {
  // 추후 썸네일 활용시 사용할 컴포넌트라 현재는 화면에 x
  return (
    <DataGrid>
      {files.slice(0, 4).map((file) => (
        <DataFile key={file.id} href={file.data.fileURL} target="_blank">
          <FileIcons type={file.data.contentType} />
          <p title={file.data.filename}>{file.data.filename}</p>
        </DataFile>
      ))}
    </DataGrid>
  );
};

export default RecentDataGrid;
