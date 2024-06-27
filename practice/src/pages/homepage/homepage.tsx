import React from "react";
import Header from "../../components/DataDisplay/Layouts/Header";
import { recipe } from "@/mocks/recipe";
import NutritionFacts from "@/components/DataDisplay/Nutrition/index";
import Ingredient from "@/components/DataDisplay/Ingredient";


const HomePage: React.FC = () => {
  const nutritionData = recipe[0].nutrition;
  const ingredientData = recipe[0].ingredient;

  return (
    <div>
      <Header />
      <NutritionFacts data={nutritionData} />
      <Ingredient ingredients={ingredientData} />
    </div>
  );
};

export default HomePage;
