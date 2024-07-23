import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import {
  Header,
  PrepTime,
  Feedback,
  FooterSocial,
  FooterContact,
  FooterDesc,
} from "components";

// Service
import RecipeService from "services/recipe";

// Type
import { Recipe } from "type/recipe";

// Partials
import { Statistics, Content, Recipes, Interact, Comment } from "partials";

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipeData, setRecipeData] = useState<Recipe | null>(null);
  const recipeService = new RecipeService();

  useEffect(() => {
    const fetchRecipe = async () => {
      if (id) {
        const recipeResponse = await recipeService.getById(id);

        if (recipeResponse.error) {
          console.error("recipe-detail", recipeResponse.error.message);
          return;
        }
        setRecipeData(recipeResponse.data as Recipe);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipeData) {
    return <p>Recipe not found!</p>;
  }

  return (
    <>
      <header className="mx-12 md:mx-102 lg:mx-30">
        <Header />
      </header>

      <main>
        <Statistics />
        <Content recipeData={recipeData} />
        <PrepTime recipe={recipeData} />
        <Recipes recipeData={recipeData} />
        <Feedback />
        <Interact />
        <Comment />
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

export default RecipeDetail;
