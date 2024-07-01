import React from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../../Inputs/TextField";
import Button from "../../../Inputs/Submit";

const SignInForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/homepage");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <form className="bg-white p-8 rounded-lg shadow-md mt-8 mb-64 w-80 md:w-96 lg:w-120 mx-4">
        <div className="mb-4">
          <InputField label="Email" type="text" id="email" name="email" />
        </div>
        <div className="mb-4">
          <InputField
            label="Password"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <Button type="submit"  onClick={handleSignIn}>Sign In</Button>
        <div id="display-data"></div>
        <Link
          to="/sign-up"
          className="block text-center mt-6 text-teal-500 font-semibold hover:underline"
        >
          Create New Account
        </Link>
        <div id="display-data"></div>
      </form>
    </div>
  );
};

export default SignInForm;
