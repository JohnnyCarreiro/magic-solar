import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  text:string
  link?:string
  isPrimary:boolean
  primaryColor?:boolean
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({text, link, isPrimary, primaryColor, disabled, ...rest}) => {
  return (
    <Container primaryColor={primaryColor ? primaryColor : false}>
      <button disabled={disabled} {...isPrimary ? {className:'primary'} : {className:'secondary'}} >
        {link && (
          <a href={link} {...rest} > {text} </a>
        )}
        <span {...rest} > {text} </span>
      </button>
    </Container>
  );
};

export default Button;
