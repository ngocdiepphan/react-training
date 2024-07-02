import Button from "@/components/Inputs/Buttons";
import React from "react";
import iconUser from "@/assets/images/dashboards/user-icon.svg";
import iconNew from "@/assets/images/dashboards/add.svg";
import DrawerItem from "./DrawerItem";
import iconRecipe from "@/assets/images/dashboards/product-preview.png";

const Drawer: React.FC = () => {
  return (
    <div className="flex-col gap-20 w-212  bg-secondaryDrawer hidden md:block">
      <div className="py-20 px-10">
        <Button type="button" variant="add" icon={iconNew}>
          New recipes
        </Button>
        <ul className="navigation">
          <DrawerItem title="User" type="user" image={iconUser} />
          <DrawerItem title="Recipes" type="recipe" image={iconRecipe} />
        </ul>
      </div>
    </div>
  );
};
export default Drawer;
