import React from 'react';
import NutritionItem from '../Nutrition/NutritionItem';
import { NutritionFact } from 'type/recipe';

export interface Props {
  recipe: {
    nutrition: NutritionFact[];
  };
}

const NutritionFacts: React.FC<Props> = ({ recipe }) => {
  return (
    <article className="nutrition bg-tertiary p-24 mt-50">
      <h5 className="font-serif text-xl md:text-3xl">Nutrition Facts</h5>
      <ul>
        {recipe.nutrition.map((item, index) => (
          <NutritionItem key={index} label={item.label} value={item.value} />
        ))}
      </ul>
    </article>
  );
};

export default NutritionFacts;

