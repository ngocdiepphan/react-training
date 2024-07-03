import React from "react";

export interface DrawerItemProps {
  title: string;
  type: string;
  item?: string;
}

const DrawerItem: React.FC<DrawerItemProps> = ({ title, type, item }) => {
  const iconClass = item ? `bg-${item}` : `bg-${type}`;
  return (
    <li className="flex flex-row gap-10 pl-8 h-30 items-center my-30 hover:bg-gray-900 hover:scale-110 hover:border-l-4 hover:border-l-hoverPrimary">
      <span className={`w-30 h-30 bg-no-repeat bg-center ${iconClass}`}></span>
      <span className="text-white text-base hover:text-hoverPrimary">{title}</span>
    </li>
  );
};

export default DrawerItem;
