import React, { ButtonHTMLAttributes} from 'react';
import { ButtonStyled } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text,...rest}) => {
  return (
  <ButtonStyled {...rest}>{text}</ButtonStyled>
  );
}

export default Button;