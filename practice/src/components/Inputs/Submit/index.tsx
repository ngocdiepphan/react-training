import React from "react";

export interface BtnSubmitProps {
  type: "submit" | "button" | "reset";
  children: string;
  onClick?: () => void;
}

const BtnSubmit: React.FC<BtnSubmitProps> = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      className="mt-5 font-serif bg-teal-500 text-white font-semibold py-3 px-4 w-full rounded-md hover:bg-teal-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BtnSubmit;
