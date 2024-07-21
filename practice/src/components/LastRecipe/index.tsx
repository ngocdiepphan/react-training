import React from "react";
import { Link } from "react-router-dom";
import { Recipe } from "type/recipe";

interface LastRecipeProps {
  recipes: Recipe[];
}
const LastRecipe = ({recipes}: LastRecipeProps ) => {
  const lastRecipes = recipes.slice(-24);

  return (
    <ul className="grid grid-cols-2 gap-24 md:gap-30 md:grid-cols-3 lg:grid-cols-4">
      {lastRecipes.map((recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <article className="flex flex-col gap-16 cursor-pointer border-none text-primary">
              <img
                className=""
                src={recipe.img}
                alt={`Picture of ${recipe.name}`}
              />
              <p className="w-180 mt-12 text-sm md:text-lg md:w-full font-sans">
                {recipe.name}
              </p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LastRecipe;
