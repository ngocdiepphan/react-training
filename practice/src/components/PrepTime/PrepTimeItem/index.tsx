import React from "react";

export interface PrepTimeItemProps {
  prepTime: string;
}

const PrepTimeItem = ({ prepTime }: PrepTimeItemProps) => {
  return (
    <li className="flex flex-col first:pl-0 px-20 border-r border-gray-400 hover:border-r-5 hover:border-primary">
      <p className="uppercase text-xs text-secondary">
        prep time
      </p>
      <p className="uppercase text-sm">{prepTime}</p>
    </li>
  );
};

export default PrepTimeItem;
