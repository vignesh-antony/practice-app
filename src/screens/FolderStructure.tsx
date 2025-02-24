import { FC, useState } from "react";
import styled from "styled-components";
import FolderTree from "../components/FolderTree";
import { FolderType } from "../types/folderTypes";

const FOLDER_TREE: FolderType[] = [
    {
        id: crypto.randomUUID(),
        folderName: "src",
        files: [
            {
                id: crypto.randomUUID(),
                fileName: "index.tsx",
            },
        ],
        folders: [
            {
                id: crypto.randomUUID(),
                folderName: "components",
                files: [
                    {
                        id: crypto.randomUUID(),
                        fileName: "BucketContainer.tsx",
                    },
                ],
            },
            {
                id: crypto.randomUUID(),
                folderName: "styles",
                files: [
                    {
                        id: crypto.randomUUID(),
                        fileName: "BucketStyles.css",
                    },
                    {
                        id: crypto.randomUUID(),
                        fileName: "BucketContainerStyles.scss",
                    },
                ],
            },
        ],
    },
];

const StyledFolderStructureContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
`;

const FolderTreeWrapper = styled.div`
    width: 500px;
`;

const FolderStructure: FC = () => {
    const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>(
        {}
    );

    const handleToggleFolderClick = (id: string) => {
        setOpenFolders((prev) => ({ ...prev, [id]: !prev?.[id] }));
    };

    return (
        <StyledFolderStructureContainer>
            <FolderTreeWrapper>
                <FolderTree
                    folders={FOLDER_TREE}
                    openFolders={openFolders}
                    onToggleFolderClick={handleToggleFolderClick}
                />
            </FolderTreeWrapper>
        </StyledFolderStructureContainer>
    );
};

export default FolderStructure;
