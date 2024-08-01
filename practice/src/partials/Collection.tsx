import React from "react";

// Component
import { Collection } from "components";

// Mock
import { collections } from "mocks/collection";

const CollectSection: React.FC = () => {
  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      <h3 className="text-2xl md:text-medium font-serif mt-60 mb-35">
        Hand-Picked Collections
      </h3>
      <ul className="w-full grid grid-cols-1 gap-22 md:gap-30 md:grid-cols-2">
        {collections.map((item) => (
          <li key={item.id}>
            <Collection
              name={item.name}
              img={item.img}
              recipes={item.recipes}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CollectSection;
