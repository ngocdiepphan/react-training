import React from "react";

import { Creator, RatingStar } from "components";

// Type
import { Recipe } from "type/recipe";

// Helper
import { formatDate } from "helpers";

interface ChipProps {
  recipeData: Recipe;
}

const Chip: React.FC<ChipProps> = ({ recipeData }) => {
  // Format creation date
  const formattedDate =
    typeof recipeData.createdAt === "string"
      ? recipeData.createdAt
      : formatDate(recipeData.createdAt);

  return (
    <div className="flex flex-row gap-24 items-center">
      <Creator
        creator={recipeData.creator}
        imgCreator={recipeData.imgCreator}
      />
      <div className="flex flex-row items-center gap-8">
        <span className="bg-create-date w-16 h-16 bg-no-repeat"></span>
        <p className="font-sans text-xs">{formattedDate}</p>
      </div>
      <div className="flex flex-row gap-5">
        <span className="bg-reply w-14 h-14 bg-no-repeat"></span>
        <p className="text-xs-small text-primary">{recipeData.comments}</p>
      </div>
      <RatingStar ratings={recipeData.ratings} />
    </div>
  );
};

export default Chip;
