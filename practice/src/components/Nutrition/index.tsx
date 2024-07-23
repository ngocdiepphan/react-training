import React from "react";

// Component
import { NutritionItem } from "components";

// Type
import { NutritionFact } from "type/recipe";

export interface Props {
  data: NutritionFact[];
}

const NutritionFacts: React.FC<Props> = ({ data }) => {
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
