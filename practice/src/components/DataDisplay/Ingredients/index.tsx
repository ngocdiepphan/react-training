import React from 'react';
import IngredientItem from '../IngredientItem/index';

const Ingredient: React.FC = () => {
  return (
    <article className="ingredient">
      <h5 className="font-serif text-xl my-27 md:text-3xl">Ingredients</h5>
      <ul>
        {/* <IngredientItem label="2 chicken breasts, grilled and sliced" />
        <IngredientItem label="1 head romaine lettuce, chopped" />
        <IngredientItem label="1 cup croutons" />
        <IngredientItem label="1/2 cup grated Parmesan cheese" />
        <IngredientItem label="1/4 cup Caesar dressing" /> */}
      </ul>
    </article>
  );
};

export default Ingredient;
