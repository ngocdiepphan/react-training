import React from "react";
import Header from "../../components/DataDisplay/Layouts/Header";
import { recipe } from "@/mocks/recipe";
import NutritionFacts from "@/components/DataDisplay/Nutrition/index";
import Ingredient from "@/components/DataDisplay/Ingredient";
import Instruction from "@/components/DataDisplay/Instruction";


const HomePage: React.FC = () => {
  const recipeData = recipe[1];
  const nutritionData = recipeData.nutrition;
  const ingredientData = recipeData.ingredient;
  const instructionData = recipeData.instruction;

  return (
    <div>
      <Header />
      <NutritionFacts data={nutritionData} />
      <Ingredient ingredients={ingredientData} />
      <Instruction instruction={instructionData} />
    </div>
  );
};

export default HomePage;
