import React from "react";
import caramel from "@/assets/images/recipes/caramel-strawberry-milkshake.png";

const LastRecipe: React.FC = () => {
  return (
    <>
      <article className="flex flex-col gap-16 cursor-pointer border-none text-primary">
        <img className="" src={caramel} alt="Picture Caramel strawberry Milkshake" />
        <p className=" w-180 mt-12 text-sm md:text-lg md:w-full font-sans">Caramel strawberry Milkshake</p>
      </article>
    </>
  );
};
export default LastRecipe;
