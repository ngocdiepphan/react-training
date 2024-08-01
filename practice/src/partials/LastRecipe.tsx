import React from "react";

// Components
import { LastRecipe, Button } from "components";

// Type
import { Recipe } from "type/recipe";

interface LastSectionProps {
  recipes: Recipe[];
}

const LastRecipeSection = ({ recipes }: LastSectionProps) => {
  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      <h4 className="text-2xl mt-37 mb-35 font-serif md:text-4xl md:mt-60">
        Latest Recipes
      </h4>
      <ul>
        <LastRecipe recipes={recipes} />
      </ul>
      <Button type="button" variant="primary">
        Load More
      </Button>
    </section>
  );
};

export default LastRecipeSection;
