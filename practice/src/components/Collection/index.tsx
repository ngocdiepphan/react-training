import React from "react";

// Component
import { Button } from "components";

// Mock
import { collections } from "mocks/collection";

const Collection: React.FC = () => {
  return (
    <li className="grid grid-cols-1 gap-22 md:gap-30 md:grid-cols-2">
      {collections.map((item) => (
        <article key={item.id} className="">
          <img
            className="w-full"
            src={item.img}
            alt={`Picture of ${item.name}`}
          />
          <div className="border-spacing-3 border border-borderPrimary border-t-0 overflow-hidden pt-14 px-24 pb-24">
            <p className="font-serif leading-36 font-normal w-318 h-72 text-3xl md:w-250 md:h-60 lg:w-340 lg:h-87 lg:text-4xl">
              {item.name}
            </p>
            <Button type="button" variant="secondary">
              {`${item.recipes} Recipes`}
            </Button>
          </div>
        </article>
      ))}
    </li>
  );
};

export default Collection;
