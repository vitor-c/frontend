import styled from 'styled-components';
import { shade } from 'polished'


export const Container = styled.div`
    position: absolute;
    bottom: 8px;
    right: 16px;

    a{
        color: #d67315;
        &:hover {
        color: ${shade(0.2, '#d67315')};
    }
    }
`;
