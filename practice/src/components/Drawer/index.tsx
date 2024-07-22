import React from "react";
import Button from "../Buttons";
import DrawerItem from "./DrawerItem";

interface DrawerProps {
  onShowDrawer: boolean;
  onShowFormAdd: () => void;
  onDrawerItemClick: (item: string) => void;
  selectedTable: string;
}

const Drawer = ({
  onShowDrawer,
  onShowFormAdd,
  onDrawerItemClick,
  selectedTable,
}: DrawerProps) => {
  const navList = [
    {
      title: "User",
      type: "user",
      icon: "user-item",
      className: "bg-user-item",
    },
    {
      title: "Recipes",
      type: "recipe",
      icon: "recipe-item",
      className: "bg-recipe-item",
    },
  ];

  const handleItemClick = (itemType: string) => {
    return () => {
      onDrawerItemClick(itemType);
    };
  };

  return (
    <div
      className={`flex-col gap-20 w-212 bg-drawerSecondary ${onShowDrawer ? "block md:block h-full" : "hidden md:hidden"} lg:block h-full`}
    >
      <div className="py-20 px-10 sticky top-87">
        {selectedTable !== "user" && (
          <Button type="button" variant="add" onClick={onShowFormAdd}>
            New recipes
          </Button>
        )}
        <ul className="navigation">
          {navList.map((item, index) => (
            <DrawerItem
              key={index}
              title={item.title}
              type={item.type}
              icon={item.icon}
              className={item.className}
              onClick={handleItemClick(item.type)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
