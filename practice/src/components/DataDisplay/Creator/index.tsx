import React from "react";
import { Recipe } from "type/recipe";

interface Props {
  recipe: Recipe;
}

const Creator: React.FC<Props> = ({ recipe }) => {
  return (
    <ul>
      <li className="flex flex-row items-center gap-8">
        <img
          className="w-30 h-30 rounded-full"
          src={recipe.imgCreator}
          alt={`Picture ${recipe.creator}`}
        />
        <p className="font-sans text-xs">{recipe.creator}</p>
      </li>
    </ul>
  );
};

export default Creator;
