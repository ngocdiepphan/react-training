import React from "react";
import { Link } from "react-router-dom";

// Component
import { RatingStar } from "components";

// Type
import { Recipe } from "type/recipe";

export interface DeliciousProps {
  title: string;
  collection: number;
  recipes: Recipe[];
}

// Function to filter recipes based on the collection ID and a rating of 5
const Delicious = ({ title, collection, recipes }: DeliciousProps) => {
  const filterRecipes = (collectionId: number) => {
    return recipes
      .filter(
        (recipe) =>
          recipe.collection_id === collectionId && recipe.ratings === 5,
      )
      .slice(0, 3); // Limit the number of recipes to the first 3
  };

  return (
    <>
      <h3 className="text-2xl mt-37 mb-35 font-serif md:text-4xl md:mt-60">
        {title}
      </h3>
      <ul
        className="flex flex-col gap-24 md:flex-row md:grid md:grid-cols-3 md:gap-20"
      >
        {filterRecipes(collection).map((recipe) => (
          <li key={recipe.id} className="">
            <Link to={`/recipe/${recipe.id}`}>
              <article className="flex flex-col gap-13">
                <img
                  className="card__image w-full"
                  src={recipe.img}
                  alt={`Picture of ${recipe.name}`}
                />
                <RatingStar ratings={recipe.ratings} />
                <p className="font-sans text-lg md:text-xl">{recipe.name}</p>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Delicious;
