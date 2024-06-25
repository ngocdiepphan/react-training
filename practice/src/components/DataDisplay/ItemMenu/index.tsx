import React from "react";
import { Link } from "react-router-dom";
import iconDropdown from "@/assets/images/header/arrow-down.svg";

const ItemMenu: React.FC = () => {
  return (
    <>
      <ul className="font-sans text-xs md:text-sm flex-col items-center lg:flex lg:flex-row absolute right-12 top-80 md:right-102 md:top-102 p-32 bg-blue-200 rounded-tl-3xl rounded-bl-3xl lg:hidden">
        <li className="flex flex-row items-center gap-8 py-12">
          <a href="#" className="hover:text-blue-500 mb-0">
            Home page
          </a>
          <img src={iconDropdown} className="" alt="icon dropdown" />
        </li>
        <li className="flex flex-row items-center gap-8 py-12">
          <a href="#" className="hover:text-blue-500 mb-0">
            Recipe Page
          </a>
          <img src={iconDropdown} className="" alt="icon dropdown" />
        </li>
        <li className="flex flex-row items-center gap-8 py-12">
          <a href="#" className="hover:text-blue-500 mb-0">
            Pages
          </a>
          <img src={iconDropdown} className="" alt="icon dropdown" />
        </li>
        <li className="py-12">
          <a href="#" className="hover:text-blue-500 mb-0 ">
            Elements
          </a>
        </li>
        <li className="">
          <Link to="/sign-in" className="hover:text-blue-500 mb-0">
            Login
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ItemMenu;
