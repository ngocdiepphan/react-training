import React from "react";
import iconMenu from "@/assets/images/header/menu.svg";

const BtnMenu: React.FC = () => {
  return (
    <>
      <input type="checkbox" id="check" className="hidden" />
      <label htmlFor="check" className="cursor-pointer">
        <img src={iconMenu} className="w-24 h-24" alt="Menu" />
      </label>
      <label
        htmlFor="check"
        className="fixed top-0 right-0 bottom-0 left-0 hidden bg-black bg-opacity-50"
      ></label>
    </>
  );
};

export default BtnMenu;
