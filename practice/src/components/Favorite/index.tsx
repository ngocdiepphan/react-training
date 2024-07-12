import React from "react";

export interface FavoriteProps {
  favoriteCount: number;
}

const Favorite: React.FC<FavoriteProps> = ({ favoriteCount }) => {
  return (
    <div className="flex flex-row gap-5">
      <span className="bg-favorite w-16 h-14"></span>
      <p className="font-sans text-secondary text-xs">
        Favorite ({favoriteCount})
      </p>
    </div>
  );
};

export default Favorite;
