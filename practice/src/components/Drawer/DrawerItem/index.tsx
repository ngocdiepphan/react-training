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
    <>
    <div
      className={`flex flex-row gap-10 pl-8 h-30 items-center my-30 ${className}`}
      onClick={onClick}
    >
      <span className={`w-20 h-20 bg-no-repeat bg-center ${iconClass}`}></span>
      <span className="text-white text-base hover:text-hoverPrimary">
        {title}
      </span>
    </div>
    </>
  );
};

export default DrawerItem;
