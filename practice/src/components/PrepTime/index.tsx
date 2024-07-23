import React from "react";

// Components
import { PrepTimeItem, Serving } from "components";

export interface Props {
  recipe: {
    prepTime: {
      min: string;
      max: string;
    };
    serving: string;
  };
}

const PrepTime: React.FC<Props> = ({ recipe }) => {
  const { prepTime, serving } = recipe;

  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      <ul className="flex flex-row items-center gap-8 my-27 md:mt-76 md:mb-50">
        <PrepTimeItem prepTime={`${prepTime.min}`} />
        <PrepTimeItem prepTime={`${prepTime.max}`} />
        <Serving serving={serving} />
        <span className="bg-print w-20 h-22"></span>
      </ul>
    </section>
  );
};

export default PrepTime;
