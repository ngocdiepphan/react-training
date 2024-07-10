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
import FooterSocial from "../components/DataDisplay/Layouts/Footer/Social";
import Banner from "../components/DataDisplay/Banner";
import FooterContact from "../components/DataDisplay/Layouts/Footer/Contact";
import imgBanner from "../../public/assets/images/banner/banner.png";
import Delicious from "../components/DataDisplay/Delicious";
import Category from "../components/DataDisplay/Category";
import Form from "../components/Inputs/Form";
import Collection from "../components/DataDisplay/Collection";
import LastRecipe from "../components/DataDisplay/LastRecipe";
import FooterDesc from "../components/DataDisplay/Layouts/Footer/Description";

const HomePage: React.FC = () => {
  const recipeData = recipe[1];
  const nutritionData = recipeData.nutrition;
  const ingredientData = recipeData.ingredient;
  const instructionData = recipeData.instruction;
  const ratingData = recipeData.ratings;

  return (
    <>
      {/* -- START HEADER-- */}
      <header className="mx-12 md:mx-102 lg:mx-30">
        <Header />
      </header>
      {/* -- END HEADER -- */}

      {/* --START MAIN-- */}
      <main>
        {/* -- START HEADER SECTION -- */}
        <section className="mx-12 md:mx-102 lg:mx-30 flex flex-col lg:flex-row">
          <img
            className="lg:max-w-550"
            src={imgBanner}
            alt="Picture banner"
          />
          <div className="flex flex-col gap-20 bg-bannerPrimary pt-30 pr-35 pl-24 h-318 lg:h-420 md:pt-50 md:pl-48 md:pb-35 md:h-331 lg:pt-96 lg:pl-30 lg:pr-20">
            <div className="flex gap-10 font-sans text-xs lg:w-350">
              <span className="w-20 h-20 bg-arrow-up"></span>
              <p>85% would make this again</p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl w-180 md:w-full ">
              Mighty Super Cheesecake
            </h2>
            <p className="font-sans text-sm md:text-lg lg:text-base pr-60 md:w-450 lg:max-w-362">
              Look no further for a creamy and ultra smooth classic cheesecake
              recipe! no one can deny its simple decadence.
            </p>
            <Banner />
          </div>
        </section>
        {/*  -- END HEADER SECTION --*/}

        {/* -- START DELICIOUS FOOD --*/}
        <section className="mx-12 md:mx-102 lg:mx-30">
          <h3 className="text-2xl mt-37 mb-35 font-serif md:text-4xl md:mt-60">
            Super Delicious
          </h3>
          <ul className="" id="delicious-recipes">
            <Delicious />
          </ul>
        </section>

        <section className="delicious mx-12 md:mx-102 lg:mx-30">
          <h3 className="text-2xl mt-37 mb-35 font-serif md:text-4xl md:mt-60">
            Sweet Tooth
          </h3>
          <ul className="" id="sweet-recipes">
            <Delicious />
          </ul>
        </section>
        {/* -- END DELICIOUS FOOD-- */}

        {/* --START CATEGORIES-- */}
        <section className="mx-12 md:mx-102 lg:mx-30">
          <h3 className="text-2xl mt-37 mb-35 font-serif md:text-4xl md:mt-60">
            Popular Categories
          </h3>
          <ul className="">
            <Category />
          </ul>
        </section>
        {/* -- END CATEGORIES-- */}

        {/* -- START SUBSCRIPTION FORM -- */}
        <section className="flex flex-col text-center gap-20 bg-subscriptPrimary mt-64 px-16 md:px-102 lg:px-278 py-66 md:py-96">
          <h3 className="font-serif text-4xl md:text-large leading-none">
            Deliciousness to your inbox
          </h3>
          <p className="text-xs md:text-2xl">
            Enjoy weekly hand picked recipes and recommendations
          </p>
          <Form />
          <p className="text-small">
            By joining our newsletter you agree to our Terms and Conditions
          </p>
        </section>
        {/* -- END SUBSCRIPTION FORM -- */}

        {/* -- START COLLECTIONS --*/}
        <section className="mx-12 md:mx-102 lg:mx-30">
          <h3 className="text-2xl md:text-medium font-serif mt-60 mb-35">
            Hand-Picked Collections
          </h3>
          <ul className="w-full ">
            <Collection />
          </ul>
        </section>
        {/*-- END COLLECTIONS --*/}

        {/*-- START RECIPES -- */}
        <section className="mx-12 md:mx-102 lg:mx-30">
          <h4 className="text-2xl mt-37 mb-35 font-serif md:text-4xl md:mt-60">
            Latest Recipes
          </h4>
          <ul className="" id="latest-recipes">
            <LastRecipe />
          </ul>
          <Button type="button" variant="primary">
            Load More
          </Button>
        </section>
        {/*-- END RECIPES -- */}
      </main>
      {/* -- END MAIN --*/}

      <footer className="bg-tertiary px-12 flex flex-col md:px-50 lg:px-42 lg:my-auto lg:mx-0">
        {/* -- START FOOTER */}
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

        {/* -- END FOOTER */}
      </footer>


      <Button type="button" variant="confirm" children="add user" />
      <Button type="button" variant="confirm">
        Save
      </Button>
    </>
  );
};

export default HomePage;
