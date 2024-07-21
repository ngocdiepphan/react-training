import React, { useEffect, useState } from "react";
import Rating from "../RatingStar";
import { Link } from "react-router-dom";
import { Recipe } from "type/recipe";
import RecipeService from "services/recipe";

interface RecipeList {
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
    <section className="mx-12 md:mx-102 lg:mx-30">
      <h3 className="text-2xl mt-37 mb-35 font-serif md:text-4xl md:mt-60">
        {title}
      </h3>
      <ul
        className="flex flex-wrap gap-24 md:flex-row md:grid md:grid-cols-3 md:gap-20"
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
                <Rating ratings={item.ratings} />
                <p className="font-sans text-lg md:text-xl">{item.name}</p>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Delicious;
