import React from "react";
import logoImage from "@/assets/images/logo/logo.svg";

import iconMenu from "@/assets/images/header/menu.svg";
import iconSearch from "@/assets/images/header/search.svg";
import avata from "@/assets/images/header/avata-header.png";
import iconDropdown from "@/assets/images/header/arrow-down.svg";

const Header: React.FC = () => {
  return (
    <>
      <header className="mx-12 md:mx-102 lg:mx-42">
        <div className="w-full h-66 py-21 md:h-124 md:pt-37">
          <nav className="flex justify-between cursor-pointer">
            <h1>
              <a href="#">
                <img
                  src={logoImage}
                  className="w-110 md:w-160"
                  alt="Logo"
                />
              </a>
            </h1>
            <ul className="hidden font-sans text-xs flex flex-col items-center gap-48 lg:flex lg:flex-row">
              <li className="navbar__navigation__item flex flex-row px-20 ">
                <a href="index.html" className="hover:text-blue-500 mb-0">
                  Home page
                </a>
                <img
                  src={iconDropdown}
                  className=""
                  alt="icon dropdown"
                />
              </li>
              <li className="navbar _navigation__item flex px-20">

                <a href="category.html" className="font-sans text-xs">
                  Recipe Page
                </a>
                <img
                  src={iconDropdown}
                  className=""
                  alt="icon dropdown"
                />
              </li>
              <li className="navbar__navigation__item dropdown flex px-20">

                <a href="#" className="hover:text-blue-500 mb-0 ">Pages</a>
                <img
                  src={iconDropdown}
                  className=""
                  alt="icon dropdown"
                />
                <div className="dropdown-content">
                  <a href="category.html">Category</a>
                  <a href="favorites.html">Favorites</a>
                  <a href="archive.html">Archive</a>
                </div>
              </li>
              <li className="navbar__navigation__item dropdown">

                <a href="#" className="hover:text-blue-500 mb-0 ">Elements</a>
                <div className="dropdown-content">
                  <a href="about.html">About</a>
                  <a href="#">Blog</a>
                </div>
              </li>
              <li className="navbar__navigation__item">
                <a href="login.html" className="hover:text-blue-500 mb-0">
                  Login
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-24">
              <a href="search.html">
                <img
                  src={iconSearch}
                  className="w-27 h-27"
                  alt="Picture search"
                />
              </a>
              <img
                src={avata}
                className="navbar__icon-avata"
                alt="Picture avata"
              />
              <input type="checkbox" id="check" />
              <label htmlFor="check" className="checkbtn">
                <img src={iconMenu} className="navbar__icon-menu" alt="Menu" />
              </label>
              <label htmlFor="check" className="nav-overlay"></label>

              <ul className="navbar__navigation navbar__navigation--mobile font-sans text-xs">
                <li className="navbar__navigation__item">
                  <a href="index.html" className="hover:text-blue-500 mb-0">
                    Home page
                  </a>
                  <img
                  src={iconDropdown}
                  className=""
                  alt="icon dropdown"
                />
                </li>
                <li className="navbar__navigation__item">
                  <a href="category.html" className="hover:text-blue-500 mb-0">
                    Recipe Page
                  </a>
                  <img
                  src={iconDropdown}
                  className=""
                  alt="icon dropdown"
                />
                </li>
                <li className="navbar__navigation__item dropdown">
                  <a href="#" className="hover:text-blue-500 mb-0">Pages</a>
                  <div className="dropdown-content">
                    <a href="category.html">Category</a>
                    <a href="favorites.html">Favorites</a>
                    <a href="archive.html">Archive</a>
                  </div>
                </li>
                <li className="navbar__navigation__item dropdown">
                  <a href="#" className="hover:text-blue-500 mb-0 ">Elements</a>
                  <div className="dropdown-content">
                    <a href="about.html">About</a>
                    <a href="#">Blog</a>
                  </div>
                </li>
                <li className="navbar__navigation__item">
                  <a href="login.html" className="hover:text-blue-500 mb-0">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
