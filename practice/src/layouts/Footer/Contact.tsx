import React from "react";

const FooterContact: React.FC = () => {
  return (
    <section className="flex flex-col md:pr-12 lg:pr-80 md:flex-row md:justify-between md:items-start md:gap-50 md:mt-72 ">
      <div className="flex items-center justify-center border-b border-b-borderPrimary hover:border-b-primary md:border-b-0 md:flex-col md:items-start hover:border-solid">
        <h4 className="mt-12 text-primary font-sans text-sm mb-16 md:text-base">
          Tastebite
        </h4>

        <span className="bg-dropdown cursor-pointer ml-auto md:hidden w-9 h-5"></span>
        <ul className="">
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-8">
            About us
          </li>
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-8">
            Careers
          </li>
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-8">
            Contact us
          </li>
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-8">
            Feedback
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center border-b border-b-borderPrimary hover:border-b-primary md:border-b-0 md:flex-col md:items-start hover:border-solid">
        <h4 className="mt-12 text-primary font-sans text-sm mb-16 md:text-base">
          Legal
        </h4>
        <span className="bg-dropdown cursor-pointer ml-auto md:hidden w-9 h-5"></span>
        <ul className="">
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-8">
            Terms
          </li>
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-8">
            Conditions
          </li>
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-8">
            Cookies
          </li>
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-8">
            Copyright
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center border-b border-b-borderPrimary hover:border-b-primary md:border-b-0 md:flex-col md:items-start hover:border-solid">
        <h4 className="mt-12 text-primary font-sans text-sm mb-16 md:text-base">
          Follow
        </h4>
        <span className="bg-dropdown cursor-pointer ml-auto md:hidden w-9 h-5"></span>
        <ul className="">
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-8">
            Facebook
          </li>
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-8">
            Twitter
          </li>
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-8">
            Instagram
          </li>
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-8">
            Youtube
          </li>
        </ul>
      </div>
    </section>
  );
};
export default FooterContact;
