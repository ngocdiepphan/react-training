import React from "react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/images/logo/logo.svg";
import iconSearch from "@/assets/images/header/search.svg";
import avata from "@/assets/images/header/avata-header.png";
import iconDropdown from "@/assets/images/header/arrow-down.svg";
import BtnMenu from "@/components/Inputs/Menu/index";
import ItemMenu from "../ItemMenu/index";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex justify-between cursor-pointer">
        <h1>
          <a href="#">
            <img src={logoImage} className="w-110 md:w-160" alt="Logo" />
          </a>
        </h1>
        <ul className="hidden font-sans text-sm flex flex-col items-center gap-48 lg:flex lg:flex-row">
          <li className="flex flex-row items-center gap-8">
            <a href="index.html" className="hover:text-blue-500 mb-0">
              Home Page
            </a>
            <img src={iconDropdown} className="" alt="icon dropdown" />
          </li>
          <li className="flex flex-row items-center gap-8">
            <a href="category.html" className="">
              Recipe Page
            </a>
            <img src={iconDropdown} className="" alt="icon dropdown" />
          </li>
          <li className="flex flex-row items-center gap-8">
            <a href="#" className="hover:text-blue-500 mb-0 ">
              Pages
            </a>
            <img src={iconDropdown} className="" alt="icon dropdown" />
          </li>
          <li className="flex flex-row items-center gap-8">
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

        <div className="flex items-center gap-24">
          <a href="#">
            <img src={iconSearch} className="w-27 h-27" alt="Picture search" />
          </a>
          <img src={avata} className="w-32 h-32" alt="Picture avata" />
          <BtnMenu />
          <ItemMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
