import React from "react";

// Image
import logo from "/images/logo/Logo.png";

const FooterDesc: React.FC = () => {
  return (
    <section className="flex flex-col">
      <a href="#">
        <img
          className="w-110 md:w-160 mt-40 md:mt-72"
          src={logo}
          alt="Picture logo footer"
        />
      </a>
      <p className="font-sans text-sm text-secondary mt-18 mb-56 w-362 md:w-287 md:text-base lg:w-370">
        "On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment
      </p>
    </section>
  );
};
export default FooterDesc;
