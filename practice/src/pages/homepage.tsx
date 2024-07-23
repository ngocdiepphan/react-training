import React, { useState, useEffect } from "react";

// Components
import {
  Header,
  FooterSocial,
  FooterContact,
  FooterDesc,
} from "components";

// Section
import {Banner, DeliSection, CollectSection, CateSection, FormSection, LastSection } from "sections/homes";

// Image
import imgBanner from "../../public/assets/images/banner/banner.png";

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
      <header className="mx-12 md:mx-102 lg:mx-30">
        <Header />
      </header>

      <main>
        <Banner
          imgBanner={imgBanner}
          title="Mighty Super Cheesecake"
          description="Look no further for a creamy and ultra smooth classic cheesecake recipe! No one can deny its simple decadence."
        />
        <DeliSection items={items} />
        <CateSection />
        <FormSection />
        <CollectSection />
        <LastSection recipes={recipes} />
      </main>

      <footer className="bg-tertiary px-12 flex flex-col md:px-50 lg:px-42 lg:my-auto lg:mx-0">
        <div className="flex flex-col md:flex-row justify-between md:border-b md:hover:border-b-primary">
          <FooterDesc />
          <div className="flex flex-col md:pr-12 lg:pr-80 md:flex-row md:justify-between md:items-start md:gap-50 md:mt-72 ">
            <FooterContact />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:mt-27">
          <FooterSocial />
          <p className="font-sans flex text-xs text-secondary mb-24 md:mr-auto md:items-end">
            © 2020 Tastebite - All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
