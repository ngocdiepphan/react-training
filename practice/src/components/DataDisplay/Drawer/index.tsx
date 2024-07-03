import Button from "@/components/Inputs/Buttons";
import React from "react";
// import iconUser from "@/assets/images/dashboards/user-icon.svg";
import iconNew from "@/assets/images/dashboards/add.svg";
import DrawerItem from "./DrawerItem";
import iconRecipe from "@/assets/images/dashboards/product-preview.png";

const Drawer: React.FC = () => {
  return (
    <div className="flex-col gap-20 w-212 bg-drawerSecondary hidden md:block">
      <div className="py-20 px-10">
        <Button type="button" variant="add" item="new">
          New recipes
        </Button>
        <ul className="navigation">
        <DrawerItem title="User" type="user" item="userItem" />
        <DrawerItem title="Recipes" type="recipe" item="recipeItem" />
        </ul>
      </div>
    </div>
  );
};
export default Drawer;
