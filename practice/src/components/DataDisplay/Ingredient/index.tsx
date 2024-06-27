import React from 'react';
import IngredientItem from '../IngredientItem/index';
import { IngredientProps } from '@/type/recipe';

const Ingredient: React.FC<IngredientProps> = ({ ingredients }) => {
  return (
    <article className="ingredient">
      <h5 className="font-serif text-xl my-27 md:text-3xl">Ingredients</h5>
      <ul>
        {ingredients.map((ingredient, index) => (
          <IngredientItem key={index} label={ingredient} />
        ))}
      </ul>
    </article>
  );
};

export default Ingredient;
