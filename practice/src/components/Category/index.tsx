import React from "react";

// Mock
import { categories } from "mocks/category";

const Category: React.FC = () => {
  return (
    <div className="grid grid-cols-3 lg:flex lg:flex-row gap-24">
      {categories.map((item) => (
        <article key={item.id} className="flex flex-col gap-24 items-center">
          <img
            className="w-full rounded-full"
            src={item.img}
            alt={`Picture of ${item.category}`}
          />
          <p className="flex justify-center mt-8 font-sans text-xs md:text-xl">
            {item.category}
          </p>
        </article>
      ))}
    </div>
  );
};

export default Category;
