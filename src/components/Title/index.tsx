import React from 'react';
import { ContainerTitle } from './styles';

interface TitleProps{
    text: string;
}

const Title: React.FC<TitleProps> = ( { text }) => {
  return (
    <ContainerTitle>
        <h1>{text}</h1>
    </ContainerTitle>
  );
}

export default Title;