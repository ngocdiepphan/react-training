import React from "react";
import arrowDropdown from "@/assets/images/footer/arrow-down.svg";

const FooterContact: React.FC = () => {
  return (
    <>
      <article className="flex items-center justify-center border border-solid border-gray-50 hover:border-b-primary md:border-b-0 md:flex-col md:items-start hover:border-solid">
        <h4 className="mt-12 text-primary font-sans text-sm mb-16 md:text-base">
          Tastebite
        </h4>
        <img
          className="cursor-pointer ml-auto md:hidden"
          src={arrowDropdown}
          alt="Arrow dropdown"
        />
        <ul className="">
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-14">
            About us
          </li>
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-14">
            Careers
          </li>
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-14">
            Contact us
          </li>
          <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-14">
            Feedback
          </li>
        </ul>
      </article>
      <article className="flex items-center justify-center border border-solid border-gray-50 hover:border-b-primary md:border-b-0 md:flex-col md:items-start hover:border-solid">
          <h4 className="mt-12 text-primary font-sans text-sm mb-16 md:text-base">Legal</h4>
          <img className="cursor-pointer ml-auto md:hidden"
          src={arrowDropdown}
          alt="Arrow dropdown" />
          <ul className="">
            <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-14">Terms</li>
            <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-14">Conditions</li>
            <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-14">Cookies</li>
            <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-14">Copyright</li>
          </ul>
        </article>

        <article className="flex items-center justify-center border border-solid border-gray-50 hover:border-b-primary md:border-b-0 md:flex-col md:items-start hover:border-solid">
          <h4 className="mt-12 text-primary font-sans text-sm mb-16 md:text-base">Follow</h4>
          <img className="cursor-pointer ml-auto md:hidden"
          src={arrowDropdown}
          alt="Arrow dropdown" />
          <ul className="">
            <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-14">Facebook</li>
            <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-14">Twitter</li>
            <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-14">Instagram</li>
            <li className="md:hover:text-primary hidden md:hover:text-lg md:block md:text-secondary md:font-sans md:mb-14">Youtube</li>
          </ul>
        </article>
    </>
  );
};
export default FooterContact;
