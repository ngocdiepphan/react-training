import React from "react";
import Header from "../../components/DataDisplay/Layouts/Header";
import NutritionFacts from "../../components/DataDisplay/Nutrition/index"
import { recipe } from "@/data";


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
