import React from 'react';
import NutritionItem from '../NutritionItem/index';
import { NutritionFact } from '@/type/recipe';

export interface NutritionFactsProps {
  data: NutritionFact[];
}

const NutritionFacts: React.FC<NutritionFactsProps> = ({ data }) => {
  return (
    <article className="nutrition bg-tertiary p-24 mt-50">
      <h5 className="font-serif text-xl md:text-3xl">Nutrition Facts</h5>
      <ul>
        {data.map((item, index) => (
          <NutritionItem key={index} label={item.label} value={item.value} />
        ))}
      </ul>
    </article>
  );
};

export default NutritionFacts;
