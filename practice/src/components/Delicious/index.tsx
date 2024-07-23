import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Component
import { RatingStar } from "components";

// Type
import { Recipe } from "type/recipe";

// Service
import RecipeService from "services/recipe";

export interface RecipeList {
  title: string;
  id: string;
  collection: number;
}

const Delicious = ({ title, id, collection }: RecipeList) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const recipeService = new RecipeService();

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipeResponse = await recipeService.fetchRecipes();
      if (!recipeResponse.error) {
        setRecipes((recipeResponse.data as Recipe[]) || []);
      }
    };

    fetchRecipes();
  }, []);

  const filterRecipes = (collectionId: number) => {
    return recipes
      .filter(
        (recipe) =>
          recipe.collection_id === collectionId && recipe.ratings === 5,
      )
      .slice(0, 3);
  };

  return (
    <>
      <h3 className="text-2xl mt-37 mb-35 font-serif md:text-4xl md:mt-60">
        {title}
      </h3>
      <ul
        className="flex flex-col gap-24 md:flex-row md:grid md:grid-cols-3 md:gap-20"
        id={id}
      >
        {filterRecipes(collection).map((item, index) => (
          <li key={index} className="">
            <Link to={`/recipe/${item.id}`}>
              <article className="flex flex-col gap-13">
                <img
                  className="card__image w-full"
                  src={item.img}
                  alt={`Picture of ${item.name}`}
                />
                <RatingStar ratings={item.ratings} />
                <p className="font-sans text-lg md:text-xl">{item.name}</p>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Delicious;
