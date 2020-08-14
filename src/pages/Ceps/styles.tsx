import { FormHTMLAttributes }  from 'react';
import styled  from 'styled-components';

interface FormProps  extends FormHTMLAttributes<HTMLFormElement>{
  }

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #e8edcc;
`;

export const Main = styled.main`
    display: flex;
    justify-content: center;
    background: #e8edcc;
    width: 100vw;
    height: 20vh;  
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  justify-content: center;
  
`;

export const EnderecoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    
    span{
        margin:5px;
        font-size: 1.5rem;
    }
`