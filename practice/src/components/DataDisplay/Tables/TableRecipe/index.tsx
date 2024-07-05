import React from "react";
import { recipe } from "../../../../mocks/recipe";
import RecipeItem from "./RecipeItem";

const TableRecipe: React.FC = () => {
  return (
    <>
      <table className="w-full text-xl font-semibold text-quaternary font-sans">
        <thead className="table__head">
          <tr className="w-full">
            <th className="font-semibold text-left text-primary bg-buttonPrimary p-20">Image</th>
            <th className="font-semibold text-left text-primary bg-buttonPrimary p-20 table-recipe__cell">Name</th>
            <th className="font-semibold text-left text-primary bg-buttonPrimary p-20">Category</th>
            <th className="font-semibold text-left text-primary bg-buttonPrimary p-20">Creator</th>
            <th className="font-semibold text-left text-primary bg-buttonPrimary p-20">Created At</th>
            <th className="font-semibold text-left text-primary bg-buttonPrimary p-20">Ratings</th>
            <th className="font-semibold text-left text-primary bg-buttonPrimary p-20">Description</th>
          </tr>
        </thead>
        <tbody className="table-body__recipe">
          {recipe.map((item) => (
            <RecipeItem
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              category={item.category}
              creator={item.creator}
              ratings={item.ratings}
              createdAt={item.createdAt}
              description={item.description}
              ingredient={item.ingredient}
              instruction={item.instruction}
              nutrition={item.nutrition}
              collection_id={item.collection_id}
              prepTime={item.prepTime}
              serving={item.serving}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableRecipe;
