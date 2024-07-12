import React from 'react';
import IngredientItem from './IngredientItem';

export interface Props {
  recipe: {
    ingredient: string[];
  };
}

const Ingredient: React.FC<Props> = ({ recipe }) => {
  const { ingredient } = recipe;

  return (
    <article className="ingredient">
      <h5 className="font-serif text-xl my-27 md:text-3xl">Ingredients</h5>
      <ul>
        {ingredient.map((item, index) => (
          <IngredientItem key={index} label={item} />
        ))}
      </ul>
    </article>
  );
};

export default Ingredient;
