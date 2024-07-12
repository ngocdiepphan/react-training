import React from "react";
import { recipe } from "mocks/recipe";
import { Link } from "react-router-dom";

const LastRecipe: React.FC = () => {
  return (
    <ul className="grid grid-cols-2 gap-24 md:gap-30 md:grid-cols-3 lg:grid-cols-4">
      {recipe.map((recipeItem) => (
        <li key={recipeItem.id}>
          <Link to={`/recipe/${recipeItem.id}`}>
            <article className="flex flex-col gap-16 cursor-pointer border-none text-primary">
              <img
                className=""
                src={recipeItem.img}
                alt={`Picture of ${recipeItem.name}`}
              />
              <p className="w-180 mt-12 text-sm md:text-lg md:w-full font-sans">
                {recipeItem.name}
              </p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LastRecipe;
