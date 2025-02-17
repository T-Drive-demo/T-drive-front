import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import MobileScreenShareOutlinedIcon from "@mui/icons-material/MobileScreenShareOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ListIcon from "@mui/icons-material/List";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
/** FileIcons */
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import AudioFileOutlinedIcon from "@mui/icons-material/AudioFileOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import StarIcon from "@mui/icons-material/Star";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

/** Header */
export const SearchIcons = () => <SearchIcon />;
export const NotificationsIcons = () => <NotificationsIcon />;
export const AccountCircleIcons = () => <AccountCircleIcon />;
export const SettingsIcons = () => <SettingsIcon />;

/** Sidebar */
export const AddIcons = () => <AddIcon />;
export const MobileScreenShareIcon = () => <MobileScreenShareOutlinedIcon />;
export const PeopleAltIcon = () => <PeopleAltOutlinedIcon />;
export const QueryBuilderIcon = () => <QueryBuilderOutlinedIcon />;
export const StarBorderIcon = () => <StarBorderOutlinedIcon />;
export const DeleteOutlineIcon = () => <DeleteOutlineOutlinedIcon />;
export const CloudQueueIcons = () => <CloudQueueIcon />;
export const UploadFileIcons = () => <UploadFileIcon />;

/** PageHeader */
export const ListIcons = () => <ListIcon />;
export const InfoOutlinedIcons = () => <InfoOutlinedIcon />;
export const AppsRoundedIcons = () => <AppsRoundedIcon />;

/** FileIcons */
export const FileIcons = ({ type }) => {
  return type.includes("pdf") ? (
    <PictureAsPdfIcon />
  ) : type.includes("image") ? (
    <PermMediaOutlinedIcon />
  ) : type.includes("video") ? (
    <VideoLibraryOutlinedIcon />
  ) : type.includes("audio") ? (
    <AudioFileOutlinedIcon />
  ) : (
    <DescriptionOutlinedIcon />
  );
};

/** Data */
export const InsertDriveFileIcons = () => <InsertDriveFileIcon />;
export const ArrowDownwardIcons = () => <ArrowDownwardIcon />;
export const StarFilledIcon = () => <StarIcon />;
export const MoreOptionsIcon = () => <MoreHorizIcon />;

/** FilesList */
export const FileIcon = () => <DescriptionOutlinedIcon />;
export const DeleteIcon = () => <DeleteRoundedIcon />;

export const DownloadIcon = () => <FileDownloadOutlinedIcon />;
export const CopyIcon = () => <ContentCopyRoundedIcon />;

export const ShareIcon = () => <ReplyOutlinedIcon />;
