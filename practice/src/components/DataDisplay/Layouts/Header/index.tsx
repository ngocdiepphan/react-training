import React from "react";
import Navbar from "../../Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInForm from "@/components/DataDisplay/Auth/SignIn";

const Header: React.FC = () => {
  return (
    <header className="mx-12 md:mx-102 lg:mx-42">
      <div className="w-full h-66 py-21 md:h-124 md:pt-37">
        <Navbar />
        <Routes>
          <Route path="/sign-in" element={<SignInForm />} />
        </Routes>
      </div>
    </header>
  );
};

export default Header;
