import React, { useState, useEffect } from "react";

// Components
import { Header, FooterSocial, FooterContact, FooterDesc } from "components";

// Partials
import {
  Banner,
  DeliSection,
  CollectSection,
  CateSection,
  FormSection,
  LastSection,
} from "partials";

// Service
import RecipeService from "services/recipe";

// Type
import { Recipe } from "type/recipe";

const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const recipeService = new RecipeService();
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

  const items = [
    { title: "Super Delicious", id: "delicious-recipes", collection: 4 },
    { title: "Sweet Tooth", id: "sweet-recipes", collection: 3 },
  ];

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Banner />
        <DeliSection items={items} />
        <CateSection />
        <FormSection />
        <CollectSection />
        <LastSection recipes={recipes} />
      </main>

      <footer className="bg-tertiary px-12 flex flex-col md:px-50 lg:px-42 lg:my-auto lg:mx-0">
        <div className="flex flex-col md:flex-row justify-between md:border-b md:hover:border-b-primary">
          <FooterDesc />
          <FooterContact />
        </div>
        <FooterSocial />
      </footer>
    </>
  );
};

export default HomePage;
