import React from "react";

export interface ButtonProps {
  type: "submit" | "button" | "reset";
  variant:
    | "primary"
    | "secondary"
    | "feedback"
    | "join"
    | "loadComment"
    | "post"
    | "submit"
    | "add";
  children?: string | any;
  onClick?: () => void;
  icon?: string;
  iconHover?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  variant,
  onClick,
  children,
  icon,
}) => {
  const baseStyles =
    "flex flex-row justify-center gap-8 font-sans items-center rounded-md cursor-pointer";
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
    submit:
      "mt-5 font-serif bg-teal-500 text-white py-3 px-4 w-full rounded-md hover:bg-teal-600 h-40",
    add: "text-base bg-drawer w-160 h-30 hover:text-white hover:bg-hover",
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${pill}`;

  return (
    <button type={type} className={styles} onClick={onClick}>
      {icon && (
        <img
          src={icon}
          alt="Icon"
          className="w-16 h-16 items-center hover:scale-150"
        />
      )}
      {children}
    </button>
  );
};

export default Button;
