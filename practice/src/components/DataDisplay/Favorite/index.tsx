import React from "react";
import iconFavorite from "@/assets/images/recipe-details/favorite.svg";

export interface FavoriteProps {
  favoriteCount: number;
}

const Favorite: React.FC<FavoriteProps> = ({ favoriteCount }) => {
  return (
    <div className="flex flex-row gap-5">
      <img className="" src={iconFavorite} alt="Icon favorite" />
      <p className="font-sans text-secondary text-xs">
        Favorite ({favoriteCount})
      </p>
    </div>
  );
};

export default Favorite;
