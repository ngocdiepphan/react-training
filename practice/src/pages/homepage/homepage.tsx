import React from "react";
import Header from "../../components/DataDisplay/Layouts/Header";
import { recipe } from "@/mocks/recipe";
import NutritionFacts from "@/components/DataDisplay/Nutrition/index";
import Ingredient from "@/components/DataDisplay/Ingredient";
import Instruction from "@/components/DataDisplay/Instruction";
import PrepTime from "@/components/DataDisplay/PrepTime/index";
import InfoUser from "@/components/DataDisplay/InfoUser/index";
import { profileData } from "@/mocks/profile";
import Reply from "@/components/DataDisplay/Reply/index";
import Favorite from "@/components/DataDisplay/Favorite";

const HomePage: React.FC = () => {
  const recipeData = recipe[1];
  const nutritionData = recipeData.nutrition;
  const ingredientData = recipeData.ingredient;
  const instructionData = recipeData.instruction;

  return (
    <div>
      <Header />
      <NutritionFacts data={nutritionData} />
      <Ingredient ingredients={ingredientData} />
      <Instruction instruction={instructionData} />
      <PrepTime />
      {profileData.map((profile) => (
        <div key={profile.id} className="profile-wrapper">
          <InfoUser
            id={profile.id}
            name={profile.name}
            status={profile.status}
            img={profile.img}
            reply={profile.reply}
          />
          <Reply replyCount={profile.reply} />
          <Favorite favoriteCount={profile.favorite} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
