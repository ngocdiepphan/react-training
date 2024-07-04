import React from "react";

const BtnMenu: React.FC = () => {
  return (
    <>
      <input type="checkbox" id="check" className="hidden" />
      <label htmlFor="check" className="cursor-pointer">
        <span className="bg-menu w-24 h-24"></span>
      </label>
      <label
        htmlFor="check"
        className="fixed top-0 right-0 bottom-0 left-0 hidden bg-black bg-opacity-50"
      ></label>
    </>
  );
};

export default BtnMenu;
