import styled from 'styled-components';

export const Container = styled.div`
    padding: 0;
    margin: 15px;
    
    a{
        text-decoration: none;
        color: black;
        &:hover{
            color: #fff;
        }
    }
`
export const ContainerCard = styled.div`
height: 60vh;
width: 20vw;
background: #e8edcc;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
transition: transform 0.3s;

    &:hover{
        transform: translateY(-10px);
        background: #34e3bd;
        cursor: pointer;

    }     

    strong{
        font-size: 1.5rem;    
    }
`;
