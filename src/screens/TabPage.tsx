import { FC, useEffect, useMemo, useState } from "react";
import Tab from "../components/Tab";
import styled from "styled-components";
import { TabType } from "../types/tabTypes";
import CityHighlight from "./CityHighlight";
import TaskHome from "./TaskHome";

const TABS: TabType[] = [
    {
        id: crypto.randomUUID(),
        tabName: "Highlight City",
        tabContent: <CityHighlight />,
    },
    {
        id: crypto.randomUUID(),
        tabName: "JIRA Tasks",
        tabContent: <TaskHome />,
    },
];

const TabPageContainer = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
`;

const TabsContainer = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: inset 0 -2px 0 #dddddd;
`;

const TabContentContainer = styled.div`
    padding: 8px 0;
`;

const TabPage: FC = () => {
    const [activeTab, setActiveTab] = useState(TABS[0].id);

    useEffect(() => setActiveTab(TABS[0].id), []);

    const selectedTabContent = useMemo(
        () => TABS.find((tab) => tab.id === activeTab)?.tabContent,
        [activeTab]
    );

    const handleTabClick = (id: string) => {
        setActiveTab(id);
    };

    return (
        <TabPageContainer>
            <TabsContainer>
                {TABS.map((tab) => (
                    <Tab
                        id={tab.id}
                        key={tab.id}
                        tabName={tab.tabName}
                        isTabActive={activeTab === tab.id}
                        onTabClick={handleTabClick}
                    />
                ))}
            </TabsContainer>
            <TabContentContainer>{selectedTabContent}</TabContentContainer>
        </TabPageContainer>
    );
};

export default TabPage;
