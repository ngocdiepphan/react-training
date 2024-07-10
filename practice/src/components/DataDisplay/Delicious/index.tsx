import React from "react";
import Rating from "../RatingStar";
import { Link } from "react-router-dom";
import { recipe } from "mocks/recipe";

const Delicious: React.FC = () => {
  return (
    <ul className="flex flex-wrap gap-24 md:flex-row md:grid md:grid-cols-3 md:gap-20">
      {recipe.map((item, index) => (
        <li key={index} className="flex flex-col gap-10">
          <Link to={`/recipe/${item.id}`}>
            <article>
              <img
                className="card__image w-full"
                src={item.img}
                alt={`Picture of ${item.name}`}
              />
              <Rating ratings={item.ratings} />
              <p className="font-sans text-lg md:text-xl">{item.name}</p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Delicious;
