import React from "react";

export interface Props {
  recipe: {
    createdAt: string;
  };
}

const CreateDate: React.FC<Props> = ({ recipe }) => {
  return (
    <ul>
      <li className="flex flex-row items-center gap-8">
        <span className="bg-create-date w-14 h-14 bg-no-repeat"></span>
        <p className="font-sans text-xs">{recipe.createdAt}</p>
      </li>
    </ul>
  );
};

export default CreateDate;
