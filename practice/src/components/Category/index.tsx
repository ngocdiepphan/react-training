import React from "react";

export interface CateProps {
  id: string;
  category: string;
  img: string;
}

const Category = ({ id, category, img }: CateProps) => {
  return (
    <article key={id} className="flex flex-col gap-24 items-center">
      <div className="w-full max-w-xs">
        <img
          className="w-full rounded-full"
          src={img}
          alt={`Picture of ${category}`}
        />
      </div>
      <p className="flex justify-center mt-2 font-sans text-xs md:text-xl">
        {category}
      </p>
    </article>
  );
};

export default Category;
