import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrappeInfoUser = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content: space-between;
    height: 50vh;
    margin-left: 8px;
    h1{
        font-size: 2em;
        font-weight: bold;
    }

    h3{
        font-size: 1.5em;
        font-weight: bold;
    }

    h4{
        font-size: 1.33em;
        font-weight: bold;
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 20vw;
    margin: 0.8em;
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 8px;
        text-align: center;
    }
`;

export const WrapperUsername = styled.div`
    display: flex;
    align-items: center;
    h3 {
        margin-right: 8px;
    }
    a{
        font-size: 1.5em;
        color: blue;
        font-weight: bold;
    }
`;
