import React from "react";

export interface DrawerItemProps {
  title: string;
  type: "user" | "recipe";
  image?: string;
}

const DrawerItem: React.FC<DrawerItemProps> = ({ title, type, image }) => {
  return (
    <li className={`flex flex-row gap-10 pl-8 h-30 items-center my-30 hover:bg-gray-900 hover:scale-110 hover:border-l-4 hover:border-l-hover ${type}`} data-id={type}>
    <img className="w-14 h-14 hover:scale-150" src={image} alt={`Icon ${type}`} />
    <p className="text-white text-base hover:text-hover">{title}</p>
  </li>
  );
};

export default DrawerItem;
