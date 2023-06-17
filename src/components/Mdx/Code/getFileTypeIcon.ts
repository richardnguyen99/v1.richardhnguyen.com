import DefaultFile from "@components/Icons/DefaultFile";
import FileTypeCpp from "@components/Icons/FileTypeCpp";

export const FileType = {
  cpp: FileTypeCpp,
};

const getFileType = (ext: string) => {
  if (ext in FileType) return FileType[ext];

  return DefaultFile;
};

export default getFileType;
