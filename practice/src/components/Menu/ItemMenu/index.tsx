import React from "react";
import { Link } from "react-router-dom";

const ItemMenu: React.FC = () => {
  return (
      <ul className="font-sans text-xs md:text-sm flex-col items-center absolute right-12 top-80 md:right-102 md:top-102 p-32 bg-blue-200 rounded-tl-3xl rounded-bl-3xl lg:hidden">
        <li className="flex flex-row items-center gap-8 py-12">
          <Link to="#" className="hover:text-blue-500 mb-0">
            Home Page
          </Link>
          <span className="bg-dropdown w-9 h-5"></span>
        </li>
        <li className="flex flex-row items-center gap-8 py-12">
          <Link to="#" className="hover:text-blue-500 mb-0">
            Recipe Page
          </Link>
          <span className="bg-dropdown w-9 h-5"></span>
        </li>
        <li className="flex flex-row items-center gap-8 py-12">
          <Link to="#" className="hover:text-blue-500 mb-0">
            Pages
          </Link>
          <span className="bg-dropdown w-9 h-5"></span>
        </li>
        <li className="py-12">
          <Link to="#" className="hover:text-blue-500 mb-0">
            Elements
          </Link>
        </li>
        <li className="">
          <Link to="/sign-in" className="hover:text-blue-500 mb-0">
            Login
          </Link>
        </li>
      </ul>
  );
};

export default ItemMenu;
