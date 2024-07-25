import React from "react";

export interface StarProp {
  ratings: number;
}

const RatingStar = ({ ratings }: StarProp) => {
  const renderRating = (ratings: number) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`w-14 h-14 ${
            i <= ratings ? "bg-star" : "bg-star-unrated"
          }`}
        ></span>,
      );
    }
    return stars;
  };

  return <div className="flex flex-row gap-5">{renderRating(ratings)}</div>;
};

export default RatingStar;
