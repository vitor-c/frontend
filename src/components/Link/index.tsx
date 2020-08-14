import React from 'react';
import { Container } from './styles';
import { FiArrowLeftCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom';


const LinkIcon: React.FC = () => {
  return (
      <Container>
        <Link to={'/'}>
            <FiArrowLeftCircle size={70} />
        </Link>
      </Container>
  );
}

export default LinkIcon;