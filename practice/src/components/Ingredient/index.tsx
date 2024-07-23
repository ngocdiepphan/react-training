import React from "react";

// Component
import { IngredientItem } from "components";

export interface Props {
  data: string[];
}

const Ingredient: React.FC<Props> = ({ data }) => {
  return (
    <article className="ingredient">
      <h5 className="font-serif text-xl my-27 md:text-3xl">Ingredients</h5>
      <ul>
        {data.map((item, index) => (
          <IngredientItem key={index} label={item} />
        ))}
      </ul>
    </article>
  );
};

export default Ingredient;
