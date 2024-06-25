import React from "react";
import pasta from '@/assets/images/categories/pasta.png';

const Category: React.FC = () => {
  return (
    <>
      <article className="flex flex-col gap-8">
        <img
          className="w-full"
          src={pasta}
          alt="Picture pasta"
        />
        <p className="flex justify-center text-sm mt-8 font-sans md:text-3xl md:leading-sm">Pasta</p>
      </article>
    </>
  );
};
export default Category;
