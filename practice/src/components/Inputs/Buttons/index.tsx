import React from "react";

export interface ButtonProps {
  type: "submit" | "button" | "reset";
  variant:
    | "primary"
    | "secondary"
    | "feedback"
    | "join"
    | "loadComment"
    | "post";
  children: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  variant,
  onClick,
  children,
}) => {
  const baseStyles = "font-sans items-center rounded-md cursor-pointer";
  const pill = "rounded-md";
  const variantStyles = {
    primary:
      "flex justify-center w-124 h-32 mt-30 mx-auto mb-96 hover:bg-blue-200 border border-gray-700",
    secondary:
      "mt-35 w-125 h-27 rounded border-1 border hover:bg-quaternary flex justify-center ml-auto",
    feedback:
      "mb-37 md:mb-40 w-250 md:w-278 h-37 border border-primary text-base font-sans flex justify-center hover:bg-quaternary",
    join: "text-white bg-secondary border border-solid uppercase h-48 hover:bg-orange-500 md:w-129 md:h-66 md:rounded-tr-md md:rounded-br-md md:rounded-l-none border-white",
    loadComment: "w-full h-56 border hover:bg-quaternary",
    post: "w-208 h-37 border hover:bg-quaternary",
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${pill}`;

  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
