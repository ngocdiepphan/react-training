import React from "react";

export interface Star {
  ratings: number;
}

const Rating: React.FC<Star> = ({ ratings }) => {
  const renderRating = (ratings: number) => {
    const stars = [];
    for (let i = 0; i < ratings; i++) {
      stars.push(
        <span className="bg-star w-14 h-14"></span>
      );
    }
    return stars;
  };

  return <div className="flex flex-row gap-5">{renderRating(ratings)}</div>;
};

export default Rating;
