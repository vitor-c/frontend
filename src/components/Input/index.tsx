import React , { InputHTMLAttributes } from 'react';
import { InputStyled } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
}


const Input: React.FC<InputProps> = ({...rest }) => {
  return (
        <InputStyled  {...rest}/>
  )
}

export default Input;