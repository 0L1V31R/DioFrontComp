import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 1.3em;
    margin-top: 16px;
    width: 100%;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display:flex;
    margin: 0;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    margin: 8px;

    &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    padding: 16px;
    border: 1px solid "#ccc";
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    display: none;
    margin-top: -5px;

    &.is-selected {
        display: block;
    }
`;

WrapperTabPanel.tabsRole = "TabPanel";