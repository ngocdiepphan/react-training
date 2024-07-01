import React from "react";

interface DrawerItemProps {
  title: string;
  type: "user" | "recipe";
  image?: string;
}

const DrawerItem: React.FC<DrawerItemProps> = ({ title, type, image }) => {
  return (
    <li className={`navigation__item ${type}`} data-id={type}>
      {image && type === "recipe" && <img className="w-14 h-14" src={image} alt={`Icon ${type}`} />}
      <p className="drawer__title">{title}</p>
    </li>
  );
};

export default DrawerItem;
