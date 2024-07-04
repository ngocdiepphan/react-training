import Button from "../../Inputs/Buttons/index";
import React from "react";
import DrawerItem from "./DrawerItem";

const Drawer: React.FC = () => {
  return (
    <div className="flex-col gap-20 w-212 bg-drawerSecondary hidden md:block">
      <div className="py-20 px-10">
        <Button type="button" variant="add">
          New recipes
        </Button>
        <ul className="navigation">
        <DrawerItem title="User" type="user" icon="user-item" />
        <DrawerItem title="Recipes" type="recipe" icon="recipe-item" />
        </ul>
      </div>
    </div>
  );
};
export default Drawer;
