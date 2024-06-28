import React from "react";

export interface PrepTimeItemProps {
  prepTime: string;
}

const PrepTimeItem: React.FC<PrepTimeItemProps> = ({ prepTime }) => {
  return (
    <li className="flex flex-col px-20 border-r border-gray-400 hover:border-r-5 hover:border-primary">
      <p className="recipe-pages__label uppercase text-xs text-secondary">
        prep time
      </p>
      <p className="recipe-pages__value uppercase text-sm">{prepTime}</p>
    </li>
  );
};

export default PrepTimeItem;
