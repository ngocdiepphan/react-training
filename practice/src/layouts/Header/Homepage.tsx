import React from "react";
import { Route, Routes } from "react-router-dom";

// Component
import { Navbar } from "components";

const Header: React.FC = () => {
  return (
    <header>
      <div className="mx-12 md:mx-102 lg:mx-30">
      <div className="w-full h-66 py-21 md:h-124 md:pt-37">
        <Navbar />
      </div>
    </div>
    </header>
  );
};

export default Header;
