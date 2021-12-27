import React from 'react';
import * as S from "./styled";
import RepositoryItem from "../repository-item";

const Repositories = () => {
    return (
        <S.WrapperTabs 
        selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem 
                    name = "api-person-so"
                    linktoRepo = "https://github.com/0L1V31R/api-person-so"
                    fullName = "0L1V31R/api-person-so"
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name= "cloneflix"
                    linkToRepo= "https://github.com/0L1V31R/cloneflix"
                    fullName= "0L1V31R/cloneflix"
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    );
}

export default Repositories;