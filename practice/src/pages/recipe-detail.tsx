import React from "react";
import { useParams } from "react-router-dom";
import { recipe } from "mocks/recipe";
import CreateDate from "components/CreatDate";
import Header from "components/Layouts/Header";
import Creator from "components/Creator";
import Rating from "components/RatingStar";
import PrepTime from "components/PrepTime";
import Ingredient from "components/Ingredient";
import NutritionFacts from "components/Nutrition";
import Instruction from "components/Instruction";
import Feedback from "components/Feedback";
import Profiles from "../components/Profile/index";
import { profileData } from "../mocks/profile";
import Button from "components/Buttons";
import FooterContact from "components/Layouts/Footer/Contact";
import FooterDesc from "components/Layouts/Footer/Description";
import FooterSocial from "components/Layouts/Footer/Social";

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipeData = recipe.find((r) => r.id === id);

  if (!recipeData) {
    return <p>Recipe not found</p>;
  }

  return (
    <>
      {/* -- START HEADER-- */}
      <header className="mx-12 md:mx-102 lg:mx-30">
        <Header />
      </header>
      {/* -- END HEADER -- */}

      {/* --START MAIN-- */}
      <main>
        {/* -- START RECIPE DETAIL --*/}
        <section className="mx-12 md:mx-102 lg:mx-30">
          <div id="recipe-details">
            <div className="flex flex-row items-center justify-between gap-10 font-sans text-xs-small md:text-sm">
              <div className="flex flex-row justify-end gap-16">
                <span className="w-20 h-20 bg-arrow-up"></span>
                <p>85% would make this again</p>
              </div>
              <div className="flex flex-row justify-end gap-16">
                <span className="bg-upload-primary md:bg-upload-secondary w-20 h-20 md:w-24 md:h-30 bg-no-repeat"></span>
                <span className="md:bg-save-secondary bg-save-primary w-14 h-16 md:w-22 md:h-27"></span>
              </div>
            </div>

            <article className="recipes-detail">
              <h4 className="font-serif text-2xl md:text-6xl">
                {recipeData.name}
              </h4>
              <div className="flex flex-col mt-24 pb-37 border-b border-b-borderPrimary hover:border-b-primary md:flex-row md:pb-37">
                <ul className="flex flex-row gap-24 items-center">
                  <Creator recipe={recipeData} />
                  <CreateDate recipe={recipeData} />
                  <li className="flex flex-row gap-5">
                    <span className="bg-reply w-14 h-14 bg-no-repeat"></span>
                    <p className="text-xs-small">25</p>
                  </li>
                  <li>
                    <Rating ratings={recipeData.ratings} />
                  </li>
                </ul>
              </div>
              <p className="font-sans mt-24 mb-35 text-xs md:text-2xl lg:text-xs">
                {recipeData.description}
              </p>
              <img
                className="recipes-detail__img-banner w-full"
                src={recipeData.img}
                alt="Picture banner recipe pages"
              />
            </article>

            <ul className="recipe-pages__custom">
              <PrepTime recipe={recipeData} />
            </ul>

            <div className="flex flex-col md:flex-row md:justify-between mb-72 md:mb-102">
              <div className="recipe-pages__content flex flex-col">
                <Ingredient recipe={recipeData} />
                <NutritionFacts recipe={recipeData} />
              </div>
              <Instruction recipe={recipeData} />
            </div>
          </div>
          {/* -- END RECIPE DETAIL -- */}

          {/* -- START CONTENT COMMENT -- */}
          <section>
            <div className="mb-37 md:mb-40 border-b hover:border-b-8 hover:border-tertiary">
              <Feedback />
            </div>

            <div className="recipe-pages">
              <p className="text-3xl md:text-6xl font-serif">
                Comments
                <sub className="text-base md:text-2xl font-serif">(25)</sub>
              </p>
              <Profiles profiles={profileData} />
              <Button type="button" variant="loadComment">
                Load 25 more comments
              </Button>
            </div>

            <div className="recipe-pages__post">
              <div className="recipe-pages__function">
                <p className="recipe-pages__write">Write a comment</p>
                <p className="recipe-pages__post-comment text-xs md:text-base font-sans">
                  <a
                    href="login.html"
                    className="recipe-pages__login text-tertiary"
                  >
                    Login
                  </a>{" "}
                  to post a comment
                </p>
              </div>

              <div className="recipe-pages__add-comment relative">
                <textarea className=" w-full h-340 bg-tertiary mt-16 mb-37 border-none p-20 lg:h-318"></textarea>
                <Button type="button" variant="post">
                  Post comment
                </Button>
              </div>
            </div>
          </section>
          {/*-- END  CONTENT COMMENT --*/}
        </section>
      </main>
      {/* -- END MAIN --*/}

      {/* -- START FOOTER */}
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
      {/* -- END FOOTER */}
    </>
  );
};

export default RecipeDetail;
