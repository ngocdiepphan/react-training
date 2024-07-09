import React from "react";
import Header from "../components/DataDisplay/Layouts/Header";
import { recipe } from "../mocks/recipe";
import NutritionFacts from "../components/DataDisplay/Nutrition/index";
import Ingredient from "../components/DataDisplay/Ingredient";
import Instruction from "../components/DataDisplay/Instruction";
import PrepTime from "../components/DataDisplay/PrepTime/index";
import { profileData } from "../mocks/profile";
import Profiles from "../components/DataDisplay/Profile/index";
import Feedback from "../components/DataDisplay/Feedback";
import Rating from "../components/DataDisplay/RatingStar";
import Button from "../components/Inputs/Buttons/index";
import FooterSocial from "components/DataDisplay/Layouts/Footer/Social";
import Banner from "components/DataDisplay/Banner";
import CreateDate from "components/DataDisplay/CreatDate";
import FooterContact from "components/DataDisplay/Layouts/Footer/Contact";
import imgBanner from "../../public/assets/images/banner/banner.png";
import Delicious from "components/DataDisplay/Delicious";
import Category from "components/DataDisplay/Category";
import Form from "components/Inputs/Form";

const HomePage: React.FC = () => {
  const recipeData = recipe[1];
  const nutritionData = recipeData.nutrition;
  const ingredientData = recipeData.ingredient;
  const instructionData = recipeData.instruction;
  const ratingData = recipeData.ratings;

  return (
    <div className="">
      <header className="mx-12 md:mx-102 lg:mx-30">
        <Header />
      </header>

      {/* --START MAIN-- */}
      {/* -- START HEADER SECTION -- */}
      <section className="mx-12 md:mx-102 lg:mx-30 flex flex-col lg:flex-row">
        <img className="banner__img lg:max-w-550" src={imgBanner} alt="Picture banner" />
        <div className="banner__content flex flex-col gap-20 bg-bannerPrimary pt-30 pr-35 pl-24 h-318 lg:h-420 md:pt-50 md:pl-48 md:pb-35 md:h-331 lg:pt-96 lg:pl-30 lg:pr-20">
          <div className="banner__introduce flex gap-10 font-sans text-xs lg:w-350">
            <span className="w-20 h-20 bg-arrow-up"></span>
            <p>85% would make this again</p>
          </div>
          <h2 className="banner__heading font-serif text-3xl md:text-5xl w-180 md:w-full ">
            Mighty Super Cheesecake
          </h2>
          <p className="banner__description font-sans text-sm md:text-lg lg:text-base pr-60 md:w-450 lg:max-w-362">
            Look no further for a creamy and ultra smooth classic cheesecake
            recipe! no one can deny its simple decadence.
          </p>
          <Banner />
        </div>
      </section>
      {/*  -- END HEADER SECTION --*/}

      {/* -- START DELICIOUS FOOD --*/}
      <section className="mx-12 md:mx-102 lg:mx-30">
      <h3 className="delicious__title text-2xl mt-37 mb-35 font-serif md:text-4xl md:mt-60">Super Delicious</h3>
      <ul className="delicious__list" id="delicious-recipes">
        <Delicious />
      </ul>
    </section>

    <section className="delicious mx-12 md:mx-102 lg:mx-30">
      <h3 className="delicious__title text-2xl mt-37 mb-35 font-serif md:text-4xl md:mt-60">Sweet Tooth</h3>
      <ul className="delicious__list" id="sweet-recipes">
        <Delicious />
      </ul>
    </section>
      {/* -- END DELICIOUS FOOD-- */}
      {/* --START CATEGORIES-- */}
      <section className="mx-12 md:mx-102 lg:mx-30">
      <h3 className="text-2xl mt-37 mb-35 font-serif md:text-4xl md:mt-60">Popular Categories</h3>
      <ul className="category__list">
        <Category />
      </ul>
    </section>
      {/* -- END CATEGORIES-- */}

      {/* -- START SUBSCRIPTION FORM -- */}
    <section className="flex flex-col text-center bg-subscriptPrimary mt-64 px-16 md:px-102 lg:px-278 py-66 md:py-96">
      <h3 className="subscription__title font-serif text-4xl md:text-large">Deliciousness to your inbox</h3>
      <p className="subscription__intro text-xs md:text-2xl">
        Enjoy weekly hand picked recipes and recommendations
      </p>
      <div className="subscription__form">
        <Form />
      </div>
      <p className="text-small">
        By joining our newsletter you agree to our Terms and Conditions
      </p>
    </section>
    {/* -- END SUBSCRIPTION FORM -- */}




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
      <FooterSocial />
      <Banner />
      <CreateDate />
      <FooterContact />

      <Button type="button" variant="confirm" children="add user" />
      <Button type="button" variant="confirm">
        Save
      </Button>
    </div>
  );
};

export default HomePage;
