import Button from "@/components/Inputs/Buttons";
import React from "react";
import iconUser from "@/assets/images/dashboards/recipe.svg";
import iconNew from "@/assets/images/dashboards/add.svg";
import DrawerItem from "./DrawerItem";
import iconRecipe from "@/assets/images/dashboards/recipe.svg";
const Drawer: React.FC = () => {
  return (
    <>
      <Button type="button" variant="add" icon={iconNew}>
        New recipes
      </Button>
      <DrawerItem title="User" type="user" image={iconUser} />
      <DrawerItem title="Recipes" type="recipe" image={iconRecipe} />
    </>
  );
};
export default Drawer;
