// bytes 변환 (1024 : 1KB, 1048576 : 1MB)
export const changeBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

const options = { timeZone: "Asia/Seoul" };

export const convertDates = (seconds) => {
  const date = new Date(seconds * 1000).toLocaleString("en-US", options);
  return date;
};
