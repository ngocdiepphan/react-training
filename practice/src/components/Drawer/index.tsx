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
      <div className="py-20 px-10 grid-cols-3">
        <ul className="navigation">
          <li className="h-56">
            {selectedTable !== "user" && (
              <Button
                type="button"
                variant="add"
                onClick={onShowFormAdd}
                icon="w-14 h-14 bg-add bg-no-repeat"
              >
                New recipes
              </Button>
            )}
          </li>
          <li>
            {NAV_BAR_LIST.map((item, index) => (
              <DrawerItem
                key={index}
                title={item.title}
                type={item.type}
                icon={item.icon}
                className={
                  selectedTable === item.type
                    ? "h-50 text-blue-500 bg-gray-800 scale-110 border-l-4 border-l-hoverPrimary"
                    : ""
                }
                onClick={handleItemClick(item.type)}
              />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
