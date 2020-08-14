import React from 'react';
import { Container , ContainerCard } from './styles';
import { Link } from 'react-router-dom';

interface CardsProps{
    text: string;
    link: string;
}

const Cards: React.FC<CardsProps> = ( { text , link }) => {
  return (
        <Container>
            <Link to={link}>
            <ContainerCard>
                <strong>{text}</strong>
            </ContainerCard>
            </Link>
        </Container>
        
  );
}

export default Cards;