import React from "react";
import Button from "../Buttons";
import DrawerItem from "./DrawerItem";

interface DrawerProps {
  onShowDrawer: boolean;
}

const Drawer: React.FC<DrawerProps> = ({ onShowDrawer }) => {
  console.log("Drawer is shown:", onShowDrawer);

  return (
    <div
      className={`flex-col gap-20 w-212 bg-drawerSecondary ${onShowDrawer ? "block md:block h-lvh md:h-lvh" : "hidden md:hidden"} lg:block h-full`}
    >
      <div className="py-20 px-10">
        <Button type="button" variant="add">
          New recipes
        </Button>
        <ul className="navigation">
          <DrawerItem
            title="User"
            type="user"
            icon="user-item"
            className="bg-user-item"
          />
          <DrawerItem
            title="Recipes"
            type="recipe"
            icon="recipe-item"
            className="bg-recipe-item"
          />
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
