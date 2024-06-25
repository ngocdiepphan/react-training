import React from "react";
import Spinach from "@/assets/images/delicious/spinach-and-cheese-pasta.png";
import Rating from "../RatingStar";

const Delicious: React.FC = () => {
  return (
    <>
      <article className="flex flex-col gap-14">
        <img
          className="card__image"
          src={Spinach}
          alt="Picture Spinach and Cheese Pasta"
        />
        <Rating />
        <p className="text-lg md:text-3xl">Spinach and Cheese Pasta</p>
      </article>
    </>
  );
};
export default Delicious;
