import React from "react";

// Component
import Delicious from "components/Delicious";

// Type
import { Recipe } from "type/recipe";

interface DeliSectionProps {
  items: { title: string; id: string; collection: number }[];
  recipes: Recipe[];
}

// Function to filter recipes based on the collection ID and a rating of 5
const filterRecipes = (recipes: Recipe[], collectionId: number) => {
  return recipes
    .filter(
      (recipe) =>
        recipe.collection_id === collectionId && recipe.ratings === 5,
    )
    .slice(0, 3); // Limit the number of recipes to the first 3
};

const DeliciousSection = ({ items, recipes }: DeliSectionProps) => {
  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      {items.map((item) => (
        <Delicious
          key={item.id}
          title={item.title}
          recipes={filterRecipes(recipes, item.collection)}
        />
      ))}
    </section>
  );
};

export default DeliciousSection;
