import React from "react";
import iconEdit from "@/assets/images/recipe-details/icon-edit.svg";

const Serving: React.FC = () => {
  return (
    <li className="flex flex-col px-20 border-r border-gray-400 hover:border-r-5 hover:border-primary">
      <p className="uppercase text-xs text-secondary">SERVINGS</p>
      <p className="uppercase text-sm flex flex-row gap-10">
        4 people
        <img className="" src={iconEdit} alt="Icon edit" />
      </p>
    </li>
  );
};

export default Serving;
