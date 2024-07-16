import React from "react";

export interface DrawerItemProps {
  title: string;
  type: string;
  icon?: string;
  className?: string;
  onClick: () => void;
}

const DrawerItem: React.FC<DrawerItemProps> = ({
  title,
  type,
  icon,
  className,
  onClick,
}) => {
  const iconClass = icon ? `bg-${icon}` : `bg-${type}`;

  return (
    <li
      className="flex flex-row gap-10 pl-8 h-30 items-center my-30 hover:bg-gray-900 hover:scale-110 hover:border-l-4 hover:border-l-hoverPrimary"
      onClick={onClick}
    >
      <span className={`w-20 h-20 bg-no-repeat bg-center ${iconClass}`}></span>
      <span className="text-white text-base hover:text-hoverPrimary">
        {title}
      </span>
    </li>
  );
};

export default DrawerItem;
