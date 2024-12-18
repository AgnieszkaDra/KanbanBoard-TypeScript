import React, { forwardRef, ButtonHTMLAttributes } from "react";
import styled from "styled-components";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "delete" | "default"; 
}


const ButtonContainer = styled.button<{ variant?: "delete" | "default" }>`
  color: var(--color-grey-dark);
  background: none;
  margin: 0.5rem;
  margin-left: auto;
  padding: 0.5rem;
  overflow: hidden;

  ${({ variant }) => variant === "delete" && `
    &:hover, 
    &:focus {
      border: 2px solid var(--color-background);
      transform: scale(1.2);
      transition: transform 0.3s ease-in-out;
    }
  `}
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, children, variant = "default", ...otherProps }, ref) => {
    return (
      <ButtonContainer
        onClick={onClick}
        variant={variant} 
        {...otherProps}
        ref={ref}
      >
        {children}
      </ButtonContainer>
    );
  }
);

export default Button;

