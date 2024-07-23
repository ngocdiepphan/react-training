import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Component
import { ItemMenu } from "components";

// Type
import { UserProps } from "type/user";

// Image
import logoImage from "../../../public/assets/images/logo/Logo.png";

const Navbar: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [user, setUser] = useState<UserProps | null>(null);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <nav className="flex justify-between cursor-pointer">
        <h1>
          <a href="#">
            <img src={logoImage} className="w-110 md:w-160" alt="Logo" />
          </a>
        </h1>
        <ul className="hidden lg:flex font-sans text-sm flex-col items-center gap-48 lg:flex-row">
          <li className="flex flex-row items-center gap-8">
            <a href="index.html" className="hover:text-blue-500 mb-0">
              Home Page
            </a>
            <span className="bg-dropdown w-9 h-5"></span>
          </li>
          <li className="flex flex-row items-center gap-8">
            <a href="category.html" className="">
              Recipe Page
            </a>
            <span className="bg-dropdown w-9 h-5"></span>
          </li>
          <li className="flex flex-row items-center gap-8">
            <a href="#" className="hover:text-blue-500 mb-0 ">
              Pages
            </a>
            <span className="bg-dropdown w-9 h-5"></span>
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
          <span className="bg-search w-32 h-30 bg-no-repeat"></span>
          {user && (
            <img
              className="w-32 h-32 rounded-full"
              src={user.img}
              alt={`Avatar of ${user.username}`}
            />
          )}
          <span
            className="bg-menu w-24 h-24 lg:hidden"
            onClick={toggleMenu}
          ></span>
        </div>
      </nav>
      {menuVisible && <ItemMenu />}
    </>
  );
};

export default Navbar;
