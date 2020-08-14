import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #e8edcc;
`;

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e8edcc;
    width: 100vw;
    height: 20vh;  

    form{
        display: flex;
        justify-content: center;
        align-items: center;
        .maior{
            width: 350px;
        }
        .menor{
            width: 60px;
        }
    }
`;



export const ResultContainer = styled.div`
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content:center;
        span{
            margin-top: 10px;
            font-size: 2rem;
        }
`

