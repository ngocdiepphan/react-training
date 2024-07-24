import React from "react";

// Components
import { Button, DrawerItem } from "components";

// Type
import { NAV_BAR_LIST } from "constants/index";

export interface DrawerProps {
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
          {NAV_BAR_LIST.map((item, index) => (
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
