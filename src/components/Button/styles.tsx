import styled from 'styled-components';
import { shade } from 'polished'

export const ButtonStyled = styled.button`
    width: 100px;
    height: 50px;
    background: #d67315;
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#d67315')};
    }
`;
