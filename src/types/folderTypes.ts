export interface FileType {
    id: string;
    fileName: string;
}

export interface FolderType {
    id: string;
    folderName: string;
    folders?: FolderType[];
    files?: FileType[];
}
