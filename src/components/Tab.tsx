import { FC } from "react";
import styled from "styled-components";

const StyledTab = styled.div<{ $active?: boolean }>`
    display: flex;
    padding: 8px 16px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-bottom: 2px solid #dddddd;
    ${(props) =>
        props?.$active &&
        `
        color: blue;
        border-bottom-color: blue;
    `}
    transition: all 0.25s ease-in-out;
`;

interface TabProps {
    id: string;
    tabName: string;
    isTabActive: boolean;
    onTabClick: (id: string) => void;
}

const Tab: FC<TabProps> = ({ id, tabName, isTabActive, onTabClick }) => {
    return (
        <StyledTab $active={isTabActive} onClick={() => onTabClick(id)}>
            <p>{tabName}</p>
        </StyledTab>
    );
};

export default Tab;
