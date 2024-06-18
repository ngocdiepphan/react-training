import React from "react";

interface ButtonProps {
  type: "submit" | "button" | "reset";
  children: String;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      className={`mt-5 font-serif bg-teal-500 text-white font-semibold py-3 px-4 w-full rounded-md hover:bg-teal-600`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
