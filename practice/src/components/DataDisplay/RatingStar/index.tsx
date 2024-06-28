import React from "react";
import star from "@/assets/images/delicious/star.svg";

export interface Star {
  ratings: number;
}

const Rating: React.FC<Star> = ({ ratings }) => {
  const renderRating = (ratings: number): JSX.Element[] => {
    const stars = [];
    for (let i = 0; i < ratings; i++) {
      stars.push(
        <img key={i} className="w-14 h-14" src={star} alt="Icon star" />,
      );
    }
    return stars;
  };

  return <div className="flex flex-row gap-5">{renderRating(ratings)}</div>;
};

export default Rating;
