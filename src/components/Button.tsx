import React, { FunctionComponent } from 'react';

interface ButtonProps {
  className: string;
  onClick?(): void;
}

const Button: FunctionComponent<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <div onClick={onClick} className={`button ${className}`}>
      {children}
    </div>
  );
};

export default Button;
