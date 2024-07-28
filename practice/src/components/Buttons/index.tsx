import React, { ReactNode } from "react";

export interface ButtonProps {
  type: "submit" | "button" | "reset";
  variant:
    | "primary"
    | "secondary"
    | "action"
    | "join"
    | "loadComment"
    | "post"
    | "submit"
    | "add"
    | "confirm";
  children: string | JSX.Element;
  onClick?: () => void;
  icon?: ReactNode;
}

const Button = ({ type, variant, onClick, children, icon }: ButtonProps) => {
  const baseStyles =
    "flex flex-row justify-center font-sans items-center rounded-md cursor-pointer";
  const pill = "rounded-md";
  const variantStyles = {
    primary:
      "flex justify-center w-124 h-32 mt-30 mx-auto mb-96 hover:bg-blue-200 border border-gray-700",
    secondary:
      "mt-35 w-125 h-27 rounded border-1 border hover:bg-secondary flex justify-center ml-auto",
    action:
      "mb-37 md:mb-40 w-250 md:w-278 h-37 border border-primary text-base font-sans flex justify-center hover:bg-secondary",
    join: "text-white bg-secondary border border-solid uppercase h-48 hover:bg-orange-500 md:w-129 md:h-66 md:rounded-tr-md md:rounded-br-md md:rounded-l-none border-white",
    loadComment: "w-full h-56 border hover:bg-secondary",
    post: "absolute right-37 bottom-76 w-208 h-37 border hover:bg-secondary ",
    submit:
      "mt-10 text-xl font-semibold font-serif bg-teal-500 text-white py-3 px-4 w-full rounded-md hover:bg-teal-600 h-40",
    add: "text-base rounded-none font-medium border-none hover:font-bold bg-drawerPrimary w-160 h-30 text-white hover:bg-hoverPrimary mx-20 hover:bg-btnSecondary",
    confirm:
      "border-none outline-none py-20 text-hoverPrimary bg-buttonPrimary font-bold w-102 h-20 md:h-24  hover:text-white hover:bg-hoverPrimary",
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${pill}`;
  const iconClass = icon ? `bg-${icon}` : `bg-${variant}`;

  return (
    <button type={type} className={styles} onClick={onClick}>
      {icon && (
        <span
          className={`w-30 h-30 bg-no-repeat bg-center hover:scale-150 ${iconClass}`}
        ></span>
      )}
      {children}
    </button>
  );
};

export default Button;
