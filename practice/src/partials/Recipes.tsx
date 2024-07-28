import React from "react";

// Components
import {
  Ingredient,
  NutritionFacts,
  Instruction
} from "components";

// Type
import { Recipe } from "type/recipe";

interface RecipesProps {
  recipeData: Recipe;
}

const Recipes = ({ recipeData }: RecipesProps) => {
  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      <div className="flex flex-col md:flex-row md:justify-between mb-72 md:mb-102">
        <div className="recipe-pages__content flex flex-col">
          <Ingredient data={recipeData.ingredient} />
          <NutritionFacts data={recipeData.nutrition} />
        </div>
        <Instruction recipe={recipeData} />
      </div>
    </section>
  );
};

export default Recipes;
