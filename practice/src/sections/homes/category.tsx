import React from "react";

// Component
import { Category } from "components";

const CateSection: React.FC = () => {
  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      <h3 className="text-2xl mt-37 mb-35 font-serif md:text-4xl md:mt-60">
        Popular Categories
      </h3>
      <ul className="">
        <Category />
      </ul>
    </section>
  );
};

export default CateSection;
