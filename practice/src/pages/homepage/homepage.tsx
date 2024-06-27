import React from "react";
import Header from "../../components/DataDisplay/Layouts/Header";
import { recipe } from "@/mocks/recipe";
import NutritionFacts from "@/components/DataDisplay/Nutrition/index"

const HomePage: React.FC = () => {
  const nutritionData = recipe[0].nutrition;
  return (
    <div>
      <Header />
      <NutritionFacts data={nutritionData} />
    </div>
  );
};

export default HomePage;
