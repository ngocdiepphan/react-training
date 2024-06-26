import React from "react";
import NutritionItem from "../NutritionItem/index";

const NutritionFacts: React.FC = () => {
  return (
    <article className="nutrition bg-tertiary p-24 mt-50">
      <h5 className="font-serif text-xl md:text-3xl">Nutrition Facts</h5>
      <ul>
        <NutritionItem label="Calories" value="350" />
        <NutritionItem label="Total Fat" value="20g" />
        <NutritionItem label="Saturated Fat" value="5g" />
        <NutritionItem label="Cholesterol" value="80mg" />
        <NutritionItem label="Sodium" value="800mg" />
        <NutritionItem label="Total Carbohydrate" value="15g" />
        <NutritionItem label="Dietary Fiber" value="5g" />
        <NutritionItem label="Total Sugars" value="3g" />
        <NutritionItem label="Protein" value="30g" />
      </ul>
    </article>
  );
};

export default NutritionFacts;
