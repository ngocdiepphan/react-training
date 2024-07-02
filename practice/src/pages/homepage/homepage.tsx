import React from "react";
import Header from "../../components/DataDisplay/Layouts/Header";
import { recipe } from "@/mocks/recipe";
import NutritionFacts from "@/components/DataDisplay/Nutrition/index";
import Ingredient from "@/components/DataDisplay/Ingredient";
import Instruction from "@/components/DataDisplay/Instruction";
import PrepTime from "@/components/DataDisplay/PrepTime/index";
import { profileData } from "@/mocks/profile";
import Profiles from "@/components/DataDisplay/Profile/index";
import Feedback from "@/components/DataDisplay/Feedback";
import Rating from "@/components/DataDisplay/RatingStar";
import Button from "@/components/Inputs/Buttons/index";

const HomePage: React.FC = () => {
  const recipeData = recipe[1];
  const nutritionData = recipeData.nutrition;
  const ingredientData = recipeData.ingredient;
  const instructionData = recipeData.instruction;
  const ratingData = recipeData.ratings;

  return (
    <div>
      <Header />
      <NutritionFacts data={nutritionData} />
      <Ingredient ingredients={ingredientData} />
      <Instruction instruction={instructionData} />
      <PrepTime />
      <Profiles profiles={profileData} />
      <Feedback />
      <Rating ratings={ratingData} />
      <Button type="button" variant="primary">
        Load More
      </Button>
      <Button type="button" variant="loadComment">
        Load 25 more comments
      </Button>
      <Button type="button" variant="post">
        Post comment
      </Button>
    </div>
  );
};

export default HomePage;
