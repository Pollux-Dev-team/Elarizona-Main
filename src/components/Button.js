import React from "react";
import styled from "@emotion/styled";

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`,
};

const Button = ({ children, className = "", size, onClick }) => {
  
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary
        hover:bg-primary-darker
        rounded
        text-white
    `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const WhiteButton = styled(Button)`
  background-color: white;
  color: red;
`

export default Button;
