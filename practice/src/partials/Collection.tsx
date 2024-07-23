import React from "react";

// Component
import { Collection } from "components";

const CollectSection: React.FC = () => {
  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      <h3 className="text-2xl md:text-medium font-serif mt-60 mb-35">
        Hand-Picked Collections
      </h3>
      <ul className="w-full">
        <Collection />
      </ul>
    </section>
  );
};

export default CollectSection;
