import { formatDate } from "helpers";
import React from "react";

export interface Props {
  recipe: {
    createdAt: Date | string;
  };
}

const CreateDate = ({ recipe }: Props) => {
  const formattedDate =
    typeof recipe.createdAt === 'string'
      ? recipe.createdAt
      : formatDate(recipe.createdAt);

  return (
    <ul>
      <li className="flex flex-row items-center gap-8">
        <span className="bg-create-date w-14 h-14 bg-no-repeat"></span>
        <p className="font-sans text-xs">{formattedDate}</p>
      </li>
    </ul>
  );
};

export default CreateDate;
