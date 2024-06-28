import React from "react";
import PrepTimeItem from "@/components/DataDisplay/PrepTimeItem/index";
import Serving from "@/components/DataDisplay/Serving/index";
import iconPrint from "@/assets/images/recipe-details/print.svg";
import { recipe } from "@/mocks/recipe";

const PrepTime: React.FC = () => {
  const recipeItem = recipe[1];
  return (
    <ul className="flex flex-row items-center gap-8 mx-20">
      <PrepTimeItem prepTime={`${recipeItem.prepTime.min}`} />
      <PrepTimeItem prepTime={`${recipeItem.prepTime.max}`} />
      <Serving serving={recipeItem.serving} />
      <img className="ml-32 w-18 h-20" src={iconPrint} alt="Icon print" />
    </ul>
  );
};

export default PrepTime;
