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
    
 
    form{
        margin-top:10px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        input{
            margin-bottom: 20px;
        }
        button{
            width: 15%;
        }
    }
`;