import React from "react";

// Components
import { Creator, CreationDate, RatingStar } from "components";

// Type
import { Recipe } from "type/recipe";

interface ContentProps {
  recipeData: Recipe;
}

const Content = ({ recipeData }: ContentProps) => {
  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      <h4 className="font-serif text-2xl md:text-6xl">{recipeData.name}</h4>
      <div className="flex flex-col mt-24 pb-37 border-b border-b-borderPrimary hover:border-b-primary md:flex-row md:pb-37">
        <ul className="flex flex-row gap-24 items-center">
          <Creator recipe={recipeData} />
          <CreationDate recipe={recipeData} />
          <li className="flex flex-row gap-5">
            <span className="bg-reply w-14 h-14 bg-no-repeat"></span>
            <p className="text-xs-small">25</p>
          </li>
          <li>
            <RatingStar ratings={recipeData.ratings} />
          </li>
        </ul>
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
