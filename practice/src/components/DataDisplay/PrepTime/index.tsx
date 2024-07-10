import React from "react";
import PrepTimeItem from "../PrepTimeItem";
import Serving from "../Serving";
import { Recipe } from "type/recipe";

interface Props {
  recipe: Recipe;
}

const PrepTime: React.FC<Props> = ({ recipe }) => {
  const { prepTime, serving } = recipe;

  return (
    <ul className="flex flex-row items-center gap-8 my-27 md:mt-76 md:mb-50">
      <PrepTimeItem prepTime={`${prepTime.min}`} />
      <PrepTimeItem prepTime={`${prepTime.max}`} />
      <Serving serving={serving} />
      <span className="bg-print w-20 h-22"></span>
    </ul>
  );
};

export default PrepTime;
