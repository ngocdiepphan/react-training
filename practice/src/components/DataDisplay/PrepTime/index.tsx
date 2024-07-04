import React from "react";
import PrepTimeItem from "../PrepTimeItem";
import Serving from "../Serving";
import { recipe } from "../../../mocks/recipe";

const PrepTime: React.FC = () => {
  const recipeItem = recipe[1];
  return (
    <ul className="flex flex-row items-center gap-8 mx-20">
      <PrepTimeItem prepTime={`${recipeItem.prepTime.min}`} />
      <PrepTimeItem prepTime={`${recipeItem.prepTime.max}`} />
      <Serving serving={recipeItem.serving} />
       <span className="bg-print w-20 h-22"></span>
    </ul>
  );
};

export default PrepTime;
