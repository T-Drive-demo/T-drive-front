import { DataGrid, DataFile } from "styles/home/recentDataGrid.style";
import { FileIcons } from "components/common/SvgIcons";

const RecentDataGrid = ({ files }) => {
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
