import React, { useState, useEffect } from "react";

// Components
import {
  Header,
  FooterSocial,
  FooterContact,
  FooterDesc
} from "components";

// Partials
import {
  Banner,
  DeliciousSection,
  CollectSection,
  CategorySection,
  FormSection,
  LastRecipeSection,
} from "partials";

// Service
import RecipeService from "services/recipe";

// Types
import { Recipe } from "type/recipe";
import { CATEGORY } from "constants/index";

const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const recipeService = new RecipeService();

  // Fetch recipes on component mount
  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeResponse = await recipeService.fetchRecipes();
      if (recipeResponse.error) {
        return;
      }
      setRecipes((recipeResponse.data as Recipe[]) || []);
    };

    fetchRecipe();
  }, []);

  return (
    <div className="home">
      <Header />

      <main>
        <Banner />
        <DeliciousSection items={CATEGORY} recipes={recipes} />
        <CategorySection />
        <FormSection />
        <CollectSection />
        <LastRecipeSection recipes={recipes} />
      </main>

      <footer className="bg-tertiary px-12 flex flex-col md:px-50 lg:px-42 lg:my-auto lg:mx-0">
        <div className="flex flex-col md:flex-row justify-between md:border-b md:hover:border-b-primary">
          <FooterDesc />
          <FooterContact />
        </div>
        <FooterSocial />
      </footer>
    </div>
  );
};

export default HomePage;
