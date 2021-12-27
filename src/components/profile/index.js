import React from 'react';
import * as S from './styled';

const Profile = () => {
    return (
        <S.Wrapper>
            <S.WrapperImage
                src="https://avatars.githubusercontent.com/u/32495957?v=4" alt="User"
            />
            <S.WrappeInfoUser>
                <h1>Samuel de Oliveira</h1>
                <S.WrapperUsername>
                    <h3>Username: </h3>
                    <a 
                    href="https://github.com/0L1V31R" 
                    target="_blank" 
                    rel="noreferrer">0L1V31R</a>
                </S.WrapperUsername>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>10</span>
                    </div>
                    <div>
                        <h4>Starred</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>50</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrappeInfoUser>
        </S.Wrapper>
    );
}

export default Profile;