import React from "react";

// Component
import { Category } from "components";

// Mock
import { categories } from "mocks/category";

const CategorySection: React.FC = () => {
  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      <h3 className="text-2xl mt-37 mb-35 font-serif md:text-4xl md:mt-60">
        Popular Categories
      </h3>
      <div className="grid justify-center grid-cols-3 lg:flex lg:flex-row gap-24">
        {categories.map((item) => (
          <Category
            key={item.id}
            category={item.category}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
