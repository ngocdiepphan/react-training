import React, { useState } from "react";
import InputField from "../../../Inputs/TextField";
import Button from "../../../Inputs/Buttons";

const SignUpForm: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center pt-50">
      <form
        className="bg-white rounded-lg shadow-md mt-8 mb-28 w-318 h-450 mx-4 px-30 pt-20"
        id="form-sign-up"
      >
        <InputField
          label="Email"
          type="text"
          id="email"
          name="email"
          variant="primary"
        />
        <InputField
          label="Username"
          type="text"
          id="username"
          name="username"
          variant="primary"
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          variant="primary"
        />
        <InputField
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          variant="primary"
        />
        <Button type="submit" variant="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
