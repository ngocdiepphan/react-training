import React from "react";

// Component
import { Button } from "components";

export interface CollectionProps {
  id: string;
  name: string;
  img: string;
  recipes: number;
}

const Collection = ({ id, name, img, recipes }: CollectionProps) => {
  return (
    <article key={id} className="">
      <img className="w-full" src={img} alt={`Picture of ${name}`} />
      <div className="border-spacing-3 border border-borderPrimary border-t-0 overflow-hidden pt-14 px-24 pb-24">
        <p className="font-serif leading-36 font-normal w-318 h-72 text-3xl md:w-250 md:h-60 lg:w-340 lg:h-87 lg:text-4xl">
          {name}
        </p>
        <Button type="button" variant="secondary">
          {`${recipes} Recipes`}
        </Button>
      </div>
    </article>
  );
};

export default Collection;
