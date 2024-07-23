import React from "react";

// Image
import imgBanner from "/assets/images/banner/banner.png";

const Banner: React.FC = () => {
  return (
    <section className="mx-12 justify-center md:mx-102 lg:mx-30 flex flex-col lg:flex-row">
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
        <h2 className="font-serif text-3xl md:text-5xl w-180 md:w-full">
          "Mighty Super Cheesecake"
        </h2>
        <p className="font-sans text-sm md:text-lg lg:text-base pr-60 md:w-450 lg:max-w-362">
          Look no further for a creamy and ultra smooth classic cheesecake
          recipe! No one can deny its simple decadence.
        </p>
        <div className="w-40 h-40 bg-primary hover:bg-orange-400 ml-auto bg-center flex justify-center items-center">
          <span className="bg-arrow-right w-13 h-13"></span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
