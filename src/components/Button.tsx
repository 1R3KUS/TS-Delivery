import React, { FunctionComponent } from 'react';

interface ButtonProps {
  className: string;
}

const Button: FunctionComponent<ButtonProps> = ({ className, children }) => {
  return <div className={`button ${className}`}>{children}</div>;
};

export default Button;
