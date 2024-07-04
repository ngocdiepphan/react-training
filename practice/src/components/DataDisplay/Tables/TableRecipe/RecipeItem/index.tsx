import React from "react";
import { Recipe } from "../../../../../type/recipe";

const RecipeItem: React.FC<Recipe> = ({
  img,
  name,
  category,
  creator,
  ratings,
  createdAt,
  description,
}) => {
  return (
    <tr className="table__row recipe_item" data-id="">
      <td className="align-middle p-20">
        <img src={img} alt={name} className="w-87 h-87 rounded-full" />
      </td>
      <td className="align-middle p-20 font-normal">
        <p className="table__title user-name">{name}</p>
      </td>
      <td className="align-middle p-20 font-normal">
        <p className="table__title user-name">{category}</p>
      </td>
      <td className="align-middle p-20 font-normal">
        <p className="table__title user-name">{creator}</p>
      </td>
      <td className="align-middle p-20 font-normal">
        <p className="table__title user-name">{new Date(createdAt).toLocaleDateString()}</p>
      </td>
      <td className="align-middle p-20 font-normal">
        <p className="table__title user-name">{ratings}</p>
      </td>
      <td className="align-middle p-20 font-normal">
        <p className="table__title user-name">{description}</p>
      </td>
    </tr>
  );
};

export default RecipeItem;
