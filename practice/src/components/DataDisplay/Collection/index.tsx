import React from "react";
import sushi from "@/assets/images/collections/sushi.png";
import Button from "@/components/Inputs/Buttons";

const Collection: React.FC = () => {
  return (
    <>
      <article className="">
        <img className="w-full" src={sushi} alt="Picture sushi" />
        <div className="border-spacing-3 border-solid border-gray-400 border-t-0 overflow-hidden pt-14 px-24 pb-24">
          <p className="font-serif leading-36 font-normal w-318 h-72 text-3xl md:w-250 md:h-60 lg:w-340 lg:h-87 lg:text-4xl">
            Sushi Combos for your Next Party
          </p>
          <Button type="button" variant="secondary">
            156 Recipes
          </Button>
        </div>
      </article>
    </>
  );
};
export default Collection;
