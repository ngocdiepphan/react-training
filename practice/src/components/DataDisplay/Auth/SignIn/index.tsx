import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../../Inputs/TextField";
import Button from "../../../Inputs/Buttons";
import { validateEmail, validateMinLength } from "helpers";

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangeEmail = (value: string) => {
    setEmail(value);
    setError("");
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
    setError("");
  };

  // const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };

  const handleSignIn = () => {
    // navigate("/homepage");
    navigate("/dashboard");
  };
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center pt-60">
      <form
        className="bg-primary p-8 rounded-lg shadow-md mt-8 mb-64 w-420 h-420 mx-4 px-30 pt-20"
        onSubmit={handleSignIn}
      >
        <div className="mb-4">
          <InputField
            label="Email"
            type="text"
            id="email"
            name="email"
            variant="primary"
            value={email}
            onChange={(e) => handleChangeEmail(e.target.value)}
            errorMessage={validateEmail(email) || error}
          />
        </div>
        <div className="mb-4">
          <InputField
            label="Password"
            type="password"
            id="password"
            name="password"
            variant="primary"
            value={password}
            onChange={(e) => handleChangePassword(e.target.value)}
            errorMessage={validateMinLength("Password", password, 8) || error}
          />
        </div>
        <Button type="submit" variant="submit" onClick={handleSignIn}>
          Sign In
        </Button>
        <div id="display-data"></div>
        <Link
          to="/sign-up"
          className="block text-center mt-6 text-teal-500 font-semibold hover:underline"
        >
          Create New Account
        </Link>
      </form>
    </div>
  );
};

export default SignInForm;
