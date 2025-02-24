import { FC } from "react";
import { FolderType } from "../types/folderTypes";
import styled from "styled-components";

interface FolderTreeProps {
    folders: FolderType[];
    openFolders: { [key: string]: boolean };
    onToggleFolderClick: (folderId: string) => void;
}

const FolderTreeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const FolderContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
`;

const FilesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 12px;
    row-gap: 4px;
`;

const FileNameContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    align-items: center;
    padding-bottom: 4px;
    border-bottom: 1px solid #aaa;
`;

const FolderTree: FC<FolderTreeProps> = ({
    folders,
    openFolders,
    onToggleFolderClick,
}) => {
    return (
        <FolderTreeContainer>
            {folders.map((folder) => {
                const isFolderOpen = openFolders[folder?.id];
                return (
                    <FolderContainer key={folder?.id}>
                        <FileNameContainer
                            onClick={() => onToggleFolderClick(folder?.id)}
                        >
                            <p>{folder?.folderName}/</p>
                            <span
                                style={{
                                    ...(!isFolderOpen && {
                                        transform: "rotate(180deg)",
                                    }),
                                }}
                            >
                                &#9650;
                            </span>
                        </FileNameContainer>
                        {isFolderOpen && (
                            <FilesContainer>
                                {!!folder?.folders?.length && (
                                    <FolderTree
                                        folders={folder?.folders}
                                        openFolders={openFolders}
                                        onToggleFolderClick={
                                            onToggleFolderClick
                                        }
                                    />
                                )}
                                {folder?.files?.map((file) => (
                                    <FileNameContainer key={file?.id}>
                                        - {file?.fileName}
                                    </FileNameContainer>
                                ))}
                            </FilesContainer>
                        )}
                    </FolderContainer>
                );
            })}
        </FolderTreeContainer>
    );
};

export default FolderTree;
