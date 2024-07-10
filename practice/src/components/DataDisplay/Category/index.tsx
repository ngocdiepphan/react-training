import React from "react";
import { recipe } from "mocks/recipe";

const Category: React.FC = () => {
  const displayedCategories: string[] = [];
  let displayedCount = 0; // Variable that counts the number of categories displayed

  return (
    <div className="grid grid-cols-3 lg:flex lg:flex-row gap-24">
      {recipe.map((item) => {
        if (!displayedCategories.includes(item.category) && displayedCount < 6) {
          displayedCategories.push(item.category);
          displayedCount++; // Increment the counter variable after adding a new category
          return (
            <article key={item.id} className="flex flex-col gap-24 items-center">
              <img
                className="w-full rounded-full"
                src={item.img}
                alt={`Picture of ${item.name}`}
              />
              <p className="flex justify-center mt-8 font-sans text-xs md:text-xl">{item.category}</p>
            </article>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Category;
