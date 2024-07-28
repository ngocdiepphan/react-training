import React from "react";

// Components
import { RatingStar, Chip } from "components";

// Type
import { Recipe } from "type/recipe";

interface ContentProps {
  recipeData: Recipe;
}

const Content = ({ recipeData }: ContentProps) => {
  const CHIP_DATA = [
    {
      key: "creator",
      label: recipeData.creator,
      icon: (
        <img
          className="w-32 h-32 rounded-full"
          src={recipeData.imgCreator}
          alt={`Avatar of ${recipeData.creator}`}
        />
      ),
    },
    {
      key: "date",
      label: recipeData.createdAt,
      icon: <span className="bg-create-date w-16 h-16 bg-no-repeat" />,
    },
    {
      key: "comment",
      label: recipeData.comments,
      icon: <span className="bg-reply w-14 h-14 bg-no-repeat" />,
    },
  ];

  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      <h4 className="font-serif text-2xl md:text-6xl">{recipeData.name}</h4>
      <div className="flex flex-row mt-24 pb-37 border-b border-b-borderPrimary hover:border-b-primary md:flex-row md:pb-37 gap-24 items-center">
        {CHIP_DATA.map((item) => (
          <Chip icon={item.icon} label={String(item.label)} />
        ))}
        <RatingStar ratings={recipeData.ratings} />
      </div>
      <p className="font-sans mt-24 mb-35 text-xs md:text-2xl lg:text-xs">
        {recipeData.description}
      </p>
      <img
        className="recipes-detail__img-banner w-full"
        src={recipeData.img}
        alt="Picture banner recipe pages"
      />
    </section>
  );
};
export default Content;
